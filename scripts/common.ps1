$ErrorActionPreference = "Stop"

function Add-MoonBinToPath {
  $homeDir = $env:USERPROFILE
  if ([string]::IsNullOrWhiteSpace($homeDir)) {
    $homeDir = $env:HOME
  }
  if ([string]::IsNullOrWhiteSpace($homeDir)) {
    return
  }

  $moonPath = Join-Path (Join-Path $homeDir ".moon") "bin"
  if (Test-Path $moonPath) {
    $env:PATH = $moonPath + [System.IO.Path]::PathSeparator + $env:PATH
  }
}
