///|
test "table to html escapes cells and pads short rows" {
  let table = {
    headers: ["name", "note"],
    rows: [["Alice", "<ok>&\""], ["Bob"]],
  }
  inspect(
    table_to_html(table),
    content="<table>\n  <thead>\n    <tr><th>name</th><th>note</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Alice</td><td>&lt;ok&gt;&amp;&quot;</td></tr>\n    <tr><td>Bob</td><td></td></tr>\n  </tbody>\n</table>",
  )
}

///|
test "profile report markdown renders profile table" {
  let table = parse_table("name,score\nAlice,10\nBob,20\nCara,")
  inspect(
    profile_report_markdown(table),
    content="# Data Profile\n\n- Rows: 3\n- Columns: 2\n\n| column | type | empty | non_empty | unique | min | max | average |\n| --- | --- | ---: | ---: | ---: | --- | --- | --- |\n| name | text | 0 | 3 | 3 |  |  |  |\n| score | integer | 1 | 2 | 2 | 10 | 20 | 15 |\n",
  )
}

///|
test "validation errors markdown renders ok and errors" {
  inspect(validation_errors_to_markdown([]), content="No validation errors.")
  let errors = [
    { row: 2, column: "age", message: "expected integer" },
    { row: 3, column: "name", message: "required value is empty" },
  ]
  inspect(
    validation_errors_to_markdown(errors),
    content="# Validation Errors\n\n- Row 2, column `age`: expected integer\n- Row 3, column `name`: required value is empty\n",
  )
}

///|
test "quality report html renders errors and profile" {
  let table = parse_table("name,age\nAlice,18\n,abc")
  let rules = [
    { name: "name", kind: Text, required: true },
    { name: "age", kind: Integer, required: true },
  ]
  let html = quality_report_html(table, validate_table(table, rules))
  inspect(html.contains("<h1>CSV Quality Report</h1>"), content="true")
  inspect(html.contains("Row 3"), content="true")
  inspect(html.contains("Column Profile"), content="true")
}
