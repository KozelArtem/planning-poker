<script>
import ProfileMenu from './ProfileMenu.vue';
import AuthButtons from './AuthButtons.vue';

export default {
  components: {
    ProfileMenu,
    AuthButtons,
  },

  data: () => ({
    about: {
      title: 'about',
      items: [
        { text: 'CodeFirst', link: '/' },
        { text: 'Email Us', link: '/' },
      ],
    },
    ourWebsite: {
      title: 'our websites',
      items: [
        { text: 'CodeFirst', link: '/' },
        { text: 'TopVet', link: '/' },
        { text: 'PlanITpoker', link: '/' },
      ],
    },
    social: {
      title: 'get social',
      items: [],
    },
    developmentBy: {
      title: 'custom software development by',
      items: [],
    },
  }),

  computed: {
    showRightMenu() {
      return !['/login', '/signup', '/quickplay'].includes(this.$route.fullPath);
    },
  },
};
</script>

<template>
  <div>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
    >
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css"
    >

    <v-app-bar
      color="white"
      height="60"
    >
      <v-container grid-list-xs>
        <v-layout
          class="justify-end align-center justify-space-between"
          justify="end"
          align="center"
        >
          <v-flex
            lg2
            md4
            sm6
          >
            <router-link to="/">
              <v-img
                max-height="50"
                contain
                src="https://planitpoker.azureedge.net/Content/logo.png"
                @click="$router.push('/')"
              />
            </router-link>
          </v-flex>
          <v-spacer />
          <v-flex
            v-if="showRightMenu"
            lg2
            md3
            sm4
          >
            <profile-menu v-if="false" />
            <auth-buttons />
          </v-flex>
        </v-layout>
      </v-container>
    </v-app-bar>
  </div>
</template>
