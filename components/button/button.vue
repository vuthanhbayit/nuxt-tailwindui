<template>
  <component
    :is="tag"
    :class="{
      [$style.button]: true,
      [$style.buttonSm]: size === 'sm',
      [$style.buttonXs]: size === 'xs',
      [$style.buttonXs]: size === 'xs',
      [$style.buttonMd]: size === 'md',
      [$style.buttonLg]: size === 'lg',
      [$style.buttonPrimary]: color === 'primary',
      [$style.buttonSecondary]: color === 'secondary',
      [$style.buttonOutline]: color === 'outline',
      [$style.buttonBlock]: block,
      [$style.buttonRounded]: rounded,
      [$style.buttonCircle]: circle,
      [$style.buttonDisabled]: disabled,
      [$style.buttonLoading]: loading,
    }"
    v-bind="attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api'
export type Size = 'xs' | 'sm' | 'md' | 'lg'
export type Color = 'primary' | 'secondary' | 'outline'
export type Type = 'button' | 'submit' | 'reset'

export default defineComponent({
  name: 'Button',

  props: {
    size: { type: String as PropType<Size>, default: 'md' },
    color: { type: String as PropType<Color>, default: '' },
    type: { type: String as PropType<Type>, default: 'button' },
    block: { type: Boolean, default: false },
    rounded: { type: Boolean, default: false },
    circle: { type: Boolean, default: false },
    nuxt: { type: Boolean, default: false },
    href: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
  },

  setup(props, context) {
    const tag = computed(() => {
      return props.nuxt ? 'nuxt-link' : 'button'
    })

    const attrs = computed(() => {
      const _attrs = {
        ...context.attrs,
      } as Record<string, unknown>

      if (props.nuxt) _attrs.to = props.href

      if (props.disabled) _attrs.disabled = true

      return _attrs
    })

    return { attrs, tag }
  },
})
</script>

<style lang="postcss" module>
.button {
  @apply inline-block items-center;
  @apply border border-transparent;
  @apply font-medium;
  @apply rounded-md;
  @apply focus:outline-none focus:ring-2 focus:ring-offset-2;
}
.buttonPrimary {
  @apply text-primary-content bg-primary;
  @apply hover:bg-primary-hover;
  @apply focus:ring-primary-focus;
  @apply shadow-sm;
}
.buttonSecondary {
  @apply text-secondary-content bg-secondary;
  @apply hover:bg-secondary-hover;
  @apply focus:ring-secondary-focus;
  @apply shadow-sm;
}
.buttonOutline {
  @apply border border-gray-300;
  @apply text-gray-700 bg-white hover:bg-gray-50;
  @apply focus:ring-primary-focus;
}
.buttonXs {
  @apply px-2.5 py-1.5;
  @apply text-xs;
  @apply rounded;
  &.buttonCircle {
    @apply p-1;
  }
  &.buttonLoading:before {
    @apply w-3 h-3;
  }
}
.buttonSm {
  @apply px-3 py-2;
  @apply text-sm leading-4;
  &.buttonCircle {
    @apply p-1.5;
  }
  &.buttonLoading:before {
    @apply w-3 h-3;
  }
}
.buttonMd {
  @apply px-4 py-2;
  @apply text-base;
  &.buttonCircle {
    @apply p-2;
  }
}
.buttonLg {
  @apply px-6 py-3;
  &.buttonCircle {
    @apply p-3;
  }
}
.buttonBlock {
  @apply w-full;
  @apply text-center;
}
.buttonRounded {
  @apply rounded-full;
}
.buttonCircle {
  @apply rounded-full;
}
.buttonDisabled {
  @apply pointer-events-none;
  @apply bg-gray-300 text-gray-600;
  @apply opacity-60;
}
.buttonLoading {
  @apply pointer-events-none;

  &:before {
    animation: spin 1s linear infinite;
    border-color: transparent currentColor currentColor transparent;
    content: ' ';

    @apply border-2 rounded-full;
    @apply inline-block w-4 h-4;
    @apply mr-2;
  }
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
