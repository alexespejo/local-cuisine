// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 modules: ["nuxt-chatgpt"],
 chatgpt: {
  apiKey: "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",
 },
 css: ["~/assets/css/main.css"],
 postcss: {
  plugins: {
   tailwindcss: {},
   autoprefixer: {},
  },
 },
});
