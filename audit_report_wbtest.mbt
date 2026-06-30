///|
test "audit csv detects dialect and builds report model" {
  let report = audit_csv("name;age\nAlice;18\nBob;")
  inspect(dialect_name(report.dialect), content="semicolon")
  inspect(report.table.rows.length(), content="2")
  inspect(report.table.headers.length(), content="2")
  inspect(report.parse_issues.length(), content="0")
  inspect(report.missing_summary.rows[1][1], content="1")
}

///|
test "audit report status marks parse issues" {
  let report = audit_csv("name,age\nAlice,18,extra")
  inspect(audit_report_ok(report), content="false")
  inspect(
    audit_status_text(report),
    content="status: issues, dialect: comma, rows: 1, columns: 2, parse_issues: 1, quality_issues: 0",
  )
}

///|
test "audit markdown includes all report sections" {
  let markdown = audit_csv_markdown("name,age\nAlice,18\nBob,20")
  inspect(markdown.contains("# CSV Audit Report"), content="true")
  inspect(markdown.contains("## Quality Score"), content="true")
  inspect(markdown.contains("## Inferred Schema"), content="true")
  inspect(markdown.contains("## Missing Values"), content="true")
  inspect(markdown.contains("## Column Profile"), content="true")
  inspect(markdown.contains("## Recommendations"), content="true")
  inspect(
    markdown.contains("| age | integer | yes | 0/2 | 2 | 18, 20 |"),
    content="true",
  )
  inspect(
    markdown.contains("Column `age` looks numeric and can be used"),
    content="true",
  )
}

///|
test "audit markdown reports parse issues" {
  let markdown = audit_csv_markdown("name,age\nAlice,18,extra")
  inspect(
    markdown.contains("| 2 | 1 | expected 2 fields, got 3 |"),
    content="true",
  )
  inspect(
    markdown.contains("Fix structural parse issues before trusting schema"),
    content="true",
  )
}

///|
test "audit html escapes data and renders sections" {
  let html = audit_csv_html("name,note\nAlice,\"a<b & c\"")
  inspect(html.contains("<h1>CSV Audit Report</h1>"), content="true")
  inspect(html.contains("a&lt;b &amp; c"), content="true")
  inspect(html.contains("<h2>Quality Score</h2>"), content="true")
  inspect(html.contains("<h2>Inferred Schema</h2>"), content="true")
  inspect(html.contains("<h2>Recommendations</h2>"), content="true")
}

///|
test "audit json renders machine readable summary" {
  let json = audit_csv_json("name,age\nAlice,18\nBob,")
  inspect(json.contains("\"status\":\"ok\""), content="true")
  inspect(json.contains("\"parse_issue_count\":0"), content="true")
  inspect(json.contains("\"quality_issue_count\":0"), content="true")
  inspect(json.contains("\"column\":\"age\""), content="true")
  inspect(json.contains("\"missing\":1"), content="true")
  inspect(json.contains("\"type\":\"integer\""), content="true")
  inspect(json.contains("\"score\":{\"score\":93"), content="true")
  inspect(json.contains("\"recommendations\""), content="true")
}

///|
test "audit json reports parse and quality issues" {
  let json = audit_csv_json("name,name,\nAlice,18,\nAlice,18,\n,,")
  inspect(json.contains("\"status\":\"issues\""), content="true")
  inspect(json.contains("\"quality_issue_count\":5"), content="true")
  inspect(json.contains("\"grade\":\"D\""), content="true")
  inspect(json.contains("Header `name` is duplicated"), content="true")
  inspect(json.contains("Row 3 duplicates row 2"), content="true")
}

///|
test "audit quality score grades clean and risky data" {
  let clean = audit_csv_score("name,age\nAlice,18\nBob,20")
  inspect(clean.score, content="100")
  inspect(clean.grade, content="A")
  inspect(clean.risk, content="low")
  inspect(clean.missing_cells, content="0")
  inspect(clean.total_cells, content="4")
  let risky = audit_csv_score("name,name,\nAlice,18,\nAlice,18,\n,,")
  inspect(risky.score, content="67")
  inspect(risky.grade, content="D")
  inspect(risky.risk, content="high")
  inspect(risky.completeness_score, content="45")
  inspect(risky.consistency_score, content="56")
  inspect(risky.uniqueness_score, content="88")
}

///|
test "audit json escapes strings" {
  let json = audit_csv_json("name,note\nAlice,\"a\\b\"")
  inspect(json.contains("a\\\\b"), content="true")
}

///|
test "audit with explicit dialect supports tabs" {
  let report = audit_csv_with_dialect("name\tage\nAlice\t18", tsv_dialect())
  inspect(dialect_name(report.dialect), content="tab")
  inspect(report.table.rows[0][1], content="18")
  inspect(audit_report_ok(report), content="true")
}

///|
test "audit recommendations include missing and dialect advice" {
  let report = audit_csv("name;age\nAlice;18\nBob;")
  let markdown = audit_recommendations_markdown(report)
  inspect(markdown.contains("Detected semicolon dialect"), content="true")
  inspect(markdown.contains("Column `age` has 1 missing value"), content="true")
}

///|
test "audit recommendations include clean sample fallback" {
  let report = audit_csv("name,active\nAlice,true\nBob,false")
  let recommendations = audit_recommendations(report)
  inspect(recommendations.length(), content="1")
  inspect(
    recommendations[0].message,
    content="No immediate data-quality issues were found in this sample.",
  )
}

///|
test "audit quality issues detect header and row problems" {
  let report = audit_csv("name,name,\nAlice,18,\nAlice,18,\n,,")
  inspect(audit_report_ok(report), content="false")
  inspect(report.quality_issues.length(), content="5")
  let markdown = audit_quality_issues_markdown(report.quality_issues)
  inspect(markdown.contains("Header `name` is duplicated"), content="true")
  inspect(markdown.contains("Header column #3 is empty"), content="true")
  inspect(
    markdown.contains("Column `#3` is empty in every row"),
    content="true",
  )
  inspect(markdown.contains("Row 4 is empty"), content="true")
  inspect(markdown.contains("Row 3 duplicates row 2"), content="true")
}

///|
test "audit quality issues detect all-empty columns" {
  let report = audit_csv("name,age,unused\nAlice,18,\nBob,20,")
  let markdown = audit_quality_issues_markdown(report.quality_issues)
  inspect(
    markdown.contains("Column `unused` is empty in every row"),
    content="true",
  )
  inspect(
    audit_recommendations_markdown(report).contains("Column `unused` is empty"),
    content="true",
  )
}
