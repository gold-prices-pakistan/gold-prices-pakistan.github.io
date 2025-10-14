# 🚀 Deployment Guide - Gold Prices Pakistan

Complete guide for deploying your Gold Prices Pakistan website to GitHub Pages.

## 📋 Pre-Deployment Checklist

### 1. Generate PWA Icons

**Option A: Use the Icon Generator**
```bash
# Open the icon generator in your browser
open generate-icons.html
# or
firefox generate-icons.html
# or
chrome generate-icons.html
```

Then:
1. Right-click each canvas
2. Select "Save Image As..."
3. Save as `icon-192.png` and `icon-512.png`
4. Place in the root directory

**Option B: Use Your Own Icons**

Create or use professional icons (192x192 and 512x512 PNG files) and name them:
- `icon-192.png`
- `icon-512.png`

### 2. Test Locally

```bash
# Make the script executable (if not already)
chmod +x test-local.sh

# Run the test server
./test-local.sh
```

Visit `http://localhost:8080` and verify:
- ✅ Page loads correctly
- ✅ Gold prices display
- ✅ Language toggle works (EN ↔ UR)
- ✅ Dark mode toggle works
- ✅ Historical data table shows
- ✅ Responsive design on mobile
- ✅ No console errors

## 🌐 GitHub Pages Deployment

### Step 1: Create GitHub Repository

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Gold Prices Pakistan"

# Create repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/goldpk.git
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to **https://github.com/YOUR_USERNAME/goldpk**
2. Click **Settings** (top right)
3. Scroll to **Pages** (left sidebar)
4. Under **Source**:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes for deployment

### Step 3: Verify Deployment

Your site will be live at:
```
https://YOUR_USERNAME.github.io/goldpk/
```

Test the deployed site:
- ✅ All features work
- ✅ PWA installable
- ✅ Offline mode works
- ✅ HTTPS enabled

### Step 4: Update Manifest (if needed)

If deploying to a subdirectory (`username.github.io/goldpk/`), update:

**manifest.json:**
```json
"start_url": "/goldpk/",
```

**sw.js** (update all cache paths):
```javascript
const ASSETS_TO_CACHE = [
    '/goldpk/',
    '/goldpk/index.html',
    '/goldpk/styles.css',
    '/goldpk/app.js',
    '/goldpk/manifest.json',
    '/goldpk/dummy-response.json',
    '/goldpk/icon-192.png',
    '/goldpk/icon-512.png'
];
```

Then commit and push:
```bash
git add manifest.json sw.js
git commit -m "Update paths for GitHub Pages subdirectory"
git push
```

## 🔄 Updating Gold Prices

### Method 1: Direct Edit on GitHub

1. Go to your repository
2. Click `dummy-response.json`
3. Click the pencil icon (Edit)
4. Update the data
5. Commit changes

### Method 2: Local Update & Push

```bash
# Edit dummy-response.json
nano dummy-response.json
# or use your preferred editor

# Add today's price at the top
{
  "15 Oct 2025": 445000.0,
  "14 Oct 2025": 441900.0,
  ...
}

# Commit and push
git add dummy-response.json
git commit -m "Update gold prices - $(date +%Y-%m-%d)"
git push
```

GitHub Pages will automatically redeploy in 1-2 minutes.

## 🎨 Custom Domain (Optional)

### Step 1: Add CNAME File

```bash
echo "goldpk.yourdomain.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

### Step 2: Configure DNS

Add one of these DNS records:

**Option A: CNAME Record (Subdomain)**
```
Type: CNAME
Name: goldpk (or your subdomain)
Value: YOUR_USERNAME.github.io
```

**Option B: A Records (Apex Domain)**
```
Type: A
Name: @ (or your domain)
Values:
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
```

### Step 3: Enable Custom Domain in GitHub

1. Go to **Settings → Pages**
2. Under **Custom domain**, enter: `goldpk.yourdomain.com`
3. Check **Enforce HTTPS** (wait for certificate)

## 🔧 Advanced Configuration

### Automatic Daily Updates

Create `.github/workflows/update-prices.yml`:

```yaml
name: Update Gold Prices
on:
  schedule:
    - cron: '0 9 * * *'  # Daily at 9 AM UTC
  workflow_dispatch:

jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Update prices
        run: |
          # Add your price fetching logic here
          # For now, this is manual via API or scraping
          
      - name: Commit changes
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add dummy-response.json
          git commit -m "Auto-update gold prices" || exit 0
          git push
```

### Adding Analytics (Privacy-Friendly)

If you want analytics, use privacy-focused options:
- **Plausible Analytics** (privacy-friendly)
- **Fathom Analytics** (privacy-focused)
- Avoid Google Analytics (privacy concerns)

### Performance Optimization

Already implemented:
- ✅ Service Worker caching
- ✅ Gzip compression (GitHub Pages)
- ✅ Lazy loading ready
- ✅ Optimized assets

## 🐛 Troubleshooting

### Issue: PWA Not Installable

**Solution:**
- Ensure HTTPS is enabled (automatic on GitHub Pages)
- Check `manifest.json` paths are correct
- Clear browser cache and reload

### Issue: Service Worker Not Registering

**Solution:**
- Check browser console for errors
- Verify `sw.js` path is correct
- Ensure HTTPS is enabled

### Issue: Icons Not Loading

**Solution:**
- Verify `icon-192.png` and `icon-512.png` exist
- Check file names match manifest.json
- Regenerate icons using `generate-icons.html`

### Issue: Changes Not Appearing

**Solution:**
- Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Check GitHub Actions for deployment status
- Unregister service worker in DevTools

### Issue: 404 Error on Paths

**Solution:**
- Update all paths in `sw.js` to include subdirectory
- Update `manifest.json` start_url
- Commit and push changes

## 📊 Monitoring

### GitHub Pages Status

Check deployment status:
1. Go to **Actions** tab
2. View **pages-build-deployment** workflow
3. Ensure it's green ✅

### Testing PWA Features

Use Chrome DevTools:
1. Open DevTools (F12)
2. Go to **Application** tab
3. Check:
   - Manifest
   - Service Workers
   - Cache Storage
   - Local Storage

### Lighthouse Audit

Run performance audit:
1. Open Chrome DevTools
2. Go to **Lighthouse** tab
3. Generate report
4. Aim for 90+ scores

## 🎯 Best Practices

### Daily Maintenance
- Update prices daily
- Monitor GitHub Actions
- Check for issues/feedback

### Monthly Review
- Review analytics (if enabled)
- Update dependencies (if any added)
- Improve based on feedback

### Security
- Keep dependencies updated
- Monitor GitHub security alerts
- Regular backups of data

## 📞 Need Help?

- **GitHub Issues:** Open issue in repository
- **GitHub Discussions:** Community help
- **Documentation:** README.md

---

**Happy Deploying! 🚀**

Made with 💰 for Pakistan


