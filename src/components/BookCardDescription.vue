<template>
  <div id="book-card">
    <!-- 9781612680170 -->
    <!-- 9780062905161 -->
    <div class="container">
      <div class="book" :class="{ active: $store.state.cardPopulated }">
        <div class="book__img">
          <img
            :src="$store.state.bookThumb"
            alt="The thumbnail image of the book"
          />
        </div>
        <div class="book__info">
          <div class="book__date">
            <span>{{ $store.state.bookPublishDate }}</span>
          </div>

          <h1 class="book__title">{{ $store.state.bookTitle }}</h1>
          <p class="book__author">{{ $store.state.bookAuthor }}</p>
          <!-- <p class="book__rating">{{ avgRatingToStars }}</p> -->
          <p class="book__description">{{ $store.state.bookDescription }}</p>
          <!-- TODO: See if there's a way to connect this to amazon or some other bookstore -->
          <a
            @click="addNewBookToFirebase"
            @keypress.enter.prevent="addNewBookToFirebase"
            class="button"
            >Add to library +</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getUser from "../composables/getUser";
import $store from "../store/index";
import { ref } from "vue";
import router from "../router/index";
import { db, auth } from "../firebase/config";
import useCollection from "../composables/useCollection";
import firebase from "firebase/app";
export default {
  setup() {
    // const { addDoc, error } = useCollection("user");
    const { user } = getUser();

    const addNewBookToFirebase = async () => {
      const newBook = {
        title: $store.state.bookTitle,
        author: $store.state.bookAuthor,
        description: $store.state.bookDescription,
        cover: $store.state.bookThumb,
      };
      await db
        .collection("users")
        .doc(user.value.uid)
        .update({
          name: user.value.displayName,
          email: user.value.email,
          books: firebase.firestore.FieldValue.arrayUnion(newBook),
        });
      console.log(user.value);
      router.replace("/library");
    };

    return { addNewBookToFirebase };
  },
  data() {
    return {
      bookStars: [],
    };
  },
  methods: {
    addCurrentBookToBooksArr() {
      this.$router.replace("/library");
    },
  },
  computed: {
    avgRatingToStars() {
      let rating = this.$store.state.bookRating;
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
    rgba(255, 207, 206, 0.3),
    rgba(255, 210, 214, 0.3)
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