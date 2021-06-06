<template>
  <div id="book-card-component">
    <!-- Navigation Start -->
    <Navigation :toggleState="toggleState"></Navigation>
    <!-- Navigation End -->
    <!-- Main Start -->
    <div :class="{ active: toggleState }" class="main">
      <!-- Top Bar Start -->
      <Topbar @toggleMenu="toggleStateChange"></Topbar>
      <!-- Top Bar End -->
      <BookCard v-on:updateBooksArray="addNewBook($event)"></BookCard>
    </div>
    <!-- Main End -->
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import Topbar from "../components/Topbar";
import BookCard from "../components/BookCard";
export default {
  components: {
    Navigation,
    Topbar,
    BookCard,
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
    addNewBook(newBook) {
      this.books.push(newBook);
      console.log(this.books);
    },
  },
};
</script>

<style scoped>
</style>