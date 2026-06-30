# Submission Checklist

Use this checklist before submitting moon-csv-lite to OSC2026.

## Local Verification

```powershell
moon fmt --check
moon check
moon test
moon run cmd/main
moon run examples/basic
moon run examples/data-audit
moon run examples/quality-report
moon run examples/rf-measurement
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
moon run cmd/csvlite -- markdown "name,age\nAlice,18"
moon run cmd/csvlite -- group-sum "team,score\nA,10\nB,20\nA,15" team score
moon run cmd/csvlite -- check "name,age\nAlice,18,extra"
.\scripts\audit-file.ps1 .\fixtures\quality-issues.csv
.\scripts\test-fixtures.ps1
.\scripts\generate-example-reports.ps1
.\scripts\build-playground-engine.ps1
.\scripts\check-playground.ps1
.\scripts\status.ps1
moon package --list
```

Expected test result:

```text
Total tests: 183, passed: 183, failed: 0.
```

Current local status:

- `.\scripts\verify.ps1` passes end to end.
- `moon publish --dry-run` requires a Mooncakes login first.
- `moon whoami` should show the intended Mooncakes account before publishing.

## GitHub Repository

The local `origin` remote is already set to:

```text
https://github.com/clhhhhhh/moon-csv-lite.git
```

Option A: use GitHub CLI.

```powershell
gh auth login
gh repo create clhhhhhh/moon-csv-lite --public --source . --remote origin --push
```

Option B: use the GitHub website.

1. Create a public GitHub repository named `moon-csv-lite` under `clhhhhhh`.
2. Push the local repository:

```text
git push -u origin main
```

The `repository` field in `moon.mod` is already set to:

```text
repository = "https://github.com/clhhhhhh/moon-csv-lite"
```

After pushing, open GitHub Actions and confirm the CI workflow passes.

## Mooncakes Publish

1. Log in to mooncakes.io. This is required before `moon publish --dry-run` can run:

```powershell
moon login
moon whoami
```

2. Register or log in with the mooncakes username `clhhhhhh` if possible. The module name is already set to:

```text
name = "clhhhhhh/moon-csv-lite"
```

If `clhhhhhh` is unavailable on mooncakes.io, change the owner part in `moon.mod` before publishing.

3. Run publish checks:

```powershell
moon publish --dry-run
moon publish
```

4. Add the published mooncakes.io package URL to the application PDF or the online submission form.

## Base Reward Readiness

Before submitting for the base support reward, confirm these items are done:

- Public GitHub repository is reachable.
- CI has passed on GitHub Actions.
- Package has been published or at least passes `moon publish --dry-run` after login.
- README includes usage, features, examples, development commands, publishing notes, and license.
- Application material includes repository URL, Mooncakes package URL, test count, examples, and license.
- Local verification output is saved or can be reproduced with `.\scripts\verify.ps1`.
- Fixture verification output is saved or can be reproduced with `.\scripts\test-fixtures.ps1`.
- Example audit reports can be regenerated with `.\scripts\generate-example-reports.ps1`.
- MoonBit JS browser engine can be regenerated with `.\scripts\build-playground-engine.ps1`.
- Browser playground can be opened with `start .\playground\index.html` and checked with `.\scripts\check-playground.ps1`.

## Application Materials

- Repository URL: GitHub public repository link.
- PDF application: `docs/osc2026-application.pdf`.
- README: `README.md`.
- API guide: `docs/api.md`.
- Cookbook: `docs/cookbook.md`.
- Architecture guide: `docs/architecture.md`.
- Roadmap: `docs/roadmap.md`.
- Why MoonBit: `docs/why-moonbit.md`.
- Commit plan: `docs/commit-plan.md`.
- Contributing guide: `CONTRIBUTING.md`.
- Release process: `docs/release.md`.
- Example reports: `docs/examples/`.
- License: `LICENSE`.
- CI: `.github/workflows/ci.yml`.
- Tests: `moon-csv-lite_test.mbt`, `moon-csv-lite_wbtest.mbt`, and feature-specific `*_wbtest.mbt` files.
- Fixtures: `fixtures/` and `scripts/test-fixtures.ps1`.
- Playground: `playground/index.html`, `playground/styles.css`, `playground/app.js`, and `playground/moon-csv-lite-engine.js`.
- MoonBit browser adapter: `web/`.
- Scripts: `scripts/audit-file.ps1`, `scripts/build-playground-engine.ps1`, `scripts/check-playground.ps1`, `scripts/test-fixtures.ps1`, `scripts/generate-example-reports.ps1`, `scripts/status.ps1`, and `scripts/verify.ps1`.
- Examples: `cmd/main`, `cmd/csvlite`, `examples/basic`, `examples/data-audit`, `examples/quality-report`, and `examples/rf-measurement`.
