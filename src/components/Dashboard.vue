<template>
  <div id="user-dashboard">
    <div class="container">
      <div class="navigation">
        <ul>
          <li>
            <span class="icon"><i class="fab fa-resolving"></i></span>
            <span class="title"><h2>ReadIt</h2></span>
          </li>
          <li>
            <span class="icon"><i class="fas fa-home"></i></span>
            <span class="title">Dashboard</span>
          </li>
          <li>
            <span class="icon"><i class="fas fa-link"></i></span>
            <span class="title">Connections</span>
          </li>
          <li>
            <span class="icon"><i class="fas fa-book"></i></span>
            <span class="title">Library</span>
          </li>
          <li>
            <span class="icon"><i class="fas fa-users"></i></span>
            <span class="title">Clubs</span>
          </li>
          <li>
            <span class="icon"><i class="fas fa-question-circle"></i></span>
            <span class="title">Help</span>
          </li>
          <li>
            <span class="icon"><i class="fas fa-cog"></i></span>
            <span class="title">Settings</span>
          </li>
          <li>
            <span class="icon"><i class="fas fa-lock"></i></span>
            <span class="title">Password</span>
          </li>
          <li>
            <span class="icon"><i class="fas fa-sign-out-alt"></i></span>
            <span class="title">Sign Out</span>
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
</style>