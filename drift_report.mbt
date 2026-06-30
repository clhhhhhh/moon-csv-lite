///|
/// One issue found while comparing two CSV audit snapshots.
pub(all) struct CsvDriftIssue {
  severity : String
  category : String
  column : String
  message : String
} derive(Eq, Debug)

///|
/// Drift report comparing a baseline CSV and a candidate CSV.
pub(all) struct CsvDriftReport {
  baseline : CsvAuditReport
  candidate : CsvAuditReport
  baseline_score : CsvAuditScore
  candidate_score : CsvAuditScore
  score_delta : Int
  row_delta : Int
  column_delta : Int
  issues : Array[CsvDriftIssue]
} derive(Eq, Debug)

///|
/// Compare two CSV snapshots and report schema, score, and completeness drift.
pub fn audit_drift(
  baseline_input : String,
  candidate_input : String,
) -> CsvDriftReport {
  let baseline = audit_csv(baseline_input)
  let candidate = audit_csv(candidate_input)
  let baseline_score = audit_quality_score(baseline)
  let candidate_score = audit_quality_score(candidate)
  let issues : Array[CsvDriftIssue] = Array::new()
  drift_collect_score_issues(issues, baseline_score, candidate_score)
  drift_collect_shape_issues(issues, baseline, candidate)
  drift_collect_column_issues(issues, baseline, candidate)
  {
    baseline,
    candidate,
    baseline_score,
    candidate_score,
    score_delta: candidate_score.score - baseline_score.score,
    row_delta: candidate.table.rows.length() - baseline.table.rows.length(),
    column_delta: candidate.table.headers.length() -
    baseline.table.headers.length(),
    issues,
  }
}

///|
/// Compare two CSV snapshots and render Markdown.
pub fn audit_drift_markdown(
  baseline_input : String,
  candidate_input : String,
) -> String {
  audit_drift_report_markdown(audit_drift(baseline_input, candidate_input))
}

///|
/// Compare two CSV snapshots and render JSON.
pub fn audit_drift_json(
  baseline_input : String,
  candidate_input : String,
) -> String {
  audit_drift_report_json(audit_drift(baseline_input, candidate_input))
}

///|
/// Render a compact text summary for CLI and logs.
pub fn audit_drift_text(report : CsvDriftReport) -> String {
  "drift: baseline_score=\{report.baseline_score.score}, candidate_score=\{report.candidate_score.score}, score_delta=\{report.score_delta}, row_delta=\{report.row_delta}, column_delta=\{report.column_delta}, issues=\{report.issues.length()}"
}

///|
/// Render a drift report as Markdown.
pub fn audit_drift_report_markdown(report : CsvDriftReport) -> String {
  let out = StringBuilder()
  out.write_string("# CSV Drift Report\n\n")
  out.write_string("## Summary\n\n")
  out.write_string(
    "- Baseline score: \{report.baseline_score.score} (\{report.baseline_score.grade})\n",
  )
  out.write_string(
    "- Candidate score: \{report.candidate_score.score} (\{report.candidate_score.grade})\n",
  )
  out.write_string("- Score delta: \{drift_signed_int(report.score_delta)}\n")
  out.write_string("- Row delta: \{drift_signed_int(report.row_delta)}\n")
  out.write_string("- Column delta: \{drift_signed_int(report.column_delta)}\n")
  out.write_string("- Drift issues: \{report.issues.length()}\n")
  out.write_string("\n## Drift Issues\n\n")
  if report.issues.length() == 0 {
    out.write_string("No schema or quality drift detected.\n")
  } else {
    out.write_string("| severity | category | column | message |\n")
    out.write_string("| --- | --- | --- | --- |\n")
    for issue in report.issues {
      out.write_string("| ")
      drift_write_markdown_cell(out, issue.severity)
      out.write_string(" | ")
      drift_write_markdown_cell(out, issue.category)
      out.write_string(" | ")
      drift_write_markdown_cell(out, issue.column)
      out.write_string(" | ")
      drift_write_markdown_cell(out, issue.message)
      out.write_string(" |\n")
    }
  }
  out.to_string()
}

///|
/// Render a drift report as compact JSON.
pub fn audit_drift_report_json(report : CsvDriftReport) -> String {
  let out = StringBuilder()
  out.write_char('{')
  out.write_string("\"summary\":{")
  out.write_string("\"baseline_score\":\{report.baseline_score.score}")
  out.write_string(",\"candidate_score\":\{report.candidate_score.score}")
  out.write_string(",\"score_delta\":\{report.score_delta}")
  out.write_string(",\"baseline_rows\":\{report.baseline.table.rows.length()}")
  out.write_string(
    ",\"candidate_rows\":\{report.candidate.table.rows.length()}",
  )
  out.write_string(",\"row_delta\":\{report.row_delta}")
  out.write_string(
    ",\"baseline_columns\":\{report.baseline.table.headers.length()}",
  )
  out.write_string(
    ",\"candidate_columns\":\{report.candidate.table.headers.length()}",
  )
  out.write_string(",\"column_delta\":\{report.column_delta}")
  out.write_string(",\"issue_count\":\{report.issues.length()}")
  out.write_char('}')
  out.write_string(",\"issues\":")
  drift_write_issues_json(out, report.issues)
  out.write_char('}')
  out.to_string()
}

///|
fn drift_collect_score_issues(
  issues : Array[CsvDriftIssue],
  baseline_score : CsvAuditScore,
  candidate_score : CsvAuditScore,
) -> Unit {
  let delta = candidate_score.score - baseline_score.score
  if delta <= -25 {
    issues.push({
      severity: "error",
      category: "score",
      column: "*",
      message: "Quality score dropped by \{0 - delta} point(s), from \{baseline_score.score} to \{candidate_score.score}.",
    })
  } else if delta <= -8 {
    issues.push({
      severity: "warning",
      category: "score",
      column: "*",
      message: "Quality score dropped by \{0 - delta} point(s), from \{baseline_score.score} to \{candidate_score.score}.",
    })
  } else if delta >= 8 {
    issues.push({
      severity: "info",
      category: "score",
      column: "*",
      message: "Quality score improved by \{delta} point(s), from \{baseline_score.score} to \{candidate_score.score}.",
    })
  }
}

///|
fn drift_collect_shape_issues(
  issues : Array[CsvDriftIssue],
  baseline : CsvAuditReport,
  candidate : CsvAuditReport,
) -> Unit {
  let row_delta = candidate.table.rows.length() - baseline.table.rows.length()
  if row_delta != 0 {
    let severity = if drift_percent_change_abs(
        row_delta,
        baseline.table.rows.length(),
      ) >=
      50 {
      "warning"
    } else {
      "info"
    }
    issues.push({
      severity,
      category: "shape",
      column: "*",
      message: "Row count changed from \{baseline.table.rows.length()} to \{candidate.table.rows.length()} (\{drift_signed_int(row_delta)}).",
    })
  }
  let column_delta = candidate.table.headers.length() -
    baseline.table.headers.length()
  if column_delta != 0 {
    issues.push({
      severity: "warning",
      category: "shape",
      column: "*",
      message: "Column count changed from \{baseline.table.headers.length()} to \{candidate.table.headers.length()} (\{drift_signed_int(column_delta)}).",
    })
  }
}

///|
fn drift_collect_column_issues(
  issues : Array[CsvDriftIssue],
  baseline : CsvAuditReport,
  candidate : CsvAuditReport,
) -> Unit {
  let baseline_headers = drift_unique_headers(baseline.table.headers)
  let candidate_headers = drift_unique_headers(candidate.table.headers)
  for column in baseline_headers {
    if !drift_contains(candidate_headers, column) {
      issues.push({
        severity: "error",
        category: "schema",
        column,
        message: "Column `\{column}` was removed from the candidate data.",
      })
    }
  }
  for column in candidate_headers {
    if !drift_contains(baseline_headers, column) {
      issues.push({
        severity: "info",
        category: "schema",
        column,
        message: "Column `\{column}` was added in the candidate data.",
      })
    }
  }
  for column in baseline_headers {
    if drift_contains(candidate_headers, column) {
      drift_collect_common_column_issues(issues, baseline, candidate, column)
    }
  }
}

///|
fn drift_collect_common_column_issues(
  issues : Array[CsvDriftIssue],
  baseline : CsvAuditReport,
  candidate : CsvAuditReport,
  column : String,
) -> Unit {
  match
    (
      drift_find_rule(baseline.inferred_schema, column),
      drift_find_rule(candidate.inferred_schema, column),
    ) {
    (Some(base_rule), Some(next_rule)) => {
      if base_rule.kind != next_rule.kind {
        issues.push({
          severity: "warning",
          category: "type",
          column,
          message: "Column `\{column}` type changed from \{drift_column_type_name(base_rule.kind)} to \{drift_column_type_name(next_rule.kind)}.",
        })
      }
      if next_rule.empty > base_rule.empty {
        issues.push({
          severity: "warning",
          category: "missing",
          column,
          message: "Column `\{column}` missing values increased from \{base_rule.empty} to \{next_rule.empty}.",
        })
      } else if base_rule.empty > 0 && next_rule.empty == 0 {
        issues.push({
          severity: "info",
          category: "missing",
          column,
          message: "Column `\{column}` no longer has missing values.",
        })
      }
    }
    _ => ()
  }
}

///|
fn drift_unique_headers(headers : Array[String]) -> Array[String] {
  let values : Array[String] = Array::new()
  for header in headers {
    let label = if header.is_empty() { "#empty" } else { header }
    if !drift_contains(values, label) {
      values.push(label)
    }
  }
  values
}

///|
fn drift_find_rule(
  rules : Array[CsvInferredColumnRule],
  column : String,
) -> CsvInferredColumnRule? {
  for rule in rules {
    let label = if rule.name.is_empty() { "#empty" } else { rule.name }
    if label == column {
      return Some(rule)
    }
  }
  None
}

///|
fn drift_contains(values : Array[String], value : String) -> Bool {
  for item in values {
    if item == value {
      return true
    }
  }
  false
}

///|
fn drift_percent_change_abs(delta : Int, baseline : Int) -> Int {
  if baseline == 0 {
    if delta == 0 {
      0
    } else {
      100
    }
  } else {
    drift_abs(delta) * 100 / baseline
  }
}

///|
fn drift_abs(value : Int) -> Int {
  if value < 0 {
    0 - value
  } else {
    value
  }
}

///|
fn drift_signed_int(value : Int) -> String {
  if value > 0 {
    "+\{value}"
  } else {
    value.to_string()
  }
}

///|
fn drift_column_type_name(kind : CsvColumnType) -> String {
  match kind {
    Text => "text"
    Integer => "integer"
    Float => "float"
    Boolean => "boolean"
  }
}

///|
fn drift_write_issues_json(
  out : StringBuilder,
  issues : Array[CsvDriftIssue],
) -> Unit {
  out.write_char('[')
  for i in 0..<issues.length() {
    if i > 0 {
      out.write_char(',')
    }
    let issue = issues[i]
    out.write_char('{')
    out.write_string("\"severity\":")
    drift_write_json_string(out, issue.severity)
    out.write_string(",\"category\":")
    drift_write_json_string(out, issue.category)
    out.write_string(",\"column\":")
    drift_write_json_string(out, issue.column)
    out.write_string(",\"message\":")
    drift_write_json_string(out, issue.message)
    out.write_char('}')
  }
  out.write_char(']')
}

///|
fn drift_write_markdown_cell(out : StringBuilder, value : String) -> Unit {
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
fn drift_write_json_string(out : StringBuilder, value : String) -> Unit {
  out.write_char('"')
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
  out.write_char('"')
}
