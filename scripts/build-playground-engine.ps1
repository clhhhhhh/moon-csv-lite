$ErrorActionPreference = "Stop"

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$source = Join-Path $root "_build\js\debug\build\web\web.js"
$target = Join-Path $root "playground\moon-csv-lite-engine.js"
$oldTargetMap = Join-Path $root "playground\moon-csv-lite-engine.js.map"

Push-Location $root
try {
  moon build --target js
} finally {
  Pop-Location
}

if (-not (Test-Path $source)) {
  throw "MoonBit playground engine was not generated: $source"
}

$content = Get-Content -LiteralPath $source -Raw -Encoding UTF8
$content = $content.Replace("//# sourceMappingURL=web.js.map", "")
Set-Content -LiteralPath $target -Value $content -Encoding UTF8

if (Test-Path $oldTargetMap) {
  Remove-Item -LiteralPath $oldTargetMap
}

Write-Host "Playground MoonBit engine built: $target"
