<template>
  <footer id="footer">
    <div class="footer__content">
      <router-link to="/">
        <p class="footer__title">ReadIt</p>
      </router-link>
      <p class="footer__copyright">
        &copy; Copyright 2021 Cliff Jean. All rights reserved.
      </p>
      <div class="footer__links">
        <router-link
          class="footer__link"
          to="https://www.linkedin.com/in/cliff-lilly-jean/"
        >
          ><img src="../assets/images/_img/linkedin_icon.svg" alt=""
        /></router-link>
        <router-link
          to="https://github.com/cliff-lilly-jean"
          class="footer__link"
        >
          <img src="../assets/images/_img/github_icon.svg" alt="" />
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
#footer {
  background: #253237;
  padding: 20px;
}

.footer__content {
  display: flex;
  justify-content: space-between;
  color: #fefefe;
  max-width: 1140px;
  margin: 0 auto;
  align-items: center;
}

.footer__title {
  font-size: 2rem;
  font-weight: bold;
}

.footer__title {
  color: #f4999d;
  text-decoration: none;
}

.footer__title:hover {
  cursor: pointer;
}

.footer__links {
  display: flex;
  max-width: 75px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.footer__link img {
  max-width: 30px;
}
</style>