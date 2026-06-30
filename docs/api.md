# moon-csv-lite API Guide

This document groups the public API by workflow. The README keeps the quick
tour; this file is intended as the longer reference for users and reviewers.

## Core CSV

Parse and write CSV-like row data.

```mbt
parse(input : String) -> Array[Array[String]]
parse_with_dialect(input : String, dialect : CsvDialect) -> Array[Array[String]]
stringify(rows : Array[Array[String]]) -> String
stringify_with_dialect(rows : Array[Array[String]], dialect : CsvDialect) -> String
default_dialect() -> CsvDialect
tsv_dialect() -> CsvDialect
semicolon_dialect() -> CsvDialect
pipe_dialect() -> CsvDialect
```

Supported behavior includes empty fields, quoted fields, escaped quotes, commas
inside quotes, newlines inside quotes, LF/CRLF input, custom delimiters, and
configurable output newlines.

## Checked Parsing

Recover structural issues without throwing away parsed rows.

```mbt
parse_checked(input : String) -> CsvParseReport
parse_checked_with_dialect(input : String, dialect : CsvDialect) -> CsvParseReport
parse_table_checked(input : String) -> CsvTableParseReport
parse_table_checked_with_dialect(input : String, dialect : CsvDialect) -> CsvTableParseReport
parse_report_ok(report : CsvParseReport) -> Bool
table_parse_report_ok(report : CsvTableParseReport) -> Bool
parse_issues_to_text(issues : Array[CsvParseError]) -> String
parse_issues_to_markdown(issues : Array[CsvParseError]) -> String
```

Current checked parsing reports row-width mismatches and unclosed quoted fields.

## Dialect Detection

Detect common delimited formats.

```mbt
sniff_dialect(input : String) -> CsvDialect
sniff_dialect_report(input : String) -> Array[CsvDialectCandidate]
sniff_dialect_summary(input : String) -> String
sniff_dialect_markdown(input : String) -> String
parse_auto(input : String) -> Array[Array[String]]
parse_table_auto(input : String) -> CsvTable
dialect_name(dialect : CsvDialect) -> String
```

The sniffer scores comma, tab, semicolon, and pipe candidates by observed
delimiter count, row shape, width consistency, and empty cells.

## Table API

Treat the first row as headers and work with named columns.

```mbt
parse_table(input : String) -> CsvTable
parse_table_with_dialect(input : String, dialect : CsvDialect) -> CsvTable
table_get(table : CsvTable, row_index : Int, column : String) -> String?
table_row_count(table : CsvTable) -> Int
table_column_count(table : CsvTable) -> Int
table_to_markdown(table : CsvTable) -> String
table_to_json_lines(table : CsvTable) -> String
table_to_html(table : CsvTable) -> String
```

## Validation

Validate required fields and scalar types.

```mbt
validate_table(table : CsvTable, rules : Array[CsvColumnRule]) -> Array[CsvValidationError]
validation_errors_to_text(errors : Array[CsvValidationError]) -> String
validation_errors_to_markdown(errors : Array[CsvValidationError]) -> String
validate_required_columns(table : CsvTable, columns : Array[String]) -> Array[CsvValidationError]
validate_row_widths(table : CsvTable) -> Array[CsvValidationError]
validate_min_number(table : CsvTable, column : String, minimum : Double) -> Array[CsvValidationError]
validate_max_number(table : CsvTable, column : String, maximum : Double) -> Array[CsvValidationError]
validate_allowed_values(table : CsvTable, column : String, allowed : Array[String], required : Bool) -> Array[CsvValidationError]
validate_unique_key(table : CsvTable, columns : Array[String]) -> Array[CsvDuplicateKeyError]
duplicate_key_errors_to_text(errors : Array[CsvDuplicateKeyError]) -> String
```

## Schema Inference

Infer validation rules from observed data.

```mbt
infer_schema(table : CsvTable) -> Array[CsvInferredColumnRule]
infer_schema_auto(input : String) -> Array[CsvInferredColumnRule]
infer_validation_rules(table : CsvTable) -> Array[CsvColumnRule]
validate_inferred_schema(table : CsvTable) -> Array[CsvValidationError]
schema_inference_to_markdown(rules : Array[CsvInferredColumnRule]) -> String
schema_inference_to_text(rules : Array[CsvInferredColumnRule]) -> String
table_schema_markdown(table : CsvTable) -> String
table_schema_text(table : CsvTable) -> String
schema_inferred_required(rules : Array[CsvInferredColumnRule], column : String) -> Bool
schema_inferred_type(rules : Array[CsvInferredColumnRule], column : String) -> CsvColumnType?
column_examples(table : CsvTable, column : String, limit : Int) -> Array[String]
```

## Profiling And Reports

Summarize data quality and numeric columns.

```mbt
profile_table(table : CsvTable) -> Array[ColumnProfile]
profile_report(table : CsvTable) -> String
profile_report_markdown(table : CsvTable) -> String
quality_report_html(table : CsvTable, errors : Array[CsvValidationError]) -> String
inferred_type_name(kind : CsvInferredType) -> String
```

## Audit Workflow

One call for dialect detection, checked parsing, table-level quality issues,
schema inference, missing values, and column profiling.

```mbt
audit_csv(input : String) -> CsvAuditReport
audit_csv_with_dialect(input : String, dialect : CsvDialect) -> CsvAuditReport
audit_report_ok(report : CsvAuditReport) -> Bool
audit_status_text(report : CsvAuditReport) -> String
audit_quality_score(report : CsvAuditReport) -> CsvAuditScore
audit_csv_score(input : String) -> CsvAuditScore
audit_quality_score_text(score : CsvAuditScore) -> String
audit_drift(baseline_input : String, candidate_input : String) -> CsvDriftReport
audit_drift_markdown(baseline_input : String, candidate_input : String) -> String
audit_drift_json(baseline_input : String, candidate_input : String) -> String
audit_drift_report_markdown(report : CsvDriftReport) -> String
audit_drift_report_json(report : CsvDriftReport) -> String
quality_gate_default_options() -> CsvQualityGateOptions
quality_gate_strict_options() -> CsvQualityGateOptions
audit_quality_gate(baseline_input : String, candidate_input : String, options : CsvQualityGateOptions) -> CsvQualityGateReport
audit_quality_gate_default(baseline_input : String, candidate_input : String) -> CsvQualityGateReport
audit_quality_gate_markdown(baseline_input : String, candidate_input : String) -> String
audit_quality_gate_json(baseline_input : String, candidate_input : String) -> String
audit_quality_gate_text(report : CsvQualityGateReport) -> String
audit_quality_gate_report_markdown(report : CsvQualityGateReport) -> String
audit_quality_gate_report_json(report : CsvQualityGateReport) -> String
audit_quality_issues(table : CsvTable) -> Array[CsvAuditQualityIssue]
audit_quality_issues_markdown(issues : Array[CsvAuditQualityIssue]) -> String
audit_report_markdown(report : CsvAuditReport) -> String
audit_report_html(report : CsvAuditReport) -> String
audit_report_json(report : CsvAuditReport) -> String
audit_csv_markdown(input : String) -> String
audit_csv_html(input : String) -> String
audit_csv_json(input : String) -> String
audit_recommendations(report : CsvAuditReport) -> Array[CsvAuditRecommendation]
audit_recommendations_markdown(report : CsvAuditReport) -> String
```

Quality issues currently include empty headers, duplicate headers, all-empty
rows, all-empty columns, and duplicate rows. Example outputs are available in
`docs/examples/`. The JSON renderer is intended for CI and scripts; it includes
status, dialect, issue counts, parse issues, quality issues, inferred schema,
missing summaries, profiles, 0-100 quality score, and recommendations. The
quality score exposes grade, risk, structure, completeness, consistency, and
uniqueness dimensions.

## Data Passport Workflow

Package one CSV dataset into a compact identity and quality artifact for review,
release notes, or CI output.

```mbt
csv_data_passport(input : String, name : String) -> CsvDataPassport
csv_data_passport_from_audit(audit : CsvAuditReport, name : String) -> CsvDataPassport
csv_data_passport_markdown(input : String, name : String) -> String
csv_data_passport_json(input : String, name : String) -> String
csv_data_passport_report_markdown(passport : CsvDataPassport) -> String
csv_data_passport_report_json(passport : CsvDataPassport) -> String
```

The passport includes dataset name, dialect, row/column/cell counts, a stable
shape fingerprint, missing-cell count, parse and quality issue counts, a 0-100
quality score, schema summary, column metadata, and recommendations. It is meant
to make CSV assets easy to inspect in pull requests and repeatable release
checks.

## Quality Contract Workflow

Codify CSV expectations as a small contract table and reuse it in CLI, CI,
tests, or browser tooling.

```mbt
quality_contract_default(name : String) -> CsvQualityContract
quality_contract_from_csv(input : String) -> CsvQualityContract
quality_contract_infer_csv(input : String) -> String
quality_contract_infer_report(audit : CsvAuditReport, name : String) -> String
audit_quality_contract(input : String, contract : CsvQualityContract) -> CsvContractReport
audit_quality_contract_report(audit : CsvAuditReport, contract : CsvQualityContract) -> CsvContractReport
audit_quality_contract_markdown(input : String, contract_csv : String) -> String
audit_quality_contract_json(input : String, contract_csv : String) -> String
audit_quality_contract_report_markdown(report : CsvContractReport) -> String
audit_quality_contract_report_json(report : CsvContractReport) -> String
```

Contract CSV files use `rule,column,value,extra` columns. Supported rules
include `name`, `min_score`, `max_parse_issues`, `max_quality_issues`,
`min_rows`, `max_rows`, `required`, `type`, `min`, `max`, `allowed`, and
`unique`. This layer is meant for release assets and repeatable data checks,
where a known-good CSV sample can generate a starter contract and future CSV
files can be checked against it.

## Chart Preview

Generate lightweight visual previews from CSV data.

```mbt
chart_csv_spec(input : String) -> CsvChartSpec
chart_csv_spec_kind(input : String, kind : String) -> CsvChartSpec
chart_csv_spec_with_columns(input : String, kind : String, label_column : String, value_column : String) -> CsvChartSpec
chart_auto_spec(table : CsvTable, kind : String) -> CsvChartSpec
chart_table_spec(table : CsvTable, kind : String, label_column : String, value_column : String) -> CsvChartSpec
chart_count_spec(table : CsvTable, kind : String, label_column : String) -> CsvChartSpec
chart_spec_json(spec : CsvChartSpec) -> String
chart_spec_svg(spec : CsvChartSpec) -> String
chart_spec_html(spec : CsvChartSpec) -> String
chart_csv_json(input : String, kind : String) -> String
chart_csv_svg(input : String, kind : String) -> String
chart_csv_html(input : String, kind : String) -> String
chart_csv_json_with_columns(input : String, kind : String, label_column : String, value_column : String) -> String
chart_csv_svg_with_columns(input : String, kind : String, label_column : String, value_column : String) -> String
chart_csv_html_with_columns(input : String, kind : String, label_column : String, value_column : String) -> String
```

Supported kinds are `bar`, `line`, and `pie`. Automatic chart generation uses
dialect detection, chooses a label column and numeric value column when
possible, aggregates duplicate labels by sum, and falls back to category counts
when no numeric value column is available. Outputs are intended for CLI reports,
browser previews, README snippets, and lightweight dashboards.

## Drift Workflow

Compare a baseline CSV snapshot with a candidate CSV snapshot.

```mbt
audit_drift(baseline_input : String, candidate_input : String) -> CsvDriftReport
audit_drift_markdown(baseline_input : String, candidate_input : String) -> String
audit_drift_json(baseline_input : String, candidate_input : String) -> String
audit_drift_text(report : CsvDriftReport) -> String
```

Drift checks include score changes, row and column shape changes, added and
removed columns, inferred type changes, and missing-value regressions.

## Quality Gate Workflow

Turn drift into a pass/fail decision for CI, release checks, and configuration
table review.

```mbt
quality_gate_default_options() -> CsvQualityGateOptions
quality_gate_strict_options() -> CsvQualityGateOptions
audit_quality_gate(baseline_input : String, candidate_input : String, options : CsvQualityGateOptions) -> CsvQualityGateReport
audit_quality_gate_default(baseline_input : String, candidate_input : String) -> CsvQualityGateReport
audit_quality_gate_markdown(baseline_input : String, candidate_input : String) -> String
audit_quality_gate_json(baseline_input : String, candidate_input : String) -> String
audit_quality_gate_text(report : CsvQualityGateReport) -> String
```

The default policy requires a minimum score, limits score drops, blocks removed
columns, blocks inferred type changes, blocks missing-value increases, and
limits candidate quality issues. The strict policy also blocks newly added
columns and requires a higher score.

## Table Operations

Reusable table transformations.

```mbt
table_select_columns(table : CsvTable, columns : Array[String]) -> CsvTable
table_drop_columns(table : CsvTable, columns : Array[String]) -> CsvTable
table_rename_column(table : CsvTable, old_name : String, new_name : String) -> CsvTable
table_filter_eq(table : CsvTable, column : String, value : String) -> CsvTable
table_filter_not_empty(table : CsvTable, column : String) -> CsvTable
table_sort_by_column(table : CsvTable, column : String) -> CsvTable
table_limit(table : CsvTable, count : Int) -> CsvTable
table_slice_rows(table : CsvTable, start : Int, end : Int) -> CsvTable
table_drop_rows(table : CsvTable, count : Int) -> CsvTable
table_fill_empty(table : CsvTable, default_value : String) -> CsvTable
table_trim_all(table : CsvTable) -> CsvTable
table_normalize_headers(table : CsvTable) -> CsvTable
table_deduplicate(table : CsvTable) -> CsvTable
```

## Aggregation

Column and group summaries.

```mbt
column_count_non_empty(table : CsvTable, column : String) -> Int
column_count_empty(table : CsvTable, column : String) -> Int
column_unique_values(table : CsvTable, column : String) -> Array[String]
column_numeric_summary(table : CsvTable, column : String) -> CsvNumericSummary
column_sum(table : CsvTable, column : String) -> Double
column_average(table : CsvTable, column : String) -> Double?
column_min(table : CsvTable, column : String) -> Double?
column_max(table : CsvTable, column : String) -> Double?
table_group_count(table : CsvTable, group_column : String) -> CsvTable
table_group_sum(table : CsvTable, group_column : String, value_column : String) -> CsvTable
table_group_average(table : CsvTable, group_column : String, value_column : String) -> CsvTable
```

## Joins And Combining

Relational table helpers.

```mbt
table_inner_join(left : CsvTable, right : CsvTable, left_key : String, right_key : String) -> CsvTable
table_left_join(left : CsvTable, right : CsvTable, left_key : String, right_key : String) -> CsvTable
table_anti_join(left : CsvTable, right : CsvTable, left_key : String, right_key : String) -> CsvTable
table_append(table : CsvTable, bottom : CsvTable) -> CsvTable
table_union_by_name(left : CsvTable, right : CsvTable) -> CsvTable
table_reorder_columns(table : CsvTable, columns : Array[String]) -> CsvTable
table_transpose(table : CsvTable) -> CsvTable
```

## Data Cleaning

Small helpers for common cleanup tasks.

```mbt
table_drop_empty_rows(table : CsvTable) -> CsvTable
table_drop_empty_columns(table : CsvTable) -> CsvTable
table_replace_value(table : CsvTable, old_value : String, new_value : String) -> CsvTable
table_lowercase_column(table : CsvTable, column : String) -> CsvTable
table_uppercase_column(table : CsvTable, column : String) -> CsvTable
table_coalesce_columns(table : CsvTable, columns : Array[String], target : String) -> CsvTable
table_normalize_boolean(table : CsvTable, column : String) -> CsvTable
table_missing_summary(table : CsvTable) -> CsvTable
table_add_row_number(table : CsvTable, column : String) -> CsvTable
```

## CLI

The `cmd/csvlite` package exposes shell-friendly commands:

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
moon run cmd/csvlite -- html "name,age\nAlice,18"
moon run cmd/csvlite -- group-sum "team,score\nA,10\nB,20\nA,15" team score
moon run cmd/csvlite -- select "name,age,city\nAlice,18,Shenzhen" city,name
moon run cmd/csvlite -- missing "name,age\nAlice,18\nBob,"
```
