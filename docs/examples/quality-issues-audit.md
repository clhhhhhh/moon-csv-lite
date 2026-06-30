# CSV Audit Report

## Summary

- Status: issues
- Dialect: comma
- Delimiter: `,`
- Rows: 3
- Columns: 3
- Parse issues: 0
- Quality issues: 5

## Quality Score

- Overall score: **67** (D)
- Risk: high
- Missing cells: 5/9

| dimension | score |
| --- | ---: |
| structure | 100 |
| completeness | 45 |
| consistency | 56 |
| uniqueness | 88 |
| issue penalty | 30 |

## Parse Issues

No parse issues.

## Quality Issues

| severity | row | column | message |
| --- | ---: | --- | --- |
| warning | 1 | name | Header `name` is duplicated; rename columns before joining, selecting, or JSON export. |
| warning | 1 | #3 | Header column #3 is empty; give it a stable name before validation or export. |
| warning | 4 | * | Row 4 is empty; consider dropping empty rows before profiling. |
| warning | 1 | #3 | Column `#3` is empty in every row; consider dropping it or filling defaults. |
| info | 3 | * | Row 3 duplicates row 2; deduplicate if rows should be unique. |

## Inferred Schema

| column | type | required | empty | unique | examples |
| --- | --- | --- | ---: | ---: | --- |
| name | text | no | 1/3 | 1 | Alice |
| name | integer | no | 1/3 | 1 | 18 |
|  | text | no | 3/3 | 0 |  |

## Missing Values

| column | missing | present |
| --- | --- | --- |
| name | 1 | 2 |
| name | 1 | 2 |
|  | 3 | 0 |

## Column Profile

| column | type | empty | non_empty | unique | min | max | average |
| --- | --- | ---: | ---: | ---: | --- | --- | --- |
| name | text | 1 | 2 | 1 |  |  |  |
| name | integer | 1 | 2 | 1 | 18 | 18 | 18 |
|  | empty | 3 | 0 | 0 |  |  |  |

## Recommendations

- **warning**: Header `name` is duplicated; rename columns before joining, selecting, or JSON export.
- **warning**: Header column #3 is empty; give it a stable name before validation or export.
- **warning**: Row 4 is empty; consider dropping empty rows before profiling.
- **warning**: Column `#3` is empty in every row; consider dropping it or filling defaults.
- **info**: Row 3 duplicates row 2; deduplicate if rows should be unique.
- **warning**: Column `name` has 1 missing value(s); keep it optional or fill defaults before strict validation.
- **warning**: Column `name` has 1 missing value(s); keep it optional or fill defaults before strict validation.
- **warning**: Column `` has 3 missing value(s); keep it optional or fill defaults before strict validation.
- **info**: Column `name` looks numeric and can be used for aggregation or range validation.
