
<template>
  <div>
    <v-infinite-scroll
      fetch-path="recipe"
      :page="page /*this.$store.state.recipes.page*/"
      :fetched-all="fetchedAll /*this.$store.state.recipes.fetchedAll*/"
      @next="addRecipes"
      @lock="setFetchAll"
    >
      <v-recipes-masonry
        :recipes="recipes /*this.$store.state.recipes.recipes */"
        :discounts="discounts"
      />
    </v-infinite-scroll>
  </div>
</template>

<script>
import RecipesMasonryVue from './RecipesMasonry.vue'
import InfiniteScrollVue from '~/components/generic/InfiniteScroll.vue'

export default {
  components: {
    'v-infinite-scroll': InfiniteScrollVue,
    'v-recipes-masonry': RecipesMasonryVue
  },
  props: {
    page: {
      type: Number,
      required: true
    },
    fetchedAll: {
      type: Boolean,
      required: true
    },
    recipes: {
      type: Array,
      required: true
    }
  },
  computed: {
    discounts () {
      if (this.$store.state.discount.ingredients !== null) {
        return this.$store.state.discount.ingredients.map(
          ing => ing.ingredient_id
        )
      } else {
        return null
      }
    }
  },
  beforeDestroy () {
    this.$store.commit(
      'recipes/setScrollTrop',
      document.documentElement.scrollTop
    )
  },
  created () {
    this.$axios.get('/grocery/groceryIngredient/').then((response) => {
      this.$store.commit('discount/setDiscounts', response.data)
    })
  },
  methods: {
    addRecipes (recipes) {
      // TODO : remove (temp)
      const res = recipes.map((ing) => {
        return { ...ing, image: this.getRandomImage() }
      })
      this.$store.commit('recipes/addRecipes', res)
    },
    setFetchAll () {
      this.$store.commit('recipes/setFetchedAll')
    },
    getRandomImage () {
      const imageList = [
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1866&q=80',
        'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1868&q=80',
        'https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1914&q=80',
        'https://images.unsplash.com/photo-1432139509613-5c4255815697?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80'
      ]
      return imageList[Math.floor(Math.random() * (imageList.length - 0))]
    }
  }
}
</script>

<style>
</style>
