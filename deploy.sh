#!/bin/bash

# Valentine's Day Page - GitHub Pages Deployment Helper
# This script helps deploy the project to GitHub Pages

set -e

echo "╔════════════════════════════════════════════════════════════╗"
echo "║   💕 Valentine's Day Page - GitHub Pages Deployment 💕   ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if we're in a git repository
if [ ! -d .git ]; then
    echo "⚠️  Not in a git repository. Initializing..."
    git init
    echo "✅ Git repository initialized"
fi

# Get repository information
echo ""
echo "📋 Current Git Status:"
git status

echo ""
echo "🔗 Remote repositories:"
git remote -v || echo "   (No remotes configured yet)"

echo ""
echo "════════════════════════════════════════════════════════════"
echo "📝 Deployment Steps:"
echo "════════════════════════════════════════════════════════════"
echo ""

# Step 1: Ensure on main branch
echo "1️⃣  Switching to main branch..."
git branch -M main
echo "   ✅ On main branch"

# Step 2: Check if remote exists
echo ""
echo "2️⃣  Checking GitHub remote..."
if git remote | grep -q origin; then
    echo "   ✅ GitHub remote already configured"
    REMOTE_URL=$(git remote get-url origin)
    echo "   URL: $REMOTE_URL"
else
    echo "   ⚠️  No origin remote found"
    echo ""
    echo "   Please create a repository on GitHub at:"
    echo "   https://github.com/new"
    echo ""
    echo "   Then run:"
    echo "   git remote add origin https://github.com/YOUR_USERNAME/valentine_page.git"
    echo ""
    read -p "   Have you added the remote? (y/n) " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "   Skipping push..."
        exit 0
    fi
fi

# Step 3: Stage all changes
echo ""
echo "3️⃣  Staging files..."
git add .
echo "   ✅ Files staged"

# Step 4: Check if there are changes to commit
if git diff-index --quiet HEAD --; then
    echo ""
    echo "⚠️  No changes to commit"
else
    # Step 5: Commit
    echo ""
    echo "4️⃣  Creating commit..."
    read -p "   Commit message (default: 'Update Valentine page'): " COMMIT_MSG
    COMMIT_MSG=${COMMIT_MSG:-"Update Valentine page"}
    git commit -m "$COMMIT_MSG"
    echo "   ✅ Committed"
fi

# Step 6: Push to GitHub
echo ""
echo "5️⃣  Pushing to GitHub..."
git push -u origin main
echo "   ✅ Pushed to GitHub"

echo ""
echo "════════════════════════════════════════════════════════════"
echo "✨ Deployment Complete! ✨"
echo "════════════════════════════════════════════════════════════"
echo ""
echo "🌐 Your page will be available at:"
echo "   https://YOUR_USERNAME.github.io/valentine_page/"
echo ""
echo "⏱️  GitHub Pages deployment takes 1-2 minutes"
echo ""
echo "📝 Next steps:"
echo "   1. Go to Settings → Pages on your GitHub repository"
echo "   2. Verify that 'Deploy from a branch' is selected"
echo "   3. Select 'main' branch and '/(root)' folder"
echo "   4. Wait 1-2 minutes for deployment"
echo "   5. Share your link! 💕"
echo ""
echo "📚 For more help, see: GITHUB_PAGES_SETUP.md"
echo ""
echo "Good luck with your Valentine's page! ❤️"
echo ""
