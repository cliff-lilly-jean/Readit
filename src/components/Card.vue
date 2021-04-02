<template>
  <div id="card">
    <div class="card" v-for="(book, index) in books" :key="index">
      <img
        :src="book.volumeInfo.imageLinks.smallThumbnail"
        alt=""
        class="card__img"
      />
      <div class="card__body">
        <h3 class="card__title">{{ book.volumeInfo.title }}</h3>
        <!-- TODO: Create a dropdown for long descriptions -->
        <p class="card__description">{{ book.volumeInfo.description }}</p>
        <p class="card__author">{{ book.volumeInfo.authors }}</p>
        <p class="card__category">{{ book.volumeInfo.categories }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["books"],
  data() {
    return {};
  },
};
</script>

<style>
#card {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
}

.card {
  background: #efbacc;
  margin: 50px auto;
  padding: 20px;
  max-width: 300px;
  width: 100%;
}
</style>