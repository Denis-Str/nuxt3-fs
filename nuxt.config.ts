// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
// @ts-ignore
  css: ['@/fsd/app/styles/index.scss'],
  nitro: {
    devProxy: {
      '/typicodeApi': {
        target: process.env.TYPECODE_PUBLIC_API_BASE,
        changeOrigin: true,
        prependPath: true,
      }
    }
  }
})
