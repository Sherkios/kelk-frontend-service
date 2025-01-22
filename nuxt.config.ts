// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["assets/scss/main.scss"],

  alias: {
    assets: "/assets",
    components: "/components",
  },

  components: [
    {
      path: "~/components/",
      pathPrefix: false,
    },
  ],

  modules: ["@nuxt/eslint"],
});
