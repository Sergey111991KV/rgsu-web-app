<template>
  <div>
    <VitePwaManifest />
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>


<script setup>
useHead({
  // script: [{ children: "console.log('Hello, world!');" }],
  script: [{src: "https://telegram.org/js/telegram-web-app.js"}],
});
</script>

<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}
html {
  box-sizing: border-box;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
body {
  font-family: "Source Sans Pro", Arial, Helvetica, sans-serif;
  box-sizing: inherit;
  position: relative;
  overflow-x: hidden;
}
::-webkit-scrollbar,
::-webkit-scrollbar-thumb {
  width: 0;
  height: 0;
  visibility: hidden;
}

body {
  color: var(--tg-theme-text-color);
}
</style>
