export const state = () => ({
  jwt: null,
  user: null,
  preferences: {
    diet: {},
    restriction: [],
    dislikedFoods: [],
    servings: 2
  },
  settings: {
    facebook: '',
    instagram: '',
    pinterest: '',
    twitter: '',
    youtube: '',
    website: ''
  }
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
  },
  setPreferences (state, el) {

  },
  updatePreferences (state, el) {

  },
  setSettings (state, el) {

  },
  updateSettings (state, el) {

  }
}
