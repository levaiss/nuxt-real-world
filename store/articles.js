export const state = () => ({
  articles: [],
  articlesCount: null
})

export const getters = {
  articles: state => state.articles
}

export const actions = {
  async fetchArticles ({ commit }) {
    try {
      const data = await this.$api.$get('/articles')
      commit('setArticles', data.articles)
      commit('setArticlesCount', data.articlesCount)
    } catch (e) {
      console.error(`[articles/fetchArticles]: ${e.response.status} ${e.response.message}`)
    }
  }
}

export const mutations = {
  setArticles (state, payload) {
    state.articles = payload
  },
  setArticlesCount (state, payload) {
    state.articlesCount = payload
  }
}
