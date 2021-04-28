<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    fetchPath: {
      type: String,
      required: true
    },
    page: {
      type: Number,
      required: false,
      default: 1
    },
    fetchedAll: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      lock: true,
      fetchingHeight: 0
    }
  },
  mounted () {
    this.scroll()
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
  },
  created () {
    if (!this.fetchedAll) {
      this.next()
    }
  },
  beforeDestroy () {
    window.onscroll = null
  },
  beforeMount () {
    const pourcentageToBottom = 2
    this.fetchingHeight = (1 + pourcentageToBottom) * window.innerHeight
  },
  methods: {
    next () {
      this.$axios
        .get(`/${this.fetchPath}/?page=${this.page}`)
        .then((response) => {
          this.$emit('next', response.data.results)
          if (response.data.next != null) {
            this.lock = false
          } else {
            this.$emit('lock')
          }
        })
    },
    scroll () {
      window.onscroll = () => {
        const bottomOfWindow =
          document.documentElement.scrollHeight -
            document.documentElement.scrollTop <=
          this.fetchingHeight

        if (bottomOfWindow && !this.lock) {
          this.lock = true
          this.next()
        }
      }
    }
  }
}
</script>

<style>
</style>
