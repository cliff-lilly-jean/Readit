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
          <p class="connection__name">Name: {{ connection.connection.name }}</p>
          <p class="connection__email">
            Email: {{ connection.connection.email }}
          </p>
          <p class="connection__books">
            # of Books: {{ connection.connection.books.length }}
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
  max-width: 350px;
  width: 100%;
  background: #44cba1;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}

.connection img {
  border-radius: 50%;
  max-width: 50px;
  width: 100%;
}

.connection__body {
  font-weight: bold;
  font-size: 18px;
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