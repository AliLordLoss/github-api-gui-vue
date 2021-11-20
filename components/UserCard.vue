<template>
  <div>
    <div class="user-card">
      <AvatarImage :src="user.avatarUrl" />
      <div class="follow-info">
        <ButtonLink to="/following" :text="`following: ${user.following}`" />
        <ButtonLink to="/followers" :text="`followers: ${user.followers}`" />
      </div>
    </div>

    <br />

    <div class="repo-container">
      <h3>{{ user.username }}'s repositories:</h3>
      <div v-for="repo in user.repos" :key="repo.id">
        <v-btn text color="info" :href="repo.html_url">{{ repo.name }}</v-btn>
      </div>
    </div>

    <hr />

    <br />
    <v-row>
      <v-spacer />
      <v-btn text color="warning" @click="clearData">Clear User Data</v-btn>
      <v-spacer />
    </v-row>
  </div>
</template>

<script>
import AvatarImage from './AvatarImage.vue'
export default {
  components: { AvatarImage },
  computed: {
    user() {
      return this.$store.state.user
    },
  },

  methods: {
    clearData() {
      this.$store.dispatch('clearData')
    },
  },
}
</script>

<style scoped>
.follow-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px;
}

.user-card {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.repo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
