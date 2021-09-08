<template>
  <div class="space-x-4 space-y-4 p-8">
    <t-button type="submit">Button</t-button>

    <t-button color="secondary">Button secondary</t-button>

    <t-button color="primary">
      <div class="flex">
        <svg
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 18L18 6M6 6l12 12"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>

        Button with icon
      </div>
    </t-button>

    <t-button circle color="primary">
      <svg
        class="h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 18L18 6M6 6l12 12"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </svg>
    </t-button>

    <t-button block color="primary">Button block</t-button>
    <t-button color="primary" rounded>Button rounded</t-button>

    <t-button color="primary" size="xs">Button xs</t-button>
    <t-button color="primary" size="sm">Button sm</t-button>
    <t-button color="primary" size="md">Button base</t-button>
    <t-button color="primary" size="lg">Button lg</t-button>
  </div>
</template>

<script>
export default {
  name: 'Button',
}
</script>
