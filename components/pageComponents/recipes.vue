<template>
  <div class="grid grid-cols-2 gap-y-2 gap-x-4">
    <v-recipe-card
      v-for="x in [1,2,3,4,5,6,7,8]"
      :key="x"
      recipe="Burger au porc effiloché"
      :author-slug="`${x}`"
      :recipe-slug="`${x}`"
      author="Mathieu Gendron"
      img-link="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      :discounted="x%4 === 0"
    />
  </div>
</template>

<script>
import RecipeCard from '../cards/RecipeCard.vue'
export default {
  components: { 'v-recipe-card': RecipeCard }
}
</script>

<style>

</style>
