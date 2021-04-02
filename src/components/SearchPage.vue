/<template>
  <div id="search-page">
    <h1 class="title">Readit</h1>
    <div class="container">
      <p>Search for any book you'd like to get information on.</p>
      <div class="input-group__container">
        <div class="input-group">
          <input
            v-model="usersSearchQueryFromInput"
            type="text"
            class="search-box"
            v-on:keyup.enter="userSearchQuery"
          />
          <button @click="userSearchQuery">
            <img src="../assets/images/red_search_button.svg" alt="" />
          </button>
        </div>
      </div>
      <!-- Create a card div -->
    </div>
    <Card :books="books"></Card>
  </div>
</template>

<script>
// import { gsap } from "gsap";
import Card from "./Card";
import axios from "axios";
export default {
  components: { Card },
  props: [],
  data() {
    return {
      usersSearchQueryFromInput: "",
      booksAPIKey: process.env.VUE_APP_API_KEY,
      books: {},
    };
  },
  methods: {
    userSearchQuery() {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            this.usersSearchQueryFromInput +
            "&key=" +
            this.booksAPIKey
        )
        .then((response) => {
          // Get the data and add it to books
          this.books = response.data.items;
          console.log(this.books);
        });
      this.usersSearchQueryFromInput = "";
    },
  },
  computed: {},
  mounted() {},
};
</script>

<style scoped>
#search-page {
  padding: 0 20px;
}

.container {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
  position: relative;
}

.title {
  font-size: 3rem;
  color: #f4999d;
}

.input-group__container {
  position: relative;
  margin: 0 auto;
  max-width: 500px;
  width: 100%;
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}

.input-group button {
  background: transparent;
  border: none;
  position: relative;
  top: 25px;
  left: -30px;
  right: 0;
  bottom: 0;
  cursor: pointer;
}

.input-group button:focus {
  outline: none;
}

.input-group button:active {
  outline: none;
  padding: 5px;
}

.input-group button img:active {
  background: #efefef;
  border: 1px solid #d3d3d3;
}

.input-group button img {
  height: 20px;
  width: 20px;
}

.search-box {
  border-bottom: 3px solid #e8505b;
  border-top: none;
  border-right: none;
  border-left: none;
  padding: 20px 10px 5px;
  max-width: 800px;
  width: 100%;
  margin: 50px auto 0;
  outline: none;
  font-size: 1.3rem;
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
  margin-bottom: 0;
}
</style>