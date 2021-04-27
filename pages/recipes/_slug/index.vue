<template>
  <div>
    <div class="relative h-screen bg-fixed bg-center bg-no-repeat bg-cover" :style="imgLink" />

    <div class="fixed top-0 left-0 mt-2 ml-2">
      <div class="flex justify-center mb-8">
        <button @click="back()">
          <span class="p-2 text-gray-800 bg-gray-100 border border-gray-100 rounded-full shadow-lg material-icons-outlined">
            chevron_left
          </span>
        </button>
      </div>
      <div class="flex justify-center">
        <button @click="toggleViewImage()">
          <span class="p-2 text-gray-800 bg-white border border-gray-100 rounded-full shadow-lg material-icons-outlined">
            zoom_in
          </span>
        </button>
      </div>
    </div>
    <div class="fixed top-0 right-0 mt-2 mr-2 bg-gray-100 bg-opacity-75 rounded-full">
      <div class="flex items-center justify-between space-x-8">
        <button class="focus:outline-none" @click="toggleMealplan">
          <span class="flex items-center justify-center p-2 text-gray-400 bg-white border rounded-full shadow-lg material-icons">
            restaurant_menu
          </span>
        </button>
        <button class="focus:outline-none" @click="toggleFavoriteRecipe">
          <span class="flex items-center justify-center p-2 text-gray-400 bg-white border rounded-full shadow-lg material-icons">
            favorite
          </span>
        </button>
      </div>
    </div>

    <div class="px-4 py-2 text-gray-800 transform -translate-y-56 bg-white rounded-3xl">
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
          <h1 class="title-1">
            {{ recipe.name }}
          </h1>
        </div>

        <div class="mb-2">
          <nuxt-link class="text-sm text-gray-500 hover:underline" :to="authorLink">
            {{ recipe.author.name }}
          </nuxt-link>
        </div>

        <div class="mb-8">
          {{ recipe.description }}
        </div>

        <div class="grid grid-cols-3 mb-8">
          <div v-for="info in infoIcons" :key="info.icon" class="flex justify-center">
            <div class="space-y-2">
              <div class="flex justify-center">
                <span class="p-2 text-white rounded-full material-icons bg-main-400">
                  {{ info.icon }}
                </span>
              </div>
              <div class="flex justify-center">
                {{ info.value }}
              </div>
              <div class="flex justify-center">
                <button class="font-medium capitalize hover:text-main-500 text-main-400 hover:underline" @click="info.action">
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
            <div v-for="(ingredient, index) in recipe.ingredients" :key="index+'ing'" class="flex items-center space-x-4">
              <div :class="[verifyCompletedIngredient(index) ? 'text-white': 'text-gray-600 hover:text-gray-800', 'rounded-full']">
                <button class="focus:outline-none" @click="toggleIngredient(index)">
                  <span :class="[verifyCompletedIngredient(index) ? 'bg-gray-400 border-gray-400' : 'border-gray-200 bg-gray-200 ', 'flex items-center justify-center w-8 h-8 p-2 text-base border rounded-full material-icons']">
                    done
                  </span>
                </button>
              </div>
              <div :class="[verifyCompletedIngredient(index) ? 'line-through text-gray-400': 'text-gray-800', '']">
                {{ ingredient.description }}
              </div>
            </div>
          </div>
        </div>

        <div class="mb-8">
          <h2 class="mb-4 title-2">
            Instructions
          </h2>
          <div class="space-y-4">
            <div v-for="(ingredient, index) in recipe.instructions" :key="index+'ing'" class="flex space-x-4">
              <div :class="[verifyCompletedInstruction(index) ? 'text-white': 'text-gray-600 hover:text-gray-800', 'rounded-full mt-2']">
                <button class="focus:outline-none" @click="toggleInstruction(index)">
                  <span :class="[verifyCompletedInstruction(index) ? 'bg-gray-400 border-gray-400 material-icons' : 'border-gray-200 bg-gray-200', 'flex items-center justify-center w-8 h-8 p-2 text-base border rounded-full']">
                    {{ verifyCompletedInstruction(index) ? 'done' : index + 1 }}
                  </span>
                </button>
              </div>
              <div :class="[verifyCompletedInstruction(index) ? 'line-through text-gray-400': 'text-gray-800', 'leading-7']">
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
  data () {
    return {
      slug: null,
      completedIngredients: [],
      completedInstructions: [],
      recipe: {
        image: '',
        description: '',
        name: '',
        slug: '',
        cook_time: '',
        average_rating: '',
        discounts: [
          {}
        ],
        ingredients: [
          {}
        ],
        instructions: [
          {}
        ],
        comments: [
          {}
        ],
        favorited: [
          {}
        ],
        menu: [
          {}
        ],
        restrictions: [
          {}
        ],
        author: {
          name: '',
          slug: ''
        }
      }
    }
  },
  computed: {
    infoIcons () {
      return [
        { icon: 'timer', value: '50 min', actionName: 'more', action: this.cookAction },
        { icon: 'star', value: '4.3', actionName: 'rate', action: this.reviewAction },
        { icon: 'money_off', value: '3 Discounts', actionName: 'show', action: this.discountsAction }
      ]
    },
    imgLink () {
      return `background-image: url('${this.recipe.image}');`
    },
    authorLink () {
      return `/profile/${this.recipe.author.slug}`
    }
  },
  beforeDestroy () {
    console.log('before destroy')
    this.$store.commit('layout/setSearchbar', true)
    this.$store.commit('layout/setContainer', true)
  },
  created () {
    this.$store.commit('layout/setSearchbar', false)
    this.$store.commit('layout/setContainer', false)
    this.slug = this.$route.params.slug
    // TODO Fetch - fake fetch right now
    this.recipe = {
      image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in vestibulum sem, non lobortis odio. Sed sit amet nunc sit amet purus pretium porttitor.',
      name: 'Burger au porc effiloché',
      slug: 'burder_porc',
      cook_time: ['0', '50'],
      average_rating: '4.5',
      discounts: {
        metro: [{}],
        maxi: [{}]
      },
      ingredients: [
        { description: '30 ml (2 c. à soupe) d’huile d’olive' },
        { description: '1 poivron rouge, épépiné et coupé en dés' },
        { description: '3 gousses d\'ail, hachées' },
        { description: '1 piment jalapeño, épépiné et haché finement' },
        { description: '45 ml (3 c. à soupe) de poudre de chili' },
        { description: '15 ml (1 c. à soupe) de paprika' },
        { description: '1 boîte de 796 ml (28 oz) de tomates entières, écrasées à la main' },
        { description: '500 ml (2 tasses) de patates douces pelées et coupées en dés' },
        { description: '125 ml (½ tasse) de bouillon de légumes' },
        { description: '125 ml (½ tasse) d’arachides, grillées et hachées finement' },
        { description: '125 ml (½ tasse) de coriandre fraîche ciselée' }
      ],
      instructions: [
        { order: 0, description: 'Dans une grande casserole, dorer les oignons dans l’huile. Ajouter le poivron, l’ail, le piment, les épices et faire revenir environ 2 minutes.' },
        { order: 1, description: 'Ajouter les tomates, les haricots, les patates douces, le bouillon et porter à ébullition. Laisser mijoter à découvert, en remuant fréquemment, environ 30 minutes ou jusqu’à ce que les patates soient tendres. Ajouter le maïs, les arachides et poursuivre la cuisson environ 5 minutes. Ajouter la coriandre. Rectifier l’assaisonnement.' }
      ],
      comments: [
        {}
      ],
      favorited: true,
      menu: [
        'keto'
      ],
      restrictions: [
        'IBS',
        'IBS',
        'IBS',
        'IBS',
        'IBS',
        'IBS',
        'Gluten Free'
      ],
      author: {
        name: 'Mathieu Gendron',
        slug: 'mathieu_gendron_0'
      }
    }
  },
  methods: {
    toggleMealplan () {

    },
    toggleFavoriteRecipe () {

    },
    toggleViewImage () {

    },
    cookAction () {

    },
    reviewAction () {

    },
    discountsAction () {

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
        this.completedIngredients.splice(this.completedIngredients.indexOf(index), 1)
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
        this.completedInstructions.splice(this.completedInstructions.indexOf(index), 1)
      } else {
        this.completedInstructions.push(index)
      }
    }
  }

}
</script>

<style>
/* .parallax {
  background-image: url('https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80');
} */
</style>
