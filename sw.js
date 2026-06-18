// A minimal Service Worker required by Android/Chrome to display Push Notifications
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Leave empty for now - just needed for the PWA and Notification API
});
