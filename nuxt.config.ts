// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-aos", "@nuxt/image"],
  ssr: false,
  nitro: {
    preset: "static",
  },
  build: {
    transpile: ["vue"],
  },
  devtools: { enabled: true },
  srcDir: "src/.",

  css: ["@/assets/style/main.css", "aos/dist/aos.css"],
  components: {
    dirs: [
      {
        path: "~/components/general",
        global: true,
      },
    ],
  },
});
