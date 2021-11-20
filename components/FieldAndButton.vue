<template>
  <v-row>
    <v-spacer />
    <v-col cols="10" md="6">
      <v-text-field
        v-model="text"
        :label="label"
        :placeholder="placeholder"
        :type="type"
        :hint="hint"
        clearable
      ></v-text-field>
    </v-col>
    <v-col cols="2">
      <v-btn color="success" @click="$emit('submit', text)">Submit</v-btn>
    </v-col>
    <v-spacer />
  </v-row>
</template>

<script>
export default {
  props: {
    label: {
      required: true,
      type: String,
    },
    placeholder: {
      required: true,
      type: String,
    },
    hint: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  data() {
    return {
      text: '',
    }
  },
}
</script>