///|
/// One candidate considered by the dialect sniffer.
pub(all) struct CsvDialectCandidate {
  name : String
  delimiter : Char
  rows : Int
  columns : Int
  consistent_rows : Int
  empty_cells : Int
  score : Int
} derive(Eq, Debug)

///|
/// Pipe-separated value dialect.
pub fn pipe_dialect() -> CsvDialect {
  { delimiter: '|', newline: "\n", skip_empty_lines: false }
}

///|
/// Infer a likely dialect from comma, tab, semicolon, and pipe candidates.
pub fn sniff_dialect(input : String) -> CsvDialect {
  let report = sniff_dialect_report(input)
  if report.length() == 0 {
    return default_dialect()
  }
  let mut best = report[0]
  for candidate in report {
    if dialect_candidate_better(candidate, best) {
      best = candidate
    }
  }
  {
    delimiter: best.delimiter,
    newline: dialect_sniff_newline(input),
    skip_empty_lines: false,
  }
}

///|
/// Parse a header-aware table with the most likely detected dialect.
pub fn parse_table_auto(input : String) -> CsvTable {
  parse_table_with_dialect(input, sniff_dialect(input))
}

///|
/// Parse rows with the most likely detected dialect.
pub fn parse_auto(input : String) -> Array[Array[String]] {
  parse_with_dialect(input, sniff_dialect(input))
}

///|
/// Return all dialect candidates with scoring details.
pub fn sniff_dialect_report(input : String) -> Array[CsvDialectCandidate] {
  [
    dialect_score_candidate(input, "comma", ','),
    dialect_score_candidate(input, "tab", '\t'),
    dialect_score_candidate(input, "semicolon", ';'),
    dialect_score_candidate(input, "pipe", '|'),
  ]
}

///|
/// Render the best candidate and score table as Markdown.
pub fn sniff_dialect_markdown(input : String) -> String {
  let candidates = sniff_dialect_report(input)
  let out = StringBuilder()
  out.write_string(
    "| dialect | delimiter | rows | columns | consistent_rows | empty_cells | score |\n",
  )
  out.write_string("| --- | --- | ---: | ---: | ---: | ---: | ---: |\n")
  for candidate in candidates {
    out.write_string("| ")
    out.write_string(candidate.name)
    out.write_string(" | ")
    out.write_string(dialect_delimiter_label(candidate.delimiter))
    out.write_string(" | \{candidate.rows} | \{candidate.columns} | ")
    out.write_string(
      "\{candidate.consistent_rows} | \{candidate.empty_cells} | ",
    )
    out.write_string("\{candidate.score} |\n")
  }
  out.to_string()
}

///|
/// Render a compact dialect summary for CLI output.
pub fn sniff_dialect_summary(input : String) -> String {
  let dialect = sniff_dialect(input)
  let rows = parse_with_dialect(input, dialect)
  let columns = if rows.length() == 0 { 0 } else { rows[0].length() }
  let out = StringBuilder()
  out.write_string("dialect: ")
  out.write_string(dialect_name(dialect))
  out.write_string("\n")
  out.write_string("delimiter: ")
  out.write_string(dialect_delimiter_label(dialect.delimiter))
  out.write_string("\n")
  out.write_string("newline: ")
  out.write_string(dialect_newline_label(dialect.newline))
  out.write_string("\n")
  out.write_string("rows: \{rows.length()}\n")
  out.write_string("columns: \{columns}")
  out.to_string()
}

///|
/// Return a readable name for a dialect.
pub fn dialect_name(dialect : CsvDialect) -> String {
  if dialect.delimiter == ',' {
    "comma"
  } else if dialect.delimiter == '\t' {
    "tab"
  } else if dialect.delimiter == ';' {
    "semicolon"
  } else if dialect.delimiter == '|' {
    "pipe"
  } else {
    "custom"
  }
}

///|
fn dialect_score_candidate(
  input : String,
  name : String,
  delimiter : Char,
) -> CsvDialectCandidate {
  let dialect = {
    delimiter,
    newline: dialect_sniff_newline(input),
    skip_empty_lines: true,
  }
  let rows = parse_with_dialect(input, dialect)
  let columns = if rows.length() == 0 { 0 } else { rows[0].length() }
  let mut consistent_rows = 0
  let mut empty_cells = 0
  let delimiter_count = dialect_count_delimiters(input, delimiter)
  for row in rows {
    if row.length() == columns {
      consistent_rows += 1
    }
    for cell in row {
      if cell.is_empty() {
        empty_cells += 1
      }
    }
  }
  let width_bonus = if columns > 1 { columns * 20 } else { 0 }
  let consistency_bonus = consistent_rows * 100
  let row_bonus = rows.length() * 5
  let delimiter_bonus = delimiter_count * 50
  let single_column_penalty = if columns <= 1 && delimiter_count == 0 {
    200
  } else {
    0
  }
  let penalty = empty_cells * 2 + dialect_width_variance(rows, columns) * 25
  let score = consistency_bonus +
    width_bonus +
    row_bonus +
    delimiter_bonus -
    penalty -
    single_column_penalty
  {
    name,
    delimiter,
    rows: rows.length(),
    columns,
    consistent_rows,
    empty_cells,
    score,
  }
}

///|
fn dialect_count_delimiters(input : String, delimiter : Char) -> Int {
  let mut count = 0
  let mut in_quotes = false
  let mut after_quote = false
  for ch in input.iter() {
    if ch == '"' {
      if in_quotes {
        if after_quote {
          after_quote = false
        } else {
          after_quote = true
        }
      } else {
        in_quotes = true
        after_quote = false
      }
    } else {
      if after_quote {
        in_quotes = false
        after_quote = false
      }
      if !in_quotes && ch == delimiter {
        count += 1
      }
    }
  }
  count
}

///|
fn dialect_width_variance(rows : Array[Array[String]], expected : Int) -> Int {
  let mut variance = 0
  for row in rows {
    let width = row.length()
    if width > expected {
      variance += width - expected
    } else {
      variance += expected - width
    }
  }
  variance
}

///|
fn dialect_candidate_better(
  candidate : CsvDialectCandidate,
  current : CsvDialectCandidate,
) -> Bool {
  if candidate.score != current.score {
    return candidate.score > current.score
  }
  if candidate.columns != current.columns {
    return candidate.columns > current.columns
  }
  if candidate.consistent_rows != current.consistent_rows {
    return candidate.consistent_rows > current.consistent_rows
  }
  dialect_preference(candidate.delimiter) <
  dialect_preference(current.delimiter)
}

///|
fn dialect_preference(delimiter : Char) -> Int {
  if delimiter == ',' {
    0
  } else if delimiter == '\t' {
    1
  } else if delimiter == ';' {
    2
  } else if delimiter == '|' {
    3
  } else {
    9
  }
}

///|
fn dialect_sniff_newline(input : String) -> String {
  let mut previous_cr = false
  for ch in input.iter() {
    if previous_cr && ch == '\n' {
      return "\r\n"
    }
    previous_cr = ch == '\r'
    if ch == '\n' {
      return "\n"
    }
  }
  "\n"
}

///|
fn dialect_delimiter_label(delimiter : Char) -> String {
  if delimiter == '\t' {
    "\\t"
  } else {
    let out = StringBuilder()
    out.write_char(delimiter)
    out.to_string()
  }
}

///|
fn dialect_newline_label(newline : String) -> String {
  if newline == "\r\n" {
    "\\r\\n"
  } else if newline == "\r" {
    "\\r"
  } else {
    "\\n"
  }
}
