<template>
  <div>
    <v-row>
      <v-spacer />
      <v-col cols="8">
        <h1>Welcome!</h1>
      </v-col>
      <v-spacer />
    </v-row>
    <v-row>
      <v-spacer />
      <v-col cols="8">
        <h3>Please choose a method to get your github info:</h3>
      </v-col>
      <v-spacer />
    </v-row>
    <FieldAndButton
      label="Username"
      placeholder="Please enter your github username."
      @submit="getWithUsername"
    />
    <v-row>
      <v-spacer />
      <v-col cols="8">
        <h3>Or</h3>
      </v-col>
      <v-spacer />
    </v-row>
    <FieldAndButton
      label="Access Token"
      placeholder="This field is optional, fill it only if you want to access your private repos."
      type="password"
      hint="go to github -> your account settings -> Developer settings -> personal access tokens and generate a token :)"
      @submit="getWithAccessToken"
    />
  </div>
</template>

<script>
export default {
  methods: {
    getWithUsername(username) {
      this.$store.dispatch('fetchUserData', { username })
    },
    getWithAccessToken(token) {
      this.$store.dispatch('fetchUserData', { accessToken: token })
    },
  },
}
</script>