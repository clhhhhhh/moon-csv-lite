# moon-csv-lite 项目申报书

## 基本信息

- 项目名称：moon-csv-lite：MoonBit CSV 数据质量工程工具包
- 参赛者：clhhhhhh
- 联系方式：18777223904@163.com
- GitHub 仓库链接：https://github.com/clhhhhhh/moon-csv-lite
- Gitlink 仓库链接：https://www.gitlink.org.cn/clhhhhh/moon-csv-lite
- Mooncakes 包链接：https://mooncakes.io/docs/clhhhhh/moon-csv-lite
- 项目方向：应用生态 / 工程基础设施 / 面向特定格式的数据质量工具
- 是否为移植项目：否，原创项目；参考成熟 CSV、数据质量和 CI 数据校验工具的通用设计思路
- 开源许可证：MIT License

## 项目简介

moon-csv-lite 是一个以 MoonBit 为主要实现语言的 CSV 数据质量工程工具包。它不只提供 CSV 解析和导出，还围绕“CSV 作为可发布数据资产”提供 schema 推断、质量评分、质量问题检测、数据漂移报告、质量门禁、质量契约、数据护照、图表预览、命令行工具和浏览器 Playground。项目适用于配置表、产品目录、实验/测量数据、日志导出、游戏数据表、教学数据集和 CI 中需要验收的 CSV 文件。

项目主动避开只做 CSV parser、DataFrame 或通用图表库的方向，重点补足 MoonBit 生态中“CSV 数据审计、契约化验收、可视化预览和 CI 质量门禁”这一类工程化能力。

## 核心功能范围

- 提供 CSV parse/stringify，支持空字段、引号字段、转义引号、引号内逗号/换行、LF/CRLF、自定义分隔符、TSV、分号和竖线分隔格式；
- 提供自动 dialect sniffing、checked parse、行宽错误和未闭合引号等可恢复解析问题报告；
- 提供 header-aware table、Markdown/JSON Lines/HTML 导出、列选择、过滤、排序、清洗、去重、join、union、transpose 和 group-by 聚合；
- 提供 schema inference、required/type/range/allowed-values/unique-key 校验、列画像、缺失值统计、重复表头/空表头/全空行/全空列/重复行检测；
- 提供 0-100 数据质量评分、Markdown/HTML/JSON audit report 和面向修复的 recommendations；
- 提供 CSV Drift Report 与 CSV Quality Gate，可比较 baseline/candidate 并在 CI 中对删除列、类型变化、缺失值增加、质量分下降等情况给出 pass/fail；
- 提供 CSV Quality Contract，可从样本推断契约，也可用 CSV 规则表声明 min_score、required、type、min/max、allowed、unique 等质量规则；
- 提供 CSV Data Passport，将数据集名称、dialect、行列规模、稳定形状指纹、质量分、schema 摘要、列元数据和建议打包成可审阅的 Markdown/JSON 交付物；
- 提供 `cmd/csvlite` CLI、`scripts/audit-file.ps1` 大文件安全抽样审计入口、fixture 测试集、可重新生成的示例报告和 MoonBit JS backend 驱动的中文浏览器 Playground；
- 提供图表预览能力，可从 CSV 自动生成 chart JSON spec、SVG 和 HTML，支持 bar、line、pie 风格和分类计数 fallback。

## 参考说明

本项目不是移植项目，没有直接复制或改写某个已有仓库。相关方向上，MoonBit 生态已有 `NyaCSV`、`csv_parser`、`MoonFrame`、`mooncharts` 等解析、表格和图表项目。moon-csv-lite 的独立贡献是围绕 CSV 数据资产形成完整质量工程工作流：审计报告、数据护照、质量契约、漂移检测、质量门禁、CLI、fixtures、CI、示例文档和浏览器预览。

## 交付与验收计划

当前项目已完成 MoonBit 主实现、183 个测试、README、API Guide、Cookbook、Architecture、Roadmap、MIT License、GitHub Actions CI、可运行示例、fixture 测试集、CLI、文件审计脚本、浏览器 Playground 和一页申报 PDF。推荐验收命令为：

```powershell
moon check
moon test
moon run cmd/csvlite -- passport "order_id,region,amount\nSO-1,east,10\nSO-2,west,20" sales-dataset
moon run cmd/csvlite -- contract-json "order_id,region,amount\nSO-1,east,10\nSO-2,west,20" "rule,column,value,extra\nname,*,sales-contract,\nmin_score,*,95,\nrequired,order_id,,\ntype,amount,float,required\nmin,amount,0,\nunique,order_id,,"
.\scripts\verify.ps1
```

当前已完成 GitHub 与 Gitlink 双仓库同步、mooncakes.io 发布，仓库历史整理为 19 个真实有效提交，每个提交对应明确功能、测试、文档或工程化改进。后续将按验收要求补充版本 Release。
