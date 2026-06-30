///|
/// A complete CSV audit assembled from parsing, dialect detection, schema
/// inference, missing-value statistics, and column profiling.
pub(all) struct CsvAuditReport {
  dialect : CsvDialect
  table : CsvTable
  parse_issues : Array[CsvParseError]
  quality_issues : Array[CsvAuditQualityIssue]
  inferred_schema : Array[CsvInferredColumnRule]
  missing_summary : CsvTable
  profiles : Array[ColumnProfile]
} derive(Eq, Debug)

///|
/// A table-level data quality issue discovered during audit.
pub(all) struct CsvAuditQualityIssue {
  severity : String
  row : Int
  column : String
  message : String
} derive(Eq, Debug)

///|
/// A data-quality recommendation produced by the audit workflow.
pub(all) struct CsvAuditRecommendation {
  severity : String
  message : String
} derive(Eq, Debug)

///|
/// Numeric quality score for an audit report.
///
/// The score is intentionally compact enough for CLI/CI output while still
/// exposing the dimensions used to calculate the final grade.
pub(all) struct CsvAuditScore {
  score : Int
  grade : String
  risk : String
  structure_score : Int
  completeness_score : Int
  consistency_score : Int
  uniqueness_score : Int
  issue_penalty : Int
  missing_cells : Int
  total_cells : Int
} derive(Eq, Debug)

///|
/// Audit CSV text using the automatically detected dialect.
pub fn audit_csv(input : String) -> CsvAuditReport {
  let dialect = sniff_dialect(input)
  audit_csv_with_dialect(input, dialect)
}

///|
/// Audit CSV text using an explicit dialect.
pub fn audit_csv_with_dialect(
  input : String,
  dialect : CsvDialect,
) -> CsvAuditReport {
  let parsed = parse_table_checked_with_dialect(input, dialect)
  let table = parsed.table
  {
    dialect,
    table,
    parse_issues: parsed.issues,
    quality_issues: audit_quality_issues(table),
    inferred_schema: infer_schema(table),
    missing_summary: table_missing_summary(table),
    profiles: profile_table(table),
  }
}

///|
/// Return true when the audit found no parse or table-quality issues.
pub fn audit_report_ok(report : CsvAuditReport) -> Bool {
  report.parse_issues.length() == 0 && report.quality_issues.length() == 0
}

///|
/// Render a compact status line for terminal use.
pub fn audit_status_text(report : CsvAuditReport) -> String {
  let status = if audit_report_ok(report) { "ok" } else { "issues" }
  "status: \{status}, dialect: \{dialect_name(report.dialect)}, rows: \{report.table.rows.length()}, columns: \{report.table.headers.length()}, parse_issues: \{report.parse_issues.length()}, quality_issues: \{report.quality_issues.length()}"
}

///|
/// Calculate a 0-100 quality score for an audit report.
///
/// Dimensions:
/// - structure: parser/row-shape health
/// - completeness: non-empty cell coverage
/// - consistency: header and table-shape hygiene
/// - uniqueness: duplicate-row risk
pub fn audit_quality_score(report : CsvAuditReport) -> CsvAuditScore {
  let structure_score = audit_clamp_score(
    100 - report.parse_issues.length() * 35,
  )
  let missing_cells = audit_missing_cells(report.profiles)
  let total_cells = audit_total_cells(report.profiles)
  let completeness_score = if total_cells == 0 {
    100
  } else {
    audit_clamp_score(100 - missing_cells * 100 / total_cells)
  }
  let consistency_score = audit_clamp_score(
    100 - audit_consistency_penalty(report.quality_issues),
  )
  let uniqueness_score = audit_clamp_score(
    100 - audit_duplicate_row_count(report.quality_issues) * 12,
  )
  let issue_penalty = audit_issue_penalty(report)
  let weighted = (
      structure_score * 35 +
      completeness_score * 25 +
      consistency_score * 25 +
      uniqueness_score * 15
    ) /
    100
  let score = audit_clamp_score(weighted - issue_penalty / 5)
  {
    score,
    grade: audit_grade_for_score(score),
    risk: audit_risk_for_score(score),
    structure_score,
    completeness_score,
    consistency_score,
    uniqueness_score,
    issue_penalty,
    missing_cells,
    total_cells,
  }
}

///|
/// Audit CSV text and return only the quality score model.
pub fn audit_csv_score(input : String) -> CsvAuditScore {
  audit_quality_score(audit_csv(input))
}

///|
/// Render the quality score as a compact CLI line.
pub fn audit_quality_score_text(score : CsvAuditScore) -> String {
  "score: \{score.score} (\{score.grade}), risk: \{score.risk}, structure: \{score.structure_score}, completeness: \{score.completeness_score}, consistency: \{score.consistency_score}, uniqueness: \{score.uniqueness_score}"
}

///|
/// Discover table-level quality issues that are not parser errors.
pub fn audit_quality_issues(table : CsvTable) -> Array[CsvAuditQualityIssue] {
  let issues : Array[CsvAuditQualityIssue] = Array::new()
  audit_collect_header_issues(issues, table)
  audit_collect_empty_row_issues(issues, table)
  audit_collect_empty_column_issues(issues, table)
  audit_collect_duplicate_row_issues(issues, table)
  issues
}

///|
/// Render audit quality issues as Markdown.
pub fn audit_quality_issues_markdown(
  issues : Array[CsvAuditQualityIssue],
) -> String {
  let out = StringBuilder()
  out.write_string("## Quality Issues\n\n")
  if issues.length() == 0 {
    out.write_string("No table quality issues.\n")
  } else {
    out.write_string("| severity | row | column | message |\n")
    out.write_string("| --- | ---: | --- | --- |\n")
    for issue in issues {
      out.write_string("| ")
      audit_write_markdown_cell(out, issue.severity)
      out.write_string(" | \{issue.row} | ")
      audit_write_markdown_cell(out, issue.column)
      out.write_string(" | ")
      audit_write_markdown_cell(out, issue.message)
      out.write_string(" |\n")
    }
  }
  out.to_string()
}

///|
/// Generate actionable recommendations from audit findings.
pub fn audit_recommendations(
  report : CsvAuditReport,
) -> Array[CsvAuditRecommendation] {
  let recommendations : Array[CsvAuditRecommendation] = Array::new()
  if report.parse_issues.length() > 0 {
    recommendations.push({
      severity: "error",
      message: "Fix structural parse issues before trusting schema or profile output.",
    })
  }
  for issue in report.quality_issues {
    recommendations.push({ severity: issue.severity, message: issue.message })
  }
  if dialect_name(report.dialect) != "comma" {
    recommendations.push({
      severity: "info",
      message: "Detected \{dialect_name(report.dialect)} dialect; use parse_table_auto or the detected dialect when parsing this source.",
    })
  }
  for rule in report.inferred_schema {
    if rule.empty > 0 {
      recommendations.push({
        severity: "warning",
        message: "Column `\{rule.name}` has \{rule.empty} missing value(s); keep it optional or fill defaults before strict validation.",
      })
    }
  }
  for profile in report.profiles {
    match profile.inferred {
      IntegerColumn | FloatColumn =>
        if profile.non_empty > 0 {
          recommendations.push({
            severity: "info",
            message: "Column `\{profile.name}` looks numeric and can be used for aggregation or range validation.",
          })
        }
      _ => ()
    }
  }
  if recommendations.length() == 0 {
    recommendations.push({
      severity: "info",
      message: "No immediate data-quality issues were found in this sample.",
    })
  }
  recommendations
}

///|
/// Render audit recommendations as Markdown.
pub fn audit_recommendations_markdown(report : CsvAuditReport) -> String {
  let recommendations = audit_recommendations(report)
  let out = StringBuilder()
  out.write_string("## Recommendations\n\n")
  for item in recommendations {
    out.write_string("- **")
    audit_write_markdown_cell(out, item.severity)
    out.write_string("**: ")
    audit_write_markdown_cell(out, item.message)
    out.write_char('\n')
  }
  out.to_string()
}

///|
/// Render a complete audit report as Markdown.
pub fn audit_report_markdown(report : CsvAuditReport) -> String {
  let out = StringBuilder()
  out.write_string("# CSV Audit Report\n\n")
  audit_write_summary_markdown(out, report)
  out.write_string("\n## Quality Score\n\n")
  audit_write_score_markdown(out, audit_quality_score(report))
  out.write_string("\n## Parse Issues\n\n")
  if report.parse_issues.length() == 0 {
    out.write_string("No parse issues.\n")
  } else {
    out.write_string("| line | column | message |\n")
    out.write_string("| ---: | ---: | --- |\n")
    for issue in report.parse_issues {
      out.write_string("| \{issue.line} | \{issue.column} | ")
      audit_write_markdown_cell(out, issue.message)
      out.write_string(" |\n")
    }
  }
  out.write_char('\n')
  out.write_string(audit_quality_issues_markdown(report.quality_issues))
  out.write_string("\n## Inferred Schema\n\n")
  out.write_string(audit_schema_table_markdown(report.inferred_schema))
  out.write_string("\n## Missing Values\n\n")
  out.write_string(table_to_markdown(report.missing_summary))
  out.write_string("\n\n## Column Profile\n\n")
  audit_write_profile_markdown(out, report.profiles)
  out.write_char('\n')
  out.write_string(audit_recommendations_markdown(report))
  out.to_string()
}

///|
/// Render a complete audit report as a standalone HTML document.
pub fn audit_report_html(report : CsvAuditReport) -> String {
  let out = StringBuilder()
  out.write_string("<!doctype html>\n<html>\n<head>\n")
  out.write_string("  <meta charset=\"utf-8\">\n")
  out.write_string("  <title>CSV Audit Report</title>\n")
  out.write_string("  <style>")
  out.write_string(
    "body{font-family:Arial,sans-serif;margin:24px;color:#172033;line-height:1.45}table{border-collapse:collapse;margin:10px 0 18px}th,td{border:1px solid #ccd3df;padding:6px 8px}th{background:#f4f6fa;text-align:left}.ok{color:#146c2e}.bad{color:#9b1c1c}.meta{background:#f7f9fc;border:1px solid #d8e0ea;padding:10px 12px}",
  )
  out.write_string("</style>\n</head>\n<body>\n")
  out.write_string("  <h1>CSV Audit Report</h1>\n")
  out.write_string("  <div class=\"meta\">\n")
  out.write_string("    <p><strong>Status:</strong> ")
  out.write_string(if audit_report_ok(report) { "ok" } else { "issues" })
  out.write_string("</p>\n")
  let score = audit_quality_score(report)
  out.write_string(
    "    <p><strong>Quality score:</strong> \{score.score} (\{score.grade}) &middot; <strong>Risk:</strong> \{score.risk}</p>\n",
  )
  out.write_string("    <p><strong>Dialect:</strong> ")
  audit_write_html_escaped(out, dialect_name(report.dialect))
  out.write_string(" (")
  audit_write_html_escaped(out, audit_delimiter_label(report.dialect.delimiter))
  out.write_string(")</p>\n")
  out.write_string(
    "    <p><strong>Rows:</strong> \{report.table.rows.length()} &middot; <strong>Columns:</strong> \{report.table.headers.length()} &middot; <strong>Parse issues:</strong> \{report.parse_issues.length()} &middot; <strong>Quality issues:</strong> \{report.quality_issues.length()}</p>\n",
  )
  out.write_string("  </div>\n")
  audit_write_score_html(out, score)
  audit_write_parse_issues_html(out, report.parse_issues)
  audit_write_quality_issues_html(out, report.quality_issues)
  audit_write_schema_html(out, report.inferred_schema)
  out.write_string("  <h2>Missing Values</h2>\n")
  out.write_string(table_to_html(report.missing_summary))
  out.write_char('\n')
  audit_write_profile_html(out, report.profiles)
  audit_write_recommendations_html(out, audit_recommendations(report))
  out.write_string("\n</body>\n</html>")
  out.to_string()
}

///|
/// Render a complete audit report as machine-readable JSON for scripts and CI.
pub fn audit_report_json(report : CsvAuditReport) -> String {
  let out = StringBuilder()
  out.write_string("{")
  out.write_string("\"status\":")
  audit_write_json_string(
    out,
    if audit_report_ok(report) {
      "ok"
    } else {
      "issues"
    },
  )
  out.write_string(",\"dialect\":")
  audit_write_dialect_json(out, report.dialect)
  out.write_string(",\"summary\":")
  audit_write_summary_json(out, report)
  out.write_string(",\"score\":")
  audit_write_score_json(out, audit_quality_score(report))
  out.write_string(",\"parse_issues\":")
  audit_write_parse_issues_json(out, report.parse_issues)
  out.write_string(",\"quality_issues\":")
  audit_write_quality_issues_json(out, report.quality_issues)
  out.write_string(",\"schema\":")
  audit_write_schema_json(out, report.inferred_schema)
  out.write_string(",\"missing\":")
  audit_write_missing_json(out, report.missing_summary)
  out.write_string(",\"profiles\":")
  audit_write_profiles_json(out, report.profiles)
  out.write_string(",\"recommendations\":")
  audit_write_recommendations_json(out, audit_recommendations(report))
  out.write_char('}')
  out.to_string()
}

///|
/// Audit CSV text and render Markdown in one step.
pub fn audit_csv_markdown(input : String) -> String {
  audit_report_markdown(audit_csv(input))
}

///|
/// Audit CSV text and render HTML in one step.
pub fn audit_csv_html(input : String) -> String {
  audit_report_html(audit_csv(input))
}

///|
/// Audit CSV text and render machine-readable JSON in one step.
pub fn audit_csv_json(input : String) -> String {
  audit_report_json(audit_csv(input))
}

///|
fn audit_write_summary_markdown(
  out : StringBuilder,
  report : CsvAuditReport,
) -> Unit {
  out.write_string("## Summary\n\n")
  out.write_string("- Status: ")
  out.write_string(if audit_report_ok(report) { "ok" } else { "issues" })
  out.write_char('\n')
  out.write_string("- Dialect: \{dialect_name(report.dialect)}\n")
  out.write_string("- Delimiter: `")
  audit_write_markdown_cell(
    out,
    audit_delimiter_label(report.dialect.delimiter),
  )
  out.write_string("`\n")
  out.write_string("- Rows: \{report.table.rows.length()}\n")
  out.write_string("- Columns: \{report.table.headers.length()}\n")
  out.write_string("- Parse issues: \{report.parse_issues.length()}\n")
  out.write_string("- Quality issues: \{report.quality_issues.length()}\n")
}

///|
fn audit_write_score_markdown(
  out : StringBuilder,
  score : CsvAuditScore,
) -> Unit {
  out.write_string("- Overall score: **\{score.score}** (\{score.grade})\n")
  out.write_string("- Risk: \{score.risk}\n")
  out.write_string(
    "- Missing cells: \{score.missing_cells}/\{score.total_cells}\n\n",
  )
  out.write_string("| dimension | score |\n")
  out.write_string("| --- | ---: |\n")
  out.write_string("| structure | \{score.structure_score} |\n")
  out.write_string("| completeness | \{score.completeness_score} |\n")
  out.write_string("| consistency | \{score.consistency_score} |\n")
  out.write_string("| uniqueness | \{score.uniqueness_score} |\n")
  out.write_string("| issue penalty | \{score.issue_penalty} |\n")
}

///|
fn audit_schema_table_markdown(rules : Array[CsvInferredColumnRule]) -> String {
  schema_inference_to_markdown(rules)
}

///|
fn audit_write_profile_markdown(
  out : StringBuilder,
  profiles : Array[ColumnProfile],
) -> Unit {
  out.write_string(
    "| column | type | empty | non_empty | unique | min | max | average |\n",
  )
  out.write_string("| --- | --- | ---: | ---: | ---: | --- | --- | --- |\n")
  for profile in profiles {
    out.write_string("| ")
    audit_write_markdown_cell(out, profile.name)
    out.write_string(" | ")
    out.write_string(inferred_type_name(profile.inferred))
    out.write_string(
      " | \{profile.empty} | \{profile.non_empty} | \{profile.unique} | ",
    )
    audit_write_optional_double(out, profile.min)
    out.write_string(" | ")
    audit_write_optional_double(out, profile.max)
    out.write_string(" | ")
    audit_write_optional_double(out, profile.average)
    out.write_string(" |\n")
  }
}

///|
fn audit_write_dialect_json(out : StringBuilder, dialect : CsvDialect) -> Unit {
  out.write_char('{')
  out.write_string("\"name\":")
  audit_write_json_string(out, dialect_name(dialect))
  out.write_string(",\"delimiter\":")
  audit_write_json_string(out, audit_delimiter_label(dialect.delimiter))
  out.write_string(",\"newline\":")
  audit_write_json_string(out, audit_delimiter_label_for_json(dialect.newline))
  out.write_string(",\"skip_empty_lines\":")
  audit_write_json_bool(out, dialect.skip_empty_lines)
  out.write_char('}')
}

///|
fn audit_write_summary_json(
  out : StringBuilder,
  report : CsvAuditReport,
) -> Unit {
  out.write_char('{')
  out.write_string("\"rows\":\{report.table.rows.length()}")
  out.write_string(",\"columns\":\{report.table.headers.length()}")
  out.write_string(",\"parse_issue_count\":\{report.parse_issues.length()}")
  out.write_string(",\"quality_issue_count\":\{report.quality_issues.length()}")
  out.write_char('}')
}

///|
fn audit_write_score_json(out : StringBuilder, score : CsvAuditScore) -> Unit {
  out.write_char('{')
  out.write_string("\"score\":\{score.score}")
  out.write_string(",\"grade\":")
  audit_write_json_string(out, score.grade)
  out.write_string(",\"risk\":")
  audit_write_json_string(out, score.risk)
  out.write_string(",\"structure_score\":\{score.structure_score}")
  out.write_string(",\"completeness_score\":\{score.completeness_score}")
  out.write_string(",\"consistency_score\":\{score.consistency_score}")
  out.write_string(",\"uniqueness_score\":\{score.uniqueness_score}")
  out.write_string(",\"issue_penalty\":\{score.issue_penalty}")
  out.write_string(",\"missing_cells\":\{score.missing_cells}")
  out.write_string(",\"total_cells\":\{score.total_cells}")
  out.write_char('}')
}

///|
fn audit_write_parse_issues_json(
  out : StringBuilder,
  issues : Array[CsvParseError],
) -> Unit {
  out.write_char('[')
  for i in 0..<issues.length() {
    if i > 0 {
      out.write_char(',')
    }
    let issue = issues[i]
    out.write_char('{')
    out.write_string("\"line\":\{issue.line}")
    out.write_string(",\"column\":\{issue.column}")
    out.write_string(",\"message\":")
    audit_write_json_string(out, issue.message)
    out.write_char('}')
  }
  out.write_char(']')
}

///|
fn audit_write_quality_issues_json(
  out : StringBuilder,
  issues : Array[CsvAuditQualityIssue],
) -> Unit {
  out.write_char('[')
  for i in 0..<issues.length() {
    if i > 0 {
      out.write_char(',')
    }
    let issue = issues[i]
    out.write_char('{')
    out.write_string("\"severity\":")
    audit_write_json_string(out, issue.severity)
    out.write_string(",\"row\":\{issue.row}")
    out.write_string(",\"column\":")
    audit_write_json_string(out, issue.column)
    out.write_string(",\"message\":")
    audit_write_json_string(out, issue.message)
    out.write_char('}')
  }
  out.write_char(']')
}

///|
fn audit_write_schema_json(
  out : StringBuilder,
  rules : Array[CsvInferredColumnRule],
) -> Unit {
  out.write_char('[')
  for i in 0..<rules.length() {
    if i > 0 {
      out.write_char(',')
    }
    let rule = rules[i]
    out.write_char('{')
    out.write_string("\"column\":")
    audit_write_json_string(out, rule.name)
    out.write_string(",\"type\":")
    audit_write_json_string(out, audit_column_type_name(rule.kind))
    out.write_string(",\"required\":")
    audit_write_json_bool(out, rule.required)
    out.write_string(",\"total\":\{rule.total}")
    out.write_string(",\"empty\":\{rule.empty}")
    out.write_string(",\"unique\":\{rule.unique}")
    out.write_string(",\"examples\":")
    audit_write_string_array_json(out, rule.examples)
    out.write_char('}')
  }
  out.write_char(']')
}

///|
fn audit_write_missing_json(out : StringBuilder, table : CsvTable) -> Unit {
  out.write_char('[')
  for i in 0..<table.rows.length() {
    if i > 0 {
      out.write_char(',')
    }
    let row = table.rows[i]
    out.write_char('{')
    out.write_string("\"column\":")
    audit_write_json_string(out, audit_cell_at(row, 0))
    out.write_string(",\"missing\":")
    audit_write_json_int_string(out, audit_cell_at(row, 1))
    out.write_string(",\"present\":")
    audit_write_json_int_string(out, audit_cell_at(row, 2))
    out.write_char('}')
  }
  out.write_char(']')
}

///|
fn audit_write_profiles_json(
  out : StringBuilder,
  profiles : Array[ColumnProfile],
) -> Unit {
  out.write_char('[')
  for i in 0..<profiles.length() {
    if i > 0 {
      out.write_char(',')
    }
    let profile = profiles[i]
    out.write_char('{')
    out.write_string("\"column\":")
    audit_write_json_string(out, profile.name)
    out.write_string(",\"type\":")
    audit_write_json_string(out, inferred_type_name(profile.inferred))
    out.write_string(",\"total\":\{profile.total}")
    out.write_string(",\"empty\":\{profile.empty}")
    out.write_string(",\"non_empty\":\{profile.non_empty}")
    out.write_string(",\"unique\":\{profile.unique}")
    out.write_string(",\"min\":")
    audit_write_optional_double_json(out, profile.min)
    out.write_string(",\"max\":")
    audit_write_optional_double_json(out, profile.max)
    out.write_string(",\"average\":")
    audit_write_optional_double_json(out, profile.average)
    out.write_char('}')
  }
  out.write_char(']')
}

///|
fn audit_write_recommendations_json(
  out : StringBuilder,
  recommendations : Array[CsvAuditRecommendation],
) -> Unit {
  out.write_char('[')
  for i in 0..<recommendations.length() {
    if i > 0 {
      out.write_char(',')
    }
    let item = recommendations[i]
    out.write_char('{')
    out.write_string("\"severity\":")
    audit_write_json_string(out, item.severity)
    out.write_string(",\"message\":")
    audit_write_json_string(out, item.message)
    out.write_char('}')
  }
  out.write_char(']')
}

///|
fn audit_write_parse_issues_html(
  out : StringBuilder,
  issues : Array[CsvParseError],
) -> Unit {
  out.write_string("  <h2>Parse Issues</h2>\n")
  if issues.length() == 0 {
    out.write_string("  <p class=\"ok\">No parse issues.</p>\n")
  } else {
    out.write_string("  <table>\n")
    out.write_string(
      "    <tr><th>Line</th><th>Column</th><th>Message</th></tr>\n",
    )
    for issue in issues {
      out.write_string(
        "    <tr><td>\{issue.line}</td><td>\{issue.column}</td><td>",
      )
      audit_write_html_escaped(out, issue.message)
      out.write_string("</td></tr>\n")
    }
    out.write_string("  </table>\n")
  }
}

///|
fn audit_write_score_html(out : StringBuilder, score : CsvAuditScore) -> Unit {
  out.write_string("  <h2>Quality Score</h2>\n")
  out.write_string("  <table>\n")
  out.write_string("    <tr><th>Metric</th><th>Value</th></tr>\n")
  out.write_string(
    "    <tr><td>Overall score</td><td>\{score.score} (\{score.grade})</td></tr>\n",
  )
  out.write_string("    <tr><td>Risk</td><td>")
  audit_write_html_escaped(out, score.risk)
  out.write_string("</td></tr>\n")
  out.write_string(
    "    <tr><td>Structure</td><td>\{score.structure_score}</td></tr>\n",
  )
  out.write_string(
    "    <tr><td>Completeness</td><td>\{score.completeness_score}</td></tr>\n",
  )
  out.write_string(
    "    <tr><td>Consistency</td><td>\{score.consistency_score}</td></tr>\n",
  )
  out.write_string(
    "    <tr><td>Uniqueness</td><td>\{score.uniqueness_score}</td></tr>\n",
  )
  out.write_string(
    "    <tr><td>Missing cells</td><td>\{score.missing_cells}/\{score.total_cells}</td></tr>\n",
  )
  out.write_string("  </table>\n")
}

///|
fn audit_write_quality_issues_html(
  out : StringBuilder,
  issues : Array[CsvAuditQualityIssue],
) -> Unit {
  out.write_string("  <h2>Quality Issues</h2>\n")
  if issues.length() == 0 {
    out.write_string("  <p class=\"ok\">No table quality issues.</p>\n")
  } else {
    out.write_string("  <table>\n")
    out.write_string(
      "    <tr><th>Severity</th><th>Row</th><th>Column</th><th>Message</th></tr>\n",
    )
    for issue in issues {
      out.write_string("    <tr><td>")
      audit_write_html_escaped(out, issue.severity)
      out.write_string("</td><td>\{issue.row}</td><td>")
      audit_write_html_escaped(out, issue.column)
      out.write_string("</td><td>")
      audit_write_html_escaped(out, issue.message)
      out.write_string("</td></tr>\n")
    }
    out.write_string("  </table>\n")
  }
}

///|
fn audit_write_schema_html(
  out : StringBuilder,
  rules : Array[CsvInferredColumnRule],
) -> Unit {
  out.write_string("  <h2>Inferred Schema</h2>\n")
  out.write_string("  <table>\n")
  out.write_string(
    "    <tr><th>Column</th><th>Type</th><th>Required</th><th>Empty</th><th>Unique</th><th>Examples</th></tr>\n",
  )
  for rule in rules {
    out.write_string("    <tr><td>")
    audit_write_html_escaped(out, rule.name)
    out.write_string("</td><td>")
    audit_write_html_escaped(out, audit_column_type_name(rule.kind))
    out.write_string("</td><td>")
    out.write_string(if rule.required { "yes" } else { "no" })
    out.write_string(
      "</td><td>\{rule.empty}/\{rule.total}</td><td>\{rule.unique}</td><td>",
    )
    audit_write_html_escaped(out, audit_join(rule.examples, ", "))
    out.write_string("</td></tr>\n")
  }
  out.write_string("  </table>\n")
}

///|
fn audit_write_profile_html(
  out : StringBuilder,
  profiles : Array[ColumnProfile],
) -> Unit {
  out.write_string("  <h2>Column Profile</h2>\n")
  out.write_string("  <table>\n")
  out.write_string(
    "    <tr><th>Column</th><th>Type</th><th>Empty</th><th>Non-empty</th><th>Unique</th><th>Min</th><th>Max</th><th>Average</th></tr>\n",
  )
  for profile in profiles {
    out.write_string("    <tr><td>")
    audit_write_html_escaped(out, profile.name)
    out.write_string("</td><td>")
    audit_write_html_escaped(out, inferred_type_name(profile.inferred))
    out.write_string(
      "</td><td>\{profile.empty}</td><td>\{profile.non_empty}</td><td>\{profile.unique}</td><td>",
    )
    audit_write_optional_double(out, profile.min)
    out.write_string("</td><td>")
    audit_write_optional_double(out, profile.max)
    out.write_string("</td><td>")
    audit_write_optional_double(out, profile.average)
    out.write_string("</td></tr>\n")
  }
  out.write_string("  </table>\n")
}

///|
fn audit_write_recommendations_html(
  out : StringBuilder,
  recommendations : Array[CsvAuditRecommendation],
) -> Unit {
  out.write_string("  <h2>Recommendations</h2>\n")
  out.write_string("  <ul>\n")
  for item in recommendations {
    out.write_string("    <li><strong>")
    audit_write_html_escaped(out, item.severity)
    out.write_string(":</strong> ")
    audit_write_html_escaped(out, item.message)
    out.write_string("</li>\n")
  }
  out.write_string("  </ul>\n")
}

///|
fn audit_missing_cells(profiles : Array[ColumnProfile]) -> Int {
  let mut total = 0
  for profile in profiles {
    total += profile.empty
  }
  total
}

///|
fn audit_total_cells(profiles : Array[ColumnProfile]) -> Int {
  let mut total = 0
  for profile in profiles {
    total += profile.total
  }
  total
}

///|
fn audit_consistency_penalty(issues : Array[CsvAuditQualityIssue]) -> Int {
  let mut penalty = 0
  for issue in issues {
    if issue.row == 1 && issue.column != "*" {
      penalty += 12
    } else if issue.severity == "error" {
      penalty += 20
    } else if issue.severity == "warning" {
      penalty += 8
    }
  }
  penalty
}

///|
fn audit_duplicate_row_count(issues : Array[CsvAuditQualityIssue]) -> Int {
  let mut count = 0
  for issue in issues {
    if issue.severity == "info" && issue.column == "*" {
      count += 1
    }
  }
  count
}

///|
fn audit_issue_penalty(report : CsvAuditReport) -> Int {
  let mut penalty = report.parse_issues.length() * 20
  for issue in report.quality_issues {
    if issue.severity == "error" {
      penalty += 20
    } else if issue.severity == "warning" {
      penalty += 7
    } else {
      penalty += 2
    }
  }
  penalty
}

///|
fn audit_clamp_score(score : Int) -> Int {
  if score < 0 {
    0
  } else if score > 100 {
    100
  } else {
    score
  }
}

///|
fn audit_grade_for_score(score : Int) -> String {
  if score >= 90 {
    "A"
  } else if score >= 80 {
    "B"
  } else if score >= 70 {
    "C"
  } else if score >= 60 {
    "D"
  } else {
    "F"
  }
}

///|
fn audit_risk_for_score(score : Int) -> String {
  if score >= 85 {
    "low"
  } else if score >= 70 {
    "medium"
  } else {
    "high"
  }
}

///|
fn audit_collect_header_issues(
  issues : Array[CsvAuditQualityIssue],
  table : CsvTable,
) -> Unit {
  for i in 0..<table.headers.length() {
    let header = audit_trim_ascii(table.headers[i])
    if header.is_empty() {
      issues.push({
        severity: "warning",
        row: 1,
        column: "#\{i + 1}",
        message: "Header column #\{i + 1} is empty; give it a stable name before validation or export.",
      })
    } else {
      for j in 0..<i {
        if audit_trim_ascii(table.headers[j]) == header {
          issues.push({
            severity: "warning",
            row: 1,
            column: header,
            message: "Header `\{header}` is duplicated; rename columns before joining, selecting, or JSON export.",
          })
          break
        }
      }
    }
  }
}

///|
fn audit_collect_empty_row_issues(
  issues : Array[CsvAuditQualityIssue],
  table : CsvTable,
) -> Unit {
  let width = table.headers.length()
  for i in 0..<table.rows.length() {
    if audit_row_empty(table.rows[i], width) {
      issues.push({
        severity: "warning",
        row: i + 2,
        column: "*",
        message: "Row \{i + 2} is empty; consider dropping empty rows before profiling.",
      })
    }
  }
}

///|
fn audit_collect_empty_column_issues(
  issues : Array[CsvAuditQualityIssue],
  table : CsvTable,
) -> Unit {
  if table.rows.length() == 0 {
    return
  }
  for i in 0..<table.headers.length() {
    let mut empty = true
    for row in table.rows {
      if !audit_cell_at(row, i).is_empty() {
        empty = false
        break
      }
    }
    if empty {
      let column = audit_column_label(table.headers, i)
      issues.push({
        severity: "warning",
        row: 1,
        column,
        message: "Column `\{column}` is empty in every row; consider dropping it or filling defaults.",
      })
    }
  }
}

///|
fn audit_collect_duplicate_row_issues(
  issues : Array[CsvAuditQualityIssue],
  table : CsvTable,
) -> Unit {
  let keys : Array[String] = Array::new()
  let first_rows : Array[Int] = Array::new()
  for i in 0..<table.rows.length() {
    let key = audit_row_key(table.rows[i], table.headers.length())
    if key.is_empty() {
      continue
    }
    match audit_index_of(keys, key) {
      Some(existing) =>
        issues.push({
          severity: "info",
          row: i + 2,
          column: "*",
          message: "Row \{i + 2} duplicates row \{first_rows[existing]}; deduplicate if rows should be unique.",
        })
      None => {
        keys.push(key)
        first_rows.push(i + 2)
      }
    }
  }
}

///|
fn audit_row_empty(row : Array[String], width : Int) -> Bool {
  let limit = if row.length() > width { row.length() } else { width }
  for i in 0..<limit {
    if !audit_cell_at(row, i).is_empty() {
      return false
    }
  }
  true
}

///|
fn audit_cell_at(row : Array[String], index : Int) -> String {
  if index >= 0 && index < row.length() {
    row[index]
  } else {
    ""
  }
}

///|
fn audit_column_label(headers : Array[String], index : Int) -> String {
  if index >= 0 && index < headers.length() && !headers[index].is_empty() {
    headers[index]
  } else {
    "#\{index + 1}"
  }
}

///|
fn audit_row_key(row : Array[String], width : Int) -> String {
  let out = StringBuilder()
  let limit = if row.length() > width { row.length() } else { width }
  for i in 0..<limit {
    if i > 0 {
      out.write_char('\u{1f}')
    }
    out.write_string(audit_cell_at(row, i))
  }
  out.to_string()
}

///|
fn audit_index_of(values : Array[String], value : String) -> Int? {
  for i in 0..<values.length() {
    if values[i] == value {
      return Some(i)
    }
  }
  None
}

///|
fn audit_trim_ascii(value : String) -> String {
  let chars : Array[Char] = Array::new()
  for ch in value.iter() {
    chars.push(ch)
  }
  let mut start = 0
  let mut finish = chars.length()
  while start < finish && audit_is_ascii_space(chars[start]) {
    start += 1
  }
  while finish > start && audit_is_ascii_space(chars[finish - 1]) {
    finish -= 1
  }
  let out = StringBuilder()
  for i in start..<finish {
    out.write_char(chars[i])
  }
  out.to_string()
}

///|
fn audit_is_ascii_space(ch : Char) -> Bool {
  ch == ' ' || ch == '\t' || ch == '\n' || ch == '\r'
}

///|
fn audit_write_markdown_cell(out : StringBuilder, value : String) -> Unit {
  for ch in value.iter() {
    if ch == '|' {
      out.write_string("\\|")
    } else if ch == '\n' || ch == '\r' {
      out.write_char(' ')
    } else {
      out.write_char(ch)
    }
  }
}

///|
fn audit_write_html_escaped(out : StringBuilder, value : String) -> Unit {
  for ch in value.iter() {
    if ch == '&' {
      out.write_string("&amp;")
    } else if ch == '<' {
      out.write_string("&lt;")
    } else if ch == '>' {
      out.write_string("&gt;")
    } else if ch == '"' {
      out.write_string("&quot;")
    } else if ch == '\'' {
      out.write_string("&#39;")
    } else {
      out.write_char(ch)
    }
  }
}

///|
fn audit_write_optional_double(out : StringBuilder, value : Double?) -> Unit {
  match value {
    Some(number) => out.write_string(number.to_string())
    None => ()
  }
}

///|
fn audit_write_optional_double_json(
  out : StringBuilder,
  value : Double?,
) -> Unit {
  match value {
    Some(number) => out.write_string(number.to_string())
    None => out.write_string("null")
  }
}

///|
fn audit_write_json_int_string(out : StringBuilder, value : String) -> Unit {
  if value.is_empty() {
    out.write_string("0")
  } else {
    out.write_string(value)
  }
}

///|
fn audit_write_json_bool(out : StringBuilder, value : Bool) -> Unit {
  out.write_string(if value { "true" } else { "false" })
}

///|
fn audit_write_string_array_json(
  out : StringBuilder,
  values : Array[String],
) -> Unit {
  out.write_char('[')
  for i in 0..<values.length() {
    if i > 0 {
      out.write_char(',')
    }
    audit_write_json_string(out, values[i])
  }
  out.write_char(']')
}

///|
fn audit_write_json_string(out : StringBuilder, value : String) -> Unit {
  out.write_char('"')
  audit_write_json_escaped(out, value)
  out.write_char('"')
}

///|
fn audit_write_json_escaped(out : StringBuilder, value : String) -> Unit {
  for ch in value.iter() {
    if ch == '"' {
      out.write_string("\\\"")
    } else if ch == '\\' {
      out.write_string("\\\\")
    } else if ch == '\n' {
      out.write_string("\\n")
    } else if ch == '\r' {
      out.write_string("\\r")
    } else if ch == '\t' {
      out.write_string("\\t")
    } else {
      out.write_char(ch)
    }
  }
}

///|
fn audit_delimiter_label(delimiter : Char) -> String {
  if delimiter == '\t' {
    "\\t"
  } else {
    let out = StringBuilder()
    out.write_char(delimiter)
    out.to_string()
  }
}

///|
fn audit_delimiter_label_for_json(newline : String) -> String {
  if newline == "\n" {
    "\\n"
  } else if newline == "\r\n" {
    "\\r\\n"
  } else {
    newline
  }
}

///|
fn audit_column_type_name(kind : CsvColumnType) -> String {
  match kind {
    Text => "text"
    Integer => "integer"
    Float => "float"
    Boolean => "boolean"
  }
}

///|
fn audit_join(values : Array[String], separator : String) -> String {
  let out = StringBuilder()
  for i in 0..<values.length() {
    if i > 0 {
      out.write_string(separator)
    }
    out.write_string(values[i])
  }
  out.to_string()
}
