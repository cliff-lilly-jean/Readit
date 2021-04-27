<template>
  <div id="user-dashboard">
    <div class="container">
      <!-- Navigation Start -->
      <div :class="{ active: navigationState }" class="navigation">
        <ul>
          <li>
            <a href="#">
              <span class="icon"><i class="fab fa-resolving"></i></span>
              <span class="title"><h2>ReadIt</h2></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"><i class="fas fa-home"></i></span>
              <span class="title">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"><i class="fas fa-link"></i></span>
              <span class="title">Connections</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"><i class="fas fa-book"></i></span>
              <span class="title">Library</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"><i class="fas fa-users"></i></span>
              <span class="title">Clubs</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"><i class="fas fa-question-circle"></i></span>
              <span class="title">Help</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"><i class="fas fa-cog"></i></span>
              <span class="title">Settings</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"><i class="fas fa-lock"></i></span>
              <span class="title">Password</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"><i class="fas fa-sign-out-alt"></i></span>
              <span class="title">Sign Out</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- Navigation End -->
      <!-- Main Start -->
      <div :class="{ active: mainState }" class="main">
        <!-- Top Bar Start -->
        <div class="topbar">
          <div
            @click="toggleMenu"
            :class="{ active: toggleState }"
            class="toggle"
          ></div>
          <div class="search">
            <label for="">
              <input type="text" placeholder="Search here" />
            </label>
          </div>
          <div class="user">
            <img src="../assets/images/_img/cliff-jean-portrait.jpg" alt="" />
          </div>
        </div>
        <!-- Top Bar End -->
      </div>
      <!-- Main End -->
    </div>
  </div>
</template>

<script>
// Font Awesome Import

export default {
  data() {
    return {
      toggleState: false,
      navigationState: false,
      mainState: false,
    };
  },
  methods: {
    toggleMenu() {
      this.toggleMenuState = !this.toggleMenuState;
      this.navigationState = !this.navigationState;
      this.mainState = !this.mainState;
    },
  },
};
</script>

<style scoped>
#user-dashboard {
  overflow-x: hidden;
}

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

/* Top Bar */
.topbar {
  width: 100%;
  background: #fefefe;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.toggle {
  position: relative;
  width: 60px;
  height: 60px;
  cursor: pointer;
}

.toggle:before {
  content: "\f0c9";
  font-family: "Font Awesome 5 Free";
  position: absolute;
  width: 100%;
  height: 100%;
  line-height: 60px;
  font-size: 24px;
  font-weight: 900;
  text-align: center;
  color: #111;
}

.search {
}
</style>