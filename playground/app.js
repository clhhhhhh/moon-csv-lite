(function () {
  "use strict";

  let currentChartKind = "bar";

  const samples = {
    quality: "姓名,姓名,\n小月,18,\n小月,18,\n,,",
    sales: "订单号;地区;金额;已支付\nSO-1001;华东;120.5;true\nSO-1002;华北;88.0;false\nSO-1003;华东;130.0;true",
    logs: "时间\t级别\t耗时_ms\t状态\n2026-06-29T09:00:00Z\tinfo\t12\tok\n2026-06-29T09:01:00Z\twarn\t45\tretry\n2026-06-29T09:02:00Z\tinfo\t9\tok",
    clean: "姓名,年龄,活跃,城市\n小月,18,true,深圳\n小林,20,false,上海\n小陈,22,true,北京"
  };

  const delimiterNames = {
    ",": "逗号",
    ";": "分号",
    "\t": "制表符",
    "|": "竖线"
  };

  function parseCsv(input, delimiter) {
    const rows = [];
    const issues = [];
    let row = [];
    let field = "";
    let line = 1;
    let column = 1;
    let inQuotes = false;

    for (let i = 0; i < input.length; i += 1) {
      const ch = input[i];
      const next = input[i + 1];

      if (inQuotes) {
        if (ch === "\"") {
          if (next === "\"") {
            field += "\"";
            i += 1;
            column += 2;
          } else {
            inQuotes = false;
            column += 1;
          }
        } else {
          field += ch;
          if (ch === "\n") {
            line += 1;
            column = 1;
          } else {
            column += 1;
          }
        }
      } else if (ch === "\"") {
        inQuotes = true;
        column += 1;
      } else if (ch === delimiter) {
        row.push(field);
        field = "";
        column += 1;
      } else if (ch === "\n") {
        row.push(field);
        rows.push(row);
        row = [];
        field = "";
        line += 1;
        column = 1;
      } else if (ch === "\r") {
        if (next === "\n") {
          continue;
        }
        row.push(field);
        rows.push(row);
        row = [];
        field = "";
        line += 1;
        column = 1;
      } else {
        field += ch;
        column += 1;
      }
    }

    if (inQuotes) {
      issues.push({
        line,
        column,
        message: "引号字段没有正确闭合"
      });
    }

    row.push(field);
    if (!(row.length === 1 && row[0] === "" && rows.length > 0)) {
      rows.push(row);
    }

    const width = rows.length > 0 ? rows[0].length : 0;
    for (let i = 1; i < rows.length; i += 1) {
      if (rows[i].length !== width) {
        issues.push({
          line: i + 1,
          column: 1,
          message: `期望 ${width} 列，实际得到 ${rows[i].length} 列`
        });
      }
    }

    return { rows, issues };
  }

  function splitPhysicalLines(input) {
    return input.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n").filter(Boolean);
  }

  function countDelimiterOutsideQuotes(line, delimiter) {
    let count = 0;
    let inQuotes = false;
    for (let i = 0; i < line.length; i += 1) {
      const ch = line[i];
      if (ch === "\"") {
        if (inQuotes && line[i + 1] === "\"") {
          i += 1;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (!inQuotes && ch === delimiter) {
        count += 1;
      }
    }
    return count;
  }

  function sniffDialect(input) {
    const candidates = [",", "\t", ";", "|"];
    const lines = splitPhysicalLines(input).slice(0, 20);
    let best = { delimiter: ",", score: -Infinity, columns: 0 };

    for (const delimiter of candidates) {
      const counts = lines.map((line) => countDelimiterOutsideQuotes(line, delimiter));
      const active = counts.filter((count) => count > 0);
      const sameShape = active.length > 0 && active.every((count) => count === active[0]);
      const score = active.reduce((sum, count) => sum + count, 0) + (sameShape ? 8 : 0) - Math.abs(active.length - lines.length);
      const columns = active.length > 0 ? active[0] + 1 : 1;
      if (score > best.score) {
        best = { delimiter, score, columns };
      }
    }

    return {
      delimiter: best.delimiter,
      name: delimiterNames[best.delimiter] || "custom",
      newline: input.includes("\r\n") ? "\\r\\n" : "\\n"
    };
  }

  function toTable(rows) {
    if (rows.length === 0) {
      return { headers: [], rows: [] };
    }
    return {
      headers: rows[0],
      rows: rows.slice(1)
    };
  }

  function cellAt(row, index) {
    return index >= 0 && index < row.length ? row[index] : "";
  }

  function columnLabel(headers, index) {
    const value = headers[index] || "";
    return value.trim() ? value : `#${index + 1}`;
  }

  function isEmpty(value) {
    return String(value || "").trim() === "";
  }

  function isInt(value) {
    return /^[-+]?\d+$/.test(value.trim());
  }

  function isNumber(value) {
    return value.trim() !== "" && Number.isFinite(Number(value));
  }

  function isBool(value) {
    return /^(true|false|1|0|yes|no|on|off)$/i.test(value.trim());
  }

  function inferType(values) {
    const nonEmpty = values.filter((value) => !isEmpty(value));
    if (nonEmpty.length === 0) return "empty";
    if (nonEmpty.every(isBool)) return "boolean";
    if (nonEmpty.every(isInt)) return "integer";
    if (nonEmpty.every(isNumber)) return "float";
    return "text";
  }

  function uniqueValues(values) {
    const result = [];
    for (const value of values) {
      if (!result.includes(value)) {
        result.push(value);
      }
    }
    return result;
  }

  function profileTable(table) {
    return table.headers.map((header, index) => {
      const values = table.rows.map((row) => cellAt(row, index));
      const empty = values.filter(isEmpty).length;
      const nonEmptyValues = values.filter((value) => !isEmpty(value));
      const numericValues = nonEmptyValues.filter(isNumber).map(Number);
      const type = inferType(values);
      const min = numericValues.length ? Math.min(...numericValues) : null;
      const max = numericValues.length ? Math.max(...numericValues) : null;
      const average = numericValues.length ? numericValues.reduce((a, b) => a + b, 0) / numericValues.length : null;

      return {
        column: header,
        label: columnLabel(table.headers, index),
        type,
        total: table.rows.length,
        empty,
        non_empty: nonEmptyValues.length,
        unique: uniqueValues(nonEmptyValues).length,
        min,
        max,
        average,
        examples: uniqueValues(nonEmptyValues).slice(0, 3)
      };
    });
  }

  function inferSchema(table, profiles) {
    return profiles.map((profile) => ({
      column: profile.column,
      label: profile.label,
      type: profile.type === "empty" ? "text" : profile.type,
      required: profile.total > 0 && profile.empty === 0,
      total: profile.total,
      empty: profile.empty,
      unique: profile.unique,
      examples: profile.examples
    }));
  }

  function missingSummary(table) {
    return table.headers.map((header, index) => {
      const missing = table.rows.filter((row) => isEmpty(cellAt(row, index))).length;
      return {
        column: header,
        label: columnLabel(table.headers, index),
        missing,
        present: table.rows.length - missing,
        total: table.rows.length
      };
    });
  }

  function rowKey(row, width) {
    const values = [];
    for (let i = 0; i < Math.max(row.length, width); i += 1) {
      values.push(cellAt(row, i));
    }
    return values.join("\u001f");
  }

  function isRowEmpty(row, width) {
    for (let i = 0; i < Math.max(row.length, width); i += 1) {
      if (!isEmpty(cellAt(row, i))) {
        return false;
      }
    }
    return true;
  }

  function collectQualityIssues(table) {
    const issues = [];
    const seenHeaders = new Map();

    table.headers.forEach((header, index) => {
      const trimmed = header.trim();
      if (!trimmed) {
        issues.push({
          severity: "warning",
          row: 1,
          column: `#${index + 1}`,
          message: `第 ${index + 1} 个表头为空；建议在校验或导出前补上稳定列名。`
        });
      } else if (seenHeaders.has(trimmed)) {
        issues.push({
          severity: "warning",
          row: 1,
          column: trimmed,
          message: `表头 \`${trimmed}\` 重复；建议在关联、选择列或导出 JSON 前重命名。`
        });
      } else {
        seenHeaders.set(trimmed, index);
      }
    });

    table.rows.forEach((row, index) => {
      if (isRowEmpty(row, table.headers.length)) {
        issues.push({
          severity: "warning",
          row: index + 2,
          column: "*",
          message: `第 ${index + 2} 行为空；建议在画像统计前删除空行。`
        });
      }
    });

    table.headers.forEach((header, index) => {
      if (table.rows.length > 0 && table.rows.every((row) => isEmpty(cellAt(row, index)))) {
        const label = columnLabel(table.headers, index);
        issues.push({
          severity: "warning",
          row: 1,
          column: label,
          message: `列 \`${label}\` 在所有数据行里都为空；建议删除该列或填充默认值。`
        });
      }
    });

    const keys = new Map();
    table.rows.forEach((row, index) => {
      const key = rowKey(row, table.headers.length);
      if (!key.trim()) {
        return;
      }
      if (keys.has(key)) {
        issues.push({
          severity: "info",
          row: index + 2,
          column: "*",
          message: `第 ${index + 2} 行与第 ${keys.get(key)} 行重复；如果数据应唯一，建议去重。`
        });
      } else {
        keys.set(key, index + 2);
      }
    });

    return issues;
  }

  function buildRecommendations(report) {
    const recommendations = [];
    if (report.parse_issues.length > 0) {
      recommendations.push({
        severity: "error",
        message: "先修复结构解析问题，再信任 Schema 推断或列画像结果。"
      });
    }
    for (const issue of report.quality_issues) {
      recommendations.push({ severity: issue.severity, message: issue.message });
    }
    if (report.dialect.delimiter !== ",") {
      recommendations.push({
        severity: "info",
        message: `检测到${report.dialect.name}分隔格式；建议对此类数据使用自动分隔符识别。`
      });
    }
    for (const item of report.schema) {
      if (item.empty > 0) {
        recommendations.push({
          severity: "warning",
          message: `列 \`${item.label}\` 有 ${item.empty} 个缺失值；严格校验前建议设为可选或填充默认值。`
        });
      }
    }
    for (const profile of report.profiles) {
      if ((profile.type === "integer" || profile.type === "float") && profile.non_empty > 0) {
        recommendations.push({
          severity: "info",
          message: `列 \`${profile.label}\` 看起来是数值列，可用于聚合统计或范围校验。`
        });
      }
    }
    if (recommendations.length === 0) {
      recommendations.push({
        severity: "info",
        message: "当前样例没有发现明显的数据质量问题。"
      });
    }
    return recommendations;
  }

  function getMoonBitEngine() {
    if (typeof globalThis.auditCsvJson === "function") {
      return {
        engineName: typeof globalThis.engineName === "function" ? globalThis.engineName : () => "MoonBit JS backend",
        auditCsvJson: globalThis.auditCsvJson,
        auditCsvHtml: globalThis.auditCsvHtml,
        csvDataPassportMarkdown: globalThis.csvDataPassportMarkdown,
        csvDataPassportJson: globalThis.csvDataPassportJson,
        auditDriftJson: globalThis.auditDriftJson,
        auditDriftMarkdown: globalThis.auditDriftMarkdown,
        auditQualityGateJson: globalThis.auditQualityGateJson,
        auditQualityGateMarkdown: globalThis.auditQualityGateMarkdown,
        qualityContractInferCsv: globalThis.qualityContractInferCsv,
        auditQualityContractJson: globalThis.auditQualityContractJson,
        auditQualityContractMarkdown: globalThis.auditQualityContractMarkdown,
        chartCsvJson: globalThis.chartCsvJson,
        chartCsvSvg: globalThis.chartCsvSvg,
        chartCsvHtml: globalThis.chartCsvHtml
      };
    }
    return null;
  }

  function delimiterFromLabel(value) {
    if (value === "\\t") return "\t";
    if (value === "\\n") return "\n";
    return value || ",";
  }

  function displayColumnName(value, index) {
    return String(value || "").trim() ? value : `#${index + 1}`;
  }

  function normalizeMoonBitReport(report, input, engine) {
    report.engine = engine.engineName();
    report.schema = (report.schema || []).map((item, index) => ({
      ...item,
      label: displayColumnName(item.column, index),
      examples: item.examples || []
    }));
    report.missing = (report.missing || []).map((item, index) => ({
      ...item,
      label: displayColumnName(item.column, index),
      total: item.missing + item.present
    }));
    report.profiles = (report.profiles || []).map((item, index) => ({
      ...item,
      label: displayColumnName(item.column, index)
    }));
    const delimiter = delimiterFromLabel(report.dialect && report.dialect.delimiter);
    const previewParsed = parseCsv(input, delimiter);
    const previewTable = toTable(previewParsed.rows);
    report.preview = {
      headers: previewTable.headers,
      rows: previewTable.rows.slice(0, 8)
    };
    return report;
  }

  function auditCsvWithMoonBit(input) {
    const engine = getMoonBitEngine();
    if (!engine) {
      return null;
    }
    try {
      return normalizeMoonBitReport(JSON.parse(engine.auditCsvJson(input)), input, engine);
    } catch (error) {
      console.warn("MoonBit audit engine failed; falling back to browser JavaScript.", error);
      return null;
    }
  }

  function auditCsvWithJavaScript(input) {
    const dialect = sniffDialect(input);
    const parsed = parseCsv(input, dialect.delimiter);
    const table = toTable(parsed.rows);
    const profiles = profileTable(table);
    const schema = inferSchema(table, profiles);
    const qualityIssues = collectQualityIssues(table);
    const report = {
      status: parsed.issues.length === 0 && qualityIssues.length === 0 ? "ok" : "issues",
      dialect,
      summary: {
        rows: table.rows.length,
        columns: table.headers.length,
        parse_issue_count: parsed.issues.length,
        quality_issue_count: qualityIssues.length
      },
      parse_issues: parsed.issues,
      quality_issues: qualityIssues,
      schema,
      missing: missingSummary(table),
      profiles,
      recommendations: [],
      score: null,
      preview: {
        headers: table.headers,
        rows: table.rows.slice(0, 8)
      }
    };
    report.recommendations = buildRecommendations(report);
    report.score = calculateQualityScore(report);
    report.engine = "JavaScript fallback";
    return report;
  }

  function auditCsv(input) {
    return auditCsvWithMoonBit(input) || auditCsvWithJavaScript(input);
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll("\"", "&quot;")
      .replaceAll("'", "&#39;");
  }

  function formatNumber(value) {
    if (value === null || value === undefined || Number.isNaN(value)) return "";
    return Number.isInteger(value) ? String(value) : String(Number(value.toFixed(4)));
  }

  function clampScore(value) {
    return Math.max(0, Math.min(100, Math.trunc(value)));
  }

  function gradeForScore(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
  }

  function riskForScore(score) {
    if (score >= 85) return "low";
    if (score >= 70) return "medium";
    return "high";
  }

  function riskLabel(value) {
    const labels = {
      low: "低风险",
      medium: "中风险",
      high: "高风险"
    };
    return labels[value] || value;
  }

  function calculateQualityScore(report) {
    const missingCells = report.profiles.reduce((sum, item) => sum + item.empty, 0);
    const totalCells = report.profiles.reduce((sum, item) => sum + item.total, 0);
    const structureScore = clampScore(100 - report.parse_issues.length * 35);
    const completenessScore = totalCells === 0 ? 100 : clampScore(100 - Math.trunc((missingCells * 100) / totalCells));
    let consistencyPenalty = 0;

    for (const issue of report.quality_issues) {
      if (issue.row === 1 && issue.column !== "*") {
        consistencyPenalty += 12;
      } else if (issue.severity === "error") {
        consistencyPenalty += 20;
      } else if (issue.severity === "warning") {
        consistencyPenalty += 8;
      }
    }

    const duplicateRows = report.quality_issues.filter((issue) => issue.severity === "info" && issue.column === "*").length;
    const consistencyScore = clampScore(100 - consistencyPenalty);
    const uniquenessScore = clampScore(100 - duplicateRows * 12);
    const issuePenalty = report.parse_issues.length * 20 + report.quality_issues.reduce((sum, issue) => {
      if (issue.severity === "error") return sum + 20;
      if (issue.severity === "warning") return sum + 7;
      return sum + 2;
    }, 0);
    const weighted = Math.trunc((structureScore * 35 + completenessScore * 25 + consistencyScore * 25 + uniquenessScore * 15) / 100);
    const score = clampScore(weighted - Math.trunc(issuePenalty / 5));

    return {
      score,
      grade: gradeForScore(score),
      risk: riskForScore(score),
      structure_score: structureScore,
      completeness_score: completenessScore,
      consistency_score: consistencyScore,
      uniqueness_score: uniquenessScore,
      issue_penalty: issuePenalty,
      missing_cells: missingCells,
      total_cells: totalCells
    };
  }

  function typeLabel(value) {
    const labels = {
      empty: "空列",
      text: "文本",
      integer: "整数",
      float: "小数",
      boolean: "布尔值"
    };
    return labels[value] || value;
  }

  function severityLabel(value) {
    const labels = {
      warning: "警告",
      error: "错误",
      info: "提示"
    };
    return labels[value] || value;
  }

  function statusLabel(value) {
    return value === "ok" ? "通过" : "需检查";
  }

  function localizeMessage(message) {
    const text = String(message || "");
    let matched = text.match(/^Header `(.+)` is duplicated; rename columns before joining, selecting, or JSON export\.$/);
    if (matched) return `表头 \`${matched[1]}\` 重复；建议在关联、选择列或导出 JSON 前重命名。`;
    matched = text.match(/^Header column #(\d+) is empty; give it a stable name before validation or export\.$/);
    if (matched) return `第 ${matched[1]} 个表头为空；建议在校验或导出前补上稳定列名。`;
    matched = text.match(/^Row (\d+) is empty; consider dropping empty rows before profiling\.$/);
    if (matched) return `第 ${matched[1]} 行为空；建议在画像统计前删除空行。`;
    matched = text.match(/^Column `(.+)` is empty in every row; consider dropping it or filling defaults\.$/);
    if (matched) return `列 \`${matched[1]}\` 在所有数据行里都为空；建议删除该列或填充默认值。`;
    matched = text.match(/^Row (\d+) duplicates row (\d+); deduplicate if rows should be unique\.$/);
    if (matched) return `第 ${matched[1]} 行与第 ${matched[2]} 行重复；如果数据应唯一，建议去重。`;
    matched = text.match(/^Column `(.*)` has (\d+) missing value\(s\); keep it optional or fill defaults before strict validation\.$/);
    if (matched) return `列 \`${matched[1] || "未命名"}\` 有 ${matched[2]} 个缺失值；严格校验前建议设为可选或填充默认值。`;
    matched = text.match(/^Column `(.+)` looks numeric and can be used for aggregation or range validation\.$/);
    if (matched) return `列 \`${matched[1]}\` 看起来是数值列，可用于聚合统计或范围校验。`;
    matched = text.match(/^Detected (.+) dialect; use parse_table_auto or the detected dialect when parsing this source\.$/);
    if (matched) return `检测到 ${matched[1]} 分隔格式；建议对此类数据使用自动分隔符识别。`;
    matched = text.match(/^expected (\d+) fields, got (\d+)$/);
    if (matched) return `期望 ${matched[1]} 列，实际得到 ${matched[2]} 列。`;
    if (text === "Fix structural parse issues before trusting schema or profile output.") {
      return "先修复结构解析问题，再信任 Schema 推断或列画像结果。";
    }
    if (text === "No immediate data-quality issues were found in this sample.") {
      return "当前样例没有发现明显的数据质量问题。";
    }
    return text;
  }

  function deactivateSamples() {
    for (const button of document.querySelectorAll(".sample-button")) {
      button.classList.remove("active");
    }
  }

  function setFileStatus(text, isError) {
    const status = document.getElementById("file-status");
    status.textContent = text;
    status.classList.toggle("error", Boolean(isError));
  }

  function formatFileSize(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  }

  function renderSummary(report) {
    const cards = [
      { label: "质量分", value: report.score.score, note: `${report.score.grade} 级 / ${riskLabel(report.score.risk)}`, className: report.score.risk === "low" ? "status-ok" : "status-issues" },
      { label: "状态", value: statusLabel(report.status), note: report.status === "ok" ? "未发现阻断问题" : "建议复核数据", className: report.status === "ok" ? "status-ok" : "status-issues" },
      { label: "分隔格式", value: report.dialect.name, note: `分隔符 ${report.dialect.delimiter === "\t" ? "\\t" : report.dialect.delimiter}` },
      { label: "数据行", value: report.summary.rows, note: `${report.summary.columns} 列` },
      { label: "问题数", value: report.summary.quality_issue_count + report.summary.parse_issue_count, note: `${report.summary.quality_issue_count} 个质量 / ${report.summary.parse_issue_count} 个结构` },
      { label: "审计引擎", value: report.engine && report.engine.includes("MoonBit") ? "MoonBit" : "JS", note: report.engine || "JavaScript fallback", className: report.engine && report.engine.includes("MoonBit") ? "status-ok" : "" }
    ];
    document.getElementById("summary-grid").innerHTML = cards.map((card) => `
      <article class="metric-card ${card.className || ""}">
        <div class="metric-label">${escapeHtml(card.label)}</div>
        <div class="metric-value">${escapeHtml(card.value)}</div>
        <div class="metric-note">${escapeHtml(card.note)}</div>
      </article>
    `).join("");
  }

  function renderScore(report) {
    const score = report.score;
    document.getElementById("score-grade").textContent = `${score.grade} 级`;
    const dimensions = [
      ["结构健康", score.structure_score],
      ["完整性", score.completeness_score],
      ["一致性", score.consistency_score],
      ["唯一性", score.uniqueness_score]
    ];
    document.getElementById("score-body").innerHTML = `
      <div class="score-main">
        <div>
          <div class="score-number">${escapeHtml(score.score)}</div>
          <div class="score-caption">${escapeHtml(riskLabel(score.risk))} · 缺失单元格 ${escapeHtml(score.missing_cells)}/${escapeHtml(score.total_cells)}</div>
        </div>
        <div class="score-meta">扣分 ${escapeHtml(score.issue_penalty)}</div>
      </div>
      <div class="score-dimensions">
        ${dimensions.map(([label, value]) => `
          <div class="bar-item">
            <div class="bar-head">
              <strong>${escapeHtml(label)}</strong>
              <span class="item-meta">${escapeHtml(value)}/100</span>
            </div>
            <div class="bar-track"><div class="bar-fill blue" style="width:${escapeHtml(value)}%"></div></div>
          </div>
        `).join("")}
      </div>
    `;
  }

  function renderIssues(report) {
    const container = document.getElementById("quality-list");
    document.getElementById("quality-count").textContent = String(report.quality_issues.length + report.parse_issues.length);
    if (report.quality_issues.length === 0 && report.parse_issues.length === 0) {
      container.innerHTML = '<div class="empty-state">没有发现解析问题或表格质量问题。</div>';
      return;
    }
    const parseItems = report.parse_issues.map((issue) => ({
      severity: "error",
      row: issue.line,
      column: issue.column,
      message: issue.message
    }));
    const issues = parseItems.concat(report.quality_issues);
    container.innerHTML = issues.map((issue) => `
      <div class="issue-item">
        <div class="issue-head">
          <span class="tag ${escapeHtml(issue.severity)}">${escapeHtml(severityLabel(issue.severity))}</span>
          <span class="item-meta">第 ${escapeHtml(issue.row)} 行 / ${escapeHtml(issue.column)}</span>
        </div>
        <div>${escapeHtml(localizeMessage(issue.message))}</div>
      </div>
    `).join("");
  }

  function renderSchema(report) {
    document.getElementById("schema-count").textContent = String(report.schema.length);
    const rows = report.schema.map((item) => `
      <tr>
        <td>${escapeHtml(item.label)}</td>
        <td>${escapeHtml(typeLabel(item.type))}</td>
        <td>${item.required ? "是" : "否"}</td>
        <td>${item.empty}/${item.total}</td>
        <td>${item.unique}</td>
        <td>${escapeHtml(item.examples.join(", "))}</td>
      </tr>
    `).join("");
    document.getElementById("schema-table").innerHTML = `
      <thead><tr><th>列名</th><th>类型</th><th>必填</th><th>缺失</th><th>唯一值</th><th>示例</th></tr></thead>
      <tbody>${rows}</tbody>
    `;
  }

  function renderBars(report) {
    const missing = report.missing.map((item) => {
      const percent = item.total === 0 ? 0 : Math.round((item.missing / item.total) * 100);
      return `
        <div class="bar-item">
          <div class="bar-head">
            <strong>${escapeHtml(item.label)}</strong>
            <span class="item-meta">${item.missing}/${item.total} 缺失</span>
          </div>
          <div class="bar-track"><div class="bar-fill warn" style="width:${percent}%"></div></div>
        </div>
      `;
    }).join("");
    document.getElementById("missing-bars").innerHTML = missing || '<div class="empty-state">没有可分析的列。</div>';

    const profiles = report.profiles.map((item) => {
      const percent = item.total === 0 ? 0 : Math.round((item.non_empty / item.total) * 100);
      const stats = item.min === null ? `${item.unique} 个唯一值` : `最小 ${formatNumber(item.min)}，最大 ${formatNumber(item.max)}，平均 ${formatNumber(item.average)}`;
      return `
        <div class="bar-item">
          <div class="bar-head">
            <strong>${escapeHtml(item.label)} <span class="item-meta">${escapeHtml(typeLabel(item.type))}</span></strong>
            <span class="item-meta">${escapeHtml(stats)}</span>
          </div>
          <div class="bar-track"><div class="bar-fill blue" style="width:${percent}%"></div></div>
        </div>
      `;
    }).join("");
    document.getElementById("profile-bars").innerHTML = profiles || '<div class="empty-state">没有可分析的列。</div>';
  }

  function renderRecommendations(report) {
    document.getElementById("recommendations").innerHTML = report.recommendations.map((item) => `
      <div class="recommend-item">
        <div class="recommend-head">
          <span class="tag ${escapeHtml(item.severity)}">${escapeHtml(severityLabel(item.severity))}</span>
        </div>
        <div>${escapeHtml(localizeMessage(item.message))}</div>
      </div>
    `).join("");
  }

  function renderPreview(report) {
    const headers = report.preview.headers.map((header, index) => `<th>${escapeHtml(header || `#${index + 1}`)}</th>`).join("");
    const rows = report.preview.rows.map((row) => `
      <tr>${report.preview.headers.map((_, index) => `<td>${escapeHtml(cellAt(row, index))}</td>`).join("")}</tr>
    `).join("");
    document.getElementById("preview-table").innerHTML = `
      <thead><tr>${headers}</tr></thead>
      <tbody>${rows}</tbody>
    `;
  }

  function renderJson(report) {
    document.getElementById("json-output").textContent = JSON.stringify({
      status: report.status,
      dialect: report.dialect,
      summary: report.summary,
      parse_issues: report.parse_issues,
      quality_issues: report.quality_issues,
      schema: report.schema,
      missing: report.missing,
      profiles: report.profiles,
      score: report.score,
      recommendations: report.recommendations,
      engine: report.engine
    }, null, 2);
  }

  function chartKindLabel(kind) {
    const labels = {
      bar: "柱状图",
      line: "折线图",
      pie: "占比图"
    };
    return labels[kind] || kind;
  }

  function buildChartSpecWithJavaScript(input, kind) {
    const dialect = sniffDialect(input);
    const parsed = parseCsv(input, dialect.delimiter);
    const table = toTable(parsed.rows);
    const profiles = profileTable(table);
    const labelProfile = profiles.find((item) => item.type === "text" || item.type === "boolean") || profiles[0];
    const valueProfile = profiles.find((item) => item.type === "integer" || item.type === "float");
    const points = [];
    const warnings = [];

    if (!labelProfile) {
      return {
        kind,
        title: "chart preview",
        label_column: "row",
        value_column: "count",
        measure: "count",
        points,
        skipped_rows: table.rows.length,
        warnings: ["没有找到可生成图表的列。"]
      };
    }

    const labelIndex = table.headers.indexOf(labelProfile.column);
    const valueIndex = valueProfile ? table.headers.indexOf(valueProfile.column) : -1;
    const groups = new Map();
    let skippedRows = 0;

    for (const row of table.rows) {
      const label = cellAt(row, labelIndex).trim() || "(blank)";
      if (valueProfile) {
        const number = Number(cellAt(row, valueIndex));
        if (!Number.isFinite(number)) {
          skippedRows += 1;
          continue;
        }
        const current = groups.get(label) || { value: 0, count: 0 };
        current.value += number;
        current.count += 1;
        groups.set(label, current);
      } else {
        const current = groups.get(label) || { value: 0, count: 0 };
        current.value += 1;
        current.count += 1;
        groups.set(label, current);
      }
    }

    for (const [label, item] of groups) {
      if (points.length >= 24) break;
      points.push({ label, value: item.value, count: item.count });
    }

    if (!valueProfile) {
      warnings.push("没有发现数值列，已生成分类计数图。");
    } else if (skippedRows > 0) {
      warnings.push(`${skippedRows} 行因为数值列为空或非数字而被跳过。`);
    }

    return {
      kind,
      title: valueProfile ? `sum of ${valueProfile.column} by ${labelProfile.column}` : `count by ${labelProfile.column}`,
      label_column: labelProfile.column,
      value_column: valueProfile ? valueProfile.column : "count",
      measure: valueProfile ? "sum" : "count",
      points,
      skipped_rows: skippedRows,
      warnings
    };
  }

  function chartScaleY(value, minValue, maxValue, top, height) {
    if (maxValue === minValue) return top + height / 2;
    return top + ((maxValue - value) / (maxValue - minValue)) * height;
  }

  function chartColor(index) {
    const colors = ["#2563eb", "#0f766e", "#b45309", "#b91c1c", "#7c3aed", "#0369a1", "#15803d", "#c2410c"];
    return colors[index % colors.length];
  }

  function chartShortLabel(value) {
    const text = String(value);
    return text.length > 12 ? `${text.slice(0, 12)}...` : text;
  }

  function renderChartSvgFromSpec(spec) {
    if (spec.kind === "line") return renderLineChartSvg(spec);
    if (spec.kind === "pie") return renderPieChartSvg(spec);
    return renderBarChartSvg(spec);
  }

  function renderSvgShell(spec, body) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" role="img" aria-label="${escapeHtml(spec.title)}">
      <rect width="760" height="380" fill="#ffffff"></rect>
      <text x="28" y="30" font-size="18" font-weight="700" fill="#172033">${escapeHtml(spec.title)}</text>
      <text x="28" y="50" font-size="12" fill="#64748b">${escapeHtml(chartKindLabel(spec.kind))} / ${escapeHtml(spec.measure)} / ${escapeHtml(spec.points.length)} points</text>
      ${body}
    </svg>`;
  }

  function renderBarChartSvg(spec) {
    if (!spec.points.length) {
      return renderSvgShell(spec, '<text x="380" y="190" text-anchor="middle" fill="#64748b">没有可绘制的数据</text>');
    }
    const left = 70;
    const top = 54;
    const plotWidth = 660;
    const plotHeight = 250;
    const bottom = top + plotHeight;
    const values = spec.points.map((point) => point.value);
    const minValue = Math.min(0, ...values);
    const maxValue = Math.max(0, ...values);
    const zeroY = chartScaleY(0, minValue, maxValue, top, plotHeight);
    const slot = plotWidth / spec.points.length;
    const barWidth = Math.max(8, slot * 0.62);
    const bars = spec.points.map((point, index) => {
      const x = left + index * slot + (slot - barWidth) / 2;
      const y = chartScaleY(point.value, minValue, maxValue, top, plotHeight);
      const rectY = Math.min(y, zeroY);
      const height = Math.abs(zeroY - y);
      return `<rect x="${x}" y="${rectY}" width="${barWidth}" height="${height}" rx="4" fill="${chartColor(index)}"><title>${escapeHtml(point.label)}: ${escapeHtml(point.value)}</title></rect>
        <text x="${x + barWidth / 2}" y="${bottom + 18}" text-anchor="middle" font-size="10" fill="#475569">${escapeHtml(chartShortLabel(point.label))}</text>`;
    }).join("");
    return renderSvgShell(spec, `
      <line x1="${left}" y1="${top}" x2="${left}" y2="${bottom}" stroke="#94a3b8"></line>
      <line x1="${left}" y1="${zeroY}" x2="${left + plotWidth}" y2="${zeroY}" stroke="#94a3b8"></line>
      ${bars}
    `);
  }

  function renderLineChartSvg(spec) {
    if (!spec.points.length) {
      return renderSvgShell(spec, '<text x="380" y="190" text-anchor="middle" fill="#64748b">没有可绘制的数据</text>');
    }
    const left = 70;
    const top = 54;
    const plotWidth = 660;
    const plotHeight = 250;
    const bottom = top + plotHeight;
    const values = spec.points.map((point) => point.value);
    let minValue = Math.min(...values);
    let maxValue = Math.max(...values);
    if (minValue === maxValue) {
      minValue -= 1;
      maxValue += 1;
    }
    const coords = spec.points.map((point, index) => {
      const x = spec.points.length === 1 ? left + plotWidth / 2 : left + (index * plotWidth) / (spec.points.length - 1);
      const y = chartScaleY(point.value, minValue, maxValue, top, plotHeight);
      return { x, y, point };
    });
    const circles = coords.map((item, index) => `
      <circle cx="${item.x}" cy="${item.y}" r="5" fill="${chartColor(index)}"><title>${escapeHtml(item.point.label)}: ${escapeHtml(item.point.value)}</title></circle>
      <text x="${item.x}" y="${bottom + 18}" text-anchor="middle" font-size="10" fill="#475569">${escapeHtml(chartShortLabel(item.point.label))}</text>
    `).join("");
    return renderSvgShell(spec, `
      <line x1="${left}" y1="${top}" x2="${left}" y2="${bottom}" stroke="#94a3b8"></line>
      <line x1="${left}" y1="${bottom}" x2="${left + plotWidth}" y2="${bottom}" stroke="#94a3b8"></line>
      <polyline fill="none" stroke="#2563eb" stroke-width="3" points="${coords.map((item) => `${item.x},${item.y}`).join(" ")}"></polyline>
      ${circles}
    `);
  }

  function renderPieChartSvg(spec) {
    const total = spec.points.reduce((sum, point) => point.value > 0 ? sum + point.value : sum, 0);
    if (!spec.points.length || total <= 0) {
      return renderSvgShell(spec, '<text x="380" y="190" text-anchor="middle" fill="#64748b">没有可绘制的数据</text>');
    }
    const cx = 220;
    const cy = 190;
    const radius = 88;
    const circumference = 552.92;
    let offset = 0;
    const slices = spec.points.map((point, index) => {
      if (point.value <= 0) return "";
      const dash = (point.value / total) * circumference;
      const rest = circumference - dash;
      const slice = `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="none" stroke="${chartColor(index)}" stroke-width="34" stroke-dasharray="${dash} ${rest}" stroke-dashoffset="-${offset}" transform="rotate(-90 ${cx} ${cy})"><title>${escapeHtml(point.label)}: ${escapeHtml(point.value)}</title></circle>`;
      offset += dash;
      return slice;
    }).join("");
    const legend = spec.points.map((point, index) => {
      const y = 94 + index * 22;
      return `<rect x="390" y="${y - 10}" width="12" height="12" rx="3" fill="${chartColor(index)}"></rect>
        <text x="408" y="${y}" font-size="12" fill="#172033">${escapeHtml(point.label)}: ${escapeHtml(point.value)}</text>`;
    }).join("");
    return renderSvgShell(spec, `
      <circle cx="${cx}" cy="${cy}" r="${radius}" fill="none" stroke="#e5e7eb" stroke-width="34"></circle>
      ${slices}
      <circle cx="${cx}" cy="${cy}" r="54" fill="#ffffff"></circle>
      <text x="${cx}" y="${cy - 4}" text-anchor="middle" font-size="20" font-weight="700" fill="#172033">${escapeHtml(spec.measure)}</text>
      <text x="${cx}" y="${cy + 20}" text-anchor="middle" font-size="13" fill="#64748b">total ${escapeHtml(total)}</text>
      ${legend}
    `);
  }

  function renderChart(input) {
    const engine = getMoonBitEngine();
    let spec = null;
    let svg = "";
    let engineName = "JavaScript fallback";
    if (engine && typeof engine.chartCsvJson === "function" && typeof engine.chartCsvSvg === "function") {
      try {
        spec = JSON.parse(engine.chartCsvJson(input, currentChartKind));
        svg = engine.chartCsvSvg(input, currentChartKind);
        engineName = "MoonBit 图表引擎";
      } catch (error) {
        console.warn("MoonBit chart engine failed; falling back to browser JavaScript.", error);
      }
    }
    if (!spec) {
      spec = buildChartSpecWithJavaScript(input, currentChartKind);
      svg = renderChartSvgFromSpec(spec);
    }
    document.getElementById("chart-meta").textContent = `${engineName} · ${chartKindLabel(spec.kind)} · ${spec.label_column} → ${spec.value_column} · ${spec.points.length} 个点${spec.warnings.length ? ` · ${spec.warnings[0]}` : ""}`;
    document.getElementById("chart-svg-output").innerHTML = svg;
    window.__moonCsvLiteLastChart = { spec, svg, engineName };
  }

  function renderReport(report) {
    renderSummary(report);
    renderScore(report);
    renderIssues(report);
    renderSchema(report);
    renderBars(report);
    renderRecommendations(report);
    renderPreview(report);
    renderJson(report);
    renderChart(document.getElementById("csv-input").value);
  }

  function setSample(name) {
    const value = samples[name] || samples.quality;
    document.getElementById("csv-input").value = value;
    for (const button of document.querySelectorAll(".sample-button")) {
      button.classList.toggle("active", button.dataset.sample === name);
    }
    const fileInput = document.getElementById("csv-file");
    if (fileInput) {
      fileInput.value = "";
    }
    setFileStatus(`当前使用内置示例：${document.querySelector(`.sample-button[data-sample="${name}"]`)?.textContent || "质量问题"}`, false);
    runAudit();
  }

  function runAudit() {
    const input = document.getElementById("csv-input").value;
    const report = auditCsv(input);
    document.getElementById("input-stats").textContent = `${input.length} 个字符 / ${splitPhysicalLines(input).length} 行`;
    renderReport(report);
    window.__moonCsvLiteLastReport = report;
  }

  function loadCsvText(text, sourceLabel) {
    document.getElementById("csv-input").value = text;
    deactivateSamples();
    if (sourceLabel) {
      setFileStatus(sourceLabel, false);
    }
    runAudit();
  }

  function handleFileUpload(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) {
      setFileStatus("尚未上传文件", false);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      loadCsvText(String(reader.result || ""), `已读取：${file.name}（${formatFileSize(file.size)}）`);
    };
    reader.onerror = () => {
      setFileStatus("读取失败：请确认文件是文本格式。", true);
    };
    reader.readAsText(file, "utf-8");
  }

  function downloadHtml() {
    const input = document.getElementById("csv-input").value;
    const engine = getMoonBitEngine();
    let html = "";
    if (engine && typeof engine.auditCsvHtml === "function") {
      try {
        html = engine.auditCsvHtml(input);
      } catch (error) {
        console.warn("MoonBit HTML export failed; falling back to JSON HTML.", error);
      }
    }
    if (!html) {
      const report = window.__moonCsvLiteLastReport || auditCsv(input);
      html = `<!doctype html><html><head><meta charset="utf-8"><title>CSV 数据审计报告</title></head><body><pre>${escapeHtml(JSON.stringify(report, null, 2))}</pre></body></html>`;
    }
    const url = URL.createObjectURL(new Blob([html], { type: "text/html" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "csv-audit-report.html";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function downloadChartHtml() {
    const input = document.getElementById("csv-input").value;
    const engine = getMoonBitEngine();
    let html = "";
    if (engine && typeof engine.chartCsvHtml === "function") {
      try {
        html = engine.chartCsvHtml(input, currentChartKind);
      } catch (error) {
        console.warn("MoonBit chart HTML export failed; falling back to rendered SVG.", error);
      }
    }
    if (!html) {
      const chart = window.__moonCsvLiteLastChart || {};
      const spec = chart.spec || buildChartSpecWithJavaScript(input, currentChartKind);
      const svg = chart.svg || renderChartSvgFromSpec(spec);
      html = `<!doctype html><html><head><meta charset="utf-8"><title>CSV 图表预览</title></head><body><h1>${escapeHtml(spec.title)}</h1>${svg}<pre>${escapeHtml(JSON.stringify(spec, null, 2))}</pre></body></html>`;
    }
    const url = URL.createObjectURL(new Blob([html], { type: "text/html" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "csv-chart-preview.html";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function copyJson() {
    const text = document.getElementById("json-output").textContent;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text);
    }
  }

  function updateEngineStatus() {
    const status = document.getElementById("engine-status");
    if (!status) {
      return;
    }
    const engine = getMoonBitEngine();
    if (engine) {
      status.textContent = `MoonBit 引擎已启用：${engine.engineName()}`;
      status.classList.add("ready");
      status.classList.remove("fallback");
    } else {
      status.textContent = "MoonBit 引擎未加载，使用 JS 备用审计";
      status.classList.add("fallback");
      status.classList.remove("ready");
    }
  }

  function setup() {
    updateEngineStatus();
    document.getElementById("run-audit").addEventListener("click", runAudit);
    document.getElementById("csv-input").addEventListener("input", runAudit);
    document.getElementById("csv-file").addEventListener("change", handleFileUpload);
    document.getElementById("copy-json").addEventListener("click", copyJson);
    document.getElementById("download-html").addEventListener("click", downloadHtml);
    document.getElementById("download-chart-html").addEventListener("click", downloadChartHtml);
    for (const button of document.querySelectorAll(".chart-kind-button")) {
      button.addEventListener("click", () => {
        currentChartKind = button.dataset.chartKind || "bar";
        for (const item of document.querySelectorAll(".chart-kind-button")) {
          item.classList.toggle("active", item === button);
        }
        runAudit();
      });
    }
    for (const button of document.querySelectorAll(".sample-button")) {
      button.addEventListener("click", () => setSample(button.dataset.sample));
    }

    const params = new URLSearchParams(window.location.search);
    setSample(params.get("sample") || "quality");
  }

  window.MoonCsvLitePlayground = {
    auditCsv,
    auditCsvWithJavaScript,
    auditCsvWithMoonBit,
    buildChartSpecWithJavaScript,
    getMoonBitEngine,
    loadCsvText,
    parseCsv,
    renderChart,
    sniffDialect
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup);
  } else {
    setup();
  }
}());
