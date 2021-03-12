<template>
  <div id="landing-page">
    <div class="lp-container">
      <div class="lp__left">
        <h2 class="title">Readit</h2>
        <p>
          Search for any book in the world and find out details such as; author,
          publish date and version.
        </p>
        <input type="text" class="search-bar" />
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