<script>
import ListMenu from './ListMenu.vue';

export default {
  components: {
    ListMenu,
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
};
</script>

<template>
  <v-footer
    color="white"
  >
    <v-container>
      <v-layout
        row
        wrap
      >
        <v-flex
          sm6
          md3
        >
          <list-menu
            :title="about.title"
            :items="about.items"
          />
        </v-flex>
        <v-flex
          sm6
          md3
        >
          <list-menu
            :title="ourWebsite.title"
            :items="ourWebsite.items"
          />
        </v-flex>
        <v-flex
          sm6
          md3
        >
          <list-menu
            :title="social.title"
            :items="social.items"
          />
        </v-flex>
        <v-flex
          sm6
          md3
        >
          <list-menu
            :title="developmentBy.title"
            :items="developmentBy.items"
          />
        </v-flex>
        <v-flex sm6>
          <span
            class="copyright-info caption"
            color="#808284"
          >
            Copyright © 2014-2020 PlanITpoker
          </span>
        </v-flex>
        <v-flex sm6>
          <div class="d-flex caption">
            <v-spacer />

            <router-link
              to=""
              class="mr-5 text-decoration-none blue-grey--text lighten-3"
            >
              Privacy Policy
            </router-link>
            <router-link
              to=""
              class="text-decoration-none blue-grey--text lighten-3"
            >
              Terms and Conditions
            </router-link>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>
