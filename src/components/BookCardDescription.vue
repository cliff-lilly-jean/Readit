<template>
  <div id="book-card">
    <!-- 9781612680170 -->
    <div class="container">
      <!-- TODO: Fix card design -->
      <div class="book" :class="{ active: cardPopulated }">
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
          <!-- TODO: See if there's a way to connect this to amazon or some other bookstore -->
          <!-- TODO: Create an add to library method that increments the number of books in a books array and adds the current book to the array -->
          <a @click="addCurrentBookToBooksArr" class="button"
            >Add to library +</a
          >
          {{ $store.state }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      books: [],
    };
  },
  methods: {
    addCurrentBookToBooksArr() {
      // Create a new object, newBookObj
      // Add the bookTitle, bookAuthor, bookDescription, bookThumb, bookRating and bookPublishDate
      let newBookAddition = {
        title: this.bookTitle,
        author: this.bookAuthor,
        description: this.bookDescription,
        thumbnail: this.bookThumb,
        rating: this.bookRating,
        publishDate: this.bookPublishDate,
      };
      // Add the newBookObj to the books array in the library view
      this.books.push(newBookAddition);
      // Emit the books array up to the library view
      this.emitter.emit("sendBookData", this.books);
      this.$router.replace("/library");
    },
  },
  created() {
    this.emitter.on("bookDetails", (data) => {
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
#book-card {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
}

img {
  width: 100%;
}

.book {
  width: 100%;
  max-width: 98rem;
  padding: 2rem;
  background: #fefefe;
  box-shadow: 0 1.4rem 8rem rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  border-radius: 0.8rem;
  opacity: 0;
}

.book__img {
  min-width: 200px;
  max-width: 200px;
  height: 100%;
  transform: translateX(-4rem);
  position: relative;
}

.book__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 0.8rem;
}

.book__img:before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    to right,
    rgba(245, 91, 86, 0.3),
    rgba(254, 84, 99, 0.3)
  );
  box-shadow: 0.5rem 0.5rem 3rem 1px rgba(0, 0, 0, 0.05);
  border-radius: 0.8rem;
}

.book__date span {
  display: block;
  color: rgba(0, 0, 0, 0.5);
  font-size: 1.6rem;
  margin: 0.5rem 0;
}

.book__title {
  font-size: 2.5rem;
  margin: 0.8rem 0 0.7rem;
  text-transform: uppercase;
  color: #e8505b;
}

.book__author {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.book__description {
  margin: 1rem 0 1.8rem;
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.7);
}

.book__cta {
  display: inline-block;
  padding: 1rem 1.5rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 1.1rem;
  color: #fefefe;
  background-image: linear-gradient(to right, #e8505b 0%, #f57a83 100%);
  border-radius: 0.8rem;
  text-decoration: none;
}

.book.active {
  opacity: 1;
}

/* TODO: Fix the sizing on mobile */

/* Media Queries */

@media screen and (max-width: 1068px) {
  .book {
    max-width: 80rem;
  }

  .book__img {
    min-width: 200px;
    max-width: 200px;
  }
}

@media screen and (max-width: 868px) {
  .book {
    max-width: 40rem;
  }
}

@media screen and (max-width: 768px) {
  .book {
    padding: 1rem;
    flex-direction: column;
  }

  .book__img {
    min-width: 200px;
    max-width: 200px;
    transform: translate(0, -2rem);
  }
}
</style>