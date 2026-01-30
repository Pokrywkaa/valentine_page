@echo off
REM Valentine's Day Page - GitHub Pages Deployment Helper (Windows)
REM This script helps deploy the project to GitHub Pages

setlocal enabledelayedexpansion

echo.
echo ============================================================
echo    Valentine's Day Page - GitHub Pages Deployment
echo ============================================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo Error: Git is not installed. Please install Git first.
    echo Download from: https://git-scm.com/
    pause
    exit /b 1
)

REM Check if we're in a git repository
if not exist .git (
    echo Initializing git repository...
    call git init
    echo Git repository initialized
)

echo.
echo Current Git Status:
call git status

echo.
echo Remote repositories:
call git remote -v
if errorlevel 1 (
    echo (No remotes configured yet)
)

echo.
echo ============================================================
echo Deployment Steps:
echo ============================================================
echo.

REM Step 1: Ensure on main branch
echo 1. Switching to main branch...
call git branch -M main
echo    OK - On main branch

REM Step 2: Check if remote exists
echo.
echo 2. Checking GitHub remote...
call git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo    WARNING: No origin remote found
    echo.
    echo    Please create a repository on GitHub at:
    echo    https://github.com/new
    echo.
    echo    Then run:
    echo    git remote add origin https://github.com/YOUR_USERNAME/valentine_page.git
    echo.
    set /p REMOTE_CONFIGURED="Have you added the remote? (y/n): "
    if /i not "!REMOTE_CONFIGURED!"=="y" (
        echo Skipping push...
        exit /b 0
    )
) else (
    echo    OK - GitHub remote already configured
)

REM Step 3: Stage all changes
echo.
echo 3. Staging files...
call git add .
echo    OK - Files staged

REM Step 4: Check if there are changes to commit
call git diff-index --quiet HEAD --
if errorlevel 1 (
    echo.
    echo 4. Creating commit...
    set /p COMMIT_MSG="Commit message (default: 'Update Valentine page'): "
    if "!COMMIT_MSG!"=="" set COMMIT_MSG=Update Valentine page
    call git commit -m "!COMMIT_MSG!"
    echo    OK - Committed
) else (
    echo.
    echo WARNING: No changes to commit
)

REM Step 5: Push to GitHub
echo.
echo 5. Pushing to GitHub...
call git push -u origin main
if errorlevel 1 (
    echo ERROR: Failed to push to GitHub
    pause
    exit /b 1
)
echo    OK - Pushed to GitHub

echo.
echo ============================================================
echo Deployment Complete!
echo ============================================================
echo.
echo Your page will be available at:
echo    https://YOUR_USERNAME.github.io/valentine_page/
echo.
echo GitHub Pages deployment takes 1-2 minutes
echo.
echo Next steps:
echo    1. Go to Settings - Pages on your GitHub repository
echo    2. Verify that "Deploy from a branch" is selected
echo    3. Select "main" branch and "/(root)" folder
echo    4. Wait 1-2 minutes for deployment
echo    5. Share your link!
echo.
echo For more help, see: GITHUB_PAGES_SETUP.md
echo.
echo Good luck with your Valentine's page!
echo.
pause
