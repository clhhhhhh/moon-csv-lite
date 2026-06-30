///|
fn main {
  let data =
    #|name,age,active,score
    #|Alice,18,true,95.5
    #|Bob,nope,false,88
    #|,20,maybe,
  let table = @csv.parse_table(data)
  let rules : Array[@csv.CsvColumnRule] = [
    { name: "name", kind: @csv.Text, required: true },
    { name: "age", kind: @csv.Integer, required: true },
    { name: "active", kind: @csv.Boolean, required: true },
    { name: "score", kind: @csv.Float, required: false },
  ]
  println("Validation")
  println(@csv.validation_errors_to_text(@csv.validate_table(table, rules)))
  println("")
  println("Profile")
  println(@csv.profile_report(table))
}
