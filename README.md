# moon-csv-lite

A lightweight CSV parsing, validation, profiling, visualization, and conversion
toolkit implemented in MoonBit.

moon-csv-lite focuses on practical CSV workloads. It parses CSV text into rows
and fields, writes rows back to CSV text, validates header-aware tables, profiles
column quality, detects table-level quality issues, generates review-friendly
data passports, enforces reusable quality contracts, and exports CSV data to
Markdown tables, JSON Lines, machine-readable audit JSON, and simple chart
previews.

## Features

- Parse CSV text into rows and fields
- Write rows back to CSV text
- Support empty fields, quoted fields, commas in quotes, and escaped quotes
- Support LF and CRLF line endings
- Support custom dialects such as TSV, semicolon-separated, and pipe-separated values
- Detect likely input dialects automatically
- Parse header-aware tables
- Validate required fields and text/integer/float/boolean columns
- Infer validation schemas from observed data
- Generate end-to-end Markdown, HTML, and JSON audit reports
- Compute 0-100 quality scores with grade, risk, and structure/completeness/consistency/uniqueness dimensions
- Generate CSV data passports with dataset identity, shape fingerprint, quality summary, schema summary, and recommendations
- Compare baseline and candidate CSV snapshots with schema, type, missing-value, row-count, column-count, and score drift reports
- Enforce CSV quality gates that turn drift and score regressions into pass/fail release decisions
- Define reusable CSV quality contracts for required columns, score thresholds, row counts, column types, numeric ranges, allowed values, and unique keys
- Infer starter quality contracts from representative CSV samples
- Generate reusable chart previews from CSV as JSON specs, standalone SVG, or HTML reports
- Auto-pick label/value columns for bar, line, and pie-style previews, with duplicate-label aggregation and category counts
- Detect table-level quality issues such as duplicate headers, empty headers, all-empty rows, all-empty columns, and duplicate rows
- Profile columns with empty counts, unique counts, inferred types, and numeric stats
- Render human-readable data quality reports
- Export tables to Markdown and JSON Lines
- Export tables and quality reports to HTML
- Transform tables with select/drop/rename/filter/sort/slice/fill/deduplicate helpers
- Aggregate columns with count, sum, average, min, max, and group-by summaries
- Validate row widths, required columns, numeric ranges, allowed values, and duplicate keys
- Join and combine tables with inner join, left join, anti join, append, union-by-name, and transpose helpers
- Clean data with empty row/column dropping, replacement, boolean normalization, coalesce, missing summaries, and row numbers
- Use the `cmd/csvlite` CLI for shell-friendly audit, audit-json, passport, passport-json, score, drift, gate, contract, infer-contract, sniff, schema, profile, check, export, select, group, and missing-summary commands
- Run a Chinese browser Playground backed by the MoonBit JavaScript backend for local CSV upload, visual audit review, and chart preview

## What It Does

moon-csv-lite is meant to be a practical CSV foundation package for MoonBit
projects. It covers eight common jobs:

1. **Read and write CSV-like data**: parse rows, stringify rows, handle quoted
   cells, escaped quotes, CRLF, TSV, semicolon-separated data, and custom
   delimiters.
2. **Understand tabular data**: treat the first row as headers, access cells by
   column name, infer scalar types, detect missing values, table-quality issues,
   and column profiles.
3. **Validate and transform tables**: check required fields, row widths,
   numeric ranges, allowed values, unique keys, joins, selections, sorting,
   deduplication, normalization, and grouping.
4. **Generate reports and UI output**: export Markdown, JSON Lines, HTML, JSON
   audit reports, CLI output, and a MoonBit JS-backed browser playground for
   local inspection or CI logs.
5. **Preview data visually**: turn CSV tables into chart specs, SVG, and HTML
   previews for quick review in docs, CLIs, and browser tools.
6. **Package data assets**: generate a CSV Data Passport with identity,
   fingerprint, quality score, schema summary, column metadata, and
   recommendations for code review, release notes, or CI artifacts.
7. **Protect data releases**: compare a baseline CSV with a candidate CSV and
   fail a quality gate when schema, type, score, or missing-value regressions
   violate a policy.
8. **Codify reusable data rules**: infer a starter quality contract from a
   known-good CSV, then check future CSV files against score, schema, range,
   enum, row-count, and unique-key rules.

## Related Work And Scope

moon-csv-lite deliberately avoids being only another CSV parser, DataFrame, or
charting package. On mooncakes.io, related packages already exist in adjacent
areas:

- `moonbit-community/NyaCSV` and `maria/csv_parser` focus on CSV parsing and
  serialization.
- `ihb2032/MoonFrame` and `smallbearrr/pandas` focus on DataFrame-style table
  manipulation and data analysis.
- `Xpeng/mooncharts` and `JunJunTnT/moonchart` focus on reusable SVG chart
  generation.

This project's independent contribution is the quality workflow around CSV
assets: audit reports, schema/profile output, data passports, quality scores,
drift reports, CI-style gates, reusable quality contracts, fixture verification,
example reports, CLI commands, and a MoonBit JS-backed browser playground. The
parser, table helpers, and chart previews support that workflow rather than
replacing those more specialized packages.

## Quick Start

```powershell
moon check
moon test
moon run cmd/main
moon run examples/basic
moon run examples/quality-report
moon run examples/rf-measurement
moon run cmd/csvlite -- markdown "name,age\nAlice,18"
moon run cmd/csvlite -- passport "id,amount\nA,10\nB," sales-dataset
```

## One-Command Verification

Run the full local verification flow on Windows:

```powershell
.\scripts\verify.ps1
```

This runs format checks, `moon check`, all MoonBit tests, runnable examples,
CLI smoke tests, fixture-based tests, MoonBit JS playground engine generation,
the browser playground smoke test, and `moon package --list`.

Open the browser playground:

```powershell
.\scripts\build-playground-engine.ps1
start .\playground\index.html
```

For only the realistic fixture smoke tests:

```powershell
.\scripts\test-fixtures.ps1
```

For a compact project status summary:

```powershell
.\scripts\status.ps1
```

## Documentation

- [API Guide](docs/api.md): public API grouped by workflow.
- [Cookbook](docs/cookbook.md): task-oriented recipes for common CSV workflows.
- [Architecture](docs/architecture.md): module design and audit workflow overview.
- [Why MoonBit](docs/why-moonbit.md): ecosystem value and project scope.
- [Roadmap](docs/roadmap.md): planned CLI, reporting, CI, fixture, and benchmark work.
- [Commit Plan](docs/commit-plan.md): suggested commit split after GitHub access is available.
- [Example Reports](docs/examples/README.md): generated audit report examples from the fixture set.
- [Playground](playground/README.md): Chinese browser workbench backed by the MoonBit JS backend for visual CSV auditing, paste input, and local CSV upload.
- [Contributing](CONTRIBUTING.md): development setup, fixture workflow, testing, and commit guidance.
- [Release Process](docs/release.md): local verification, CI, and mooncakes.io publication checklist.
- [Submission Checklist](docs/submission-checklist.md): local release and contest submission checklist.

## API

```mbt
parse(input : String) -> Array[Array[String]]

stringify(rows : Array[Array[String]]) -> String

parse_with_dialect(input : String, dialect : CsvDialect) -> Array[Array[String]]

stringify_with_dialect(rows : Array[Array[String]], dialect : CsvDialect) -> String

parse_table(input : String) -> CsvTable

parse_checked(input : String) -> CsvParseReport

parse_table_checked(input : String) -> CsvTableParseReport

parse_issues_to_text(issues : Array[CsvParseError]) -> String

sniff_dialect(input : String) -> CsvDialect

parse_table_auto(input : String) -> CsvTable

infer_schema(table : CsvTable) -> Array[CsvInferredColumnRule]

infer_validation_rules(table : CsvTable) -> Array[CsvColumnRule]

table_schema_markdown(table : CsvTable) -> String

audit_csv(input : String) -> CsvAuditReport

audit_quality_score(report : CsvAuditReport) -> CsvAuditScore

audit_csv_score(input : String) -> CsvAuditScore

audit_quality_score_text(score : CsvAuditScore) -> String

audit_drift(baseline_input : String, candidate_input : String) -> CsvDriftReport

audit_drift_markdown(baseline_input : String, candidate_input : String) -> String

audit_drift_json(baseline_input : String, candidate_input : String) -> String

audit_quality_gate_default(baseline_input : String, candidate_input : String) -> CsvQualityGateReport

audit_quality_gate_markdown(baseline_input : String, candidate_input : String) -> String

audit_quality_gate_json(baseline_input : String, candidate_input : String) -> String

quality_contract_from_csv(input : String) -> CsvQualityContract

quality_contract_infer_csv(input : String) -> String

audit_quality_contract(input : String, contract : CsvQualityContract) -> CsvContractReport

audit_quality_contract_markdown(input : String, contract_csv : String) -> String

audit_quality_contract_json(input : String, contract_csv : String) -> String

csv_data_passport(input : String, name : String) -> CsvDataPassport

csv_data_passport_markdown(input : String, name : String) -> String

csv_data_passport_json(input : String, name : String) -> String

audit_quality_issues(table : CsvTable) -> Array[CsvAuditQualityIssue]

audit_quality_issues_markdown(issues : Array[CsvAuditQualityIssue]) -> String

audit_csv_markdown(input : String) -> String

audit_csv_html(input : String) -> String

audit_csv_json(input : String) -> String

chart_csv_spec(input : String) -> CsvChartSpec

chart_csv_json(input : String, kind : String) -> String

chart_csv_svg(input : String, kind : String) -> String

chart_csv_html(input : String, kind : String) -> String

chart_csv_json_with_columns(input : String, kind : String, label_column : String, value_column : String) -> String

table_get(table : CsvTable, row_index : Int, column : String) -> String?

table_to_markdown(table : CsvTable) -> String

table_to_json_lines(table : CsvTable) -> String

validate_table(table : CsvTable, rules : Array[CsvColumnRule]) -> Array[CsvValidationError]

validation_errors_to_text(errors : Array[CsvValidationError]) -> String

profile_table(table : CsvTable) -> Array[ColumnProfile]

profile_report(table : CsvTable) -> String

inferred_type_name(kind : CsvInferredType) -> String

table_row_count(table : CsvTable) -> Int

table_column_count(table : CsvTable) -> Int

table_select_columns(table : CsvTable, columns : Array[String]) -> CsvTable

table_drop_columns(table : CsvTable, columns : Array[String]) -> CsvTable

table_rename_column(table : CsvTable, old_name : String, new_name : String) -> CsvTable

table_filter_eq(table : CsvTable, column : String, value : String) -> CsvTable

table_sort_by_column(table : CsvTable, column : String) -> CsvTable

table_fill_empty(table : CsvTable, default_value : String) -> CsvTable

table_deduplicate(table : CsvTable) -> CsvTable

column_numeric_summary(table : CsvTable, column : String) -> CsvNumericSummary

column_sum(table : CsvTable, column : String) -> Double

column_average(table : CsvTable, column : String) -> Double?

table_group_count(table : CsvTable, group_column : String) -> CsvTable

table_group_sum(table : CsvTable, group_column : String, value_column : String) -> CsvTable

table_to_html(table : CsvTable) -> String

profile_report_markdown(table : CsvTable) -> String

quality_report_html(table : CsvTable, errors : Array[CsvValidationError]) -> String

validate_required_columns(table : CsvTable, columns : Array[String]) -> Array[CsvValidationError]

validate_row_widths(table : CsvTable) -> Array[CsvValidationError]

validate_min_number(table : CsvTable, column : String, minimum : Double) -> Array[CsvValidationError]

validate_max_number(table : CsvTable, column : String, maximum : Double) -> Array[CsvValidationError]

validate_allowed_values(table : CsvTable, column : String, allowed : Array[String], required : Bool) -> Array[CsvValidationError]

validate_unique_key(table : CsvTable, columns : Array[String]) -> Array[CsvDuplicateKeyError]

table_inner_join(left : CsvTable, right : CsvTable, left_key : String, right_key : String) -> CsvTable

table_left_join(left : CsvTable, right : CsvTable, left_key : String, right_key : String) -> CsvTable

table_union_by_name(left : CsvTable, right : CsvTable) -> CsvTable

table_transpose(table : CsvTable) -> CsvTable

table_drop_empty_rows(table : CsvTable) -> CsvTable

table_drop_empty_columns(table : CsvTable) -> CsvTable

table_replace_value(table : CsvTable, old_value : String, new_value : String) -> CsvTable

table_coalesce_columns(table : CsvTable, columns : Array[String], target : String) -> CsvTable

table_normalize_boolean(table : CsvTable, column : String) -> CsvTable

table_missing_summary(table : CsvTable) -> CsvTable
```

## Example

```mbt
import {
  "clhhhhhh/moon-csv-lite" @csv,
}

fn main {
  let text = "name,age\nAlice,18\nBob,20"
  let rows = @csv.parse(text)
  let output = @csv.stringify(rows)
  println(output)
}
```

Output:

```text
name,age
Alice,18
Bob,20
```

## Dialects

```mbt
let rows = @csv.parse_with_dialect("name\tage\nAlice\t18", @csv.tsv_dialect())
let dialect = { delimiter: ';', newline: "\r\n", skip_empty_lines: false }
let output = @csv.stringify_with_dialect(rows, dialect)
```

## Table Export

```mbt
let table = @csv.parse_table("name,note\nAlice,\"hello, world\"")
println(@csv.table_to_markdown(table))
println(@csv.table_to_json_lines(table))
```

Markdown output:

```text
| name | note |
| --- | --- |
| Alice | hello, world |
```

JSON Lines output:

```json
{"name":"Alice","note":"hello, world"}
```

## Checked Parsing

```mbt
let report = @csv.parse_table_checked("name,age\nAlice,18,extra")
println(@csv.parse_issues_to_text(report.issues))
```

Output:

```text
line 2, column 1: expected 2 fields, got 3
```

## Dialect Detection And Schema Inference

```mbt
let input = "name;age;active\nAlice;18;true\nBob;20;false"
let dialect = @csv.sniff_dialect(input)
let table = @csv.parse_table_auto(input)
let rules = @csv.infer_validation_rules(table)
println(@csv.dialect_name(dialect))
println(@csv.table_schema_markdown(table))
println(@csv.validation_errors_to_text(@csv.validate_table(table, rules)))
```

## Audit Report

```mbt
let report = @csv.audit_csv("name,age\nAlice,18\nBob,")
println(@csv.audit_status_text(report))
println(@csv.audit_quality_score_text(@csv.audit_quality_score(report)))
println(@csv.audit_report_markdown(report))
```

The audit workflow combines dialect detection, checked parsing, table-level
quality issues, schema inference, missing-value summaries, and column profiling
into Markdown, HTML, or JSON reports. It also computes a 0-100 quality score
with grade, risk, structure, completeness, consistency, and uniqueness
dimensions.
Use `audit_csv_json` or the CLI `audit-json` command when CI or another script
needs a stable machine-readable summary.

## Data Passport

```mbt
let input = "order_id,region,amount\nSO-1,east,10\nSO-2,west,20"
println(@csv.csv_data_passport_markdown(input, "sales-dataset"))
println(@csv.csv_data_passport_json(input, "sales-dataset"))
```

A CSV Data Passport is a compact identity card for a dataset. It combines the
detected dialect, row/column/cell counts, a stable shape fingerprint, quality
score, missing-cell count, schema summary, column metadata, and recommendations.
It is intended for code review, release notes, CI artifacts, and data assets
that should be easy to inspect without reading the whole CSV file.

## Chart Preview

```mbt
let input = "region,amount\nEast,120.5\nWest,88\nEast,130"
println(@csv.chart_csv_json(input, "bar"))
println(@csv.chart_csv_svg(input, "line"))
println(@csv.chart_csv_html(input, "pie"))
```

The chart workflow auto-detects the CSV dialect, chooses a label column and a
numeric value column, aggregates duplicate labels by sum, and falls back to
category counts when no numeric column exists. The reusable `CsvChartSpec`
model can be exported as JSON for frontends, SVG for direct embedding, or HTML
for standalone previews.

## Drift Report

```mbt
let baseline = "name,age\nAlice,18\nBob,20"
let candidate = "name,age\nAlice,18\nBob,"
println(@csv.audit_drift_markdown(baseline, candidate))
println(@csv.audit_drift_json(baseline, candidate))
```

Drift reports compare two CSV snapshots and highlight quality score changes,
row/column shape changes, added or removed columns, inferred type changes, and
missing-value regressions.

## Quality Gate

```mbt
let baseline = "name,age\nAlice,18\nBob,20"
let candidate = "name,age\nAlice,18\nBob,"
let report = @csv.audit_quality_gate_default(baseline, candidate)
println(@csv.audit_quality_gate_text(report))
println(@csv.audit_quality_gate_report_markdown(report))
```

Quality gates turn CSV drift into a release decision. The default policy fails
when candidate score drops too far, score falls below the minimum, columns are
removed, inferred types change, missing values increase, or the candidate has
too many quality issues. Use this when CSV files behave like configuration,
reference data, or data exports that should not regress silently.

## Quality Contract

```mbt
let sample = "order_id,region,amount\nSO-1,east,10\nSO-2,west,20"
let contract_csv = @csv.quality_contract_infer_csv(sample)
println(contract_csv)
println(@csv.audit_quality_contract_markdown(sample, contract_csv))
```

Contracts are small CSV documents with `rule,column,value,extra` columns. They
can require columns, enforce minimum quality scores, limit parse and quality
issues, set row-count bounds, validate column types, check numeric ranges,
restrict allowed values, and require unique keys. This is useful when a CSV
file acts like a release asset: game configuration, product data, experiment
parameters, measurement exports, or a shared spreadsheet that should not drift
silently.

## Validation And Profiling

```mbt
let table = @csv.parse_table("name,age,active\nAlice,18,true\nBob,nope,false")
let rules = [
  { name: "name", kind: Text, required: true },
  { name: "age", kind: Integer, required: true },
  { name: "active", kind: Boolean, required: true },
]
let errors = @csv.validate_table(table, rules)
let profiles = @csv.profile_table(table)
println(@csv.validation_errors_to_text(errors))
println(@csv.profile_report(table))
```

Run a complete validation/report demo:

```powershell
moon run examples/quality-report
```

## Table Operations And Aggregation

```mbt
let table = @csv.parse_table("team,score\nA,10\nB,20\nA,15")
let selected = @csv.table_select_columns(table, ["team", "score"])
let sorted = @csv.table_sort_by_column(selected, "team")
let grouped = @csv.table_group_sum(sorted, "team", "score")
println(@csv.table_to_markdown(grouped))
```

## Advanced Validation And Joins

```mbt
let people = @csv.parse_table("id,name\n1,Alice\n2,Bob")
let cities = @csv.parse_table("id,city\n1,Shenzhen\n2,Shanghai")
let joined = @csv.table_left_join(people, cities, "id", "id")
let errors = @csv.validate_unique_key(joined, ["id"])
println(@csv.table_to_markdown(joined))
println(@csv.duplicate_key_errors_to_text(errors))
```

Output:

```text
| team | sum_score |
| --- | --- |
| A | 25 |
| B | 20 |
```

## CLI

```powershell
moon run cmd/csvlite -- audit "name,age\nAlice,18\nBob,"
moon run cmd/csvlite -- audit-html "name,age\nAlice,18"
moon run cmd/csvlite -- audit-json "name,age\nAlice,18\nBob,"
moon run cmd/csvlite -- chart-json "team,score\nA,10\nB,20\nA,15"
moon run cmd/csvlite -- chart-svg "day,revenue\nMon,10\nTue,20" line day revenue
moon run cmd/csvlite -- chart-html "city,status\nShenzhen,ok\nShanghai,ok\nShenzhen,retry"
moon run cmd/csvlite -- sniff "name;age\nAlice;18"
moon run cmd/csvlite -- schema "name,age\nAlice,18\nBob,20"
moon run cmd/csvlite -- score "name,age\nAlice,18\nBob,"
moon run cmd/csvlite -- drift "name,age\nAlice,18\nBob,20" "name,age\nAlice,18\nBob,"
moon run cmd/csvlite -- drift-json "name,age\nAlice,18\nBob,20" "name,age\nAlice,18\nBob,"
moon run cmd/csvlite -- gate "name,age\nAlice,18\nBob,20" "name,age\nAlice,18\nBob,"
moon run cmd/csvlite -- gate-json "name,age\nAlice,18\nBob,20" "name,age\nAlice,18\nBob,"
moon run cmd/csvlite -- infer-contract "id,amount,paid\nA,10,true\nB,20,false"
moon run cmd/csvlite -- contract "order_id,region,amount\nSO-1,east,10\nSO-2,west,20" "rule,column,value,extra\nname,*,sales-contract,\nmin_score,*,95,\nrequired,order_id,,\ntype,amount,float,required\nmin,amount,0,\nunique,order_id,,"
moon run cmd/csvlite -- contract-json "order_id,region,amount\nSO-1,east,10\nSO-2,west,20" "rule,column,value,extra\nname,*,sales-contract,\nmin_score,*,95,\nrequired,order_id,,\ntype,amount,float,required\nmin,amount,0,\nunique,order_id,,"
moon run cmd/csvlite -- passport "order_id,region,amount\nSO-1,east,10\nSO-2,west,20" sales-dataset
moon run cmd/csvlite -- passport-json "order_id,region,amount\nSO-1,east,10\nSO-2,west,20" sales-dataset
moon run cmd/csvlite -- profile "name,age\nAlice,18"
moon run cmd/csvlite -- check "name,age\nAlice,18,extra"
moon run cmd/csvlite -- markdown "name,age\nAlice,18"
moon run cmd/csvlite -- jsonl "name,age\nAlice,18"
moon run cmd/csvlite -- group-sum "team,score\nA,10\nB,20\nA,15" team score
moon run cmd/csvlite -- select "name,age,city\nAlice,18,Shenzhen" city,name
moon run cmd/csvlite -- missing "name,age\nAlice,18\nBob,"
```

The CLI accepts `\n`, `\r`, and `\t` escape sequences in the CSV text argument
so examples remain shell-friendly on Windows and Unix-like systems.
For local files, use the file wrapper script:

```powershell
.\scripts\audit-file.ps1 "C:\path\to\data.csv"
.\scripts\audit-file.ps1 "C:\path\to\data.csv" -OutputFormat json
.\scripts\audit-file.ps1 "C:\path\to\data.csv" -OutputFormat html > report.html
```

The file wrapper runs a full audit for small files. For larger files it reads a
safe sampled prefix by default, prints `Audit mode: sample`, and explains that
the report describes the sampled rows. Tune this with `-MaxRows` and
`-MaxChars`; use `-Full` only for files small enough to fit the safe command
limit.

## Fixture Test Set

The repository includes a small realistic fixture set under `fixtures/`. These
files are intentionally tiny so they are easy to inspect in reviews and CI logs,
but each one targets a different behavior:

| fixture | format | purpose |
| --- | --- | --- |
| `fixtures/people-clean.csv` | CSV | clean data with text, integer, boolean, and city columns |
| `fixtures/people-missing.csv` | CSV | missing value detection and optional schema fields |
| `fixtures/bad-width.csv` | CSV | row-width mismatch reporting |
| `fixtures/quality-issues.csv` | CSV | duplicate headers, empty header, all-empty column, empty row, and duplicate row reporting |
| `fixtures/sales-semicolon.csv` | semicolon | dialect sniffing and numeric schema inference |
| `fixtures/logs.tsv` | TSV | tab delimiter sniffing and log-like schema inference |
| `fixtures/html-sensitive.csv` | CSV | quoted commas and HTML escaping for audit reports |

Run the fixture tests with:

```powershell
.\scripts\test-fixtures.ps1
```

The script reads each fixture, invokes `cmd/csvlite`, and asserts key output
such as `Status: issues`, inferred types, missing counts, detected delimiters,
quality issue counts, JSON fields, and escaped HTML text. It also escapes
fixture double quotes before passing content through the command line so quoted
CSV fields remain intact.
It also checks the sampled file audit wrapper used for larger local CSV files.

Regenerate the checked-in audit report examples with:

```powershell
.\scripts\generate-example-reports.ps1
```

## RF Measurement Example

The `examples/rf-measurement` package demonstrates a realistic engineering CSV
workflow using VNA-style columns:

```text
freq_hz,s11_db,s21_db
1000000000,-12.5,-1.2
2000000000,-18.3,-0.8
3000000000,-9.7,-1.5
```

Run it with:

```powershell
moon run examples/rf-measurement
```

## Supported CSV Behavior

- Basic comma-separated fields: `a,b,c`
- Empty fields: `a,,c`
- Leading and trailing empty fields: `,a,`
- LF line endings: `a,b\nc,d`
- CRLF line endings: `a,b\r\nc,d`
- Quoted fields: `"hello","world"`
- Commas in quoted fields: `"hello, world",123`
- Newlines in quoted fields
- Escaped double quotes: `"He said ""Hi"""`
- TSV and semicolon-delimited data through `CsvDialect`
- Optional skipped empty lines through `CsvDialect`
- Configurable output newline, including CRLF

## Limitations

- No streaming parser
- No nested typed records
- No DataFrame support
- No Excel-specific dialect support
- No database import/export tooling

## Project Structure

```text
.
+-- cmd/csvlite/             # command-line CSV utility
+-- cmd/main/                # runnable demo
+-- CONTRIBUTING.md          # contribution and development guide
+-- docs/api.md             # grouped API guide
+-- docs/architecture.md    # module design overview
+-- docs/commit-plan.md     # suggested public commit split
+-- docs/cookbook.md        # task-oriented usage recipes
+-- docs/examples/          # checked-in audit report examples
+-- docs/release.md         # release and mooncakes publishing checklist
+-- docs/roadmap.md         # project roadmap
+-- docs/why-moonbit.md     # ecosystem value notes
+-- examples/basic/          # minimal usage example
+-- examples/data-audit/     # end-to-end audit workflow example
+-- examples/quality-report/ # validation and profiling report example
+-- examples/rf-measurement/ # engineering CSV example
+-- fixtures/                # realistic CSV/TSV fixture test set
+-- playground/              # static browser CSV audit workbench using MoonBit JS output
+-- web/                     # MoonBit browser adapter compiled to JavaScript
+-- scripts/build-playground-engine.ps1 # build and copy MoonBit JS playground bundle
+-- scripts/check-playground.ps1 # headless browser playground smoke test
+-- scripts/generate-example-reports.ps1 # refresh docs/examples from fixtures
+-- scripts/audit-file.ps1  # file-path wrapper with safe sampling for large CSVs
+-- scripts/status.ps1       # compact local project status summary
+-- scripts/test-fixtures.ps1 # fixture-based CLI smoke tests
+-- scripts/verify.ps1       # full local verification flow
+-- aggregation.mbt          # column stats and group-by summaries
+-- audit_report.mbt         # end-to-end CSV audit reports
+-- chart_preview.mbt        # chart JSON/SVG/HTML preview generation
+-- data_passport.mbt        # CSV Data Passport identity and quality artifact
+-- data_cleaning.mbt        # missing data and value normalization helpers
+-- dialect_sniff.mbt        # delimiter and newline detection helpers
+-- drift_report.mbt         # baseline vs candidate CSV drift reports
+-- html_export.mbt          # HTML and Markdown report exports
+-- join_ops.mbt             # joins, union, append, transpose, anti-join
+-- moon-csv-lite.mbt        # parser, writer, validation, profiling, exports
+-- moon-csv-lite_wbtest.mbt
+-- parse_result.mbt         # recoverable parse issue reporting
+-- quality_gate.mbt         # baseline/candidate quality gate decisions
+-- quality_contract.mbt     # reusable CSV quality contract workflow
+-- schema_infer.mbt         # inferred schema and validation rules
+-- schema_rules.mbt         # advanced validation helpers
+-- table_ops.mbt            # reusable table transformations
+-- moon.mod
+-- README.md
```

## Development

```powershell
moon fmt
moon check
moon test
moon run examples/basic
moon run examples/data-audit
moon run examples/quality-report
moon run examples/rf-measurement
moon run cmd/csvlite -- audit "name,age\nAlice,18\nBob,"
moon run cmd/csvlite -- audit-json "name,age\nAlice,18\nBob,"
moon run cmd/csvlite -- chart-json "team,score\nA,10\nB,20\nA,15"
moon run cmd/csvlite -- chart-svg "day,revenue\nMon,10\nTue,20" line day revenue
moon run cmd/csvlite -- sniff "name;age\nAlice;18"
moon run cmd/csvlite -- schema "name,age\nAlice,18\nBob,20"
moon run cmd/csvlite -- score "name,age\nAlice,18\nBob,"
moon run cmd/csvlite -- drift "name,age\nAlice,18\nBob,20" "name,age\nAlice,18\nBob,"
moon run cmd/csvlite -- gate "name,age\nAlice,18\nBob,20" "name,age\nAlice,18\nBob,"
moon run cmd/csvlite -- passport "id,amount\nA,10\nB," release-dataset
moon run cmd/csvlite -- check "name,age\nAlice,18,extra"
moon run cmd/csvlite -- group-sum "team,score\nA,10\nB,20\nA,15" team score
.\scripts\audit-file.ps1 .\fixtures\quality-issues.csv
.\scripts\test-fixtures.ps1
.\scripts\generate-example-reports.ps1
.\scripts\build-playground-engine.ps1
.\scripts\check-playground.ps1
.\scripts\status.ps1
```

On Windows, the same verification flow is available as:

```powershell
.\scripts\verify.ps1
```

## Publishing

The package is designed to be published to mooncakes.io with MoonBit's built-in
package manager:

```powershell
moon login
moon whoami
moon publish --dry-run
moon publish
```

`moon publish --dry-run` requires a logged-in Mooncakes account. If it reports a
missing credentials file, run `moon login` first and confirm the expected owner
with `moon whoami`.

## Contest Note

This project is built as a MoonBit ecosystem package for the OSC2026 open source
contest. The goal is to provide a focused, testable, publishable toolkit for CSV
data exchange, validation, and lightweight analysis.

## License

MIT
