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
      <BookCardDescription></BookCardDescription>
    </div>
    <!-- Main End -->
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import Topbar from "../components/Topbar";
import BookCardDescription from "../components/BookCardDescription";
export default {
  components: {
    Navigation,
    Topbar,
    BookCardDescription,
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