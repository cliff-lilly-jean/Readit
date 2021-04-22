<template>
  <div id="user-dashboard">
    <!-- SIdebar -->
    <input type="checkbox" id="nav-toggle" />
    <div class="sidebar">
      <div class="sidebar-brand">
        <h2><span>ReadIt</span></h2>
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
              <span class="las la-link"></span>
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
        </ul>
      </div>
    </div>
    <!-- Main content -->
    <div class="main-content">
      <header>
        <h2>
          <label for="nav-toggle">
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
          <img src="../assets/images/_img/cliff-jean-portrait.jpg" alt="" />
          <!-- TODO: MODEL the userName for each individual USER -->
          <div class="user-description">
            <h4>{{ userName }}</h4>
            <small>{{ role }}</small>
          </div>
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
              <span class="las la-link"></span>
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
        <div class="recent-grid">
          <div class="books">
            <div class="card">
              <div class="card-header">
                <h3>Recent Books</h3>
                <button>
                  See all <span class="las la-arrow-right"></span>
                </button>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table width="100%">
                    <thead>
                      <tr>
                        <td>Book Title</td>
                        <td>Author</td>
                        <td>Publish Date</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{{ bookTitle }}</td>
                        <td>{{ bookAuthor }}</td>
                        <td>
                          <span class="status purple"></span>
                          {{ bookPublishedDate }}
                        </td>
                      </tr>
                      <tr>
                        <td>{{ bookTitle }}</td>
                        <td>{{ bookAuthor }}</td>
                        <td>
                          <span class="status pink"></span>
                          {{ bookPublishedDate }}
                        </td>
                      </tr>
                      <tr>
                        <td>{{ bookTitle }}</td>
                        <td>{{ bookAuthor }}</td>
                        <td>
                          <span class="status orange"></span>
                          {{ bookPublishedDate }}
                        </td>
                      </tr>
                      <tr>
                        <td>{{ bookTitle }}</td>
                        <td>{{ bookAuthor }}</td>
                        <td>
                          <span class="status purple"></span>
                          {{ bookPublishedDate }}
                        </td>
                      </tr>
                      <tr>
                        <td>{{ bookTitle }}</td>
                        <td>{{ bookAuthor }}</td>
                        <td>
                          <span class="status pink"></span>
                          {{ bookPublishedDate }}
                        </td>
                      </tr>
                      <tr>
                        <td>{{ bookTitle }}</td>
                        <td>{{ bookAuthor }}</td>
                        <td>
                          <span class="status orange"></span>
                          {{ bookPublishedDate }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="connections">
            <div class="card">
              <div class="card-header">
                <h3>Connections</h3>
                <button>
                  See all <span class="las la-arrow-right"></span>
                </button>
              </div>
              <div class="card-body">
                <div class="connection">
                  <div class="info">
                    <img
                      src="../assets/images/_img/cliff-jean-portrait.jpg"
                      alt=""
                    />
                    <div>
                      <h4>Cliff Jean</h4>
                      <small>{{ connectionDescription }}</small>
                    </div>
                  </div>
                  <div class="contact">
                    <span class="las la-user-circle"></span>
                    <span class="las la-comment"></span>
                    <span class="las la-phone"></span>
                  </div>
                </div>
                <div class="connection">
                  <div class="info">
                    <img
                      src="../assets/images/_img/cliff-jean-portrait.jpg"
                      alt=""
                    />
                    <div>
                      <h4>Cliff Jean</h4>
                      <small>{{ connectionDescription }}</small>
                    </div>
                  </div>
                  <div class="contact">
                    <span class="las la-user-circle"></span>
                    <span class="las la-comment"></span>
                    <span class="las la-phone"></span>
                  </div>
                </div>
                <div class="connection">
                  <div class="info">
                    <img
                      src="../assets/images/_img/cliff-jean-portrait.jpg"
                      alt=""
                    />
                    <div>
                      <h4>Cliff Jean</h4>
                      <small>{{ connectionDescription }}</small>
                    </div>
                  </div>
                  <div class="contact">
                    <span class="las la-user-circle"></span>
                    <span class="las la-comment"></span>
                    <span class="las la-phone"></span>
                  </div>
                </div>
                <div class="connection">
                  <div class="info">
                    <img
                      src="../assets/images/_img/cliff-jean-portrait.jpg"
                      alt=""
                    />
                    <div>
                      <h4>Cliff Jean</h4>
                      <small>{{ connectionDescription }}</small>
                    </div>
                  </div>
                  <div class="contact">
                    <span class="las la-user-circle"></span>
                    <span class="las la-comment"></span>
                    <span class="las la-phone"></span>
                  </div>
                </div>
                <div class="connection">
                  <div class="info">
                    <img
                      src="../assets/images/_img/cliff-jean-portrait.jpg"
                      alt=""
                    />
                    <div>
                      <h4>Cliff Jean</h4>
                      <small>{{ connectionDescription }}</small>
                    </div>
                  </div>
                  <div class="contact">
                    <span class="las la-user-circle"></span>
                    <span class="las la-comment"></span>
                    <span class="las la-phone"></span>
                  </div>
                </div>
              </div>
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
      // TODO: Get this data dynamically from a database
      userName: "Cliff Jean",
      role: "Moderator",
      myConnections: 20,
      myLibrary: 79,
      myClubs: 3,
      bookTitle: "Harry Potter",
      bookAuthor: "J.K Rowling",
      bookPublishedDate: 2004,
      // TODO: Need a way to collect users information
      connectionDescription: "Artist",
    };
  },
};
</script>

<style scoped>
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
  z-index: 100;
  transition: width 300ms;
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

.sidebar-menu {
  margin-top: 1rem;
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

#nav-toggle:checked + .sidebar {
  width: 70px;
}

#nav-toggle:checked + .sidebar .sidebar-brand,
#nav-toggle:checked + .sidebar li {
  padding-left: 1rem;
  text-align: center;
}

#nav-toggle:checked + .sidebar li a {
  padding-left: 0rem;
}

#nav-toggle:checked ~ .main-content {
  margin-left: 70px;
}

.main-content {
  transition: margin-left 300ms;
  margin-left: 345px;
}

#nav-toggle:checked + .sidebar .sidebar-brand h2,
#nav-toggle:checked + .sidebar li a span:last-child {
  display: none;
}

#nav-toggle:checked ~ .main-content {
  margin-left: 70px;
}

#nav-toggle:checked ~ .main-content header {
  width: calc(100% - 70px);
  left: 70px;
}

/* Header */

header {
  background: #fefefe;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  position: fixed;
  left: 345px;
  width: calc(100% - 345px);
  top: 0;
  z-index: 100;
  transition: left 300ms;
}

#nav-toggle {
  display: none;
}

header h2 {
  color: #222;
}

header span label {
  font-size: 1.7rem;
  padding-right: 1rem;
}

header label span:hover {
  cursor: pointer;
}

.search-wrapper {
  border: 1px solid #ccc;
  border-radius: 30px;
  height: 50px;
  display: flex;
  align-items: center;
  overflow-x: hidden;
}

.search-wrapper span {
  display: inline-block;
  padding: 0rem 1rem;
  font-size: 1.5rem;
}

.search-wrapper input {
  height: 100%;
  padding: 0.5rem;
  border: none;
  outline: none;
}

.user-wrapper {
  display: flex;
  align-items: center;
}

.user-wrapper img {
  border-radius: 50%;
  margin-right: 1rem;
  width: 40px;
}

.user-description {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.user-wrapper small {
  color: #8390a2;
}

/* Main Content */

main {
  margin-top: 85px;
  padding: 2rem 1.5rem;
  background: #f1f5f9;
  min-height: calc(100vh - 90px);
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin-top: 1rem;
}

.card-single {
  display: flex;
  justify-content: space-between;
  background: #fefefe;
  padding: 2rem;
  border-radius: 2px;
}

.card-single div:last-child span {
  font-size: 3rem;
  color: #e8505b;
}

.card-single div:first-child span {
  color: #8390a2;
}

.card-single:last-child {
  background: #e8505b;
}

.card-single:last-child h1,
.card-single:last-child div:first-child span,
.card-single:last-child div:last-child span {
  color: #fefefe;
}

/* Cards */

.recent-grid {
  margin-top: 3.5rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 65% auto;
}

.card {
  background: #fefefe;
  border-radius: 5px;
}

.card-header,
.card-body {
  padding: 1rem;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
}

.card-header button {
  background: #e8505b;
  border-radius: 10px;
  color: #fefefe;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  border: 1px solid #e8505b;
}

.card-body img {
  width: 40px;
}

table {
  border-collapse: collapse;
}

thead tr {
  border-top: 1px solid #f0f0f0;
  border-bottom: 2px solid #f0f0f0;
}

thead td {
  font-weight: 700;
}

td {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: #222;
}

td .status {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 1rem;
}

tr td:last-child {
  display: flex;
  align-items: center;
}

.status.purple {
  background: rebeccapurple;
}

.status.pink {
  background: deeppink;
}

.status.orange {
  background: orangered;
}

.table-responsive {
  width: 100%;
  overflow-x: auto;
}

.connection {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.7rem;
}

.info {
  display: flex;
  align-items: center;
}

.info img {
  border-radius: 50%;
  margin-right: 1rem;
}

.info h4 {
  font-size: 0.8rem;
  font-weight: 700;
  color: #222;
}

.info small {
  font-weight: 600;
  color: #8390a2;
}

.contact span {
  font-size: 1.2rem;
  display: inline-block;
  margin-left: 0.5rem;
  color: #e8505b;
}

button:hover {
  cursor: pointer;
}

/* Media Queries */
</style>