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
      display : "fullscreen",
      icons: [
        {
          src: "/android-icon-36x36.png",
          type: "image/png",
          sizes: "36x36",
        },
        {
          src: "/android-icon-48x48.png",
          type: "image/png",
          sizes: "48x48",
        },
        {
          src: "/android-icon-72x72.png",
          type: "image/png",
          sizes: "72x72",
        },
        {
          src: "/android-icon-96x96.png",
          type: "image/png",
          sizes: "96x96",
        },
        {
          src: "/android-icon-144x144.png",
          type: "image/png",
          sizes: "144x144",
        },
        {
          src: "/android-icon-48x48.png",
          type: "image/png",
          sizes: "192x192",
        },
        {
          src: "/apple-icon-57x57.png",
          type: "image/png",
          sizes: "57x57",
        },
        {
          src: "/apple-icon-60x60.png",
          type: "image/png",
          sizes: "60x60",
        },
        {
          src: "/apple-icon-72x72.png",
          type: "image/png",
          sizes: "72x72",
        },
        {
          src: "/apple-icon-76x76.png",
          type: "image/png",
          sizes: "76x76",
        },
        {
          src: "/apple-icon-114x114.png",
          type: "image/png",
          sizes: "114x114",
        },
        {
          src: "/apple-icon-120x120.png",
          type: "image/png",
          sizes: "120x120",
        },
        {
          src: "/apple-icon-144x144.png",
          type: "image/png",
          sizes: "144x144",
        },
        {
          src: "/apple-icon-152x152.png",
          type: "image/png",
          sizes: "152x152",
        },
        {
          src: "/apple-icon-180x180.png",
          type: "image/png",
          sizes: "180x180",
        },
        {
          src: "/favicon-16x16.png",
          type: "image/png",
          sizes: "16x16",
        },
        {
          src: "/favicon-32x32.png",
          type: "image/png",
          sizes: "32x32",
        },
        {
          src: "/favicon-96x96.png",
          type: "image/png",
          sizes: "96x96",
        },
        {
          src: "/favicon.ico",
          type: "image/x-icon",
          sizes: "16x16",
        },
        {
          src: "/ms-icon-70x70.png",
          type: "image/png",
          sizes: "70x70",
        },
        {
          src: "/ms-icon-144x144.png",
          type: "image/png",
          sizes: "144x144",
        },
        {
          src: "/ms-icon-150x150.png",
          type: "image/png",
          sizes: "150x150",
        },
        {
          src: "/ms-icon-310x310.png",
          type: "image/png",
          sizes: "310x310",
        },
      ]
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
