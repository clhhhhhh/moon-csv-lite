///|
/// Inferred validation metadata for one column.
pub(all) struct CsvInferredColumnRule {
  name : String
  kind : CsvColumnType
  required : Bool
  total : Int
  empty : Int
  unique : Int
  examples : Array[String]
} derive(Eq, Debug)

///|
/// Infer schema metadata for every column in a header-aware table.
pub fn infer_schema(table : CsvTable) -> Array[CsvInferredColumnRule] {
  let profiles = profile_table(table)
  let rules : Array[CsvInferredColumnRule] = Array::new()
  for i in 0..<profiles.length() {
    let profile = profiles[i]
    rules.push({
      name: profile.name,
      kind: schema_infer_kind(profile.inferred),
      required: profile.total > 0 && profile.empty == 0,
      total: profile.total,
      empty: profile.empty,
      unique: profile.unique,
      examples: schema_infer_examples_at(table, i, 3),
    })
  }
  rules
}

///|
/// Infer ordinary validation rules from observed data.
pub fn infer_validation_rules(table : CsvTable) -> Array[CsvColumnRule] {
  let inferred = infer_schema(table)
  let rules : Array[CsvColumnRule] = Array::new()
  for rule in inferred {
    rules.push({ name: rule.name, kind: rule.kind, required: rule.required })
  }
  rules
}

///|
/// Validate a table against its inferred schema.
pub fn validate_inferred_schema(table : CsvTable) -> Array[CsvValidationError] {
  validate_table(table, infer_validation_rules(table))
}

///|
/// Infer schema from CSV text using automatic dialect detection.
pub fn infer_schema_auto(input : String) -> Array[CsvInferredColumnRule] {
  infer_schema(parse_table_auto(input))
}

///|
/// Render inferred schema as a Markdown table.
pub fn schema_inference_to_markdown(
  rules : Array[CsvInferredColumnRule],
) -> String {
  let out = StringBuilder()
  out.write_string("| column | type | required | empty | unique | examples |\n")
  out.write_string("| --- | --- | --- | ---: | ---: | --- |\n")
  for rule in rules {
    out.write_string("| ")
    schema_infer_write_markdown_cell(out, rule.name)
    out.write_string(" | ")
    out.write_string(schema_infer_column_type_name(rule.kind))
    out.write_string(" | ")
    out.write_string(if rule.required { "yes" } else { "no" })
    out.write_string(" | \{rule.empty}/\{rule.total} | \{rule.unique} | ")
    schema_infer_write_markdown_cell(
      out,
      schema_infer_join(rule.examples, ", "),
    )
    out.write_string(" |\n")
  }
  out.to_string()
}

///|
/// Render inferred schema as compact text for terminal output.
pub fn schema_inference_to_text(rules : Array[CsvInferredColumnRule]) -> String {
  if rules.length() == 0 {
    return "no columns"
  }
  let out = StringBuilder()
  for i in 0..<rules.length() {
    if i > 0 {
      out.write_char('\n')
    }
    let rule = rules[i]
    out.write_string(rule.name)
    out.write_string(": ")
    out.write_string(schema_infer_column_type_name(rule.kind))
    out.write_string(if rule.required { ", required" } else { ", optional" })
    out.write_string(", empty=\{rule.empty}/\{rule.total}")
    out.write_string(", unique=\{rule.unique}")
    if rule.examples.length() > 0 {
      out.write_string(", examples=")
      out.write_string(schema_infer_join(rule.examples, "|"))
    }
  }
  out.to_string()
}

///|
/// Render inferred schema for a table as Markdown.
pub fn table_schema_markdown(table : CsvTable) -> String {
  schema_inference_to_markdown(infer_schema(table))
}

///|
/// Render inferred schema for a table as compact text.
pub fn table_schema_text(table : CsvTable) -> String {
  schema_inference_to_text(infer_schema(table))
}

///|
/// Return true if the inferred schema marks a column as required.
pub fn schema_inferred_required(
  rules : Array[CsvInferredColumnRule],
  column : String,
) -> Bool {
  match schema_infer_find(rules, column) {
    Some(rule) => rule.required
    None => false
  }
}

///|
/// Return the inferred scalar type for a column.
pub fn schema_inferred_type(
  rules : Array[CsvInferredColumnRule],
  column : String,
) -> CsvColumnType? {
  match schema_infer_find(rules, column) {
    Some(rule) => Some(rule.kind)
    None => None
  }
}

///|
/// Return first-seen non-empty examples for one column.
pub fn column_examples(
  table : CsvTable,
  column : String,
  limit : Int,
) -> Array[String] {
  schema_infer_examples(table, column, limit)
}

///|
fn schema_infer_kind(kind : CsvInferredType) -> CsvColumnType {
  match kind {
    EmptyOnly => Text
    IntegerColumn => Integer
    FloatColumn => Float
    BooleanColumn => Boolean
    TextColumn => Text
  }
}

///|
fn schema_infer_examples(
  table : CsvTable,
  column : String,
  limit : Int,
) -> Array[String] {
  let examples : Array[String] = Array::new()
  if limit <= 0 {
    return examples
  }
  match schema_infer_column_index(table.headers, column) {
    Some(index) =>
      for row in table.rows {
        let value = schema_infer_cell_at(row, index)
        if !value.is_empty() && !schema_infer_contains(examples, value) {
          examples.push(value)
          if examples.length() >= limit {
            return examples
          }
        }
      }
    None => ()
  }
  examples
}

///|
fn schema_infer_examples_at(
  table : CsvTable,
  index : Int,
  limit : Int,
) -> Array[String] {
  let examples : Array[String] = Array::new()
  if limit <= 0 {
    return examples
  }
  for row in table.rows {
    let value = schema_infer_cell_at(row, index)
    if !value.is_empty() && !schema_infer_contains(examples, value) {
      examples.push(value)
      if examples.length() >= limit {
        return examples
      }
    }
  }
  examples
}

///|
fn schema_infer_find(
  rules : Array[CsvInferredColumnRule],
  column : String,
) -> CsvInferredColumnRule? {
  for rule in rules {
    if rule.name == column {
      return Some(rule)
    }
  }
  None
}

///|
fn schema_infer_column_type_name(kind : CsvColumnType) -> String {
  match kind {
    Text => "text"
    Integer => "integer"
    Float => "float"
    Boolean => "boolean"
  }
}

///|
fn schema_infer_column_index(headers : Array[String], column : String) -> Int? {
  for i in 0..<headers.length() {
    if headers[i] == column {
      return Some(i)
    }
  }
  None
}

///|
fn schema_infer_cell_at(row : Array[String], index : Int) -> String {
  if index >= 0 && index < row.length() {
    row[index]
  } else {
    ""
  }
}

///|
fn schema_infer_contains(values : Array[String], value : String) -> Bool {
  for item in values {
    if item == value {
      return true
    }
  }
  false
}

///|
fn schema_infer_join(values : Array[String], separator : String) -> String {
  let out = StringBuilder()
  for i in 0..<values.length() {
    if i > 0 {
      out.write_string(separator)
    }
    out.write_string(values[i])
  }
  out.to_string()
}

///|
fn schema_infer_write_markdown_cell(
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
