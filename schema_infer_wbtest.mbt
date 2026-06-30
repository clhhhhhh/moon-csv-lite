///|
test "infer schema detects scalar types and required columns" {
  let table = parse_table(
    "name,age,active,score\nAlice,18,true,95.5\nBob,20,false,88",
  )
  let rules = infer_schema(table)
  inspect(rules.length(), content="4")
  inspect(schema_inferred_required(rules, "name"), content="true")
  debug_inspect(schema_inferred_type(rules, "age"), content="Some(Integer)")
  debug_inspect(schema_inferred_type(rules, "active"), content="Some(Boolean)")
  debug_inspect(schema_inferred_type(rules, "score"), content="Some(Float)")
}

///|
test "infer schema marks columns optional when values are missing" {
  let table = parse_table("name,city\nAlice,Shenzhen\nBob,")
  let rules = infer_schema(table)
  inspect(schema_inferred_required(rules, "city"), content="false")
  inspect(rules[1].empty, content="1")
  inspect(rules[1].total, content="2")
}

///|
test "infer validation rules can validate compatible data" {
  let table = parse_table("name,age\nAlice,18\nBob,20")
  let errors = validate_table(table, infer_validation_rules(table))
  inspect(validation_errors_to_text(errors), content="ok")
}

///|
test "schema inference markdown renders examples and counts" {
  let table = parse_table("name,age\nAlice,18\nBob,20")
  let markdown = table_schema_markdown(table)
  inspect(markdown.contains("| column | type | required |"), content="true")
  inspect(
    markdown.contains("| age | integer | yes | 0/2 | 2 | 18, 20 |"),
    content="true",
  )
}

///|
test "schema inference examples follow duplicate column positions" {
  let table = parse_table("name,name\nAlice,18\nBob,20")
  let markdown = table_schema_markdown(table)
  inspect(
    markdown.contains("| name | text | yes | 0/2 | 2 | Alice, Bob |"),
    content="true",
  )
  inspect(
    markdown.contains("| name | integer | yes | 0/2 | 2 | 18, 20 |"),
    content="true",
  )
}

///|
test "schema inference text is compact" {
  let table = parse_table("name,age\nAlice,18\nBob,")
  let text = table_schema_text(table)
  inspect(text.contains("name: text, required"), content="true")
  inspect(text.contains("age: integer, optional"), content="true")
}

///|
test "schema inference auto handles tab separated text" {
  let rules = infer_schema_auto("name\tage\nAlice\t18\nBob\t20")
  inspect(rules[1].name, content="age")
  debug_inspect(rules[1].kind, content="Integer")
}

///|
test "column examples are unique and limited" {
  let table = parse_table("city\nShenzhen\nShanghai\nShenzhen\nBeijing")
  debug_inspect(
    column_examples(table, "city", 2),
    content="[\"Shenzhen\", \"Shanghai\"]",
  )
}

///|
test "schema inference escapes markdown pipes" {
  let table = parse_table("name,note\nAlice,\"a|b\"")
  let markdown = table_schema_markdown(table)
  inspect(markdown.contains("a\\|b"), content="true")
}
