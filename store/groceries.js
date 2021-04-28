// groceries list

export const state = () => ({
  ingredients: [],
  pickedIngredients: [],
  customIngredients: []
})

export const mutations = {
  updateIngredients (state, ingredients) {
    state.ingredients = ingredients
  },
  addPickedIngredients (state, ingredient) {
    state.pickedIngredients.push(ingredient)
  },
  removePickedIngredients (state, ingredient) {
    state.pickedIngredients = this.$_reject(state.pickedIngredients, (el) => { return this.$_isEqual(el, ingredient) })
  },
  addCustomIngredient (state, ingredient) {
    state.customIngredients.push(ingredient)
  },
  removeCustomIngredient (state, ingredient) {
    state.customIngredients = this.$_reject(state.customIngredients, (el) => { return this.$_isEqual(el, ingredient) })
  }
}
