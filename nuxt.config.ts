export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@vite-pwa/nuxt'],
  pwa: {
    manifest: {
      name: 'Robots',
      short_name: 'Robots',
      description: 'Robots',
      start_url : "/",
      lang : "ru-RU",
      display : "standalone"
    },
    workbox: {
      navigateFallback: '/'
    },
    devOptions: {
      enabled: true,
      type: 'module'
    }
  }
})
