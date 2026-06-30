///|
test "table row and column counts" {
  let table = parse_table("name,age\nAlice,18\nBob,20")
  inspect(table_row_count(table), content="2")
  inspect(table_column_count(table), content="2")
}

///|
test "table select columns reorders data" {
  let table = parse_table("name,age,city\nAlice,18,Shenzhen\nBob,20,Shanghai")
  let selected = table_select_columns(table, ["city", "name"])
  debug_inspect(selected.headers, content="[\"city\", \"name\"]")
  debug_inspect(
    selected.rows,
    content="[[\"Shenzhen\", \"Alice\"], [\"Shanghai\", \"Bob\"]]",
  )
}

///|
test "table drop columns removes requested headers" {
  let table = parse_table("name,age,city\nAlice,18,Shenzhen")
  let dropped = table_drop_columns(table, ["age"])
  debug_inspect(dropped.headers, content="[\"name\", \"city\"]")
  debug_inspect(dropped.rows, content="[[\"Alice\", \"Shenzhen\"]]")
}

///|
test "table rename column changes only matching header" {
  let table = parse_table("name,age\nAlice,18")
  let renamed = table_rename_column(table, "age", "years")
  debug_inspect(renamed.headers, content="[\"name\", \"years\"]")
}

///|
test "table filter equals keeps matching rows" {
  let table = parse_table(
    "name,city\nAlice,Shenzhen\nBob,Shanghai\nCara,Shenzhen",
  )
  let filtered = table_filter_eq(table, "city", "Shenzhen")
  inspect(filtered.rows.length(), content="2")
  inspect(filtered.rows[1][0], content="Cara")
}

///|
test "table filter not empty skips missing cells" {
  let table = parse_table("name,email\nAlice,a@example.com\nBob,\nCara")
  let filtered = table_filter_not_empty(table, "email")
  inspect(filtered.rows.length(), content="1")
  inspect(filtered.rows[0][0], content="Alice")
}

///|
test "table sort by column sorts lexicographically" {
  let table = parse_table("name,age\nCara,30\nAlice,18\nBob,20")
  let sorted = table_sort_by_column(table, "name")
  debug_inspect(
    sorted.rows,
    content="[[\"Alice\", \"18\"], [\"Bob\", \"20\"], [\"Cara\", \"30\"]]",
  )
}

///|
test "table limit slice and drop rows" {
  let table = parse_table("name\nAlice\nBob\nCara\nDave")
  inspect(table_limit(table, 2).rows.length(), content="2")
  debug_inspect(
    table_slice_rows(table, 1, 3).rows,
    content="[[\"Bob\"], [\"Cara\"]]",
  )
  debug_inspect(
    table_drop_rows(table, 2).rows,
    content="[[\"Cara\"], [\"Dave\"]]",
  )
}

///|
test "table fill empty pads rows to header width" {
  let table = parse_table("name,age,city\nAlice,,Shenzhen\nBob")
  let filled = table_fill_empty(table, "N/A")
  debug_inspect(
    filled.rows,
    content="[[\"Alice\", \"N/A\", \"Shenzhen\"], [\"Bob\", \"N/A\", \"N/A\"]]",
  )
}

///|
test "table trim and normalize headers" {
  let table = parse_table(" Full Name ,Age Group\n Alice , Adult ")
  let trimmed = table_trim_all(table)
  debug_inspect(trimmed.headers, content="[\"Full Name\", \"Age Group\"]")
  debug_inspect(trimmed.rows, content="[[\"Alice\", \"Adult\"]]")
  let normalized = table_normalize_headers(trimmed)
  debug_inspect(normalized.headers, content="[\"full_name\", \"age_group\"]")
}

///|
test "table deduplicate preserves first row" {
  let table = parse_table("name,age\nAlice,18\nBob,20\nAlice,18")
  let distinct = table_deduplicate(table)
  debug_inspect(
    distinct.rows,
    content="[[\"Alice\", \"18\"], [\"Bob\", \"20\"]]",
  )
}

///|
test "table add column computes values" {
  let table = parse_table("first,last\nAda,Lovelace\nGrace,Hopper")
  let enriched = table_add_column(table, "full", fn(row) -> String {
    row[0] + " " + row[1]
  })
  debug_inspect(enriched.headers, content="[\"first\", \"last\", \"full\"]")
  inspect(enriched.rows[0][2], content="Ada Lovelace")
  inspect(enriched.rows[1][2], content="Grace Hopper")
}

///|
test "table to rows includes header row" {
  let table = parse_table("name,age\nAlice,18")
  debug_inspect(
    table_to_rows(table),
    content="[[\"name\", \"age\"], [\"Alice\", \"18\"]]",
  )
}
