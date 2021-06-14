<template>
  <div id="card-box-component">
    <div class="userTotals">
      <router-link to="/connections">
        <div class="card">
          <div>
            <!-- TODO: Pull this data from the server -->
            <div class="numbers">{{ totalConnections }}</div>
            <div class="cardName">Connections</div>
          </div>
          <div class="iconBox">
            <i class="fas fa-link"></i>
          </div>
        </div>
      </router-link>
      <router-link to="/library">
        <div class="card">
          <div>
            <!-- TODO: Pull this data from the server -->
            <div class="numbers">{{ $store.state.books.length }}</div>
            <div class="cardName">Library</div>
          </div>
          <div class="iconBox">
            <i class="fas fa-book"></i>
          </div>
        </div>
      </router-link>
      <!-- TODO: Add a route to the Clubs page -->
      <router-link to="/clubs">
        <div class="card">
          <div>
            <!-- TODO: Pull this data from the server -->
            <div class="numbers">{{ numberOfClubs }}</div>
            <div class="cardName">Clubs</div>
          </div>
          <div class="iconBox">
            <i class="fas fa-users"></i>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      booksInLibrary: 97,
      totalConnections: 11,
      numberOfClubs: 2,
    };
  },
};
</script>

<style scoped>
.userTotals {
  position: relative;
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

/* Cards */

.card {
  position: relative;
  background: #fefefe;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.card .numbers {
  position: relative;
  font-size: 2em;
  font-weight: 500;
  color: #ff6e69;
}

.card .cardName {
  color: #999;
}

.card .iconBox {
  font-size: 2.5em;
  color: #ff6e69;
}

@media (max-width: 992px) {
  .userTotals {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .userTotals {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>