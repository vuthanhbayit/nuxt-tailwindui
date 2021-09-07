<template>
  <div class="space-x-4 space-y-4 p-8">
    <t-button>Button</t-button>

    <t-button color="secondary">Button secondary</t-button>

    <t-button color="primary" class="flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>

      Button with icon
    </t-button>

    <t-button color="primary" circle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </t-button>

    <t-button color="primary" block>Button block</t-button>
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
