param(
  [Parameter(Mandatory = $true, Position = 0)]
  [string] $Path,

  [ValidateSet("markdown", "json", "html")]
  [string] $OutputFormat = "markdown",

  [int] $MaxRows = 5000,

  [int] $MaxChars = 24000,

  [switch] $Full
)

$ErrorActionPreference = "Stop"

. (Join-Path $PSScriptRoot "common.ps1")
Add-MoonBinToPath

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$csvPath = Resolve-Path -LiteralPath $Path
$csvItem = Get-Item -LiteralPath $csvPath

function ConvertTo-CsvArgument {
  param([Parameter(Mandatory = $true)][string] $Content)
  $Content.Replace('"', '\"')
}

function Read-FullCsv {
  param(
    [Parameter(Mandatory = $true)][string] $FilePath,
    [Parameter(Mandatory = $true)][int] $Limit
  )

  $content = Get-Content -LiteralPath $FilePath -Raw
  if ($content.Length -gt $Limit) {
    throw "Full file has $($content.Length) characters, which is above the safe command limit $Limit. Run without -Full to audit a streamed sample, or lower the file size."
  }
  [pscustomobject]@{
    Content = $content
    Mode = "full"
    IncludedLines = ($content -split "`r?`n").Count
    Truncated = $false
    Reason = ""
  }
}

function Read-SampledCsv {
  param(
    [Parameter(Mandatory = $true)][string] $FilePath,
    [Parameter(Mandatory = $true)][int] $Rows,
    [Parameter(Mandatory = $true)][int] $Chars
  )

  if ($Rows -lt 1) {
    throw "MaxRows must be at least 1."
  }
  if ($Chars -lt 1000) {
    throw "MaxChars must be at least 1000."
  }

  $reader = [System.IO.StreamReader]::new(
    $FilePath,
    [System.Text.Encoding]::UTF8,
    $true
  )
  $builder = [System.Text.StringBuilder]::new()
  $includedLines = 0
  $maxLines = $Rows + 1
  $truncated = $false
  $reason = ""

  try {
    while ($true) {
      $line = $reader.ReadLine()
      if ($null -eq $line) {
        break
      }
      if ($includedLines -ge $maxLines) {
        $truncated = $true
        $reason = "row limit"
        break
      }

      $prefix = if ($builder.Length -eq 0) { "" } else { "`n" }
      $nextLength = $builder.Length + $prefix.Length + $line.Length
      if ($nextLength -gt $Chars) {
        $truncated = $true
        $reason = "character limit"
        break
      }

      [void] $builder.Append($prefix)
      [void] $builder.Append($line)
      $includedLines += 1
    }
  } finally {
    $reader.Close()
  }

  [pscustomobject]@{
    Content = $builder.ToString()
    Mode = if ($truncated) { "sample" } else { "full" }
    IncludedLines = $includedLines
    Truncated = $truncated
    Reason = $reason
  }
}

$command = switch ($OutputFormat) {
  "json" { "audit-json" }
  "html" { "audit-html" }
  default { "audit" }
}

$input = if ($Full) {
  Read-FullCsv $csvPath $MaxChars
} elseif ($csvItem.Length -le $MaxChars) {
  Read-FullCsv $csvPath $MaxChars
} else {
  Read-SampledCsv $csvPath $MaxRows $MaxChars
}

if ($input.Content.Length -eq 0) {
  throw "No CSV content was read from $csvPath."
}

[Console]::Error.WriteLine("Input file: $csvPath")
[Console]::Error.WriteLine("File size: $($csvItem.Length) bytes")
[Console]::Error.WriteLine("Audit mode: $($input.Mode)")
[Console]::Error.WriteLine("Included lines: $($input.IncludedLines)")
if ($input.Truncated) {
  [Console]::Error.WriteLine(
    "Sample note: input was truncated by $($input.Reason); results describe the sampled prefix."
  )
}
[Console]::Error.WriteLine("")

Push-Location $root
try {
  moon run cmd/csvlite -- $command (ConvertTo-CsvArgument $input.Content)
} finally {
  Pop-Location
}
