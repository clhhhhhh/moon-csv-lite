///|
fn main {
  let text = "name,note\nAlice,\"hello, world\"\nBob,\"He said \"\"Hi\"\"\""
  let rows = @csv.parse(text)
  let output = @csv.stringify(rows)
  println(output)
}
