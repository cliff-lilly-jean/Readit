<template>
  <!-- TODO: Create a page that shows the books details when clicked -->
  <div id="books">
    <div v-if="books.length" class="book-container">
      <div v-for="book in books" :key="book.title" class="book">
        <div v-for="img in book" :key="img.cover">
          <div v-if="img.cover.length">
            <img :src="img.cover" />
            <p class="book-title">{{ img.title }}</p>
          </div>
          <div v-else>
            <img src="../assets/images/_img/image_not_available.jpeg" alt="" />
            <p class="book-title">{{ img.title }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="no-books">
      <h1>No Books in Your Library</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ["books"],
};
</script>

<style scoped>
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