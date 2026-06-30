///|
fn main {
  println(csvlite_run(csvlite_drop_program_name(@env.args())))
}

///|
fn csvlite_run(args : Array[String]) -> String {
  if args.length() == 0 {
    return csvlite_help()
  }
  match args[0] {
    "help" | "--help" | "-h" => csvlite_help()
    "version" | "--version" => "moon-csv-lite 0.1.0"
    "profile" => csvlite_command_profile(args)
    "sniff" => csvlite_command_sniff(args)
    "schema" => csvlite_command_schema(args)
    "score" => csvlite_command_score(args)
    "drift" => csvlite_command_drift(args)
    "drift-json" => csvlite_command_drift_json(args)
    "gate" => csvlite_command_gate(args)
    "gate-json" => csvlite_command_gate_json(args)
    "infer-contract" => csvlite_command_infer_contract(args)
    "contract" => csvlite_command_contract(args)
    "contract-json" => csvlite_command_contract_json(args)
    "passport" => csvlite_command_passport(args)
    "passport-json" => csvlite_command_passport_json(args)
    "audit" => csvlite_command_audit(args)
    "audit-html" => csvlite_command_audit_html(args)
    "audit-json" => csvlite_command_audit_json(args)
    "chart-json" => csvlite_command_chart_json(args)
    "chart-svg" => csvlite_command_chart_svg(args)
    "chart-html" => csvlite_command_chart_html(args)
    "check" => csvlite_command_check(args)
    "markdown" => csvlite_command_markdown(args)
    "jsonl" => csvlite_command_jsonl(args)
    "html" => csvlite_command_html(args)
    "group-sum" => csvlite_command_group_sum(args)
    "select" => csvlite_command_select(args)
    "missing" => csvlite_command_missing(args)
    other => "Unknown command: " + other + "\n\n" + csvlite_help()
  }
}

///|
fn csvlite_help() -> String {
  (
    #|csvlite - lightweight CSV utilities for MoonBit
    #|
    #|Usage:
    #|  csvlite profile <csv-text>
    #|  csvlite sniff <csv-text>
    #|  csvlite schema <csv-text>
    #|  csvlite score <csv-text>
    #|  csvlite drift <baseline-csv-text> <candidate-csv-text>
    #|  csvlite drift-json <baseline-csv-text> <candidate-csv-text>
    #|  csvlite gate <baseline-csv-text> <candidate-csv-text>
    #|  csvlite gate-json <baseline-csv-text> <candidate-csv-text>
    #|  csvlite infer-contract <csv-text>
    #|  csvlite contract <csv-text> <contract-csv-text>
    #|  csvlite contract-json <csv-text> <contract-csv-text>
    #|  csvlite passport <csv-text> [dataset-name]
    #|  csvlite passport-json <csv-text> [dataset-name]
    #|  csvlite audit <csv-text>
    #|  csvlite audit-html <csv-text>
    #|  csvlite audit-json <csv-text>
    #|  csvlite chart-json <csv-text> [kind] [label-column] [value-column]
    #|  csvlite chart-svg <csv-text> [kind] [label-column] [value-column]
    #|  csvlite chart-html <csv-text> [kind] [label-column] [value-column]
    #|  csvlite check <csv-text>
    #|  csvlite markdown <csv-text>
    #|  csvlite jsonl <csv-text>
    #|  csvlite html <csv-text>
    #|  csvlite group-sum <csv-text> <group-column> <value-column>
    #|  csvlite select <csv-text> <columns>
    #|  csvlite missing <csv-text>
    #|
    #|Notes:
    #|  Pass \n in CSV text to represent a newline in shell-friendly examples.
  )
}

///|
fn csvlite_command_sniff(args : Array[String]) -> String {
  match csvlite_csv_arg(args) {
    Some(input) => @csv.sniff_dialect_summary(input)
    None => "Usage: csvlite sniff <csv-text>"
  }
}

///|
fn csvlite_command_schema(args : Array[String]) -> String {
  match csvlite_csv_arg(args) {
    Some(input) => @csv.table_schema_markdown(@csv.parse_table_auto(input))
    None => "Usage: csvlite schema <csv-text>"
  }
}

///|
fn csvlite_command_score(args : Array[String]) -> String {
  match csvlite_csv_arg(args) {
    Some(input) => @csv.audit_quality_score_text(@csv.audit_csv_score(input))
    None => "Usage: csvlite score <csv-text>"
  }
}

///|
fn csvlite_command_drift(args : Array[String]) -> String {
  match csvlite_two_csv_args(args) {
    Some((baseline, candidate)) =>
      @csv.audit_drift_markdown(baseline, candidate)
    None => "Usage: csvlite drift <baseline-csv-text> <candidate-csv-text>"
  }
}

///|
fn csvlite_command_drift_json(args : Array[String]) -> String {
  match csvlite_two_csv_args(args) {
    Some((baseline, candidate)) => @csv.audit_drift_json(baseline, candidate)
    None => "Usage: csvlite drift-json <baseline-csv-text> <candidate-csv-text>"
  }
}

///|
fn csvlite_command_gate(args : Array[String]) -> String {
  match csvlite_two_csv_args(args) {
    Some((baseline, candidate)) =>
      @csv.audit_quality_gate_markdown(baseline, candidate)
    None => "Usage: csvlite gate <baseline-csv-text> <candidate-csv-text>"
  }
}

///|
fn csvlite_command_gate_json(args : Array[String]) -> String {
  match csvlite_two_csv_args(args) {
    Some((baseline, candidate)) =>
      @csv.audit_quality_gate_json(baseline, candidate)
    None => "Usage: csvlite gate-json <baseline-csv-text> <candidate-csv-text>"
  }
}

///|
fn csvlite_command_infer_contract(args : Array[String]) -> String {
  match csvlite_csv_arg(args) {
    Some(input) => @csv.quality_contract_infer_csv(input)
    None => "Usage: csvlite infer-contract <csv-text>"
  }
}

///|
fn csvlite_command_contract(args : Array[String]) -> String {
  match csvlite_csv_and_contract_args(args) {
    Some((input, contract)) =>
      @csv.audit_quality_contract_markdown(input, contract)
    None => "Usage: csvlite contract <csv-text> <contract-csv-text>"
  }
}

///|
fn csvlite_command_contract_json(args : Array[String]) -> String {
  match csvlite_csv_and_contract_args(args) {
    Some((input, contract)) => @csv.audit_quality_contract_json(input, contract)
    None => "Usage: csvlite contract-json <csv-text> <contract-csv-text>"
  }
}

///|
fn csvlite_command_passport(args : Array[String]) -> String {
  match csvlite_csv_and_name_arg(args) {
    Some((input, name)) => @csv.csv_data_passport_markdown(input, name)
    None => "Usage: csvlite passport <csv-text> [dataset-name]"
  }
}

///|
fn csvlite_command_passport_json(args : Array[String]) -> String {
  match csvlite_csv_and_name_arg(args) {
    Some((input, name)) => @csv.csv_data_passport_json(input, name)
    None => "Usage: csvlite passport-json <csv-text> [dataset-name]"
  }
}

///|
fn csvlite_command_audit(args : Array[String]) -> String {
  match csvlite_csv_arg(args) {
    Some(input) => @csv.audit_csv_markdown(input)
    None => "Usage: csvlite audit <csv-text>"
  }
}

///|
fn csvlite_command_audit_html(args : Array[String]) -> String {
  match csvlite_csv_arg(args) {
    Some(input) => @csv.audit_csv_html(input)
    None => "Usage: csvlite audit-html <csv-text>"
  }
}

///|
fn csvlite_command_audit_json(args : Array[String]) -> String {
  match csvlite_csv_arg(args) {
    Some(input) => @csv.audit_csv_json(input)
    None => "Usage: csvlite audit-json <csv-text>"
  }
}

///|
fn csvlite_command_chart_json(args : Array[String]) -> String {
  match csvlite_chart_args(args) {
    Some((input, kind, label, value)) =>
      match (label, value) {
        (Some(label_column), Some(value_column)) =>
          @csv.chart_csv_json_with_columns(
            input, kind, label_column, value_column,
          )
        _ => @csv.chart_csv_json(input, kind)
      }
    None =>
      "Usage: csvlite chart-json <csv-text> [kind] [label-column] [value-column]"
  }
}

///|
fn csvlite_command_chart_svg(args : Array[String]) -> String {
  match csvlite_chart_args(args) {
    Some((input, kind, label, value)) =>
      match (label, value) {
        (Some(label_column), Some(value_column)) =>
          @csv.chart_csv_svg_with_columns(
            input, kind, label_column, value_column,
          )
        _ => @csv.chart_csv_svg(input, kind)
      }
    None =>
      "Usage: csvlite chart-svg <csv-text> [kind] [label-column] [value-column]"
  }
}

///|
fn csvlite_command_chart_html(args : Array[String]) -> String {
  match csvlite_chart_args(args) {
    Some((input, kind, label, value)) =>
      match (label, value) {
        (Some(label_column), Some(value_column)) =>
          @csv.chart_csv_html_with_columns(
            input, kind, label_column, value_column,
          )
        _ => @csv.chart_csv_html(input, kind)
      }
    None =>
      "Usage: csvlite chart-html <csv-text> [kind] [label-column] [value-column]"
  }
}

///|
fn csvlite_command_profile(args : Array[String]) -> String {
  match csvlite_csv_arg(args) {
    Some(input) => @csv.profile_report(@csv.parse_table(input))
    None => "Usage: csvlite profile <csv-text>"
  }
}

///|
fn csvlite_command_check(args : Array[String]) -> String {
  match csvlite_csv_arg(args) {
    Some(input) => {
      let report = @csv.parse_table_checked(input)
      @csv.parse_issues_to_text(report.issues)
    }
    None => "Usage: csvlite check <csv-text>"
  }
}

///|
fn csvlite_command_markdown(args : Array[String]) -> String {
  match csvlite_csv_arg(args) {
    Some(input) => @csv.table_to_markdown(@csv.parse_table(input))
    None => "Usage: csvlite markdown <csv-text>"
  }
}

///|
fn csvlite_command_jsonl(args : Array[String]) -> String {
  match csvlite_csv_arg(args) {
    Some(input) => @csv.table_to_json_lines(@csv.parse_table(input))
    None => "Usage: csvlite jsonl <csv-text>"
  }
}

///|
fn csvlite_command_html(args : Array[String]) -> String {
  match csvlite_csv_arg(args) {
    Some(input) => @csv.table_to_html(@csv.parse_table(input))
    None => "Usage: csvlite html <csv-text>"
  }
}

///|
fn csvlite_command_group_sum(args : Array[String]) -> String {
  if args.length() < 4 {
    return "Usage: csvlite group-sum <csv-text> <group-column> <value-column>"
  }
  let input = csvlite_decode_escapes(args[1])
  let grouped = @csv.table_group_sum(@csv.parse_table(input), args[2], args[3])
  @csv.table_to_markdown(grouped)
}

///|
fn csvlite_command_select(args : Array[String]) -> String {
  if args.length() < 3 {
    return "Usage: csvlite select <csv-text> <columns>"
  }
  let input = csvlite_decode_escapes(args[1])
  let columns = csvlite_parse_columns(args[2])
  @csv.table_to_markdown(
    @csv.table_select_columns(@csv.parse_table(input), columns),
  )
}

///|
fn csvlite_command_missing(args : Array[String]) -> String {
  match csvlite_csv_arg(args) {
    Some(input) =>
      @csv.table_to_markdown(
        @csv.table_missing_summary(@csv.parse_table(input)),
      )
    None => "Usage: csvlite missing <csv-text>"
  }
}

///|
fn csvlite_csv_arg(args : Array[String]) -> String? {
  if args.length() < 2 {
    None
  } else {
    Some(csvlite_decode_escapes(args[1]))
  }
}

///|
fn csvlite_two_csv_args(args : Array[String]) -> (String, String)? {
  if args.length() < 3 {
    None
  } else {
    Some((csvlite_decode_escapes(args[1]), csvlite_decode_escapes(args[2])))
  }
}

///|
fn csvlite_csv_and_contract_args(args : Array[String]) -> (String, String)? {
  if args.length() < 3 {
    None
  } else {
    Some((csvlite_decode_escapes(args[1]), csvlite_decode_escapes(args[2])))
  }
}

///|
fn csvlite_csv_and_name_arg(args : Array[String]) -> (String, String)? {
  if args.length() < 2 {
    None
  } else {
    let name = if args.length() >= 3 { args[2] } else { "csv-dataset" }
    Some((csvlite_decode_escapes(args[1]), name))
  }
}

///|
fn csvlite_chart_args(
  args : Array[String],
) -> (String, String, String?, String?)? {
  if args.length() < 2 {
    None
  } else {
    let input = csvlite_decode_escapes(args[1])
    let kind = if args.length() >= 3 { args[2] } else { "bar" }
    let label = if args.length() >= 4 { Some(args[3]) } else { None }
    let value = if args.length() >= 5 { Some(args[4]) } else { None }
    Some((input, kind, label, value))
  }
}

///|
fn csvlite_parse_columns(columns : String) -> Array[String] {
  let parsed = @csv.parse(columns)
  if parsed.length() == 0 {
    []
  } else {
    parsed[0]
  }
}

///|
fn csvlite_decode_escapes(input : String) -> String {
  let out = StringBuilder()
  let mut escaping = false
  for ch in input.iter() {
    if escaping {
      if ch == 'n' {
        out.write_char('\n')
      } else if ch == 'r' {
        out.write_char('\r')
      } else if ch == 't' {
        out.write_char('\t')
      } else {
        out.write_char(ch)
      }
      escaping = false
    } else if ch == '\\' {
      escaping = true
    } else {
      out.write_char(ch)
    }
  }
  if escaping {
    out.write_char('\\')
  }
  out.to_string()
}

///|
fn csvlite_drop_program_name(args : Array[String]) -> Array[String] {
  let result : Array[String] = Array::new()
  if args.length() <= 1 {
    return result
  }
  for i in 1..<args.length() {
    result.push(args[i])
  }
  result
}
