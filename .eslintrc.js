module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-empty-pattern': 'off',
  },
}
