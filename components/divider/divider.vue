<template>
  <div
    :class="{
      [$style.divider]: true,
      [$style.dividerVertical]: vertical,
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Divider',

  props: {
    vertical: { type: Boolean, default: false },
  },
})
</script>

<style module>
.divider {
  @apply flex items-center;
  @apply h-4 my-4;
  @apply text-gray-500;
}

.divider:after,
.divider:before {
  @apply bg-gray-300;

  content: '';
  flex-grow: 1;
  height: 1px;
}

.divider:not(:empty):before {
  @apply mr-4;
}

.divider:not(:empty):after {
  @apply ml-4;
}

.dividerVertical {
  @apply h-auto w-4 my-0 mx-4;
  @apply flex-col self-stretch;
}

.dividerVertical:after,
.dividerVertical:before {
  @apply h-full;

  width: 1px;
}

.dividerVertical:not(:empty):before {
  @apply mr-0 mb-4;
}

.dividerVertical:not(:empty):after {
  @apply ml-0 mt-4;
}
</style>
