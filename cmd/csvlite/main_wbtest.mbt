///|
test "csvlite help renders usage" {
  inspect(csvlite_run([]).contains("csvlite profile"), content="true")
}

///|
test "csvlite version renders package version" {
  inspect(csvlite_run(["version"]), content="moon-csv-lite 0.1.0")
}

///|
test "csvlite markdown command renders table" {
  inspect(
    csvlite_run(["markdown", "name,age\\nAlice,18"]),
    content="| name | age |\n| --- | --- |\n| Alice | 18 |",
  )
}

///|
test "csvlite jsonl command renders json lines" {
  inspect(
    csvlite_run(["jsonl", "name,age\\nAlice,18"]),
    content="{\"name\":\"Alice\",\"age\":\"18\"}",
  )
}

///|
test "csvlite profile command renders profile" {
  inspect(
    csvlite_run(["profile", "name,age\\nAlice,18"]).contains("rows: 1"),
    content="true",
  )
}

///|
test "csvlite sniff command detects dialect" {
  let output = csvlite_run(["sniff", "name;age\\nAlice;18"])
  inspect(output.contains("dialect: semicolon"), content="true")
  inspect(output.contains("columns: 2"), content="true")
}

///|
test "csvlite schema command renders inferred schema" {
  let output = csvlite_run(["schema", "name,age\\nAlice,18\\nBob,20"])
  inspect(output.contains("| age | integer | yes | 0/2 | 2 |"), content="true")
}

///|
test "csvlite score command renders quality score" {
  let output = csvlite_run(["score", "name,age\\nAlice,18\\nBob,"])
  inspect(output.contains("score: 93 (A)"), content="true")
  inspect(output.contains("completeness: 75"), content="true")
}

///|
test "csvlite drift command renders markdown drift report" {
  let output = csvlite_run([
    "drift", "name,age,city\\nAlice,18,Shenzhen\\nBob,20,Shanghai", "name,age\\nAlice,18\\nBob,\\nCara,nope",
  ])
  inspect(output.contains("# CSV Drift Report"), content="true")
  inspect(output.contains("Column `city` was removed"), content="true")
  inspect(output.contains("type changed from integer to text"), content="true")
}

///|
test "csvlite drift json command renders machine readable drift report" {
  let output = csvlite_run([
    "drift-json", "name,age\\nAlice,18\\nBob,20", "name,age\\nAlice,18\\nBob,",
  ])
  inspect(output.contains("\"score_delta\":-7"), content="true")
  inspect(output.contains("\"category\":\"missing\""), content="true")
}

///|
test "csvlite gate command renders markdown quality gate report" {
  let output = csvlite_run([
    "gate", "name,age\\nAlice,18\\nBob,20", "name,age\\nAlice,18\\nBob,",
  ])
  inspect(output.contains("# CSV Quality Gate Report"), content="true")
  inspect(output.contains("- Status: fail"), content="true")
  inspect(output.contains("no_missing_increase"), content="true")
}

///|
test "csvlite gate json command renders machine readable quality gate report" {
  let output = csvlite_run([
    "gate-json", "name,age\\nAlice,18\\nBob,20", "name,age\\nAlice,18\\nBob,",
  ])
  inspect(output.contains("\"passed\":false"), content="true")
  inspect(output.contains("\"rule\":\"no_missing_increase\""), content="true")
}

///|
test "csvlite infer contract command renders contract csv" {
  let output = csvlite_run([
    "infer-contract", "id,amount,paid\\nA,10,true\\nB,20,false",
  ])
  inspect(output.contains("rule,column,value,extra"), content="true")
  inspect(output.contains("type,amount,integer,required"), content="true")
  inspect(output.contains("unique,id,,"), content="true")
}

///|
test "csvlite contract command renders markdown contract report" {
  let contract = "rule,column,value,extra\\nname,*,sales-contract,\\nmin_score,*,95,\\nrequired,order_id,,\\ntype,amount,float,required\\nmin,amount,0,\\nallowed,region,east|west,required\\nunique,order_id,,"
  let output = csvlite_run([
    "contract", "order_id,region,amount\\nSO-1,east,10\\nSO-1,north,-2", contract,
  ])
  inspect(output.contains("# CSV Quality Contract Report"), content="true")
  inspect(output.contains("- Status: fail"), content="true")
  inspect(output.contains("| error | unique |"), content="true")
}

///|
test "csvlite contract json command renders machine readable report" {
  let contract = "rule,column,value,extra\\nname,*,sales-contract,\\nmin_score,*,95,\\nrequired,order_id,,\\ntype,amount,float,required\\nmin,amount,0,\\nallowed,region,east|west,required\\nunique,order_id,,"
  let output = csvlite_run([
    "contract-json", "order_id,region,amount\\nSO-1,east,10\\nSO-2,west,20", contract,
  ])
  inspect(output.contains("\"passed\":true"), content="true")
  inspect(output.contains("\"name\":\"sales-contract\""), content="true")
}

///|
test "csvlite passport command renders data passport markdown" {
  let output = csvlite_run([
    "passport", "id,amount\\nA,10\\nB,", "sales-dataset",
  ])
  inspect(output.contains("# CSV Data Passport"), content="true")
  inspect(output.contains("- Name: sales-dataset"), content="true")
  inspect(output.contains("- Fingerprint: `csvp-2x2-"), content="true")
  inspect(output.contains("## Schema Summary"), content="true")
}

///|
test "csvlite passport json command renders data passport json" {
  let output = csvlite_run([
    "passport-json", "city,count\\nShenzhen,2\\nShanghai,1", "city-counts",
  ])
  inspect(output.contains("\"name\":\"city-counts\""), content="true")
  inspect(output.contains("\"fingerprint\":\"csvp-2x2-"), content="true")
  inspect(output.contains("\"numeric_columns\":1"), content="true")
}

///|
test "csvlite audit command renders markdown audit report" {
  let output = csvlite_run(["audit", "name,age\\nAlice,18\\nBob,"])
  inspect(output.contains("# CSV Audit Report"), content="true")
  inspect(output.contains("## Quality Score"), content="true")
  inspect(output.contains("## Missing Values"), content="true")
  inspect(output.contains("| age | 1 | 1 |"), content="true")
}

///|
test "csvlite audit html command renders html audit report" {
  let output = csvlite_run(["audit-html", "name,age\\nAlice,18"])
  inspect(output.contains("<h1>CSV Audit Report</h1>"), content="true")
  inspect(output.contains("<h2>Quality Score</h2>"), content="true")
  inspect(output.contains("<h2>Column Profile</h2>"), content="true")
}

///|
test "csvlite audit json command renders machine readable audit report" {
  let output = csvlite_run(["audit-json", "name,age\\nAlice,18\\nBob,"])
  inspect(output.contains("\"status\":\"ok\""), content="true")
  inspect(output.contains("\"quality_issue_count\":0"), content="true")
  inspect(output.contains("\"score\":{\"score\":93"), content="true")
  inspect(output.contains("\"column\":\"age\""), content="true")
}

///|
test "csvlite chart json command renders auto chart spec" {
  let output = csvlite_run(["chart-json", "team,score\\nA,10\\nB,20\\nA,15"])
  inspect(output.contains("\"kind\":\"bar\""), content="true")
  inspect(output.contains("\"label\":\"A\",\"value\":25"), content="true")
  inspect(output.contains("\"measure\":\"sum\""), content="true")
}

///|
test "csvlite chart svg command renders explicit line chart" {
  let output = csvlite_run([
    "chart-svg", "day,revenue\\nMon,10\\nTue,20", "line", "day", "revenue",
  ])
  inspect(output.contains("<svg"), content="true")
  inspect(output.contains("<polyline"), content="true")
  inspect(output.contains("sum of revenue by day"), content="true")
}

///|
test "csvlite chart html command renders standalone document" {
  let output = csvlite_run([
    "chart-html", "city,status\\n深圳,ok\\n上海,ok\\n深圳,retry",
  ])
  inspect(output.contains("<!doctype html>"), content="true")
  inspect(output.contains("count by city"), content="true")
  inspect(output.contains("No numeric column was found"), content="true")
}

///|
test "csvlite check command reports ok and parse issues" {
  inspect(csvlite_run(["check", "name,age\\nAlice,18"]), content="ok")
  inspect(
    csvlite_run(["check", "name,age\\nAlice,18,extra"]),
    content="line 2, column 1: expected 2 fields, got 3",
  )
}

///|
test "csvlite group sum command renders grouped markdown" {
  inspect(
    csvlite_run([
      "group-sum", "team,score\\nA,10\\nB,20\\nA,15", "team", "score",
    ]),
    content="| team | sum_score |\n| --- | --- |\n| A | 25 |\n| B | 20 |",
  )
}

///|
test "csvlite select command filters columns" {
  inspect(
    csvlite_run(["select", "name,age,city\\nAlice,18,Shenzhen", "city,name"]),
    content="| city | name |\n| --- | --- |\n| Shenzhen | Alice |",
  )
}

///|
test "csvlite missing command renders missing summary" {
  inspect(
    csvlite_run(["missing", "name,age\\nAlice,18\\nBob,"]),
    content="| column | missing | present |\n| --- | --- | --- |\n| name | 0 | 2 |\n| age | 1 | 1 |",
  )
}

///|
test "csvlite decode escapes handles common escapes" {
  inspect(csvlite_decode_escapes("a\\nb\\tc\\r"), content="a\nb\tc\r")
}

///|
test "csvlite drop program name removes first arg" {
  debug_inspect(
    csvlite_drop_program_name(["csvlite", "help"]),
    content="[\"help\"]",
  )
}
