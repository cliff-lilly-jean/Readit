<template>
  <div id="user-dashboard">
    <div class="container">
      <div class="navigation">
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
#user-dashboard {
  overflow-x: hidden;
}

/* Navigatrion */
.container {
  position: relative;
  width: 100%;
}

.navigation {
  position: fixed;
  width: 300px;
  height: 100%;
  background: #e8505b;
  transition: 0.5s;
  overflow: hidden;
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
  background: #ff9ea4;
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
</style>