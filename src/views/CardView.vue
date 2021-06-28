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
  setup() {},

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