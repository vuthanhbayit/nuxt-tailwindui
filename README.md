# @vt7/nuxt-tailwindui

## Getting started

```
yarn add @vt7/nuxt-tailwindui
```

## Basic Usage

In `nuxt.config.js`

```js
export default {
  ...
  components: true,
  buildModules: [
    ...
    '@vt7/nuxt-tailwindui/nuxt',
  ],
  build: {
    postcss: {
      plugins: {
        'postcss-nesting': {},
        'postcss-nested': {},
      }
    }    
  },
  tailwindUI: {
    prefix: 't',
  }
}
```

In `tailwind.config.js`


```js
module.exports = {
  ...
  theme: {
    extend: {
        colors: {
          primary: {
            DEFAULT: colors.indigo['600'],
              focus: colors.indigo['500'],
              hover: colors.indigo['700'],
              content: colors.white,
          },
          secondary: {
            DEFAULT: colors.indigo['100'],
              focus: colors.indigo['500'],
              hover: colors.indigo['200'],
              content: colors.indigo['700'],
          },
        }
    }
  }
}
```

In `index.vue`

```vue
<template>
  <t-button color="primary" size="sm">Button base</t-button>
</template>
```
