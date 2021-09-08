<template>
  <div
    :class="{
      [$style.radio]: true,
      [$style.radioReadonly]: readonly,
      [$style.radioDisabled]: disabled,
    }"
  >
    <input
      :id="name"
      v-model="internalValue"
      :class="$style.input"
      :disabled="disabled"
      :name="name"
      :readonly="readonly"
      :value="value"
      type="radio"
      v-bind="$attrs"
    />

    <label :class="$style.label" :for="name">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef } from '@nuxtjs/composition-api'
import { useLazyValue } from '../../composables'

export default defineComponent({
  name: 'Radio',

  model: {
    prop: 'modelValue',
    event: 'change',
  },

  props: {
    modelValue: { type: [Array, Boolean, Number, String], default: null },
    value: { type: [Boolean, Number, String], default: null },
    readonly: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    name: { type: String, default: null },
    debounce: { type: Number, default: 0 },
    label: { type: String, default: '' },
  },

  setup(props) {
    const modelValue = toRef(props, 'modelValue')

    return {
      ...useLazyValue(modelValue, 0),
    }
  },
})
</script>

<style lang="postcss" module>
.radio {
  @apply flex items-center;
}

.radioReadonly {
  @apply pointer-events-none;
}

.radioDisabled {
  @apply pointer-events-none;
  @apply text-gray-600;
  @apply opacity-60;
}

.input {
  @apply focus:ring-primary-focus text-primary border-gray-300;
  @apply h-4 w-4;
  @apply cursor-pointer;
}

.label {
  @apply ml-3 text-sm;
}
</style>
