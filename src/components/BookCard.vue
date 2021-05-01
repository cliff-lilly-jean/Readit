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
          <buttion class="btn">Learn More</buttion>
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
  position: relative;
  width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px;
}

.card {
  max-width: 300px;
  height: 215px;
  position: relative;
  background: #fefefe;
  margin: 30px 10px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  transition: 0.3s ease-in-out;
}

.card:hover {
  min-height: 420px;
  height: 100%;
}

.imgBx {
  position: relative;
  width: 260px;
  /* height: 260px; */
  top: -60px;
  /* left: 20px; */
  z-index: 1;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.card .imgBx img {
  max-width: 100%;
  border-radius: 4px;
}

.card .content {
  position: relative;
  margin-top: -140px;
  padding: 10px 15px;
  text-align: center;
  color: #111;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;
}

.card:hover .content {
  visibility: visible;
  opacity: 1;
  margin-top: -40px;
  transition-delay: 0.3s;
}
</style>