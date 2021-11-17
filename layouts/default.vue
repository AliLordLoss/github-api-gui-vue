<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" right fixed app>
      <div class="theme-chooser">
        <v-icon v-show="dark"> mdi-weather-sunny </v-icon>
        <v-icon v-show="!dark"> mdi-weather-night </v-icon>
        <v-switch v-model="dark" @click="toggleTheme"></v-switch>
      </div>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer absolute app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      dark: true,
    }
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = this.dark
    },
  },
}
</script>

<style scoped>
.theme-chooser {
  display: flex;
  justify-content: center;
}
</style>
