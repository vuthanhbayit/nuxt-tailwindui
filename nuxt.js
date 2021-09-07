import { join } from 'path'

const DEFAULT_OPTION = {
  prefix: 't',
}

export default function (_moduleOptions) {
  const { nuxt } = this

  const moduleOptions = {
    ...DEFAULT_OPTION,
    ...nuxt.options.tailwindUI,
    ..._moduleOptions,
  }

  this.nuxt.hook('components:dirs', dirs => {
    dirs.push({
      path: join(__dirname, 'components'),
      prefix: moduleOptions.prefix,
    })
  })
}
