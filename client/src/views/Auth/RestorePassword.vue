<script>
import FormLayout from '../layouts/FormLayout.vue';

export default {
  components: {
    FormLayout,
  },
};
</script>

<template>
  <div>
    <form-layout
      title="Forgotten password?"
      subtitle="Restore your password:"
    >
      <v-text-field
        id="email"
        label="Enter your email"
        solo
        type="email"
        prepend-inner-icon="mdi-email"
      />

      <v-btn
        block
        color="primary"
        large
      >
        Restore password
      </v-btn>
    </form-layout>
    <div class="text-center mt-10 mb-16">
      <router-link to="/login">
        Return to login
      </router-link>
    </div>
  </div>
</template>
