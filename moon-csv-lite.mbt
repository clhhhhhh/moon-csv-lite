///|
priv enum ParseState {
  FieldStart
  Unquoted
  Quoted
  AfterQuote
}

///|
/// CSV dialect options for parsing and writing related tabular text formats.
pub(all) struct CsvDialect {
  delimiter : Char
  newline : String
  skip_empty_lines : Bool
} derive(Eq, Debug)

///|
/// Header-aware table view over CSV rows.
pub(all) struct CsvTable {
  headers : Array[String]
  rows : Array[Array[String]]
} derive(Eq, Debug)

///|
/// Supported schema validation types.
#warnings("-unused_constructor")
pub(all) enum CsvColumnType {
  Text
  Integer
  Float
  Boolean
} derive(Eq, Debug)

///|
/// A single column validation rule.
#warnings("-struct_never_constructed")
pub(all) struct CsvColumnRule {
  name : String
  kind : CsvColumnType
  required : Bool
} derive(Eq, Debug)

///|
/// A validation issue with one-based CSV row numbering.
pub(all) struct CsvValidationError {
  row : Int
  column : String
  message : String
} derive(Eq, Debug)

///|
/// Inferred type for a profiled column.
pub(all) enum CsvInferredType {
  EmptyOnly
  IntegerColumn
  FloatColumn
  BooleanColumn
  TextColumn
} derive(Eq, Debug)

///|
/// Summary statistics for a single CSV column.
pub(all) struct ColumnProfile {
  name : String
  total : Int
  empty : Int
  non_empty : Int
  unique : Int
  inferred : CsvInferredType
  min : Double?
  max : Double?
  average : Double?
} derive(Eq, Debug)

///|
/// RFC-4180-style defaults used by `parse` and `stringify`.
pub fn default_dialect() -> CsvDialect {
  { delimiter: ',', newline: "\n", skip_empty_lines: false }
}

///|
/// Tab-separated value dialect.
pub fn tsv_dialect() -> CsvDialect {
  { delimiter: '\t', newline: "\n", skip_empty_lines: false }
}

///|
/// Semicolon-separated dialect used by some spreadsheet exports.
pub fn semicolon_dialect() -> CsvDialect {
  { delimiter: ';', newline: "\n", skip_empty_lines: false }
}

///|
/// Parse CSV text into rows and fields.
pub fn parse(input : String) -> Array[Array[String]] {
  parse_with_dialect(input, default_dialect())
}

///|
/// Parse delimited text with custom dialect options.
pub fn parse_with_dialect(
  input : String,
  dialect : CsvDialect,
) -> Array[Array[String]] {
  if input.is_empty() {
    return []
  }
  let rows : Array[Array[String]] = Array::new()
  let mut row : Array[String] = Array::new()
  let field = StringBuilder()
  let mut state = FieldStart
  let mut skip_lf = false
  let mut ended_with_row = false
  for ch in input.iter() {
    if skip_lf && ch == '\n' {
      skip_lf = false
      continue
    }
    skip_lf = false
    ended_with_row = false
    match state {
      FieldStart =>
        if ch == '"' {
          state = Quoted
        } else if ch == dialect.delimiter {
          row.push(field.to_string())
          field.reset()
        } else if ch == '\n' {
          let value = field.to_string()
          if !(dialect.skip_empty_lines && row.length() == 0 && value.is_empty()) {
            row.push(value)
            rows.push(row)
          }
          field.reset()
          row = Array::new()
          ended_with_row = true
        } else if ch == '\r' {
          let value = field.to_string()
          if !(dialect.skip_empty_lines && row.length() == 0 && value.is_empty()) {
            row.push(value)
            rows.push(row)
          }
          field.reset()
          row = Array::new()
          skip_lf = true
          ended_with_row = true
        } else {
          field.write_char(ch)
          state = Unquoted
        }
      Unquoted =>
        if ch == dialect.delimiter {
          row.push(field.to_string())
          field.reset()
          state = FieldStart
        } else if ch == '\n' {
          let value = field.to_string()
          if !(dialect.skip_empty_lines && row.length() == 0 && value.is_empty()) {
            row.push(value)
            rows.push(row)
          }
          field.reset()
          row = Array::new()
          state = FieldStart
          ended_with_row = true
        } else if ch == '\r' {
          let value = field.to_string()
          if !(dialect.skip_empty_lines && row.length() == 0 && value.is_empty()) {
            row.push(value)
            rows.push(row)
          }
          field.reset()
          row = Array::new()
          state = FieldStart
          skip_lf = true
          ended_with_row = true
        } else {
          field.write_char(ch)
        }
      Quoted =>
        if ch == '"' {
          state = AfterQuote
        } else {
          field.write_char(ch)
        }
      AfterQuote =>
        if ch == '"' {
          field.write_char('"')
          state = Quoted
        } else if ch == dialect.delimiter {
          row.push(field.to_string())
          field.reset()
          state = FieldStart
        } else if ch == '\n' {
          let value = field.to_string()
          if !(dialect.skip_empty_lines && row.length() == 0 && value.is_empty()) {
            row.push(value)
            rows.push(row)
          }
          field.reset()
          row = Array::new()
          state = FieldStart
          ended_with_row = true
        } else if ch == '\r' {
          let value = field.to_string()
          if !(dialect.skip_empty_lines && row.length() == 0 && value.is_empty()) {
            row.push(value)
            rows.push(row)
          }
          field.reset()
          row = Array::new()
          state = FieldStart
          skip_lf = true
          ended_with_row = true
        } else {
          field.write_char(ch)
          state = Unquoted
        }
    }
  }
  if !ended_with_row {
    let value = field.to_string()
    if !(dialect.skip_empty_lines && row.length() == 0 && value.is_empty()) {
      row.push(value)
      rows.push(row)
    }
  }
  rows
}

///|
/// Write rows and fields back to CSV text.
pub fn stringify(rows : Array[Array[String]]) -> String {
  stringify_with_dialect(rows, default_dialect())
}

///|
/// Write rows and fields back to delimited text with custom dialect options.
pub fn stringify_with_dialect(
  rows : Array[Array[String]],
  dialect : CsvDialect,
) -> String {
  let out = StringBuilder()
  for row_index in 0..<rows.length() {
    if row_index > 0 {
      out.write_string(dialect.newline)
    }
    let row = rows[row_index]
    for field_index in 0..<row.length() {
      if field_index > 0 {
        out.write_char(dialect.delimiter)
      }
      write_field(out, row[field_index], dialect.delimiter)
    }
  }
  out.to_string()
}

///|
/// Parse CSV text as a header-aware table.
pub fn parse_table(input : String) -> CsvTable {
  parse_table_with_dialect(input, default_dialect())
}

///|
/// Parse delimited text as a header-aware table with custom dialect options.
pub fn parse_table_with_dialect(
  input : String,
  dialect : CsvDialect,
) -> CsvTable {
  let rows = parse_with_dialect(input, dialect)
  if rows.length() == 0 {
    return { headers: [], rows: [] }
  }
  let body : Array[Array[String]] = Array::new()
  for i in 1..<rows.length() {
    body.push(rows[i])
  }
  { headers: rows[0], rows: body }
}

///|
/// Look up a table cell by zero-based row index and header name.
pub fn table_get(table : CsvTable, row_index : Int, column : String) -> String? {
  if row_index < 0 || row_index >= table.rows.length() {
    return None
  }
  match column_index(table.headers, column) {
    Some(index) =>
      if index < table.rows[row_index].length() {
        Some(table.rows[row_index][index])
      } else {
        Some("")
      }
    None => None
  }
}

///|
/// Convert a header-aware table to a Markdown table.
pub fn table_to_markdown(table : CsvTable) -> String {
  let out = StringBuilder()
  write_markdown_row(out, table.headers)
  out.write_char('\n')
  let separator : Array[String] = Array::new()
  for _ in 0..<table.headers.length() {
    separator.push("---")
  }
  write_markdown_row(out, separator)
  for row in table.rows {
    out.write_char('\n')
    write_markdown_row(out, padded_row(row, table.headers.length()))
  }
  out.to_string()
}

///|
/// Convert a header-aware table to JSON Lines with all values represented as strings.
pub fn table_to_json_lines(table : CsvTable) -> String {
  let out = StringBuilder()
  for row_index in 0..<table.rows.length() {
    if row_index > 0 {
      out.write_char('\n')
    }
    let row = table.rows[row_index]
    out.write_char('{')
    for column_index in 0..<table.headers.length() {
      if column_index > 0 {
        out.write_char(',')
      }
      out.write_char('"')
      write_json_escaped(out, table.headers[column_index])
      out.write_string("\":\"")
      if column_index < row.length() {
        write_json_escaped(out, row[column_index])
      }
      out.write_char('"')
    }
    out.write_char('}')
  }
  out.to_string()
}

///|
/// Validate a table against required columns and simple scalar types.
pub fn validate_table(
  table : CsvTable,
  rules : Array[CsvColumnRule],
) -> Array[CsvValidationError] {
  let errors : Array[CsvValidationError] = Array::new()
  for rule in rules {
    match column_index(table.headers, rule.name) {
      None =>
        errors.push({ row: 1, column: rule.name, message: "missing column" })
      Some(index) =>
        for row_index in 0..<table.rows.length() {
          let value = if index < table.rows[row_index].length() {
            table.rows[row_index][index]
          } else {
            ""
          }
          if rule.required && value.is_empty() {
            errors.push({
              row: row_index + 2,
              column: rule.name,
              message: "required value is empty",
            })
          } else if !value.is_empty() && !matches_column_type(value, rule.kind) {
            errors.push({
              row: row_index + 2,
              column: rule.name,
              message: "expected \{column_type_name(rule.kind)}",
            })
          }
        }
    }
  }
  errors
}

///|
/// Render validation errors as a compact human-readable report.
pub fn validation_errors_to_text(errors : Array[CsvValidationError]) -> String {
  if errors.length() == 0 {
    return "ok"
  }
  let out = StringBuilder()
  for i in 0..<errors.length() {
    if i > 0 {
      out.write_char('\n')
    }
    let err = errors[i]
    out.write_string("row \{err.row}, \{err.column}: \{err.message}")
  }
  out.to_string()
}

///|
/// Profile each column with counts, uniqueness, inferred type, and numeric stats.
pub fn profile_table(table : CsvTable) -> Array[ColumnProfile] {
  let profiles : Array[ColumnProfile] = Array::new()
  for column in 0..<table.headers.length() {
    let values : Array[String] = Array::new()
    let mut empty = 0
    let mut non_empty = 0
    let mut all_int = true
    let mut all_float = true
    let mut all_bool = true
    let mut numeric_count = 0
    let mut sum = 0.0
    let mut min : Double? = None
    let mut max : Double? = None
    for row in table.rows {
      let value = if column < row.length() { row[column] } else { "" }
      if value.is_empty() {
        empty += 1
      } else {
        non_empty += 1
        if !values_contains(values, value) {
          values.push(value)
        }
        let is_int = is_int_value(value)
        let parsed = parse_double_option(value)
        let is_float = parsed is Some(_)
        let is_bool = is_bool_value(value)
        if !is_int {
          all_int = false
        }
        if !is_float {
          all_float = false
        }
        if !is_bool {
          all_bool = false
        }
        match parsed {
          Some(number) => {
            numeric_count += 1
            sum += number
            min = Some(
              match min {
                Some(current) => if number < current { number } else { current }
                None => number
              },
            )
            max = Some(
              match max {
                Some(current) => if number > current { number } else { current }
                None => number
              },
            )
          }
          None => ()
        }
      }
    }
    let inferred = if non_empty == 0 {
      EmptyOnly
    } else if all_bool {
      BooleanColumn
    } else if all_int {
      IntegerColumn
    } else if all_float {
      FloatColumn
    } else {
      TextColumn
    }
    let average = if numeric_count > 0 {
      Some(sum / numeric_count.to_double())
    } else {
      None
    }
    profiles.push({
      name: table.headers[column],
      total: table.rows.length(),
      empty,
      non_empty,
      unique: values.length(),
      inferred,
      min,
      max,
      average,
    })
  }
  profiles
}

///|
/// Human-readable name for an inferred column type.
pub fn inferred_type_name(kind : CsvInferredType) -> String {
  match kind {
    EmptyOnly => "empty"
    IntegerColumn => "integer"
    FloatColumn => "float"
    BooleanColumn => "boolean"
    TextColumn => "text"
  }
}

///|
/// Render a compact data quality report for a header-aware table.
pub fn profile_report(table : CsvTable) -> String {
  let profiles = profile_table(table)
  let out = StringBuilder()
  out.write_string("rows: \{table.rows.length()}")
  out.write_char('\n')
  out.write_string("columns: \{table.headers.length()}")
  for profile in profiles {
    out.write_string(
      "\n- \{profile.name}: type=\{inferred_type_name(profile.inferred)}, empty=\{profile.empty}/\{profile.total}, unique=\{profile.unique}",
    )
    match profile.min {
      Some(value) => out.write_string(", min=\{value}")
      None => ()
    }
    match profile.max {
      Some(value) => out.write_string(", max=\{value}")
      None => ()
    }
    match profile.average {
      Some(value) => out.write_string(", avg=\{value}")
      None => ()
    }
  }
  out.to_string()
}

///|
fn write_field(out : StringBuilder, field : String, delimiter : Char) -> Unit {
  if needs_quotes(field, delimiter) {
    out.write_char('"')
    for ch in field.iter() {
      if ch == '"' {
        out.write_string("\"\"")
      } else {
        out.write_char(ch)
      }
    }
    out.write_char('"')
  } else {
    out.write_string(field)
  }
}

///|
fn needs_quotes(field : String, delimiter : Char) -> Bool {
  for ch in field.iter() {
    if ch == delimiter || ch == '"' || ch == '\n' || ch == '\r' {
      return true
    }
  }
  false
}

///|
fn column_index(headers : Array[String], column : String) -> Int? {
  for i in 0..<headers.length() {
    if headers[i] == column {
      return Some(i)
    }
  }
  None
}

///|
fn padded_row(row : Array[String], width : Int) -> Array[String] {
  let result : Array[String] = Array::new()
  for i in 0..<width {
    if i < row.length() {
      result.push(row[i])
    } else {
      result.push("")
    }
  }
  result
}

///|
fn write_markdown_row(out : StringBuilder, row : Array[String]) -> Unit {
  out.write_string("|")
  for field in row {
    out.write_char(' ')
    write_markdown_cell(out, field)
    out.write_string(" |")
  }
}

///|
fn write_markdown_cell(out : StringBuilder, field : String) -> Unit {
  for ch in field.iter() {
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
fn write_json_escaped(out : StringBuilder, value : String) -> Unit {
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
}

///|
fn matches_column_type(value : String, kind : CsvColumnType) -> Bool {
  match kind {
    Text => true
    Integer => is_int_value(value)
    Float => parse_double_option(value) is Some(_)
    Boolean => is_bool_value(value)
  }
}

///|
fn column_type_name(kind : CsvColumnType) -> String {
  match kind {
    Text => "text"
    Integer => "integer"
    Float => "float"
    Boolean => "boolean"
  }
}

///|
fn is_int_value(value : String) -> Bool {
  try @string.parse_int64(value) catch {
    _ => false
  } noraise {
    _ => true
  }
}

///|
fn parse_double_option(value : String) -> Double? {
  try @string.parse_double(value) catch {
    _ => None
  } noraise {
    number => Some(number)
  }
}

///|
fn is_bool_value(value : String) -> Bool {
  match value.to_lower() {
    "true" | "false" | "1" | "0" | "yes" | "no" | "on" | "off" => true
    _ => false
  }
}

///|
fn values_contains(values : Array[String], value : String) -> Bool {
  for item in values {
    if item == value {
      return true
    }
  }
  false
}
