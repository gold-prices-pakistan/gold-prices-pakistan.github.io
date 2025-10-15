// ============================================
// Service Worker for Offline PWA Support
// Gold Prices Pakistan
// ============================================

const CACHE_NAME = 'goldpk-v1';
const RUNTIME_CACHE = 'goldpk-runtime-v1';

// Assets to cache on installation
// Note: Use relative paths for GitHub Pages subdirectory support
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './styles.css',
    './app.js',
    './manifest.json',
    './response-live.json',
    './response-history.json',
    './icon-192.png',
    './icon-512.png',
    'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js'
];

// ============================================
// Installation - Cache static assets
// ============================================
self.addEventListener('install', (event) => {
    console.log('[ServiceWorker] Installing...');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[ServiceWorker] Caching app shell');
                return cache.addAll(ASSETS_TO_CACHE.map(url => {
                    return new Request(url, { cache: 'reload' });
                }));
            })
            .then(() => {
                console.log('[ServiceWorker] Installed successfully');
                return self.skipWaiting();
            })
            .catch((error) => {
                console.error('[ServiceWorker] Installation failed:', error);
            })
    );
});

// ============================================
// Activation - Clean up old caches
// ============================================
self.addEventListener('activate', (event) => {
    console.log('[ServiceWorker] Activating...');
    
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
                            console.log('[ServiceWorker] Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('[ServiceWorker] Activated successfully');
                return self.clients.claim();
            })
    );
});

// ============================================
// Fetch - Serve from cache, fallback to network
// ============================================
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    // Skip cross-origin requests
    if (!event.request.url.startsWith(self.location.origin)) {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                // Return cached response if found
                if (cachedResponse) {
                    console.log('[ServiceWorker] Serving from cache:', event.request.url);
                    
                    // Update cache in background for next time
                    fetch(event.request)
                        .then((response) => {
                            if (response && response.status === 200) {
                                caches.open(RUNTIME_CACHE)
                                    .then((cache) => {
                                        cache.put(event.request, response);
                                    });
                            }
                        })
                        .catch(() => {
                            // Network failed, but we have cached version
                        });
                    
                    return cachedResponse;
                }

                // Not in cache, fetch from network
                console.log('[ServiceWorker] Fetching from network:', event.request.url);
                return fetch(event.request)
                    .then((response) => {
                        // Check if valid response
                        if (!response || response.status !== 200 || response.type === 'error') {
                            return response;
                        }

                        // Clone the response
                        const responseToCache = response.clone();

                        // Cache the fetched response
                        caches.open(RUNTIME_CACHE)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    })
                    .catch((error) => {
                        console.error('[ServiceWorker] Fetch failed:', error);
                        
                        // Return offline page or error response
                        return new Response(
                            JSON.stringify({
                                error: 'Offline',
                                message: 'No internet connection and resource not cached'
                            }),
                            {
                                headers: { 'Content-Type': 'application/json' },
                                status: 503,
                                statusText: 'Service Unavailable'
                            }
                        );
                    });
            })
    );
});

// ============================================
// Background Sync (for future use)
// ============================================
self.addEventListener('sync', (event) => {
    console.log('[ServiceWorker] Background sync:', event.tag);
    
    if (event.tag === 'sync-gold-prices') {
        event.waitUntil(
            fetch('/dummy-response.json')
                .then((response) => response.json())
                .then((data) => {
                    console.log('[ServiceWorker] Synced gold prices:', data);
                })
                .catch((error) => {
                    console.error('[ServiceWorker] Sync failed:', error);
                })
        );
    }
});

// ============================================
// Push Notifications (for future use)
// ============================================
self.addEventListener('push', (event) => {
    console.log('[ServiceWorker] Push notification received');
    
    const options = {
        body: event.data ? event.data.text() : 'Gold prices updated',
        icon: '/icon-192.png',
        badge: '/icon-192.png',
        vibrate: [200, 100, 200],
        tag: 'gold-price-update',
        requireInteraction: false
    };

    event.waitUntil(
        self.registration.showNotification('Gold Prices Pakistan', options)
    );
});

// ============================================
// Notification Click Handler
// ============================================
self.addEventListener('notificationclick', (event) => {
    console.log('[ServiceWorker] Notification clicked');
    
    event.notification.close();

    event.waitUntil(
        clients.openWindow('/')
    );
});

console.log('[ServiceWorker] Loaded');

