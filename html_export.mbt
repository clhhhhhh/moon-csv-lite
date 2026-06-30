///|
/// Export a table as a compact HTML table.
pub fn table_to_html(table : CsvTable) -> String {
  let out = StringBuilder()
  out.write_string("<table>\n")
  out.write_string("  <thead>\n")
  out.write_string("    <tr>")
  for header in table.headers {
    out.write_string("<th>")
    html_export_write_escaped(out, header)
    out.write_string("</th>")
  }
  out.write_string("</tr>\n")
  out.write_string("  </thead>\n")
  out.write_string("  <tbody>\n")
  for row in table.rows {
    out.write_string("    <tr>")
    for i in 0..<table.headers.length() {
      out.write_string("<td>")
      html_export_write_escaped(out, html_export_cell_at(row, i))
      out.write_string("</td>")
    }
    out.write_string("</tr>\n")
  }
  out.write_string("  </tbody>\n")
  out.write_string("</table>")
  out.to_string()
}

///|
/// Export a profile report as Markdown, suitable for README or issue comments.
pub fn profile_report_markdown(table : CsvTable) -> String {
  let profiles = profile_table(table)
  let out = StringBuilder()
  out.write_string("# Data Profile\n\n")
  out.write_string("- Rows: \{table.rows.length()}\n")
  out.write_string("- Columns: \{table.headers.length()}\n\n")
  out.write_string(
    "| column | type | empty | non_empty | unique | min | max | average |\n",
  )
  out.write_string("| --- | --- | ---: | ---: | ---: | --- | --- | --- |\n")
  for profile in profiles {
    out.write_string("| ")
    html_export_write_markdown_cell(out, profile.name)
    out.write_string(" | ")
    html_export_write_markdown_cell(out, inferred_type_name(profile.inferred))
    out.write_string(
      " | \{profile.empty} | \{profile.non_empty} | \{profile.unique} | ",
    )
    html_export_write_optional_double(out, profile.min)
    out.write_string(" | ")
    html_export_write_optional_double(out, profile.max)
    out.write_string(" | ")
    html_export_write_optional_double(out, profile.average)
    out.write_string(" |\n")
  }
  out.to_string()
}

///|
/// Export validation errors as a Markdown list.
pub fn validation_errors_to_markdown(
  errors : Array[CsvValidationError],
) -> String {
  if errors.length() == 0 {
    "No validation errors."
  } else {
    let out = StringBuilder()
    out.write_string("# Validation Errors\n\n")
    for error in errors {
      out.write_string(
        "- Row \{error.row}, column `\{error.column}`: \{error.message}\n",
      )
    }
    out.to_string()
  }
}

///|
/// Export a full quality report as HTML.
pub fn quality_report_html(
  table : CsvTable,
  errors : Array[CsvValidationError],
) -> String {
  let profiles = profile_table(table)
  let out = StringBuilder()
  out.write_string("<!doctype html>\n<html>\n<head>\n")
  out.write_string("  <meta charset=\"utf-8\">\n")
  out.write_string("  <title>CSV Quality Report</title>\n")
  out.write_string("  <style>")
  out.write_string(
    "body{font-family:Arial,sans-serif;margin:24px;color:#172033}table{border-collapse:collapse}th,td{border:1px solid #ccd3df;padding:6px 8px}th{background:#f4f6fa;text-align:left}.ok{color:#146c2e}.bad{color:#9b1c1c}",
  )
  out.write_string("</style>\n")
  out.write_string("</head>\n<body>\n")
  out.write_string("  <h1>CSV Quality Report</h1>\n")
  out.write_string(
    "  <p>Rows: \{table.rows.length()} &middot; Columns: \{table.headers.length()}</p>\n",
  )
  if errors.length() == 0 {
    out.write_string("  <p class=\"ok\">No validation errors.</p>\n")
  } else {
    out.write_string("  <h2>Validation Errors</h2>\n")
    out.write_string("  <ul>\n")
    for error in errors {
      out.write_string("    <li class=\"bad\">Row \{error.row}, ")
      html_export_write_escaped(out, error.column)
      out.write_string(": ")
      html_export_write_escaped(out, error.message)
      out.write_string("</li>\n")
    }
    out.write_string("  </ul>\n")
  }
  out.write_string("  <h2>Column Profile</h2>\n")
  out.write_string("  <table>\n")
  out.write_string(
    "    <tr><th>Column</th><th>Type</th><th>Empty</th><th>Non-empty</th><th>Unique</th><th>Min</th><th>Max</th><th>Average</th></tr>\n",
  )
  for profile in profiles {
    out.write_string("    <tr><td>")
    html_export_write_escaped(out, profile.name)
    out.write_string("</td><td>")
    html_export_write_escaped(out, inferred_type_name(profile.inferred))
    out.write_string(
      "</td><td>\{profile.empty}</td><td>\{profile.non_empty}</td><td>\{profile.unique}</td><td>",
    )
    html_export_write_optional_double(out, profile.min)
    out.write_string("</td><td>")
    html_export_write_optional_double(out, profile.max)
    out.write_string("</td><td>")
    html_export_write_optional_double(out, profile.average)
    out.write_string("</td></tr>\n")
  }
  out.write_string("  </table>\n")
  out.write_string("</body>\n</html>")
  out.to_string()
}

///|
fn html_export_cell_at(row : Array[String], index : Int) -> String {
  if index >= 0 && index < row.length() {
    row[index]
  } else {
    ""
  }
}

///|
fn html_export_write_escaped(out : StringBuilder, value : String) -> Unit {
  for ch in value.iter() {
    if ch == '&' {
      out.write_string("&amp;")
    } else if ch == '<' {
      out.write_string("&lt;")
    } else if ch == '>' {
      out.write_string("&gt;")
    } else if ch == '"' {
      out.write_string("&quot;")
    } else if ch == '\'' {
      out.write_string("&#39;")
    } else {
      out.write_char(ch)
    }
  }
}

///|
fn html_export_write_markdown_cell(out : StringBuilder, value : String) -> Unit {
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

///|
fn html_export_write_optional_double(
  out : StringBuilder,
  value : Double?,
) -> Unit {
  match value {
    Some(number) => out.write_string(number.to_string())
    None => ()
  }
}
