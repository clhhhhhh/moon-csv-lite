# Architecture

moon-csv-lite is organized as a small data-tooling stack rather than a single
parser file. Each layer is usable on its own, and higher layers compose the
lower ones.

```text
CSV text
  |
  v
parser + dialects
  |
  +--> checked parse reports
  |
  v
header-aware CsvTable
  |
  +--> validation
  +--> profiling
  +--> schema inference
  +--> table quality issues
  +--> table operations
  +--> joins and aggregation
  +--> cleaning helpers
  |
  v
audit workflow
  |
  +--> Markdown report
  +--> HTML report
  +--> JSON report
  +--> quality gate
  +--> quality contracts
  +--> chart previews
  +--> CLI commands
  +--> MoonBit JS browser playground
```

## Core Parser

`moon-csv-lite.mbt` owns the RFC-4180-style parser and writer. It supports
quoted fields, escaped quotes, embedded newlines, empty fields, LF/CRLF, and
custom `CsvDialect` values.

This layer intentionally returns simple `Array[Array[String]]` values so it is
easy to test and can be reused by table and CLI workflows.

## Checked Parsing

`parse_result.mbt` wraps normal parsing with recoverable issue reporting. The
current checks include row-width mismatches and unclosed quotes. This makes the
library useful for real CSV ingestion, where users often want a report instead
of an immediate failure.

## Table Layer

`CsvTable` treats the first row as headers. The table layer enables named-cell
lookup, Markdown/JSONL/HTML export, validation, profiling, joins, aggregation,
and cleaning helpers.

The project favors small functions over a large DataFrame abstraction. This
keeps the package light and understandable in MoonBit today.

## Dialect Sniffing

`dialect_sniff.mbt` scores comma, tab, semicolon, and pipe candidates using:

- observed delimiter count outside quoted fields
- row count and column count
- row-width consistency
- empty-cell penalties
- stable tie-breaking

This gives the audit workflow a good default without requiring users to choose
a dialect manually for common CSV/TSV/spreadsheet exports.

## Schema Inference

`schema_infer.mbt` turns column profiles into practical validation metadata:
type, required/optional status, empty counts, unique counts, and examples. It is
not a heavy type system; it is a pragmatic bootstrap step for validation and
data-quality review.

## Audit Workflow

`audit_report.mbt` is the main composition layer. It gathers:

- detected dialect
- checked parse issues
- table-level quality issues
- inferred schema
- missing-value summary
- column profile
- 0-100 quality score
- actionable recommendations

The score and recommendations are the most product-like part of the project.
The score gives a compact grade and risk level across structure, completeness,
consistency, and uniqueness. Recommendations then explain next steps such as
fixing structural parse issues, renaming duplicate headers, dropping empty rows
or columns, treating a missing column as optional, or using numeric columns for
aggregation and range validation.

## CLI

`cmd/csvlite` is intentionally thin. It decodes shell-friendly `\n`, `\r`, and
`\t` escapes, then calls library APIs. This keeps CLI behavior aligned with the
package behavior tested in MoonBit.

`drift_report.mbt` builds on the audit workflow to compare a baseline CSV and a
candidate CSV. It reports quality score changes, row and column shape changes,
added or removed columns, inferred type changes, and missing-value regressions.

`quality_gate.mbt` turns drift and audit results into a policy decision for CI
and release checks. It can fail candidates that fall below a minimum score,
drop too far from the baseline, remove columns, change inferred types, increase
missing values, or exceed an allowed number of quality issues.

`quality_contract.mbt` turns a CSV rule table into a reusable contract. It
builds on the audit, schema, range, allowed-value, and unique-key validators to
check a single CSV asset against a declared policy. It can also infer a starter
contract from a known-good sample, which makes the workflow practical for
spreadsheets, configuration files, measurement exports, and product catalogs.

`data_passport.mbt` packages one audit result into a compact dataset identity
artifact. It records name, detected dialect, row and column shape, a stable
shape fingerprint, score, schema summary, and recommendations so CSV assets can
be attached to reviews, docs, and CI logs without exposing the whole dataset.

Current commands include:

- `audit`
- `audit-html`
- `audit-json`
- `chart-json`
- `chart-svg`
- `chart-html`
- `score`
- `drift`
- `drift-json`
- `gate`
- `gate-json`
- `infer-contract`
- `contract`
- `contract-json`
- `passport`
- `passport-json`
- `sniff`
- `schema`
- `check`
- `profile`
- `markdown`
- `jsonl`
- `html`
- `group-sum`
- `select`
- `missing`

## Browser Playground

`playground/` is a static visual workbench for reviewers and users. It lets
users paste CSV-like text or upload a local CSV/TSV/text file, run an audit in
the browser, and inspect status cards, quality issues, inferred schema,
missing-value bars, column profiles, chart previews, recommendations, data
previews, and JSON output.

`web/` is a small MoonBit browser adapter package. It exports audit, drift,
quality-gate, quality-contract, and chart functions through the MoonBit
JavaScript backend, and
`scripts/build-playground-engine.ps1` copies the generated bundle to
`playground/moon-csv-lite-engine.js`. The browser UI keeps a JavaScript fallback
for resilience, but the normal path calls the MoonBit-generated
`auditCsvJson`, `auditCsvHtml`, `auditDriftJson`, `auditDriftMarkdown`,
`auditQualityGateJson`, `auditQualityGateMarkdown`,
`qualityContractInferCsv`, `auditQualityContractJson`,
`auditQualityContractMarkdown`, `chartCsvJson`, `chartCsvSvg`, and
`chartCsvHtml` functions.
`scripts/check-playground.ps1` verifies that the rendered page is using the
MoonBit engine.

## Chart Preview

`chart_preview.mbt` turns a parsed table into a small chart model and exports
it as JSON, SVG, or HTML. It auto-selects a label column and numeric value
column, aggregates duplicate labels by sum, and falls back to category counts
for text-only tables. This moves the project closer to an application-ecosystem
tool: users can inspect CSV quality and immediately preview the data shape
without leaving the MoonBit-powered workflow.

## Fixtures And Example Reports

The `fixtures/` directory contains small CSV/TSV samples for realistic smoke
tests. `scripts/test-fixtures.ps1` runs those samples through the CLI and
asserts key outputs. `docs/examples/` stores representative audit reports so
reviewers can inspect behavior without running commands first. The reports are
regenerated by `scripts/generate-example-reports.ps1`.

## Design Tradeoffs

- The library is string-oriented by design. Typed records and DataFrame-like
  APIs are future work.
- The CLI currently accepts CSV text as an argument for portability in examples.
  File/stdin input is planned once a stable MoonBit file-reading API is
  available in the target runtime.
- Audit reports provide Markdown/HTML for human review and JSON for CI or
  script integration.
