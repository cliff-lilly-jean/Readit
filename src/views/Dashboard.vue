<template>
  <div id="user-dashboard">
    <div class="container">
      <!-- Navigation Start -->
      <Navigation :toggleState="toggleState"></Navigation>
      <!-- Navigation End -->
      <!-- Main Start -->
      <div :class="{ active: toggleState }" class="main">
        <!-- Top Bar Start -->
        <Topbar @toggleMenu="toggleStateChange"></Topbar>
        <!-- Top Bar End -->
        <!-- Card Box Start -->
        <CardBox></CardBox>
        <!-- Card Box End -->
        <!-- Details Start -->
        <div class="details">
          <RecentBooks></RecentBooks>
          <RecentConnections></RecentConnections>
        </div>
        <!-- Details End -->
      </div>
      <!-- Main End -->
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import Topbar from "../components/Topbar";
import CardBox from "../components/CardBox";
import RecentBooks from "./RecentBooks";
import RecentConnections from "./RecentConnections";

export default {
  components: {
    Navigation,
    Topbar,
    CardBox,
    RecentBooks,
    RecentConnections,
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

<style>
#user-dashboard {
  overflow-x: hidden;
}

/* Main */
.main {
  position: relative;
  width: calc(100% - 300px);
  left: 300px;
  min-height: 100vh;
  background: #f5f5f5;
  transition: 0.5s;
}

.main.active {
  width: calc(100% - 60px);
  left: 60px;
}

.details {
  position: relative;
  width: 100%;
  padding: 20px;
  padding-top: 0;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 2fr 1fr;
}

/* Media Queries */

@media (max-width: 992px) {
  .main {
    width: 100%;
    left: 0;
  }

  .main.active {
    width: calc(100% - 300px);
    left: 300px;
  }
}

@media (max-width: 758px) {
  .details {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (max-width: 480px) {
  .main,
  .main.active {
    width: 100%;
    left: 0;
  }
}
</style>