// ============================================
// Gold Prices Pakistan - Main Application
// 100% Client-Side, Privacy-First
// ============================================

// Translations
const translations = {
    en: {
        'app-title': 'Gold Prices Pakistan',
        'tab-prices': 'Gold Prices In Pakistan',
        'tab-zakat': 'My Zakat Calculator',
        'today-price': 'Gold Price in Pakistan Today',
        'gold-price-in': 'Gold Price in',
        'today': 'Today',
        'matrix-title': 'Rate Chart by Karat & Weight',
        'matrix-subtitle': 'All gold types and weight units at a glance',
        'zakat-title': 'My Zakat Calculator',
        'zakat-subtitle': 'Calculate your Zakat on Gold (2.5%)',
        'nisab-threshold': 'Nisab Threshold',
        'zakat-rate': 'Zakat Rate',
        'your-gold': 'Your Gold Holdings',
        'add-entry': 'Add Another Item',
        'gold-entry': 'Gold Entry',
        'amount': 'Amount',
        'in-unit': 'In',
        'purity': 'Purity',
        'zakat-summary': 'Zakat Summary',
        'total-gold': 'Total Gold (24K equivalent)',
        'total-value': 'Total Value',
        'nisab-status': 'Nisab Status',
        'below-nisab': 'Below Nisab',
        'above-nisab': 'Zakat Applicable',
        'zakat-due': 'Zakat Due (2.5%)',
        'per-tola': '/tola',
        'price-history': 'Price History (24K 1 Tola)',
        'all-prices': 'All Gold Prices',
        'unit': 'Unit',
        'karat-type': 'Karat',
        'date': 'Date',
        'price': 'Price (PKR)',
        'change': 'Change',
        'disclaimer-title': 'Disclaimer',
        'disclaimer-text': 'Gold prices displayed on this website are indicative rates based on market data and are provided for informational purposes only. These rates are updated regularly but may not reflect real-time market fluctuations. We do not guarantee the accuracy, completeness, or timeliness of the information. Actual prices may vary depending on your location, jeweller, and market conditions.',
        'disclaimer-liability': 'This website is not affiliated with any gold dealer, jeweller, or trading organization. We are not responsible for any transactions or financial decisions made based on the information provided. Please verify current rates with authorized dealers before making any purchases.',
        'data-source': 'Data Source: Trust Me Bro!',
        'for-reference': 'For Reference Only',
        'github-link': 'Open Source',
        'footer-text': 'Made with care for transparency',
        'privacy': '100% Private & Offline',
        'copyright': '© 2025 Gold Prices Pakistan. All information provided for reference purposes only.',
        'karat': 'Karat',
        'previous': 'Previous',
        'next': 'Next',
        'install-app': 'Install',
        'ios-install-title': 'Install this app',
        'ios-install-hint': 'Tap Share → Add to Home Screen',
        'scroll-hint': '← Swipe to see all rates →',
        'as-of': 'Updated on'
    },
    ur: {
        'app-title': 'سونے کی قیمتیں پاکستان',
        'tab-prices': 'پاکستان میں سونے کی قیمتیں',
        'tab-zakat': 'میری زکوٰۃ کیلکولیٹر',
        'today-price': 'آج پاکستان میں سونے کی قیمت',
        'gold-price-in': 'میں سونے کی قیمت',
        'today': 'آج',
        'matrix-title': 'قیراط اور وزن کے لحاظ سے نرخ چارٹ',
        'matrix-subtitle': 'تمام قسمیں اور وزن ایک نظر میں',
        'zakat-title': 'میری زکوٰۃ کیلکولیٹر',
        'zakat-subtitle': 'سونے پر زکوٰۃ کا حساب (2.5%)',
        'nisab-threshold': 'نصاب کی حد',
        'zakat-rate': 'زکوٰۃ کی شرح',
        'your-gold': 'آپ کے سونے کی مقدار',
        'add-entry': 'مزید شامل کریں',
        'gold-entry': 'سونے کی اندراج',
        'amount': 'مقدار',
        'in-unit': 'میں',
        'purity': 'خالصیت',
        'zakat-summary': 'زکوٰۃ کا خلاصہ',
        'total-gold': 'کل سونا (24K کے برابر)',
        'total-value': 'کل قیمت',
        'nisab-status': 'نصاب کی حیثیت',
        'below-nisab': 'نصاب سے کم',
        'above-nisab': 'زکوٰۃ واجب ہے',
        'zakat-due': 'واجب زکوٰۃ (2.5%)',
        'per-tola': '/تولہ',
        'price-history': 'قیمتوں کی تاریخ (24K 1 تولہ)',
        'all-prices': 'تمام قیمتیں',
        'unit': 'اکائی',
        'karat-type': 'قیراط',
        'date': 'تاریخ',
        'price': 'قیمت (روپے)',
        'change': 'تبدیلی',
        'disclaimer-title': 'اعلان دستبرداری',
        'disclaimer-text': 'اس ویب سائٹ پر دکھائی گئی سونے کی قیمتیں مارکیٹ ڈیٹا پر مبنی اشارے ہیں اور صرف معلومات کے مقاصد کے لیے فراہم کی جاتی ہیں۔ یہ قیمتیں باقاعدگی سے اپ ڈیٹ کی جاتی ہیں لیکن حقیقی وقت میں مارکیٹ کی تبدیلیوں کی عکاسی نہیں کر سکتیں۔ ہم معلومات کی درستگی، مکمل پن یا بروقت ہونے کی ضمانت نہیں دیتے۔ حقیقی قیمتیں آپ کے مقام، سنار اور مارکیٹ کے حالات کے لحاظ سے مختلف ہو سکتی ہیں۔',
        'disclaimer-liability': 'یہ ویب سائٹ کسی بھی سونے کے ڈیلر، سنار یا تجارتی تنظیم سے وابستہ نہیں ہے۔ ہم فراہم کردہ معلومات کی بنیاد پر کیے گئے کسی بھی لین دین یا مالی فیصلے کے ذمہ دار نہیں ہیں۔ براہ کرم خریداری کرنے سے پہلے مجاز ڈیلرز سے موجودہ قیمتوں کی تصدیق کریں۔',
        'data-source': 'ذریعہ: Trust Me Bro!',
        'for-reference': 'صرف حوالہ کے لیے',
        'github-link': 'اوپن سورس',
        'footer-text': 'شفافیت کے لیے بنایا گیا',
        'privacy': '100% نجی اور آف لائن',
        'copyright': '© 2025 گولڈ پرائسز پاکستان۔ تمام معلومات صرف حوالہ کے مقاصد کے لیے۔',
        'karat': 'قیراط',
        'previous': 'پچھلا',
        'next': 'اگلا',
        'install-app': 'انسٹال کریں',
        'ios-install-title': 'یہ ایپ انسٹال کریں',
        'ios-install-hint': 'شیئر → ہوم اسکرین میں شامل کریں',
        'scroll-hint': '→ تمام قیمتیں دیکھنے کے لیے سوائپ کریں ←',
        'as-of': 'اپ ڈیٹ'
    }
};

// ============================================
// State Management
// ============================================

class AppState {
    constructor() {
        this.liveData = null;
        this.historyData = null;
        this.cityData = null; // City-specific data
        this.scrapedAt = null; // Timestamp from scraper data
        this.selectedCity = this.loadPreference('city') || null; // null = Pakistan national, or city_code like "KHI"
        this.currentLang = this.loadPreference('language') || 'en';
        this.currentTheme = this.loadPreference('theme') || 'dark'; // Default to dark mode
        this.selectedUnit = this.loadPreference('unit') || '1 Tola';
        this.selectedKarat = parseInt(this.loadPreference('karat')) || 0; // 0 = 24K (index)
        this.karats = ['24 Karat', '22 Karat', '21 Karat', '18 Karat', '12 Karat'];
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.priceChart = null;
        this.deferredPrompt = null; // Store the install prompt event
        this.currentTab = 'prices';
        this.zakatEntries = [];
        this.zakatCounter = 0;
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

    setCity(cityCode) {
        this.selectedCity = cityCode;
        if (cityCode) {
            this.savePreference('city', cityCode);
        } else {
            localStorage.removeItem('goldpk_city');
        }
        return this.selectedCity;
    }

    getCityName() {
        if (!this.selectedCity || !this.cityData) return 'Pakistan';
        const city = this.cityData.cities.find(c => c.city_code === this.selectedCity);
        return city ? city.city_name : 'Pakistan';
    }
}

const appState = new AppState();

// ============================================
// Data Loading
// ============================================

async function loadLiveData() {
    try {
        const response = await fetch('data/scraper-live-data.json', {
            cache: 'no-store',
            headers: {
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const rawData = await response.json();
        
        // Transform price_matrix to expected format: { "1 Tola": [prices], ... }
        const transformedData = rawData.price_matrix || {};
        
        // Store the scraped_at timestamp for later use
        appState.scrapedAt = rawData.scraped_at;
        
        appState.liveData = transformedData;
        return transformedData;
    } catch (error) {
        console.error('Error loading live data:', error);
        appState.liveData = {};
        return {};
    }
}

async function loadHistoryData() {
    try {
        const response = await fetch('data/scraper-live-data.json', {
            cache: 'no-store',
            headers: {
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const rawData = await response.json();
        
        // Transform historical_data.records to expected format: { "date": price }
        const records = rawData.historical_data?.records || [];
        const transformedData = {};
        
        records.forEach(record => {
            transformedData[record.date] = record.price;
        });
        
        appState.historyData = transformedData;
        return transformedData;
    } catch (error) {
        console.error('Error loading history data:', error);
        appState.historyData = {};
        return {};
    }
}

async function loadCityData() {
    try {
        const response = await fetch('data/scraper-city-data.json', {
            cache: 'no-store',
            headers: {
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        appState.cityData = data;
        return data;
    } catch (error) {
        console.error('Error loading city data:', error);
        appState.cityData = null;
        return null;
    }
}

async function loadAllData() {
    await Promise.all([loadLiveData(), loadHistoryData(), loadCityData()]);
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
    
    if (!liveData) {
        return;
    }

    // Update date using scraped_at timestamp
    const dateElement = document.getElementById('currentDate');
    if (dateElement && appState.scrapedAt) {
        const asOfText = translations[appState.currentLang]['as-of'];
        dateElement.textContent = `${asOfText} ${formatDate(appState.scrapedAt)}`;
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

    // Parse date string - handles both "09Oct 7:39pm" and "15 Oct 2025" formats
    function parseScrapedDate(dateStr) {
        // Try to parse as standard date first (handles "15 Oct 2025" format)
        const standardDate = new Date(dateStr);
        if (!isNaN(standardDate.getTime())) {
            return standardDate;
        }
        
        // Handle "09Oct 7:39pm" format
        const match = dateStr.match(/(\d+)(\w+)/);
        if (match) {
            const day = match[1];
            const month = match[2];
            const year = new Date().getFullYear();
            return new Date(`${month} ${day}, ${year}`);
        }
        
        return new Date(); // Ultimate fallback
    }

    const entries = Object.entries(data).sort((a, b) => 
        parseScrapedDate(a[0]) - parseScrapedDate(b[0]) // Chronological order: oldest to newest (left to right)
    );

    const labels = entries.map(entry => {
        const dateStr = entry[0];
        
        // Try to parse as a proper date first
        const parsedDate = parseScrapedDate(dateStr);
        if (!isNaN(parsedDate.getTime())) {
            // Format as "Mon DD"
            return parsedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        }
        
        // Fallback: extract day and month from string
        const match = dateStr.match(/(\d+)\s*(\w+)/);
        if (match) {
            const day = match[1];
            const month = match[2];
            return `${month} ${day}`;
        }
        
        return dateStr;
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
                    display: false
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

// ============================================
// City Selection Helpers
// ============================================

function populateCityDropdown() {
    const selector = document.getElementById('citySelector');
    if (!selector || !appState.cityData) return;

    // City emojis mapping
    const cityEmojis = {
        'KHI': '🏙️',
        'LHR': '🕌'
    };

    // Clear existing options except Pakistan
    selector.innerHTML = '<option value="">🇵🇰 Pakistan</option>';

    // Add city options
    appState.cityData.cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city.city_code;
        const emoji = cityEmojis[city.city_code] || '📍';
        option.textContent = `${emoji} ${city.city_name}`;
        selector.appendChild(option);
    });

    // Set selected value
    if (appState.selectedCity) {
        selector.value = appState.selectedCity;
    }
}

function getCurrentData() {
    // If a city is selected, transform city data to match expected format
    if (appState.selectedCity && appState.cityData) {
        const city = appState.cityData.cities.find(c => c.city_code === appState.selectedCity);
        if (city) {
            // Transform city rates to match liveData format
            const transformedLiveData = {
                '1 Tola': [],
                '10 Gram': [],
                '1 Gram': [],
                '1 Ounce': []
            };

            // City data only has 24K rates in the rates array
            // We'll use daily_price_history to get all karat prices for the latest date
            const latestDay = city.daily_price_history.prices[0];
            
            if (latestDay) {
                // Build price arrays for each weight: [24K, 22K, 21K, 18K, 12K]
                transformedLiveData['1 Tola'] = [
                    latestDay['1_tola'],
                    latestDay['1_tola'] * 0.916,  // 22K approximation
                    latestDay['1_tola'] * 0.875,  // 21K approximation
                    latestDay['1_tola'] * 0.75,   // 18K approximation
                    latestDay['1_tola'] * 0.5     // 12K approximation
                ];
                
                transformedLiveData['10 Gram'] = [
                    latestDay['10_gram'],
                    latestDay['10_gram'] * 0.916,
                    latestDay['10_gram'] * 0.875,
                    latestDay['10_gram'] * 0.75,
                    latestDay['10_gram'] * 0.5
                ];
                
                transformedLiveData['1 Gram'] = [
                    latestDay['24k_per_gram'],
                    latestDay['22k_per_gram'],
                    latestDay['21k_per_gram'],
                    latestDay['18k_per_gram'],
                    latestDay['24k_per_gram'] * 0.5  // 12K approximation
                ];
                
                // Approximate 1 Ounce (31.1035 grams)
                transformedLiveData['1 Ounce'] = transformedLiveData['1 Gram'].map(price => price * 31.1035);
            }

            // Transform history data
            const transformedHistoryData = {};
            city.daily_price_history.prices.forEach(day => {
                transformedHistoryData[day.date] = day['1_tola'];
            });

            return {
                liveData: transformedLiveData,
                historyData: transformedHistoryData,
                scrapedAt: appState.cityData.scraped_at
            };
        }
    }

    // Return national data
    return {
        liveData: appState.liveData,
        historyData: appState.historyData,
        scrapedAt: appState.scrapedAt
    };
}

function renderUI() {
    const data = getCurrentData();
    if (!data.liveData || !data.historyData) return;

    // Temporarily set the data for rendering
    const originalLiveData = appState.liveData;
    const originalHistoryData = appState.historyData;
    const originalScrapedAt = appState.scrapedAt;

    appState.liveData = data.liveData;
    appState.historyData = data.historyData;
    appState.scrapedAt = data.scrapedAt;

    renderFeaturedPrices();
    renderAllPricesTable();
    renderPriceChart();

    // Restore original data
    appState.liveData = originalLiveData;
    appState.historyData = originalHistoryData;
    appState.scrapedAt = originalScrapedAt;
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
    // City Selector
    const citySelector = document.getElementById('citySelector');
    if (citySelector) {
        citySelector.addEventListener('change', (e) => {
            const cityCode = e.target.value || null;
            appState.setCity(cityCode);
            renderUI();
        });
    }

    // Tab Navigation
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            switchTab(tab);
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = menuToggle?.querySelector('.menu-icon');
    const closeIcon = menuToggle?.querySelector('.close-icon');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            const isActive = mobileMenu.classList.toggle('active');
            if (menuIcon && closeIcon) {
                menuIcon.style.display = isActive ? 'none' : 'block';
                closeIcon.style.display = isActive ? 'block' : 'none';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('active');
                if (menuIcon && closeIcon) {
                    menuIcon.style.display = 'block';
                    closeIcon.style.display = 'none';
                }
            }
        });
    }
    
    // Mobile Menu Items
    const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');
    mobileMenuItems.forEach(item => {
        item.addEventListener('click', () => {
            const tab = item.dataset.tab;
            switchTab(tab);
            // Close mobile menu
            mobileMenu?.classList.remove('active');
            if (menuIcon && closeIcon) {
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            }
        });
    });

    // Zakat Calculator - Add Entry Button
    const addEntryBtn = document.getElementById('addEntryBtn');
    if (addEntryBtn) {
        addEntryBtn.addEventListener('click', addGoldEntry);
    }

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
    const mobileInstallBtn = document.getElementById('mobileInstallBtn');
    const iosBanner = document.getElementById('iosBanner');
    const iosBannerClose = document.getElementById('iosBannerClose');
    
    console.log('📱 PWA Install Setup - Starting...');
    console.log('Install button element:', installBtn ? 'Found ✓' : 'Not found ✗');
    console.log('Mobile install button:', mobileInstallBtn ? 'Found ✓' : 'Not found ✗');
    console.log('User Agent:', navigator.userAgent);
    
    // Detect iOS
    const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isInStandaloneMode = ('standalone' in window.navigator) && window.navigator.standalone;
    
    console.log('Is iOS?', isIOS);
    console.log('Is in standalone mode?', isInStandaloneMode || window.matchMedia('(display-mode: standalone)').matches);
    
    // Show iOS banner if on iOS, not in standalone mode, and not dismissed
    if (isIOS && !isInStandaloneMode && iosBanner) {
        const iosBannerDismissed = localStorage.getItem('goldpk_ios_banner_dismissed');
        if (!iosBannerDismissed) {
            console.log('📱 Showing iOS install banner');
            iosBanner.style.display = 'block';
        }
    }
    
    // Handle iOS banner close
    if (iosBannerClose) {
        iosBannerClose.addEventListener('click', () => {
            if (iosBanner) {
                iosBanner.style.display = 'none';
            }
            localStorage.setItem('goldpk_ios_banner_dismissed', 'true');
        });
    }
    
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
        console.log('✅ PWA is already installed - buttons hidden');
        return;
    }
    
    console.log('⏳ Waiting for beforeinstallprompt event...');
    
    // Install handler function (shared by both buttons)
    async function handleInstallClick() {
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

        // Hide both install buttons
        if (installBtn) installBtn.style.display = 'none';
        if (mobileInstallBtn) mobileInstallBtn.style.display = 'none';
        
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu) {
            mobileMenu.classList.remove('active');
        }
    }
    
    // Listen for beforeinstallprompt event (Android/Desktop)
    window.addEventListener('beforeinstallprompt', (e) => {
        console.log('🎉 beforeinstallprompt fired! PWA is installable');
        // Prevent the default mini-infobar from appearing
        e.preventDefault();
        // Store the event for later use
        appState.deferredPrompt = e;
        
        // Show the install buttons
        if (installBtn) {
            installBtn.style.display = 'flex';
            console.log('✅ Install button shown');
        }
        if (mobileInstallBtn) {
            mobileInstallBtn.style.display = 'flex';
            console.log('✅ Mobile install button shown');
        }
    });

    // Handle desktop install button click
    if (installBtn) {
        installBtn.addEventListener('click', handleInstallClick);
    }
    
    // Handle mobile install button click
    if (mobileInstallBtn) {
        mobileInstallBtn.addEventListener('click', handleInstallClick);
    }

    // Listen for app installed event
    window.addEventListener('appinstalled', () => {
        console.log('PWA installed successfully');
        // Hide both install buttons
        if (installBtn) installBtn.style.display = 'none';
        if (mobileInstallBtn) mobileInstallBtn.style.display = 'none';
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
            console.log('🔄 Registering Service Worker...');
            const registration = await navigator.serviceWorker.register('./sw.js');
            console.log('✅ ServiceWorker registered successfully:', registration);
            console.log('Scope:', registration.scope);
        } catch (error) {
            console.error('❌ ServiceWorker registration failed:', error);
        }
    } else {
        console.warn('⚠️ Service Workers not supported in this browser');
    }
}

// ============================================
// Tab Navigation
// ============================================

function switchTab(tab) {
    appState.currentTab = tab;
    
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab);
    });
    
    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.toggle('active', content.id === `${tab}-tab`);
    });
    
    // If switching to zakat tab and no entries, add one
    if (tab === 'zakat' && appState.zakatEntries.length === 0) {
        addGoldEntry();
    }
}

// ============================================
// Zakat Calculator
// ============================================

const NISAB_THRESHOLD = 87.48; // grams (7.5 tola)
const ZAKAT_RATE = 0.025; // 2.5%

// Unit conversions to grams
const UNIT_TO_GRAMS = {
    'Tola': 11.664,
    'Gram': 1,
    'Ounce': 31.1035
};

// Karat to pure gold ratio
const KARAT_PURITY = {
    '24 Karat': 1.0,
    '22 Karat': 0.916,
    '21 Karat': 0.875,
    '18 Karat': 0.75,
    '12 Karat': 0.5
};

function addGoldEntry() {
    appState.zakatCounter++;
    const entryId = appState.zakatCounter;
    
    const entry = {
        id: entryId,
        weight: '',
        unit: 'Tola',
        karat: '24 Karat'
    };
    
    appState.zakatEntries.push(entry);
    renderZakatEntries();
    calculateZakat();
}

function removeGoldEntry(entryId) {
    appState.zakatEntries = appState.zakatEntries.filter(e => e.id !== entryId);
    renderZakatEntries();
    calculateZakat();
}

function updateGoldEntry(entryId, field, value) {
    const entry = appState.zakatEntries.find(e => e.id === entryId);
    if (entry) {
        entry[field] = value;
        calculateZakat();
    }
}

function renderZakatEntries() {
    const container = document.getElementById('goldEntries');
    if (!container) return;
    
    container.innerHTML = appState.zakatEntries.map(entry => `
        <div class="gold-entry" data-entry-id="${entry.id}">
            <div class="field-group">
                <label class="field-label" data-i18n="amount">${translations[appState.currentLang]['amount']}</label>
                <input 
                    type="number" 
                    class="field-input" 
                    value="${entry.weight}" 
                    placeholder="0"
                    min="0"
                    step="0.01"
                    onchange="updateGoldEntry(${entry.id}, 'weight', this.value)"
                    oninput="updateGoldEntry(${entry.id}, 'weight', this.value)"
                >
            </div>
            <div class="field-group">
                <label class="field-label" data-i18n="in-unit">${translations[appState.currentLang]['in-unit']}</label>
                <select class="field-select" onchange="updateGoldEntry(${entry.id}, 'unit', this.value)">
                    ${Object.keys(UNIT_TO_GRAMS).map(unit => `
                        <option value="${unit}" ${entry.unit === unit ? 'selected' : ''}>${unit}</option>
                    `).join('')}
                </select>
            </div>
            <div class="field-group">
                <label class="field-label" data-i18n="purity">${translations[appState.currentLang]['purity']}</label>
                <select class="field-select" onchange="updateGoldEntry(${entry.id}, 'karat', this.value)">
                    ${Object.keys(KARAT_PURITY).map(karat => `
                        <option value="${karat}" ${entry.karat === karat ? 'selected' : ''}>${karat.replace(' Karat', 'K')}</option>
                    `).join('')}
                </select>
            </div>
            ${appState.zakatEntries.length > 1 ? `
                <button class="btn-remove-entry" onclick="removeGoldEntry(${entry.id})" aria-label="Remove entry">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            ` : '<div></div>'}
        </div>
    `).join('');
}

function calculateZakat() {
    if (!appState.liveData) return;
    
    let totalGoldGrams = 0; // 24K equivalent
    let totalValue = 0;
    
    // Calculate totals
    appState.zakatEntries.forEach(entry => {
        const weight = parseFloat(entry.weight) || 0;
        if (weight <= 0) return;
        
        // Convert to grams
        const grams = weight * UNIT_TO_GRAMS[entry.unit];
        
        // Convert to 24K equivalent
        const pureGold = grams * KARAT_PURITY[entry.karat];
        totalGoldGrams += pureGold;
        
        // Calculate value (using current 24K 1 Gram price)
        const pricePerGram = appState.liveData['1 Gram'][0]; // 24K price
        const entryValue = pureGold * pricePerGram;
        totalValue += entryValue;
    });
    
    // Check if above Nisab
    const isAboveNisab = totalGoldGrams >= NISAB_THRESHOLD;
    const zakatAmount = isAboveNisab ? totalValue * ZAKAT_RATE : 0;
    
    // Update UI
    updateZakatSummary(totalGoldGrams, totalValue, isAboveNisab, zakatAmount);
}

function updateZakatSummary(totalGoldGrams, totalValue, isAboveNisab, zakatAmount) {
    // Total Gold
    const totalGoldEl = document.getElementById('totalGold');
    if (totalGoldEl) {
        totalGoldEl.textContent = `${totalGoldGrams.toFixed(2)} g`;
    }
    
    // Total Value
    const totalValueEl = document.getElementById('totalValue');
    if (totalValueEl) {
        totalValueEl.textContent = `PKR ${formatNumber(Math.round(totalValue))}`;
    }
    
    // Nisab Status
    const nisabStatusEl = document.getElementById('nisabStatus');
    if (nisabStatusEl) {
        const statusClass = isAboveNisab ? 'applicable' : 'not-applicable';
        const statusText = isAboveNisab ? translations[appState.currentLang]['above-nisab'] : translations[appState.currentLang]['below-nisab'];
        nisabStatusEl.innerHTML = `<span class="status-badge ${statusClass}">${statusText}</span>`;
    }
    
    // Zakat Due
    const zakatDueEl = document.getElementById('zakatDue');
    if (zakatDueEl) {
        zakatDueEl.textContent = `PKR ${formatNumber(Math.round(zakatAmount))}`;
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
    
    // Populate city dropdown
    populateCityDropdown();
    
    renderUI();

    // Initialize Zakat calculator with first entry if on zakat tab
    if (appState.currentTab === 'zakat') {
        addGoldEntry();
    }

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

