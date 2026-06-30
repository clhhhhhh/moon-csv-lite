# Fixture Test Set

These small CSV-like files are used by `scripts/test-fixtures.ps1` to exercise
realistic command-line workflows.
The script reads each file and escapes double quotes before passing content to
the CLI, which keeps quoted CSV fields intact across PowerShell/native command
argument handling.

| file | purpose |
| --- | --- |
| `people-clean.csv` | clean comma-separated data with text, integer, and boolean columns |
| `people-missing.csv` | missing values for audit and missing-summary checks |
| `bad-width.csv` | row-width mismatch detection |
| `quality-issues.csv` | duplicate headers, empty header, empty column, empty row, and duplicate row checks |
| `sales-semicolon.csv` | semicolon dialect sniffing |
| `sales-contract.csv` | reusable quality contract for the sales fixture |
| `logs.tsv` | TSV dialect sniffing and schema inference |
| `html-sensitive.csv` | quoted commas and HTML escaping in reports |
