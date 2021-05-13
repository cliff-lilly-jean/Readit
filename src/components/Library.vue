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
      <BookCard></BookCard>
    </div>
    <!-- Main End -->
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Topbar from "./Topbar";
import BookCard from "./BookCard";
export default {
  components: {
    Navigation,
    Topbar,
    BookCard,
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