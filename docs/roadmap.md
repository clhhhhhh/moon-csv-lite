# Roadmap

moon-csv-lite is already usable as a MoonBit CSV toolkit. The next steps focus
on better command-line ergonomics, larger examples, and stronger engineering
signals.

## Near Term

- Keep improving the PowerShell `scripts/audit-file.ps1` file wrapper. Native
  `cmd/csvlite audit-file` and `audit-stdin` can be added once the MoonBit
  runtime exposes a stable file-reading API.
- Keep expanding `fixtures/` with small real-world samples: spreadsheet exports,
  device measurements, logs, intentionally malformed rows, and quality issue
  cases.
- Keep checked example reports refreshed from fixtures with
  `scripts/generate-example-reports.ps1`.
- Keep quality contract examples realistic, including inferred contracts and
  hand-written contracts for configuration tables, measurements, and product
  catalogs.
- Keep CSV Data Passport examples refreshed so release assets can include a
  stable identity, schema, quality score, and recommendation summary.
- Keep GitHub Actions aligned with the full local verification workflow,
  including examples, CLI smoke tests, and fixture smoke tests.
- Keep the mooncakes.io package page, README, and application material aligned
  for each release.

## Middle Term

- Add a benchmark-lite example for larger generated CSV inputs.
- Expand chart previews with configurable sorting, top-N handling, and more
  report templates.
- Expand quality contracts with reusable presets, stricter duplicate-key
  guidance, and optional contract templates for common CSV workflows.
- Expand data passports with optional owner, version, source, and generated-at
  metadata once the CLI has a stable file and environment story.
- Improve dialect sniffing with quote-aware delimiter histograms and confidence
  scores.
- Add richer audit output, including top values, duplicate-key suggestions,
  confidence scores, and per-column issue severity.
- Add streaming-oriented parser experiments for large files beyond the current
  sampled file audit wrapper.
- Add configurable JSON severity thresholds for CI systems.

## Long Term

- Explore typed-record decoding once MoonBit language/library support makes it
  ergonomic.
- Provide more data format bridges, such as CSV-to-JSON array and JSON Lines to
  CSV.
- Support a larger corpus of dialect fixtures from spreadsheet and logging
  tools.
- Build a small website or documentation page after the package is published.

## Non-Goals For Now

- Full DataFrame implementation.
- Excel `.xlsx` parsing.
- Database import/export tooling.
- A heavy dependency stack.

The project should remain a focused, easy-to-test CSV foundation package.
