<template>
  <div class="flex flex-col space-y-4">
    <t-form-control hide-details label="Email">
      <t-input v-model="text"></t-input>
    </t-form-control>

    <t-form-control hint="We'll only use this for spam." label="Email">
      <t-input v-model="text"></t-input>
    </t-form-control>

    <t-form-control hint="We'll only use this for spam." label="Readonly">
      <t-input v-model="text" readonly></t-input>
    </t-form-control>

    <t-form-control hint="We'll only use this for spam." label="Disabled">
      <t-input v-model="text" disabled></t-input>
    </t-form-control>

    <t-form-control hint="We'll only use this for spam." label="Email">
      <template #innerLeft>
        <span>http://</span>
      </template>

      <t-input
        v-model="text"
        class="!pl-16"
        placeholder="your@example.com"
      ></t-input>

      <template #innerRight>
        <svg
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </template>
    </t-form-control>

    <t-form-control hint="We'll only use this for spam." label="Email">
      <template #outerLeft>
        <span>http://</span>
      </template>

      <t-input v-model="text" placeholder="your@example.com"></t-input>
    </t-form-control>

    <t-form-control hint="We'll only use this for spam." label="Email">
      <t-input v-model="text" placeholder="your@example.com"></t-input>

      <template #outerRight>
        <span>USD</span>
      </template>
    </t-form-control>

    <t-form-control
      :error="!text.length"
      error-message="Text is required!"
      label="Error"
    >
      <t-input v-model="text"></t-input>
    </t-form-control>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'PageFormControl',

  setup() {
    const text = ref('')

    return { text }
  },
})
</script>

<style scoped></style>
