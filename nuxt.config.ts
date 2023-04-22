// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 modules: ["nuxt-chatgpt"],
 // entirely optional
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
