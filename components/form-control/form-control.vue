<template>
  <div
    :class="{
      [$style.formControl]: true,
      [$style.formControlDetail]: !hideDetails,
    }"
  >
    <label :class="$style.label">{{ label }}</label>

    <div
      :class="{
        [$style.inputWrapper]: true,
        [$style.inputWrapperInnerRight]: $scopedSlots.innerRight,
        [$style.inputWrapperInnerLeft]: $scopedSlots.innerLeft,
        [$style.inputWrapperOuterLeft]: $scopedSlots.outerLeft,
        [$style.inputWrapperOuterRight]: $scopedSlots.outerRight,
      }"
    >
      <div
        v-if="$scopedSlots.outerLeft"
        :class="[$style.outer, $style.outerLeft]"
      >
        <slot name="outerLeft"></slot>
      </div>

      <div
        v-if="$scopedSlots.innerLeft"
        :class="[$style.inner, $style.innerLeft]"
      >
        <slot name="innerLeft"></slot>
      </div>

      <slot></slot>

      <div
        v-if="$scopedSlots.innerRight"
        :class="[$style.inner, $style.innerRight]"
      >
        <slot name="innerRight"></slot>
      </div>

      <div
        v-if="$scopedSlots.outerRight"
        :class="[$style.outer, $style.outerRight]"
      >
        <slot name="outerRight"></slot>
      </div>
    </div>

    <p v-if="error" :class="[$style.detail, $style.error]">
      {{ errorMessage }}
    </p>
    <p v-else-if="hint" :class="$style.detail">{{ hint }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, toRef } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'FormControl',

  props: {
    hint: { type: String, default: '' },
    label: { type: String, default: '' },
    error: { type: Boolean, default: false },
    errorMessage: { type: String, default: '' },
    hideDetails: { type: Boolean, default: false },
  },

  setup(props) {
    const error = toRef(props, 'error')

    provide('error', error)
  },
})
</script>

<style lang="postcss" module>
.formControl {
  @apply relative;
}

.formControlDetail {
  @apply pb-6;
}

.label {
  @apply block;
  @apply text-sm font-medium text-gray-700;
}

.detail {
  @apply absolute left-0 bottom-0;
  @apply text-sm text-gray-500;

  animation: slideUp 0.1s ease-out;
}

.error {
  @apply text-error;
}

.inputWrapper {
  @apply mt-1 relative;
  @apply rounded-md shadow-sm;
}

.inputWrapperInnerRight > input {
  @apply pr-10;
}

.inputWrapperInnerLeft > input {
  @apply pl-10;
}

.inner {
  @apply absolute inset-y-0;
  @apply flex items-center;
  @apply pointer-events-none;
  @apply text-gray-400;
}

.innerRight {
  @apply right-0 pr-3;
}

.innerLeft {
  @apply left-0 pl-3;
}

.inputWrapperOuterLeft,
.inputWrapperOuterRight {
  @apply flex;

  & > input {
    @apply flex min-w-0;
    @apply rounded-none;
  }
}

.inputWrapperOuterLeft > input {
  @apply rounded-r-md;
}

.inputWrapperOuterRight > input {
  @apply rounded-l-md;
}

.outer {
  @apply inline-flex items-center;
  @apply px-3;
  @apply border border-gray-300;
  @apply bg-gray-50 text-gray-500;
}

.outerRight {
  @apply rounded-r-md border-l-0;
}

.outerLeft {
  @apply rounded-l-md border-r-0;
}

@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
