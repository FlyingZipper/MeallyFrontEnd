// discounted ingredients

export const state = () => ({
  ingredients: null
})

export const mutations = {
  setDiscounts (state, ingredients) {
    state.ingredients = ingredients
  }
}
