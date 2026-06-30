# CSV Quality Gate Report

## Summary

- Status: fail
- Baseline score: 100 (A)
- Candidate score: 96 (A)
- Score delta: -4
- Gate issues: 2

## Policy

- Minimum candidate score: 80
- Maximum allowed score drop: 10
- Maximum candidate quality issues: 5
- Allow new columns: yes
- Allow removed columns: no
- Allow type changes: no
- Allow missing-value increases: no

## Gate Issues

| severity | rule | column | message |
| --- | --- | --- | --- |
| error | no_missing_increase | age | Column `age` missing values increased from 0 to 1. |
| error | no_missing_increase | city | Column `city` missing values increased from 0 to 1. |
