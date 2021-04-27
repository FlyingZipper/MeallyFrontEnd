<template>
  <div>
    <v-header title="Recipes" button="Add a recipe" link="/recipes/create">
      <span class="material-icons-outlined">
        add
      </span>
    </v-header>
    <v-recipes />
  </div>
</template>

<script>
import HeaderVue from '~/components/generic/Header.vue'
import recipesVue from '~/components/pageComponents/recipes.vue'
export default {
  components: {
    'v-recipes': recipesVue,
    'v-header': HeaderVue
  },
  scrollToTop: true
}
</script>

<style>

</style>
