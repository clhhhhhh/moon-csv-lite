$ErrorActionPreference = "Stop"

. (Join-Path $PSScriptRoot "common.ps1")
Add-MoonBinToPath

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$examplesDir = Join-Path (Join-Path $root "docs") "examples"

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

function Write-Report {
  param(
    [Parameter(Mandatory = $true)][string] $Path,
    [Parameter(Mandatory = $true)][string] $Content
  )
  [System.IO.File]::WriteAllText($Path, $Content + [Environment]::NewLine)
}

New-Item -ItemType Directory -Force -Path $examplesDir | Out-Null

Push-Location $root
try {
  Write-Report (Join-Path $examplesDir "people-audit.md") (
    Invoke-Csvlite @("audit", (Read-Fixture "people-clean.csv"))
  )
  Write-Report (Join-Path $examplesDir "missing-audit.md") (
    Invoke-Csvlite @("audit", (Read-Fixture "people-missing.csv"))
  )
  Write-Report (Join-Path $examplesDir "bad-width-audit.md") (
    Invoke-Csvlite @("audit", (Read-Fixture "bad-width.csv"))
  )
  Write-Report (Join-Path $examplesDir "quality-issues-audit.md") (
    Invoke-Csvlite @("audit", (Read-Fixture "quality-issues.csv"))
  )
  Write-Report (Join-Path $examplesDir "quality-issues-audit.json") (
    Invoke-Csvlite @("audit-json", (Read-Fixture "quality-issues.csv"))
  )
  Write-Report (Join-Path $examplesDir "people-drift.md") (
    Invoke-Csvlite @("drift", (Read-Fixture "people-clean.csv"), (Read-Fixture "people-missing.csv"))
  )
  Write-Report (Join-Path $examplesDir "people-drift.json") (
    Invoke-Csvlite @("drift-json", (Read-Fixture "people-clean.csv"), (Read-Fixture "people-missing.csv"))
  )
  Write-Report (Join-Path $examplesDir "people-gate.md") (
    Invoke-Csvlite @("gate", (Read-Fixture "people-clean.csv"), (Read-Fixture "people-missing.csv"))
  )
  Write-Report (Join-Path $examplesDir "people-gate.json") (
    Invoke-Csvlite @("gate-json", (Read-Fixture "people-clean.csv"), (Read-Fixture "people-missing.csv"))
  )
  Write-Report (Join-Path $examplesDir "sales-audit.md") (
    Invoke-Csvlite @("audit", (Read-Fixture "sales-semicolon.csv"))
  )
  Write-Report (Join-Path $examplesDir "sales-chart.json") (
    Invoke-Csvlite @("chart-json", (Read-Fixture "sales-semicolon.csv"))
  )
  Write-Report (Join-Path $examplesDir "sales-chart.svg") (
    Invoke-Csvlite @("chart-svg", (Read-Fixture "sales-semicolon.csv"))
  )
  Write-Report (Join-Path $examplesDir "sales-chart.html") (
    Invoke-Csvlite @("chart-html", (Read-Fixture "sales-semicolon.csv"))
  )
  Write-Report (Join-Path $examplesDir "sales-contract.md") (
    Invoke-Csvlite @("contract", (Read-Fixture "sales-semicolon.csv"), (Read-Fixture "sales-contract.csv"))
  )
  Write-Report (Join-Path $examplesDir "sales-contract.json") (
    Invoke-Csvlite @("contract-json", (Read-Fixture "sales-semicolon.csv"), (Read-Fixture "sales-contract.csv"))
  )
  Write-Report (Join-Path $examplesDir "sales-passport.md") (
    Invoke-Csvlite @("passport", (Read-Fixture "sales-semicolon.csv"), "sales-semicolon")
  )
  Write-Report (Join-Path $examplesDir "sales-passport.json") (
    Invoke-Csvlite @("passport-json", (Read-Fixture "sales-semicolon.csv"), "sales-semicolon")
  )
  Write-Report (Join-Path $examplesDir "sales-inferred-contract.csv") (
    Invoke-Csvlite @("infer-contract", (Read-Fixture "sales-semicolon.csv"))
  )
  Write-Report (Join-Path $examplesDir "html-audit.html") (
    Invoke-Csvlite @("audit-html", (Read-Fixture "html-sensitive.csv"))
  )
} finally {
  Pop-Location
}
