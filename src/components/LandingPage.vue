<template>
  <div id="landing-page">
    <div class="lp-container">
      <div class="lp__left">
        <h1 class="title">Readit</h1>
        <p>
          Search for books anywhere. You don't need to know the name of the
          book, if you know the name of the author or the publisher, just type
          and search.
        </p>
        <button class="search-button">
          Search now <i class="fas fa-arrow-right"></i>
        </button>
      </div>
      <div class="lp__right">
        <img src="../assets/images/love_reading.svg" alt="" class="icon" />
      </div>
    </div>
  </div>
</template>

<script>
// import { gsap } from "gsap";
// import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.css";

export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
#landing-page {
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

.title {
  font-size: 5rem;
  color: #f4999d;
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