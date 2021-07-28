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
      <div class="connections-body-content">
        <!-- Search Connections Start -->
        <ConnectionSearchBar></ConnectionSearchBar>
        <!-- Search Connections End -->
        <Club :clubs="clubs"></Club>
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
import Club from "../components/Club";
import getClubs from "../composables/getClubs";
export default {
  components: {
    Navigation,
    Topbar,
    ConnectionSearchBar,
    Club,
  },
  setup() {
    const { loadClubs, clubs, error } = getClubs();

    loadClubs();
    console.log(clubs);
    return { clubs, error };
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
.connections-body-content {
  max-width: 1000px;
  padding: 0 10px;
}
</style>