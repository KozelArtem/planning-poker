<template>
  <v-container>
    <v-layout
      col
      wrap
    >
      <v-btn
        color="white"
        to="/signup"
      >
        Sign Up Now
      </v-btn>
      <v-btn
        color="white"
        outlined
        to="/quickplay"
      >
        Start a quick play
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'Home',
};
</script>
