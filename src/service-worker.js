/* eslint-disable no-restricted-globals */
import md5 from "md5";
const STATIC_FILES = [
  '/meta/coverImage.jpg',
  '/meta/badge-icon.png',
  '/meta/add.png',
  '/meta/view.png',
  '/meta/other.png',
  '/meta/android-chrome-192x192.png',
  '/meta/android-chrome-512x512.png',
  '/meta/apple-touch-icon.png',
  '/meta/browserconfig.xml',
  '/meta/coverImage.jpeg',
  '/meta/favicon-16x16.png',
  '/meta/favicon-32x32.png',
  '/meta/maskable_icon_x512.png',
  '/meta/maskable_icon_x128.png',
  '/meta/favicon.ico',
  '/meta/mstile-150x150.png',
  '/meta/safari-pinned-tap.svg.png',
  '/meta/site.webmanifest', 
  "/font/400.ttf",
  "/font/500.ttf",
  "/font/700.ttf",
  "/font/900.ttf",
  "/"
];

const REACT_FILES = self._WB_MANIFEST;
const reactFilesUrls = REACT_FILES.map((file) => file.url);

const allFilesUrls = [...STATIC_FILES, ...reactFilesUrls];

const hash = md5(JSON.stringify(allFilesUrls));

const installFn = async () => {
  self.skipWaiting();

  const cacheInstance = await caches.open(hash);

  const cachPromise = await cacheInstance.addAll(allFilesUrls);
  return await cachPromise;
};

const activateFn = async () => {
  const allHashes = await caches.keys();
  const filteredHashes = allHashes.filter(key => key !== hash)
  const deletingPromise = filteredHashes.map(key => caches.delete(key))
  return await Promise.all(deletingPromise)
};

const fetchFn = async (event) => {

    const cacheInstance = await caches.open(hash)
    const cacheResponse = await cacheInstance.match(event.request)

    if(!cacheResponse) return await fetch(event.request)

    return await cacheResponse
};

const notificationClickFn = async (event) => {
    event.notification.close();

    if(event.action === "add"){
        console.log("added")
    }
    if(event.action === "view"){
        console.log("Viewed")
    }

}
self.addEventListener("install", event => event.awaitUntil(installFn(event)));

self.addEventListener("active", event => event.awaitUntil(activateFn(event)));

self.addEventListener("fetch", event =>event.respondWith(fetchFn(event)));

self.addEventListener("notificationclick", event => notificationClickFn(event))
