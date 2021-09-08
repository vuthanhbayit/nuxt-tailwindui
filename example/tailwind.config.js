const colors = require('tailwindcss/colors')

export default {
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
      },
    },
  },
}
