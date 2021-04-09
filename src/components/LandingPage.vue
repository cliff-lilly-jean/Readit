<template>
  <div id="home">
    <!-- Start Navbar -->
    <Navbar></Navbar>
    <!-- End Navbar -->
    <header id="header">
      <section class="lp-container">
        <div class="lp__left">
          <!-- <h1 class="title">ReadIt</h1> -->
          <p>
            Create a digital library of books you've read or plan on reading.
            Leave ratings for the books you love and reccomend them to your
            friends.
          </p>
          <button @click="routeToSearchPage" class="button">
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
      </section>
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
            Books are an item that can be passed along to future generations,
            allowing them to gain from the knowledge stored inside.
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
            Books allow you the opportunity to escape reality for a momment,
            placing you inside a world foreign and comepletely differnent from
            the one you're in.
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
            Books provide a wealth of knowledge that would otherwise be hidden.
            The potential for self improvement is greatly increased with the aid
            of books.
          </p>
        </div>
      </section>
      <!-- End Info -->
      <!-- Start Library -->
      <section id="library">
        <p class="section-title section-title--alt">
          All Your Books in One Place
        </p>
        <img src="../assets/images/_img/personal_library.svg" alt="" />
      </section>
      <!-- End Library -->
      <!-- Start Features -->
      <section id="features">
        <h2 class="section-title">What You Can Do</h2>
        <div class="features__container">
          <div class="feature">
            <img
              src="../assets/images/_img/organize_your_library.svg"
              alt=""
              class="feature__img"
            />
            <p class="feature__description">
              Organize your own personal library with your favorite books.
            </p>
          </div>
          <div class="feature">
            <img
              src="../assets/images/_img/share_your_recommendations.svg"
              alt=""
              class="feature__img"
            />
            <p class="feature__description">
              Reccomend and share your favorite books with friends.
            </p>
          </div>
        </div>
      </section>
      <!-- End Features -->
      <!-- Start Footer -->
      <Footer></Footer>
      <!-- End Footer -->
    </main>
  </div>
</template>

<script>
import Footer from "./Footer";
import Navbar from "./Navbar";
export default {
  components: {
    Footer,
    Navbar,
  },
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
#home {
  position: relative;
}

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
  color: #253237;
}

.lp__right {
  width: 50%;
}

.icon {
  max-width: 100%;
}

/* Info Rules */

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
  background: #fff0f0;
}

#library img {
  max-width: 420px;
  margin: 50px auto 0;
  display: block;
}

/* Feature Rules */

#features {
  max-width: 1140px;
  margin: 0 auto;
}

#features h2 {
  margin: 0 auto 50px;
  text-align: center;
  font-weight: normal;
}

.features__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.feature__img {
  max-width: 400px;
}

.feature__description {
  margin: 50px auto 0;
  text-align: center;
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

  .info__card {
    flex-wrap: wrap;
    margin: 100px auto;
    /* text-align: center; */
  }

  .info__card .info__image {
    order: 1;
    display: block;
    text-align: center;
    margin: 10px auto;
  }

  .info__card .info__copy {
    order: 2;
    text-align: center;
    margin: 10px auto;
  }
}
</style>