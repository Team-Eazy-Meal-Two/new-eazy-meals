/* eslint-disable no-restricted-globals */

const files = self.__WB_MANIFEST;
console.log(files);

self.addEventListener("install", () => {
  self.skipWaiting();
  console.log("installing");
});
self.addEventListener("activate", () => console.log("activating"));

self.addEventListener("fetch", (event) => {
  console.log(event);

  if (
    event.request.headers &&
    event.request.headers.get("Accept") &&
    event.request.headers.get("Accept").includes("text/html")
  ) {
    event.respondWith(
      new Response(["<div>Hello World </div>"], {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      })
    );
  }

  event.respondWith(fetch(event.request));
});
