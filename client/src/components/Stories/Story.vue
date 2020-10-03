<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: '',
    },
    link: {
      type: String,
      required: true,
      default: '',
    },
  },
};

</script>
<template>
  <v-list-item>
    <v-list-item-icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title>
        <router-link to="/link">
          {{ name }}
        </router-link>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>
