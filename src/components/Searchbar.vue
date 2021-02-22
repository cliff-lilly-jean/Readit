<template>
  <div class="searchbar">
    <div class="searchbar__container" @click="searchbarOpen">
      <div class="searchbar__left">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 56.966 56.966"
          style="fill: white"
          xml:space="preserve"
        >
          <path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
	s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
	c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
	s-17-7.626-17-17S14.61,6,23.984,6z"
          />
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </div>
      <div class="searchbar__right">
        <input
          class="searchbar__input"
          type="text"
          v-model="userSearch"
          @keyup.enter="userSearchConcat"
        />
        <p>{{ userSearch }}</p>
      </div>
    </div>
    <div class="card" v-for="book in books" :key="book.id">
      <p>{{ book.volumeInfo.title }}</p>
      <br />
      <!-- <img :src="" alt="" /> -->
      <p>{{ book.volumeInfo.authors }}</p>
      <br />
      <p>{{ book.volumeInfo.description }}</p>
      <br />
      <p>
        <span>pages: {{ book.volumeInfo.pageCount }}</span> |
        <span>published: {{ book.volumeInfo.publishedDate }}</span>
      </p>
      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import axios from "axios";

export default {
  data() {
    return {
      apiReturnedData: "",
      apiKey: process.env.VUE_APP_API_KEY,
      userSearch: "",
      userSearchQueryString: "",
      books: "",
    };
  },
  mounted() {},
  methods: {
    searchbarOpen() {
      gsap.to(".searchbar__container", {
        duration: 0.5,
        width: 400,
        delay: 0.4,
        onComplete: this.moveIconLeft,
        ease: "expo.out",
      });
    },
    moveIconLeft() {
      gsap.to(".searchbar__left", {
        duration: 0.4,
        // x: -100,
        // left: -500,
        ease: "exp-in-out",
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        onComplete: this.showInputBar,
      });
    },
    showInputBar() {
      gsap.to(".searchbar__right .searchbar__input", {
        duration: 0.4,
        ease: "exp-in-out",
        display: "inline-block",
      });
    },
    userSearchConcat() {
      this.userSearchQueryString = this.userSearch.split(" ").join("+");
      console.log(this.userSearchQueryString);
      this.appendUserSearchToQuery();
    },
    appendUserSearchToQuery() {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            this.userSearchQueryString +
            "&maxResults=40&key=" +
            this.apiKey
        )
        .then((response) => {
          this.apiReturnedData = response;
          this.books = response.data.items;
          // TODO: Create a function to display all the data based off the code below
          // Title, Thumbnail, Description, Page count, Published date
          console.log(this.apiReturnedData.data.items[1].volumeInfo.title);
          console.log(this.apiReturnedData.data.items);
        });
    },
  },
};
</script>

<style scoped>
.searchbar {
  max-width: 500px;
  width: 100%;
}

.searchbar__container {
  display: flex;
  max-width: 500px;
  width: 100%;
  justify-content: center;
  max-height: 75px;
  position: relative;
  top: -23em;
  left: 0;
  right: 0;
  cursor: pointer;
  margin: 0 auto;
}

.searchbar__left {
  background: #000;
  max-width: 75px;
  width: 100%;
  max-height: 75px;
  height: 100%;
  border-radius: 20px;
  /* border-top-right-radius: 0;
  border-bottom-right-radius: 0; */
  padding: 20px;
  display: inline-block;
}

.seachbar__right {
  height: 100%;
  width: 100%;
}

.searchbar__right .searchbar__input {
  max-width: 300px;
  width: 100%;
  background-color: #fff;
  height: 100%;
  border: none;
  border-radius: 20px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  outline: none;
  font-size: 2.2em;
  padding: 0 40px;
  display: none;
}

.searchbar img {
  color: #fff;
}
</style>