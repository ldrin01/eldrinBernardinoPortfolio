export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: false,
  modules: ['@nuxt/ui', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      'Plus Jakarta Sans': [300, 400, 500, 600, 700, 800]
    },
    download: true,
    inject: true
  },
  css: ['~/assets/main.css'],
  app: {
    baseURL: '/eldrinBernardinoPortfolio/',
    buildAssetsDir: 'assets'
  },
  ui: {
    colorMode: false
  }
})