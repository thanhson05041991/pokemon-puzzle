'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c2fa95e847479b2233705460d9b0ebab",
"assets/assets/images/background.jpg": "6156d4ee1ff658cf0a53b71532332f90",
"assets/assets/images/crop.dart": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/eevee/eevee.jpg": "5d774171988e84f8264e40fb5a8ba105",
"assets/assets/images/eevee/p1.jpg": "bbd5cf24fb2c5159a61a58fac76806f6",
"assets/assets/images/eevee/p10.jpg": "f4ff2d8b9322a35d0120c951f8ea6cb2",
"assets/assets/images/eevee/p11.jpg": "1002efcf4ca735afd7d3546d642b6d08",
"assets/assets/images/eevee/p12.jpg": "95a04b3537250b4e846a2be256039c24",
"assets/assets/images/eevee/p13.jpg": "98156ef8db86ea058070c2ae11e07977",
"assets/assets/images/eevee/p14.jpg": "f1a0fe8375f612f25a1cfd363f36c4d5",
"assets/assets/images/eevee/p15.jpg": "c3d26734f3bb379ffcfbfd53f22bbace",
"assets/assets/images/eevee/p16.jpg": "179f8c4b30c2109efcfdd41f2b79ed67",
"assets/assets/images/eevee/p2.jpg": "bcc5a1462b002554c290fb0f64b8a7cd",
"assets/assets/images/eevee/p3.jpg": "285042750b86c109bbb15e9eb1aafcdd",
"assets/assets/images/eevee/p4.jpg": "6ce61543af0d805d94db9c9ab61cec41",
"assets/assets/images/eevee/p5.jpg": "3a62d74d54f940eda8c5b49b5e9caa08",
"assets/assets/images/eevee/p6.jpg": "fba83b4d3971bd29dd5ddf20dee9c096",
"assets/assets/images/eevee/p7.jpg": "7ffa721b0526534f8168f2dd3eba44a1",
"assets/assets/images/eevee/p8.jpg": "3e14ae777b3bf1b4881f07b11410c3ca",
"assets/assets/images/eevee/p9.jpg": "d73050ee3e7a4a2aaced956abdd9ab99",
"assets/assets/images/pikachu/p1.jpg": "e6908177401c97e1076423ce8b298bf7",
"assets/assets/images/pikachu/p10.jpg": "be427717d7178342691219ec2e751685",
"assets/assets/images/pikachu/p11.jpg": "b8b689a037a57ca3259973b76434c45e",
"assets/assets/images/pikachu/p12.jpg": "76f651789623fae53caba2690f800376",
"assets/assets/images/pikachu/p13.jpg": "0f5bf38904afc960afde02121c598381",
"assets/assets/images/pikachu/p14.jpg": "6f003f9f3c93010dea5e2516c4b6d88c",
"assets/assets/images/pikachu/p15.jpg": "51bbcfc8d532a6ad0c83d26463669fc2",
"assets/assets/images/pikachu/p16.jpg": "af69b59f42488a453dc85bc8e7b38853",
"assets/assets/images/pikachu/p2.jpg": "955bf5b511aad6a0d58ea88b1dd6204e",
"assets/assets/images/pikachu/p3.jpg": "aea5ff492594eda3f4bcc9d53d019d19",
"assets/assets/images/pikachu/p4.jpg": "3c635c5bb548e174a62277427bf1f9d2",
"assets/assets/images/pikachu/p5.jpg": "2a2f430f6c875dd7d50d62a313fae288",
"assets/assets/images/pikachu/p6.jpg": "1aca9862843f704b318ae796e9b1ee89",
"assets/assets/images/pikachu/p7.jpg": "cdf7742256c959094dde6d208dc55db7",
"assets/assets/images/pikachu/p8.jpg": "78f6bccd256b7d58a4da37c6da12ee0b",
"assets/assets/images/pikachu/p9.jpg": "9f90bb2b991d72b5b9ce9784d9b82a2b",
"assets/assets/images/pikachu/pikachu.jpg": "605a8c140a59959b7e82b693e98ab75f",
"assets/assets/images/pikachu.jpg": "671c348f570b4dae773dc43033f82349",
"assets/assets/images/pokemon.png": "396619b37a540fc538a7f24d027c8cc7",
"assets/assets/images/puzzle.png": "da7b162e8477d29adc21ab2764961ed4",
"assets/assets/images/squirtle/p1.jpg": "41144da2c962a1906ca2e00e1caa7a6f",
"assets/assets/images/squirtle/p10.jpg": "866a66ff4de26f8db009c915df44c46d",
"assets/assets/images/squirtle/p11.jpg": "2e0218528b4ec5f0f42933b50bea7d7a",
"assets/assets/images/squirtle/p12.jpg": "6d2ab878f1d4ba2a439ffaf0c2416e9a",
"assets/assets/images/squirtle/p13.jpg": "26e25030ab039986716a5f1c9686dbc0",
"assets/assets/images/squirtle/p14.jpg": "fe05273ce2f867126e36ff4b8871980e",
"assets/assets/images/squirtle/p15.jpg": "6a9320acbe01f37c5fac7f73c3e57f01",
"assets/assets/images/squirtle/p16.jpg": "2d19c9cf167489b3620bec1fe4e4fc29",
"assets/assets/images/squirtle/p2.jpg": "92322646681deac7a9bfc18442a13095",
"assets/assets/images/squirtle/p3.jpg": "9ded75ec8390005856a4993d9b66ceeb",
"assets/assets/images/squirtle/p4.jpg": "b8719783bfab5caf70b832a3d198c053",
"assets/assets/images/squirtle/p5.jpg": "34236d1e982a5d81f9fa3b4287111eeb",
"assets/assets/images/squirtle/p6.jpg": "1d4564a378827d955be92269a21fb807",
"assets/assets/images/squirtle/p7.jpg": "3f7c47ce2a163c02051868681a6632cf",
"assets/assets/images/squirtle/p8.jpg": "b8936a38a4c63fa874547cce0c7fba83",
"assets/assets/images/squirtle/p9.jpg": "76a72748ecefcc8b53d1a7de6696bc1d",
"assets/assets/images/squirtle/squirtle.jpg": "cd22eec47aae7270cb4300e9444d74a3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "2ceedb153a9ddf191c47e7cb8b46fda6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4cb457ceb0acc63342145c0a87dccb16",
"/": "4cb457ceb0acc63342145c0a87dccb16",
"main.dart.js": "ee9db49f68c89ca5d130b03c010f026a",
"manifest.json": "a2bf990575a36007bf96b9ee3ef0b781",
"version.json": "4a9fac54d4046d487a170ef36e44d9c2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
