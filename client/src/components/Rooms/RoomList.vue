<script>
export default {
  props: {
    // items: {
    //   type: Array,
    //   required: true,
    //   default: () => [],
    // },
  },

  data: () => ({
    headers: [
      {
        text: 'Title',
        value: 'title',
      },
      {
        text: 'Records',
        value: 'records',
      },
      {
        text: 'Time',
        value: 'time',
      },
      {
        text: 'Last Used',
        value: 'lastUsed',
      },
      {
        text: 'Last Story',
        value: 'lastStory',
      },
      {
        text: '',
        value: 'actions',
        sortable: false,
      },
    ],
  }),

  computed: {
    rooms() {
      return [
        {
          hash: 'sadasdqwe23123g12k3123',
          title: 'Test',
          records: 0,
          time: 123,
          lastUsed: '12312312',
          lastStory: '0 of 1',
        },
      ];
    },
  },

  methods: {
    onRowClick(item) {
      this.$router.push(`/room/${item.hash}`);
    },
  },
};

</script>
<template>
  <v-data-table
    :headers="headers"
    :items="rooms"
    :items-per-page="5"
    @click:row="onRowClick"
  >
    <template v-slot:[`item.title`]="{ item }">
      <div class="text-h5">
        {{ item.title }}
      </div>
    </template>
    <template v-slot:[`item.actions`]>
      <v-btn icon>
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-square-edit-outline</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </template>
  </v-data-table>
</template>
