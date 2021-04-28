
export const state = () => ({
  recipes: [],
  filters: [],
  page: 1,
  fetchedAll: false
})

export const mutations = {
  addRecipes (state, recipes) {
    state.recipes = [...state.recipes, ...recipes]
    state.page++
  },
  clearRecipes (state) {
    state.recipes = []
    state.page = 1
  },
  addFilter (state, filter) {
    state.filters.push(filter)
  },
  removeFilter (state, filter) {
    state.filters = this.$_reject(state.filters, (el) => { return this.$_isEqual(el, filter) })
  },
  clearFilter (state) {
    state.filter = []
  },
  setFetchedAll (state) {
    state.fetchedAll = true
  }
}
