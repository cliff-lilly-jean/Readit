<template>
  <div id="user-dashboard">
    <!-- SIdebar -->
    <div class="sidebar">
      <div class="sidebar-brand">
        <h1>ReadIt</h1>
      </div>
      <div class="sidebar-menu">
        <ul>
          <li>
            <a href="">
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
        <h1>
          <label for="">
            <span class="las la-bars"></span>
          </label>
          Dashboard
        </h1>
        <div class="search-wrapper">
          <span class="las la-search"></span>
          <!-- TODO: Add the book search functionailty -->
          <input type="search" placeholder="Search here" />
        </div>
        <div class="user-wrapper">
          <!-- TODO: BIND the SRC of each individual USERS image IF they have one -->
          <img src="" width="40px" height="40px" alt="" />
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
      myCLubs: 3,
    };
  },
};
</script>

<style>
</style>