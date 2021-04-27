<template>
  <div>
    <v-navbar />
    <div :class="[container ? 'px-4 pt-24 mx-auto max-w-7xl': '']">
      <transition
        name="slide"
        mode="out-in"
      >
        <Nuxt />
      </transition>
    </div>
    <v-footer class="pb-24" />
  </div>
</template>

<script>
import FooterVue from '@/components/layout/Footer'
import NavbarVue from '@/components/layout/Navbar'

export default {
  components: {
    'v-navbar': NavbarVue,
    'v-footer': FooterVue
  },
  computed: {
    container () {
      return this.$store.state.layout.container
    }
  }

}
</script>

<style>

</style>
