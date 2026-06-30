///|
test "validate required columns reports missing columns" {
  let table = parse_table("name,age\nAlice,18")
  let errors = validate_required_columns(table, ["name", "email"])
  inspect(
    validation_errors_to_text(errors),
    content="row 1, email: missing required column",
  )
}

///|
test "validate row widths reports short and long rows" {
  let table = { headers: ["a", "b"], rows: [["1"], ["2", "3", "4"]] }
  let errors = validate_row_widths(table)
  inspect(
    validation_errors_to_text(errors),
    content="row 2, *: expected 2 cells, got 1\nrow 3, *: expected 2 cells, got 3",
  )
}

///|
test "validate min and max number report range errors" {
  let table = parse_table("score\n5\n10\n20\nbad")
  inspect(
    validation_errors_to_text(validate_min_number(table, "score", 8.0)),
    content="row 2, score: expected number >= 8, got 5\nrow 5, score: expected number, got bad",
  )
  inspect(
    validation_errors_to_text(validate_max_number(table, "score", 15.0)),
    content="row 4, score: expected number <= 15, got 20\nrow 5, score: expected number, got bad",
  )
}

///|
test "validate allowed values handles required empty values" {
  let table = {
    headers: ["status"],
    rows: [["open"], ["closed"], ["bad"], [""]],
  }
  let errors = validate_allowed_values(
    table,
    "status",
    ["open", "closed"],
    true,
  )
  inspect(
    validation_errors_to_text(errors),
    content="row 4, status: unexpected value bad\nrow 5, status: required value is empty",
  )
}

///|
test "validate unique key reports duplicate row pairs" {
  let table = parse_table("team,id,score\nA,1,10\nB,1,20\nA,1,30")
  let errors = validate_unique_key(table, ["team", "id"])
  inspect(
    duplicate_key_errors_to_text(errors),
    content="row 4 duplicates row 2: A|1",
  )
}

///|
test "validation errors concat merges errors in order" {
  let first = [{ row: 1, column: "a", message: "first" }]
  let second = [{ row: 2, column: "b", message: "second" }]
  inspect(
    validation_errors_to_text(validation_errors_concat(first, second)),
    content="row 1, a: first\nrow 2, b: second",
  )
}

///|
test "schema validation markdown renders table" {
  let errors = [{ row: 2, column: "a|b", message: "bad\nvalue" }]
  inspect(
    schema_validation_markdown(errors),
    content="## Schema Validation\n\n| row | column | message |\n| ---: | --- | --- |\n| 2 | a\\|b | bad value |\n",
  )
}
