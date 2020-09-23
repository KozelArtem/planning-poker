<script>
import { mapState, mapActions } from 'vuex';

import { AUTH_SIGN_UP } from '../../store/actionTypes/auth';

import FormLayout from '../layouts/FormLayout.vue';

export default {
  components: {
    FormLayout,
  },

  data: () => ({
    userData: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  }),

  computed: {
    ...mapState('AUTH', ['user']),
  },

  methods: {
    ...mapActions(AUTH_SIGN_UP),

    async signUp() {
      await this[AUTH_SIGN_UP](this.userData);

      if (this.user) {
        this.$router.push('/');
      }
    },
  },
};
</script>

<template>
  <div>
    <form-layout
      title="Hello!"
      subtitle="Sign up for free:"
    >
      <v-text-field
        id="firstName"
        v-model="userData.firstName"
        label="Enter your first name"
        solo
        type="text"
        prepend-inner-icon="mdi-account"
      />
      <v-text-field
        id="lastName"
        v-model="userData.lastName"
        label="Enter your last name"
        solo
        type="text"
        prepend-inner-icon="mdi-account"
      />
      <v-text-field
        id="email"
        v-model="userData.email"
        label="Enter your email"
        solo
        type="email"
        prepend-inner-icon="mdi-mail"
      />
      <v-text-field
        id="password"
        v-model="userData.password"
        label="Enter your password"
        solo
        type="password"
        prepend-inner-icon="mdi-lock"
      />

      <v-btn
        block
        color="primary"
        large
        @click="signUp()"
      >
        Sign Up
      </v-btn>

      <v-layout
        col
        wrap
        class="my-8"
      >
        <v-flex xs4>
          <v-divider class="mt-3" />
        </v-flex>
        <v-flex
          xs4
          class="text-center"
        >
          Or Sign Up with:
        </v-flex>
        <v-flex xs4>
          <v-divider class="mt-3" />
        </v-flex>
      </v-layout>

      <v-btn
        block
        outlined
        color="primary"
        large
      >
        Login
      </v-btn>
    </form-layout>
    <div class="text-center mt-10 mb-16">
      <span>Already have an account?</span>
      <router-link to="/login">
        Login
      </router-link>
    </div>
  </div>
</template>
