<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <div class="header__headings">
          <h1>Readit</h1>
          <p>Find your next reading adventure.</p>
        </div>
        <!-- TODO: Create a searchbar component -->
        <Searchbar></Searchbar>
      </div>
    </header>
  </div>
</template>

<script>
import Searchbar from "./components/Searchbar";
export default {
  name: "App",
  components: {
    Searchbar,
  },
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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Poppins", sans-serif;
}

body {
  font-family: "Poppins", sans-serif;
}

header {
  height: 100vh;
  background: #efefef;
}

header .container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.header__headings {
  margin-top: 2em;
}

h1 {
  font-size: 5em;
}
</style>
