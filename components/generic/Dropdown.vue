<template>
  <div>
    <div class="flex items-center justify-between px-2 py-4">
      <div>
        <slot name="title" />
      </div>
      <div>
        <button class="p-1" @click="toggle">
          <span :class="[open ? 'rotate-180' : '', 'transform transition duration-100 material-icons-outlined flex justify-center items-center text-gray-800']">
            keyboard_arrow_down
          </span>
        </button>
      </div>
    </div>
    <div v-if="open">
      <div class="mt-2">
        <slot />
      </div>
    </div>
    <div v-if="separator" class="mx-2 border-b border-gray-400" />
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: false,
      default: true
    },
    separator: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      open: false
    }
  },
  created () {
    this.open = this.isOpen
  },
  methods: {
    toggle () {
      this.open = !this.open
    }
  }
}
</script>

<style>

</style>
