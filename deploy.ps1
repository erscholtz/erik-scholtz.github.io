#!/usr/bin/env pwsh
$ErrorActionPreference = 'Stop'
$previousJekyllEnvironment = $env:JEKYLL_ENV
Push-Location $PSScriptRoot
try {
    $env:JEKYLL_ENV = 'production'
    bundle exec jekyll build --trace
    if ($LASTEXITCODE -ne 0) { throw 'Jekyll build failed. Run bundle install and try again.' }
    Write-Host 'Site built in _site/. Preview with: bundle exec jekyll serve'
} finally {
    $env:JEKYLL_ENV = $previousJekyllEnvironment
    Pop-Location
}
