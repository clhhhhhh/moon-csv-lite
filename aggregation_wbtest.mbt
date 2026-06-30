///|
test "column count empty and non empty" {
  let table = parse_table("name,score\nAlice,10\nBob,\nCara")
  inspect(column_count_non_empty(table, "score"), content="1")
  inspect(column_count_empty(table, "score"), content="2")
}

///|
test "column unique values preserve first seen order" {
  let table = parse_table("city\nShenzhen\nShanghai\nShenzhen\nBeijing")
  debug_inspect(
    column_unique_values(table, "city"),
    content="[\"Shenzhen\", \"Shanghai\", \"Beijing\"]",
  )
}

///|
test "column numeric summary ignores non numeric values" {
  let table = parse_table("score\n10\nbad\n20\n")
  let summary = column_numeric_summary(table, "score")
  inspect(summary.count, content="2")
  inspect(summary.sum, content="30")
  debug_inspect(summary.average, content="Some(15)")
  debug_inspect(summary.min, content="Some(10)")
  debug_inspect(summary.max, content="Some(20)")
}

///|
test "column numeric helpers return summary fields" {
  let table = parse_table("score\n5\n7\n9")
  inspect(column_sum(table, "score"), content="21")
  debug_inspect(column_average(table, "score"), content="Some(7)")
  debug_inspect(column_min(table, "score"), content="Some(5)")
  debug_inspect(column_max(table, "score"), content="Some(9)")
}

///|
test "column numeric helpers handle missing column" {
  let table = parse_table("score\n5\n7")
  inspect(column_sum(table, "missing"), content="0")
  debug_inspect(column_average(table, "missing"), content="None")
}

///|
test "table group count counts rows per group" {
  let table = parse_table("team,score\nA,10\nB,20\nA,15")
  let grouped = table_group_count(table, "team")
  debug_inspect(grouped.headers, content="[\"team\", \"count\"]")
  debug_inspect(grouped.rows, content="[[\"A\", \"2\"], [\"B\", \"1\"]]")
}

///|
test "table group sum sums numeric values" {
  let table = parse_table("team,score\nA,10\nB,20\nA,15\nB,bad")
  let grouped = table_group_sum(table, "team", "score")
  debug_inspect(grouped.headers, content="[\"team\", \"sum_score\"]")
  debug_inspect(grouped.rows, content="[[\"A\", \"25\"], [\"B\", \"20\"]]")
}

///|
test "table group average averages numeric values" {
  let table = parse_table("team,score\nA,10\nB,20\nA,20")
  let grouped = table_group_average(table, "team", "score")
  debug_inspect(grouped.headers, content="[\"team\", \"average_score\"]")
  debug_inspect(grouped.rows, content="[[\"A\", \"15\"], [\"B\", \"20\"]]")
}

///|
test "column summary markdown renders metrics" {
  let table = parse_table("score\n5\n7\n9")
  inspect(
    column_summary_markdown(table, "score"),
    content="### Column `score`\n\n| metric | value |\n| --- | --- |\n| numeric_count | 3 |\n| sum | 21 |\n| average | 7 |\n| min | 5 |\n| max | 9 |",
  )
}
