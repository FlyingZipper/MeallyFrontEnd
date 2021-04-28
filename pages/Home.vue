<template>
  <div>
    <v-header title="Recipes" button="Add a recipe" link="/recipes/create">
      <span class="material-icons-outlined"> add </span>
    </v-header>
    <v-recipes :page="page" :fetched-all="fetchedAll" :recipes="recipes" />
  </div>
</template>

<script>
import HeaderVue from '~/components/generic/Header.vue'
import recipesVue from '~/components/pageComponents/recipes/index.vue'

export default {
  auth: false,
  components: {
    'v-recipes': recipesVue,
    'v-header': HeaderVue
  },
  scrollToTop: true,
  computed: {
    page () {
      const value = this.$store.state.recipes.page
      return value !== undefined ? value : 0
    },
    fetchedAll () {
      const value = this.$store.state.recipes.fetchedAll
      return value !== undefined ? value : false
    },
    recipes () {
      const value = this.$store.state.recipes.recipes
      return value !== undefined ? value : []
    }
  }
}
</script>

<style>
</style>
