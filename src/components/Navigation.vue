<template>
  <div id="navigation-component">
    <!-- Navigation Start -->
    <div :class="{ active: toggleState }" class="navigation">
      <ul>
        <li>
          <a @click="routeToHomePage" href="">
            <span class="icon"><i class="fab fa-resolving"></i></span>
            <span class="title"><h2>ReadIt</h2></span>
          </a>
        </li>
        <li>
          <a @click="routeToDashboardPage" href="">
            <span class="icon"><i class="fas fa-home"></i></span>
            <span class="title">Dashboard</span>
          </a>
        </li>
        <li>
          <a @click="routeToConnectionsPage" href="">
            <span class="icon"><i class="fas fa-link"></i></span>
            <span class="title">Connections</span>
          </a>
        </li>
        <li>
          <a @click="routeToLibraryPage" href="">
            <span class="icon"><i class="fas fa-book"></i></span>
            <span class="title">Library</span>
          </a>
        </li>
        <li>
          <a @click="routeToClubsPage" href="">
            <span class="icon"><i class="fas fa-users"></i></span>
            <span class="title">Clubs</span>
          </a>
        </li>
        <li>
          <a @click="routeToHelpPage" href="">
            <span class="icon"><i class="fas fa-question-circle"></i></span>
            <span class="title">Help</span>
          </a>
        </li>
        <li>
          <a @click="routeToSettingsPage" href="">
            <span class="icon"><i class="fas fa-cog"></i></span>
            <span class="title">Settings</span>
          </a>
        </li>
        <li>
          <a @click="routeToPasswordPage" href="">
            <span class="icon"><i class="fas fa-lock"></i></span>
            <span class="title">Password</span>
          </a>
        </li>
        <li>
          <a @click="routeToSignOutPage" href="">
            <span class="icon"><i class="fas fa-sign-out-alt"></i></span>
            <span class="title">Sign Out</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- Navigation End -->
  </div>
</template>

<script>
export default {
  props: ["toggleState"],
  data() {
    return {};
  },
  methods: {
    routeToHomePage() {
      this.$router.push({ path: "/" }).catch(() => {
        this.$emit("routeToHomePage");
      });
    },
    routeToDashboardPage() {
      this.$router.push({ path: "/dashboard" }).catch(() => {
        this.$emit("routeToDashboardPage");
      });
    },
    routeToClubsPage() {
      this.$router.push({ path: "/clubs" }).catch(() => {
        this.$emit("routeToClubsPage");
      });
    },
    routeToLibraryPage() {
      this.$router.push({ path: "/library" }).catch(() => {
        this.$emit("routeToLibraryPage");
      });
    },
    routeToConnectionsPage() {
      this.$router.push({ path: "/connections" }).catch(() => {
        this.$emit("routeToConnectionsPage");
      });
    },
    routeToHelpPage() {
      this.$router.push({ path: "/help" }).catch(() => {
        this.$emit("routeToHelpPage");
      });
    },
    routeToSettingsPage() {
      this.$router.push({ path: "/settings" }).catch(() => {
        this.$emit("routeToSettingsPage");
      });
    },
    routeToPasswordPage() {
      this.$router.push({ path: "/password" }).catch(() => {
        this.$emit("routeToPasswordPage");
      });
    },
    routeToSignOutPage() {
      this.$router.push({ path: "/sign-up" }).catch(() => {
        this.$emit("routeToSignOutPage");
      });
    },
  },
};
</script>

<style scoped>
/* Navigation */
.container {
  position: relative;
  width: 100%;
}

.navigation {
  position: fixed;
  width: 300px;
  height: 100%;
  background: #9c0610;
  transition: 0.5s;
  overflow: hidden;
}

.navigation.active {
  width: 60px;
}

.navigation ul {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.navigation ul li {
  position: relative;
  width: 100%;
  list-style: none;
}

.navigation ul li:hover {
  background: #ff6e69;
}

.navigation ul li:nth-child(1) {
  margin-bottom: 20px;
}

.navigation ul li:nth-child(1):hover {
  background: transparent;
}

.navigation ul li a {
  position: relative;
  display: block;
  width: 100%;
  display: flex;
  text-decoration: none;
  color: #fefefe;
}

.navigation ul li a .icon {
  position: relative;
  display: block;
  min-width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
}

.navigation ul li a .icon .fa {
  color: #fefefe;
  font-size: 24px;
}

.navigation ul li a .title {
  position: relative;
  display: block;
  padding: 0 10px;
  height: 60px;
  line-height: 60px;
  white-space: nowrap;
}

@media (max-width: 992px) {
  .navigation {
    left: -300px;
  }

  .navigation.active {
    left: 0;
    width: 300px;
  }
}

@media (max-width: 480px) {
  .navigation {
    width: 100%;
    left: -100%;
    z-index: 1000;
  }

  .navigation.active {
    width: 100%;
    left: 0;
  }
}
</style>