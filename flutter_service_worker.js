'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "eaea6cdeb8d474e0458231d458cbf758",
"index.html": "26bac4e087c9c79283f07266af0ee77b",
"/": "26bac4e087c9c79283f07266af0ee77b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "de2a131faa5aa0eb2beb40aee1dd19cb",
"assets/assets/icons/clients_icon.png": "c6b5232dfa633e2f3f83a3a03eef36ee",
"assets/assets/icons/timesheet_team_icon.png": "d19ef14b852ac584f3e4ad269308dab5",
"assets/assets/icons/reports_icon.png": "659b5f48240f5a74b46861a49b588cf9",
"assets/assets/icons/escalations_icon.png": "0b00f66ef13d2bae584e5ccef632439b",
"assets/assets/icons/clock.png": "305e56aae121099cead1fc24b0ad63d1",
"assets/assets/icons/team_icon.png": "c92735efade2de8963b8845d48003ad6",
"assets/assets/icons/2x/clients_icon.png": "bc4dfa97db3d15e35fad0a2039b0faad",
"assets/assets/icons/2x/timesheet_team_icon.png": "420a3156910b819f4600836d506b1175",
"assets/assets/icons/2x/reports_icon.png": "7b05ea1d319482e9390d7093956126b6",
"assets/assets/icons/2x/escalations_icon.png": "04d8a6521199166c6b4f45e9dcb23ec4",
"assets/assets/icons/2x/clock.png": "ed0a380ef9e1d1b14b85cc70ec90908a",
"assets/assets/icons/2x/team_icon.png": "51097c7c6dc10a327d1eac52ef0257bf",
"assets/assets/icons/2x/notices_icon.png": "393fb239f55a0675c92b0712ca946408",
"assets/assets/icons/2x/active_icon.png": "5fb1475049462c1dea422822d70512ec",
"assets/assets/icons/2x/masters_icon.png": "876ff93df03d23b4339b590e5130da3e",
"assets/assets/icons/2x/recurring_tasks_icon.png": "92aa71c39bcbe463c386a92c776df133",
"assets/assets/icons/2x/Bell.png": "7962a3ef8632f45243ef47b8e28040a0",
"assets/assets/icons/2x/files_icon.png": "a2c0bb3e7b22e33e61c16157c1921095",
"assets/assets/icons/2x/tasks_icon.png": "df52d088c6f8680bdae60f502ff77345",
"assets/assets/icons/2x/overdue.png": "bc18640312a227d635c2441e214f200d",
"assets/assets/icons/2x/setting_icon.png": "a98148b8e20a08290a92b42ff4f85217",
"assets/assets/icons/2x/dashboard_icon.png": "f0df104f1c8e3c3a9d0068fd9d9b81f0",
"assets/assets/icons/2x/points.png": "cbd82cb5c53513bf125fade9e11e2848",
"assets/assets/icons/2x/active.png": "06d54b0337b3471a5e461fe72dfc88c3",
"assets/assets/icons/2x/leaderboards_icon.png": "85f733c503b2078515f100b11ea0b23f",
"assets/assets/icons/2x/download.png": "e5648acdf97292043a602d820d0d1d89",
"assets/assets/icons/2x/timesheet_icon.png": "2c7c0f704b387196769924a73f35d78e",
"assets/assets/icons/2x/clock_icon.png": "396294569033e1b32007104afe6a7bc0",
"assets/assets/icons/2x/inactive_icon.png": "4bbf2e8e13588e6d3dee415ec6677bb4",
"assets/assets/icons/notices_icon.png": "0bcd27ba7cd8d6287d46dbb663133c93",
"assets/assets/icons/active_icon.png": "5ca287a6e7034f6af6c2141814fa0f2a",
"assets/assets/icons/masters_icon.png": "1f9a4d624889223c08716ac613fb46f1",
"assets/assets/icons/recurring_tasks_icon.png": "770ddb50a6e7304db412a8f6803d885b",
"assets/assets/icons/Bell.png": "1e8b8e35261af14ce150e7472839d232",
"assets/assets/icons/files_icon.png": "334a3f991fd1cad80677f15f84f84a9a",
"assets/assets/icons/tasks_icon.png": "396dbe9e833de7d2d3780d62f55daa1d",
"assets/assets/icons/overdue.png": "b3a33756a63ad3b665a402819c64733a",
"assets/assets/icons/setting_icon.png": "8d64eb40810f75afb4d2f28c9d0b05d3",
"assets/assets/icons/dashboard_icon.png": "33ddbb8219527966a81bc3d3bf0e69a5",
"assets/assets/icons/points.png": "493b75c8aec9fb41ef5fa26ea740cea6",
"assets/assets/icons/3x/clients_icon.png": "6c3859f9468015316980fa945487eab5",
"assets/assets/icons/3x/timesheet_team_icon.png": "fc35c075f20c47deee96e077df78efb9",
"assets/assets/icons/3x/reports_icon.png": "212fdcce352eaf64d47eb7af982fb9f9",
"assets/assets/icons/3x/escalations_icon.png": "7f0aeef9fc8e495614492d99e7126377",
"assets/assets/icons/3x/clock.png": "a17035d0e689d3e119cb62cc09a6d85f",
"assets/assets/icons/3x/team_icon.png": "5f54267a610f0006acf29ac4c6c2bbaa",
"assets/assets/icons/3x/notices_icon.png": "627f8f4a90632dd6d3118d7e302e9231",
"assets/assets/icons/3x/active_icon.png": "5898bea6475835b45795d5703b77805e",
"assets/assets/icons/3x/masters_icon.png": "793a7f666f8c403a9c9eaf86112b17ab",
"assets/assets/icons/3x/recurring_tasks_icon.png": "ff6355cd35b1c8505af461b4cb1d4e90",
"assets/assets/icons/3x/Bell.png": "610d9650bdfde19eefe0588601cf5a58",
"assets/assets/icons/3x/files_icon.png": "5c9a98d1e9e243f6c1a8f1602fc56120",
"assets/assets/icons/3x/tasks_icon.png": "b04b05d926b2a298e212347933c2c0ce",
"assets/assets/icons/3x/overdue.png": "2414067067f5101cd8f0c126a9494e61",
"assets/assets/icons/3x/setting_icon.png": "573414b1de4326e32067a27596e1723e",
"assets/assets/icons/3x/dashboard_icon.png": "148b53685c45a930c2e9ca1ae90b4495",
"assets/assets/icons/3x/points.png": "17cb7ae4814e1fcde365b250dab007ae",
"assets/assets/icons/3x/active.png": "428a2863d1ff05293a65b1383e95e8c9",
"assets/assets/icons/3x/leaderboards_icon.png": "80026352c5334bf37b33fa9e886e5c58",
"assets/assets/icons/3x/download.png": "142a8701b2316158908c83d80f055368",
"assets/assets/icons/3x/timesheet_icon.png": "c285a53bd8865151a2f056a20889cfc0",
"assets/assets/icons/3x/clock_icon.png": "c7126314f31a852c1dc427033e643272",
"assets/assets/icons/3x/inactive_icon.png": "cfa9a475e86eba77e1d048db09d5bd99",
"assets/assets/icons/active.png": "368ab8c4e61c12872efa182414854f62",
"assets/assets/icons/leaderboards_icon.png": "a30185ca49dd597315d91eb1596bdf91",
"assets/assets/icons/download.png": "007f0842b821e3a8fabab34246ad686b",
"assets/assets/icons/timesheet_icon.png": "183705267659fb715501df469e69b36b",
"assets/assets/icons/clock_icon.png": "b4bc85c533e548504412e1310cbcba6b",
"assets/assets/icons/inactive_icon.png": "5aaf8596c303c04a37a7a06bbaf4b56d",
"assets/assets/2x/appbar_logo.png": "a46d01cb2bfa28dabf56ba937d03c2e9",
"assets/assets/2x/Logo.png": "b55aa7edc539f63e0515d6336651ad77",
"assets/assets/appbar_logo.png": "9d934b941274d7e6abf21dc7f8dbd01b",
"assets/assets/fonts/Inter-Regular.ttf": "37dcabff629c3690303739be2e0b3524",
"assets/assets/fonts/Inter-Bold.ttf": "a041f18d0d0c67b376bec0343f7c0cf0",
"assets/assets/fonts/Inter-SemiBold.ttf": "e5532d993e2de30fa92422df0a8849dd",
"assets/assets/fonts/Inter-Medium.ttf": "8540f35bf8acd509b9ce356f1111e983",
"assets/assets/3x/appbar_logo.png": "cbe7afa9df48d9cbaccf283411f94c5e",
"assets/assets/3x/Logo.png": "6a635fd68886c06e890110ab513c001e",
"assets/assets/Logo.png": "c3b98a34bc90d46a4dc97be767fd18a2",
"assets/fonts/MaterialIcons-Regular.otf": "b2f3655afc2c69f3e6e88db64993cf4d",
"assets/NOTICES": "5cfe18db5260414a910d43b996807e4e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/FontManifest.json": "cd41f02f7a8471b8eff1b132865d9c1c",
"assets/AssetManifest.bin": "b9c4e1b319e7a34bd974e8cb11fc8a51",
"assets/AssetManifest.json": "e3b4fa11e7bde7191e35316bd0a46336",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_bootstrap.js": "003d21e647f3d4900a4e566c5665333a",
"version.json": "f507b649912b8dc8a62912136206dbb3",
"main.dart.js": "b271ae952ebf07de8960a8b4682b111e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
