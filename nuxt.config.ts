// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    '@pinia/nuxt',
    ["@nuxtjs/google-fonts", {
      families: {
        Lato: {
          wght: [300, 400, 700],
          ital: 300
        }
      }
    }],
    'nuxt-icon',
    ['@vee-validate/nuxt', {
       autoImports: true,
    }]
  ],
  shadcn: {
  prefix: 'Ui',
  componentDir: './components/ui'
  },
  pinia: {
    storesDirs: ['./store/**']
  }
})