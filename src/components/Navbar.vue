<template>
  <!-- TODO: Make the navbar responsinve -->
  <nav id="navbar">
    <div class="navbar__content">
      <div class="navbar__left">
        <router-link to="/">
          <p class="navbar__logo">ReadIt</p>
        </router-link>
      </div>
      <div class="navbar__right">
        <ul class="navbar__links">
          <!-- <li class="navbar__link"><a href="#">Home</a></li> -->
          <!-- TODO: Add an profile/about page after log in -->
          <!-- TODO: Add a library page after log in -->
          <!-- TODO: Add a favorites page after log in -->
          <!-- TODO: Add a clubs page after login -->
        </ul>
        <!-- TODO: Switch the button copy to sign out once the user is logged in -->
        <p class="navbar__login" :class="{ 'sign-up': mode }">
          <router-link to="/sign-up" @click="loginClicked"> Login </router-link>
        </p>
        <router-link to="/sign-up">
          <button @click="signUpButtonClicked" class="navbar__button button">
            Sign up
          </button>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: ["mode"],
  data() {
    return {};
  },
  methods: {
    signUpButtonClicked() {
      this.$emit("signUpButtonClicked");
    },
    loginClicked() {
      this.$emit("loginClicked");
    },
  },
  computed: {},
};
</script>

<style scoped>
#navbar {
  position: absolute;
  background: transparent;
  max-width: 100vw;
  width: 100%;
  padding: 20px;
  z-index: 10;
}

.navbar__content {
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  margin: 0 auto;
}

.navbar__logo {
  font-size: 2rem;
  font-weight: bold;
  color: #f4999d;
}

.navbar__logo:hover {
  cursor: pointer;
}

.navbar__right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 200px;
  width: 100%;
}

.navbar__link {
  list-style-type: none;
}

.navbar__link a,
p.navbar__login > a {
  text-decoration: none;
  cursor: pointer;
  transition: color 1.3s 0.8s ease-in-out;
}

p.navbar__login.sign-up > a {
  color: #fefefe;
  transition: color 1.3s 0.8s ease-in-out;
}

.navbar__link a:hover,
p.navbar__login > a:hover {
  border-bottom: 2px solid #e8505b;
}

p.navbar__login.sign-up > a:hover {
  border-bottom: 2px solid #fefefe;
}

.navbar__button {
  padding: 15px;
  margin: 0;
}

.navbar__button {
  text-decoration: none;
  color: #fefefe;
  outline: none;
  font-weight: bold;
}
</style>