<script>
import { mapActions, mapState } from 'vuex';

import FormLayout from '../../components/layouts/FormLayout.vue';

import { AUTH_QUICK_PLAY } from '../../store/actionTypes/auth';
import { AUTH_NAMESPACE } from '../../store/namespaces';

export default {
  components: {
    FormLayout,
  },

  data: () => ({
    firstName: '',
    lastName: '',
  }),

  computed: {
    ...mapState(AUTH_NAMESPACE, ['user']),
  },

  methods: {
    ...mapActions(AUTH_NAMESPACE, [AUTH_QUICK_PLAY]),

    async onClick() {
      const { firstName, lastName } = this;
      await this[AUTH_QUICK_PLAY]({ firstName, lastName });

      if (this.user) {
        this.$router.push('/board');
      }
    },
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
        id="firstName"
        v-model="firstName"
        label="Enter you first name"
        solo
        prepend-inner-icon="mdi-account"
      />
      <v-text-field
        id="lastName"
        v-model="lastName"
        label="Enter you last name"
        solo
        prepend-inner-icon="mdi-account"
      />

      <v-btn
        block
        color="primary"
        large
        @click="onClick"
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
