<script>
import RoomList from '../components/Rooms/RoomList.vue';

export default {
  components: {
    RoomList,
  },
  data: () => ({

  }),
};
</script>

<template>
  <v-container>
    <v-layout
      col
      wrap
    >
      <room-list />
    </v-layout>
  </v-container>
</template>
