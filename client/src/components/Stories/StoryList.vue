<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};

</script>
<template>
  <v-card
    class="mx-auto"
    tile
  >
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.id"
      >
        <v-list-item-icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            <router-link :to="item.link">
              {{ item.name }}
            </router-link>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>
