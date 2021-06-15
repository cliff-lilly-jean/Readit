<template>
  <div id="library-component">
    <!-- Navigation Start -->
    <Navigation :toggleState="toggleState"></Navigation>
    <!-- Navigation End -->
    <!-- Main Start -->
    <div :class="{ active: toggleState }" class="main">
      <!-- Top Bar Start -->
      <Topbar @toggleMenu="toggleStateChange"></Topbar>
      <!-- Top Bar End -->
      <!-- Book Start -->
      <Book :books="books"></Book>
      <!-- Book End -->
    </div>
    <!-- Main End -->
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import Topbar from "../components/Topbar";
import Book from "../components/Book.vue";
import getBooks from "../composables/getBooks";
export default {
  components: {
    Navigation,
    Topbar,
    Book,
  },
  setup() {
    const { load, books } = getBooks();
    console.log(books);
    load();
    return { books };
  },
  data() {
    return {
      toggleState: false,
    };
  },
  methods: {
    toggleStateChange(value) {
      this.toggleState = value;
    },
  },
};
</script>

<style scoped>
</style>