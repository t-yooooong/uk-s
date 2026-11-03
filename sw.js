// 설치용 최소 서비스워커: 항상 최신 화면을 서버에서 받아옵니다(캐시 안 함).
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* 네트워크 그대로 사용 */ });
