<template>
  <!-- TODO: Make the navbar responsinve -->
  <nav id="navbar">
    <div class="navbar__content">
      <div class="navbar__left">
        <p class="navbar__logo"><a href="/">ReadIt</a></p>
      </div>
      <div class="navbar__right">
        <ul class="navbar__links">
          <!-- <li class="navbar__link"><a href="#">Home</a></li> -->
          <!-- TODO: Add an profile page after log in -->
          <!-- TODO: Add a library page after log in -->
          <!-- TODO: Add a favorites page after log in -->
        </ul>
        <!-- TODO: Link to the sign up/log in page -->
        <!-- TODO: Switch the button copy to sign out once the user is logged in -->
        <p class="navbar__login"><a href="/login">Login</a></p>
        <a href="#"
          ><button @click="signUpButtonClicked" class="navbar__button button">
            Sign up
          </button></a
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    signUpButtonOnNavbar: String,
  },
  methods: {
    signUpButtonClicked() {
      this.$emit("clicked");
    },
  },
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
}

.navbar__logo a {
  color: #f4999d;
  text-decoration: none;
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
  color: #010203;
}

.navbar__link a:hover,
p.navbar__login > a:hover {
  border-bottom: 2px solid #e8505b;
}

.navbar__button {
  padding: 15px;
  margin: 0;
}

.navbar__button a {
  text-decoration: none;
  color: #fefefe;
  outline: none;
}
</style>