<template>
  <div>
    <v-footer-mobile class="md:hidden" />
    <v-footer-desktop class="hidden md:inline" />
  </div>
</template>

<script>
import MobileNavbar from './Mobile'
import DestopNavbar from './Desktop'

export default {
  components: {
    'v-footer-mobile': MobileNavbar,
    'v-footer-desktop': DestopNavbar
  }

}
</script>
