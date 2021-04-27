export const state = () => ({
  navbar: true,
  searchbar: true,
  container: true
})

export const mutations = {
  setNavbar (state, payload) {
    state.navbar = payload
  },
  setSearchbar (state, payload) {
    state.searchbar = payload
  },
  setContainer (state, payload) {
    state.container = payload
  }
}
