///|
/// Inner join two tables by key columns.
pub fn table_inner_join(
  left : CsvTable,
  right : CsvTable,
  left_key : String,
  right_key : String,
) -> CsvTable {
  table_join_impl(left, right, left_key, right_key, false)
}

///|
/// Left join two tables by key columns, preserving every row from the left table.
pub fn table_left_join(
  left : CsvTable,
  right : CsvTable,
  left_key : String,
  right_key : String,
) -> CsvTable {
  table_join_impl(left, right, left_key, right_key, true)
}

///|
/// Append rows from `bottom` to `top` when both tables share exactly the same headers.
pub fn table_append(table : CsvTable, bottom : CsvTable) -> CsvTable {
  if !join_headers_equal(table.headers, bottom.headers) {
    return table
  }
  let rows : Array[Array[String]] = Array::new()
  for row in table.rows {
    rows.push(row)
  }
  for row in bottom.rows {
    rows.push(row)
  }
  { headers: table.headers, rows }
}

///|
/// Union two tables by column name, adding missing cells as empty strings.
pub fn table_union_by_name(left : CsvTable, right : CsvTable) -> CsvTable {
  let headers = left.headers.copy()
  for header in right.headers {
    if join_column_index(headers, header) is None {
      headers.push(header)
    }
  }
  let rows : Array[Array[String]] = Array::new()
  for row in left.rows {
    rows.push(join_align_row(row, left.headers, headers))
  }
  for row in right.rows {
    rows.push(join_align_row(row, right.headers, headers))
  }
  { headers, rows }
}

///|
/// Transpose a table. The first output column contains original header names.
pub fn table_transpose(table : CsvTable) -> CsvTable {
  let headers : Array[String] = Array::new()
  headers.push("column")
  for i in 0..<table.rows.length() {
    headers.push("row_" + (i + 1).to_string())
  }
  let rows : Array[Array[String]] = Array::new()
  for col in 0..<table.headers.length() {
    let next : Array[String] = Array::new()
    next.push(table.headers[col])
    for row in table.rows {
      next.push(join_cell_at(row, col))
    }
    rows.push(next)
  }
  { headers, rows }
}

///|
/// Return a table containing only rows that do not have a matching key in `right`.
pub fn table_anti_join(
  left : CsvTable,
  right : CsvTable,
  left_key : String,
  right_key : String,
) -> CsvTable {
  match
    (
      join_column_index(left.headers, left_key),
      join_column_index(right.headers, right_key),
    ) {
    (Some(left_index), Some(right_index)) => {
      let right_keys : Array[String] = Array::new()
      for row in right.rows {
        let key = join_cell_at(row, right_index)
        if !join_contains(right_keys, key) {
          right_keys.push(key)
        }
      }
      let rows : Array[Array[String]] = Array::new()
      for row in left.rows {
        if !join_contains(right_keys, join_cell_at(row, left_index)) {
          rows.push(row)
        }
      }
      { headers: left.headers, rows }
    }
    _ => { headers: left.headers, rows: [] }
  }
}

///|
/// Return a table with columns reordered according to `columns`, then remaining columns.
pub fn table_reorder_columns(
  table : CsvTable,
  columns : Array[String],
) -> CsvTable {
  let ordered : Array[String] = Array::new()
  for column in columns {
    if join_column_index(table.headers, column) is Some(_) &&
      join_column_index(ordered, column) is None {
      ordered.push(column)
    }
  }
  for header in table.headers {
    if join_column_index(ordered, header) is None {
      ordered.push(header)
    }
  }
  let rows : Array[Array[String]] = Array::new()
  for row in table.rows {
    rows.push(join_align_row(row, table.headers, ordered))
  }
  { headers: ordered, rows }
}

///|
fn table_join_impl(
  left : CsvTable,
  right : CsvTable,
  left_key : String,
  right_key : String,
  keep_unmatched_left : Bool,
) -> CsvTable {
  match
    (
      join_column_index(left.headers, left_key),
      join_column_index(right.headers, right_key),
    ) {
    (Some(left_index), Some(right_index)) => {
      let headers = join_headers(left.headers, right.headers, right_key)
      let rows : Array[Array[String]] = Array::new()
      for left_row in left.rows {
        let key = join_cell_at(left_row, left_index)
        let mut matched = false
        for right_row in right.rows {
          if join_cell_at(right_row, right_index) == key {
            matched = true
            rows.push(
              join_merge_row(left_row, right_row, right.headers, right_key),
            )
          }
        }
        if keep_unmatched_left && !matched {
          rows.push(join_merge_row(left_row, [], right.headers, right_key))
        }
      }
      { headers, rows }
    }
    _ => { headers: [], rows: [] }
  }
}

///|
fn join_headers(
  left_headers : Array[String],
  right_headers : Array[String],
  right_key : String,
) -> Array[String] {
  let headers = left_headers.copy()
  for header in right_headers {
    if header != right_key {
      if join_column_index(headers, header) is Some(_) {
        headers.push("right_" + header)
      } else {
        headers.push(header)
      }
    }
  }
  headers
}

///|
fn join_merge_row(
  left_row : Array[String],
  right_row : Array[String],
  right_headers : Array[String],
  right_key : String,
) -> Array[String] {
  let row = left_row.copy()
  for i in 0..<right_headers.length() {
    if right_headers[i] != right_key {
      row.push(join_cell_at(right_row, i))
    }
  }
  row
}

///|
fn join_align_row(
  row : Array[String],
  source_headers : Array[String],
  target_headers : Array[String],
) -> Array[String] {
  let result : Array[String] = Array::new()
  for header in target_headers {
    match join_column_index(source_headers, header) {
      Some(index) => result.push(join_cell_at(row, index))
      None => result.push("")
    }
  }
  result
}

///|
fn join_column_index(headers : Array[String], column : String) -> Int? {
  for i in 0..<headers.length() {
    if headers[i] == column {
      return Some(i)
    }
  }
  None
}

///|
fn join_cell_at(row : Array[String], index : Int) -> String {
  if index >= 0 && index < row.length() {
    row[index]
  } else {
    ""
  }
}

///|
fn join_headers_equal(left : Array[String], right : Array[String]) -> Bool {
  if left.length() != right.length() {
    return false
  }
  for i in 0..<left.length() {
    if left[i] != right[i] {
      return false
    }
  }
  true
}

///|
fn join_contains(values : Array[String], value : String) -> Bool {
  for item in values {
    if item == value {
      return true
    }
  }
  false
}
