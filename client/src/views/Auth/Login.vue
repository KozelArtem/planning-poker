<script>
import { mapState, mapActions } from 'vuex';

import { AUTH_LOGIN } from '../../store/actionTypes/auth';

import FormLayout from '../layouts/FormLayout.vue';

export default {
  components: {
    FormLayout,
  },

  data: () => ({
    email: '',
    password: '',
  }),

  computed: {
    ...mapState('AUTH', ['user']),
  },

  methods: {
    ...mapActions([AUTH_LOGIN]),

    async login() {
      await this[AUTH_LOGIN]({ email: this.email, password: this.password });

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
      title="Welcome back"
      subtitle="Login with your account:"
    >
      <v-text-field
        id="email"
        v-model="email"
        label="Enter your email"
        solo
        type="email"
        prepend-inner-icon="mdi-email"
      />
      <v-text-field
        id="password"
        v-model="password"
        label="Enter your password"
        solo
        type="password"
        prepend-inner-icon="mdi-lock"
      />

      <div class="text-right mb-3">
        <router-link to="/restorepassword">
          Forgotten password?
        </router-link>
      </div>

      <v-btn
        block
        color="primary"
        large
        @click="login"
      >
        Login
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
          Or Login with:
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
      <span>Don't have an account? </span>
      <router-link to="/signup">
        Sign Up
      </router-link>
    </div>
  </div>
</template>
