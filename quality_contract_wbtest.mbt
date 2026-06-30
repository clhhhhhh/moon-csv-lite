///|
fn sample_sales_contract() -> String {
  (
    #|rule,column,value,extra
    #|name,*,sales-contract,
    #|min_score,*,95,
    #|max_parse_issues,*,0,
    #|max_quality_issues,*,0,
    #|min_rows,*,3,
    #|required,order_id,,
    #|required,region,,
    #|type,amount,float,required
    #|min,amount,0,
    #|allowed,region,east|west,required
    #|unique,order_id,,
  )
}

///|
test "quality contract passes clean sales table" {
  let report = audit_quality_contract(
    "order_id,region,amount\nSO-1,east,10\nSO-2,west,20\nSO-3,east,15",
    quality_contract_from_csv(sample_sales_contract()),
  )
  inspect(report.passed, content="true")
  inspect(report.contract.name, content="sales-contract")
  inspect(report.issues.length(), content="0")
}

///|
test "quality contract reports ranges enums types and unique keys" {
  let report = audit_quality_contract(
    "order_id,region,amount\nSO-1,east,10\nSO-1,north,-2\nSO-3,west,nope",
    quality_contract_from_csv(sample_sales_contract()),
  )
  inspect(report.passed, content="false")
  let json = audit_quality_contract_report_json(report)
  inspect(json.contains("\"rule\":\"allowed\""), content="true")
  inspect(json.contains("\"rule\":\"min\""), content="true")
  inspect(json.contains("\"rule\":\"type\""), content="true")
  inspect(json.contains("\"rule\":\"unique\""), content="true")
}

///|
test "quality contract markdown and json render stable summaries" {
  let markdown = audit_quality_contract_markdown(
    "order_id,region,amount\nSO-1,east,10\nSO-2,west,20\nSO-3,east,15",
    sample_sales_contract(),
  )
  inspect(markdown.contains("# CSV Quality Contract Report"), content="true")
  inspect(markdown.contains("- Status: pass"), content="true")
  let json = audit_quality_contract_json(
    "order_id,region,amount\nSO-1,east,10\nSO-2,west,20\nSO-3,east,15",
    sample_sales_contract(),
  )
  inspect(json.contains("\"passed\":true"), content="true")
  inspect(json.contains("\"name\":\"sales-contract\""), content="true")
}

///|
test "quality contract inference emits a reusable contract csv" {
  let contract = quality_contract_infer_csv(
    "id,amount,paid\nA,10,true\nB,20,false",
  )
  inspect(contract.contains("rule,column,value,extra"), content="true")
  inspect(contract.contains("type,amount,integer,required"), content="true")
  inspect(contract.contains("type,paid,boolean,required"), content="true")
  inspect(contract.contains("unique,id,,"), content="true")
}
