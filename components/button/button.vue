<template>
  <button
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
    }"
    v-on="$listeners"
  >
    <slot name="start"></slot>

    <slot></slot>

    <slot name="end"></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
export type Size = 'xs' | 'sm' | 'md' | 'lg'
export type Color = 'primary' | 'secondary' | 'outline'
export default defineComponent({
  name: 'TButton',
  props: {
    size: {
      type: String as PropType<Size>,
      default: 'md',
    },
    color: {
      type: String as PropType<Color>,
      default: 'outline',
    },
    block: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="postcss" module>
.button {
  @apply items-center;
  @apply border border-transparent;
  @apply font-medium;
  @apply focus:outline-none focus:ring-2 focus:ring-offset-2;
}
.buttonPrimary {
  @apply text-primary-content bg-primary;
  @apply hover:bg-primary-hover;
  @apply focus:ring-primary-focus;
}
.buttonSecondary {
  @apply text-secondary-content bg-secondary;
  @apply hover:bg-secondary-hover;
  @apply focus:ring-secondary-focus;
}
.buttonOutline {
  @apply border border-gray-300;
  @apply text-gray-700 bg-white hover:bg-gray-50;
  @apply focus:ring-primary-focus;
}
.buttonXs {
  @apply px-2.5 py-1.5;
  @apply text-xs;
  @apply shadow-sm rounded;
  &.buttonCircle {
    @apply p-1;
  }
}
.buttonSm {
  @apply px-3 py-2;
  @apply text-sm leading-4;
  @apply rounded-md shadow-sm;
  &.buttonCircle {
    @apply p-1.5;
  }
}
.buttonMd {
  @apply px-4 py-2;
  @apply shadow-sm rounded-md;
  &.buttonCircle {
    @apply p-2;
  }
}
.buttonLg {
  @apply px-6 py-3;
  @apply rounded-md shadow-sm;
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
</style>
