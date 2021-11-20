<template>
  <nuxt-link :to="to" class="my-link">
    <v-btn text color="info"> {{ text }} </v-btn>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      required: true,
    },
    text: {
      required: true,
      type: String,
    },
  },
}
</script>

<style scoped>
.my-link {
  text-decoration: none;
  margin-top: 15px;
}
</style>