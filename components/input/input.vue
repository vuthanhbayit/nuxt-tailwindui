<template>
  <input
    v-model="internalValue"
    :autocomplete="autocomplete"
    :autofocus="autofocus"
    :class="{
      [$style.input]: true,
      [$style.error]: error,
      [$style.readonly]: readonly,
      [$style.disabled]: disabled,
    }"
    :disabled="disabled"
    :enterkeyhint="enterkeyhint"
    :inputmode="inputmode"
    :name="name"
    :placeholder="placeholder"
    :readonly="readonly"
    :type="type"
  />
</template>

<script lang="ts">
import {
  defineComponent,
  inject,
  PropType,
  ref,
  toRefs,
} from '@nuxtjs/composition-api'
import { useLazyValue } from '../../composables'

// prettier-ignore
export type EnterKeyHint = 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'
// prettier-ignore
export type InputMode = 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'
// prettier-ignore
export type Type = 'email' | 'text' | 'password'

export default defineComponent({
  name: 'Input',

  props: {
    autocomplete: { type: String as PropType<'off' | 'on'>, default: null },
    autofocus: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    enterkeyhint: { type: String as PropType<EnterKeyHint>, default: null },
    inputmode: { type: String as PropType<InputMode>, default: null },
    name: { type: String, default: null },
    placeholder: { type: String, default: null },
    type: { type: String as PropType<Type>, default: 'text' },
    value: { type: [Number, String], default: '' },
    debounce: { type: Number, default: 0 },
  },

  setup(props) {
    const { value, debounce } = toRefs(props)
    const error = inject('error', ref(false))

    return { ...useLazyValue(value, debounce.value), error }
  },
})
</script>

<style lang="postcss" module>
.input {
  @apply shadow-sm rounded-md;
  @apply focus:ring-primary-focus focus:border-primary-focus;
  @apply w-full block;
  @apply border border-gray-300;
}

.error {
  @apply border-error;
  @apply focus:ring-error focus:border-error;
}

.readonly {
  @apply pointer-events-none;
}

.disabled {
  @apply pointer-events-none;
  @apply bg-gray-300 text-gray-600;
  @apply opacity-60;
}
</style>
