$ErrorActionPreference = "Stop"

. (Join-Path $PSScriptRoot "common.ps1")
Add-MoonBinToPath

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$scriptsDir = Join-Path $root "scripts"

function Read-Fixture {
  param([Parameter(Mandatory = $true)][string] $Name)
  $fixturePath = Join-Path (Join-Path $root "fixtures") $Name
  $content = Get-Content -LiteralPath $fixturePath -Raw
  $content.Replace('"', '\"')
}

function Invoke-Csvlite {
  param([Parameter(Mandatory = $true)][string[]] $Args)
  $output = & moon run cmd/csvlite -- @Args 2>&1 | Out-String
  if ($LASTEXITCODE -ne 0) {
    throw "csvlite failed with exit code $LASTEXITCODE`n$output"
  }
  $output.TrimEnd()
}

function Assert-Contains {
  param(
    [Parameter(Mandatory = $true)][string] $Name,
    [Parameter(Mandatory = $true)][string] $Text,
    [Parameter(Mandatory = $true)][string] $Needle
  )
  if (-not $Text.Contains($Needle)) {
    throw "$Name did not contain expected text: $Needle`n--- output ---`n$Text"
  }
}

function Invoke-FixtureStep {
  param(
    [Parameter(Mandatory = $true)][string] $Name,
    [Parameter(Mandatory = $true)][scriptblock] $Command
  )
  Write-Host "==> fixture: $Name"
  & $Command
}

Push-Location $root
try {
  Invoke-FixtureStep "clean audit" {
    $output = Invoke-Csvlite @("audit", (Read-Fixture "people-clean.csv"))
    Assert-Contains "clean audit" $output "- Status: ok"
    Assert-Contains "clean audit" $output "| age | integer | yes | 0/3 | 3 | 18, 20, 22 |"
    Assert-Contains "clean audit" $output "| active | boolean | yes | 0/3 | 2 | true, false |"
  }

  Invoke-FixtureStep "missing value audit" {
    $output = Invoke-Csvlite @("audit", (Read-Fixture "people-missing.csv"))
    Assert-Contains "missing value audit" $output "- Status: ok"
    Assert-Contains "missing value audit" $output "| age | 1 | 2 |"
    Assert-Contains "missing value audit" $output "| city | 1 | 2 |"
  }

  Invoke-FixtureStep "bad row audit" {
    $output = Invoke-Csvlite @("audit", (Read-Fixture "bad-width.csv"))
    Assert-Contains "bad row audit" $output "- Status: issues"
    Assert-Contains "bad row audit" $output "expected 2 fields, got 3"
  }

  Invoke-FixtureStep "quality issue audit" {
    $output = Invoke-Csvlite @("audit", (Read-Fixture "quality-issues.csv"))
    Assert-Contains "quality issue audit" $output "- Status: issues"
    Assert-Contains "quality issue audit" $output "- Quality issues: 5"
    Assert-Contains "quality issue audit" $output 'Header `name` is duplicated'
    Assert-Contains "quality issue audit" $output "Header column #3 is empty"
    Assert-Contains "quality issue audit" $output "Row 4 is empty"
    Assert-Contains "quality issue audit" $output "Row 3 duplicates row 2"
  }

  Invoke-FixtureStep "quality issue audit json" {
    $output = Invoke-Csvlite @("audit-json", (Read-Fixture "quality-issues.csv"))
    Assert-Contains "quality issue audit json" $output '"status":"issues"'
    Assert-Contains "quality issue audit json" $output '"quality_issue_count":5'
    Assert-Contains "quality issue audit json" $output '"quality_issues"'
    Assert-Contains "quality issue audit json" $output 'Header `name` is duplicated'
  }

  Invoke-FixtureStep "drift report" {
    $output = Invoke-Csvlite @("drift", (Read-Fixture "people-clean.csv"), (Read-Fixture "people-missing.csv"))
    Assert-Contains "drift report" $output "# CSV Drift Report"
    Assert-Contains "drift report" $output "Column ``age`` missing values increased from 0 to 1"
    Assert-Contains "drift report" $output "Column ``city`` missing values increased from 0 to 1"
  }

  Invoke-FixtureStep "drift json" {
    $output = Invoke-Csvlite @("drift-json", (Read-Fixture "people-clean.csv"), (Read-Fixture "people-missing.csv"))
    Assert-Contains "drift json" $output '"score_delta":-4'
    Assert-Contains "drift json" $output '"category":"missing"'
  }

  Invoke-FixtureStep "quality gate report" {
    $output = Invoke-Csvlite @("gate", (Read-Fixture "people-clean.csv"), (Read-Fixture "people-missing.csv"))
    Assert-Contains "quality gate report" $output "# CSV Quality Gate Report"
    Assert-Contains "quality gate report" $output "- Status: fail"
    Assert-Contains "quality gate report" $output "no_missing_increase"
  }

  Invoke-FixtureStep "quality gate json" {
    $output = Invoke-Csvlite @("gate-json", (Read-Fixture "people-clean.csv"), (Read-Fixture "people-missing.csv"))
    Assert-Contains "quality gate json" $output '"passed":false'
    Assert-Contains "quality gate json" $output '"rule":"no_missing_increase"'
  }

  Invoke-FixtureStep "semicolon sniff" {
    $output = Invoke-Csvlite @("sniff", (Read-Fixture "sales-semicolon.csv"))
    Assert-Contains "semicolon sniff" $output "dialect: semicolon"
    Assert-Contains "semicolon sniff" $output "columns: 4"
  }

  Invoke-FixtureStep "sales chart json" {
    $output = Invoke-Csvlite @("chart-json", (Read-Fixture "sales-semicolon.csv"))
    Assert-Contains "sales chart json" $output '"kind":"bar"'
    Assert-Contains "sales chart json" $output '"label_column":"region"'
    Assert-Contains "sales chart json" $output '"value_column":"amount"'
    Assert-Contains "sales chart json" $output '"label":"east","value":250.5'
  }

  Invoke-FixtureStep "sales quality contract" {
    $output = Invoke-Csvlite @("contract-json", (Read-Fixture "sales-semicolon.csv"), (Read-Fixture "sales-contract.csv"))
    Assert-Contains "sales quality contract" $output '"passed":true'
    Assert-Contains "sales quality contract" $output '"name":"sales-contract"'
    Assert-Contains "sales quality contract" $output '"contract_issues":0'
  }

  Invoke-FixtureStep "sales data passport" {
    $output = Invoke-Csvlite @("passport", (Read-Fixture "sales-semicolon.csv"), "sales-semicolon")
    Assert-Contains "sales data passport" $output "# CSV Data Passport"
    Assert-Contains "sales data passport" $output "- Name: sales-semicolon"
    Assert-Contains "sales data passport" $output "- Dialect: semicolon"
    Assert-Contains "sales data passport" $output "| numeric columns | 1 |"
  }

  Invoke-FixtureStep "sales data passport json" {
    $output = Invoke-Csvlite @("passport-json", (Read-Fixture "sales-semicolon.csv"), "sales-semicolon")
    Assert-Contains "sales data passport json" $output '"name":"sales-semicolon"'
    Assert-Contains "sales data passport json" $output '"dialect":"semicolon"'
    Assert-Contains "sales data passport json" $output '"numeric_columns":1'
    Assert-Contains "sales data passport json" $output '"fingerprint":"csvp-3x4-'
  }

  Invoke-FixtureStep "inferred contract" {
    $output = Invoke-Csvlite @("infer-contract", (Read-Fixture "sales-semicolon.csv"))
    Assert-Contains "inferred contract" $output 'rule,column,value,extra'
    Assert-Contains "inferred contract" $output 'type,amount,float,required'
    Assert-Contains "inferred contract" $output 'unique,order_id,,'
  }

  Invoke-FixtureStep "tsv schema" {
    $output = Invoke-Csvlite @("schema", (Read-Fixture "logs.tsv"))
    Assert-Contains "tsv schema" $output "| latency_ms | integer | yes | 0/3 | 3 | 12, 45, 9 |"
    Assert-Contains "tsv schema" $output "| status | text | yes | 0/3 | 2 | ok, retry |"
  }

  Invoke-FixtureStep "html escaping" {
    $output = Invoke-Csvlite @("audit-html", (Read-Fixture "html-sensitive.csv"))
    Assert-Contains "html escaping" $output "a&lt;b"
    Assert-Contains "html escaping" $output "hello, world"
  }

  Invoke-FixtureStep "json escaping" {
    $output = Invoke-Csvlite @("audit-json", (Read-Fixture "html-sensitive.csv"))
    Assert-Contains "json escaping" $output '"status":"ok"'
    Assert-Contains "json escaping" $output 'hello, world'
  }

  Invoke-FixtureStep "file audit wrapper" {
    $fixturePath = Join-Path (Join-Path $root "fixtures") "quality-issues.csv"
    $output = & (Join-Path $scriptsDir "audit-file.ps1") $fixturePath 2>&1 | Out-String
    if ($LASTEXITCODE -ne 0) {
      throw "file audit wrapper failed with exit code $LASTEXITCODE`n$output"
    }
    Assert-Contains "file audit wrapper" $output "- Quality issues: 5"
  }

  Invoke-FixtureStep "sampled file audit wrapper" {
    $tempPath = Join-Path ([System.IO.Path]::GetTempPath()) "moon-csv-lite-sampled-fixture.csv"
    $rows = New-Object System.Collections.Generic.List[string]
    $rows.Add("id,amount,active")
    for ($i = 1; $i -le 2000; $i++) {
      $rows.Add("$i,$($i * 1.5),true")
    }
    [System.IO.File]::WriteAllLines($tempPath, $rows)
    $output = & (Join-Path $scriptsDir "audit-file.ps1") $tempPath -MaxRows 3 -MaxChars 1000 2>&1 |
      Out-String
    if ($LASTEXITCODE -ne 0) {
      throw "sampled file audit wrapper failed with exit code $LASTEXITCODE`n$output"
    }
    Assert-Contains "sampled file audit wrapper" $output "- Rows: 3"
    Assert-Contains "sampled file audit wrapper" $output "| id | integer | yes | 0/3 | 3 | 1, 2, 3 |"
  }
} finally {
  Pop-Location
}
