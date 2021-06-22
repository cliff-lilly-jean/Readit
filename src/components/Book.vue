<template>
  <!-- TODO: Create a page that shows the books details when clicked -->
  <div id="books">
    <!-- <div v-for="book in books" :key="book.title" class="book-container">
      <div v-for="img in book" :key="img.bookThumbnail" class="book">
        <img :src="img.bookThumbnail" alt="The thumbnail of the book" />
      </div>
    </div> -->
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
  max-width: 1000px;
  flex-wrap: wrap;
}

.book {
  max-width: 200px;
}

.book:hover {
  cursor: pointer;
  transform: scale(1.05);
  transition: 0.4s ease;
}
</style>