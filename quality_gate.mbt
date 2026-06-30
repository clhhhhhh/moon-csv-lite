///|
/// Quality gate policy for baseline/candidate CSV comparisons.
///
/// This is designed for CI and release checks: the drift report explains what
/// changed, while the gate decides whether the candidate CSV should pass.
pub(all) struct CsvQualityGateOptions {
  min_score : Int
  max_score_drop : Int
  max_quality_issues : Int
  allow_new_columns : Bool
  allow_removed_columns : Bool
  allow_type_changes : Bool
  allow_missing_increase : Bool
} derive(Eq, Debug)

///|
/// One policy violation or advisory emitted by the quality gate.
pub(all) struct CsvQualityGateIssue {
  severity : String
  rule : String
  column : String
  message : String
} derive(Eq, Debug)

///|
/// Quality gate decision for a candidate CSV compared with a baseline CSV.
pub(all) struct CsvQualityGateReport {
  passed : Bool
  options : CsvQualityGateOptions
  drift : CsvDriftReport
  issues : Array[CsvQualityGateIssue]
} derive(Eq, Debug)

///|
/// Default policy: practical for data-regression checks in CI.
pub fn quality_gate_default_options() -> CsvQualityGateOptions {
  {
    min_score: 80,
    max_score_drop: 10,
    max_quality_issues: 5,
    allow_new_columns: true,
    allow_removed_columns: false,
    allow_type_changes: false,
    allow_missing_increase: false,
  }
}

///|
/// Strict policy: useful for stable configuration tables and release assets.
pub fn quality_gate_strict_options() -> CsvQualityGateOptions {
  {
    min_score: 90,
    max_score_drop: 5,
    max_quality_issues: 0,
    allow_new_columns: false,
    allow_removed_columns: false,
    allow_type_changes: false,
    allow_missing_increase: false,
  }
}

///|
/// Run a quality gate with explicit options.
pub fn audit_quality_gate(
  baseline_input : String,
  candidate_input : String,
  options : CsvQualityGateOptions,
) -> CsvQualityGateReport {
  let drift = audit_drift(baseline_input, candidate_input)
  let issues : Array[CsvQualityGateIssue] = Array::new()
  gate_collect_score_issues(issues, drift, options)
  gate_collect_candidate_issues(issues, drift, options)
  gate_collect_drift_issues(issues, drift, options)
  { passed: gate_passed(issues), options, drift, issues }
}

///|
/// Run the default quality gate.
pub fn audit_quality_gate_default(
  baseline_input : String,
  candidate_input : String,
) -> CsvQualityGateReport {
  audit_quality_gate(
    baseline_input,
    candidate_input,
    quality_gate_default_options(),
  )
}

///|
/// Run the default quality gate and render Markdown.
pub fn audit_quality_gate_markdown(
  baseline_input : String,
  candidate_input : String,
) -> String {
  audit_quality_gate_report_markdown(
    audit_quality_gate_default(baseline_input, candidate_input),
  )
}

///|
/// Run the default quality gate and render JSON.
pub fn audit_quality_gate_json(
  baseline_input : String,
  candidate_input : String,
) -> String {
  audit_quality_gate_report_json(
    audit_quality_gate_default(baseline_input, candidate_input),
  )
}

///|
/// Render a compact one-line quality gate summary.
pub fn audit_quality_gate_text(report : CsvQualityGateReport) -> String {
  let status = if report.passed { "pass" } else { "fail" }
  "gate: \{status}, baseline_score=\{report.drift.baseline_score.score}, candidate_score=\{report.drift.candidate_score.score}, score_delta=\{report.drift.score_delta}, issues=\{report.issues.length()}"
}

///|
/// Render a quality gate report as Markdown.
pub fn audit_quality_gate_report_markdown(
  report : CsvQualityGateReport,
) -> String {
  let out = StringBuilder()
  out.write_string("# CSV Quality Gate Report\n\n")
  out.write_string("## Summary\n\n")
  out.write_string("- Status: ")
  out.write_string(if report.passed { "pass" } else { "fail" })
  out.write_char('\n')
  out.write_string(
    "- Baseline score: \{report.drift.baseline_score.score} (\{report.drift.baseline_score.grade})\n",
  )
  out.write_string(
    "- Candidate score: \{report.drift.candidate_score.score} (\{report.drift.candidate_score.grade})\n",
  )
  out.write_string(
    "- Score delta: \{gate_signed_int(report.drift.score_delta)}\n",
  )
  out.write_string("- Gate issues: \{report.issues.length()}\n")
  out.write_string("\n## Policy\n\n")
  out.write_string("- Minimum candidate score: \{report.options.min_score}\n")
  out.write_string(
    "- Maximum allowed score drop: \{report.options.max_score_drop}\n",
  )
  out.write_string(
    "- Maximum candidate quality issues: \{report.options.max_quality_issues}\n",
  )
  out.write_string(
    "- Allow new columns: \{gate_bool_text(report.options.allow_new_columns)}\n",
  )
  out.write_string(
    "- Allow removed columns: \{gate_bool_text(report.options.allow_removed_columns)}\n",
  )
  out.write_string(
    "- Allow type changes: \{gate_bool_text(report.options.allow_type_changes)}\n",
  )
  out.write_string(
    "- Allow missing-value increases: \{gate_bool_text(report.options.allow_missing_increase)}\n",
  )
  out.write_string("\n## Gate Issues\n\n")
  if report.issues.length() == 0 {
    out.write_string("No quality gate violations.\n")
  } else {
    out.write_string("| severity | rule | column | message |\n")
    out.write_string("| --- | --- | --- | --- |\n")
    for issue in report.issues {
      out.write_string("| ")
      gate_write_markdown_cell(out, issue.severity)
      out.write_string(" | ")
      gate_write_markdown_cell(out, issue.rule)
      out.write_string(" | ")
      gate_write_markdown_cell(out, issue.column)
      out.write_string(" | ")
      gate_write_markdown_cell(out, issue.message)
      out.write_string(" |\n")
    }
  }
  out.to_string()
}

///|
/// Render a quality gate report as compact JSON.
pub fn audit_quality_gate_report_json(report : CsvQualityGateReport) -> String {
  let out = StringBuilder()
  out.write_char('{')
  out.write_string("\"passed\":")
  gate_write_json_bool(out, report.passed)
  out.write_string(",\"summary\":{")
  out.write_string("\"baseline_score\":\{report.drift.baseline_score.score}")
  out.write_string(",\"candidate_score\":\{report.drift.candidate_score.score}")
  out.write_string(",\"score_delta\":\{report.drift.score_delta}")
  out.write_string(
    ",\"baseline_rows\":\{report.drift.baseline.table.rows.length()}",
  )
  out.write_string(
    ",\"candidate_rows\":\{report.drift.candidate.table.rows.length()}",
  )
  out.write_string(",\"row_delta\":\{report.drift.row_delta}")
  out.write_string(
    ",\"baseline_columns\":\{report.drift.baseline.table.headers.length()}",
  )
  out.write_string(
    ",\"candidate_columns\":\{report.drift.candidate.table.headers.length()}",
  )
  out.write_string(",\"column_delta\":\{report.drift.column_delta}")
  out.write_string(",\"gate_issue_count\":\{report.issues.length()}")
  out.write_char('}')
  out.write_string(",\"options\":")
  gate_write_options_json(out, report.options)
  out.write_string(",\"issues\":")
  gate_write_issues_json(out, report.issues)
  out.write_string(",\"drift_issue_count\":\{report.drift.issues.length()}")
  out.write_char('}')
  out.to_string()
}

///|
fn gate_collect_score_issues(
  issues : Array[CsvQualityGateIssue],
  drift : CsvDriftReport,
  options : CsvQualityGateOptions,
) -> Unit {
  if drift.candidate_score.score < options.min_score {
    issues.push({
      severity: "error",
      rule: "min_score",
      column: "*",
      message: "Candidate quality score \{drift.candidate_score.score} is below the required minimum \{options.min_score}.",
    })
  }
  if drift.score_delta < 0 - options.max_score_drop {
    issues.push({
      severity: "error",
      rule: "max_score_drop",
      column: "*",
      message: "Candidate quality score dropped by \{0 - drift.score_delta} point(s), exceeding the allowed drop of \{options.max_score_drop}.",
    })
  }
}

///|
fn gate_collect_candidate_issues(
  issues : Array[CsvQualityGateIssue],
  drift : CsvDriftReport,
  options : CsvQualityGateOptions,
) -> Unit {
  if drift.candidate.parse_issues.length() > 0 {
    issues.push({
      severity: "error",
      rule: "parse_issues",
      column: "*",
      message: "Candidate CSV has \{drift.candidate.parse_issues.length()} parse issue(s); fix structural issues before release.",
    })
  }
  if drift.candidate.quality_issues.length() > options.max_quality_issues {
    issues.push({
      severity: "error",
      rule: "max_quality_issues",
      column: "*",
      message: "Candidate CSV has \{drift.candidate.quality_issues.length()} quality issue(s), exceeding the allowed maximum \{options.max_quality_issues}.",
    })
  }
}

///|
fn gate_collect_drift_issues(
  issues : Array[CsvQualityGateIssue],
  drift : CsvDriftReport,
  options : CsvQualityGateOptions,
) -> Unit {
  for issue in drift.issues {
    if issue.category == "schema" {
      if issue.message.contains("was removed") && !options.allow_removed_columns {
        gate_push_from_drift(issues, "error", "no_removed_columns", issue)
      } else if issue.message.contains("was added") &&
        !options.allow_new_columns {
        gate_push_from_drift(issues, "error", "no_new_columns", issue)
      }
    } else if issue.category == "type" && !options.allow_type_changes {
      gate_push_from_drift(issues, "error", "no_type_changes", issue)
    } else if issue.category == "missing" &&
      issue.message.contains("increased") &&
      !options.allow_missing_increase {
      gate_push_from_drift(issues, "error", "no_missing_increase", issue)
    }
  }
}

///|
fn gate_push_from_drift(
  issues : Array[CsvQualityGateIssue],
  severity : String,
  rule : String,
  issue : CsvDriftIssue,
) -> Unit {
  issues.push({ severity, rule, column: issue.column, message: issue.message })
}

///|
fn gate_passed(issues : Array[CsvQualityGateIssue]) -> Bool {
  for issue in issues {
    if issue.severity == "error" {
      return false
    }
  }
  true
}

///|
fn gate_write_options_json(
  out : StringBuilder,
  options : CsvQualityGateOptions,
) -> Unit {
  out.write_char('{')
  out.write_string("\"min_score\":\{options.min_score}")
  out.write_string(",\"max_score_drop\":\{options.max_score_drop}")
  out.write_string(",\"max_quality_issues\":\{options.max_quality_issues}")
  out.write_string(",\"allow_new_columns\":")
  gate_write_json_bool(out, options.allow_new_columns)
  out.write_string(",\"allow_removed_columns\":")
  gate_write_json_bool(out, options.allow_removed_columns)
  out.write_string(",\"allow_type_changes\":")
  gate_write_json_bool(out, options.allow_type_changes)
  out.write_string(",\"allow_missing_increase\":")
  gate_write_json_bool(out, options.allow_missing_increase)
  out.write_char('}')
}

///|
fn gate_write_issues_json(
  out : StringBuilder,
  issues : Array[CsvQualityGateIssue],
) -> Unit {
  out.write_char('[')
  for i in 0..<issues.length() {
    if i > 0 {
      out.write_char(',')
    }
    let issue = issues[i]
    out.write_char('{')
    out.write_string("\"severity\":")
    gate_write_json_string(out, issue.severity)
    out.write_string(",\"rule\":")
    gate_write_json_string(out, issue.rule)
    out.write_string(",\"column\":")
    gate_write_json_string(out, issue.column)
    out.write_string(",\"message\":")
    gate_write_json_string(out, issue.message)
    out.write_char('}')
  }
  out.write_char(']')
}

///|
fn gate_write_json_bool(out : StringBuilder, value : Bool) -> Unit {
  out.write_string(if value { "true" } else { "false" })
}

///|
fn gate_bool_text(value : Bool) -> String {
  if value {
    "yes"
  } else {
    "no"
  }
}

///|
fn gate_signed_int(value : Int) -> String {
  if value > 0 {
    "+\{value}"
  } else {
    value.to_string()
  }
}

///|
fn gate_write_markdown_cell(out : StringBuilder, value : String) -> Unit {
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
fn gate_write_json_string(out : StringBuilder, value : String) -> Unit {
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
