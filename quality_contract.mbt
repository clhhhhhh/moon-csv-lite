///|
/// Numeric threshold rule used by CSV quality contracts.
pub(all) struct CsvContractNumberRule {
  column : String
  value : Double
} derive(Eq, Debug)

///|
/// Allowed-value rule used by CSV quality contracts.
pub(all) struct CsvContractAllowedValuesRule {
  column : String
  allowed : Array[String]
  required : Bool
} derive(Eq, Debug)

///|
/// Unique-key rule used by CSV quality contracts.
pub(all) struct CsvContractUniqueKeyRule {
  columns : Array[String]
} derive(Eq, Debug)

///|
/// A reusable CSV data-quality contract.
///
/// Contracts are intentionally higher level than parser settings. They describe
/// what a CSV asset must look like before it is trusted by a release, CI job, or
/// data import workflow.
pub(all) struct CsvQualityContract {
  name : String
  min_score : Int
  max_parse_issues : Int
  max_quality_issues : Int
  min_rows : Int
  max_rows : Int
  required_columns : Array[String]
  column_rules : Array[CsvColumnRule]
  min_number_rules : Array[CsvContractNumberRule]
  max_number_rules : Array[CsvContractNumberRule]
  allowed_values_rules : Array[CsvContractAllowedValuesRule]
  unique_key_rules : Array[CsvContractUniqueKeyRule]
} derive(Eq, Debug)

///|
/// One contract violation or advisory.
pub(all) struct CsvContractIssue {
  severity : String
  rule : String
  row : Int
  column : String
  message : String
} derive(Eq, Debug)

///|
/// Contract evaluation result for one CSV input.
pub(all) struct CsvContractReport {
  passed : Bool
  contract : CsvQualityContract
  audit : CsvAuditReport
  score : CsvAuditScore
  issues : Array[CsvContractIssue]
} derive(Eq, Debug)

///|
/// Create an empty, practical default contract.
pub fn quality_contract_default(name : String) -> CsvQualityContract {
  {
    name,
    min_score: 0,
    max_parse_issues: 0,
    max_quality_issues: 999999,
    min_rows: -1,
    max_rows: -1,
    required_columns: [],
    column_rules: [],
    min_number_rules: [],
    max_number_rules: [],
    allowed_values_rules: [],
    unique_key_rules: [],
  }
}

///|
/// Parse a quality contract from a small CSV dialect.
///
/// Expected columns are `rule,column,value,extra`. The supported rules are:
/// `name`, `min_score`, `max_parse_issues`, `max_quality_issues`, `min_rows`,
/// `max_rows`, `required`, `type`, `min`, `max`, `allowed`, and `unique`.
pub fn quality_contract_from_csv(input : String) -> CsvQualityContract {
  let table = parse_table_auto(input)
  let mut name = "csv-contract"
  let mut min_score = 0
  let mut max_parse_issues = 0
  let mut max_quality_issues = 999999
  let mut min_rows = -1
  let mut max_rows = -1
  let required_columns : Array[String] = Array::new()
  let column_rules : Array[CsvColumnRule] = Array::new()
  let min_number_rules : Array[CsvContractNumberRule] = Array::new()
  let max_number_rules : Array[CsvContractNumberRule] = Array::new()
  let allowed_values_rules : Array[CsvContractAllowedValuesRule] = Array::new()
  let unique_key_rules : Array[CsvContractUniqueKeyRule] = Array::new()
  for row in table.rows {
    let rule = contract_normalize(quality_contract_cell(table, row, "rule"))
    let column = contract_trim_ascii(
      quality_contract_cell(table, row, "column"),
    )
    let value = contract_trim_ascii(quality_contract_cell(table, row, "value"))
    let extra = contract_trim_ascii(quality_contract_cell(table, row, "extra"))
    match rule {
      "name" | "title" =>
        if !value.is_empty() {
          name = value
        } else if !column.is_empty() && column != "*" {
          name = column
        }
      "min_score" | "min-score" =>
        min_score = contract_parse_int(value, min_score)
      "max_parse_issues" | "max-parse-issues" =>
        max_parse_issues = contract_parse_int(value, max_parse_issues)
      "max_quality_issues" | "max-quality-issues" =>
        max_quality_issues = contract_parse_int(value, max_quality_issues)
      "min_rows" | "min-rows" => min_rows = contract_parse_int(value, min_rows)
      "max_rows" | "max-rows" => max_rows = contract_parse_int(value, max_rows)
      "required" | "required_column" | "required-column" =>
        contract_push_columns(required_columns, column, value)
      "type" =>
        match contract_parse_column_type(value) {
          Some(kind) =>
            if !column.is_empty() && column != "*" {
              column_rules.push({
                name: column,
                kind,
                required: contract_truthy(extra),
              })
            }
          None => ()
        }
      "min" | "minimum" =>
        match contract_parse_double(value) {
          Some(number) =>
            if !column.is_empty() && column != "*" {
              min_number_rules.push({ column, value: number })
            }
          None => ()
        }
      "max" | "maximum" =>
        match contract_parse_double(value) {
          Some(number) =>
            if !column.is_empty() && column != "*" {
              max_number_rules.push({ column, value: number })
            }
          None => ()
        }
      "allowed" | "enum" =>
        if !column.is_empty() && column != "*" {
          allowed_values_rules.push({
            column,
            allowed: contract_split_pipe(value),
            required: contract_truthy(extra),
          })
        }
      "unique" | "unique_key" | "unique-key" => {
        let columns = if !value.is_empty() {
          contract_split_pipe(value)
        } else {
          contract_split_pipe(column)
        }
        if columns.length() > 0 {
          unique_key_rules.push({ columns, })
        }
      }
      _ => ()
    }
  }
  {
    name,
    min_score,
    max_parse_issues,
    max_quality_issues,
    min_rows,
    max_rows,
    required_columns,
    column_rules,
    min_number_rules,
    max_number_rules,
    allowed_values_rules,
    unique_key_rules,
  }
}

///|
/// Infer a starter quality contract from a representative CSV sample.
pub fn quality_contract_infer_csv(input : String) -> String {
  quality_contract_infer_report(audit_csv(input), "inferred-contract")
}

///|
/// Infer a starter contract from an audit report.
pub fn quality_contract_infer_report(
  audit : CsvAuditReport,
  name : String,
) -> String {
  let score = audit_quality_score(audit)
  let out = StringBuilder()
  out.write_string("rule,column,value,extra\n")
  out.write_string("name,*,")
  contract_write_csv_field(out, name)
  out.write_string(",\n")
  out.write_string("min_score,*,\{score.score},\n")
  out.write_string("max_parse_issues,*,\{audit.parse_issues.length()},\n")
  out.write_string("max_quality_issues,*,\{audit.quality_issues.length()},\n")
  out.write_string("min_rows,*,\{audit.table.rows.length()},\n")
  for rule in audit.inferred_schema {
    out.write_string("required,")
    contract_write_csv_field(out, rule.name)
    out.write_string(",,\n")
    out.write_string("type,")
    contract_write_csv_field(out, rule.name)
    out.write_char(',')
    out.write_string(contract_column_type_name(rule.kind))
    out.write_char(',')
    out.write_string(if rule.required { "required" } else { "optional" })
    out.write_char('\n')
  }
  for profile in audit.profiles {
    if profile.total > 0 &&
      profile.unique == profile.total &&
      contract_name_looks_like_key(profile.name) {
      out.write_string("unique,")
      contract_write_csv_field(out, profile.name)
      out.write_string(",,\n")
    }
  }
  out.to_string()
}

///|
/// Evaluate CSV text against a parsed quality contract.
pub fn audit_quality_contract(
  input : String,
  contract : CsvQualityContract,
) -> CsvContractReport {
  let audit = audit_csv(input)
  audit_quality_contract_report(audit, contract)
}

///|
/// Evaluate an audit report against a quality contract.
pub fn audit_quality_contract_report(
  audit : CsvAuditReport,
  contract : CsvQualityContract,
) -> CsvContractReport {
  let score = audit_quality_score(audit)
  let issues : Array[CsvContractIssue] = Array::new()
  contract_collect_audit_issues(issues, audit, score, contract)
  contract_collect_schema_issues(issues, audit.table, contract)
  contract_collect_unique_issues(issues, audit.table, contract)
  { passed: contract_passed(issues), contract, audit, score, issues }
}

///|
/// Parse a contract CSV, evaluate CSV text, and render Markdown.
pub fn audit_quality_contract_markdown(
  input : String,
  contract_csv : String,
) -> String {
  audit_quality_contract_report_markdown(
    audit_quality_contract(input, quality_contract_from_csv(contract_csv)),
  )
}

///|
/// Parse a contract CSV, evaluate CSV text, and render JSON.
pub fn audit_quality_contract_json(
  input : String,
  contract_csv : String,
) -> String {
  audit_quality_contract_report_json(
    audit_quality_contract(input, quality_contract_from_csv(contract_csv)),
  )
}

///|
/// Render a contract report as Markdown.
pub fn audit_quality_contract_report_markdown(
  report : CsvContractReport,
) -> String {
  let out = StringBuilder()
  out.write_string("# CSV Quality Contract Report\n\n")
  out.write_string("## Summary\n\n")
  out.write_string("- Contract: ")
  contract_write_markdown_cell(out, report.contract.name)
  out.write_char('\n')
  out.write_string("- Status: ")
  out.write_string(if report.passed { "pass" } else { "fail" })
  out.write_char('\n')
  out.write_string(
    "- Quality score: \{report.score.score} (\{report.score.grade})\n",
  )
  out.write_string(
    "- Rows: \{report.audit.table.rows.length()}\n- Columns: \{report.audit.table.headers.length()}\n",
  )
  out.write_string("- Contract issues: \{report.issues.length()}\n")
  out.write_string("\n## Contract Policy\n\n")
  out.write_string("| policy | value |\n")
  out.write_string("| --- | ---: |\n")
  out.write_string("| min_score | \{report.contract.min_score} |\n")
  out.write_string(
    "| max_parse_issues | \{report.contract.max_parse_issues} |\n",
  )
  out.write_string(
    "| max_quality_issues | \{report.contract.max_quality_issues} |\n",
  )
  if report.contract.min_rows >= 0 {
    out.write_string("| min_rows | \{report.contract.min_rows} |\n")
  }
  if report.contract.max_rows >= 0 {
    out.write_string("| max_rows | \{report.contract.max_rows} |\n")
  }
  out.write_string("\n## Contract Issues\n\n")
  if report.issues.length() == 0 {
    out.write_string("No contract violations.\n")
  } else {
    out.write_string("| severity | rule | row | column | message |\n")
    out.write_string("| --- | --- | ---: | --- | --- |\n")
    for issue in report.issues {
      out.write_string("| ")
      contract_write_markdown_cell(out, issue.severity)
      out.write_string(" | ")
      contract_write_markdown_cell(out, issue.rule)
      out.write_string(" | \{issue.row} | ")
      contract_write_markdown_cell(out, issue.column)
      out.write_string(" | ")
      contract_write_markdown_cell(out, issue.message)
      out.write_string(" |\n")
    }
  }
  out.to_string()
}

///|
/// Render a contract report as compact JSON.
pub fn audit_quality_contract_report_json(report : CsvContractReport) -> String {
  let out = StringBuilder()
  out.write_char('{')
  out.write_string("\"passed\":")
  contract_write_json_bool(out, report.passed)
  out.write_string(",\"contract\":")
  contract_write_contract_json(out, report.contract)
  out.write_string(",\"summary\":{")
  out.write_string("\"score\":\{report.score.score}")
  out.write_string(",\"grade\":")
  contract_write_json_string(out, report.score.grade)
  out.write_string(",\"risk\":")
  contract_write_json_string(out, report.score.risk)
  out.write_string(",\"rows\":\{report.audit.table.rows.length()}")
  out.write_string(",\"columns\":\{report.audit.table.headers.length()}")
  out.write_string(",\"parse_issues\":\{report.audit.parse_issues.length()}")
  out.write_string(
    ",\"quality_issues\":\{report.audit.quality_issues.length()}",
  )
  out.write_string(",\"contract_issues\":\{report.issues.length()}")
  out.write_char('}')
  out.write_string(",\"issues\":")
  contract_write_issues_json(out, report.issues)
  out.write_char('}')
  out.to_string()
}

///|
fn contract_collect_audit_issues(
  issues : Array[CsvContractIssue],
  audit : CsvAuditReport,
  score : CsvAuditScore,
  contract : CsvQualityContract,
) -> Unit {
  if score.score < contract.min_score {
    contract_push_issue(
      issues,
      "error",
      "min_score",
      0,
      "*",
      "quality score \{score.score} is below contract minimum \{contract.min_score}",
    )
  }
  if audit.parse_issues.length() > contract.max_parse_issues {
    contract_push_issue(
      issues,
      "error",
      "max_parse_issues",
      0,
      "*",
      "parse issue count \{audit.parse_issues.length()} exceeds contract maximum \{contract.max_parse_issues}",
    )
  }
  if audit.quality_issues.length() > contract.max_quality_issues {
    contract_push_issue(
      issues,
      "error",
      "max_quality_issues",
      0,
      "*",
      "quality issue count \{audit.quality_issues.length()} exceeds contract maximum \{contract.max_quality_issues}",
    )
  }
  if contract.min_rows >= 0 && audit.table.rows.length() < contract.min_rows {
    contract_push_issue(
      issues,
      "error",
      "min_rows",
      0,
      "*",
      "row count \{audit.table.rows.length()} is below contract minimum \{contract.min_rows}",
    )
  }
  if contract.max_rows >= 0 && audit.table.rows.length() > contract.max_rows {
    contract_push_issue(
      issues,
      "error",
      "max_rows",
      0,
      "*",
      "row count \{audit.table.rows.length()} exceeds contract maximum \{contract.max_rows}",
    )
  }
}

///|
fn contract_collect_schema_issues(
  issues : Array[CsvContractIssue],
  table : CsvTable,
  contract : CsvQualityContract,
) -> Unit {
  contract_push_validation_errors(
    issues,
    "required",
    validate_required_columns(table, contract.required_columns),
  )
  contract_push_validation_errors(
    issues,
    "type",
    validate_table(table, contract.column_rules),
  )
  for rule in contract.min_number_rules {
    contract_push_validation_errors(
      issues,
      "min",
      validate_min_number(table, rule.column, rule.value),
    )
  }
  for rule in contract.max_number_rules {
    contract_push_validation_errors(
      issues,
      "max",
      validate_max_number(table, rule.column, rule.value),
    )
  }
  for rule in contract.allowed_values_rules {
    contract_push_validation_errors(
      issues,
      "allowed",
      validate_allowed_values(table, rule.column, rule.allowed, rule.required),
    )
  }
}

///|
fn contract_collect_unique_issues(
  issues : Array[CsvContractIssue],
  table : CsvTable,
  contract : CsvQualityContract,
) -> Unit {
  for rule in contract.unique_key_rules {
    for duplicate in validate_unique_key(table, rule.columns) {
      contract_push_issue(
        issues,
        "error",
        "unique",
        duplicate.duplicate_row,
        contract_join(rule.columns, "+"),
        "row \{duplicate.duplicate_row} duplicates row \{duplicate.first_row}: \{duplicate.key}",
      )
    }
  }
}

///|
fn contract_push_validation_errors(
  issues : Array[CsvContractIssue],
  rule : String,
  errors : Array[CsvValidationError],
) -> Unit {
  for error in errors {
    contract_push_issue(
      issues,
      "error",
      rule,
      error.row,
      error.column,
      error.message,
    )
  }
}

///|
fn contract_push_issue(
  issues : Array[CsvContractIssue],
  severity : String,
  rule : String,
  row : Int,
  column : String,
  message : String,
) -> Unit {
  issues.push({ severity, rule, row, column, message })
}

///|
fn contract_passed(issues : Array[CsvContractIssue]) -> Bool {
  for issue in issues {
    if issue.severity == "error" {
      return false
    }
  }
  true
}

///|
fn quality_contract_cell(
  table : CsvTable,
  row : Array[String],
  column : String,
) -> String {
  match contract_column_index(table.headers, column) {
    Some(index) => contract_cell_at(row, index)
    None => ""
  }
}

///|
fn contract_column_index(headers : Array[String], column : String) -> Int? {
  for i in 0..<headers.length() {
    if contract_normalize(headers[i]) == contract_normalize(column) {
      return Some(i)
    }
  }
  None
}

///|
fn contract_cell_at(row : Array[String], index : Int) -> String {
  if index >= 0 && index < row.length() {
    row[index]
  } else {
    ""
  }
}

///|
fn contract_push_columns(
  columns : Array[String],
  column : String,
  value : String,
) -> Unit {
  if !column.is_empty() && column != "*" {
    contract_push_unique(columns, column)
  }
  for item in contract_split_pipe(value) {
    contract_push_unique(columns, item)
  }
}

///|
fn contract_push_unique(values : Array[String], value : String) -> Unit {
  let trimmed = contract_trim_ascii(value)
  if trimmed.is_empty() || trimmed == "*" {
    return
  }
  for item in values {
    if item == trimmed {
      return
    }
  }
  values.push(trimmed)
}

///|
fn contract_parse_column_type(value : String) -> CsvColumnType? {
  match contract_normalize(value) {
    "text" | "string" => Some(Text)
    "integer" | "int" => Some(Integer)
    "float" | "double" | "number" => Some(Float)
    "boolean" | "bool" => Some(Boolean)
    _ => None
  }
}

///|
fn contract_column_type_name(kind : CsvColumnType) -> String {
  match kind {
    Text => "text"
    Integer => "integer"
    Float => "float"
    Boolean => "boolean"
  }
}

///|
fn contract_parse_int(value : String, fallback : Int) -> Int {
  try @string.parse_int(contract_trim_ascii(value)) catch {
    _ => fallback
  } noraise {
    parsed => parsed
  }
}

///|
fn contract_parse_double(value : String) -> Double? {
  try @string.parse_double(contract_trim_ascii(value)) catch {
    _ => None
  } noraise {
    parsed => Some(parsed)
  }
}

///|
fn contract_truthy(value : String) -> Bool {
  match contract_normalize(value) {
    "required" | "true" | "yes" | "y" | "1" => true
    _ => false
  }
}

///|
fn contract_name_looks_like_key(name : String) -> Bool {
  let normalized = contract_normalize(name)
  normalized == "id" ||
  normalized == "key" ||
  normalized.contains("_id") ||
  normalized.contains("-id") ||
  normalized.contains("id_") ||
  normalized.contains("id-")
}

///|
fn contract_split_pipe(value : String) -> Array[String] {
  let result : Array[String] = Array::new()
  let field = StringBuilder()
  for ch in value.iter() {
    if ch == '|' {
      contract_push_unique(result, field.to_string())
      field.reset()
    } else {
      field.write_char(ch)
    }
  }
  contract_push_unique(result, field.to_string())
  result
}

///|
fn contract_join(values : Array[String], separator : String) -> String {
  let out = StringBuilder()
  for i in 0..<values.length() {
    if i > 0 {
      out.write_string(separator)
    }
    out.write_string(values[i])
  }
  out.to_string()
}

///|
fn contract_normalize(value : String) -> String {
  contract_trim_ascii(value).to_lower()
}

///|
fn contract_trim_ascii(value : String) -> String {
  let chars : Array[Char] = Array::new()
  for ch in value.iter() {
    chars.push(ch)
  }
  let mut start = 0
  let mut finish = chars.length()
  while start < finish && contract_is_ascii_space(chars[start]) {
    start += 1
  }
  while finish > start && contract_is_ascii_space(chars[finish - 1]) {
    finish -= 1
  }
  let out = StringBuilder()
  for i in start..<finish {
    out.write_char(chars[i])
  }
  out.to_string()
}

///|
fn contract_is_ascii_space(ch : Char) -> Bool {
  ch == ' ' || ch == '\t' || ch == '\n' || ch == '\r'
}

///|
fn contract_write_contract_json(
  out : StringBuilder,
  contract : CsvQualityContract,
) -> Unit {
  out.write_char('{')
  out.write_string("\"name\":")
  contract_write_json_string(out, contract.name)
  out.write_string(",\"min_score\":\{contract.min_score}")
  out.write_string(",\"max_parse_issues\":\{contract.max_parse_issues}")
  out.write_string(",\"max_quality_issues\":\{contract.max_quality_issues}")
  out.write_string(",\"min_rows\":\{contract.min_rows}")
  out.write_string(",\"max_rows\":\{contract.max_rows}")
  out.write_string(",\"required_columns\":")
  contract_write_string_array_json(out, contract.required_columns)
  out.write_string(",\"column_rules\":")
  contract_write_column_rules_json(out, contract.column_rules)
  out.write_string(",\"unique_key_rules\":")
  contract_write_unique_rules_json(out, contract.unique_key_rules)
  out.write_char('}')
}

///|
fn contract_write_column_rules_json(
  out : StringBuilder,
  rules : Array[CsvColumnRule],
) -> Unit {
  out.write_char('[')
  for i in 0..<rules.length() {
    if i > 0 {
      out.write_char(',')
    }
    let rule = rules[i]
    out.write_char('{')
    out.write_string("\"column\":")
    contract_write_json_string(out, rule.name)
    out.write_string(",\"type\":")
    contract_write_json_string(out, contract_column_type_name(rule.kind))
    out.write_string(",\"required\":")
    contract_write_json_bool(out, rule.required)
    out.write_char('}')
  }
  out.write_char(']')
}

///|
fn contract_write_unique_rules_json(
  out : StringBuilder,
  rules : Array[CsvContractUniqueKeyRule],
) -> Unit {
  out.write_char('[')
  for i in 0..<rules.length() {
    if i > 0 {
      out.write_char(',')
    }
    out.write_string("{\"columns\":")
    contract_write_string_array_json(out, rules[i].columns)
    out.write_char('}')
  }
  out.write_char(']')
}

///|
fn contract_write_issues_json(
  out : StringBuilder,
  issues : Array[CsvContractIssue],
) -> Unit {
  out.write_char('[')
  for i in 0..<issues.length() {
    if i > 0 {
      out.write_char(',')
    }
    let issue = issues[i]
    out.write_char('{')
    out.write_string("\"severity\":")
    contract_write_json_string(out, issue.severity)
    out.write_string(",\"rule\":")
    contract_write_json_string(out, issue.rule)
    out.write_string(",\"row\":\{issue.row}")
    out.write_string(",\"column\":")
    contract_write_json_string(out, issue.column)
    out.write_string(",\"message\":")
    contract_write_json_string(out, issue.message)
    out.write_char('}')
  }
  out.write_char(']')
}

///|
fn contract_write_string_array_json(
  out : StringBuilder,
  values : Array[String],
) -> Unit {
  out.write_char('[')
  for i in 0..<values.length() {
    if i > 0 {
      out.write_char(',')
    }
    contract_write_json_string(out, values[i])
  }
  out.write_char(']')
}

///|
fn contract_write_json_bool(out : StringBuilder, value : Bool) -> Unit {
  out.write_string(if value { "true" } else { "false" })
}

///|
fn contract_write_json_string(out : StringBuilder, value : String) -> Unit {
  out.write_char('"')
  for ch in value.iter() {
    if ch == '"' {
      out.write_string("\\\"")
    } else if ch == '\\' {
      out.write_string("\\\\")
    } else if ch == '\n' {
      out.write_string("\\n")
    } else if ch == '\r' {
      out.write_string("\\r")
    } else if ch == '\t' {
      out.write_string("\\t")
    } else {
      out.write_char(ch)
    }
  }
  out.write_char('"')
}

///|
fn contract_write_markdown_cell(out : StringBuilder, value : String) -> Unit {
  for ch in value.iter() {
    if ch == '|' {
      out.write_string("\\|")
    } else if ch == '\n' || ch == '\r' {
      out.write_char(' ')
    } else {
      out.write_char(ch)
    }
  }
}

///|
fn contract_write_csv_field(out : StringBuilder, value : String) -> Unit {
  let mut needs_quotes = false
  for ch in value.iter() {
    if ch == ',' || ch == '"' || ch == '\n' || ch == '\r' {
      needs_quotes = true
    }
  }
  if needs_quotes {
    out.write_char('"')
    for ch in value.iter() {
      if ch == '"' {
        out.write_string("\"\"")
      } else {
        out.write_char(ch)
      }
    }
    out.write_char('"')
  } else {
    out.write_string(value)
  }
}
