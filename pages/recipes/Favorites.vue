<template>
  <div>
    <v-header title="Favorite Recipes">
      <span class="material-icons-outlined">
        add
      </span>
    </v-header>
    <!-- <div class="my-4">
      <v-recipes />
    </div> -->
  </div>
</template>

<script>
// import recipesVue from '~/components/pageComponents/recipes/index.vue'
import HeaderVue from '~/components/generic/Header.vue'

export default {
  components: {
    // 'v-recipes': recipesVue,
    'v-header': HeaderVue
  }
}
</script>

<style>

</style>
