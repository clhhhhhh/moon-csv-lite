///|
test "audit drift detects schema type and missing changes" {
  let baseline = "name,age,city\nAlice,18,Shenzhen\nBob,20,Shanghai"
  let candidate = "name,age\nAlice,18\nBob,\nCara,nope"
  let report = audit_drift(baseline, candidate)
  inspect(report.row_delta, content="1")
  inspect(report.column_delta, content="-1")
  inspect(report.issues.length(), content="5")
  let markdown = audit_drift_report_markdown(report)
  inspect(markdown.contains("# CSV Drift Report"), content="true")
  inspect(markdown.contains("Column `city` was removed"), content="true")
  inspect(
    markdown.contains("Column `age` type changed from integer to text"),
    content="true",
  )
  inspect(
    markdown.contains("Column `age` missing values increased from 0 to 1"),
    content="true",
  )
}

///|
test "audit drift renders json and compact text" {
  let baseline = "name,age\nAlice,18\nBob,20"
  let candidate = "name,age\nAlice,18\nBob,"
  let report = audit_drift(baseline, candidate)
  let json = audit_drift_report_json(report)
  inspect(json.contains("\"baseline_score\":100"), content="true")
  inspect(json.contains("\"candidate_score\":93"), content="true")
  inspect(json.contains("\"score_delta\":-7"), content="true")
  inspect(json.contains("\"category\":\"missing\""), content="true")
  inspect(
    audit_drift_text(report),
    content="drift: baseline_score=100, candidate_score=93, score_delta=-7, row_delta=0, column_delta=0, issues=1",
  )
}

///|
test "audit drift markdown reports no drift for identical data" {
  let markdown = audit_drift_markdown(
    "name,age\nAlice,18\nBob,20", "name,age\nAlice,18\nBob,20",
  )
  inspect(
    markdown.contains("No schema or quality drift detected."),
    content="true",
  )
}
