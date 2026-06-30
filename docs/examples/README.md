# Example Reports

These files show representative `cmd/csvlite audit` output from the fixture
test set. They are checked into the repository so reviewers can inspect the
tool behavior without running commands first.

| report | source fixture | focus |
| --- | --- | --- |
| `people-audit.md` | `fixtures/people-clean.csv` | clean CSV, inferred types, no missing values |
| `missing-audit.md` | `fixtures/people-missing.csv` | optional fields and missing counts |
| `bad-width-audit.md` | `fixtures/bad-width.csv` | row-width issue reporting |
| `quality-issues-audit.md` | `fixtures/quality-issues.csv` | duplicate headers, empty columns, empty rows, and duplicate rows |
| `quality-issues-audit.json` | `fixtures/quality-issues.csv` | machine-readable audit output for CI or scripts |
| `people-drift.md` | clean vs missing people fixtures | schema-stable quality drift report |
| `people-drift.json` | clean vs missing people fixtures | machine-readable drift output |
| `people-gate.md` | clean vs missing people fixtures | pass/fail CSV quality gate report |
| `people-gate.json` | clean vs missing people fixtures | machine-readable quality gate output |
| `sales-audit.md` | `fixtures/sales-semicolon.csv` | semicolon dialect detection |
| `sales-chart.json` | `fixtures/sales-semicolon.csv` | chart preview JSON with grouped numeric sums |
| `sales-chart.svg` | `fixtures/sales-semicolon.csv` | standalone SVG chart preview |
| `sales-chart.html` | `fixtures/sales-semicolon.csv` | standalone HTML chart preview |
| `sales-contract.md` | `fixtures/sales-semicolon.csv` + `fixtures/sales-contract.csv` | reusable CSV quality contract report |
| `sales-contract.json` | `fixtures/sales-semicolon.csv` + `fixtures/sales-contract.csv` | machine-readable contract result |
| `sales-passport.md` | `fixtures/sales-semicolon.csv` | review-friendly CSV Data Passport |
| `sales-passport.json` | `fixtures/sales-semicolon.csv` | machine-readable CSV Data Passport |
| `sales-inferred-contract.csv` | `fixtures/sales-semicolon.csv` | starter contract inferred from a sample |
| `html-audit.html` | `fixtures/html-sensitive.csv` | HTML report rendering and escaping |

Regenerate them with:

```powershell
.\scripts\generate-example-reports.ps1
```
