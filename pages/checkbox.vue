<template>
  <div class="flex flex-col space-y-4">
    <t-checkbox v-model="checkbox" :value="1"></t-checkbox>

    <t-checkbox
      v-model="checkbox"
      :value="2"
      label="Username"
      name="username"
    ></t-checkbox>

    <t-checkbox
      v-model="checkbox"
      :value="3"
      label="Readonly"
      readonly
    ></t-checkbox>

    <t-checkbox
      v-model="checkbox"
      :value="4"
      label="Disabled"
      disabled
    ></t-checkbox>

    {{ checkbox }}
  </div>
</template>

<script>
export default {
  name: 'PageCheckbox',

  data() {
    return {
      checkbox: [3, 4],
    }
  },
}
</script>

<style scoped></style>
