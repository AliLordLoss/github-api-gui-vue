export default ({ store }) => {
  const username = localStorage.getItem('username')
  const accessToken = localStorage.getItem('accessToken')
  if (username || accessToken) {
    store.dispatch('fetchUserData', { username, accessToken })
  }
}