<template>
  <!-- TODO: Create a page that shows the books details when clicked -->
  <div id="connections">
    <div v-if="connections.length" class="connection-container">
      <div
        v-for="connection in connections"
        :key="connection.name"
        class="connection"
      >
        <div
          class="connection__portrait"
          v-for="img in connection"
          :key="img.photo"
        >
          <div v-if="img.photo.length">
            <img :src="img.photo" />
          </div>
          <div v-else>
            <img src="../assets/images/_img/image_not_available.jpeg" alt="" />
          </div>
        </div>
        <div class="connection__body">
          <p class="connection__name">{{ connection.connection.name }}</p>
          <p class="connection__description">
            <span v-if="!connection.connection.description">
              {{ connection.connection.email }}
            </span>
            <span v-else>
              {{ connection.connection.description }}
            </span>
          </p>
          <p class="connection__books">
            <i class="fas fa-book" style="color: #ff6e69"></i>
            {{ connection.connection.books.length }} books
          </p>
        </div>
      </div>
    </div>
    <div v-else class="no-connections">
      <h1>You have no connections currently</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ["connections"],
};
</script>

<style scoped>
.connection {
  max-width: 275px;
  width: 100%;
  background: #fefefe;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.5s;
  min-height: 200px;
}

.connection:hover {
  transform: scale(1.05);
  cursor: pointer;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.3);
}

.connection img {
  border-radius: 50%;
  min-width: 100px;
  width: 100%;
}

.connection__body {
  text-align: center;
  font-size: 18px;
}

.connection__name {
  font-weight: 600;
  color: #ff6e69;
}

.connection-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
}

.no-connections {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 70px auto;
  text-align: center;
}

/* Media Queries */
@media (max-width: 676px) {
  .connection-container {
    flex-direction: column;
    align-items: center;
  }

  .connection__body {
    font-size: 16px;
  }

  .connection {
    max-width: 600px;
  }
}
</style>