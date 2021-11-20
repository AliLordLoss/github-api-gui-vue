<template>
  <div class="container">
    <ListPeople :people="followers" />
    <v-row>
      <v-spacer />
      <ButtonLink to="/" text="back" />
      <v-spacer />
    </v-row>
  </div>
</template>

<script>
export default {
  fetch() {
    this.$store.dispatch('fetchUserFollowers')
  },
  computed: {
    followers() {
      return this.$store.state.followers
    },
  },
}
</script>