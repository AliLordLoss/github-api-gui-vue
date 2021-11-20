export const state = () => ({
  username: '',
  accessToken: ''
})

export const getters = {
  loggedIn(state) {
    return !!(state.username || state.accessToken)
  },


}

export const actions = {
  fetchUserData({ dispatch }, { username, accessToken }) {
    if (username) dispatch('fetchUserDataWithUsername', { username })
    else if (accessToken) dispatch('fetchUserDataWithAccessToken', { accessToken })
  },

  fetchUserDataWithUsername({ commit }, { username }) {
    localStorage.setItem('username', username)
    commit('SET_USERNAME', { username })
  },

  fetchUserDataWithAccessToken({ commit }, { accessToken }) {
    localStorage.setItem('accessToken', accessToken)
    commit('SET_ACCESS_TOKEN', { accessToken })
  },

  clearData({ commit }) {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('username')
    commit('CLEAR_CREDENTIALS')
  }
}

export const mutations = {
  SET_USERNAME(state, { username }) {
    state.username = username
  },

  SET_ACCESS_TOKEN(state, { accessToken }) {
    state.accessToken = accessToken
  },

  CLEAR_CREDENTIALS(state) {
    state.username = ''
    state.accessToken = ''
  }
}