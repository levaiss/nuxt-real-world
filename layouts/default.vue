<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      app
      absolute
      right
      bottom
      temporary
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      fixed
      elevate-on-scroll
    >
      <v-container>
        <v-toolbar-title class="display-1 font-weight-bold cyan--text" v-text="title" />
        <v-spacer />
        <!--      <v-app-bar-nav-icon @click.stop="toggleDrawer" />-->
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      absolute
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      title: 'conduit'
    }
  },
  methods: {
    toggleDrawer () {
      this.drawer = !this.drawer
    }
  }
}
</script>
