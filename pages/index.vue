<template>
  <div>
    <v-container>
      <UserForm v-if="!$store.getters.loggedIn" />
      <UserCard v-else />
    </v-container>
  </div>
</template>
