<template>
  <div v-if="recipe != null">
    <div
      class="relative h-screen bg-fixed bg-center bg-no-repeat bg-cover"
      :style="imgLink"
    />

    <div class="fixed top-0 left-0 mt-2 ml-2">
      <div class="flex justify-center mb-8">
        <button @click="back()">
          <span
            class="p-2 text-gray-800 bg-gray-100 border border-gray-100 rounded-full shadow-lg material-icons-outlined"
          >
            chevron_left
          </span>
        </button>
      </div>
      <div class="flex justify-center">
        <button @click="toggleViewImage()">
          <span
            class="p-2 text-gray-800 bg-white border border-gray-100 rounded-full shadow-lg material-icons-outlined"
          >
            zoom_in
          </span>
        </button>
      </div>
    </div>
    <div
      class="fixed top-0 right-0 mt-2 mr-2 bg-gray-100 bg-opacity-75 rounded-full"
    >
      <div class="flex items-center justify-between space-x-8">
        <button class="focus:outline-none" @click="toggleMealplan">
          <span
            class="flex items-center justify-center p-2 text-gray-400 bg-white border rounded-full shadow-lg material-icons"
          >
            restaurant_menu
          </span>
        </button>
        <button class="focus:outline-none" @click="toggleFavoriteRecipe">
          <span
            :class="[
              isFavorite !== null ? 'text-red-400' : 'text-gray-400',
              'flex items-center justify-center p-2 bg-white border rounded-full shadow-lg material-icons',
            ]"
          >
            favorite
          </span>
        </button>
      </div>
    </div>

    <div
      class="px-4 py-2 text-gray-800 transform -translate-y-56 bg-white rounded-3xl"
    >
      <div>
        <div class="w-20 h-2 mx-auto mb-8 bg-gray-300 rounded-full" />

        <div class="mb-2">
          <div class="flex space-x-4 overflow-scroll text-sm hide-scroll-bar">
            <div v-for="item in recipe.menu" :key="item">
              <div class="px-3 py-1 bg-gray-200 rounded-full whitespace-nowrap">
                {{ item }}
              </div>
            </div>
            <div v-for="item in recipe.restrictions" :key="item">
              <div class="px-3 py-1 bg-gray-200 rounded-full whitespace-nowrap">
                {{ item }}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 class="capitalize title-1">
            {{ recipe.name }}
          </h1>
        </div>

        <div class="mb-2">
          <nuxt-link
            class="text-sm text-gray-500 hover:underline"
            :to="authorLink"
          >
            {{ recipe.author.name }}
          </nuxt-link>
        </div>

        <div class="mb-8">
          {{ recipe.description }}
        </div>

        <div class="grid grid-cols-3 mb-8">
          <div
            v-for="info in infoIcons"
            :key="info.icon"
            class="flex justify-center"
          >
            <div class="space-y-2">
              <div class="flex justify-center">
                <span
                  class="p-2 text-white rounded-full material-icons bg-main-400"
                >
                  {{ info.icon }}
                </span>
              </div>
              <div class="flex justify-center">
                {{ info.value }}
              </div>
              <div class="flex justify-center">
                <button
                  class="font-medium capitalize hover:text-main-500 text-main-400 hover:underline"
                  @click="info.action"
                >
                  {{ info.actionName }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-8">
          <h2 class="mb-4 title-2">
            Ingredients
          </h2>
          <div class="space-y-4">
            <div
              v-for="(ingredient, index) in recipe.recipeIngredients"
              :key="index + 'ing'"
              class="flex items-center space-x-4"
            >
              <div
                :class="[
                  verifyCompletedIngredient(index)
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-800',
                  'rounded-full',
                ]"
              >
                <button
                  class="focus:outline-none"
                  @click="toggleIngredient(index)"
                >
                  <span
                    :class="[
                      verifyCompletedIngredient(index)
                        ? 'bg-gray-400 border-gray-400'
                        : 'border-gray-200 bg-gray-200 ',
                      'flex items-center justify-center w-8 h-8 p-2 text-base border rounded-full material-icons',
                    ]"
                  >
                    done
                  </span>
                </button>
              </div>
              <div
                :class="[
                  verifyCompletedIngredient(index)
                    ? 'line-through text-gray-400'
                    : 'text-gray-800',
                  '',
                ]"
              >
                {{ formatIngredient(ingredient) }}
              </div>
            </div>
          </div>
        </div>

        <div class="mb-8">
          <h2 class="mb-4 title-2">
            Instructions
          </h2>
          <div class="space-y-4">
            <div
              v-for="(ingredient, index) in recipe.instructions"
              :key="index + 'ing'"
              class="flex space-x-4"
            >
              <div
                :class="[
                  verifyCompletedInstruction(index)
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-800',
                  'rounded-full mt-2',
                ]"
              >
                <button
                  class="focus:outline-none"
                  @click="toggleInstruction(index)"
                >
                  <span
                    :class="[
                      verifyCompletedInstruction(index)
                        ? 'bg-gray-400 border-gray-400 material-icons'
                        : 'border-gray-200 bg-gray-200',
                      'flex items-center justify-center w-8 h-8 p-2 text-base border rounded-full',
                    ]"
                  >
                    {{ verifyCompletedInstruction(index) ? "done" : index + 1 }}
                  </span>
                </button>
              </div>
              <div
                :class="[
                  verifyCompletedInstruction(index)
                    ? 'line-through text-gray-400'
                    : 'text-gray-800',
                  'leading-7',
                ]"
              >
                {{ ingredient.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  data () {
    return {
      slug: null,
      completedIngredients: [],
      completedInstructions: [],
      recipe: null,
      isFavorite: null,
      rating: 0,
      ratingId: null
    }
  },
  computed: {
    infoIcons () {
      return [
        {
          icon: 'timer',
          value: '50 min',
          actionName: 'more',
          action: this.cookAction
        },
        {
          icon: 'star',
          value: '4.3',
          actionName: 'rate',
          action: this.reviewAction
        },
        {
          icon: 'money_off',
          value: '3 Discounts',
          actionName: 'show',
          action: this.discountsAction
        }
      ]
    },
    imgLink () {
      console.log(`background-image: url('${this.recipe.image}');`)
      return `background-image: url('${this.recipe.image}');`
    },
    authorLink () {
      return `/profile/${this.recipe.author.id}`
    },
    averageRating () {
      if (this.recipe.average_rating !== null) {
        return `(${this.recipe.average_rating.rating})`
      }
      return ''
    },
    userDisplayedName () {
      return `${this.recipe.author.first_name} ${this.recipe.author.last_name}`
    }
  },
  beforeDestroy () {
    console.log('before destroy')
    this.$store.commit('layout/setSearchbar', true)
    this.$store.commit('layout/setContainer', true)
  },
  created () {
    this.getRecipe()
    this.$store.commit('layout/setSearchbar', false)
    this.$store.commit('layout/setContainer', false)
  },
  methods: {
    toggleMealplan () {},
    toggleFavoriteRecipe () {
      if (this.isFavorite !== null) {
        this.unfavorite()
      } else {
        this.favorite()
      }
    },
    toggleViewImage () {},
    cookAction () {},
    reviewAction () {},
    discountsAction () {},
    async getRecipe () {
      await this.$axios
        .get(`/recipe/${this.$route.params.slug}/`)
        .then((response) => {
          this.recipe = { ...response.data, image: this.randomImage() }
          if (response.data.favorite_recipes.length > 0) {
            this.isFavorite = response.data.favorite_recipes[0].id
          }
          this.setRating()
        })
    },
    randomImage () {
      const imageList = [
        'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1866&q=80',
        'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1868&q=80',
        'https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1914&q=80',
        'https://images.unsplash.com/photo-1432139509613-5c4255815697?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80'
      ]
      this.imageState = this.imageState + (1 % imageList.length)
      return imageList[Math.floor(Math.random() * (imageList.length - 0))]
    },
    rateRecipe (rating) {
      const body = {
        rating,
        recipe_id: this.recipe.id
      }
      this.$axios.post('reciperating/', body).then((response) => {
        this.rating = response.data.rating
        this.ratingId = response.data.id
      })
    },
    rateRecipeUpdate (rating) {
      const body = {
        rating,
        recipe_id: this.recipe.id
      }
      this.$axios
        .put(`reciperating/${this.ratingId}/`, body)
        .then((response) => {
          this.rating = response.data.rating
        })
    },
    unrateRecipe () {
      this.$axios.delete(`reciperating/${this.ratingId}/`).then((response) => {
        this.rating = 0
        this.ratingId = null
      })
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
      this.$axios.delete(`/recipefavorite/${this.isFavorite}/`).then(() => {
        this.isFavorite = null
      })
    },
    back () {
      this.$router.back()
    },
    verifyCompletedIngredient (index) {
      return this.completedIngredients.includes(index)
    },
    toggleIngredient (index) {
      if (this.verifyCompletedIngredient(index)) {
        // remove
        this.completedIngredients.splice(
          this.completedIngredients.indexOf(index),
          1
        )
      } else {
        // add
        this.completedIngredients.push(index)
      }
    },
    verifyCompletedInstruction (index) {
      return this.completedInstructions.includes(index)
    },
    toggleInstruction (index) {
      if (this.verifyCompletedInstruction(index)) {
        this.completedInstructions.splice(
          this.completedInstructions.indexOf(index),
          1
        )
      } else {
        this.completedInstructions.push(index)
      }
    },
    formatIngredient (ingredient) {
      return `${ingredient.amount} ${ingredient.unit} of ${ingredient.ingredient.detail} ${ingredient.ingredient.name}`
    }
  }
}
</script>
