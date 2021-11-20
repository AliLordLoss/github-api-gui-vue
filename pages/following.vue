<template>
  <div class="container">
    <ListPeople :people="following" />
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
    this.$store.dispatch('fetchUserFollowing')
  },
  computed: {
    following() {
      return this.$store.state.following
    },
  },
}
</script>