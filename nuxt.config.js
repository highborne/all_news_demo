export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],

  modules: [
    '@nuxtjs/tailwindcss',
    '@storyblok/nuxt'
  ],

  storyblok: {
    accessToken: process.env.STORYBLOK_TOKEN,
    bridge: true,
    apiOptions: {
      region: ''
    }
  },

  runtimeConfig: {
    gnewsApiKey: process.env.GNEWS_API_KEY,
    public: {
      storyblokToken: process.env.STORYBLOK_TOKEN,
      storyblokVersion: process.env.STORYBLOK_VERSION,
    }
  }
})
