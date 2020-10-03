<script>
import Room from './Room.vue';

export default {
  name: 'Home',
  components: {
    Room,
  },
  data: () => ({
    items: [
      {
        id: 1,
        name: 'Test name',
        link: 'http://localhost:3000',
      },
      {
        id: 2,
        name: 'Test name 2',
        link: 'http://localhost:3000',
      },
      {
        id: 3,
        name: 'Test name 3',
        link: 'http://localhost:3000',
      },
    ],
  }),
};
</script>

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
      <room />
    </v-layout>
  </v-container>
</template>
