<template>
  <div class="fixed z-40 w-screen pb-1 bg-white shadow-md">
    <div class="m-4 rounded-full shadow-md hover:shadow-lg focus:shadow-xl :">
      <v-search />
    </div>
  </div>
</template>

<script>
import SearchVue from '~/components/generic/Search.vue'

export default {
  components: {
    'v-search': SearchVue
  }
}
</script>

<style>
.fade{
    background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);
  }

</style>
