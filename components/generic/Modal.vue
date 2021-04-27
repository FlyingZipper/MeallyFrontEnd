<template>
  <div>
    <div v-if="opened">
      <div class="absolute z-50 w-full transform -translate-x-1/2 top-10 left-1/2">
        <div class="px-4 pt-4 pb-8 mx-4 bg-white rounded-lg">
          <button class="p-1 rounded-full material-icons-outlined hover:bg-gray-200" @click="close">
            close
          </button>
          <div class="px-1">
            <slot />
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div v-if="opened" class="fixed top-0 left-0 z-40 w-screen h-screen bg-black bg-opacity-40" />
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    opened: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style>

</style>
