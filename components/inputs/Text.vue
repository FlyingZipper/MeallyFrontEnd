<template>
  <div>
    <div class="relative w-full">
      <input
        ref="input"
        :name="name"
        :type="type"
        :value="value"
        class="z-10 w-full p-4 border border-gray-800 rounded-lg focus:outline-none"
        @blur="blur"
        @focus="focus"
        @input="$emit('input', $event.target.value)"
      >
      <span :class="[minimized ? 'top-0 text-xs text-gray-500': 'top-1/2 -translate-y-1/2 text-gray-600', 'absolute left-0 z-0 mx-4 capitalize duration-150 transform pointer-events-none py-1']">{{ placeholder }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: false,
      default: ''
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    value: {
      type: undefined,
      required: false,
      default: null
    },
    focused: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      minimized: false
    }
  },
  mounted () {
    if (this.focused) {
      this.$refs.input.focus()
    }
    this.minimizedOnInput()
  },
  updated () {
    this.minimizedOnInput()
  },
  methods: {
    minimizedOnInput () {
      if (this.$refs.input.value !== null && this.$refs.input.value !== '') {
        this.minimized = true
      }
    },
    focus () {
      this.minimized = true
    },
    blur () {
      if (this.value === null || this.value === '') {
        this.minimized = false
      }
    }
  }
}
</script>

<style>

</style>
