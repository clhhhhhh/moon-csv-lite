$ErrorActionPreference = "Stop"

$root = Resolve-Path (Join-Path $PSScriptRoot "..")

$moonPath = Join-Path $env:USERPROFILE ".moon\bin"
if (Test-Path $moonPath) {
  $env:Path = [Environment]::GetEnvironmentVariable("Path", "Machine") + ";" +
    [Environment]::GetEnvironmentVariable("Path", "User") + ";" +
    $moonPath
}

function Invoke-Capture {
  param(
    [Parameter(Mandatory = $true)][string] $Name,
    [Parameter(Mandatory = $true)][scriptblock] $Command
  )
  Write-Host "==> $Name"
  $output = & $Command 2>&1 | Out-String
  $output.TrimEnd()
  if ($LASTEXITCODE -ne 0) {
    throw "$Name failed with exit code $LASTEXITCODE"
  }
}

Push-Location $root
try {
  Write-Host "# moon-csv-lite status"
  Write-Host ""

  $mbtFiles = Get-ChildItem -Recurse -File -Include *.mbt |
    Where-Object { $_.FullName -notmatch "\\_build\\" }
  $mbtLines = ($mbtFiles | ForEach-Object {
      (Get-Content -LiteralPath $_.FullName | Measure-Object -Line).Lines
    } | Measure-Object -Sum).Sum
  Write-Host "MoonBit LOC: $mbtLines"
  Write-Host "MoonBit files: $($mbtFiles.Count)"
  Write-Host ""

  Invoke-Capture "moon version" { moon version }
  Write-Host ""
  Invoke-Capture "moon test" { moon test }
  Write-Host ""
  Invoke-Capture "fixture smoke tests" { .\scripts\test-fixtures.ps1 }
  Write-Host ""

  Write-Host "==> mooncakes account"
  moon whoami
  Write-Host ""

  Write-Host "==> git status"
  git status --short --branch
} finally {
  Pop-Location
}
