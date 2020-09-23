<script>
import draggable from 'vuedraggable';
import TaskLine from './TaskLine.vue';

export default {
  components: {
    draggable,
    TaskLine,
  },

  data: () => ({
    list: [
      { id: 1, title: 'Test 1' },
      { id: 2, title: 'Test 2' },
      { id: 3, title: 'Test 3' },
      { id: 4, title: 'Test 4' },
      { id: 5, title: 'Test 5' },
    ],
    dragging: false,
  }),
};
</script>

<template>
  <div>
    <draggable
      :list="list"
      class="list-group"
      ghost-class="ghost"
      @start="dragging = true"
      @end="dragging = false"
    >
      <task-line
        v-for="element in list"
        :key="element.id"
        :value="element"
      />
    </draggable>
  </div>
</template>

<style lang="scss">
.ghost {
  opacity: 40%;
}
</style>
