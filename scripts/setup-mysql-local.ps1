$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
$mysql = "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe"
$envPath = Join-Path $projectRoot "backend\.env"

if (-not (Test-Path -LiteralPath $mysql)) {
    Write-Host "MySQL client was not found at: $mysql" -ForegroundColor Red
    Read-Host "Press Enter to close"
    exit 1
}

Write-Host "Image Prompt Generator - MySQL Setup" -ForegroundColor Cyan
Write-Host "Enter the MySQL root password. The password will not be displayed." -ForegroundColor Gray
$securePassword = Read-Host "MySQL root password" -AsSecureString
$pointer = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($securePassword)

try {
    $rootPassword = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($pointer)
    $alphabet = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789"
    $appPassword = -join (1..32 | ForEach-Object { $alphabet[(Get-Random -Maximum $alphabet.Length)] })
    $secretKey = -join (1..64 | ForEach-Object { $alphabet[(Get-Random -Maximum $alphabet.Length)] })

    $sql = @"
CREATE DATABASE IF NOT EXISTS prompt_generator CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER IF NOT EXISTS 'prompt_user'@'localhost' IDENTIFIED BY '$appPassword';
ALTER USER 'prompt_user'@'localhost' IDENTIFIED BY '$appPassword';
GRANT ALL PRIVILEGES ON prompt_generator.* TO 'prompt_user'@'localhost';
CREATE USER IF NOT EXISTS 'prompt_user'@'127.0.0.1' IDENTIFIED BY '$appPassword';
ALTER USER 'prompt_user'@'127.0.0.1' IDENTIFIED BY '$appPassword';
GRANT ALL PRIVILEGES ON prompt_generator.* TO 'prompt_user'@'127.0.0.1';
FLUSH PRIVILEGES;
"@

    $env:MYSQL_PWD = $rootPassword
    & $mysql --protocol=tcp -h 127.0.0.1 -P 3306 -u root --execute=$sql
    if ($LASTEXITCODE -ne 0) {
        throw "MySQL rejected the password or database setup command."
    }

    $envFile = @"
DJANGO_SECRET_KEY=$secretKey
DJANGO_DEBUG=1
DJANGO_ALLOWED_HOSTS=127.0.0.1,localhost
FRONTEND_URL=http://127.0.0.1:5174
CORS_ALLOWED_ORIGINS=http://127.0.0.1:5174
CSRF_TRUSTED_ORIGINS=http://127.0.0.1:5174

MYSQL_DATABASE=prompt_generator
MYSQL_USER=prompt_user
MYSQL_PASSWORD=$appPassword
MYSQL_HOST=127.0.0.1
MYSQL_PORT=3306

EMAIL_BACKEND=django.core.mail.backends.console.EmailBackend
EMAIL_HOST=
EMAIL_PORT=587
EMAIL_HOST_USER=
EMAIL_HOST_PASSWORD=
EMAIL_USE_TLS=1
DEFAULT_FROM_EMAIL=no-reply@example.com
DJOSER_DOMAIN=127.0.0.1:5174
SITE_NAME=Image Prompt Generator
"@
    Set-Content -LiteralPath $envPath -Value $envFile -Encoding utf8

    Write-Host "" 
    Write-Host "Setup completed successfully." -ForegroundColor Green
    Write-Host "Database: prompt_generator" -ForegroundColor White
    Write-Host "Project user: prompt_user" -ForegroundColor White
    Write-Host "Configuration written to backend\.env" -ForegroundColor White
} catch {
    Write-Host "" 
    Write-Host $_.Exception.Message -ForegroundColor Red
    Write-Host "Please verify the MySQL root password and try again." -ForegroundColor Yellow
    exit 1
} finally {
    Remove-Item Env:MYSQL_PWD -ErrorAction SilentlyContinue
    if ($pointer -ne [IntPtr]::Zero) {
        [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($pointer)
    }
}

Read-Host "Press Enter to close"
