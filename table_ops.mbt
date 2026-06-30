///|
/// Return the number of data rows in a header-aware table.
pub fn table_row_count(table : CsvTable) -> Int {
  table.rows.length()
}

///|
/// Return the number of columns declared by the table header.
pub fn table_column_count(table : CsvTable) -> Int {
  table.headers.length()
}

///|
/// Keep only the requested columns, in the order requested.
pub fn table_select_columns(
  table : CsvTable,
  columns : Array[String],
) -> CsvTable {
  let indices : Array[Int] = Array::new()
  let headers : Array[String] = Array::new()
  for column in columns {
    match table_ops_column_index(table.headers, column) {
      Some(index) => {
        indices.push(index)
        headers.push(column)
      }
      None => ()
    }
  }
  let rows : Array[Array[String]] = Array::new()
  for row in table.rows {
    let next : Array[String] = Array::new()
    for index in indices {
      next.push(table_ops_cell_at(row, index))
    }
    rows.push(next)
  }
  { headers, rows }
}

///|
/// Drop the requested columns while preserving all other columns in their original order.
pub fn table_drop_columns(
  table : CsvTable,
  columns : Array[String],
) -> CsvTable {
  let keep : Array[String] = Array::new()
  for header in table.headers {
    if !table_ops_contains(columns, header) {
      keep.push(header)
    }
  }
  table_select_columns(table, keep)
}

///|
/// Rename a column. If the column is absent, the table is returned unchanged.
pub fn table_rename_column(
  table : CsvTable,
  old_name : String,
  new_name : String,
) -> CsvTable {
  let headers : Array[String] = Array::new()
  let mut changed = false
  for header in table.headers {
    if header == old_name {
      headers.push(new_name)
      changed = true
    } else {
      headers.push(header)
    }
  }
  if changed {
    { headers, rows: table.rows }
  } else {
    table
  }
}

///|
/// Filter rows whose column value equals the provided value.
pub fn table_filter_eq(
  table : CsvTable,
  column : String,
  value : String,
) -> CsvTable {
  match table_ops_column_index(table.headers, column) {
    Some(index) => {
      let rows : Array[Array[String]] = Array::new()
      for row in table.rows {
        if table_ops_cell_at(row, index) == value {
          rows.push(row)
        }
      }
      { headers: table.headers, rows }
    }
    None => { headers: table.headers, rows: [] }
  }
}

///|
/// Filter rows for which the target column is present and not empty.
pub fn table_filter_not_empty(table : CsvTable, column : String) -> CsvTable {
  match table_ops_column_index(table.headers, column) {
    Some(index) => {
      let rows : Array[Array[String]] = Array::new()
      for row in table.rows {
        if !table_ops_cell_at(row, index).is_empty() {
          rows.push(row)
        }
      }
      { headers: table.headers, rows }
    }
    None => { headers: table.headers, rows: [] }
  }
}

///|
/// Sort rows lexicographically by a column, with missing cells treated as empty strings.
pub fn table_sort_by_column(table : CsvTable, column : String) -> CsvTable {
  match table_ops_column_index(table.headers, column) {
    Some(index) => {
      let rows = table.rows.copy()
      for i in 1..<rows.length() {
        let current = rows[i]
        let current_key = table_ops_cell_at(current, index)
        let mut j = i
        while j > 0 &&
              current_key.lexical_compare(table_ops_cell_at(rows[j - 1], index)) <
              0 {
          rows[j] = rows[j - 1]
          j -= 1
        }
        rows[j] = current
      }
      { headers: table.headers, rows }
    }
    None => { headers: table.headers, rows: table.rows }
  }
}

///|
/// Return at most the first `count` rows.
pub fn table_limit(table : CsvTable, count : Int) -> CsvTable {
  if count <= 0 {
    { headers: table.headers, rows: [] }
  } else {
    table_slice_rows(table, 0, count)
  }
}

///|
/// Return rows in the half-open range `[start, end)`.
pub fn table_slice_rows(table : CsvTable, start : Int, end : Int) -> CsvTable {
  let from = if start < 0 { 0 } else { start }
  let to = if end > table.rows.length() { table.rows.length() } else { end }
  if from >= to {
    { headers: table.headers, rows: [] }
  } else {
    let rows : Array[Array[String]] = Array::new()
    for i in from..<to {
      rows.push(table.rows[i])
    }
    { headers: table.headers, rows }
  }
}

///|
/// Drop the first `count` rows.
pub fn table_drop_rows(table : CsvTable, count : Int) -> CsvTable {
  if count <= 0 {
    table
  } else {
    table_slice_rows(table, count, table.rows.length())
  }
}

///|
/// Replace empty or missing cells with a default value and pad all rows to header width.
pub fn table_fill_empty(table : CsvTable, default_value : String) -> CsvTable {
  let rows : Array[Array[String]] = Array::new()
  for row in table.rows {
    let next : Array[String] = Array::new()
    for i in 0..<table.headers.length() {
      let value = table_ops_cell_at(row, i)
      if value.is_empty() {
        next.push(default_value)
      } else {
        next.push(value)
      }
    }
    rows.push(next)
  }
  { headers: table.headers, rows }
}

///|
/// Trim ASCII whitespace around all headers and cells.
pub fn table_trim_all(table : CsvTable) -> CsvTable {
  let headers : Array[String] = Array::new()
  for header in table.headers {
    headers.push(table_ops_trim_ascii(header))
  }
  let rows : Array[Array[String]] = Array::new()
  for row in table.rows {
    let next : Array[String] = Array::new()
    for field in row {
      next.push(table_ops_trim_ascii(field))
    }
    rows.push(next)
  }
  { headers, rows }
}

///|
/// Normalize headers by trimming whitespace, lowercasing, and replacing spaces with underscores.
pub fn table_normalize_headers(table : CsvTable) -> CsvTable {
  let headers : Array[String] = Array::new()
  for header in table.headers {
    headers.push(table_ops_slug_header(header))
  }
  { headers, rows: table.rows }
}

///|
/// Remove duplicate rows while preserving the first occurrence.
pub fn table_deduplicate(table : CsvTable) -> CsvTable {
  let keys : Array[String] = Array::new()
  let rows : Array[Array[String]] = Array::new()
  for row in table.rows {
    let key = table_ops_row_key(row)
    if !table_ops_contains(keys, key) {
      keys.push(key)
      rows.push(row)
    }
  }
  { headers: table.headers, rows }
}

///|
/// Add a computed column. The callback receives each original row.
pub fn table_add_column(
  table : CsvTable,
  column : String,
  compute : (Array[String]) -> String,
) -> CsvTable {
  let headers = table.headers.copy()
  headers.push(column)
  let rows : Array[Array[String]] = Array::new()
  for row in table.rows {
    let next = row.copy()
    next.push(compute(row))
    rows.push(next)
  }
  { headers, rows }
}

///|
/// Convert a table back into raw rows, with headers as the first row.
pub fn table_to_rows(table : CsvTable) -> Array[Array[String]] {
  let rows : Array[Array[String]] = Array::new()
  rows.push(table.headers)
  for row in table.rows {
    rows.push(row)
  }
  rows
}

///|
fn table_ops_column_index(headers : Array[String], column : String) -> Int? {
  for i in 0..<headers.length() {
    if headers[i] == column {
      return Some(i)
    }
  }
  None
}

///|
fn table_ops_cell_at(row : Array[String], index : Int) -> String {
  if index >= 0 && index < row.length() {
    row[index]
  } else {
    ""
  }
}

///|
fn table_ops_contains(values : Array[String], value : String) -> Bool {
  for item in values {
    if item == value {
      return true
    }
  }
  false
}

///|
fn table_ops_trim_ascii(value : String) -> String {
  let chars : Array[Char] = Array::new()
  for ch in value.iter() {
    chars.push(ch)
  }
  let mut start = 0
  let mut finish = chars.length()
  while start < finish && table_ops_is_ascii_space(chars[start]) {
    start += 1
  }
  while finish > start && table_ops_is_ascii_space(chars[finish - 1]) {
    finish -= 1
  }
  let out = StringBuilder()
  for i in start..<finish {
    out.write_char(chars[i])
  }
  out.to_string()
}

///|
fn table_ops_slug_header(value : String) -> String {
  let trimmed = table_ops_trim_ascii(value).to_lower()
  let out = StringBuilder()
  let mut last_was_sep = false
  for ch in trimmed.iter() {
    if ch == ' ' || ch == '-' || ch == '\t' || ch == '\n' || ch == '\r' {
      if !last_was_sep {
        out.write_char('_')
        last_was_sep = true
      }
    } else {
      out.write_char(ch)
      last_was_sep = false
    }
  }
  out.to_string()
}

///|
fn table_ops_is_ascii_space(ch : Char) -> Bool {
  ch == ' ' || ch == '\t' || ch == '\n' || ch == '\r'
}

///|
fn table_ops_row_key(row : Array[String]) -> String {
  let out = StringBuilder()
  for i in 0..<row.length() {
    if i > 0 {
      out.write_char('\u{1f}')
    }
    out.write_string(row[i])
  }
  out.to_string()
}
