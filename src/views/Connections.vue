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
        <Connection :connections="connections"></Connection>
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
import Connection from "../components/Connection";
import getConnections from "../composables/getConnections";
export default {
  components: {
    Navigation,
    Topbar,
    ConnectionSearchBar,
    Connection,
  },
  setup() {
    const { loadConnections, connections, error } = getConnections();

    loadConnections();
    console.log(connections);
    return { connections, error };
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
  /* min-height: 100vh; */
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>