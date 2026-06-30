///|
/// A single point in a generated chart preview.
pub(all) struct CsvChartPoint {
  label : String
  value : Double
  count : Int
} derive(Eq, Debug)

///|
/// Data model used by JSON, SVG, HTML, CLI, and browser chart previews.
pub(all) struct CsvChartSpec {
  kind : String
  title : String
  label_column : String
  value_column : String
  measure : String
  points : Array[CsvChartPoint]
  skipped_rows : Int
  warnings : Array[String]
} derive(Eq, Debug)

///|
/// Build an automatic bar-chart preview from CSV text.
pub fn chart_csv_spec(input : String) -> CsvChartSpec {
  chart_csv_spec_kind(input, "bar")
}

///|
/// Build an automatic chart preview from CSV text.
///
/// Supported kinds are `bar`, `line`, and `pie`. Unknown values fall back to
/// `bar`. The function chooses a label column and a numeric value column when
/// possible; if no numeric column exists, it generates category counts.
pub fn chart_csv_spec_kind(input : String, kind : String) -> CsvChartSpec {
  chart_auto_spec(parse_table_auto(input), kind)
}

///|
/// Build a chart preview from CSV text with explicit label and value columns.
pub fn chart_csv_spec_with_columns(
  input : String,
  kind : String,
  label_column : String,
  value_column : String,
) -> CsvChartSpec {
  chart_table_spec(parse_table_auto(input), kind, label_column, value_column)
}

///|
/// Render an automatic chart spec as machine-readable JSON.
pub fn chart_csv_json(input : String, kind : String) -> String {
  chart_spec_json(chart_csv_spec_kind(input, kind))
}

///|
/// Render a chart spec with explicit columns as machine-readable JSON.
pub fn chart_csv_json_with_columns(
  input : String,
  kind : String,
  label_column : String,
  value_column : String,
) -> String {
  chart_spec_json(
    chart_csv_spec_with_columns(input, kind, label_column, value_column),
  )
}

///|
/// Render an automatic chart preview as standalone SVG.
pub fn chart_csv_svg(input : String, kind : String) -> String {
  chart_spec_svg(chart_csv_spec_kind(input, kind))
}

///|
/// Render a chart preview with explicit columns as standalone SVG.
pub fn chart_csv_svg_with_columns(
  input : String,
  kind : String,
  label_column : String,
  value_column : String,
) -> String {
  chart_spec_svg(
    chart_csv_spec_with_columns(input, kind, label_column, value_column),
  )
}

///|
/// Render an automatic chart preview as a standalone HTML document.
pub fn chart_csv_html(input : String, kind : String) -> String {
  chart_spec_html(chart_csv_spec_kind(input, kind))
}

///|
/// Render a chart preview with explicit columns as a standalone HTML document.
pub fn chart_csv_html_with_columns(
  input : String,
  kind : String,
  label_column : String,
  value_column : String,
) -> String {
  chart_spec_html(
    chart_csv_spec_with_columns(input, kind, label_column, value_column),
  )
}

///|
/// Build an automatic chart spec from a parsed table.
pub fn chart_auto_spec(table : CsvTable, kind : String) -> CsvChartSpec {
  let normalized = chart_normalize_kind(kind)
  let label_column = chart_pick_label_column(table)
  match chart_pick_value_column(table) {
    Some(value_column) =>
      chart_table_spec(table, normalized, label_column, value_column)
    None => chart_count_spec(table, normalized, label_column)
  }
}

///|
/// Build a chart spec from explicit table columns. Duplicate labels are
/// aggregated by summing values in first-seen order.
pub fn chart_table_spec(
  table : CsvTable,
  kind : String,
  label_column : String,
  value_column : String,
) -> CsvChartSpec {
  let normalized = chart_normalize_kind(kind)
  let warnings : Array[String] = Array::new()
  let points : Array[CsvChartPoint] = Array::new()
  match
    (
      chart_column_index(table.headers, label_column),
      chart_column_index(table.headers, value_column),
    ) {
    (Some(label_index), Some(value_index)) => {
      let labels : Array[String] = Array::new()
      let values : Array[Double] = Array::new()
      let counts : Array[Int] = Array::new()
      let mut skipped_rows = 0
      for row in table.rows {
        let raw_label = chart_cell_at(row, label_index)
        let label = if chart_trim_ascii(raw_label).is_empty() {
          "(blank)"
        } else {
          raw_label
        }
        match chart_parse_double(chart_cell_at(row, value_index)) {
          Some(value) =>
            match chart_index_of(labels, label) {
              Some(index) => {
                values[index] += value
                counts[index] += 1
              }
              None => {
                labels.push(label)
                values.push(value)
                counts.push(1)
              }
            }
          None => skipped_rows += 1
        }
      }
      if skipped_rows > 0 {
        warnings.push(
          "\{skipped_rows} row(s) were skipped because `\{value_column}` was empty or non-numeric.",
        )
      }
      chart_points_from_arrays(points, labels, values, counts, 24)
      {
        kind: normalized,
        title: "sum of \{value_column} by \{label_column}",
        label_column,
        value_column,
        measure: "sum",
        points,
        skipped_rows,
        warnings,
      }
    }
    (None, _) => {
      warnings.push("Label column `\{label_column}` was not found.")
      {
        kind: normalized,
        title: "chart preview",
        label_column,
        value_column,
        measure: "sum",
        points,
        skipped_rows: table.rows.length(),
        warnings,
      }
    }
    (_, None) => {
      warnings.push("Value column `\{value_column}` was not found.")
      {
        kind: normalized,
        title: "chart preview",
        label_column,
        value_column,
        measure: "sum",
        points,
        skipped_rows: table.rows.length(),
        warnings,
      }
    }
  }
}

///|
/// Build a category-count chart when no numeric column is available.
pub fn chart_count_spec(
  table : CsvTable,
  kind : String,
  label_column : String,
) -> CsvChartSpec {
  let normalized = chart_normalize_kind(kind)
  let warnings : Array[String] = Array::new()
  let points : Array[CsvChartPoint] = Array::new()
  match chart_column_index(table.headers, label_column) {
    Some(label_index) => {
      let labels : Array[String] = Array::new()
      let values : Array[Double] = Array::new()
      let counts : Array[Int] = Array::new()
      for row in table.rows {
        let raw_label = chart_cell_at(row, label_index)
        let label = if chart_trim_ascii(raw_label).is_empty() {
          "(blank)"
        } else {
          raw_label
        }
        match chart_index_of(labels, label) {
          Some(index) => {
            values[index] += 1.0
            counts[index] += 1
          }
          None => {
            labels.push(label)
            values.push(1.0)
            counts.push(1)
          }
        }
      }
      warnings.push(
        "No numeric column was found; generated a category-count chart.",
      )
      chart_points_from_arrays(points, labels, values, counts, 24)
      {
        kind: normalized,
        title: "count by \{label_column}",
        label_column,
        value_column: "count",
        measure: "count",
        points,
        skipped_rows: 0,
        warnings,
      }
    }
    None => {
      warnings.push("No chartable columns were found.")
      {
        kind: normalized,
        title: "chart preview",
        label_column,
        value_column: "count",
        measure: "count",
        points,
        skipped_rows: table.rows.length(),
        warnings,
      }
    }
  }
}

///|
/// Render a chart spec as machine-readable JSON.
pub fn chart_spec_json(spec : CsvChartSpec) -> String {
  let out = StringBuilder()
  out.write_char('{')
  out.write_string("\"kind\":")
  chart_write_json_string(out, spec.kind)
  out.write_string(",\"title\":")
  chart_write_json_string(out, spec.title)
  out.write_string(",\"label_column\":")
  chart_write_json_string(out, spec.label_column)
  out.write_string(",\"value_column\":")
  chart_write_json_string(out, spec.value_column)
  out.write_string(",\"measure\":")
  chart_write_json_string(out, spec.measure)
  out.write_string(",\"skipped_rows\":\{spec.skipped_rows}")
  out.write_string(",\"points\":")
  chart_write_points_json(out, spec.points)
  out.write_string(",\"warnings\":")
  chart_write_string_array_json(out, spec.warnings)
  out.write_char('}')
  out.to_string()
}

///|
/// Render a chart spec as standalone SVG.
pub fn chart_spec_svg(spec : CsvChartSpec) -> String {
  if spec.kind == "line" {
    chart_line_svg(spec)
  } else if spec.kind == "pie" {
    chart_pie_svg(spec)
  } else {
    chart_bar_svg(spec)
  }
}

///|
/// Render a chart spec as a standalone HTML document.
pub fn chart_spec_html(spec : CsvChartSpec) -> String {
  let out = StringBuilder()
  out.write_string("<!doctype html>\n<html>\n<head>\n")
  out.write_string("  <meta charset=\"utf-8\">\n")
  out.write_string("  <title>")
  chart_write_html_escaped(out, spec.title)
  out.write_string("</title>\n")
  out.write_string("  <style>")
  out.write_string(
    "body{font-family:Arial,sans-serif;margin:24px;color:#172033;line-height:1.45}svg{max-width:100%;height:auto;border:1px solid #d7dee8;border-radius:8px;background:#fff}table{border-collapse:collapse;margin-top:18px}th,td{border:1px solid #d7dee8;padding:6px 8px}th{background:#f4f6fa;text-align:left}.warn{color:#9a5b00}",
  )
  out.write_string("</style>\n</head>\n<body>\n")
  out.write_string("  <h1>")
  chart_write_html_escaped(out, spec.title)
  out.write_string("</h1>\n")
  out.write_string("  <p>Kind: ")
  chart_write_html_escaped(out, spec.kind)
  out.write_string(" &middot; Label: ")
  chart_write_html_escaped(out, spec.label_column)
  out.write_string(" &middot; Value: ")
  chart_write_html_escaped(out, spec.value_column)
  out.write_string(" &middot; Measure: ")
  chart_write_html_escaped(out, spec.measure)
  out.write_string("</p>\n")
  for warning in spec.warnings {
    out.write_string("  <p class=\"warn\">")
    chart_write_html_escaped(out, warning)
    out.write_string("</p>\n")
  }
  out.write_string(chart_spec_svg(spec))
  out.write_string("\n  <table>\n")
  out.write_string("    <tr><th>Label</th><th>Value</th><th>Rows</th></tr>\n")
  for point in spec.points {
    out.write_string("    <tr><td>")
    chart_write_html_escaped(out, point.label)
    out.write_string(
      "</td><td>\{point.value}</td><td>\{point.count}</td></tr>\n",
    )
  }
  out.write_string("  </table>\n")
  out.write_string("</body>\n</html>")
  out.to_string()
}

///|
fn chart_bar_svg(spec : CsvChartSpec) -> String {
  let out = StringBuilder()
  chart_write_svg_start(out, spec)
  if spec.points.length() == 0 {
    chart_write_empty_svg(out)
    out.write_string("</svg>")
    return out.to_string()
  }
  let left = 70.0
  let top = 54.0
  let plot_width = 660.0
  let plot_height = 250.0
  let bottom = top + plot_height
  let min_value = chart_min_value(spec.points).unwrap_or(0.0)
  let max_value = chart_max_value(spec.points).unwrap_or(0.0)
  let y_min = if min_value > 0.0 { 0.0 } else { min_value }
  let y_max = if max_value < 0.0 { 0.0 } else { max_value }
  let zero_y = chart_scale_y(0.0, y_min, y_max, top, plot_height)
  let slot = plot_width / spec.points.length().to_double()
  let bar_width = chart_max_double(8.0, slot * 0.62)
  out.write_string(
    "<line x1=\"\{left}\" y1=\"\{top}\" x2=\"\{left}\" y2=\"\{bottom}\" stroke=\"#94a3b8\"/>",
  )
  out.write_string(
    "<line x1=\"\{left}\" y1=\"\{zero_y}\" x2=\"\{left + plot_width}\" y2=\"\{zero_y}\" stroke=\"#94a3b8\"/>",
  )
  chart_write_axis_labels(out, spec, y_min, y_max, left, top, plot_height)
  for i in 0..<spec.points.length() {
    let point = spec.points[i]
    let x = left + i.to_double() * slot + (slot - bar_width) / 2.0
    let y = chart_scale_y(point.value, y_min, y_max, top, plot_height)
    let rect_y = if y < zero_y { y } else { zero_y }
    let height = chart_abs_double(zero_y - y)
    out.write_string(
      "<rect x=\"\{x}\" y=\"\{rect_y}\" width=\"\{bar_width}\" height=\"\{height}\" rx=\"4\" fill=\"",
    )
    out.write_string(chart_color(i))
    out.write_string("\"><title>")
    chart_write_xml_escaped(out, "\{point.label}: \{point.value}")
    out.write_string("</title></rect>")
    chart_write_x_label(out, point.label, x + bar_width / 2.0, bottom + 18.0)
  }
  out.write_string("</svg>")
  out.to_string()
}

///|
fn chart_line_svg(spec : CsvChartSpec) -> String {
  let out = StringBuilder()
  chart_write_svg_start(out, spec)
  if spec.points.length() == 0 {
    chart_write_empty_svg(out)
    out.write_string("</svg>")
    return out.to_string()
  }
  let left = 70.0
  let top = 54.0
  let plot_width = 660.0
  let plot_height = 250.0
  let bottom = top + plot_height
  let min_value = chart_min_value(spec.points).unwrap_or(0.0)
  let max_value = chart_max_value(spec.points).unwrap_or(0.0)
  let y_min = if min_value == max_value { min_value - 1.0 } else { min_value }
  let y_max = if min_value == max_value { max_value + 1.0 } else { max_value }
  out.write_string(
    "<line x1=\"\{left}\" y1=\"\{top}\" x2=\"\{left}\" y2=\"\{bottom}\" stroke=\"#94a3b8\"/>",
  )
  out.write_string(
    "<line x1=\"\{left}\" y1=\"\{bottom}\" x2=\"\{left + plot_width}\" y2=\"\{bottom}\" stroke=\"#94a3b8\"/>",
  )
  chart_write_axis_labels(out, spec, y_min, y_max, left, top, plot_height)
  out.write_string(
    "<polyline fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\" points=\"",
  )
  for i in 0..<spec.points.length() {
    if i > 0 {
      out.write_char(' ')
    }
    let x = chart_line_x(i, spec.points.length(), left, plot_width)
    let y = chart_scale_y(spec.points[i].value, y_min, y_max, top, plot_height)
    out.write_string("\{x},\{y}")
  }
  out.write_string("\"/>")
  for i in 0..<spec.points.length() {
    let point = spec.points[i]
    let x = chart_line_x(i, spec.points.length(), left, plot_width)
    let y = chart_scale_y(point.value, y_min, y_max, top, plot_height)
    out.write_string("<circle cx=\"\{x}\" cy=\"\{y}\" r=\"5\" fill=\"")
    out.write_string(chart_color(i))
    out.write_string("\"><title>")
    chart_write_xml_escaped(out, "\{point.label}: \{point.value}")
    out.write_string("</title></circle>")
    chart_write_x_label(out, point.label, x, bottom + 18.0)
  }
  out.write_string("</svg>")
  out.to_string()
}

///|
fn chart_pie_svg(spec : CsvChartSpec) -> String {
  let out = StringBuilder()
  chart_write_svg_start(out, spec)
  let total = chart_positive_total(spec.points)
  if spec.points.length() == 0 || total <= 0.0 {
    chart_write_empty_svg(out)
    out.write_string("</svg>")
    return out.to_string()
  }
  let cx = 220.0
  let cy = 190.0
  let radius = 88.0
  let circumference = 552.92
  let mut offset = 0.0
  out.write_string(
    "<circle cx=\"\{cx}\" cy=\"\{cy}\" r=\"\{radius}\" fill=\"none\" stroke=\"#e5e7eb\" stroke-width=\"34\"/>",
  )
  for i in 0..<spec.points.length() {
    let point = spec.points[i]
    if point.value > 0.0 {
      let dash = point.value / total * circumference
      let rest = circumference - dash
      out.write_string(
        "<circle cx=\"\{cx}\" cy=\"\{cy}\" r=\"\{radius}\" fill=\"none\" stroke=\"",
      )
      out.write_string(chart_color(i))
      out.write_string(
        "\" stroke-width=\"34\" stroke-dasharray=\"\{dash} \{rest}\" stroke-dashoffset=\"-\{offset}\" transform=\"rotate(-90 \{cx} \{cy})\"><title>",
      )
      chart_write_xml_escaped(out, "\{point.label}: \{point.value}")
      out.write_string("</title></circle>")
      offset += dash
    }
  }
  out.write_string(
    "<circle cx=\"\{cx}\" cy=\"\{cy}\" r=\"54\" fill=\"#ffffff\"/>",
  )
  out.write_string(
    "<text x=\"\{cx}\" y=\"\{cy - 4.0}\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"700\" fill=\"#172033\">",
  )
  chart_write_xml_escaped(out, spec.measure)
  out.write_string("</text>")
  out.write_string(
    "<text x=\"\{cx}\" y=\"\{cy + 20.0}\" text-anchor=\"middle\" font-size=\"13\" fill=\"#64748b\">total \{total}</text>",
  )
  let legend_x = 390.0
  let mut legend_y = 94.0
  for i in 0..<spec.points.length() {
    let point = spec.points[i]
    out.write_string(
      "<rect x=\"\{legend_x}\" y=\"\{legend_y - 10.0}\" width=\"12\" height=\"12\" rx=\"3\" fill=\"",
    )
    out.write_string(chart_color(i))
    out.write_string("\"/>")
    out.write_string(
      "<text x=\"\{legend_x + 18.0}\" y=\"\{legend_y}\" font-size=\"12\" fill=\"#172033\">",
    )
    chart_write_xml_escaped(out, "\{point.label}: \{point.value}")
    out.write_string("</text>")
    legend_y += 22.0
  }
  out.write_string("</svg>")
  out.to_string()
}

///|
fn chart_write_svg_start(out : StringBuilder, spec : CsvChartSpec) -> Unit {
  out.write_string(
    "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 760 380\" role=\"img\" aria-label=\"",
  )
  chart_write_xml_escaped(out, spec.title)
  out.write_string("\">")
  out.write_string("<rect width=\"760\" height=\"380\" fill=\"#ffffff\"/>")
  out.write_string(
    "<text x=\"28\" y=\"30\" font-size=\"18\" font-weight=\"700\" fill=\"#172033\">",
  )
  chart_write_xml_escaped(out, spec.title)
  out.write_string("</text>")
  out.write_string("<text x=\"28\" y=\"50\" font-size=\"12\" fill=\"#64748b\">")
  chart_write_xml_escaped(
    out,
    "\{spec.kind} / \{spec.measure} / \{spec.points.length()} point(s)",
  )
  out.write_string("</text>")
}

///|
fn chart_write_empty_svg(out : StringBuilder) -> Unit {
  out.write_string(
    "<text x=\"380\" y=\"190\" text-anchor=\"middle\" font-size=\"16\" fill=\"#64748b\">No chartable data</text>",
  )
}

///|
fn chart_write_axis_labels(
  out : StringBuilder,
  spec : CsvChartSpec,
  y_min : Double,
  y_max : Double,
  left : Double,
  top : Double,
  plot_height : Double,
) -> Unit {
  out.write_string(
    "<text x=\"28\" y=\"\{top + 5.0}\" font-size=\"11\" fill=\"#64748b\">",
  )
  chart_write_xml_escaped(out, y_max.to_string())
  out.write_string("</text>")
  out.write_string(
    "<text x=\"28\" y=\"\{top + plot_height}\" font-size=\"11\" fill=\"#64748b\">",
  )
  chart_write_xml_escaped(out, y_min.to_string())
  out.write_string("</text>")
  out.write_string(
    "<text x=\"\{left}\" y=\"356\" font-size=\"11\" fill=\"#64748b\">",
  )
  chart_write_xml_escaped(out, spec.label_column)
  out.write_string("</text>")
}

///|
fn chart_write_x_label(
  out : StringBuilder,
  label : String,
  x : Double,
  y : Double,
) -> Unit {
  out.write_string(
    "<text x=\"\{x}\" y=\"\{y}\" text-anchor=\"middle\" font-size=\"10\" fill=\"#475569\">",
  )
  chart_write_xml_escaped(out, chart_label_short(label, 12))
  out.write_string("</text>")
}

///|
fn chart_line_x(
  index : Int,
  count : Int,
  left : Double,
  width : Double,
) -> Double {
  if count <= 1 {
    left + width / 2.0
  } else {
    left + index.to_double() * width / (count - 1).to_double()
  }
}

///|
fn chart_scale_y(
  value : Double,
  min_value : Double,
  max_value : Double,
  top : Double,
  height : Double,
) -> Double {
  if max_value == min_value {
    top + height / 2.0
  } else {
    top + (max_value - value) / (max_value - min_value) * height
  }
}

///|
fn chart_pick_label_column(table : CsvTable) -> String {
  if table.headers.length() == 0 {
    return "row"
  }
  let profiles = profile_table(table)
  for profile in profiles {
    match profile.inferred {
      TextColumn | BooleanColumn =>
        if profile.non_empty > 0 && profile.unique < profile.non_empty {
          return profile.name
        }
      _ => ()
    }
  }
  for profile in profiles {
    match profile.inferred {
      TextColumn | BooleanColumn => return profile.name
      _ => ()
    }
  }
  table.headers[0]
}

///|
fn chart_pick_value_column(table : CsvTable) -> String? {
  let profiles = profile_table(table)
  for profile in profiles {
    match profile.inferred {
      IntegerColumn | FloatColumn =>
        if profile.non_empty > 0 {
          return Some(profile.name)
        }
      _ => ()
    }
  }
  None
}

///|
fn chart_points_from_arrays(
  points : Array[CsvChartPoint],
  labels : Array[String],
  values : Array[Double],
  counts : Array[Int],
  limit : Int,
) -> Unit {
  let max_count = if labels.length() < limit { labels.length() } else { limit }
  for i in 0..<max_count {
    points.push({ label: labels[i], value: values[i], count: counts[i] })
  }
}

///|
fn chart_write_points_json(
  out : StringBuilder,
  points : Array[CsvChartPoint],
) -> Unit {
  out.write_char('[')
  for i in 0..<points.length() {
    if i > 0 {
      out.write_char(',')
    }
    let point = points[i]
    out.write_char('{')
    out.write_string("\"label\":")
    chart_write_json_string(out, point.label)
    out.write_string(",\"value\":\{point.value}")
    out.write_string(",\"count\":\{point.count}")
    out.write_char('}')
  }
  out.write_char(']')
}

///|
fn chart_write_string_array_json(
  out : StringBuilder,
  values : Array[String],
) -> Unit {
  out.write_char('[')
  for i in 0..<values.length() {
    if i > 0 {
      out.write_char(',')
    }
    chart_write_json_string(out, values[i])
  }
  out.write_char(']')
}

///|
fn chart_write_json_string(out : StringBuilder, value : String) -> Unit {
  out.write_char('"')
  chart_write_json_escaped(out, value)
  out.write_char('"')
}

///|
fn chart_write_json_escaped(out : StringBuilder, value : String) -> Unit {
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
fn chart_write_html_escaped(out : StringBuilder, value : String) -> Unit {
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
fn chart_write_xml_escaped(out : StringBuilder, value : String) -> Unit {
  chart_write_html_escaped(out, value)
}

///|
fn chart_column_index(headers : Array[String], column : String) -> Int? {
  for i in 0..<headers.length() {
    if headers[i] == column {
      return Some(i)
    }
  }
  None
}

///|
fn chart_cell_at(row : Array[String], index : Int) -> String {
  if index >= 0 && index < row.length() {
    row[index]
  } else {
    ""
  }
}

///|
fn chart_index_of(values : Array[String], value : String) -> Int? {
  for i in 0..<values.length() {
    if values[i] == value {
      return Some(i)
    }
  }
  None
}

///|
fn chart_parse_double(value : String) -> Double? {
  try @string.parse_double(chart_trim_ascii(value)) catch {
    _ => None
  } noraise {
    number => Some(number)
  }
}

///|
fn chart_min_value(points : Array[CsvChartPoint]) -> Double? {
  if points.length() == 0 {
    return None
  }
  let mut value = points[0].value
  for i in 1..<points.length() {
    if points[i].value < value {
      value = points[i].value
    }
  }
  Some(value)
}

///|
fn chart_max_value(points : Array[CsvChartPoint]) -> Double? {
  if points.length() == 0 {
    return None
  }
  let mut value = points[0].value
  for i in 1..<points.length() {
    if points[i].value > value {
      value = points[i].value
    }
  }
  Some(value)
}

///|
fn chart_positive_total(points : Array[CsvChartPoint]) -> Double {
  let mut total = 0.0
  for point in points {
    if point.value > 0.0 {
      total += point.value
    }
  }
  total
}

///|
fn chart_abs_double(value : Double) -> Double {
  if value < 0.0 {
    -value
  } else {
    value
  }
}

///|
fn chart_max_double(left : Double, right : Double) -> Double {
  if left > right {
    left
  } else {
    right
  }
}

///|
fn chart_color(index : Int) -> String {
  let colors = [
    "#2563eb", "#0f766e", "#b45309", "#b91c1c", "#7c3aed", "#0369a1", "#15803d",
    "#c2410c", "#be123c", "#4338ca",
  ]
  colors[index % colors.length()]
}

///|
fn chart_label_short(value : String, limit : Int) -> String {
  let out = StringBuilder()
  let mut count = 0
  for ch in value.iter() {
    if count >= limit {
      out.write_string("...")
      return out.to_string()
    }
    out.write_char(ch)
    count += 1
  }
  out.to_string()
}

///|
fn chart_normalize_kind(kind : String) -> String {
  match kind.to_lower() {
    "line" => "line"
    "pie" | "donut" => "pie"
    _ => "bar"
  }
}

///|
fn chart_trim_ascii(value : String) -> String {
  let chars : Array[Char] = Array::new()
  for ch in value.iter() {
    chars.push(ch)
  }
  let mut start = 0
  let mut finish = chars.length()
  while start < finish && chart_is_ascii_space(chars[start]) {
    start += 1
  }
  while finish > start && chart_is_ascii_space(chars[finish - 1]) {
    finish -= 1
  }
  let out = StringBuilder()
  for i in start..<finish {
    out.write_char(chars[i])
  }
  out.to_string()
}

///|
fn chart_is_ascii_space(ch : Char) -> Bool {
  ch == ' ' || ch == '\t' || ch == '\n' || ch == '\r'
}
