$ErrorActionPreference = "Stop"

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$pagePath = (Resolve-Path (Join-Path $root "playground\index.html")).Path
$enginePath = Join-Path $root "playground\moon-csv-lite-engine.js"
$page = [System.Uri]::new($pagePath).AbsoluteUri + "?sample=quality"

if (-not (Test-Path $enginePath)) {
  throw "MoonBit playground engine bundle is missing; run scripts\build-playground-engine.ps1"
}

$engineText = Get-Content -LiteralPath $enginePath -Raw -Encoding UTF8
if (-not $engineText.Contains('auditQualityGateJson')) {
  throw "MoonBit playground engine bundle did not expose auditQualityGateJson"
}
if (-not $engineText.Contains('qualityContractInferCsv')) {
  throw "MoonBit playground engine bundle did not expose qualityContractInferCsv"
}
if (-not $engineText.Contains('chartCsvSvg')) {
  throw "MoonBit playground engine bundle did not expose chartCsvSvg"
}
if (-not $engineText.Contains('csvDataPassportJson')) {
  throw "MoonBit playground engine bundle did not expose csvDataPassportJson"
}

function Resolve-Browser {
  $knownPaths = @()
  if ($env:OS -eq "Windows_NT") {
    $knownPaths += "C:\Program Files\Google\Chrome\Application\chrome.exe"
    $knownPaths += "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
    $knownPaths += "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
  } elseif ($IsMacOS) {
    $knownPaths += "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    $knownPaths += "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge"
  }

  foreach ($path in $knownPaths) {
    if (Test-Path $path) {
      return $path
    }
  }

  foreach ($name in @("google-chrome", "google-chrome-stable", "chromium", "chromium-browser", "microsoft-edge", "msedge")) {
    $command = Get-Command $name -ErrorAction SilentlyContinue
    if ($null -ne $command) {
      return $command.Source
    }
  }

  throw "Chrome, Chromium, or Edge was not found"
}

$browser = Resolve-Browser
$text = & $browser --headless --disable-gpu --no-sandbox --virtual-time-budget=2500 --dump-dom $page 2>&1 |
  Out-String

if (-not $text.Contains('lang="zh-CN"')) {
  throw "playground DOM did not contain the zh-CN document marker"
}
if (-not $text.Contains('id="csv-file"')) {
  throw "playground DOM did not contain the file upload control"
}
if (-not $text.Contains('id="score-body"')) {
  throw "playground DOM did not contain the score panel"
}
if (-not $text.Contains('id="chart-svg-output"')) {
  throw "playground DOM did not contain the chart preview panel"
}
if (-not $text.Contains('"quality_issue_count": 5')) {
  throw "playground DOM did not contain expected JSON report output"
}
if (-not $text.Contains('"score": 67')) {
  throw "playground DOM did not contain expected quality score output"
}
if (-not $text.Contains('MoonBit JS backend')) {
  throw "playground DOM did not show the MoonBit engine status"
}
if (-not $text.Contains("`"engine`": `"MoonBit JS backend`"")) {
  throw "playground JSON output did not come from the MoonBit engine"
}
if (-not $text.Contains('bar / sum / 0 point(s)')) {
  throw "playground chart preview did not come from the MoonBit chart engine"
}
if (-not $text.Contains('<svg xmlns="http://www.w3.org/2000/svg"')) {
  throw "playground DOM did not contain rendered SVG chart output"
}

Write-Host "playground check passed"
