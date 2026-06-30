///|
/// Browser-facing adapter compiled by the MoonBit JavaScript backend.
///
/// The playground keeps its UI in HTML/CSS/JavaScript, but these exported
/// functions make the data audit and drift logic run through the MoonBit core.
pub fn engine_name() -> String {
  "MoonBit JS backend"
}

///|
/// Audit CSV text and return the canonical machine-readable JSON report.
pub fn audit_csv_json(input : String) -> String {
  @csv.audit_csv_json(input)
}

///|
/// Audit CSV text and return a standalone HTML report.
pub fn audit_csv_html(input : String) -> String {
  @csv.audit_csv_html(input)
}

///|
/// Build a review-friendly CSV data passport as Markdown.
pub fn csv_data_passport_markdown(input : String, name : String) -> String {
  @csv.csv_data_passport_markdown(input, name)
}

///|
/// Build a machine-readable CSV data passport as JSON.
pub fn csv_data_passport_json(input : String, name : String) -> String {
  @csv.csv_data_passport_json(input, name)
}

///|
/// Compare two CSV snapshots and return a machine-readable drift report.
pub fn audit_drift_json(
  baseline_input : String,
  candidate_input : String,
) -> String {
  @csv.audit_drift_json(baseline_input, candidate_input)
}

///|
/// Compare two CSV snapshots and return a Markdown drift report.
pub fn audit_drift_markdown(
  baseline_input : String,
  candidate_input : String,
) -> String {
  @csv.audit_drift_markdown(baseline_input, candidate_input)
}

///|
/// Compare two CSV snapshots and return a machine-readable quality gate report.
pub fn audit_quality_gate_json(
  baseline_input : String,
  candidate_input : String,
) -> String {
  @csv.audit_quality_gate_json(baseline_input, candidate_input)
}

///|
/// Compare two CSV snapshots and return a Markdown quality gate report.
pub fn audit_quality_gate_markdown(
  baseline_input : String,
  candidate_input : String,
) -> String {
  @csv.audit_quality_gate_markdown(baseline_input, candidate_input)
}

///|
/// Infer a reusable CSV quality contract from a representative sample.
pub fn quality_contract_infer_csv(input : String) -> String {
  @csv.quality_contract_infer_csv(input)
}

///|
/// Evaluate CSV text against a contract and return machine-readable JSON.
pub fn audit_quality_contract_json(
  input : String,
  contract_csv : String,
) -> String {
  @csv.audit_quality_contract_json(input, contract_csv)
}

///|
/// Evaluate CSV text against a contract and return Markdown.
pub fn audit_quality_contract_markdown(
  input : String,
  contract_csv : String,
) -> String {
  @csv.audit_quality_contract_markdown(input, contract_csv)
}

///|
/// Build an automatic chart preview and return the canonical JSON spec.
pub fn chart_csv_json(input : String, kind : String) -> String {
  @csv.chart_csv_json(input, kind)
}

///|
/// Build an automatic chart preview and return standalone SVG.
pub fn chart_csv_svg(input : String, kind : String) -> String {
  @csv.chart_csv_svg(input, kind)
}

///|
/// Build an automatic chart preview and return standalone HTML.
pub fn chart_csv_html(input : String, kind : String) -> String {
  @csv.chart_csv_html(input, kind)
}
