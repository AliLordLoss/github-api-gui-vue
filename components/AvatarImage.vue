<template>
  <v-img :class="`avatar-${variant}`" :src="src" alt="no pic :(" />
</template>

<script>
export default {
  props: {
    src: {
      required: true,
      type: String,
    },
    variant: {
      type: String,
      default: 'big',
    },
  },
}
</script>

<style>
.avatar-big {
  max-height: 200px;
  max-width: 200px;
  border-radius: 100px;
}

.avatar-small {
  max-height: 50px;
  max-width: 50px;
  border-radius: 25px;
}
</style>