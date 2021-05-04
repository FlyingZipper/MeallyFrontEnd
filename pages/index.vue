<template>
  <div>
    <h1 class="mb-2 title-1">
      Selling the app - Home
    </h1>
    <div>
      <v-text-tag v-model="input" placeholder="ingredient">
        <span class="text-lg">1</span>
      </v-text-tag>
    </div>
  </div>
</template>

<script>
import TextTagVue from '~/components/inputs/TextTag.vue'
export default {
  auth: false,
  components: {
    'v-text-tag': TextTagVue
  },
  data () {
    return {
      files: [],
      input: ''
    }
  }
}
</script>

<style>

</style>
