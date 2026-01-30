# 🚀 GitHub Pages Deployment Guide

This Valentine's Day page is ready to be hosted on GitHub Pages - a free static site hosting service!

## Prerequisites

- GitHub account (free at https://github.com)
- Git installed on your computer
- The valentine_page project folder

## Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Name your repository: `valentine_page` (or any name you want)
3. **Make sure it's set to PUBLIC** (required for free GitHub Pages)
4. Click "Create repository"

## Step 2: Connect Local Repository to GitHub

Open terminal in your `valentine_page` folder and run:

```bash
# Add your GitHub repository URL
git remote add origin https://github.com/YOUR_USERNAME/valentine_page.git

# Verify the remote was added
git remote -v
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Push Your Code to GitHub

```bash
# Make sure you're on the main branch
git branch -M main

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Valentine's Day page"

# Push to GitHub
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/valentine_page`
2. Click **Settings** (gear icon at the top right)
3. In the left sidebar, click **Pages**
4. Under "Build and deployment":
   - Source: Select **Deploy from a branch**
   - Branch: Select **main** and **/root** folder
5. Click **Save**

GitHub will automatically start building and deploying your site. This takes 1-2 minutes.

## Step 5: Access Your Live Page

After deployment completes, your page will be live at:

```
https://YOUR_USERNAME.github.io/valentine_page/
```

Check the Pages section in Settings for the exact URL.

## Step 6: Share the Link! 💕

Your Valentine's page is now live on the internet! Share the URL with your special someone.

---

## Automatic Deployment with GitHub Actions

This project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys any changes you push to GitHub. 

**How it works:**
1. You make changes locally and commit them
2. You push to GitHub with `git push`
3. GitHub Actions automatically builds and deploys your site
4. Your live page updates within 1-2 minutes

No additional setup needed - it's already configured!

---

## Updating Your Page

If you want to make changes:

1. Edit files locally in VS Code
2. Test locally with `python3 -m http.server 8000`
3. Commit your changes:
   ```bash
   git add .
   git commit -m "Update: describe your changes"
   git push origin main
   ```
4. Your live site updates automatically!

---

## Custom Domain (Optional)

If you have a custom domain:

1. Go to your repository Settings → Pages
2. Under "Custom domain", enter your domain name
3. Update your domain registrar's DNS to point to GitHub Pages
4. GitHub will verify and enable HTTPS

See [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for detailed instructions.

---

## Troubleshooting

### Site not deploying?
- Check the "Actions" tab in your repository for build errors
- Ensure `index.html` is in the root directory
- Make sure your repo is PUBLIC
- Wait a few minutes - deployment can take time

### 404 errors for assets?
- Ensure all file paths are relative (not absolute)
- Check that `/css/style.css` and `/js/script.js` paths are correct
- Verify media files are in `/media/` folder

### Custom domain not working?
- Check DNS settings are correctly configured
- Wait up to 24 hours for DNS propagation
- See [GitHub DNS troubleshooting](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages)

---

## Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Pages with custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Git Basics](https://git-scm.com/book/en/v2)

---

## Quick Commands Reference

```bash
# Check git status
git status

# See commit history
git log --oneline

# View remote URLs
git remote -v

# Push changes to GitHub
git push origin main

# Pull latest changes from GitHub
git pull origin main

# Create a new commit
git add .
git commit -m "Your message here"
git push
```

---

**Your Valentine's page is ready for the world to see! 💕**

Share the GitHub Pages URL with your Valentine and enjoy! 🎉

Good luck! ❤️
