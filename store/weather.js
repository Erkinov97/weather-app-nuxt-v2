export const state = () => ({
  token: '309b6d9d6d8936c4fbe4bbd6572ef296',
  data: [],
  error: null,
})

export const mutations = {
  SET_WEATHER(state, data) {
    state.data = data
  },
  SET_ERROR(state, error) {
    state.error = error
  },
}

export const getters = {}

export const actions = {
  newCity({ commit }, { city }) {
    commit('SET_CITY', city)
  },
  async fetchData({ state, commit }, { q }) {
    try {
      const res = await this.$axios.get('/forecast', {
        params: {
          q,
          cnt: 8 * 7,
          lang: 'ru',
          units: 'metric', // or 'imperial' for Fahrenheit
          appid: state.token,
        },
      })
      commit('SET_WEATHER', res.data)
    } catch (error) {
      commit('SET_ERROR', error)
    }
  },
}
