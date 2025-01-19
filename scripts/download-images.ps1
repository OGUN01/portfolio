$imageUrls = @(
    @{
        url = "https://images.unsplash.com/photo-1637858868799-7f26a0640eb6"
        filename = "business-man-1.jpg"
    },
    @{
        url = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
        filename = "tech-woman-1.jpg"
    },
    @{
        url = "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4"
        filename = "tech-man-1.jpg"
    },
    @{
        url = "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1"
        filename = "creative-woman-1.jpg"
    },
    @{
        url = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
        filename = "business-man-2.jpg"
    },
    @{
        url = "https://images.unsplash.com/photo-1598346762291-aee88549193f"
        filename = "tech-woman-2.jpg"
    }
)

$outputDir = "public\testimonials"
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir | Out-Null
}

foreach ($image in $imageUrls) {
    $outputPath = Join-Path $outputDir $image.filename
    Write-Host "Downloading $($image.url) to $outputPath"
    Invoke-WebRequest -Uri "$($image.url)?w=400&h=400&fit=crop&crop=faces" -OutFile $outputPath
}
