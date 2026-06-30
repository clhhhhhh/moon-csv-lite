///|
/// A compact, reusable identity card for one CSV dataset.
///
/// The passport combines structural metadata, data-quality scoring, schema
/// inference, recommendations, and a stable shape fingerprint into one artifact
/// that can be stored in docs, release notes, or CI logs.
pub(all) struct CsvDataPassport {
  name : String
  fingerprint : String
  dialect : String
  rows : Int
  columns : Int
  cells : Int
  missing_cells : Int
  parse_issues : Int
  quality_issues : Int
  required_columns : Int
  optional_columns : Int
  numeric_columns : Int
  boolean_columns : Int
  text_columns : Int
  unique_columns : Int
  score : CsvAuditScore
  schema : Array[CsvInferredColumnRule]
  recommendations : Array[CsvAuditRecommendation]
} derive(Eq, Debug)

///|
/// Build a data passport from CSV text using automatic dialect detection.
pub fn csv_data_passport(input : String, name : String) -> CsvDataPassport {
  csv_data_passport_from_audit(audit_csv(input), name)
}

///|
/// Build a data passport from an existing audit report.
pub fn csv_data_passport_from_audit(
  audit : CsvAuditReport,
  name : String,
) -> CsvDataPassport {
  let score = audit_quality_score(audit)
  let schema = audit.inferred_schema
  {
    name,
    fingerprint: passport_fingerprint(audit.table),
    dialect: dialect_name(audit.dialect),
    rows: audit.table.rows.length(),
    columns: audit.table.headers.length(),
    cells: audit.table.rows.length() * audit.table.headers.length(),
    missing_cells: score.missing_cells,
    parse_issues: audit.parse_issues.length(),
    quality_issues: audit.quality_issues.length(),
    required_columns: passport_required_columns(schema),
    optional_columns: passport_optional_columns(schema),
    numeric_columns: passport_numeric_columns(schema),
    boolean_columns: passport_boolean_columns(schema),
    text_columns: passport_text_columns(schema),
    unique_columns: passport_unique_columns(schema),
    score,
    schema,
    recommendations: audit_recommendations(audit),
  }
}

///|
/// Render a CSV data passport as Markdown.
pub fn csv_data_passport_markdown(input : String, name : String) -> String {
  csv_data_passport_report_markdown(csv_data_passport(input, name))
}

///|
/// Render a CSV data passport as compact JSON.
pub fn csv_data_passport_json(input : String, name : String) -> String {
  csv_data_passport_report_json(csv_data_passport(input, name))
}

///|
/// Render a prepared passport model as Markdown.
pub fn csv_data_passport_report_markdown(passport : CsvDataPassport) -> String {
  let out = StringBuilder()
  out.write_string("# CSV Data Passport\n\n")
  out.write_string("## Identity\n\n")
  out.write_string("- Name: ")
  passport_write_markdown_cell(out, passport.name)
  out.write_char('\n')
  out.write_string("- Fingerprint: `")
  passport_write_markdown_cell(out, passport.fingerprint)
  out.write_string("`\n")
  out.write_string("- Dialect: ")
  passport_write_markdown_cell(out, passport.dialect)
  out.write_char('\n')
  out.write_string("- Rows: \{passport.rows}\n")
  out.write_string("- Columns: \{passport.columns}\n")
  out.write_string("- Cells: \{passport.cells}\n")
  out.write_string("\n## Quality\n\n")
  out.write_string(
    "- Score: **\{passport.score.score}** (\{passport.score.grade})\n",
  )
  out.write_string("- Risk: \{passport.score.risk}\n")
  out.write_string(
    "- Missing cells: \{passport.missing_cells}/\{passport.cells}\n",
  )
  out.write_string("- Parse issues: \{passport.parse_issues}\n")
  out.write_string("- Table quality issues: \{passport.quality_issues}\n")
  out.write_string("\n## Schema Summary\n\n")
  out.write_string("| metric | value |\n")
  out.write_string("| --- | ---: |\n")
  out.write_string("| required columns | \{passport.required_columns} |\n")
  out.write_string("| optional columns | \{passport.optional_columns} |\n")
  out.write_string("| numeric columns | \{passport.numeric_columns} |\n")
  out.write_string("| boolean columns | \{passport.boolean_columns} |\n")
  out.write_string("| text columns | \{passport.text_columns} |\n")
  out.write_string("| fully unique columns | \{passport.unique_columns} |\n")
  out.write_string("\n## Columns\n\n")
  passport_write_schema_markdown(out, passport.schema)
  out.write_string("\n## Recommendations\n\n")
  for item in passport.recommendations {
    out.write_string("- **")
    passport_write_markdown_cell(out, item.severity)
    out.write_string("**: ")
    passport_write_markdown_cell(out, item.message)
    out.write_char('\n')
  }
  out.to_string()
}

///|
/// Render a prepared passport model as compact JSON.
pub fn csv_data_passport_report_json(passport : CsvDataPassport) -> String {
  let out = StringBuilder()
  out.write_char('{')
  out.write_string("\"name\":")
  passport_write_json_string(out, passport.name)
  out.write_string(",\"fingerprint\":")
  passport_write_json_string(out, passport.fingerprint)
  out.write_string(",\"dialect\":")
  passport_write_json_string(out, passport.dialect)
  out.write_string(",\"summary\":{")
  out.write_string("\"rows\":\{passport.rows}")
  out.write_string(",\"columns\":\{passport.columns}")
  out.write_string(",\"cells\":\{passport.cells}")
  out.write_string(",\"missing_cells\":\{passport.missing_cells}")
  out.write_string(",\"parse_issues\":\{passport.parse_issues}")
  out.write_string(",\"quality_issues\":\{passport.quality_issues}")
  out.write_char('}')
  out.write_string(",\"score\":")
  passport_write_score_json(out, passport.score)
  out.write_string(",\"schema_summary\":{")
  out.write_string("\"required_columns\":\{passport.required_columns}")
  out.write_string(",\"optional_columns\":\{passport.optional_columns}")
  out.write_string(",\"numeric_columns\":\{passport.numeric_columns}")
  out.write_string(",\"boolean_columns\":\{passport.boolean_columns}")
  out.write_string(",\"text_columns\":\{passport.text_columns}")
  out.write_string(",\"unique_columns\":\{passport.unique_columns}")
  out.write_char('}')
  out.write_string(",\"schema\":")
  passport_write_schema_json(out, passport.schema)
  out.write_string(",\"recommendations\":")
  passport_write_recommendations_json(out, passport.recommendations)
  out.write_char('}')
  out.to_string()
}

///|
fn passport_fingerprint(table : CsvTable) -> String {
  let mut checksum = 17
  checksum = passport_roll(checksum, table.headers.length())
  checksum = passport_roll(checksum, table.rows.length())
  for i in 0..<table.headers.length() {
    checksum = passport_roll_string_shape(checksum, table.headers[i], i + 1)
  }
  for row_index in 0..<table.rows.length() {
    let row = table.rows[row_index]
    checksum = passport_roll(checksum, row.length() + row_index + 1)
    for column_index in 0..<table.headers.length() {
      checksum = passport_roll_string_shape(
        checksum,
        passport_cell_at(row, column_index),
        (row_index + 1) * (column_index + 1),
      )
    }
  }
  "csvp-\{table.rows.length()}x\{table.headers.length()}-\{checksum}"
}

///|
fn passport_roll(seed : Int, value : Int) -> Int {
  (seed * 131 + value + 17) % 1000003
}

///|
fn passport_roll_string_shape(seed : Int, value : String, salt : Int) -> Int {
  let mut next = passport_roll(seed, passport_string_length(value) + salt)
  if value.is_empty() {
    next = passport_roll(next, 1)
  } else {
    next = passport_roll(next, 7)
  }
  next
}

///|
fn passport_string_length(value : String) -> Int {
  let mut count = 0
  for _ in value.iter() {
    count += 1
  }
  count
}

///|
fn passport_required_columns(schema : Array[CsvInferredColumnRule]) -> Int {
  let mut count = 0
  for rule in schema {
    if rule.required {
      count += 1
    }
  }
  count
}

///|
fn passport_optional_columns(schema : Array[CsvInferredColumnRule]) -> Int {
  schema.length() - passport_required_columns(schema)
}

///|
fn passport_numeric_columns(schema : Array[CsvInferredColumnRule]) -> Int {
  let mut count = 0
  for rule in schema {
    match rule.kind {
      Integer | Float => count += 1
      _ => ()
    }
  }
  count
}

///|
fn passport_boolean_columns(schema : Array[CsvInferredColumnRule]) -> Int {
  let mut count = 0
  for rule in schema {
    match rule.kind {
      Boolean => count += 1
      _ => ()
    }
  }
  count
}

///|
fn passport_text_columns(schema : Array[CsvInferredColumnRule]) -> Int {
  let mut count = 0
  for rule in schema {
    match rule.kind {
      Text => count += 1
      _ => ()
    }
  }
  count
}

///|
fn passport_unique_columns(schema : Array[CsvInferredColumnRule]) -> Int {
  let mut count = 0
  for rule in schema {
    if rule.total > 0 && rule.unique == rule.total {
      count += 1
    }
  }
  count
}

///|
fn passport_write_schema_markdown(
  out : StringBuilder,
  schema : Array[CsvInferredColumnRule],
) -> Unit {
  out.write_string("| column | type | required | empty | unique | examples |\n")
  out.write_string("| --- | --- | --- | ---: | ---: | --- |\n")
  for rule in schema {
    out.write_string("| ")
    passport_write_markdown_cell(out, rule.name)
    out.write_string(" | ")
    out.write_string(passport_column_type_name(rule.kind))
    out.write_string(" | ")
    out.write_string(if rule.required { "yes" } else { "no" })
    out.write_string(" | \{rule.empty}/\{rule.total} | \{rule.unique} | ")
    passport_write_markdown_cell(out, passport_join(rule.examples, ", "))
    out.write_string(" |\n")
  }
}

///|
fn passport_write_score_json(
  out : StringBuilder,
  score : CsvAuditScore,
) -> Unit {
  out.write_char('{')
  out.write_string("\"score\":\{score.score}")
  out.write_string(",\"grade\":")
  passport_write_json_string(out, score.grade)
  out.write_string(",\"risk\":")
  passport_write_json_string(out, score.risk)
  out.write_string(",\"structure_score\":\{score.structure_score}")
  out.write_string(",\"completeness_score\":\{score.completeness_score}")
  out.write_string(",\"consistency_score\":\{score.consistency_score}")
  out.write_string(",\"uniqueness_score\":\{score.uniqueness_score}")
  out.write_string(",\"issue_penalty\":\{score.issue_penalty}")
  out.write_string(",\"missing_cells\":\{score.missing_cells}")
  out.write_string(",\"total_cells\":\{score.total_cells}")
  out.write_char('}')
}

///|
fn passport_write_schema_json(
  out : StringBuilder,
  schema : Array[CsvInferredColumnRule],
) -> Unit {
  out.write_char('[')
  for i in 0..<schema.length() {
    if i > 0 {
      out.write_char(',')
    }
    let rule = schema[i]
    out.write_char('{')
    out.write_string("\"column\":")
    passport_write_json_string(out, rule.name)
    out.write_string(",\"type\":")
    passport_write_json_string(out, passport_column_type_name(rule.kind))
    out.write_string(",\"required\":")
    passport_write_json_bool(out, rule.required)
    out.write_string(",\"total\":\{rule.total}")
    out.write_string(",\"empty\":\{rule.empty}")
    out.write_string(",\"unique\":\{rule.unique}")
    out.write_string(",\"examples\":")
    passport_write_string_array_json(out, rule.examples)
    out.write_char('}')
  }
  out.write_char(']')
}

///|
fn passport_write_recommendations_json(
  out : StringBuilder,
  recommendations : Array[CsvAuditRecommendation],
) -> Unit {
  out.write_char('[')
  for i in 0..<recommendations.length() {
    if i > 0 {
      out.write_char(',')
    }
    let item = recommendations[i]
    out.write_char('{')
    out.write_string("\"severity\":")
    passport_write_json_string(out, item.severity)
    out.write_string(",\"message\":")
    passport_write_json_string(out, item.message)
    out.write_char('}')
  }
  out.write_char(']')
}

///|
fn passport_write_string_array_json(
  out : StringBuilder,
  values : Array[String],
) -> Unit {
  out.write_char('[')
  for i in 0..<values.length() {
    if i > 0 {
      out.write_char(',')
    }
    passport_write_json_string(out, values[i])
  }
  out.write_char(']')
}

///|
fn passport_column_type_name(kind : CsvColumnType) -> String {
  match kind {
    Text => "text"
    Integer => "integer"
    Float => "float"
    Boolean => "boolean"
  }
}

///|
fn passport_cell_at(row : Array[String], index : Int) -> String {
  if index >= 0 && index < row.length() {
    row[index]
  } else {
    ""
  }
}

///|
fn passport_join(values : Array[String], separator : String) -> String {
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
fn passport_write_json_bool(out : StringBuilder, value : Bool) -> Unit {
  out.write_string(if value { "true" } else { "false" })
}

///|
fn passport_write_json_string(out : StringBuilder, value : String) -> Unit {
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
fn passport_write_markdown_cell(out : StringBuilder, value : String) -> Unit {
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
