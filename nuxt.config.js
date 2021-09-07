export default {
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  server: {
    port: 3006,
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/composition-api/module',
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  plugins: ['@/plugins/tailwindUi'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-import': true,
        'postcss-nesting': true,
        'postcss-nested': true,
      },
    },
  },
}
