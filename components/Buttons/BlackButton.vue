<template>
  <button class="px-4 py-2 font-medium text-white bg-gray-800 rounded-lg hover:bg-black">
    <div class="flex items-center justify-center space-x-2">
      <span>{{ text }}</span>
      <slot />
    </div>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
