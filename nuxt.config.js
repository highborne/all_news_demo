export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],
  modules: [
      '@nuxtjs/tailwindcss',
      [
        '@storyblok/nuxt',
        {
          accessToken:  process.env.STORYBLOK_ACCESS_TOKEN,
          apiOptions: {
            region: '' // Set 'US" if your space is created in US region (EU default)
          }
        }
      ]
  ],
  runtimeConfig: {
    gnewsApiKey: process.env.GNEWS_API_KEY,
  },
})
