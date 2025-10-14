# 💰 Gold Prices Pakistan

A beautiful, minimalist web application for tracking gold prices in Pakistan. Built with privacy-first principles and offline-first PWA capabilities.

## ✨ Features

### 🚀 Technical Features
- **100% Client-Side** - All processing happens in your browser
- **Offline PWA** - Works without internet after first visit
- **Privacy-First** - No data collection, no server communication
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Golden Ratio UI** - Beautiful, minimalist design principles
- **Bilingual Support** - English and Urdu/Hindi
- **Dark Mode** - Eye-friendly dark theme
- **Local Storage** - Remembers your preferences

### 📊 Data Features
- Current gold price (per tola)
- Price change indicators (daily)
- Historical price data (30 days)
- Percentage change calculations
- Beautiful data visualization

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Variables & Golden Ratio
- **Vanilla JavaScript** - No framework dependencies
- **PWA** - Progressive Web App capabilities
- **Nginx** - Production web server
- **Docker** - Containerized deployment

## 📦 Project Structure

```
goldpk/
├── index.html              # Main HTML file
├── styles.css              # Golden ratio-based CSS
├── app.js                  # Core application logic
├── manifest.json           # PWA manifest
├── sw.js                   # Service Worker for offline support
├── dummy-response.json     # Gold price data
├── nginx.conf              # Nginx configuration
├── Dockerfile              # Docker image configuration
├── docker-compose.yml      # Docker Compose setup
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## 🚀 Quick Start

### Option 1: Direct File Serving

Simply open `index.html` in a modern web browser. However, for full PWA features, use a local server:

```bash
# Using Python 3
python3 -m http.server 8080

# Using Python 2
python -m SimpleHTTPServer 8080

# Using Node.js (with npx)
npx serve -p 8080

# Using PHP
php -S localhost:8080
```

Then visit: `http://localhost:8080`

### Option 2: Docker (Recommended for Testing)

```bash
# Build and run with Docker Compose
docker-compose up -d

# Or build and run manually
docker build -t goldpk .
docker run -d -p 8080:80 --name goldpk-web goldpk
```

Then visit: `http://localhost:8080`

To stop:
```bash
docker-compose down
# or
docker stop goldpk-web && docker rm goldpk-web
```

## 📱 Installing as PWA

1. Open the website in Chrome/Edge/Safari
2. Look for the "Install" prompt or menu option
3. Click "Install" to add to your home screen
4. Launch like a native app!

## 🌐 GitHub Pages Deployment

### Step 1: Prepare Your Repository

1. Create a new repository on GitHub (e.g., `goldpk`)
2. Initialize git in your project:

```bash
git init
git add .
git commit -m "Initial commit: Gold Prices Pakistan"
```

3. Add your GitHub repository as remote:

```bash
git remote add origin https://github.com/YOUR_USERNAME/goldpk.git
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**

### Step 3: Update Paths (if using subdirectory)

If deploying to `username.github.io/goldpk`:

Update `manifest.json`:
```json
"start_url": "/goldpk/",
```

Update `sw.js` cache paths:
```javascript
const ASSETS_TO_CACHE = [
    '/goldpk/',
    '/goldpk/index.html',
    // ... update all paths
];
```

### Step 4: Access Your Site

Your site will be available at:
- `https://YOUR_USERNAME.github.io/goldpk/` (subdirectory)
- Or `https://YOUR_USERNAME.github.io/` (if repo name is username.github.io)

### Step 5: Custom Domain (Optional)

1. Add a `CNAME` file with your domain:
```bash
echo "goldpk.yourdomain.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

2. In GitHub Settings → Pages, add your custom domain
3. Update your DNS records (A or CNAME) to point to GitHub Pages

## 🔄 Updating Gold Prices

Edit `dummy-response.json` with new data:

```json
{
  "15 Oct 2025": 445000.0,
  "14 Oct 2025": 441900.0,
  ...
}
```

The format is: `"DD MMM YYYY": price_in_pkr`

Then commit and push:
```bash
git add dummy-response.json
git commit -m "Update gold prices"
git push
```

GitHub Pages will automatically redeploy (takes 1-2 minutes).

## 🎨 Design Principles

This project follows the **Golden Ratio (φ = 1.618)** for:
- Typography scale
- Spacing system
- Layout proportions
- Visual hierarchy

### Color Palette

**Light Theme:**
- Background: `#FAFAF9`
- Gold: `#D4AF37`
- Text: `#1C1917`

**Dark Theme:**
- Background: `#0C0A09`
- Gold: `#F4D03F`
- Text: `#FAFAF9`

## 🔧 Configuration

### Language Switching

The app stores language preference in `localStorage`:
- Key: `goldpk_language`
- Values: `en` | `ur`

### Theme Switching

Theme preference is also stored in `localStorage`:
- Key: `goldpk_theme`
- Values: `light` | `dark`

### Adding New Translations

Edit `app.js` and add to the `translations` object:

```javascript
const translations = {
    en: { ... },
    ur: { ... },
    hi: { // Add Hindi
        'app-title': 'सोने की कीमतें पाकिस्तान',
        ...
    }
};
```

## 📊 Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Opera 76+

## 🔒 Privacy

- **No tracking** - Zero analytics or tracking scripts
- **No cookies** - Only localStorage for preferences
- **No server communication** - 100% client-side
- **Offline-first** - Works without internet after first load

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📧 Support

For issues or questions, please open a GitHub issue.

---

**Made with care for transparency** • **100% Private & Offline**

🇵🇰 Made for Pakistan


