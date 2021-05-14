<template>
  <div id="book-card">
    <!-- 9781612680170 -->
    <div class="container">
      <!-- TODO: Design better looking cards -->
      <div class="book">
        <div class="book__img">
          <img :src="bookThumb" alt="The thumbnail image of the book" />
        </div>
        <div class="book__info">
          <div class="book__date">
            <span>{{ bookPublishDate }}</span>
          </div>
          <h1 class="book__title">{{ bookTitle }}</h1>
          <p class="book__author">{{ bookAuthor }}</p>
          <p class="book__rating">{{ avgRatingToStars }}</p>
          <p class="book__description">{{ bookDescription }}</p>
          <a href="#" class="book__cta">Read more</a>
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
      bookPublishDate: "",
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
      this.bookPublishDate = data[5];
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