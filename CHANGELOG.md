# Changelog

## 0.1.0

- Add CSV parsing for simple rows, empty fields, LF and CRLF line endings.
- Add quoted field support, including commas, newlines, and escaped quotes.
- Add CSV stringification with automatic quoting and quote escaping.
- Add dialect options for TSV, semicolon-separated data, CRLF output, and skipped empty lines.
- Add header-aware table APIs with Markdown table and JSON Lines export.
- Add schema validation for required fields and text/integer/float/boolean columns.
- Add column profiling with empty counts, unique counts, inferred types, and numeric stats.
- Add human-readable data quality reports.
- Add reusable table operations for selecting, dropping, renaming, filtering, sorting, slicing, filling, and deduplicating rows and columns.
- Add column aggregation and group-by helpers for counts, sums, averages, min, and max summaries.
- Add HTML table export, Markdown profile reports, Markdown validation reports, and full HTML quality reports.
- Add advanced schema validation for required columns, row widths, numeric ranges, allowed values, and duplicate keys.
- Add table joins, anti-joins, append, union-by-name, transpose, and reorder helpers.
- Add data cleaning helpers for empty rows and columns, replacement, case transforms, boolean normalization, missing summaries, and row numbers.
- Add checked parsing APIs that return recoverable parse issues for row-width mismatches and unclosed quoted fields.
- Add dialect sniffing for comma, tab, semicolon, and pipe-separated inputs.
- Add schema inference helpers that derive validation rules, required columns, and example values from observed data.
- Add end-to-end CSV audit reports that combine dialect detection, parse issues, quality issues, schema inference, missing values, column profiles, and 0-100 quality scoring.
- Add CSV drift reports for comparing baseline and candidate exports across score, schema, inferred types, row/column shape, and missing-value regressions.
- Add CSV quality gates for pass/fail CI decisions based on score, schema, type, missing-value, and quality-issue policies.
- Add reusable CSV quality contracts with inferred starter contracts, score thresholds, required columns, column types, numeric ranges, allowed values, row-count checks, unique keys, Markdown output, and JSON output.
- Add CSV Data Passports with dataset identity, stable shape fingerprints, quality summaries, schema summaries, recommendations, Markdown output, JSON output, CLI commands, and browser adapter exports.
- Add machine-readable JSON audit reports for CI and scripts.
- Add chart preview generation with JSON specs, standalone SVG, standalone HTML, auto-selected columns, duplicate-label aggregation, and category-count fallback.
- Add audit quality issues for duplicate headers, empty headers, all-empty rows, all-empty columns, and duplicate rows.
- Add audit recommendations for structural issues, table quality issues, missing values, detected dialects, and numeric aggregation candidates.
- Add `cmd/csvlite` CLI commands for audit, audit-html, audit-json, chart-json, chart-svg, chart-html, score, drift, drift-json, gate, gate-json, infer-contract, contract, contract-json, sniff, schema, profile, check, Markdown, JSON Lines, HTML, select, group-sum, and missing summaries.
- Add `scripts/audit-file.ps1`, a file-path audit wrapper with safe sampling for larger local CSV files.
- Add a static Chinese browser playground backed by the MoonBit JavaScript backend for visual CSV audit demos and reviewer inspection.
- Add fixture-based smoke tests for clean CSV, missing values, row-width errors, quality issues, semicolon data, TSV logs, and HTML escaping.
- Add an API guide, roadmap, generated example report script, and checked-in example audit reports for reviewers.
- Add a cookbook, architecture guide, and end-to-end data audit example package.
- Add a fuller GitHub Actions verification workflow, CONTRIBUTING guide, and release checklist.
- Add ecosystem-value notes, commit plan, and project status script for contest packaging.
- Add an RF measurement CSV example for frequency, S11, and S21 data.
- Add 183 tests, runnable examples, README, MIT license, and CI configuration.
