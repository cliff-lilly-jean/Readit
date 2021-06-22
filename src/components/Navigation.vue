<template>
  <div id="navigation-component">
    <!-- Navigation Start -->
    <div :class="{ active: toggleState }" class="navigation">
      <ul>
        <li>
          <router-link to="/">
            <span class="icon"><i class="fab fa-resolving"></i></span>
            <span class="title"><h2>ReadIt</h2></span>
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard">
            <span class="icon"><i class="fas fa-home"></i></span>
            <span class="title">Dashboard</span>
          </router-link>
        </li>

        <li>
          <router-link to="/connections">
            <span class="icon"><i class="fas fa-link"></i></span>
            <span class="title">Connections</span>
          </router-link>
        </li>
        <li>
          <router-link to="/library">
            <span class="icon"><i class="fas fa-book"></i></span>
            <span class="title">Library</span>
          </router-link>
        </li>
        <li>
          <router-link to="/clubs">
            <span class="icon"><i class="fas fa-users"></i></span>
            <span class="title">Clubs</span>
          </router-link>
        </li>
        <li @click="handleLogout">
          <!-- TODO: Force this link to automatically make the sign out form active -->
          <a>
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
import useLogout from "../composables/useLogout";
import router from "../router/index";
export default {
  props: ["toggleState"],
  setup() {
    const { logout, logoutError } = useLogout();

    const handleLogout = async () => {
      await logout();
      if (!logoutError.value) {
        console.log("User logged out");
        router.replace("/");
      }
    };

    return { handleLogout };
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