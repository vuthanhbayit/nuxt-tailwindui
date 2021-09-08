<template>
  <div>
    <t-input v-model="text"></t-input>
    {{ text }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'PageInput',

  setup() {
    const text = ref('')

    return { text }
  },
})
</script>

<style scoped></style>
