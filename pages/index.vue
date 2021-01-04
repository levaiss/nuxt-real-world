<template>
  <v-row dense>
    <v-col
      v-for="(post, index) in posts"
      :key="index"
      cols="12"
      sm="8"
      md="6"
    >
      <v-card
        color="#26c6da"
        dark
        elevation="2"
      >
        <v-card-title>
          <span class="title font-weight-light">{{ post.title }}</span>
        </v-card-title>
        <v-card-text class="headline font-weight-bold">
          {{ cropText(post.body) }}
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn :to="`post/${post.id}`" nuxt color="white" text>
            Read more
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {},
  async asyncData ({ store }) {
    await store.dispatch('posts/fetchPosts')
  },
  computed: {
    ...mapGetters({
      posts: 'posts/posts'
    })
  },
  methods: {
    /**
     * Crop text by the limit
     * @param {String} text
     * @param {Number} limit
     */
    cropText (text, limit = 80) {
      text = text.trim()
      if (!text) { return }

      if (text.length <= limit) { return text }

      text = text.slice(0, limit)

      return text.trim() + '...'
    }
  }
}
</script>
