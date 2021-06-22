<template>
  <div v-if="user" id="user-dashboard">
    <div class="container">
      <!-- Navigation Start -->
      <Navigation :toggleState="toggleState"></Navigation>
      <!-- Navigation End -->
      <!-- Main Start -->
      <div :class="{ active: toggleState }" class="main">
        <!-- Top Bar Start -->
        <Topbar
          :currentUser="currentUser"
          @toggleMenu="toggleStateChange"
        ></Topbar>
        <!-- Top Bar End -->
        <!-- Card Box Start -->
        <UserTotals></UserTotals>
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
import UserTotals from "../components/UserTotals";
import RecentBooks from "../components/RecentBooks";
import RecentConnections from "../components/RecentConnections";
import { ref } from "vue";
import getUser from "../composables/getUser";

export default {
  components: {
    Navigation,
    Topbar,
    UserTotals,
    RecentBooks,
    RecentConnections,
  },
  setup() {
    const { user } = getUser();
    const currentUser = ref(user);

    return { user, currentUser };
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
  grid-template-columns: 3fr 1fr;
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