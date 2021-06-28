<template>
  <div id="connections-component">
    <!-- Navigation Start -->
    <Navigation :toggleState="toggleState"></Navigation>
    <!-- Navigation End -->
    <!-- Main Start -->
    <div :class="{ active: toggleState }" class="main">
      <!-- Top Bar Start -->
      <Topbar @toggleMenu="toggleStateChange"></Topbar>
      <!-- Top Bar End -->
      <!-- TODO: Ceate a field to search the firebase database for connections -->
      <!-- Connection Body Content Start -->
      <div class="connection-body-content">
        <!-- Search Connections Start -->
        <ConnectionSearchBar></ConnectionSearchBar>
        <!-- Search Connections End -->
      </div>
      <!-- Connection Body Content End -->
    </div>
    <!-- Main End -->
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import Topbar from "../components/Topbar";
import ConnectionSearchBar from "../components/ConnectionSearchBar";
export default {
  components: {
    Navigation,
    Topbar,
    ConnectionSearchBar,
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
.connection-body-content {
  display: flex;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>