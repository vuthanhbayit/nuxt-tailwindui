<template>
  <div class="flex flex-col space-y-4">
    <t-radio v-model="radio" :value="1"></t-radio>

    <t-radio
      v-model="radio"
      :value="2"
      label="Username"
      name="username"
    ></t-radio>

    <t-radio v-model="radio" :value="3" label="Readonly" readonly></t-radio>

    <t-radio v-model="radio" :value="4" label="Disabled" disabled></t-radio>

    {{ radio }}
  </div>
</template>

<script>
export default {
  name: 'PageRadio',

  data() {
    return {
      radio: 4,
    }
  },
}
</script>

<style scoped></style>
