<template>
  <div id="card-box-component">
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
.cardBox {
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
}

.card .cardName {
  color: #999;
}

.card .iconBox {
  font-size: 2.5em;
  color: #ff6e69;
}

@media (max-width: 992px) {
  .cardBox {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .cardBox {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>