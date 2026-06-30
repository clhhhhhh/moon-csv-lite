$ErrorActionPreference = "Stop"

. (Join-Path $PSScriptRoot "common.ps1")
Add-MoonBinToPath

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$scriptsDir = Join-Path $root "scripts"
$fixturesDir = Join-Path $root "fixtures"

function Write-Title {
  param([Parameter(Mandatory = $true)][string] $Text)
  Write-Host ""
  Write-Host "============================================================" -ForegroundColor DarkCyan
  Write-Host $Text -ForegroundColor Cyan
  Write-Host "============================================================" -ForegroundColor DarkCyan
}

function Invoke-DemoStep {
  param(
    [Parameter(Mandatory = $true)][string] $Name,
    [Parameter(Mandatory = $true)][scriptblock] $Command
  )

  Write-Host ""
  Write-Host ">>> $Name" -ForegroundColor Yellow
  Write-Host ""
  & $Command
  if ($LASTEXITCODE -ne 0) {
    throw "$Name failed with exit code $LASTEXITCODE"
  }
  Start-Sleep -Milliseconds 500
}

Push-Location $root
try {
  Write-Title "moon-csv-lite live demo"
  Write-Host "Workspace: $root"

  Invoke-DemoStep "MoonBit version" {
    moon version
  }

  Invoke-DemoStep "Run test suite" {
    moon test
  }

  Invoke-DemoStep "Human-readable audit report with quality issues" {
    moon run cmd/csvlite -- audit "name,name,\nAlice,18,\nAlice,18,\n,,"
  }

  Invoke-DemoStep "Machine-readable audit JSON" {
    moon run cmd/csvlite -- audit-json "name,name,\nAlice,18,\nAlice,18,\n,,"
  }

  Invoke-DemoStep "Audit a CSV file path" {
    & (Join-Path $scriptsDir "audit-file.ps1") (Join-Path $fixturesDir "quality-issues.csv")
  }

  Invoke-DemoStep "Dialect detection" {
    moon run cmd/csvlite -- sniff "order_id;amount;paid\nSO-1001;120.5;true"
  }

  Invoke-DemoStep "Data audit example package" {
    moon run examples/data-audit
  }

  Invoke-DemoStep "Fixture smoke tests" {
    & (Join-Path $scriptsDir "test-fixtures.ps1")
  }

  Write-Title "demo complete"
  Write-Host "Everything above ran from the local moon-csv-lite workspace." -ForegroundColor Green
} finally {
  Pop-Location
}
