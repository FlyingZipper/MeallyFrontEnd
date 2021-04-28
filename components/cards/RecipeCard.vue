<template>
  <div class="w-40 mb-2 md:w-60">
    <div>
      <div
        v-click-outside="hideOptions"
        :class="[displayOptions ? '' : 'cursor-pointer', 'relative']"
      >
        <div>
          <img class="rounded-lg" :src="recipe.image" alt="" @click.self="showOptions">
        </div>
        <div
          v-if="displayOptions"
          class="absolute top-0 right-0 z-30 mt-2 mr-2 transition duration-1000 -translate-y-56 bg-gray-200 bg-opacity-75 rounded-full"
        >
          <div class="flex items-center justify-between space-x-6">
            <button class="focus:outline-none" @click="toggleMealplan">
              <span
                class="flex items-center justify-center w-8 h-8 p-2 text-base text-gray-400 bg-white border border-gray-400 rounded-full shadow-lg material-icons"
              >
                restaurant_menu
              </span>
            </button>
            <button class="focus:outline-none" @click="toggleFavoriteRecipe">
              <span
                :class="[
                  isFavorite !== null ? 'text-red-400' : 'text-gray-400',
                  'flex items-center justify-center w-8 h-8 p-2 text-base bg-white border border-gray-400 rounded-full shadow-lg material-icons',
                ]"
              >
                favorite
              </span>
            </button>
          </div>
        </div>
        <transition name="fade">
          <div
            v-if="displayOptions"
            class="absolute top-0 w-full h-full bg-black bg-opacity-25 rounded-lg"
            @click="hideOptions"
          />
        </transition>
      </div>
    </div>
    <div class="pt-2">
      <div class="flex">
        <div :class="[discounted ? 'w-3/4' : 'w-full']">
          <nuxt-link
            :to="recipeLink"
            class="text-base capitalize hover:underline"
          >
            {{ recipe.name }}
          </nuxt-link>
        </div>
        <div v-if="discounted" class="flex items-center justify-center w-1/4">
          <div
            class="flex items-center justify-center text-white rounded-full w-7 h-7 bg-main-400"
          >
            <span class="text-lg material-icons-outlined"> money_off </span>
          </div>
        </div>
      </div>
    </div>
    <nuxt-link :to="authorLink" class="text-xs text-gray-500 hover:underline">
      Par: {{ userDisplayedName }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'VRecipeCard',
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      displayOptions: false,
      isFavorite: null,
      discounted: true
    }
  },
  computed: {
    recipeLink () {
      return `/recipes/${this.recipe.id}`
    },
    authorLink () {
      return `/profile/${this.authorSlug}`
    },
    userDisplayedName () {
      return `${this.recipe.author.first_name} ${this.recipe.author.last_name}`
    }
  },
  created () {
    if (this.recipe.favorite_recipes.length > 0) {
      this.isFavorite = this.recipe.favorite_recipes[0].id
    }

    this.setDiscounted()
  },
  methods: {
    showOptions () {
      this.displayOptions = true
    },
    hideOptions () {
      this.displayOptions = false
    },
    toggleMealplan () {
      console.log('toggleMealplan')
    },
    toggleFavoriteRecipe () {
      if (this.isFavorite !== null) {
        this.unfavorite()
      } else {
        this.favorite()
      }
    },
    setDiscounted () {
      if (this.recipe.recipeIngredients !== null) {
        const ingredients = this.recipe.recipeIngredients.map(ing => ing.id)
        this.discounted = ingredients.some(ing =>
          this.$store.state.discount.ingredients.includes(ing)
        )
      }
    },
    favorite () {
      const body = {
        recipe_id: this.recipe.id
      }
      this.$axios.post('/recipefavorite/', body).then((response) => {
        this.isFavorite = response.data.id
      })
    },
    unfavorite () {
      this.$axios.delete(`/recipefavorite/${this.isFavorite}`).then(() => {
        this.isFavorite = null
      })
    }
  }
}
</script>

<style>
.image-card-w {
  width: 236px;
}
</style>
