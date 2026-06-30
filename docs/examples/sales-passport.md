# CSV Data Passport

## Identity

- Name: sales-semicolon
- Fingerprint: `csvp-3x4-912643`
- Dialect: semicolon
- Rows: 3
- Columns: 4
- Cells: 12

## Quality

- Score: **100** (A)
- Risk: low
- Missing cells: 0/12
- Parse issues: 0
- Table quality issues: 0

## Schema Summary

| metric | value |
| --- | ---: |
| required columns | 4 |
| optional columns | 0 |
| numeric columns | 1 |
| boolean columns | 1 |
| text columns | 2 |
| fully unique columns | 2 |

## Columns

| column | type | required | empty | unique | examples |
| --- | --- | --- | ---: | ---: | --- |
| order_id | text | yes | 0/3 | 3 | SO-1001, SO-1002, SO-1003 |
| region | text | yes | 0/3 | 2 | east, west |
| amount | float | yes | 0/3 | 3 | 120.5, 88.0, 130.0 |
| paid | boolean | yes | 0/3 | 2 | true, false |

## Recommendations

- **info**: Detected semicolon dialect; use parse_table_auto or the detected dialect when parsing this source.
- **info**: Column `amount` looks numeric and can be used for aggregation or range validation.
