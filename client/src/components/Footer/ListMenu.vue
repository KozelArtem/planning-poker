<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    items: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
};
</script>

<template>
  <v-list
    flat
    nav
    tile
    no-action
  >
    <v-subheader class="text-subtitle-2 text-uppercase font-weight-bold primary--text">
      {{ title }}
    </v-subheader>
    <v-list-item-group color="primary">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
      >
        <v-list-item-content>
          <v-list-item-title
            class="body-2"
            :to="item.link"
            v-text="item.text"
          />
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<style lang="scss" scoped>

</style>
