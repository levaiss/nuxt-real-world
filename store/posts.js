export const state = () => ({
  posts: []
})

export const getters = {
  posts: state => state.posts
}

export const actions = {
  async fetchPosts ({ commit }) {
    try {
      const posts = await this.$api.$get('/posts')
      commit('setPosts', posts)
    } catch (e) {
      console.error(`[posts/fetchPosts]: ${e.response.status} ${e.response.message}`)
    }
  }
}

export const mutations = {
  setPosts (state, payload) {
    state.posts = payload
  }
}
