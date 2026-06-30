///|
/// A duplicate key issue reported by `validate_unique_key`.
pub(all) struct CsvDuplicateKeyError {
  first_row : Int
  duplicate_row : Int
  key : String
} derive(Eq, Debug)

///|
/// Validate that all required columns exist in the table header.
pub fn validate_required_columns(
  table : CsvTable,
  columns : Array[String],
) -> Array[CsvValidationError] {
  let errors : Array[CsvValidationError] = Array::new()
  for column in columns {
    if schema_column_index(table.headers, column) is None {
      errors.push({ row: 1, column, message: "missing required column" })
    }
  }
  errors
}

///|
/// Validate that each row has exactly the same number of cells as the header.
pub fn validate_row_widths(table : CsvTable) -> Array[CsvValidationError] {
  let errors : Array[CsvValidationError] = Array::new()
  let expected = table.headers.length()
  for i in 0..<table.rows.length() {
    let actual = table.rows[i].length()
    if actual != expected {
      errors.push({
        row: i + 2,
        column: "*",
        message: "expected \{expected} cells, got \{actual}",
      })
    }
  }
  errors
}

///|
/// Validate that all non-empty numeric values are at least `minimum`.
pub fn validate_min_number(
  table : CsvTable,
  column : String,
  minimum : Double,
) -> Array[CsvValidationError] {
  match schema_column_index(table.headers, column) {
    Some(index) => {
      let errors : Array[CsvValidationError] = Array::new()
      for row_index in 0..<table.rows.length() {
        let value = schema_cell_at(table.rows[row_index], index)
        if !value.is_empty() {
          match schema_parse_double(value) {
            Some(number) =>
              if number < minimum {
                errors.push({
                  row: row_index + 2,
                  column,
                  message: "expected number >= \{minimum}, got \{value}",
                })
              }
            None =>
              errors.push({
                row: row_index + 2,
                column,
                message: "expected number, got \{value}",
              })
          }
        }
      }
      errors
    }
    None => [{ row: 1, column, message: "missing column" }]
  }
}

///|
/// Validate that all non-empty numeric values are at most `maximum`.
pub fn validate_max_number(
  table : CsvTable,
  column : String,
  maximum : Double,
) -> Array[CsvValidationError] {
  match schema_column_index(table.headers, column) {
    Some(index) => {
      let errors : Array[CsvValidationError] = Array::new()
      for row_index in 0..<table.rows.length() {
        let value = schema_cell_at(table.rows[row_index], index)
        if !value.is_empty() {
          match schema_parse_double(value) {
            Some(number) =>
              if number > maximum {
                errors.push({
                  row: row_index + 2,
                  column,
                  message: "expected number <= \{maximum}, got \{value}",
                })
              }
            None =>
              errors.push({
                row: row_index + 2,
                column,
                message: "expected number, got \{value}",
              })
          }
        }
      }
      errors
    }
    None => [{ row: 1, column, message: "missing column" }]
  }
}

///|
/// Validate that values are in an allowed set. Empty values are allowed when `required` is false.
pub fn validate_allowed_values(
  table : CsvTable,
  column : String,
  allowed : Array[String],
  required : Bool,
) -> Array[CsvValidationError] {
  match schema_column_index(table.headers, column) {
    Some(index) => {
      let errors : Array[CsvValidationError] = Array::new()
      for row_index in 0..<table.rows.length() {
        let value = schema_cell_at(table.rows[row_index], index)
        if value.is_empty() {
          if required {
            errors.push({
              row: row_index + 2,
              column,
              message: "required value is empty",
            })
          }
        } else if !schema_contains(allowed, value) {
          errors.push({
            row: row_index + 2,
            column,
            message: "unexpected value \{value}",
          })
        }
      }
      errors
    }
    None => [{ row: 1, column, message: "missing column" }]
  }
}

///|
/// Validate uniqueness for one or more key columns.
pub fn validate_unique_key(
  table : CsvTable,
  columns : Array[String],
) -> Array[CsvDuplicateKeyError] {
  let indices : Array[Int] = Array::new()
  for column in columns {
    match schema_column_index(table.headers, column) {
      Some(index) => indices.push(index)
      None => ()
    }
  }
  if indices.length() != columns.length() {
    return []
  }
  let keys : Array[String] = Array::new()
  let first_rows : Array[Int] = Array::new()
  let errors : Array[CsvDuplicateKeyError] = Array::new()
  for row_index in 0..<table.rows.length() {
    let key = schema_key(table.rows[row_index], indices)
    match schema_index_of(keys, key) {
      Some(existing) =>
        errors.push({
          first_row: first_rows[existing],
          duplicate_row: row_index + 2,
          key,
        })
      None => {
        keys.push(key)
        first_rows.push(row_index + 2)
      }
    }
  }
  errors
}

///|
/// Convert duplicate key errors into a human-readable report.
pub fn duplicate_key_errors_to_text(
  errors : Array[CsvDuplicateKeyError],
) -> String {
  if errors.length() == 0 {
    "ok"
  } else {
    let out = StringBuilder()
    for i in 0..<errors.length() {
      if i > 0 {
        out.write_char('\n')
      }
      let error = errors[i]
      out.write_string(
        "row \{error.duplicate_row} duplicates row \{error.first_row}: \{error.key}",
      )
    }
    out.to_string()
  }
}

///|
/// Merge multiple validation error arrays into one array.
pub fn validation_errors_concat(
  first : Array[CsvValidationError],
  second : Array[CsvValidationError],
) -> Array[CsvValidationError] {
  let errors : Array[CsvValidationError] = Array::new()
  for error in first {
    errors.push(error)
  }
  for error in second {
    errors.push(error)
  }
  errors
}

///|
/// Render a schema validation summary as Markdown.
pub fn schema_validation_markdown(errors : Array[CsvValidationError]) -> String {
  if errors.length() == 0 {
    "## Schema Validation\n\nNo validation errors."
  } else {
    let out = StringBuilder()
    out.write_string("## Schema Validation\n\n")
    out.write_string("| row | column | message |\n")
    out.write_string("| ---: | --- | --- |\n")
    for error in errors {
      out.write_string("| \{error.row} | ")
      schema_write_markdown_cell(out, error.column)
      out.write_string(" | ")
      schema_write_markdown_cell(out, error.message)
      out.write_string(" |\n")
    }
    out.to_string()
  }
}

///|
fn schema_column_index(headers : Array[String], column : String) -> Int? {
  for i in 0..<headers.length() {
    if headers[i] == column {
      return Some(i)
    }
  }
  None
}

///|
fn schema_cell_at(row : Array[String], index : Int) -> String {
  if index >= 0 && index < row.length() {
    row[index]
  } else {
    ""
  }
}

///|
fn schema_contains(values : Array[String], value : String) -> Bool {
  for item in values {
    if item == value {
      return true
    }
  }
  false
}

///|
fn schema_index_of(values : Array[String], value : String) -> Int? {
  for i in 0..<values.length() {
    if values[i] == value {
      return Some(i)
    }
  }
  None
}

///|
fn schema_parse_double(value : String) -> Double? {
  try @string.parse_double(value) catch {
    _ => None
  } noraise {
    number => Some(number)
  }
}

///|
fn schema_key(row : Array[String], indices : Array[Int]) -> String {
  let out = StringBuilder()
  for i in 0..<indices.length() {
    if i > 0 {
      out.write_char('|')
    }
    out.write_string(schema_cell_at(row, indices[i]))
  }
  out.to_string()
}

///|
fn schema_write_markdown_cell(out : StringBuilder, value : String) -> Unit {
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
