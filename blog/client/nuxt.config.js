export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "client",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",
      },
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/fontawesome"],
  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },
  auth: {
    strategies: {
      laravelSanctum: {
        provider: "laravel/sanctum",
        url: "http://127.0.0.1:8000",
        endpoints: {
          login: {
            url: "/login",
          },
        },
      },
    },
  },

  axios: {
    baseURL: "http://127.0.0.1:8000",
    credentials: true,
  },

  router: {
    middleware: ["auth"],
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next", "bootstrap-vue/nuxt"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: null,
    loaders: {
      vue: {
        prettify: false,
      },
    },
  },
};
