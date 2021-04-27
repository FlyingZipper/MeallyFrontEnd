<template>
  <div>
    <div v-if="search">
      <v-mobile-search :class="[display ? 'show-search': 'hide-search', 'transition-search']" />
    </div>
    <div v-if="menu">
      <v-mobile-menu :class="[display ? 'show-menu': 'hide-menu', 'transition-menu']" />
    </div>
  </div>
</template>

<script>
import MobileMenu from './MobileMenu.vue'
import MobileSearch from './MobileSearch.vue'

export default {
  components: {
    'v-mobile-search': MobileSearch,
    'v-mobile-menu': MobileMenu
  },
  data () {
    return {
      scrollHeight: 0,
      display: true
    }
  },
  computed: {
    search () {
      return this.$store.state.layout.searchbar
    },
    menu () {
      return this.$store.state.layout.navbar
    }
  },
  beforeMount () {
    this.scrollHeight = window.scrollY
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (e) {
      const currentHeight = window.scrollY
      // scroll down
      if (currentHeight > this.scrollHeight && currentHeight > 75) {
        this.display = false
      } else { // scroll up
        this.display = true
      }
      this.scrollHeight = currentHeight
    }
  }
}
</script>

<style >

  .transition-menu{
    /*transition: opacity 0s 1s, transform 0s 1s, visibility 1s 0s;*/
    transition: all 0.15s;
  }
  .hide-menu{
    opacity: 0;
    transform: translateY(100%);
    visibility: hidden;
  }
  .show-menu{
    opacity: 1;
    visibility: visible;
  }

  .transition-search{
    /*transition: opacity 0s 1s, transform 0s 1s, visibility 1s 0s;*/
    transition: all 0.15s;
  }
  .hide-search{
    opacity: 0;
    transform: translateY(-100%);
    visibility: hidden;
  }
  .show-search{
    opacity: 1;
    visibility: visible;
  }
</style>
