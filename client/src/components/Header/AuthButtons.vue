<script>
export default {
  data: () => ({
    user: {
      username: 'User',
    },
    items: [
      { text: 'My Profile', link: '' },
      { text: 'Rooms', link: '' },
      { text: 'Create Account', link: '' },
      { text: 'Sign Out', link: '' },
    ],
  }),
};
</script>

<template>
  <div class="d-flex align-center ma-3">
    <v-btn
      small
      text
      to="/login"
      class="mr-4"
    >
      Login
    </v-btn>
    <v-btn
      color="primary"
      outlined
      large
      to="/signup"
    >
      Sign Up
    </v-btn>
  </div>
</template>
