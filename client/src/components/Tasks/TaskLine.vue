<script>
import TrashIcon from '../Icons/TrashIcon.vue';
import MoveIcon from '../Icons/MoveIcon.vue';

export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  components: {
    TrashIcon,
    MoveIcon,
  },
};
</script>

<template>
  <div class="task-line flex">
    <move-icon class="task-line__icon xs-1" />
    <div class="task-line__name xs-6">
      <p class="task-line__name--title">
        {{ value.title }}
      </p>
      <span class="task-line__name--subtitle">Link</span>
    </div>
    <trash-icon class="task-line__action xs-1" />
  </div>
</template>

<style lang="scss" scoped>
$gray: #202020;

.task-line {
  position: relative;
  cursor: pointer;
  background-color: #f1f1f1;
  height: 50px;
  justify-items: center;
  align-items: center;
  border-bottom: 1px solid rgba(15, 15, 15, 0.123);

  &__icon {
    height: 20px;
    margin: 0 auto;
    fill: lightgrey;

    &:hover {
      fill: gray;
    }
  }

  &__name {
    &--title {
      margin: 1px;
      font-size: 18px;
      font-weight: bold;
      line-height: 18px;
    }

    &--subtitle {
      font-size: 12px;
      color: $gray;
    }
  }

  &__action {
    fill: lightgrey;
    position: relative;
    height: 20px;
    margin: 0 auto;

    &:hover {
      fill: gray;
      transition: all 0.2s;
    }
  }
}
</style>
