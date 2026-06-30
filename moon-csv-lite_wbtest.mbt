///|
test "parse simple comma-separated row" {
  debug_inspect(
    parse("name,age,city"),
    content="[[\"name\", \"age\", \"city\"]]",
  )
}

///|
test "parse empty input" {
  debug_inspect(parse(""), content="[]")
}

///|
test "parse empty fields" {
  debug_inspect(parse("a,,c"), content="[[\"a\", \"\", \"c\"]]")
}

///|
test "parse leading and trailing empty fields" {
  debug_inspect(parse(",a,"), content="[[\"\", \"a\", \"\"]]")
}

///|
test "parse LF line endings" {
  debug_inspect(parse("a,b\nc,d"), content="[[\"a\", \"b\"], [\"c\", \"d\"]]")
}

///|
test "parse CRLF line endings" {
  debug_inspect(parse("a,b\r\nc,d"), content="[[\"a\", \"b\"], [\"c\", \"d\"]]")
}

///|
test "ignore final line ending" {
  debug_inspect(parse("a,b\n"), content="[[\"a\", \"b\"]]")
}

///|
test "parse quoted fields" {
  debug_inspect(
    parse("\"hello\",\"world\""),
    content="[[\"hello\", \"world\"]]",
  )
}

///|
test "parse comma inside quoted field" {
  debug_inspect(
    parse("\"hello, world\",123"),
    content="[[\"hello, world\", \"123\"]]",
  )
}

///|
test "parse newline inside quoted field" {
  debug_inspect(
    parse("\"hello\nworld\",ok"),
    content="[[\"hello\\nworld\", \"ok\"]]",
  )
}

///|
test "parse escaped double quotes" {
  debug_inspect(
    parse("\"He said \"\"Hi\"\"\""),
    content="[[\"He said \\\"Hi\\\"\"]]",
  )
}

///|
test "stringify simple rows" {
  inspect(
    stringify([["name", "age"], ["Alice", "18"]]),
    content="name,age\nAlice,18",
  )
}

///|
test "stringify quotes fields when needed" {
  inspect(
    stringify([["hello, world", "He said \"Hi\""]]),
    content="\"hello, world\",\"He said \"\"Hi\"\"\"",
  )
}

///|
test "stringify preserves embedded newlines" {
  inspect(stringify([["hello\nworld", "ok"]]), content="\"hello\nworld\",ok")
}

///|
test "parse blank line as empty field" {
  debug_inspect(parse("\n"), content="[[\"\"]]")
}

///|
test "parse multiple rows with empty cells" {
  debug_inspect(parse("a,\n,b"), content="[[\"a\", \"\"], [\"\", \"b\"]]")
}

///|
test "round trip mixed CSV data" {
  let rows = [["a", "b"], ["c,d", "\""]]
  debug_inspect(
    parse(stringify(rows)),
    content="[[\"a\", \"b\"], [\"c,d\", \"\\\"\"]]",
  )
}

///|
test "parse tab-separated dialect" {
  debug_inspect(
    parse_with_dialect("name\tage\nAlice\t18", tsv_dialect()),
    content="[[\"name\", \"age\"], [\"Alice\", \"18\"]]",
  )
}

///|
test "stringify semicolon dialect with CRLF" {
  let dialect = { delimiter: ';', newline: "\r\n", skip_empty_lines: false }
  inspect(
    stringify_with_dialect([["name", "note"], ["Alice", "a;b"]], dialect),
    content="name;note\r\nAlice;\"a;b\"",
  )
}

///|
test "skip empty lines with dialect option" {
  let dialect = { delimiter: ',', newline: "\n", skip_empty_lines: true }
  debug_inspect(
    parse_with_dialect("a,b\n\nc,d\n", dialect),
    content="[[\"a\", \"b\"], [\"c\", \"d\"]]",
  )
}

///|
test "parse table and get cells by header" {
  let table = parse_table("name,age\nAlice,18\nBob,20")
  debug_inspect(table_get(table, 1, "name"), content="Some(\"Bob\")")
  debug_inspect(table_get(table, 0, "missing"), content="None")
}

///|
test "convert table to markdown" {
  let table = parse_table("name,note\nAlice,\"hello, world\"")
  inspect(
    table_to_markdown(table),
    content="| name | note |\n| --- | --- |\n| Alice | hello, world |",
  )
}

///|
test "convert table to json lines" {
  let table = parse_table("name,note\nAlice,\"He said \"\"Hi\"\"\"")
  inspect(
    table_to_json_lines(table),
    content="{\"name\":\"Alice\",\"note\":\"He said \\\"Hi\\\"\"}",
  )
}

///|
test "validate table with schema rules" {
  let table = parse_table(
    "name,age,active\nAlice,18,true\nBob,nope,false\n,20,maybe",
  )
  let rules = [
    { name: "name", kind: Text, required: true },
    { name: "age", kind: Integer, required: true },
    { name: "active", kind: Boolean, required: true },
  ]
  inspect(
    validation_errors_to_text(validate_table(table, rules)),
    content="row 4, name: required value is empty\nrow 3, age: expected integer\nrow 4, active: expected boolean",
  )
}

///|
test "profile table columns" {
  let table = parse_table("name,score\nAlice,10\nBob,20\nAlice,")
  let profiles = profile_table(table)
  inspect(profiles[0].name, content="name")
  inspect(profiles[0].unique, content="2")
  debug_inspect(profiles[0].inferred, content="TextColumn")
  inspect(profiles[1].empty, content="1")
  debug_inspect(profiles[1].inferred, content="IntegerColumn")
  debug_inspect(profiles[1].average, content="Some(15)")
}

///|
test "render profile report" {
  let table = parse_table("name,score\nAlice,10\nBob,20\nAlice,")
  inspect(
    profile_report(table),
    content="rows: 3\ncolumns: 2\n- name: type=text, empty=0/3, unique=2\n- score: type=integer, empty=1/3, unique=2, min=10, max=20, avg=15",
  )
}

///|
test "parse semicolon dialect" {
  debug_inspect(
    parse_with_dialect("name;age\nAlice;18", semicolon_dialect()),
    content="[[\"name\", \"age\"], [\"Alice\", \"18\"]]",
  )
}

///|
test "parse quoted field followed by newline" {
  debug_inspect(
    parse("\"hello\"\n\"world\""),
    content="[[\"hello\"], [\"world\"]]",
  )
}

///|
test "parse table handles empty input" {
  let table = parse_table("")
  inspect(table.headers.length(), content="0")
  inspect(table.rows.length(), content="0")
}

///|
test "table_get handles missing rows and short rows" {
  let table = parse_table("name,age\nAlice")
  debug_inspect(table_get(table, 1, "name"), content="None")
  debug_inspect(table_get(table, 0, "age"), content="Some(\"\")")
}

///|
test "markdown export escapes cell separators and pads short rows" {
  let table = {
    headers: ["name", "note"],
    rows: [["Alice", "x|y\nz"], ["Bob"]],
  }
  inspect(
    table_to_markdown(table),
    content="| name | note |\n| --- | --- |\n| Alice | x\\|y z |\n| Bob |  |",
  )
}

///|
test "json lines export escapes multiple rows" {
  let table = {
    headers: ["name", "note"],
    rows: [["Alice", "one\\two"], ["Bob", "line\nnext\tend"]],
  }
  inspect(
    table_to_json_lines(table),
    content="{\"name\":\"Alice\",\"note\":\"one\\\\two\"}\n{\"name\":\"Bob\",\"note\":\"line\\nnext\\tend\"}",
  )
}

///|
test "validation handles ok result missing column and float rule" {
  let ok = parse_table("name,score\nAlice,95.5")
  let ok_rules = [
    { name: "name", kind: Text, required: true },
    { name: "score", kind: Float, required: true },
  ]
  inspect(validation_errors_to_text(validate_table(ok, ok_rules)), content="ok")
  let missing = validate_table(ok, [
    { name: "missing", kind: Text, required: true },
  ])
  inspect(
    validation_errors_to_text(missing),
    content="row 1, missing: missing column",
  )
}

///|
test "profile detects empty boolean and float columns" {
  let table = parse_table("empty,flag,score\n,true,1.5\n,false,2.25")
  let profiles = profile_table(table)
  debug_inspect(profiles[0].inferred, content="EmptyOnly")
  inspect(inferred_type_name(profiles[0].inferred), content="empty")
  debug_inspect(profiles[1].inferred, content="BooleanColumn")
  inspect(inferred_type_name(profiles[1].inferred), content="boolean")
  debug_inspect(profiles[2].inferred, content="FloatColumn")
  inspect(inferred_type_name(profiles[2].inferred), content="float")
}

///|
test "parse standalone CR and CR separated rows" {
  debug_inspect(parse("\r"), content="[[\"\"]]")
  debug_inspect(parse("a,b\rc,d"), content="[[\"a\", \"b\"], [\"c\", \"d\"]]")
}

///|
test "parse quoted field followed by CR and trailing text" {
  debug_inspect(
    parse("\"hello\"\r\"world\""),
    content="[[\"hello\"], [\"world\"]]",
  )
  debug_inspect(parse("\"a\"x,b"), content="[[\"ax\", \"b\"]]")
}

///|
test "skip final empty line with dialect option" {
  let dialect = { delimiter: ',', newline: "\n", skip_empty_lines: true }
  debug_inspect(parse_with_dialect("\n", dialect), content="[]")
}

///|
test "validation handles short rows and float type errors" {
  let short_row = parse_table("name,age\nAlice")
  let required_age = [{ name: "age", kind: Integer, required: true }]
  inspect(
    validation_errors_to_text(validate_table(short_row, required_age)),
    content="row 2, age: required value is empty",
  )
  let bad_float = parse_table("score\nnope")
  let float_rule = [{ name: "score", kind: Float, required: true }]
  inspect(
    validation_errors_to_text(validate_table(bad_float, float_rule)),
    content="row 2, score: expected float",
  )
}

///|
test "json lines export escapes carriage returns" {
  let table = { headers: ["note"], rows: [["a\rb"]] }
  inspect(table_to_json_lines(table), content="{\"note\":\"a\\rb\"}")
}
