export const state = () => ({
  username: '',
  accessToken: '',
  user: {},
  following: [],
  followers: []
})

export const getters = {
  loggedIn(state) {
    return !!(state.username || state.accessToken)
  },
}

export const actions = {
  fetchUserData({ dispatch }, { username, accessToken }) {
    if (username) return dispatch('fetchUserDataWithUsername', { username })
    else if (accessToken) return dispatch('fetchUserDataWithAccessToken', { accessToken })
  },

  async fetchUserDataWithAccessToken({ commit }, { accessToken }) {
    const data = await this.$axios.$get(`https://api.github.com/user`, { headers: { authorization: `Bearer ${accessToken}` } })
    const repos = await this.$axios.$get(`https://api.github.com/user/repos`, { headers: { authorization: `Bearer ${accessToken}` } })
    const user = {
      avatarUrl: data.avatar_url,
      following: data.following,
      followers: data.followers,
      repos,
      username: data.login,
    }

    localStorage.setItem('accessToken', accessToken)
    commit('SET_ACCESS_TOKEN', { accessToken })
    commit('SET_USER_DATA', { user })
  },

  async fetchUserDataWithUsername({ commit }, { username }) {
    const data = await this.$axios.$get(`https://api.github.com/users/${username}`)
    const repos = await this.$axios.$get(`https://api.github.com/users/${username}/repos`)
    const user = {
      avatarUrl: data.avatar_url,
      following: data.following,
      followers: data.followers,
      repos,
      username,
    }

    localStorage.setItem('username', username)
    commit('SET_USERNAME', { username })
    commit('SET_USER_DATA', { user })
  },

  async fetchUserFollowing({ state, commit }) {
    let following = await this.$axios.$get(`https://api.github.com/users/${state.user.username}/following`)
    following = following.map((person) => ({ login: person.login, avatarUrl: person.avatar_url }))
    commit('SET_FOLLOWING', { following })
  },

  async fetchUserFollowers({ state, commit }) {
    let followers = await this.$axios.$get(`https://api.github.com/users/${state.user.username}/followers`)
    followers = followers.map((person) => ({ login: person.login, avatarUrl: person.avatar_url }))
    commit('SET_FOLLOWERS', { followers })
  },

  clearData({ commit }) {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('username')
    commit('CLEAR_STATE')
  }
}

export const mutations = {
  SET_USERNAME(state, { username }) {
    state.username = username
  },

  SET_ACCESS_TOKEN(state, { accessToken }) {
    state.accessToken = accessToken
  },

  SET_USER_DATA(state, { user }) {
    state.user = user
  },

  SET_FOLLOWING(state, { following }) {
    state.following = following
  },

  SET_FOLLOWERS(state, { followers }) {
    state.followers = followers
  },

  CLEAR_STATE(state) {
    state.username = ''
    state.accessToken = ''
    state.user = {}
    state.followers = []
    state.following = []
  },
}