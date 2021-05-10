<template>
  <div id="book-card">
    <div class="container">
      <!-- TODO: Design better looking cards -->
      <div class="card">
        <div class="imgBx">
          <!-- TODO: Bind the mg src to the returned image from the search -->
          <img src="../assets/images/_img/book_cover.jpeg" alt="" />
        </div>
        <div class="content">
          <!-- TODO: Bind this to the returned book title -->
          <h2>{{ bookTitle }}</h2>
          <p>{{ bookDescription }}</p>
          <button class="button">Learn More</button>
        </div>
      </div>
      <div class="card">
        <div class="imgBx">
          <!-- TODO: Bind the mg src to the returned image from the search -->
          <img src="../assets/images/_img/book_cover.jpeg" alt="" />
        </div>
        <div class="content">
          <!-- TODO: Bind this to the returned book title -->
          <h2>{{ bookTitle }}</h2>
          <p>{{ bookDescription }}</p>
          <button class="button">Learn More</button>
        </div>
      </div>
      <div class="card">
        <div class="imgBx">
          <!-- TODO: Bind the mg src to the returned image from the search -->
          <img src="../assets/images/_img/book_cover.jpeg" alt="" />
        </div>
        <div class="content">
          <!-- TODO: Bind this to the returned book title -->
          <h2>{{ bookTitle }}</h2>
          <p>{{ bookDescription }}</p>
          <button class="button">Learn More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from "../main";
export default {
  // props: ["bookTitle", "bookAuthor", "bookDescription"],
  data() {
    return {
      bookTitle: "",
      bookAuthor: "",
      bookDescription: "",
    };
  },
  created() {
    bus.$on("bookDetails", (data) => {
      this.bookTitle = data[0];
      this.bookAuthor = data[1];
      this.bookDescription = data[2];
    });
  },
};
</script>

<style scoped>
.container {
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 0 auto;
  padding: 20px;
}

.card {
  margin: 20px 0;
  background: #fff1f3;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

.card .content {
  padding: 0 20px;
  text-align: center;
}
</style>