<template>
  <div id="book-card">
    <div class="container">
      <!-- TODO: Design better looking cards -->
      <div class="card" :class="{ active: cardPopulated }">
        <h2>{{ bookTitle }}</h2>
        <div class="card__interior">
          <div class="imgBx">
            <img :src="bookThumb" alt="" />
          </div>
          <div class="content">
            <div class="content__container">
              <p>{{ bookDescription }}</p>
              <p class="card__author">{{ bookAuthor }}</p>
            </div>
            <div class="content__rating">
              <p>Avg rating: {{ avgRatingToStars }}</p>
            </div>
            <!-- TODO: Create an add to library function that push's the book to the users database library -->
            <button class="button">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from "../main";
export default {
  data() {
    return {
      bookTitle: "",
      bookAuthor: "",
      bookDescription: "",
      bookThumb: "",
      bookRating: "",
      bookStars: [],
      cardPopulated: false,
    };
  },
  methods: {},
  created() {
    bus.$on("bookDetails", (data) => {
      this.bookTitle = data[0];
      this.bookAuthor = data[1];
      this.bookDescription = data[2];
      this.bookThumb = data[3];
      this.bookRating = data[4];
      this.cardPopulated = true;
    });
  },
  computed: {
    avgRatingToStars() {
      let rating = this.bookRating;
      let stars = this.bookStars;
      for (let i = 0; i < rating; i++) {
        stars.push("⭐");
      }
      return stars.join("");
    },
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
  margin: 20px auto;
  max-width: 600px;
  width: 100%;
  background: #fff1f3;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  padding: 20px;
}

.card h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.7rem;
}

.card__interior {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card.active {
  opacity: 1;
}

.content {
  max-width: 400px;
}

.card .imgBx {
  max-width: 250px;
}

p {
  margin: 10px 0;
}

.card__author {
  font-weight: bold;
  font-size: 1.15rem;
}
</style>