<template>
  <!-- TODO: Create a page that shows the books details when clicked -->
  <div id="connections">
    <div v-if="connections.length" class="book-container">
      <div
        v-for="connection in connections"
        :key="connection.name"
        class="book"
      >
        <div v-for="img in connection" :key="img.photo">
          <div v-if="img.photo.length">
            <img :src="img.photo" />
          </div>
          <div v-else>
            <img src="../assets/images/_img/image_not_available.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div v-else class="no-books">
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
#connections {
  z-index: 1000;
}

.book-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 50px auto 0;
  max-width: 960px;
  flex-wrap: wrap;
}

.book {
  max-width: 200px;
  width: 100%;
  padding: 20px;
}

.book:hover {
  cursor: pointer;
  transform: scale(1.05);
  transition: 0.4s ease;
}

.book-title {
  text-align: center;
}

.no-books {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 70px auto;
  text-align: center;
}
</style>