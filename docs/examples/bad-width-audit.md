# CSV Audit Report

## Summary

- Status: issues
- Dialect: comma
- Delimiter: `,`
- Rows: 2
- Columns: 2
- Parse issues: 1
- Quality issues: 0

## Quality Score

- Overall score: **83** (B)
- Risk: medium
- Missing cells: 0/4

| dimension | score |
| --- | ---: |
| structure | 65 |
| completeness | 100 |
| consistency | 100 |
| uniqueness | 100 |
| issue penalty | 20 |

## Parse Issues

| line | column | message |
| ---: | ---: | --- |
| 2 | 1 | expected 2 fields, got 3 |

## Quality Issues

No table quality issues.

## Inferred Schema

| column | type | required | empty | unique | examples |
| --- | --- | --- | ---: | ---: | --- |
| name | text | yes | 0/2 | 2 | Alice, Bob |
| age | integer | yes | 0/2 | 2 | 18, 20 |

## Missing Values

| column | missing | present |
| --- | --- | --- |
| name | 0 | 2 |
| age | 0 | 2 |

## Column Profile

| column | type | empty | non_empty | unique | min | max | average |
| --- | --- | ---: | ---: | ---: | --- | --- | --- |
| name | text | 0 | 2 | 2 |  |  |  |
| age | integer | 0 | 2 | 2 | 18 | 20 | 19 |

## Recommendations

- **error**: Fix structural parse issues before trusting schema or profile output.
- **info**: Column `age` looks numeric and can be used for aggregation or range validation.
