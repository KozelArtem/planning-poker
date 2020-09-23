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
  <v-menu
    rounded
    offset-y
    close-on-click
  >
    <template v-slot:activator="{ on }">
      <v-card
        flat
        height="60"
        class="px-4 my-2"
        v-on="on"
      >
        <span class="subtitle-1 mr-4">
          {{ user.username }}
        </span>
        <v-avatar size="60">
          <v-img
            src="https://www.planitpoker.com/profile/userimage/2906658/"
            alt="alt"
          />
        </v-avatar>
      </v-card>
    </template>
    <v-list
      subheader
      rounded
    >
      <v-subheader>
        {{ user.username }}
      </v-subheader>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        link
      >
        <v-list-item-title
          :to="item.link"
          v-text="item.text"
        />
      </v-list-item>
    </v-list>
  </v-menu>
</template>
