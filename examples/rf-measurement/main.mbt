///|
fn main {
  let data =
    #|freq_hz,s11_db,s21_db
    #|1000000000,-12.5,-1.2
    #|2000000000,-18.3,-0.8
    #|3000000000,-9.7,-1.5
  let table = @csv.parse_table(data)
  let profiles = @csv.profile_table(table)
  let mut min_freq = 0.0
  let mut max_freq = 0.0
  let mut best_s11 = 0.0
  let mut s21_sum = 0.0
  for row_index in 0..<table.rows.length() {
    let freq = parse_number(
      @csv.table_get(table, row_index, "freq_hz").unwrap_or("0"),
    )
    let s11 = parse_number(
      @csv.table_get(table, row_index, "s11_db").unwrap_or("0"),
    )
    let s21 = parse_number(
      @csv.table_get(table, row_index, "s21_db").unwrap_or("0"),
    )
    if row_index == 0 || freq < min_freq {
      min_freq = freq
    }
    if row_index == 0 || freq > max_freq {
      max_freq = freq
    }
    if row_index == 0 || s11 < best_s11 {
      best_s11 = s11
    }
    s21_sum += s21
  }
  let avg_s21 = s21_sum / table.rows.length().to_double()
  println("rows: \{table.rows.length()}")
  println("frequency range: \{min_freq} Hz .. \{max_freq} Hz")
  println("best S11: \{best_s11} dB")
  println("average S21: \{avg_s21} dB")
  println(
    "freq_hz inferred type: \{@csv.inferred_type_name(profiles[0].inferred)}",
  )
}

///|
fn parse_number(value : String) -> Double {
  try @string.parse_double(value) catch {
    _ => 0.0
  } noraise {
    number => number
  }
}

///|
