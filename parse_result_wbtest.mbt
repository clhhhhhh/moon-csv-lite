///|
test "parse checked reports ok for regular csv" {
  let report = parse_checked("name,age\nAlice,18\nBob,20")
  inspect(parse_report_ok(report), content="true")
  inspect(parse_issues_to_text(report.issues), content="ok")
}

///|
test "parse checked reports unclosed quote" {
  let report = parse_checked("name,note\nAlice,\"hello")
  inspect(parse_report_ok(report), content="false")
  inspect(
    parse_issues_to_text(report.issues),
    content="line 2, column 7: unclosed quoted field",
  )
}

///|
test "parse checked reports row width mismatch" {
  let report = parse_checked("a,b\n1,2,3\n4")
  inspect(
    parse_issues_to_text(report.issues),
    content="line 2, column 1: expected 2 fields, got 3\nline 3, column 1: expected 2 fields, got 1",
  )
}

///|
test "parse table checked returns table and issues" {
  let report = parse_table_checked("name,age\nAlice,18,extra")
  inspect(table_parse_report_ok(report), content="false")
  debug_inspect(report.table.headers, content="[\"name\", \"age\"]")
  inspect(report.table.rows.length(), content="1")
}

///|
test "parse issues markdown renders table" {
  let issues = [
    { message: "bad|value", line: 2, column: 3 },
    { message: "next\nline", line: 4, column: 1 },
  ]
  inspect(
    parse_issues_to_markdown(issues),
    content="## Parse Issues\n\n| line | column | message |\n| ---: | ---: | --- |\n| 2 | 3 | bad\\|value |\n| 4 | 1 | next line |\n",
  )
}
