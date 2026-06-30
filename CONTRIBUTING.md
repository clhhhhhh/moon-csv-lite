# Contributing

Thanks for taking a look at moon-csv-lite. The project is intentionally small:
focused CSV parsing, validation, profiling, transformations, and audit reports
for MoonBit projects.

## Development Setup

Install MoonBit and make sure `moon` is available:

```powershell
moon version
```

Clone the repository and run the full local verification flow:

```powershell
.\scripts\verify.ps1
```

On Unix-like systems, run the commands from the CI workflow or use PowerShell
Core for the fixture script:

```bash
moon fmt --check
moon check
moon test
moon run examples/basic
moon run examples/quality-report
moon run examples/rf-measurement
pwsh ./scripts/test-fixtures.ps1
moon package --list
```

## Project Layout

- `moon-csv-lite.mbt`: core parser, writer, table, validation, and profiling APIs.
- `parse_result.mbt`: checked parse reports and parse issue rendering.
- `dialect_sniff.mbt`: delimiter and newline detection.
- `schema_infer.mbt`: inferred schema and validation-rule helpers.
- `audit_report.mbt`: end-to-end Markdown/HTML audit reports.
- `aggregation.mbt`, `table_ops.mbt`, `join_ops.mbt`, `data_cleaning.mbt`: reusable table utilities.
- `cmd/csvlite/`: command-line interface.
- `fixtures/`: small CSV/TSV files used by fixture smoke tests.
- `docs/`: API guide, roadmap, application material, and example reports.

## Adding Code

- Keep changes focused and close to an existing module when possible.
- Add white-box tests in a matching `*_wbtest.mbt` file for new module behavior.
- Prefer small pure functions that compose with existing table APIs.
- Keep CLI behavior backed by library APIs rather than duplicating parsing logic.
- Run `moon fmt` before submitting changes.

## Adding Fixtures

Fixtures should be small and readable. Add a fixture when it covers a behavior
that is easier to understand with real tabular text than with a unit test.

When adding a fixture:

1. Put the file under `fixtures/`.
2. Document it in `fixtures/README.md` and the README fixture table.
3. Add an assertion in `scripts/test-fixtures.ps1`.
4. Run `.\scripts\test-fixtures.ps1`.

The fixture script escapes double quotes before passing content through the CLI,
which keeps quoted CSV fields intact across PowerShell/native command argument
handling.

## Updating Example Reports

Example reports live in `docs/examples/`. If audit output changes, refresh the
affected report and mention the fixture source in `docs/examples/README.md`.

## Commit Style

Use concise, action-oriented commit messages. Good examples:

```text
add checked parse report api
add csvlite audit command
document fixture smoke tests
```

For contest submission, prefer several meaningful commits over one large dump:
feature, tests, docs, CLI, fixtures, and release material should be easy to
review in history.

## Before Opening A PR

Run:

```powershell
moon fmt --check
moon check
moon test
.\scripts\test-fixtures.ps1
.\scripts\verify.ps1
```

If `moon publish --dry-run` is part of the change, make sure you are logged in
with the intended Mooncakes account first.
