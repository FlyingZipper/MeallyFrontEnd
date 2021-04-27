<template>
  <div>
    <v-nav-mobile class="md:hidden" />
    <v-nav-desktop class="hidden md:inline" />
  </div>
</template>

<script>
import MobileNavbar from './Mobile'
import DestopNavbar from './Desktop'

export default {
  components: {
    'v-nav-mobile': MobileNavbar,
    'v-nav-desktop': DestopNavbar
  }
}
</script>
