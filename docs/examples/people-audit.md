# CSV Audit Report

## Summary

- Status: ok
- Dialect: comma
- Delimiter: `,`
- Rows: 3
- Columns: 4
- Parse issues: 0
- Quality issues: 0

## Quality Score

- Overall score: **100** (A)
- Risk: low
- Missing cells: 0/12

| dimension | score |
| --- | ---: |
| structure | 100 |
| completeness | 100 |
| consistency | 100 |
| uniqueness | 100 |
| issue penalty | 0 |

## Parse Issues

No parse issues.

## Quality Issues

No table quality issues.

## Inferred Schema

| column | type | required | empty | unique | examples |
| --- | --- | --- | ---: | ---: | --- |
| name | text | yes | 0/3 | 3 | Alice, Bob, Cara |
| age | integer | yes | 0/3 | 3 | 18, 20, 22 |
| active | boolean | yes | 0/3 | 2 | true, false |
| city | text | yes | 0/3 | 3 | Shenzhen, Shanghai, Beijing |

## Missing Values

| column | missing | present |
| --- | --- | --- |
| name | 0 | 3 |
| age | 0 | 3 |
| active | 0 | 3 |
| city | 0 | 3 |

## Column Profile

| column | type | empty | non_empty | unique | min | max | average |
| --- | --- | ---: | ---: | ---: | --- | --- | --- |
| name | text | 0 | 3 | 3 |  |  |  |
| age | integer | 0 | 3 | 3 | 18 | 22 | 20 |
| active | boolean | 0 | 3 | 2 |  |  |  |
| city | text | 0 | 3 | 3 |  |  |  |

## Recommendations

- **info**: Column `age` looks numeric and can be used for aggregation or range validation.
