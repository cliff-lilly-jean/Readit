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
            <label for="#">
              <input type="text" placeholder="Search here" />
              <i class="fas fa-search"></i>
            </label>
          </div>
          <div class="user">
            <img src="../assets/images/_img/cliff-jean-portrait.jpg" alt="" />
          </div>
        </div>
        <!-- Top Bar End -->
        <!-- Card Box Start -->
        <div class="cardBox">
          <!-- TODO: Add a route to the Connections page -->
          <div class="card">
            <div>
              <div class="numbers">{{ totalConnections }}</div>
              <div class="cardName">Connections</div>
            </div>
            <div class="iconBox">
              <i class="fas fa-link"></i>
            </div>
          </div>
          <!-- TODO: Add a route to the Library page -->
          <div class="card">
            <div>
              <div class="numbers">{{ booksInLibrary }}</div>
              <div class="cardName">Library</div>
            </div>
            <div class="iconBox">
              <i class="fas fa-book"></i>
            </div>
          </div>
          <!-- TODO: Add a route to the Clubs page -->
          <div class="card">
            <div>
              <div class="numbers">{{ numberOfClubs }}</div>
              <div class="cardName">Clubs</div>
            </div>
            <div class="iconBox">
              <i class="fas fa-users"></i>
            </div>
          </div>
        </div>
        <!-- Card Box End -->
        <!-- Details Start -->
        <div class="details">
          <div class="recentBooks">
            <div class="cardHeader">
              <h2>Recent Books</h2>
              <!-- TODO: Create a path to the Library page -->
              <a href="#" class="btn">View All</a>
            </div>
            <table>
              <thead>
                <tr>
                  <td>Title</td>
                  <td>Author</td>
                  <td>Publsh Date</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ bookTitle }}</td>
                  <td>{{ bookAuthor }}</td>
                  <td>
                    <span class="status delivered">{{ bookPublishDate }}</span>
                  </td>
                </tr>
                <tr>
                  <td>{{ bookTitle }}</td>
                  <td>{{ bookAuthor }}</td>
                  <td>
                    <span class="status return">{{ bookPublishDate }}</span>
                  </td>
                </tr>
                <tr>
                  <td>{{ bookTitle }}</td>
                  <td>{{ bookAuthor }}</td>
                  <td>
                    <span class="status inprogress">{{ bookPublishDate }}</span>
                  </td>
                </tr>
                <tr>
                  <td>{{ bookTitle }}</td>
                  <td>{{ bookAuthor }}</td>
                  <td>
                    <span class="status">{{ bookPublishDate }}</span>
                  </td>
                </tr>
                <tr>
                  <td>{{ bookTitle }}</td>
                  <td>{{ bookAuthor }}</td>
                  <td>
                    <span class="status delivered">{{ bookPublishDate }}</span>
                  </td>
                </tr>
                <tr>
                  <td>{{ bookTitle }}</td>
                  <td>{{ bookAuthor }}</td>
                  <td>
                    <span class="status return">{{ bookPublishDate }}</span>
                  </td>
                </tr>
                <tr>
                  <td>{{ bookTitle }}</td>
                  <td>{{ bookAuthor }}</td>
                  <td>
                    <span class="status delivered">{{ bookPublishDate }}</span>
                  </td>
                </tr>
                <tr>
                  <td>{{ bookTitle }}</td>
                  <td>{{ bookAuthor }}</td>
                  <td>
                    <span class="status return">{{ bookPublishDate }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="recentConnections">
            <div class="cardHeader">
              <h2>Recent Connections</h2>
              <!-- TODO: Create a path to the Library page -->
              <a href="#" class="btn"></a>
            </div>
          </div>
        </div>
        <!-- Details End -->
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
      booksInLibrary: 97,
      totalConnections: 11,
      numberOfClubs: 2,
      bookTitle: "Harry Potter",
      bookAuthor: "J.K. Rowling",
      bookPublishDate: 2007,
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
  padding: 0 10px;
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
  position: relative;
  width: 400px;
  margin: 0 10px;
}

.search label {
  width: 100%;
}

.search label input {
  width: 100%;
  height: 40px;
  border-radius: 40px;
  padding: 5px 20px;
  padding-left: 35px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

.search label .fas {
  position: absolute;
  left: 15px;
  top: 10px;
}

.user {
  position: relative;
  min-width: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}

.user img {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Cards */

.cardBox {
  position: relative;
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

.cardBox .card {
  position: relative;
  background: #fefefe;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.cardBox .card .numbers {
  position: relative;
  font-size: 2em;
  font-weight: 500;
}

.cardBox .card .cardName {
  color: #999;
}

.cardBox .card .iconBox {
  font-size: 2.5em;
  color: #ff6e69;
}

.details {
  position: relative;
  width: 100%;
  padding: 20px;
  padding-top: 0;
  display: grid;
  grid-template-columns: 2fr 1fr;
}

.details .recentBooks {
  position: relative;
  display: grid;
  min-height: 530px;
  background: #fefefe;
  padding: 20px;
}

.cardHeader {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.cardHeader h2 {
  font-weight: 600;
}

.btn {
  position: relative;
  padding: 5px 10px;
  background: #ff6e69;
  color: #fefefe;
  text-decoration: none;
  border-radius: 6px;
}

.details table {
  width: 100%;
  border-collapse: collapse;
}
</style>