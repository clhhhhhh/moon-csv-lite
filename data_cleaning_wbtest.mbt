///|
test "table drop empty rows removes all-empty rows" {
  let table = { headers: ["a", "b"], rows: [["1", ""], ["", ""], ["2"], []] }
  let cleaned = table_drop_empty_rows(table)
  debug_inspect(cleaned.rows, content="[[\"1\", \"\"], [\"2\"]]")
}

///|
test "table drop empty columns removes all-empty columns" {
  let table = parse_table("name,empty,city\nAlice,,Shenzhen\nBob,,Shanghai")
  let cleaned = table_drop_empty_columns(table)
  debug_inspect(cleaned.headers, content="[\"name\", \"city\"]")
  debug_inspect(
    cleaned.rows,
    content="[[\"Alice\", \"Shenzhen\"], [\"Bob\", \"Shanghai\"]]",
  )
}

///|
test "table replace value works globally" {
  let table = parse_table("name,city\nN/A,Shenzhen\nBob,N/A")
  let cleaned = table_replace_value(table, "N/A", "")
  debug_inspect(cleaned.rows, content="[[\"\", \"Shenzhen\"], [\"Bob\", \"\"]]")
}

///|
test "table replace in column only touches target column" {
  let table = parse_table("name,city\nN/A,N/A")
  let cleaned = table_replace_in_column(table, "city", "N/A", "Unknown")
  debug_inspect(cleaned.rows, content="[[\"N/A\", \"Unknown\"]]")
}

///|
test "table lowercase and uppercase column transform values" {
  let table = parse_table("name,city\nAlice,ShenZhen")
  inspect(table_lowercase_column(table, "city").rows[0][1], content="shenzhen")
  inspect(table_uppercase_column(table, "city").rows[0][1], content="SHENZHEN")
}

///|
test "table coalesce columns picks first non-empty value" {
  let table = parse_table(
    "email,backup\n,a@example.com\nb@example.com,b2@example.com\n,",
  )
  let cleaned = table_coalesce_columns(table, ["email", "backup"], "contact")
  inspect(cleaned.rows[0][2], content="a@example.com")
  inspect(cleaned.rows[1][2], content="b@example.com")
  inspect(cleaned.rows[2][2], content="")
}

///|
test "table normalize boolean rewrites common values" {
  let table = parse_table("active\nyes\nNo\n1\noff\nmaybe")
  let cleaned = table_normalize_boolean(table, "active")
  debug_inspect(
    cleaned.rows,
    content="[[\"true\"], [\"false\"], [\"true\"], [\"false\"], [\"maybe\"]]",
  )
}

///|
test "table missing summary counts missing and present cells" {
  let table = parse_table("name,age\nAlice,18\nBob,\nCara")
  let summary = table_missing_summary(table)
  debug_inspect(
    summary.headers,
    content="[\"column\", \"missing\", \"present\"]",
  )
  debug_inspect(
    summary.rows,
    content="[[\"name\", \"0\", \"3\"], [\"age\", \"2\", \"1\"]]",
  )
}

///|
test "table with row numbers prepends ordinal column" {
  let table = parse_table("name\nAlice\nBob")
  let numbered = table_with_row_numbers(table, "row")
  debug_inspect(numbered.headers, content="[\"row\", \"name\"]")
  debug_inspect(numbered.rows, content="[[\"1\", \"Alice\"], [\"2\", \"Bob\"]]")
}
