// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
// @ts-ignore
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;'
        }
      }
    }
  },
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
