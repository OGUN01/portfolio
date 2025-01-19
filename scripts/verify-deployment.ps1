# Vercel Deployment Verification Script

Write-Host "🔍 Starting Vercel deployment verification..." -ForegroundColor Cyan

# Check if required dependencies are installed
Write-Host "`n📦 Checking dependencies..." -ForegroundColor Yellow
$packageJson = Get-Content "package.json" | ConvertFrom-Json
$requiredDeps = @(
    "next",
    "react",
    "react-dom",
    "typescript",
    "framer-motion",
    "next-themes"
)

$missingDeps = @()
foreach ($dep in $requiredDeps) {
    if (-not $packageJson.dependencies.$dep) {
        $missingDeps += $dep
    }
}

if ($missingDeps.Count -gt 0) {
    Write-Host "❌ Missing required dependencies: $($missingDeps -join ', ')" -ForegroundColor Red
    exit 1
}

# Check if next.config.js exists and has required configuration
Write-Host "`n⚙️ Checking Next.js configuration..." -ForegroundColor Yellow
if (-not (Test-Path "next.config.js")) {
    Write-Host "❌ next.config.js is missing" -ForegroundColor Red
    exit 1
}

# Check if TypeScript configuration is valid
Write-Host "`n📝 Checking TypeScript configuration..." -ForegroundColor Yellow
if (-not (Test-Path "tsconfig.json")) {
    Write-Host "❌ tsconfig.json is missing" -ForegroundColor Red
    exit 1
}

# Run type checking
Write-Host "`n🔍 Running TypeScript type check..." -ForegroundColor Yellow
npm run lint
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ TypeScript check failed" -ForegroundColor Red
    exit 1
}

# Check for required public assets
Write-Host "`n🖼️ Checking public assets..." -ForegroundColor Yellow
$requiredAssetDirs = @(
    "public/testimonials"
)

foreach ($dir in $requiredAssetDirs) {
    if (-not (Test-Path $dir)) {
        Write-Host "❌ Missing required asset directory: $dir" -ForegroundColor Red
        exit 1
    }
}

# Check for environment variables
Write-Host "`n🔐 Checking environment configuration..." -ForegroundColor Yellow
if (-not (Test-Path ".env")) {
    Write-Host "⚠️ No .env file found. Make sure to configure environment variables in Vercel dashboard" -ForegroundColor Yellow
}

# Test production build
Write-Host "`n🏗️ Testing production build..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Production build failed" -ForegroundColor Red
    exit 1
}

Write-Host "`n✅ All checks passed! Project is ready for Vercel deployment" -ForegroundColor Green
Write-Host "`nNext steps:"
Write-Host "1. Push your code to GitHub"
Write-Host "2. Import your repository in Vercel"
Write-Host "3. Configure your deployment settings"
Write-Host "4. Deploy!"
