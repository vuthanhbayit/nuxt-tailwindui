<template>
  <component :is="tag" :class="$style.anchor" v-bind="attrs" v-on="$listeners">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Anchor',

  props: {
    href: { type: String, default: '' },
    nuxt: { type: Boolean, default: false },
  },

  setup(props, context) {
    const tag = computed(() => (props.nuxt ? 'nuxt-link' : 'a'))

    const attrs = computed(() => {
      const _attrs = {} as Record<string, unknown>

      if (props.nuxt) {
        _attrs.to = props.href
      } else {
        _attrs.href = props.href
      }

      return {
        ..._attrs,
        ...context.attrs,
      }
    })

    return { tag, attrs }
  },
})
</script>

<style module>
.anchor {
  @apply text-primary hover:text-primary-hover;
}
</style>
