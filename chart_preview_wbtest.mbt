///|
test "chart auto spec aggregates first numeric column by text label" {
  let spec = chart_csv_spec(
    "region,amount\n华东,120.5\n华北,88\n华东,130",
  )
  inspect(spec.kind, content="bar")
  inspect(spec.label_column, content="region")
  inspect(spec.value_column, content="amount")
  inspect(spec.measure, content="sum")
  inspect(spec.points.length(), content="2")
  inspect(spec.points[0].label, content="华东")
  inspect(spec.points[0].value, content="250.5")
  inspect(spec.points[0].count, content="2")
}

///|
test "chart auto spec prefers repeated category over unique id" {
  let spec = chart_csv_spec(
    "order_id,region,amount\nSO-1001,east,120.5\nSO-1002,west,88\nSO-1003,east,130",
  )
  inspect(spec.label_column, content="region")
  inspect(spec.value_column, content="amount")
  inspect(spec.points.length(), content="2")
  inspect(spec.points[0].label, content="east")
  inspect(spec.points[0].value, content="250.5")
}

///|
test "chart explicit spec skips non numeric values" {
  let spec = chart_csv_spec_with_columns(
    "name,score\nAlice,10\nBob,nope\nCara,20", "line", "name", "score",
  )
  inspect(spec.kind, content="line")
  inspect(spec.points.length(), content="2")
  inspect(spec.skipped_rows, content="1")
  inspect(spec.warnings[0].contains("skipped"), content="true")
}

///|
test "chart count spec handles non numeric tables" {
  let spec = chart_csv_spec("city,status\n深圳,ok\n上海,ok\n深圳,retry")
  inspect(spec.value_column, content="count")
  inspect(spec.measure, content="count")
  inspect(spec.points.length(), content="2")
  inspect(spec.points[0].label, content="深圳")
  inspect(spec.points[0].value, content="2")
}

///|
test "chart json renders stable machine readable fields" {
  let json = chart_csv_json("team,score\nA,10\nB,20\nA,15", "bar")
  inspect(json.contains("\"kind\":\"bar\""), content="true")
  inspect(json.contains("\"label_column\":\"team\""), content="true")
  inspect(json.contains("\"value_column\":\"score\""), content="true")
  inspect(json.contains("\"label\":\"A\",\"value\":25"), content="true")
}

///|
test "chart svg and html render escaped preview output" {
  let svg = chart_csv_svg("name,score\nA&B,10\nB,20", "bar")
  inspect(svg.contains("<svg"), content="true")
  inspect(svg.contains("A&amp;B"), content="true")
  let html = chart_csv_html("name,score\nA&B,10\nB,20", "pie")
  inspect(html.contains("<!doctype html>"), content="true")
  inspect(html.contains("A&amp;B"), content="true")
  inspect(html.contains("<svg"), content="true")
}
