<template>
  <v-row dense>
    <v-col
      cols="8"
      md="7"
    >
      <v-card
        v-for="(article, index) in articles"
        :key="index"
        elevation="1"
        class="mb-3"
      >
        <v-card-title>
          <span class="title font-weight-light">{{ article.title }}</span>
        </v-card-title>
        <v-card-text class="headline font-weight-bold">
          {{ cropText(article.body) }}
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn :to="`article/${article.id}`" nuxt color="cyan" text>
            Read more
          </v-btn>
        </v-card-actions>
      </v-card>

      <div class="text-center py-3">
        <v-pagination
          v-model="page"
          :length="15"
          :total-visible="7"
          color="cyan"
          @input="updateCurrentPage"
        />
      </div>
    </v-col>
    <v-col
      cols="4"
      md="5"
    />
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {},
  async asyncData ({ store }) {
    await store.dispatch('articles/fetchArticles')
  },
  data () {
    return {
      page: 1
    }
  },
  computed: {
    ...mapGetters({
      articles: 'articles/articles'
    })
  },
  methods: {
    /**
     * Crop text by the limit
     * @param {String} text
     * @param {Number} limit
     */
    cropText (text, limit = 80) {
      if (!text) { return }

      text = text.trim()

      if (text.length <= limit) { return text }

      text = text.slice(0, limit)

      return text.trim() + '...'
    },

    updateCurrentPage (payload) {
      console.log(payload)
    }
  }
}
</script>
