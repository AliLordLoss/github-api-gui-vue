<template>
  <v-form @submit.prevent="submitForm">
    <v-container>
      <v-row>
        <v-spacer />
        <v-col cols="12" md="6">
          <v-text-field
            v-model="username"
            label="Username"
            placeholder="Please enter your github username."
            clearable
          ></v-text-field>
        </v-col>
        <v-spacer />
      </v-row>
      <v-row>
        <v-spacer />
        <v-col cols="12" md="6">
          <v-text-field
            v-model="accessToken"
            label="Access Token"
            placeholder="This field is optional, fill it only if you want to access your private repos."
            clearable
            type="password"
            hint="go to github -> your account settings -> Developer settings -> personal access tokens and generate a token :)"
          ></v-text-field>
        </v-col>
        <v-spacer />
      </v-row>
      <v-row>
        <v-spacer />
        <v-btn color="success" type="submit">Submit</v-btn>
        <v-spacer />
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      accessToken: '',
    }
  },
  methods: {
    submitForm() {
      console.log(this.username)
      console.log(this.accessToken)
    },
  },
}
</script>