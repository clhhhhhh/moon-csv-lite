///|
/// Drop rows where every declared column is empty or missing.
pub fn table_drop_empty_rows(table : CsvTable) -> CsvTable {
  let rows : Array[Array[String]] = Array::new()
  for row in table.rows {
    if !cleaning_row_empty(row, table.headers.length()) {
      rows.push(row)
    }
  }
  { headers: table.headers, rows }
}

///|
/// Drop columns where every row is empty or missing.
pub fn table_drop_empty_columns(table : CsvTable) -> CsvTable {
  let keep : Array[String] = Array::new()
  for index in 0..<table.headers.length() {
    let mut has_value = false
    for row in table.rows {
      if !cleaning_cell_at(row, index).is_empty() {
        has_value = true
        break
      }
    }
    if has_value {
      keep.push(table.headers[index])
    }
  }
  table_select_columns(table, keep)
}

///|
/// Replace exact cell values in the whole table.
pub fn table_replace_value(
  table : CsvTable,
  old_value : String,
  new_value : String,
) -> CsvTable {
  let rows : Array[Array[String]] = Array::new()
  for row in table.rows {
    let next : Array[String] = Array::new()
    for field in row {
      if field == old_value {
        next.push(new_value)
      } else {
        next.push(field)
      }
    }
    rows.push(next)
  }
  { headers: table.headers, rows }
}

///|
/// Replace exact cell values in one column.
pub fn table_replace_in_column(
  table : CsvTable,
  column : String,
  old_value : String,
  new_value : String,
) -> CsvTable {
  match cleaning_column_index(table.headers, column) {
    Some(index) => {
      let rows : Array[Array[String]] = Array::new()
      for row in table.rows {
        let next = row.copy()
        if index < next.length() && next[index] == old_value {
          next[index] = new_value
        }
        rows.push(next)
      }
      { headers: table.headers, rows }
    }
    None => table
  }
}

///|
/// Convert values in one column to lowercase.
pub fn table_lowercase_column(table : CsvTable, column : String) -> CsvTable {
  match cleaning_column_index(table.headers, column) {
    Some(index) =>
      cleaning_map_column(table, index, fn(value) { value.to_lower() })
    None => table
  }
}

///|
/// Convert values in one column to uppercase.
pub fn table_uppercase_column(table : CsvTable, column : String) -> CsvTable {
  match cleaning_column_index(table.headers, column) {
    Some(index) =>
      cleaning_map_column(table, index, fn(value) { value.to_upper() })
    None => table
  }
}

///|
/// Add a target column containing the first non-empty value among source columns.
pub fn table_coalesce_columns(
  table : CsvTable,
  columns : Array[String],
  target : String,
) -> CsvTable {
  let indices : Array[Int] = Array::new()
  for column in columns {
    match cleaning_column_index(table.headers, column) {
      Some(index) => indices.push(index)
      None => ()
    }
  }
  table_add_column(table, target, fn(row) {
    for index in indices {
      let value = cleaning_cell_at(row, index)
      if !value.is_empty() {
        return value
      }
    }
    ""
  })
}

///|
/// Normalize common boolean spellings to `true` or `false` in one column.
pub fn table_normalize_boolean(table : CsvTable, column : String) -> CsvTable {
  match cleaning_column_index(table.headers, column) {
    Some(index) =>
      cleaning_map_column(table, index, fn(value) {
        match value.to_lower() {
          "true" | "1" | "yes" | "y" | "on" => "true"
          "false" | "0" | "no" | "n" | "off" => "false"
          _ => value
        }
      })
    None => table
  }
}

///|
/// Build a per-column missingness summary table.
pub fn table_missing_summary(table : CsvTable) -> CsvTable {
  let rows : Array[Array[String]] = Array::new()
  for index in 0..<table.headers.length() {
    let mut missing = 0
    let mut present = 0
    for row in table.rows {
      if cleaning_cell_at(row, index).is_empty() {
        missing += 1
      } else {
        present += 1
      }
    }
    rows.push([table.headers[index], missing.to_string(), present.to_string()])
  }
  { headers: ["column", "missing", "present"], rows }
}

///|
/// Add a row number column starting at 1.
pub fn table_with_row_numbers(table : CsvTable, column : String) -> CsvTable {
  let headers : Array[String] = Array::new()
  headers.push(column)
  for header in table.headers {
    headers.push(header)
  }
  let rows : Array[Array[String]] = Array::new()
  for i in 0..<table.rows.length() {
    let next : Array[String] = Array::new()
    next.push((i + 1).to_string())
    for field in table.rows[i] {
      next.push(field)
    }
    rows.push(next)
  }
  { headers, rows }
}

///|
fn cleaning_map_column(
  table : CsvTable,
  index : Int,
  transform : (String) -> String,
) -> CsvTable {
  let rows : Array[Array[String]] = Array::new()
  for row in table.rows {
    let next = row.copy()
    if index < next.length() {
      next[index] = transform(next[index])
    }
    rows.push(next)
  }
  { headers: table.headers, rows }
}

///|
fn cleaning_column_index(headers : Array[String], column : String) -> Int? {
  for i in 0..<headers.length() {
    if headers[i] == column {
      return Some(i)
    }
  }
  None
}

///|
fn cleaning_cell_at(row : Array[String], index : Int) -> String {
  if index >= 0 && index < row.length() {
    row[index]
  } else {
    ""
  }
}

///|
fn cleaning_row_empty(row : Array[String], width : Int) -> Bool {
  for i in 0..<width {
    if !cleaning_cell_at(row, i).is_empty() {
      return false
    }
  }
  true
}
