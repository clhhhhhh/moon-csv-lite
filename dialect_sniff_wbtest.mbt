///|
test "sniff dialect chooses comma for normal csv" {
  let dialect = sniff_dialect("name,age\nAlice,18\nBob,20")
  inspect(dialect_name(dialect), content="comma")
  inspect(dialect.newline == "\n", content="true")
}

///|
test "sniff dialect chooses tab for tsv" {
  let dialect = sniff_dialect("name\tage\nAlice\t18\nBob\t20")
  inspect(dialect_name(dialect), content="tab")
  let table = parse_table_auto("name\tage\nAlice\t18")
  inspect(table.headers[1], content="age")
  inspect(table.rows[0][1], content="18")
}

///|
test "sniff dialect chooses semicolon for spreadsheet exports" {
  let dialect = sniff_dialect("name;age\nAlice;18\nBob;20")
  inspect(dialect_name(dialect), content="semicolon")
}

///|
test "sniff dialect chooses pipe for pipe separated text" {
  let dialect = sniff_dialect("name|age|city\nAlice|18|Shenzhen")
  inspect(dialect_name(dialect), content="pipe")
}

///|
test "sniff dialect report includes all candidates" {
  let report = sniff_dialect_report("name,age\nAlice,18")
  inspect(report.length(), content="4")
  inspect(report[0].name, content="comma")
  inspect(report[0].columns, content="2")
}

///|
test "sniff dialect markdown renders score table" {
  let markdown = sniff_dialect_markdown("name,age\nAlice,18")
  inspect(markdown.contains("| dialect | delimiter |"), content="true")
  inspect(markdown.contains("| comma | , |"), content="true")
}

///|
test "sniff dialect summary reports detected shape" {
  let summary = sniff_dialect_summary("name,age\r\nAlice,18")
  inspect(summary.contains("dialect: comma"), content="true")
  inspect(summary.contains("newline: \\r\\n"), content="true")
  inspect(summary.contains("columns: 2"), content="true")
}

///|
test "parse auto keeps quoted delimiters intact" {
  let table = parse_table_auto("name;note\nAlice;\"hello; world\"")
  inspect(table.rows[0][1], content="hello; world")
}
