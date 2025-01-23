// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["assets/scss/main.scss"],

  alias: {
    assets: "/assets",
    components: "/components",
    pages: "/pages",
    layouts: "/layouts",
    plugins: "/plugins",
    utils: "/utils",
  },

  components: [
    {
      path: "~/components/",
      pathPrefix: false,
    },
  ],

  runtimeConfig: {
    AUTH_HOST: "",
    AUTH_PORT: "",
  },

  plugins: ["plugins/vee-validate.ts"],
  modules: ["@nuxt/eslint"],
});
