<script>
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <v-app>
    <Header />
    <v-main class="grayed">
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>
<style lang="scss" scoped>
.grayed {
  background-color: #edf2f7;
  border-top: 1px solid #d5d9de;
  border-bottom: 1px solid #d5d9de;
}
</style>
