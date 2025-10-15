// ============================================
// Gold Prices Pakistan - Main Application
// 100% Client-Side, Privacy-First
// ============================================

// Translations
const translations = {
    en: {
        'app-title': 'Gold Prices Pakistan',
        'today-price': "Today's Gold Price",
        'per-tola': '/tola',
        'price-history': 'Price History (24K 1 Tola)',
        'all-prices': 'All Gold Prices',
        'unit': 'Unit',
        'karat-type': 'Karat',
        'date': 'Date',
        'price': 'Price (PKR)',
        'change': 'Change',
        'footer-text': 'Made with care for transparency',
        'privacy': '100% Private & Offline',
        'karat': 'Karat',
        'previous': 'Previous',
        'next': 'Next',
        'install-app': 'Install'
    },
    ur: {
        'app-title': 'سونے کی قیمتیں پاکستان',
        'today-price': 'آج کی قیمت',
        'per-tola': '/تولہ',
        'price-history': 'قیمتوں کی تاریخ (24K 1 تولہ)',
        'all-prices': 'تمام قیمتیں',
        'unit': 'اکائی',
        'karat-type': 'قیراط',
        'date': 'تاریخ',
        'price': 'قیمت (روپے)',
        'change': 'تبدیلی',
        'footer-text': 'شفافیت کے لیے بنایا گیا',
        'privacy': '100% نجی اور آف لائن',
        'karat': 'قیراط',
        'previous': 'پچھلا',
        'next': 'اگلا',
        'install-app': 'انسٹال کریں'
    }
};

// ============================================
// State Management
// ============================================

class AppState {
    constructor() {
        this.liveData = null;
        this.historyData = null;
        this.currentLang = this.loadPreference('language') || 'en';
        this.currentTheme = this.loadPreference('theme') || 'dark'; // Default to dark mode
        this.selectedUnit = this.loadPreference('unit') || '1 Tola';
        this.selectedKarat = parseInt(this.loadPreference('karat')) || 0; // 0 = 24K (index)
        this.karats = ['24 Karat', '22 Karat', '21 Karat', '18 Karat', '12 Karat'];
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.priceChart = null;
        this.deferredPrompt = null; // Store the install prompt event
    }

    loadPreference(key) {
        try {
            return localStorage.getItem(`goldpk_${key}`);
        } catch (e) {
            console.warn('localStorage not available:', e);
            return null;
        }
    }

    savePreference(key, value) {
        try {
            localStorage.setItem(`goldpk_${key}`, value);
        } catch (e) {
            console.warn('localStorage not available:', e);
        }
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'en' ? 'ur' : 'en';
        this.savePreference('language', this.currentLang);
        return this.currentLang;
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.savePreference('theme', this.currentTheme);
        return this.currentTheme;
    }

    setUnit(unit) {
        this.selectedUnit = unit;
        this.savePreference('unit', unit);
        return this.selectedUnit;
    }

    setKarat(karatIndex) {
        this.selectedKarat = karatIndex;
        this.savePreference('karat', karatIndex.toString());
        return this.selectedKarat;
    }

    getKaratName() {
        return this.karats[this.selectedKarat] || '24 Karat';
    }
}

const appState = new AppState();

// ============================================
// Data Loading
// ============================================

async function loadLiveData() {
    try {
        const response = await fetch('response-live.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        appState.liveData = data;
        return data;
    } catch (error) {
        console.error('Error loading live data:', error);
        appState.liveData = {};
        return {};
    }
}

async function loadHistoryData() {
    try {
        const response = await fetch('response-history.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        appState.historyData = data;
        return data;
    } catch (error) {
        console.error('Error loading history data:', error);
        appState.historyData = {};
        return {};
    }
}

async function loadAllData() {
    await Promise.all([loadLiveData(), loadHistoryData()]);
}

// ============================================
// UI Updates
// ============================================

function updateLanguage() {
    const lang = appState.currentLang;
    document.documentElement.lang = lang;
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update table direction for RTL
    if (lang === 'ur') {
        document.body.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.body.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('dir', 'ltr');
    }
}

function updateTheme() {
    document.documentElement.setAttribute('data-theme', appState.currentTheme);
}

function formatNumber(number, locale = 'en-PK') {
    return new Intl.NumberFormat(locale, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }).format(number);
}

function formatDate(dateString, locale = 'en-PK') {
    try {
        const date = new Date(dateString);
        if (appState.currentLang === 'ur') {
            return date.toLocaleDateString('ur-PK', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
        }
        return date.toLocaleDateString('en-PK', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    } catch (e) {
        return dateString;
    }
}

function calculateChange(current, previous) {
    const change = current - previous;
    const percentChange = previous !== 0 ? (change / previous) * 100 : 0;
    return {
        amount: change,
        percent: percentChange,
        direction: change > 0 ? 'positive' : change < 0 ? 'negative' : 'neutral'
    };
}

function renderFeaturedPrices() {
    const liveData = appState.liveData;
    const historyData = appState.historyData;
    
    if (!liveData || !historyData) {
        return;
    }

    const historyEntries = Object.entries(historyData).sort((a, b) => 
        new Date(b[0]) - new Date(a[0])
    );
    
    const currentDate = historyEntries.length > 0 ? historyEntries[0][0] : new Date().toLocaleDateString('en-PK', { day: '2-digit', month: 'short', year: 'numeric' });
    const previousPrice24k = historyEntries.length > 1 ? historyEntries[1][1] : historyEntries[0][1];

    // Update date
    const dateElement = document.getElementById('currentDate');
    if (dateElement) {
        dateElement.textContent = formatDate(currentDate);
    }

    // Featured cards: 24K for 1 Tola, 10 Gram, 1 Gram
    const featured = [
        { id: 'featured-24k-1tola', unit: '1 Tola', karat: 0 },
        { id: 'featured-24k-10gram', unit: '10 Gram', karat: 0 },
        { id: 'featured-24k-1gram', unit: '1 Gram', karat: 0 }
    ];

    featured.forEach(item => {
        const card = document.getElementById(item.id);
        if (!card) return;

        const unitPrices = liveData[item.unit];
        if (!unitPrices || unitPrices.length === 0) return;

        const currentPrice = unitPrices[item.karat]; // 24K = index 0

        // Update price only (no change indicator)
        const amountEl = card.querySelector('.featured-amount');
        if (amountEl) {
            amountEl.textContent = formatNumber(currentPrice);
        }
    });
}

function renderAllPricesTable() {
    const liveData = appState.liveData;
    const tbody = document.getElementById('matrixTableBody');
    
    if (!liveData || !tbody) return;

    tbody.innerHTML = '';

    // Define unit labels
    const unitLabels = {
        '1 Tola': 'per tola Gold Price',
        '10 Gram': 'Gold per 10 Gram',
        '1 Gram': 'Gold per Gram',
        '1 Ounce': 'Gold per Ounce'
    };

    // Create rows for each unit
    const units = ['1 Tola', '10 Gram', '1 Gram', '1 Ounce'];
    
    units.forEach(unit => {
        const unitPrices = liveData[unit];
        if (!unitPrices) return;

        const row = document.createElement('tr');
        
        // First column: Unit label
        const labelCell = document.createElement('td');
        labelCell.className = 'matrix-unit-label';
        labelCell.textContent = unitLabels[unit];
        row.appendChild(labelCell);

        // Remaining columns: Prices for each karat (24K, 22K, 21K, 18K, 12K)
        unitPrices.forEach(price => {
            const priceCell = document.createElement('td');
            priceCell.className = 'matrix-price';
            priceCell.textContent = `Rs. ${formatNumber(price)}`;
            row.appendChild(priceCell);
        });

        tbody.appendChild(row);
    });
}

function renderPriceHistory() {
    const data = appState.historyData;
    const tbody = document.getElementById('priceTableBody');
    if (!tbody || !data) return;

    const entries = Object.entries(data).sort((a, b) => 
        new Date(b[0]) - new Date(a[0])
    );

    // Pagination
    const totalItems = entries.length;
    const totalPages = Math.ceil(totalItems / appState.itemsPerPage);
    const startIndex = (appState.currentPage - 1) * appState.itemsPerPage;
    const endIndex = startIndex + appState.itemsPerPage;
    const paginatedEntries = entries.slice(startIndex, endIndex);

    tbody.innerHTML = '';

    paginatedEntries.forEach((entry, index) => {
        const [dateStr, price] = entry;
        const actualIndex = startIndex + index;
        const previousPrice = actualIndex < entries.length - 1 ? entries[actualIndex + 1][1] : price;
        const change = calculateChange(price, previousPrice);

        const row = document.createElement('tr');
        
        const icon = change.direction === 'positive' ? '↑' : 
                     change.direction === 'negative' ? '↓' : '→';
        
        const changeAmountText = change.amount > 0 ? `+Rs. ${formatNumber(Math.abs(change.amount))}` : 
                                 change.amount < 0 ? `-Rs. ${formatNumber(Math.abs(change.amount))}` : 
                                 `Rs. ${formatNumber(0)}`;
        
        const changePercentText = `${change.percent > 0 ? '+' : ''}${change.percent.toFixed(2)}%`;

        row.innerHTML = `
            <td class="table-date">${formatDate(dateStr)}</td>
            <td class="table-price">${formatNumber(price)}</td>
            <td class="table-change">
                <span class="change-badge ${change.direction}">
                    <span>${icon}</span>
                    <span>${changeAmountText} (${changePercentText})</span>
                </span>
            </td>
        `;

        tbody.appendChild(row);
    });

    // Update pagination controls
    updatePaginationControls(totalPages);
}

function updatePaginationControls(totalPages) {
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');
    const paginationInfo = document.getElementById('paginationInfo');

    if (prevBtn) {
        prevBtn.disabled = appState.currentPage === 1;
    }

    if (nextBtn) {
        nextBtn.disabled = appState.currentPage === totalPages;
    }

    if (paginationInfo) {
        paginationInfo.textContent = `Page ${appState.currentPage} of ${totalPages}`;
    }
}

function renderPriceChart() {
    const data = appState.historyData;
    const canvas = document.getElementById('priceChart');
    
    if (!data || !canvas) return;

    const entries = Object.entries(data).sort((a, b) => 
        new Date(a[0]) - new Date(b[0]) // Chronological order for chart
    );

    const labels = entries.map(entry => {
        const date = new Date(entry[0]);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    });

    const prices = entries.map(entry => entry[1]);

    // Get theme-appropriate colors
    const isDark = appState.currentTheme === 'dark';
    const goldColor = isDark ? '#F4D03F' : '#D4AF37';
    const goldColorRgb = isDark ? '244, 208, 63' : '212, 175, 55';
    const textColor = isDark ? '#FAFAF9' : '#1C1917';
    const gridColor = isDark ? '#292524' : '#E7E5E4';

    // Destroy existing chart if it exists
    if (appState.priceChart) {
        appState.priceChart.destroy();
    }

    // Create new chart
    const ctx = canvas.getContext('2d');
    appState.priceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: '24K Gold Price (PKR per Tola)',
                data: prices,
                borderColor: goldColor,
                backgroundColor: `rgba(${goldColorRgb}, 0.1)`,
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointHoverRadius: 6,
                pointBackgroundColor: goldColor,
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointHoverBackgroundColor: goldColor,
                pointHoverBorderColor: '#fff',
                pointHoverBorderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: textColor,
                        font: {
                            family: 'Inter, sans-serif',
                            size: 13,
                            weight: 600
                        },
                        padding: 15,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    backgroundColor: isDark ? '#1C1917' : '#FFFFFF',
                    titleColor: textColor,
                    bodyColor: textColor,
                    borderColor: goldColor,
                    borderWidth: 2,
                    padding: 12,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            return 'PKR ' + formatNumber(context.parsed.y);
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: gridColor,
                        drawBorder: false
                    },
                    ticks: {
                        color: textColor,
                        font: {
                            family: 'Inter, sans-serif',
                            size: 11
                        },
                        maxRotation: 45,
                        minRotation: 45
                    }
                },
                y: {
                    grid: {
                        color: gridColor,
                        drawBorder: false
                    },
                    ticks: {
                        color: textColor,
                        font: {
                            family: 'Inter, sans-serif',
                            size: 11
                        },
                        callback: function(value) {
                            return 'Rs. ' + formatNumber(value);
                        }
                    }
                }
            }
        }
    });
}

function renderUI() {
    if (!appState.liveData || !appState.historyData) return;

    renderFeaturedPrices();
    renderAllPricesTable();
    renderPriceChart();
}

// ============================================
// Event Handlers
// ============================================

function updateLanguageToggle() {
    const langText = document.getElementById('langText');
    if (langText) {
        // Show the opposite language (if current is English, show Urdu option)
        langText.textContent = appState.currentLang === 'en' ? 'اردو' : 'English';
    }
}

function setupEventListeners() {
    // Language toggle
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            appState.toggleLanguage();
            updateLanguage();
            updateLanguageToggle();
            renderUI(); // Re-render with new language formatting
        });
    }

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            appState.toggleTheme();
            updateTheme();
            // Re-render chart with new theme colors
            renderPriceChart();
        });
    }

    // PWA Install Button
    setupPWAInstall();
}

// ============================================
// PWA Install Handler
// ============================================

function setupPWAInstall() {
    const installBtn = document.getElementById('installBtn');
    
    // Listen for beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent the default mini-infobar from appearing
        e.preventDefault();
        // Store the event for later use
        appState.deferredPrompt = e;
        // Show the install button
        if (installBtn) {
            installBtn.style.display = 'flex';
        }
    });

    // Handle install button click
    if (installBtn) {
        installBtn.addEventListener('click', async () => {
            if (!appState.deferredPrompt) {
                return;
            }

            // Show the install prompt
            appState.deferredPrompt.prompt();

            // Wait for the user's response
            const { outcome } = await appState.deferredPrompt.userChoice;
            
            console.log(`User response to install prompt: ${outcome}`);

            // Clear the deferred prompt
            appState.deferredPrompt = null;

            // Hide the install button
            installBtn.style.display = 'none';
        });
    }

    // Listen for app installed event
    window.addEventListener('appinstalled', () => {
        console.log('PWA installed successfully');
        // Hide the install button
        if (installBtn) {
            installBtn.style.display = 'none';
        }
        // Clear the deferred prompt
        appState.deferredPrompt = null;
    });
}


// ============================================
// Service Worker Registration
// ============================================

async function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        try {
            const registration = await navigator.serviceWorker.register('/sw.js');
            console.log('ServiceWorker registered:', registration);
        } catch (error) {
            console.log('ServiceWorker registration failed:', error);
        }
    }
}

// ============================================
// Initialization
// ============================================

async function init() {
    // Set initial theme and language
    updateTheme();
    updateLanguage();
    updateLanguageToggle();

    // Setup event listeners
    setupEventListeners();

    // Load and render data
    await loadAllData();
    renderUI();

    // Register service worker for PWA
    await registerServiceWorker();

    console.log('Gold Prices Pakistan - Initialized');
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Export for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AppState, loadLiveData, loadHistoryData, formatNumber, calculateChange };
}

