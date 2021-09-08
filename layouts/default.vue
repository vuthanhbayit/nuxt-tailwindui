<template>
  <div>
    <t-button @click="$router.push('/button')">Button</t-button>
    <t-button nuxt href="/button">Button</t-button>

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
