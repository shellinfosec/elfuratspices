$ErrorActionPreference = "Stop"

$faviconsDir = "d:\dev\Elfurat Spices\lovable\public\favicons"
If (!(Test-Path $faviconsDir)) {
    New-Item -ItemType Directory -Force -Path $faviconsDir | Out-Null
}

$urls = @(
    "https://realfavicongenerator.net/files/49343fd7-45cd-4ff8-89c9-d21ca98ca5e2/favicon.svg",
    "https://realfavicongenerator.net/files/49343fd7-45cd-4ff8-89c9-d21ca98ca5e2/favicon-96x96.png",
    "https://realfavicongenerator.net/files/49343fd7-45cd-4ff8-89c9-d21ca98ca5e2/favicon.ico",
    "https://realfavicongenerator.net/files/49343fd7-45cd-4ff8-89c9-d21ca98ca5e2/apple-touch-icon.png",
    "https://realfavicongenerator.net/files/49343fd7-45cd-4ff8-89c9-d21ca98ca5e2/web-app-manifest-192x192.png",
    "https://realfavicongenerator.net/files/49343fd7-45cd-4ff8-89c9-d21ca98ca5e2/web-app-manifest-512x512.png",
    "https://realfavicongenerator.net/files/49343fd7-45cd-4ff8-89c9-d21ca98ca5e2/site.webmanifest"
)

foreach ($url in $urls) {
    $filename = $url.Split('/')[-1]
    $dest = Join-Path $faviconsDir $filename
    Write-Host "Downloading $filename..."
    Invoke-WebRequest -Uri $url -OutFile $dest
}

Write-Host "Done downloading favicons."
