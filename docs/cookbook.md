# Cookbook

This cookbook shows common moon-csv-lite workflows as small copyable recipes.

## Parse And Write CSV

```mbt
let rows = @csv.parse("name,age\nAlice,18\nBob,20")
let text = @csv.stringify(rows)
println(text)
```

Use this when data is already known to be comma-separated and structurally
simple.

## Parse A Header-Aware Table

```mbt
let table = @csv.parse_table("name,age\nAlice,18\nBob,20")
println(@csv.table_get(table, 0, "name"))
```

Tables keep headers separate from data rows and make later validation,
profiling, selection, joins, and export easier.

## Detect TSV Or Semicolon CSV Automatically

```mbt
let input = "name;age\nAlice;18\nBob;20"
let dialect = @csv.sniff_dialect(input)
let table = @csv.parse_table_auto(input)
println(@csv.dialect_name(dialect))
println(@csv.table_to_markdown(table))
```

The sniffer currently considers comma, tab, semicolon, and pipe delimiters.

## Check Bad Rows

```mbt
let report = @csv.parse_table_checked("name,age\nAlice,18,extra")
println(@csv.parse_issues_to_text(report.issues))
```

Output:

```text
line 2, column 1: expected 2 fields, got 3
```

## Infer A Schema

```mbt
let table = @csv.parse_table("name,age,active\nAlice,18,true\nBob,20,false")
let rules = @csv.infer_validation_rules(table)
println(@csv.table_schema_markdown(table))
println(@csv.validation_errors_to_text(@csv.validate_table(table, rules)))
```

This is useful when ingesting new CSV sources and deciding which columns are
integer, float, boolean, text, required, or optional.

## Generate A Full Audit Report

```mbt
let report = @csv.audit_csv("name,age\nAlice,18\nBob,")
println(@csv.audit_report_markdown(report))
println(@csv.audit_quality_score_text(@csv.audit_quality_score(report)))
```

Audit combines dialect detection, checked parsing, table-level quality issues,
schema inference, missing-value summaries, column profiling, quality scoring,
and recommendations.

## Generate CI-Friendly Audit JSON

```mbt
let json = @csv.audit_csv_json("name,age\nAlice,18\nBob,")
println(json)
```

The JSON output includes status, dialect, issue counts, parse issues, quality
issues, inferred schema, missing summaries, profiles, quality score, and
recommendations.

## Generate A Chart Preview

```mbt
let input = "region,amount\nEast,120.5\nWest,88\nEast,130"
println(@csv.chart_csv_json(input, "bar"))
println(@csv.chart_csv_svg(input, "line"))
println(@csv.chart_csv_html(input, "pie"))
```

The chart preview workflow auto-detects common CSV/TSV dialects, chooses a
label column and numeric value column, aggregates duplicate labels by sum, and
falls back to category counts when the table has no numeric column. Use JSON
for custom frontends, SVG for embedding, and HTML for shareable reports.

## Compare Two CSV Snapshots

```mbt
let baseline = "name,age\nAlice,18\nBob,20"
let candidate = "name,age\nAlice,18\nBob,"
println(@csv.audit_drift_markdown(baseline, candidate))
```

The drift report is useful in CI or release checks when a data export should
keep the same schema and quality level across versions.

## Add A CSV Quality Gate

```mbt
let baseline = "name,age\nAlice,18\nBob,20"
let candidate = "name,age\nAlice,18\nBob,"
let report = @csv.audit_quality_gate_default(baseline, candidate)
println(@csv.audit_quality_gate_text(report))
println(@csv.audit_quality_gate_report_markdown(report))
```

The quality gate is useful when CSV files behave like release assets: game
configuration, product catalogs, exported reports, experiment parameters, or
reference tables. It fails when a candidate violates the policy, for example by
dropping score too far, removing columns, changing inferred types, or increasing
missing values.

## Enforce A CSV Quality Contract

```mbt
let sample = "order_id,region,amount\nSO-1,east,10\nSO-2,west,20"
let contract_csv = @csv.quality_contract_infer_csv(sample)
let candidate = "order_id,region,amount\nSO-1,east,10\nSO-1,north,-2"
println(@csv.audit_quality_contract_markdown(candidate, contract_csv))
```

Contracts are reusable CSV rule tables. A contract can require columns, set a
minimum score, limit parse or quality issues, enforce column types, check
numeric ranges, restrict allowed values, and require unique keys. This is the
workflow to use when a spreadsheet, game config table, lab export, or product
catalog should keep satisfying the same rules over time.

## Generate A CSV Data Passport

```mbt
let sample = "order_id,region,amount\nSO-1,east,10\nSO-2,west,20"
println(@csv.csv_data_passport_markdown(sample, "sales-dataset"))
println(@csv.csv_data_passport_json(sample, "sales-dataset"))
```

A data passport is a compact review artifact for one CSV asset. It records the
detected dialect, shape fingerprint, row and column counts, quality score,
schema summary, column metadata, and recommendations. Use it when a CSV file is
part of a release, pull request, fixture corpus, or external data handoff.

## Find Table Quality Issues

```mbt
let table = @csv.parse_table("name,name,\nAlice,18,\nAlice,18,\n,,")
let issues = @csv.audit_quality_issues(table)
println(@csv.audit_quality_issues_markdown(issues))
```

This catches problems that are not parser errors, such as duplicate headers,
empty headers, all-empty rows, all-empty columns, and duplicate rows.

## Read Audit Recommendations

```mbt
let report = @csv.audit_csv("name;age\nAlice;18\nBob;")
println(@csv.audit_recommendations_markdown(report))
```

Recommendations explain what to fix or use next, for example missing optional
columns, detected non-comma dialects, numeric columns suitable for aggregation,
or structural parse issues.

## Export Markdown, JSON Lines, And HTML

```mbt
let table = @csv.parse_table("name,age\nAlice,18")
println(@csv.table_to_markdown(table))
println(@csv.table_to_json_lines(table))
println(@csv.table_to_html(table))
```

Markdown is useful for README and issue comments, JSON Lines for pipelines, and
HTML for browser previews.

## Profile Columns

```mbt
let table = @csv.parse_table("name,score\nAlice,95.5\nBob,88")
println(@csv.profile_report(table))
```

Profiles include inferred type, empty counts, unique counts, and numeric
min/max/average when applicable.

## Group And Aggregate

```mbt
let table = @csv.parse_table("team,score\nA,10\nB,20\nA,15")
let grouped = @csv.table_group_sum(table, "team", "score")
println(@csv.table_to_markdown(grouped))
```

## Join Tables

```mbt
let people = @csv.parse_table("id,name\n1,Alice\n2,Bob")
let cities = @csv.parse_table("id,city\n1,Shenzhen\n2,Shanghai")
let joined = @csv.table_left_join(people, cities, "id", "id")
println(@csv.table_to_markdown(joined))
```

## Clean Missing Values

```mbt
let table = @csv.parse_table("name,age\nAlice,18\nBob,")
let filled = @csv.table_fill_empty(table, "unknown")
println(@csv.table_to_markdown(filled))
```

## Use The CLI

```powershell
moon run cmd/csvlite -- audit "name,age\nAlice,18\nBob,"
moon run cmd/csvlite -- audit-json "name,age\nAlice,18\nBob,"
moon run cmd/csvlite -- chart-json "team,score\nA,10\nB,20\nA,15"
moon run cmd/csvlite -- chart-svg "day,revenue\nMon,10\nTue,20" line day revenue
moon run cmd/csvlite -- chart-html "city,status\nShenzhen,ok\nShanghai,ok\nShenzhen,retry"
moon run cmd/csvlite -- drift "name,age\nAlice,18\nBob,20" "name,age\nAlice,18\nBob,"
moon run cmd/csvlite -- drift-json "name,age\nAlice,18\nBob,20" "name,age\nAlice,18\nBob,"
moon run cmd/csvlite -- gate "name,age\nAlice,18\nBob,20" "name,age\nAlice,18\nBob,"
moon run cmd/csvlite -- gate-json "name,age\nAlice,18\nBob,20" "name,age\nAlice,18\nBob,"
moon run cmd/csvlite -- infer-contract "id,amount,paid\nA,10,true\nB,20,false"
moon run cmd/csvlite -- contract "order_id,region,amount\nSO-1,east,10\nSO-2,west,20" "rule,column,value,extra\nname,*,sales-contract,\nmin_score,*,95,\nrequired,order_id,,\ntype,amount,float,required\nmin,amount,0,\nunique,order_id,,"
moon run cmd/csvlite -- passport "order_id,region,amount\nSO-1,east,10\nSO-2,west,20" sales-dataset
moon run cmd/csvlite -- passport-json "order_id,region,amount\nSO-1,east,10\nSO-2,west,20" sales-dataset
moon run cmd/csvlite -- sniff "name;age\nAlice;18"
moon run cmd/csvlite -- schema "name,age\nAlice,18\nBob,20"
moon run cmd/csvlite -- check "name,age\nAlice,18,extra"
```

## Audit A Local CSV File

```powershell
.\scripts\audit-file.ps1 "C:\path\to\data.csv"
.\scripts\audit-file.ps1 "C:\path\to\data.csv" -OutputFormat json
.\scripts\audit-file.ps1 "C:\path\to\data.csv" -OutputFormat html > report.html
```

The file wrapper reads small files fully. For larger files it streams a safe
sample prefix into the MoonBit CLI and prints `Audit mode: sample`, so users do
not accidentally hit shell command length limits. Use `-MaxRows` and
`-MaxChars` to tune the sample, or `-Full` for small enough files.

For realistic fixture-based CLI testing:

```powershell
.\scripts\test-fixtures.ps1
```

To refresh the checked-in example reports:

```powershell
.\scripts\generate-example-reports.ps1
```

## Open The Browser Playground

```powershell
.\scripts\build-playground-engine.ps1
start .\playground\index.html
```

The playground provides a visual audit surface: paste CSV text or upload a
local CSV/TSV/text file, run the audit, and inspect issues, inferred schema,
missing values, profiles, recommendations, chart previews, and JSON output. The
default path uses the MoonBit JavaScript backend bundle generated by `web/`.
