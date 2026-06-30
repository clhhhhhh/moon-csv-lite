///|
test "public parse API" {
  debug_inspect(
    @csv.parse("name,age\nAlice,18"),
    content="[[\"name\", \"age\"], [\"Alice\", \"18\"]]",
  )
}

///|
test "public stringify API" {
  inspect(
    @csv.stringify([["name", "note"], ["Alice", "hello, world"]]),
    content="name,note\nAlice,\"hello, world\"",
  )
}
