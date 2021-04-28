<template>
  <div>
    <div
      v-masonry
      transition-duration="0s"
      item-selector=".item"
      class="masonry-container"
      :fit-width="true"
      :gutter="16"
      :resize="true"
    >
      <v-recipe-card
        v-for="(recipe, index) in recipes"
        :key="index"
        v-masonry-tile
        :recipe="recipe"
        :discounts="discounts"
        class="item"
      />
    </div>
  </div>
</template>

<script>
import RecipeCardVue from '~/components/cards/RecipeCard.vue'

export default {
  auth: false,
  components: {
    'v-recipe-card': RecipeCardVue
  },
  props: {
    recipes: {
      type: Array,
      required: true
    },
    discounts: {
      type: Array,
      required: false,
      default: null
    }
  },
  data () {
    return {
      page: 1,
      lock: true,
      fetchingHeight: 0
    }
  },
  mounted () {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
  },
  methods: {
    recipeLink (id) {
      return `recipes/${id}`
    }
  }
}
</script>

<style scoped>
.item {
  @apply mb-4;
}
</style>
