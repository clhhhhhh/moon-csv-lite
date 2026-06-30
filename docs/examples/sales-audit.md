# CSV Audit Report

## Summary

- Status: ok
- Dialect: semicolon
- Delimiter: `;`
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
| order_id | text | yes | 0/3 | 3 | SO-1001, SO-1002, SO-1003 |
| region | text | yes | 0/3 | 2 | east, west |
| amount | float | yes | 0/3 | 3 | 120.5, 88.0, 130.0 |
| paid | boolean | yes | 0/3 | 2 | true, false |

## Missing Values

| column | missing | present |
| --- | --- | --- |
| order_id | 0 | 3 |
| region | 0 | 3 |
| amount | 0 | 3 |
| paid | 0 | 3 |

## Column Profile

| column | type | empty | non_empty | unique | min | max | average |
| --- | --- | ---: | ---: | ---: | --- | --- | --- |
| order_id | text | 0 | 3 | 3 |  |  |  |
| region | text | 0 | 3 | 2 |  |  |  |
| amount | float | 0 | 3 | 3 | 88 | 130 | 112.83333333333333 |
| paid | boolean | 0 | 3 | 2 |  |  |  |

## Recommendations

- **info**: Detected semicolon dialect; use parse_table_auto or the detected dialect when parsing this source.
- **info**: Column `amount` looks numeric and can be used for aggregation or range validation.
