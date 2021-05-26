<template>
  <nav id="navbar">
    <div class="navbar__content">
      <div class="navbar__left">
        <router-link to="/">
          <p class="navbar__logo">ReadIt</p>
        </router-link>
      </div>
      <div class="navbar__right">
        <div class="navbar__right--sm">
          <i class="fas fa-bars"></i>
        </div>
        <div class="navbar__right--lg">
          <p class="navbar__login" :class="{ 'sign-up': mode }">
            <router-link to="/sign-up">
              <span @click="loginClicked">Login</span>
            </router-link>
          </p>
          <router-link to="/sign-up">
            <button @click="signUpButtonClicked" class="navbar__button button">
              Sign up
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: ["mode"],
  data() {
    return {
      isSignUpMode: "",
    };
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
  width: 200px;
}

.navbar__right--lg {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.navbar__link {
  list-style-type: none;
}

.navbar__link a,
p.navbar__login > a {
  color: #010101;
  text-decoration: none;
  cursor: pointer;
  transition: color 1.3s 0.8s ease-in-out;
}

p.navbar__login.sign-up > a span {
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

.navbar__right--sm {
  position: relative;
  display: none;
}

.navbar__right--sm .fa-bars {
  position: absolute;
  right: 0;
  top: 15px;
  cursor: pointer;
}

@media (max-width: 870px) {
  p.navbar__login.sign-up > a span {
    color: #020202;
  }
}

@media (max-width: 600px) {
  .navbar__right--lg {
    display: none;
  }

  .navbar__right--sm {
    display: block;
  }
}
</style>