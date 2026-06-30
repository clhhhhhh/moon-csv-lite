///|
test "quality gate fails missing regression by default" {
  let report = audit_quality_gate_default(
    "name,age\nAlice,18\nBob,20", "name,age\nAlice,18\nBob,",
  )
  inspect(report.passed, content="false")
  inspect(report.issues.length(), content="1")
  inspect(report.issues[0].rule, content="no_missing_increase")
  inspect(
    audit_quality_gate_text(report),
    content="gate: fail, baseline_score=100, candidate_score=93, score_delta=-7, issues=1",
  )
}

///|
test "quality gate passes compatible candidate" {
  let markdown = audit_quality_gate_markdown(
    "name,age\nAlice,18\nBob,20", "name,age\nAlice,18\nBob,20",
  )
  inspect(markdown.contains("- Status: pass"), content="true")
  inspect(markdown.contains("No quality gate violations."), content="true")
}

///|
test "strict quality gate blocks added columns" {
  let report = audit_quality_gate(
    "name,age\nAlice,18",
    "name,age,city\nAlice,18,Shenzhen",
    quality_gate_strict_options(),
  )
  inspect(report.passed, content="false")
  inspect(report.issues[0].rule, content="no_new_columns")
}

///|
test "quality gate json is machine readable" {
  let json = audit_quality_gate_json(
    "name,age\nAlice,18\nBob,20", "name,age\nAlice,18\nBob,",
  )
  inspect(json.contains("\"passed\":false"), content="true")
  inspect(json.contains("\"rule\":\"no_missing_increase\""), content="true")
  inspect(json.contains("\"drift_issue_count\":1"), content="true")
}
