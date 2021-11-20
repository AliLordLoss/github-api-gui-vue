<template>
  <div>
    <v-container>
      <UserForm v-if="!$store.getters.loggedIn" />
      <div v-else>
        username: {{ this.$store.state.username }}
        <hr />
        token: {{ this.$store.state.accessToken }}
        <hr />
        <v-btn text @click="clearData">Clear My Data</v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  methods: {
    clearData() {
      this.$store.dispatch('clearData')
    },
  },
}
</script>
