///|
/// Numeric summary for one column or one group.
pub(all) struct CsvNumericSummary {
  count : Int
  sum : Double
  average : Double?
  min : Double?
  max : Double?
} derive(Eq, Debug)

///|
/// Count non-empty values in a column.
pub fn column_count_non_empty(table : CsvTable, column : String) -> Int {
  match aggregation_column_index(table.headers, column) {
    Some(index) => {
      let mut count = 0
      for row in table.rows {
        if !aggregation_cell_at(row, index).is_empty() {
          count += 1
        }
      }
      count
    }
    None => 0
  }
}

///|
/// Count empty or missing values in a column.
pub fn column_count_empty(table : CsvTable, column : String) -> Int {
  match aggregation_column_index(table.headers, column) {
    Some(index) => {
      let mut count = 0
      for row in table.rows {
        if aggregation_cell_at(row, index).is_empty() {
          count += 1
        }
      }
      count
    }
    None => 0
  }
}

///|
/// Return unique non-empty values in first-seen order.
pub fn column_unique_values(table : CsvTable, column : String) -> Array[String] {
  match aggregation_column_index(table.headers, column) {
    Some(index) => {
      let values : Array[String] = Array::new()
      for row in table.rows {
        let value = aggregation_cell_at(row, index)
        if !value.is_empty() && !aggregation_contains(values, value) {
          values.push(value)
        }
      }
      values
    }
    None => []
  }
}

///|
/// Return the sum of numeric values in a column.
pub fn column_sum(table : CsvTable, column : String) -> Double {
  column_numeric_summary(table, column).sum
}

///|
/// Return the average of numeric values in a column.
pub fn column_average(table : CsvTable, column : String) -> Double? {
  column_numeric_summary(table, column).average
}

///|
/// Return the minimum numeric value in a column.
pub fn column_min(table : CsvTable, column : String) -> Double? {
  column_numeric_summary(table, column).min
}

///|
/// Return the maximum numeric value in a column.
pub fn column_max(table : CsvTable, column : String) -> Double? {
  column_numeric_summary(table, column).max
}

///|
/// Summarize numeric values in a column, ignoring non-numeric and empty values.
pub fn column_numeric_summary(
  table : CsvTable,
  column : String,
) -> CsvNumericSummary {
  match aggregation_column_index(table.headers, column) {
    Some(index) => {
      let mut count = 0
      let mut sum = 0.0
      let mut min : Double? = None
      let mut max : Double? = None
      for row in table.rows {
        match aggregation_parse_double(aggregation_cell_at(row, index)) {
          Some(value) => {
            count += 1
            sum += value
            min = Some(
              match min {
                Some(current) => if value < current { value } else { current }
                None => value
              },
            )
            max = Some(
              match max {
                Some(current) => if value > current { value } else { current }
                None => value
              },
            )
          }
          None => ()
        }
      }
      let average = if count == 0 {
        None
      } else {
        Some(sum / count.to_double())
      }
      { count, sum, average, min, max }
    }
    None => { count: 0, sum: 0.0, average: None, min: None, max: None }
  }
}

///|
/// Count rows per group value and return a two-column table.
pub fn table_group_count(table : CsvTable, group_column : String) -> CsvTable {
  match aggregation_column_index(table.headers, group_column) {
    Some(group_index) => {
      let groups : Array[String] = Array::new()
      let counts : Array[Int] = Array::new()
      for row in table.rows {
        let key = aggregation_cell_at(row, group_index)
        match aggregation_index_of(groups, key) {
          Some(index) => counts[index] += 1
          None => {
            groups.push(key)
            counts.push(1)
          }
        }
      }
      let rows : Array[Array[String]] = Array::new()
      for i in 0..<groups.length() {
        rows.push([groups[i], counts[i].to_string()])
      }
      { headers: [group_column, "count"], rows }
    }
    None => { headers: [group_column, "count"], rows: [] }
  }
}

///|
/// Sum numeric values per group and return a two-column table.
pub fn table_group_sum(
  table : CsvTable,
  group_column : String,
  value_column : String,
) -> CsvTable {
  match
    (
      aggregation_column_index(table.headers, group_column),
      aggregation_column_index(table.headers, value_column),
    ) {
    (Some(group_index), Some(value_index)) => {
      let groups : Array[String] = Array::new()
      let sums : Array[Double] = Array::new()
      for row in table.rows {
        let key = aggregation_cell_at(row, group_index)
        let value = aggregation_parse_double(
          aggregation_cell_at(row, value_index),
        ).unwrap_or(0.0)
        match aggregation_index_of(groups, key) {
          Some(index) => sums[index] += value
          None => {
            groups.push(key)
            sums.push(value)
          }
        }
      }
      let rows : Array[Array[String]] = Array::new()
      for i in 0..<groups.length() {
        rows.push([groups[i], sums[i].to_string()])
      }
      { headers: [group_column, "sum_" + value_column], rows }
    }
    _ => { headers: [group_column, "sum_" + value_column], rows: [] }
  }
}

///|
/// Average numeric values per group and return a two-column table.
pub fn table_group_average(
  table : CsvTable,
  group_column : String,
  value_column : String,
) -> CsvTable {
  match
    (
      aggregation_column_index(table.headers, group_column),
      aggregation_column_index(table.headers, value_column),
    ) {
    (Some(group_index), Some(value_index)) => {
      let groups : Array[String] = Array::new()
      let sums : Array[Double] = Array::new()
      let counts : Array[Int] = Array::new()
      for row in table.rows {
        let key = aggregation_cell_at(row, group_index)
        match aggregation_parse_double(aggregation_cell_at(row, value_index)) {
          Some(value) =>
            match aggregation_index_of(groups, key) {
              Some(index) => {
                sums[index] += value
                counts[index] += 1
              }
              None => {
                groups.push(key)
                sums.push(value)
                counts.push(1)
              }
            }
          None => ()
        }
      }
      let rows : Array[Array[String]] = Array::new()
      for i in 0..<groups.length() {
        let average = if counts[i] == 0 {
          0.0
        } else {
          sums[i] / counts[i].to_double()
        }
        rows.push([groups[i], average.to_string()])
      }
      { headers: [group_column, "average_" + value_column], rows }
    }
    _ => { headers: [group_column, "average_" + value_column], rows: [] }
  }
}

///|
/// Build a compact Markdown report for one numeric column.
pub fn column_summary_markdown(table : CsvTable, column : String) -> String {
  let summary = column_numeric_summary(table, column)
  let out = StringBuilder()
  out.write_string("### Column `\{column}`\n\n")
  out.write_string("| metric | value |\n")
  out.write_string("| --- | --- |\n")
  out.write_string("| numeric_count | \{summary.count} |\n")
  out.write_string("| sum | \{summary.sum} |\n")
  match summary.average {
    Some(value) => out.write_string("| average | \{value} |\n")
    None => out.write_string("| average |  |\n")
  }
  match summary.min {
    Some(value) => out.write_string("| min | \{value} |\n")
    None => out.write_string("| min |  |\n")
  }
  match summary.max {
    Some(value) => out.write_string("| max | \{value} |")
    None => out.write_string("| max |  |")
  }
  out.to_string()
}

///|
fn aggregation_column_index(headers : Array[String], column : String) -> Int? {
  for i in 0..<headers.length() {
    if headers[i] == column {
      return Some(i)
    }
  }
  None
}

///|
fn aggregation_cell_at(row : Array[String], index : Int) -> String {
  if index >= 0 && index < row.length() {
    row[index]
  } else {
    ""
  }
}

///|
fn aggregation_contains(values : Array[String], value : String) -> Bool {
  for item in values {
    if item == value {
      return true
    }
  }
  false
}

///|
fn aggregation_index_of(values : Array[String], value : String) -> Int? {
  for i in 0..<values.length() {
    if values[i] == value {
      return Some(i)
    }
  }
  None
}

///|
fn aggregation_parse_double(value : String) -> Double? {
  try @string.parse_double(value) catch {
    _ => None
  } noraise {
    number => Some(number)
  }
}
