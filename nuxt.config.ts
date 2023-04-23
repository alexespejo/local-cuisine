// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 modules: ["nuxt-chatgpt"],
 chatgpt: {
  apiKey: process.env.NUXT_API_SECRET,
 },
 css: ["~/assets/css/main.css"],
 postcss: {
  plugins: {
   tailwindcss: {},
   autoprefixer: {},
  },
 },
});
