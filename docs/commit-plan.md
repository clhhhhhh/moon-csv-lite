# Commit Plan

This file is a guide for turning the current local work into a clean public
history after GitHub access is available.

The goal is not to invent fake history. The goal is to split real work into
reviewable commits that show steady progress and satisfy the contest
expectation for meaningful commits.

## Suggested Commit Sequence

1. Restore runnable MoonBit package structure and generated package interfaces.
2. Add table operations and focused table-operation tests.
3. Add aggregation helpers and group-by tests.
4. Add advanced schema validation helpers and tests.
5. Add HTML/Markdown report exports and tests.
6. Add joins, append, union-by-name, transpose, and tests.
7. Add data-cleaning helpers and missing-summary tests.
8. Add checked parse reports for row-width and quote issues.
9. Add `cmd/csvlite` CLI with profile/check/export/table/audit-json commands.
10. Add dialect sniffing and auto-parse helpers.
11. Add schema inference helpers and schema-rendering tests.
12. Add audit reports with Markdown/HTML/JSON output.
13. Add audit recommendations and the `examples/data-audit` package.
14. Add fixtures and fixture smoke-test script.
15. Add example reports, API guide, cookbook, architecture, and roadmap docs.
16. Add CONTRIBUTING, release checklist, CI workflow, and submission checklist.
17. Refresh README and OSC2026 application material.

## Before Committing

Run:

```powershell
.\scripts\verify.ps1
.\scripts\status.ps1
```

Check:

- `moon test` reports all tests passing.
- MoonBit LOC remains within the contest range.
- `git status --short` only contains intended files.
- README and docs mention the current test count.

## Commit Message Style

Use short action-oriented messages:

```text
add audit recommendations
document csv cookbook
add fixture smoke tests
upgrade ci verification
```

Avoid vague messages like `update`, `fix stuff`, or `final`.

## Final Push Checklist

After commits are ready:

```powershell
git log --oneline
git push -u origin main
```

Then confirm GitHub Actions passes and continue with `docs/release.md`.
