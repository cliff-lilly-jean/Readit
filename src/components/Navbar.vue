<template>
  <nav id="navigation">
    <div class="navigation__content">
      <div class="navigation__left">
        <p class="navigation__logo"><a href="#">ReadIt</a></p>
      </div>
      <div class="navigation__right">
        <ul class="navigation__links">
          <li class="navigation__link"><a href="#">Home</a></li>
        </ul>
        <!-- TODO: Link to the sign up/log in page -->
        <!-- TODO: Switch the button copy to sign out once the user is logged in -->
        <button class="navigation__button button">Sign up</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
#navigation {
  position: absolute;
  background: transparent;
  max-width: 100vw;
  width: 100%;
  padding: 20px;
}

.navigation__content {
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  margin: 0 auto;
}

.navigation__logo {
  font-size: 2rem;
  font-weight: bold;
}

.navigation__logo a {
  color: #f4999d;
  text-decoration: none;
}

.navigation__right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 200px;
  width: 100%;
}

.navigation__link {
  list-style-type: none;
}

.navigation__link a {
  text-decoration: none;
  color: #010203;
}

.navigation__link a:hover {
  border-bottom: 2px solid #e8505b;
}

.navigation__button {
  padding: 15px;
  margin: 0;
}
</style>