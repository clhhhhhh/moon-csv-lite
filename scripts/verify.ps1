$ErrorActionPreference = "Stop"

. (Join-Path $PSScriptRoot "common.ps1")
Add-MoonBinToPath

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$scriptsDir = Join-Path $root "scripts"
$fixturesDir = Join-Path $root "fixtures"

function Invoke-Step {
  param(
    [Parameter(Mandatory = $true)]
    [string] $Name,
    [Parameter(Mandatory = $true)]
    [scriptblock] $Command
  )

  Write-Host "==> $Name"
  & $Command
  if ($LASTEXITCODE -ne 0) {
    throw "$Name failed with exit code $LASTEXITCODE"
  }
}

Invoke-Step "format check" { moon fmt --check }
Invoke-Step "check" { moon check }
Invoke-Step "test" { moon test }
Invoke-Step "main demo" { moon run cmd/main }
Invoke-Step "basic example" { moon run examples/basic }
Invoke-Step "data audit example" { moon run examples/data-audit }
Invoke-Step "quality report example" { moon run examples/quality-report }
Invoke-Step "RF measurement example" { moon run examples/rf-measurement }
Invoke-Step "csvlite audit CLI" { moon run cmd/csvlite -- audit "name,age\nAlice,18\nBob," }
Invoke-Step "csvlite audit html CLI" { moon run cmd/csvlite -- audit-html "name,age\nAlice,18" }
Invoke-Step "csvlite audit json CLI" { moon run cmd/csvlite -- audit-json "name,age\nAlice,18\nBob," }
Invoke-Step "csvlite chart json CLI" { moon run cmd/csvlite -- chart-json "team,score\nA,10\nB,20\nA,15" }
Invoke-Step "csvlite chart svg CLI" { moon run cmd/csvlite -- chart-svg "day,revenue\nMon,10\nTue,20" line day revenue }
Invoke-Step "csvlite chart html CLI" { moon run cmd/csvlite -- chart-html "city,status\nShenzhen,ok\nShanghai,ok\nShenzhen,retry" }
Invoke-Step "csvlite sniff CLI" { moon run cmd/csvlite -- sniff "name;age\nAlice;18" }
Invoke-Step "csvlite schema CLI" { moon run cmd/csvlite -- schema "name,age\nAlice,18\nBob,20" }
Invoke-Step "csvlite score CLI" { moon run cmd/csvlite -- score "name,age\nAlice,18\nBob," }
Invoke-Step "csvlite drift CLI" { moon run cmd/csvlite -- drift "name,age\nAlice,18\nBob,20" "name,age\nAlice,18\nBob," }
Invoke-Step "csvlite drift json CLI" { moon run cmd/csvlite -- drift-json "name,age\nAlice,18\nBob,20" "name,age\nAlice,18\nBob," }
Invoke-Step "csvlite gate CLI" { moon run cmd/csvlite -- gate "name,age\nAlice,18\nBob,20" "name,age\nAlice,18\nBob," }
Invoke-Step "csvlite gate json CLI" { moon run cmd/csvlite -- gate-json "name,age\nAlice,18\nBob,20" "name,age\nAlice,18\nBob," }
Invoke-Step "csvlite infer contract CLI" { moon run cmd/csvlite -- infer-contract "id,amount,paid\nA,10,true\nB,20,false" }
Invoke-Step "csvlite contract CLI" { moon run cmd/csvlite -- contract "order_id,region,amount,paid\nSO-1001,east,120.5,true\nSO-1002,west,88.0,false\nSO-1003,east,130.0,true" "rule,column,value,extra\nname,*,sales-contract,\nmin_score,*,95,\nmax_parse_issues,*,0\nmax_quality_issues,*,0\nrequired,order_id,,\ntype,amount,float,required\nmin,amount,0,\nallowed,region,east|west,required\nunique,order_id,," }
Invoke-Step "csvlite contract json CLI" { moon run cmd/csvlite -- contract-json "order_id,region,amount,paid\nSO-1001,east,120.5,true\nSO-1002,west,88.0,false\nSO-1003,east,130.0,true" "rule,column,value,extra\nname,*,sales-contract,\nmin_score,*,95,\nmax_parse_issues,*,0\nmax_quality_issues,*,0\nrequired,order_id,,\ntype,amount,float,required\nmin,amount,0,\nallowed,region,east|west,required\nunique,order_id,," }
Invoke-Step "csvlite data passport CLI" { moon run cmd/csvlite -- passport "order_id,region,amount,paid\nSO-1001,east,120.5,true\nSO-1002,west,88.0,false\nSO-1003,east,130.0,true" sales-dataset }
Invoke-Step "csvlite data passport json CLI" { moon run cmd/csvlite -- passport-json "order_id,region,amount,paid\nSO-1001,east,120.5,true\nSO-1002,west,88.0,false\nSO-1003,east,130.0,true" sales-dataset }
Invoke-Step "csvlite markdown CLI" { moon run cmd/csvlite -- markdown "name,age\nAlice,18" }
Invoke-Step "csvlite group-sum CLI" { moon run cmd/csvlite -- group-sum "team,score\nA,10\nB,20\nA,15" team score }
Invoke-Step "csvlite check CLI" { moon run cmd/csvlite -- check "name,age\nAlice,18,extra" }
Invoke-Step "csvlite file audit wrapper" {
  & (Join-Path $scriptsDir "audit-file.ps1") (Join-Path $fixturesDir "quality-issues.csv")
}
Invoke-Step "fixture smoke tests" { & (Join-Path $scriptsDir "test-fixtures.ps1") }
Invoke-Step "generate example reports" { & (Join-Path $scriptsDir "generate-example-reports.ps1") }
Invoke-Step "build playground moonbit engine" { & (Join-Path $scriptsDir "build-playground-engine.ps1") }
Invoke-Step "playground check" { & (Join-Path $scriptsDir "check-playground.ps1") }
Invoke-Step "package list" { moon package --list }
