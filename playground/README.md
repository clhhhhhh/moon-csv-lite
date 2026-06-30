# moon-csv-lite 可视化工作台

这个静态浏览器页面用于可视化审计 CSV-like 文本。用户可以直接粘贴
CSV/TSV/分号分隔文本，也可以上传本地 `.csv`、`.tsv` 或 `.txt` 文件，
然后查看质量评分、质量问题、Schema 推断、缺失值、列画像、图表预览、
预览数据和 JSON 报告。

页面默认调用 MoonBit JavaScript backend 生成的
`moon-csv-lite-engine.js`，让浏览器里的审计、评分、质量门禁、质量契约、
图表预览和导出结果来自 MoonBit 核心逻辑。

生成 MoonBit 浏览器引擎：

```powershell
.\scripts\build-playground-engine.ps1
```

直接打开：

```powershell
start .\playground\index.html
```

或本地起一个静态服务：

```powershell
python -m http.server 8080
```

然后打开：

```text
http://localhost:8080/playground/
```

Playground 对应核心审计流程：分隔符识别、解析问题报告、表格质量问题、
0-100 质量评分、Schema 推断、缺失值摘要、列画像、图表预览、处理建议和
JSON 输出。页面保留 JavaScript fallback，但正常路径会显示
`MoonBit 引擎已启用`，并由 MoonBit 生成的 `auditCsvJson`、
`auditCsvHtml`、`auditDriftJson`、`auditQualityGateJson`、
`qualityContractInferCsv`、`auditQualityContractJson`、`chartCsvJson`、
`chartCsvSvg` 和 `chartCsvHtml` 函数驱动。
