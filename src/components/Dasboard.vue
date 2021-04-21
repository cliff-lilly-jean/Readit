<template>
  <div id="user-dashboard">
    <!-- SIdebar -->
    <div class="sidebar">
      <div class="sidebar-brand">
        <h2>ReadIt</h2>
      </div>
      <div class="sidebar-menu">
        <ul>
          <li>
            <a href="" class="active">
              <span class="las la-igloo"></span>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="las la-users"></span>
              <span>Connections</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="las la-book"></span>
              <span>Library</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="las la-users"></span>
              <span>Clubs</span>
            </a>
          </li>
          <!-- <li>
            <a href="">
              <span class="las la-user-circle"></span>
              <span>Account</span>
            </a>
          </li> -->
        </ul>
      </div>
    </div>
    <!-- Main content -->
    <div class="main-content">
      <header>
        <h2>
          <label for="">
            <span class="las la-bars"></span>
          </label>
          Dashboard
        </h2>
        <div class="search-wrapper">
          <span class="las la-search"></span>
          <!-- TODO: Add the book search functionailty -->
          <input type="search" placeholder="Search here" />
        </div>
        <div class="user-wrapper">
          <!-- TODO: BIND the SRC of each individual USERS image IF they have one -->
          <!-- <img src="" width="40px" height="40px" alt="" /> -->
          <!-- TODO: MODEL the userName for each individual USER -->
          <div>{{ userName }}</div>
          <small>{{ role }}</small>
        </div>
      </header>
      <main>
        <div class="cards">
          <!-- Individual Card -->
          <div class="card-single">
            <div>
              <h1>{{ myConnections }}</h1>
              <span>Connections</span>
            </div>
            <div>
              <span class="las la-users"></span>
            </div>
          </div>
          <!-- Individual Card -->
          <div class="card-single">
            <div>
              <h1>{{ myLibrary }}</h1>
              <span>Library</span>
            </div>
            <div>
              <span class="las la-book"></span>
            </div>
          </div>
          <!-- Individual Card -->
          <div class="card-single">
            <div>
              <h1>{{ myClubs }}</h1>
              <span>Clubs</span>
            </div>
            <div>
              <span class="las la-users"></span>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "Cliff Jean",
      role: "Moderator",
      myConnections: 20,
      myLibrary: 79,
      myClubs: 3,
    };
  },
};
</script>

<style scoped>
:root {
  --main-color: #e8505b;
  --color-dark: #992830;
  --text-grey: #8390a2;
}

* {
  list-style-type: none;
  text-decoration: none;
}

/* Sidebar */
.sidebar {
  width: 345px;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  background: #e8505b;
}

.sidebar-brand {
  height: 90px;
  padding: 1rem 0rem 1rem 2rem;
  color: #fefefe;
}

.sidebar-brand span {
  display: inline-block;
  padding-right: 1rem;
}

.sidebar-menu li {
  width: 100%;
  margin-bottom: 1.7rem;
  padding-left: 1rem;
}

.sidebar-menu a {
  padding-left: 1rem;
  display: block;
  color: #fefefe;
  font-size: 1.1rem;
}

.sidebar-menu a.active {
  background: #fefefe;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: #e8505b;
  border-radius: 30px 0px 0px 30px;
}

.sidebar-menu a span:first-child {
  font-size: 1.5rem;
  padding-right: 1rem;
}

/* Main Content */

.main-content {
  margin-left: 345px;
}
</style>