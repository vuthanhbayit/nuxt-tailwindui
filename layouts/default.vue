<template>
  <div>
    <t-button color="primary" href="/button" nuxt>Button</t-button>
    <t-button color="secondary" href="/input" nuxt>Input</t-button>
    <t-button color="secondary" href="/checkbox" nuxt>Checkbox</t-button>
    <t-button color="secondary" href="/radio" nuxt>Radio</t-button>
    <t-button color="secondary" href="/divider" nuxt>Divider</t-button>
    <t-button color="secondary" href="/form-control" nuxt>
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
