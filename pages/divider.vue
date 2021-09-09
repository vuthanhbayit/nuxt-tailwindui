<template>
  <div class="space-x-4 space-y-4 p-8">
    <t-divider>Divider</t-divider>

    <div class="flex flex-row w-full space-x-8">
      <div class="h-32 bg-gray-300 flex-grow">content</div>
      <t-divider vertical>Divider vertical</t-divider>
      <div class="h-32 bg-gray-300 flex-grow">content</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageButton',
}
</script>
