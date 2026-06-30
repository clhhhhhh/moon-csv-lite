# Why MoonBit

moon-csv-lite is built to fill a practical gap in the MoonBit ecosystem: small,
testable data interchange tooling that can be published as a package and reused
by examples, command-line utilities, and later applications.

## Why CSV

CSV is still one of the most common formats for spreadsheet exports,
measurement data, logs, small configuration tables, issue attachments, and bug
reproduction data.

MoonBit projects need dependable building blocks for these everyday data tasks.
moon-csv-lite focuses on that foundation instead of trying to become a large
DataFrame library.

## Why This Package Helps The Ecosystem

- It gives MoonBit users a tested parser/writer for CSV-like data.
- It demonstrates package structure, examples, CI, fixtures, docs, and release
  workflow for a MoonBit library.
- It provides reusable table helpers: validation, profiling, joins,
  aggregation, cleaning, schema inference, audit reports, and quality
  contracts.
- It offers a CLI that can be used in local workflows and CI logs.
- It keeps the API string-oriented and easy to inspect, which fits the current
  maturity of the ecosystem.

## What Is Novel Here

The project is not only a parser. The stronger idea is a lightweight audit
pipeline:

```text
CSV text -> dialect sniffing -> checked parse -> schema inference
         -> table quality issues -> missing summary -> column profile
         -> recommendations -> data passports / quality contracts / gates
         -> Markdown/HTML/JSON/CLI output
```

The recommendation layer turns raw profiling into next-step guidance. It can
tell users to fix structural parse issues, treat missing columns as optional,
rename duplicate headers, drop empty rows or all-empty columns, use detected
non-comma dialects explicitly, aggregate numeric-looking columns, or feed JSON
audit results into CI checks.

Data passports and quality contracts make the idea more reusable: one command
can produce a review-friendly identity card for a CSV asset, while a known-good
CSV can produce a starter contract and later CSV files can be checked against
declared score, schema, range, enum, row-count, and unique-key rules. That gives
the package a clear data-quality workflow rather than only parser, DataFrame, or
chart functionality.

## Related Work Boundary

The MoonBit package ecosystem already has adjacent projects for CSV parsing,
DataFrame-style manipulation, and chart generation. moon-csv-lite keeps those
as related work and focuses on CSV quality engineering: audit reports, data
passports, drift, gates, contracts, fixtures, CLI output, example reports, and
browser inspection.

## Scope Discipline

The project deliberately avoids heavy features for now:

- no DataFrame runtime
- no Excel `.xlsx` parser
- no database connector
- no large dependency stack

That makes the package easier to test, review, publish, and extend.
