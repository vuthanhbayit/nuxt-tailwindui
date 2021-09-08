const colors = require('tailwindcss/colors')

export default {
  mode: 'jit',
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
        error: colors.red['500'],
        info: colors.blue['500'],
        warning: colors.yellow['500'],
        success: colors.green['500'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
