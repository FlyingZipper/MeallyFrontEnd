<template>
  <button class="px-4 py-2 font-medium text-white rounded-lg bg-main-400 hover:bg-main-500">
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
