// mealplan wtih the completed recipes and the provisional recipes for the creation of a custom mealplan

export const state = () => ({
  mealplan: null, // current meal plan object
  completedRecipes: [], // completed recipe in the current mealplan
  provisionalRecipes: [] // recipe to be added into the mealplan
})

export const mutations = {
  setCurrentMealPlan (state, mealplan) {
    state.mealplan = mealplan
  },
  addCompletedRecipe (state, recipe) {
    state.completedRecipes.push(recipe)
  },
  removeCompletedRecipe (state, recipe) {
    state.completedRecipes = this.$_reject(state.completedRecipes, (el) => { return this.$_isEqual(el, recipe) })
  },
  addProvisionalRecipe (state, recipe) {
    state.provisionalRecipes.push(recipe)
  },
  removeProvisionalRecipe (state, recipe) {
    state.provisionalRecipes = this.$_reject(state.provisionalRecipes, (el) => { return this.$_isEqual(el, recipe) })
  }
}
