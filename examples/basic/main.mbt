///|
fn main {
  let text = "name,age\nAlice,18\nBob,20"
  let rows = @csv.parse(text)
  println(@csv.stringify(rows))
}
