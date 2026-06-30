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

- Overall score: **96** (A)
- Risk: low
- Missing cells: 2/12

| dimension | score |
| --- | ---: |
| structure | 100 |
| completeness | 84 |
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
| age | integer | no | 1/3 | 2 | 18, 22 |
| active | boolean | yes | 0/3 | 2 | true, false |
| city | text | no | 1/3 | 2 | Shenzhen, Shanghai |

## Missing Values

| column | missing | present |
| --- | --- | --- |
| name | 0 | 3 |
| age | 1 | 2 |
| active | 0 | 3 |
| city | 1 | 2 |

## Column Profile

| column | type | empty | non_empty | unique | min | max | average |
| --- | --- | ---: | ---: | ---: | --- | --- | --- |
| name | text | 0 | 3 | 3 |  |  |  |
| age | integer | 1 | 2 | 2 | 18 | 22 | 20 |
| active | boolean | 0 | 3 | 2 |  |  |  |
| city | text | 1 | 2 | 2 |  |  |  |

## Recommendations

- **warning**: Column `age` has 1 missing value(s); keep it optional or fill defaults before strict validation.
- **warning**: Column `city` has 1 missing value(s); keep it optional or fill defaults before strict validation.
- **info**: Column `age` looks numeric and can be used for aggregation or range validation.
