<template>
  <div>
    <t-button color="primary" nuxt href="/button">Button</t-button>
    <t-button color="secondary" nuxt href="/input">Input</t-button>
    <t-button color="secondary" nuxt href="/checkbox">Checkbox</t-button>
    <t-button color="secondary" nuxt href="/radio">Radio</t-button>
    <t-button color="secondary" nuxt href="/form-control">
      Form control
    </t-button>

    <div class="p-8">
      <nuxt></nuxt>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Default',
}
</script>

<style scoped></style>
