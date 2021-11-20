<template>
  <div v-if="people.length > 0">
    <v-row v-for="person in people" :key="person.id">
      <v-spacer />
      <v-col cols="10" md="4" class="user-container">
        <AvatarImage :src="person.avatarUrl" variant="small" />
        <div class="display-name">{{ person.login }}</div>
      </v-col>
      <v-spacer />
    </v-row>
  </div>
  <div v-else>
    <v-row>
      <v-spacer />
      <div>there are no people here!</div>
      <v-spacer />
    </v-row>
  </div>
</template>

<script>
import AvatarImage from './AvatarImage.vue'
export default {
  components: { AvatarImage },
  props: {
    people: {
      required: true,
      type: Array,
    },
  },
}
</script>

<style scoped>
.user-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: dashed blue 2px;
}

.display-name {
  min-width: 250px;
  text-align: center;
}
</style>