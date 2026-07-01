# Release Process

This checklist is for preparing a public release and mooncakes.io publication.

## 1. Verify Locally

Run the complete local verification flow:

```powershell
.\scripts\verify.ps1
```

Expected test line:

```text
Total tests: 183, passed: 183, failed: 0.
```

You can also run the core checks manually:

```powershell
moon fmt --check
moon check
moon test
.\scripts\test-fixtures.ps1
.\scripts\generate-example-reports.ps1
.\scripts\build-playground-engine.ps1
.\scripts\check-playground.ps1
moon package --list
```

## 2. Check Package Metadata

Confirm `moon.mod` has the correct owner, repository, license, version, and
description:

```text
name = "clhhhhh/moon-csv-lite"
version = "0.1.0"
repository = "https://github.com/clhhhhhh/moon-csv-lite"
license = "MIT"
```

If the GitHub or Mooncakes owner changes, update `name` and `repository` before
publishing.

## 3. Confirm Git Status

Review local changes:

```powershell
git status --short
git diff --stat
```

For contest submission, keep a clear commit history with at least 10 meaningful
commits that reflect real work: parser fixes, table utilities, validation,
audit workflow, CLI, tests, fixtures, docs, and release material.

## 4. Push And Check CI

Push the branch to the public GitHub repository and wait for GitHub Actions:

```powershell
git push -u origin main
```

The CI workflow runs formatting, `moon check`, tests, examples, CLI smoke tests,
fixture tests, report generation, MoonBit JS playground bundle generation,
playground smoke tests, and package listing.

## 5. Publish To Mooncakes

Log in and confirm the account:

```powershell
moon login
moon whoami
```

Run a dry run before publishing:

```powershell
moon publish --dry-run
moon publish
```

The `0.1.0` package is published at:

```text
https://mooncakes.io/docs/clhhhhh/moon-csv-lite
```

If `moon publish --dry-run` reports missing credentials, run `moon login` again
and retry.

## 6. Update Submission Material

After publishing:

- Add the GitHub repository URL to the online submission form.
- Add the mooncakes.io package URL to the online submission form:
  `https://mooncakes.io/docs/clhhhhh/moon-csv-lite`.
- Update `docs/osc2026-application.md` and regenerate
  `docs/osc2026-application.pdf` if the PDF needs the final package URL.
- Confirm README, API guide, fixture docs, roadmap, license, CI, and examples
  are visible in the public repository.

## 7. Tag Optional Release

After publication, optionally create a Git tag:

```powershell
git tag v0.1.0
git push origin v0.1.0
```
