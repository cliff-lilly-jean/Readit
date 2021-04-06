<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// Font Awesome Import
import "@fortawesome/fontawesome-free/css/all.css";
export default {
  name: "App",
};
</script>

<style>
/* Font import */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  height: auto;
  width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Poppins", sans-serif;
}

body {
  font-family: "Poppins", sans-serif;
  line-height: 1.5;
  font-size: 18px;
}

section {
  padding: 50px 20px;
}
</style>
