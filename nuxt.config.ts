// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    authSecret: process.env.AUTH_SECRET,
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@sidebase/nuxt-auth',
    'nuxt-server-utils',
  ],
  nuxtServerUtils: {
    mongodbUri: process.env.MONGODB_URI,
  },
  auth: { 
    provider: { 
      type: 'authjs' 
    } 
  },
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
