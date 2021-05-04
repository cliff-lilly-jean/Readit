<template>
  <div id="book-card">
    <div class="container">
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
export default {
  data() {
    return {
      bookTitle: "Harry Potter",
      bookDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum in autem possimus delectus consequatur consectetur odit non praesentium. Voluptatum rerum voluptates dicta ullam aliquid deserunt alias voluptatem vel hic libero!",
    };
  },
};
</script>

<style scoped>
.container {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 0 auto;
  padding: 20px;
}
</style>