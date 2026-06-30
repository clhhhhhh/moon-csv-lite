///|
test "table inner join combines matching rows" {
  let left = parse_table("id,name\n1,Alice\n2,Bob")
  let right = parse_table("id,city\n1,Shenzhen\n3,Beijing")
  let joined = table_inner_join(left, right, "id", "id")
  debug_inspect(joined.headers, content="[\"id\", \"name\", \"city\"]")
  debug_inspect(joined.rows, content="[[\"1\", \"Alice\", \"Shenzhen\"]]")
}

///|
test "table left join preserves unmatched left rows" {
  let left = parse_table("id,name\n1,Alice\n2,Bob")
  let right = parse_table("id,city\n1,Shenzhen")
  let joined = table_left_join(left, right, "id", "id")
  debug_inspect(
    joined.rows,
    content="[[\"1\", \"Alice\", \"Shenzhen\"], [\"2\", \"Bob\", \"\"]]",
  )
}

///|
test "table join prefixes duplicate right headers" {
  let left = parse_table("id,name\n1,Alice")
  let right = parse_table("id,name\n1,Engineer")
  let joined = table_inner_join(left, right, "id", "id")
  debug_inspect(joined.headers, content="[\"id\", \"name\", \"right_name\"]")
  debug_inspect(joined.rows, content="[[\"1\", \"Alice\", \"Engineer\"]]")
}

///|
test "table append requires matching headers" {
  let top = parse_table("id,name\n1,Alice")
  let bottom = parse_table("id,name\n2,Bob")
  let appended = table_append(top, bottom)
  debug_inspect(appended.rows, content="[[\"1\", \"Alice\"], [\"2\", \"Bob\"]]")
  let mismatch = table_append(top, parse_table("name,id\nCara,3"))
  debug_inspect(mismatch.rows, content="[[\"1\", \"Alice\"]]")
}

///|
test "table union by name aligns columns" {
  let left = parse_table("id,name\n1,Alice")
  let right = parse_table("city,id\nShenzhen,2")
  let unioned = table_union_by_name(left, right)
  debug_inspect(unioned.headers, content="[\"id\", \"name\", \"city\"]")
  debug_inspect(
    unioned.rows,
    content="[[\"1\", \"Alice\", \"\"], [\"2\", \"\", \"Shenzhen\"]]",
  )
}

///|
test "table transpose turns columns into rows" {
  let table = parse_table("name,age\nAlice,18\nBob,20")
  let transposed = table_transpose(table)
  debug_inspect(
    transposed.headers,
    content="[\"column\", \"row_1\", \"row_2\"]",
  )
  debug_inspect(
    transposed.rows,
    content="[[\"name\", \"Alice\", \"Bob\"], [\"age\", \"18\", \"20\"]]",
  )
}

///|
test "table anti join keeps unmatched rows" {
  let left = parse_table("id,name\n1,Alice\n2,Bob\n3,Cara")
  let right = parse_table("id\n2")
  let anti = table_anti_join(left, right, "id", "id")
  debug_inspect(anti.rows, content="[[\"1\", \"Alice\"], [\"3\", \"Cara\"]]")
}

///|
test "table reorder columns moves requested columns first" {
  let table = parse_table("name,age,city\nAlice,18,Shenzhen")
  let reordered = table_reorder_columns(table, ["city"])
  debug_inspect(reordered.headers, content="[\"city\", \"name\", \"age\"]")
  debug_inspect(reordered.rows, content="[[\"Shenzhen\", \"Alice\", \"18\"]]")
}
