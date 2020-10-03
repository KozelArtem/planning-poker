<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
      required: false,
    },
  },
};
</script>

<template>
  <v-container
    class="fill-height justify-center align-center"
    fluid
  >
    <v-layout
      row
      class="justify-center align-center"
    >
      <v-flex sm6>
        <v-card class="py-10">
          <v-list-item
            two-line
            class="text-center"
          >
            <v-list-item-content>
              <v-list-item-title class="text-h4 mb-2">
                {{ title }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ subtitle }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-text class="px-16">
            <form action="">
              <slot default />
            </form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
