/<template>
  <div id="search-page">
    <!-- Start Navbar -->
    <Navbar></Navbar>
    <!-- End Navbar -->
    <div class="container">
      <div class="input-group__container">
        <p class="input-group__title">
          Search for any book you'd like to get information on.
        </p>
        <div class="input-group">
          <input
            v-model="usersSearchQueryFromInput"
            type="text"
            class="search-box"
            v-on:keyup.enter="userSearchQuery"
          />
          <button @click="userSearchQuery">
            <img src="../assets/images/_img/red_search_button.svg" alt="" />
          </button>
        </div>
      </div>
      <!-- Create a card div -->
      <Card :books="books"></Card>
    </div>

    <!-- Start Footer -->
    <Footer></Footer>
    <!-- End Footer -->
  </div>
</template>

<script>
// import { gsap } from "gsap";
import Card from "./Card";
import axios from "axios";
import Footer from "./Footer";
import Navbar from "./Navbar";
export default {
  components: { Card, Footer, Navbar },
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
.container {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  padding: 0 20px;
}

.input-group__container {
  position: relative;
  margin: 0 auto;
  max-width: 750px;
  min-height: 50vh;
  width: 100%;
  top: 12em;
}

.input-group__title {
  text-align: left;
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
  left: -85px;
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
  max-width: 600px;
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