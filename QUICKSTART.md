# ⚡ Quick Start Guide

Get your Gold Prices Pakistan website up and running in 5 minutes!

## 🎯 Step 1: Generate Icons (2 minutes)

```bash
# Open the icon generator
open generate-icons.html
```

1. Right-click each canvas → "Save image as..."
2. Save as `icon-192.png` and `icon-512.png` in project root

## 🧪 Step 2: Test Locally (1 minute)

```bash
# Run local server
./test-local.sh
```

Visit: `http://localhost:8080`

## 🚀 Step 3: Deploy to GitHub (2 minutes)

```bash
# Create repo on GitHub first, then:
git init
git add .
git commit -m "Initial commit: Gold Prices Pakistan"
git remote add origin https://github.com/YOUR_USERNAME/goldpk.git
git branch -M main
git push -u origin main
```

Enable GitHub Pages:
1. Go to **Settings → Pages**
2. Source: `main` branch, `/ (root)` folder
3. Save

**Done!** 🎉 Your site is live at:
```
https://YOUR_USERNAME.github.io/goldpk/
```

## 🔄 Daily Updates

Edit `dummy-response.json` and add today's price:

```json
{
  "15 Oct 2025": 445000.0,
  ...
}
```

Then:
```bash
git add dummy-response.json
git commit -m "Update prices"
git push
```

## 📱 Features You Get

- ✅ Beautiful, responsive design
- ✅ Bilingual (English/Urdu)
- ✅ Dark mode
- ✅ PWA (installable)
- ✅ Offline support
- ✅ 100% private
- ✅ Lightning fast

## 📚 More Help

- Full guide: `README.md`
- Deployment details: `DEPLOYMENT.md`
- Docker testing: `docker-compose up`

---

**That's it! You're all set! 🏆**


