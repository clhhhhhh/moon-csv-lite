///|
test "data passport summarizes dataset identity and quality" {
  let passport = csv_data_passport(
    "id,amount,paid,note\nA,10,true,ok\nB,,false,\nC,30,true,ok", "sales-sample",
  )
  inspect(passport.name, content="sales-sample")
  inspect(passport.dialect, content="comma")
  inspect(passport.rows, content="3")
  inspect(passport.columns, content="4")
  inspect(passport.cells, content="12")
  inspect(passport.missing_cells, content="2")
  inspect(passport.required_columns, content="2")
  inspect(passport.optional_columns, content="2")
  inspect(passport.numeric_columns, content="1")
  inspect(passport.boolean_columns, content="1")
  inspect(passport.text_columns, content="2")
  inspect(passport.score.grade, content="A")
  inspect(passport.fingerprint.contains("csvp-3x4-"), content="true")
}

///|
test "data passport markdown renders review friendly sections" {
  let markdown = csv_data_passport_markdown(
    "id,amount,paid\nA,10,true\nB,,false", "release-dataset",
  )
  inspect(markdown.contains("# CSV Data Passport"), content="true")
  inspect(markdown.contains("- Name: release-dataset"), content="true")
  inspect(markdown.contains("- Fingerprint: `csvp-2x3-"), content="true")
  inspect(markdown.contains("## Schema Summary"), content="true")
  inspect(
    markdown.contains("| amount | integer | no | 1/2 | 1 | 10 |"),
    content="true",
  )
  inspect(
    markdown.contains("Column `amount` has 1 missing value"),
    content="true",
  )
}

///|
test "data passport json renders machine readable artifact" {
  let json = csv_data_passport_json(
    "city,count\nShenzhen,2\nShanghai,1", "city-counts",
  )
  inspect(json.contains("\"name\":\"city-counts\""), content="true")
  inspect(json.contains("\"fingerprint\":\"csvp-2x2-"), content="true")
  inspect(
    json.contains("\"summary\":{\"rows\":2,\"columns\":2"),
    content="true",
  )
  inspect(json.contains("\"score\":{\"score\":100"), content="true")
  inspect(json.contains("\"numeric_columns\":1"), content="true")
  inspect(json.contains("\"schema\""), content="true")
  inspect(json.contains("\"recommendations\""), content="true")
}
