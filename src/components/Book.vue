<template>
  <!-- TODO: Create a page that shows the books details when clicked -->
  <div id="books">
    <div v-for="book in $store.state.books" :key="book.title" class="book">
      <img :src="book.bookThumbnail" alt="The thumbnail image of the book" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["books"],
  setup() {},
};
</script>

<style scoped>
#books {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 50px auto 0;
  max-width: 1000px;
  flex-wrap: wrap;
}

.book {
  max-width: 200px;
  /* width: 100%; */
}

.book:hover {
  cursor: pointer;
  transform: scale(1.05);
  transition: 0.4s ease;
}
</style>