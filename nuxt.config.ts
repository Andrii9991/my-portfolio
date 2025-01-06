// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  modules: ["@nuxtjs/tailwindcss"],
  devtools: { enabled: true },
  srcDir: "src/.",
  components: {
    dirs: [
      {
        path: "~/components/general",
        global: true,
      },
    ],
  },
});
