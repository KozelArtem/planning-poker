<script>
import StoryList from '../components/Stories/StoryList.vue';

export default {
  components: {
    StoryList,
  },
  data: () => ({
    tab: {},
    tabs: [
      {
        id: 1, name: 'Active stories', count: 1, items: [],
      },
      {
        id: 2, name: 'Completed stories', count: 2, items: [],
      },
      {
        id: 3, name: 'All stories', count: 3, items: [],
      },
    ],
    buttons: [
      { id: 1, icon: 'mdi-plus', color: 'blue' },
      { id: 2, icon: 'mdi-square-edit-outline', color: 'blue' },
    ],
  }),
};
</script>

<template>
  <v-tabs v-model="tab">
    <v-tab
      v-for="i in tabs"
      :key="i.id"
      :href="`#tab-${i.id}`"
    >
      {{ i.name }}
      <v-chip
        small
        color="red"
        text-color="white"
        class="ml-2 px-2"
      >
        {{ i.count }}
      </v-chip>
    </v-tab>
    <v-btn
      v-for="i in buttons"
      :key="`tab-${i.id}`"
      class="my-auto"
      text
    >
      <v-icon :color="i.color">
        {{ i.icon }}
      </v-icon>
    </v-btn>

    <v-tab-item
      v-for="item in tabs"
      :key="item.id"
      :value="`tab-${item.id}`"
    >
      <story-list :items="item.items" />
    </v-tab-item>
  </v-tabs>
</template>
