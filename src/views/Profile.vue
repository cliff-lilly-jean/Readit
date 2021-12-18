<template>
  <div id="profile">
    <!-- Navigation Start -->
    <Navigation :toggleState="toggleState"></Navigation>
    <!-- Navigation End -->
    <!-- Main Start -->
    <div :class="{ active: toggleState }" class="main">
      <!-- Top Bar Start -->
      <Topbar @toggleMenu="toggleStateChange"></Topbar>
      <!-- Top Bar End -->
      <!-- Profile Start -->
      <Profile></Profile>
      <!-- Profile End -->
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import Topbar from "../components/Topbar";
import Profile from "../components/Profile";
export default {
  components: {
    Navigation,
    Topbar,
    Profile,
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

<style>
</style>