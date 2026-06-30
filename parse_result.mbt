///|
/// A structural CSV parse issue with one-based line and column positions.
pub(all) struct CsvParseError {
  message : String
  line : Int
  column : Int
} derive(Eq, Debug)

///|
/// A checked parse result containing parsed rows and recoverable issues.
pub(all) struct CsvParseReport {
  rows : Array[Array[String]]
  issues : Array[CsvParseError]
} derive(Eq, Debug)

///|
/// Parse CSV and report recoverable structural issues.
pub fn parse_checked(input : String) -> CsvParseReport {
  parse_checked_with_dialect(input, default_dialect())
}

///|
/// Parse delimited text and report recoverable structural issues.
pub fn parse_checked_with_dialect(
  input : String,
  dialect : CsvDialect,
) -> CsvParseReport {
  let rows = parse_with_dialect(input, dialect)
  let issues : Array[CsvParseError] = Array::new()
  match parse_unclosed_quote_position(input) {
    Some((line, column)) =>
      issues.push({ message: "unclosed quoted field", line, column })
    None => ()
  }
  let width_issues = parse_width_issues(rows)
  for issue in width_issues {
    issues.push(issue)
  }
  { rows, issues }
}

///|
/// Parse a header-aware table and report recoverable structural issues.
pub fn parse_table_checked(input : String) -> CsvTableParseReport {
  parse_table_checked_with_dialect(input, default_dialect())
}

///|
/// A checked table parse result.
pub(all) struct CsvTableParseReport {
  table : CsvTable
  issues : Array[CsvParseError]
} derive(Eq, Debug)

///|
/// Parse a header-aware table with a custom dialect and report structural issues.
pub fn parse_table_checked_with_dialect(
  input : String,
  dialect : CsvDialect,
) -> CsvTableParseReport {
  let report = parse_checked_with_dialect(input, dialect)
  let table = if report.rows.length() == 0 {
    { headers: [], rows: [] }
  } else {
    let rows : Array[Array[String]] = Array::new()
    for i in 1..<report.rows.length() {
      rows.push(report.rows[i])
    }
    { headers: report.rows[0], rows }
  }
  { table, issues: report.issues }
}

///|
/// Return true when a checked parse report has no issues.
pub fn parse_report_ok(report : CsvParseReport) -> Bool {
  report.issues.length() == 0
}

///|
/// Return true when a checked table parse report has no issues.
pub fn table_parse_report_ok(report : CsvTableParseReport) -> Bool {
  report.issues.length() == 0
}

///|
/// Render parse issues as a compact human-readable report.
pub fn parse_issues_to_text(issues : Array[CsvParseError]) -> String {
  if issues.length() == 0 {
    "ok"
  } else {
    let out = StringBuilder()
    for i in 0..<issues.length() {
      if i > 0 {
        out.write_char('\n')
      }
      let issue = issues[i]
      out.write_string(
        "line \{issue.line}, column \{issue.column}: \{issue.message}",
      )
    }
    out.to_string()
  }
}

///|
/// Render parse issues as Markdown.
pub fn parse_issues_to_markdown(issues : Array[CsvParseError]) -> String {
  if issues.length() == 0 {
    "## Parse Issues\n\nNo parse issues."
  } else {
    let out = StringBuilder()
    out.write_string("## Parse Issues\n\n")
    out.write_string("| line | column | message |\n")
    out.write_string("| ---: | ---: | --- |\n")
    for issue in issues {
      out.write_string("| \{issue.line} | \{issue.column} | ")
      parse_result_write_markdown_cell(out, issue.message)
      out.write_string(" |\n")
    }
    out.to_string()
  }
}

///|
fn parse_width_issues(rows : Array[Array[String]]) -> Array[CsvParseError] {
  let issues : Array[CsvParseError] = Array::new()
  if rows.length() == 0 {
    return issues
  }
  let expected = rows[0].length()
  for i in 1..<rows.length() {
    let actual = rows[i].length()
    if actual != expected {
      issues.push({
        message: "expected \{expected} fields, got \{actual}",
        line: i + 1,
        column: 1,
      })
    }
  }
  issues
}

///|
fn parse_unclosed_quote_position(input : String) -> (Int, Int)? {
  let mut in_quotes = false
  let mut after_quote = false
  let mut line = 1
  let mut column = 1
  let mut quote_line = 1
  let mut quote_column = 1
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
        quote_line = line
        quote_column = column
      }
    } else if after_quote {
      in_quotes = false
      after_quote = false
    }
    if ch == '\n' {
      line += 1
      column = 1
    } else {
      column += 1
    }
  }
  if in_quotes && !after_quote {
    Some((quote_line, quote_column))
  } else {
    None
  }
}

///|
fn parse_result_write_markdown_cell(
  out : StringBuilder,
  value : String,
) -> Unit {
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
