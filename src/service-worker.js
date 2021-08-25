/* eslint-disable no-restricted-globals */
import md5 from "md5";
//Add meta file..15:50 on the video
const STATIC_FILES = [
  //add metas... 15:50
  //add cover image on meta...59:20 on the video
  //add badge image as well 1:15:12 - 1:18:15
  "/font/400.ttf",
  "/font/500.ttf",
  "/font/700.ttf",
  "/font/900.ttf",
  "/"
];
//check mobile app access 30:00 on the video
//add icon 40:00 - 50:00

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