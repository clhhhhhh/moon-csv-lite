///|
test "web adapter exposes audit json" {
  let json = audit_csv_json("name,age\nAlice,18\nBob,")
  inspect(json.contains("\"status\":\"ok\""), content="true")
  inspect(json.contains("\"score\":{\"score\":93"), content="true")
}

///|
test "web adapter exposes data passport outputs" {
  let markdown = csv_data_passport_markdown(
    "id,amount\nA,10\nB,", "browser-dataset",
  )
  inspect(markdown.contains("# CSV Data Passport"), content="true")
  inspect(markdown.contains("- Name: browser-dataset"), content="true")
  let json = csv_data_passport_json(
    "city,count\nShenzhen,2\nShanghai,1", "city-counts",
  )
  inspect(json.contains("\"name\":\"city-counts\""), content="true")
  inspect(json.contains("\"numeric_columns\":1"), content="true")
}

///|
test "web adapter exposes drift json" {
  let json = audit_drift_json(
    "name,age\nAlice,18\nBob,20", "name,age\nAlice,18\nBob,",
  )
  inspect(json.contains("\"score_delta\":-7"), content="true")
  inspect(json.contains("\"category\":\"missing\""), content="true")
}

///|
test "web adapter names moonbit engine" {
  inspect(engine_name(), content="MoonBit JS backend")
}

///|
test "web adapter exposes quality gate json" {
  let json = audit_quality_gate_json(
    "name,age\nAlice,18\nBob,20", "name,age\nAlice,18\nBob,",
  )
  inspect(json.contains("\"passed\":false"), content="true")
  inspect(json.contains("\"rule\":\"no_missing_increase\""), content="true")
}

///|
test "web adapter exposes quality contract outputs" {
  let contract = "rule,column,value,extra\nname,*,sales-contract,\nmin_score,*,95,\nrequired,order_id,,\ntype,amount,float,required\nmin,amount,0,\nallowed,region,east|west,required\nunique,order_id,,"
  let json = audit_quality_contract_json(
    "order_id,region,amount\nSO-1,east,10\nSO-2,west,20", contract,
  )
  inspect(json.contains("\"passed\":true"), content="true")
  inspect(json.contains("\"name\":\"sales-contract\""), content="true")
  let inferred = quality_contract_infer_csv(
    "id,amount,paid\nA,10,true\nB,20,false",
  )
  inspect(inferred.contains("type,amount,integer,required"), content="true")
  let markdown = audit_quality_contract_markdown(
    "order_id,region,amount\nSO-1,east,10\nSO-1,north,-2", contract,
  )
  inspect(markdown.contains("# CSV Quality Contract Report"), content="true")
  inspect(markdown.contains("- Status: fail"), content="true")
}

///|
test "web adapter exposes chart preview outputs" {
  let json = chart_csv_json("team,score\nA,10\nB,20\nA,15", "bar")
  inspect(json.contains("\"kind\":\"bar\""), content="true")
  inspect(json.contains("\"label\":\"A\",\"value\":25"), content="true")
  let svg = chart_csv_svg("team,score\nA,10\nB,20\nA,15", "line")
  inspect(svg.contains("<svg"), content="true")
  inspect(svg.contains("<polyline"), content="true")
  let html = chart_csv_html(
    "city,status\n深圳,ok\n上海,ok\n深圳,retry", "bar",
  )
  inspect(html.contains("<!doctype html>"), content="true")
  inspect(html.contains("count by city"), content="true")
}
