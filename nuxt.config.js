export default {
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '~/components/', prefix: 't' }],

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
    'nuxt-storm',
    '../nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      cssModules: {
        modules: {
          localIdentName:
            process.env.NODE_ENV !== 'production'
              ? '[local]_[hash:base64:4]'
              : '[hash:base64:4]',
        },
      },
    },
    postcss: {
      plugins: {
        'postcss-import': true,
        'postcss-nesting': true,
        'postcss-nested': true,
      },
    },
  },
}
