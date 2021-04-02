<template>
  <div id="home">
    <header id="header">
      <div class="lp-container">
        <div class="lp__left">
          <h1 class="title">ReadIt</h1>
          <p>
            Create a digital library of books you've read or plan on reading.
            Leave ratings for the books you love and reccomend them to your
            friends.
          </p>
          <button @click="routeToSearchPage" class="search-button">
            Create your library <i class="fas fa-arrow-right"></i>
          </button>
        </div>
        <div class="lp__right">
          <img
            src="../assets/images/_img/love_reading.svg"
            alt=""
            class="icon"
          />
        </div>
      </div>
    </header>
    <main id="body">
      <!-- Start Info -->
      <section id="info">
        <p class="section-title">Why Books Are Important</p>
        <div class="info__card">
          <img
            src="../assets/images/_img/big_book.svg"
            alt=""
            class="info__image"
          />
          <p class="info__copy">
            <!-- TODO: Add relavent copy -->
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quo
            voluptatem repudiandae nam! Eaque, assumenda itaque non sapiente,
            voluptates nisi accusamus et provident magnam, ad nostrum ratione
            molestias dicta praesentium!
          </p>
        </div>
        <div class="info__card">
          <img
            src="../assets/images/_img/sitting_reading.svg"
            alt=""
            class="info__image"
          />
          <p class="info__copy">
            <!-- TODO: Add relavent copy -->
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quo
            voluptatem repudiandae nam! Eaque, assumenda itaque non sapiente,
            voluptates nisi accusamus et provident magnam, ad nostrum ratione
            molestias dicta praesentium!
          </p>
        </div>
        <div class="info__card">
          <img
            src="../assets/images/_img/man_reading.svg"
            alt=""
            class="info__image"
          />
          <p class="info__copy">
            <!-- TODO: Add relavent copy -->
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quo
            voluptatem repudiandae nam! Eaque, assumenda itaque non sapiente,
            voluptates nisi accusamus et provident magnam, ad nostrum ratione
            molestias dicta praesentium!
          </p>
        </div>
      </section>
      <!-- End Info -->
      <!-- Start Library -->
      <section id="library">
        <p class="section-title section-title--alt">
          All Your Books in One Place
          <!-- <img src="../assets/images/_img/personal_library.svg" alt="" /> -->
        </p>
      </section>
      <!-- End Library -->
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    routeToSearchPage() {
      this.$router.push("/search");
    },
  },
};
</script>

<style scoped>
#header {
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.lp-container {
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  max-width: 1140px;
  padding: 0 20px;
  height: 100%;
}

.lp__left {
  width: 50%;
}

.lp__left p {
  max-width: 90%;
}

.title {
  font-size: 5rem;
  color: #f4999d;
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  color: #e8505b;
}

.section-title--alt {
  color: #010101;
}

.lp__right {
  width: 50%;
}

.icon {
  max-width: 100%;
}

.search-button {
  padding: 15px 50px;
  margin: 20px 0;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  background: #e8505b;
  color: #fefefe;
}

.search-button:hover {
  background: #af3a42;
}

/* Info Rules */

#info {
  background: #fcfcfc;
}

/* Info Cards */

.info__card {
  margin: 50px auto;
  max-width: 1140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info__card:nth-of-type(even) .info__image {
  order: 2;
}

.info__card:nth-of-type(odd) .info__copy {
  order: 1;
}

.info__image {
  max-width: 400px;
}

.info__copy {
  max-width: 600px;
}

/* Library Rules */

#library {
  background: #f4999d;
}

#library img {
  max-width: 420px;
  margin: 50px auto 0;
  display: block;
}

/* Media Queries */
@media (max-width: 1140px) {
  .title {
    font-size: 3rem;
  }
}

@media (max-width: 960px) {
  .title {
    font-size: 2rem;
  }

  .lp-container {
    flex-direction: column;
  }

  .lp__left,
  .lp__right {
    max-width: 600px;
    width: 100%;
    text-align: center;
  }
}
</style>