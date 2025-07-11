// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  compatibilityDate: '2025-05-15',

  devtools: { enabled: true },
  ssr: false, // Disable Server-Side Rendering
  app: {
    baseURL: '/eldrinBernardinoPortfolio/', // IMPORTANT: Replace 'my-nuxt-project' with your repository name. This is crucial for GitHub Pages.
    buildAssetsDir: 'assets' // This is the default, but good to be explicit
  },
  modules: ['@nuxt/ui'],
})