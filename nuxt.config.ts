// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 modules: ["nuxt-chatgpt", "nuxt-appwrite", "@pinia/nuxt"],
 chatgpt: {
  apiKey: process.env.NUXT_API_SECRET,
 },
 css: ["~/assets/css/main.css"],
 appwrite: {
  endpoint: "http://localhost/v1",
  project: "6444d5aeac9ecae1b974",
 },
 pinia: {
  autoImports: [
   // automatically imports `defineStore`
   "defineStore", // import { defineStore } from 'pinia'
   ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
  ],
 },
 postcss: {
  plugins: {
   tailwindcss: {},
   autoprefixer: {},
  },
 },
});
