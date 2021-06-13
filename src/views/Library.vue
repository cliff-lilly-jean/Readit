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
      {{ books }}
      <p v-for="book in books" :key="book.title">
        {{ book }}
      </p>
      <!-- Book End -->
    </div>
    <!-- Main End -->
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import Topbar from "../components/Topbar";
import Book from "../components/Book.vue";
export default {
  props: ["book"],
  components: {
    Navigation,
    Topbar,
    Book,
  },
  data() {
    return {
      toggleState: false,
      books: [],
    };
  },
  methods: {
    toggleStateChange(value) {
      this.toggleState = value;
    },
  },
  mounted() {
    this.emitter.on("updateBooksArray", (book) => {
      console.log(book);
      this.books.push(book);
      console.log(this.books);
    });
  },
};
</script>

<style scoped>
</style>