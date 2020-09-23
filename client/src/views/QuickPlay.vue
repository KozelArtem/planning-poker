<script>
import FormLayout from './layouts/FormLayout.vue';

export default {
  components: {
    FormLayout,
  },
};
</script>

<template>
  <div>
    <form-layout
      title="Let's start!"
      subtitle="Join the room:"
    >
      <v-text-field
        id="roomName"
        label="Enter you name"
        solo
        prepend-inner-icon="mdi-account"
      />

      <v-btn
        block
        color="primary"
        large
      >
        Enter
      </v-btn>

      <v-layout
        col
        wrap
        class="my-8"
      >
        <v-flex xs3>
          <v-divider class="mt-3" />
        </v-flex>
        <v-flex
          xs6
          class="text-center"
        >
          Already have an account?
        </v-flex>
        <v-flex xs3>
          <v-divider class="mt-3" />
        </v-flex>
      </v-layout>

      <v-btn
        block
        outlined
        color="primary"
        large
        to="/login"
      >
        Login
      </v-btn>
    </form-layout>
  </div>
</template>
