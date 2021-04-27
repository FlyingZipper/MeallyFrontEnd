export const state = () => ({
  jwt: null,
  user: null
})

export const mutations = {
  setJwt (state, jwt) {
    state.jwt = jwt
  },
  setUser (state, user) {
    state.user = user
  },
  removeJwt (state) {
    state.jwt = null
    state.user = null
  }
}
