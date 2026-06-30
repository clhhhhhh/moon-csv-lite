///|
fn main {
  let input =
    #|order_id;region;amount;paid
    #|SO-1001;east;120.5;true
    #|SO-1002;west;;false
    #|SO-1003;east;130.0;true
  let report = @csv.audit_csv(input)
  println(@csv.audit_status_text(report))
  println("")
  println(@csv.audit_recommendations_markdown(report))
  println(@csv.table_schema_markdown(report.table))
}
