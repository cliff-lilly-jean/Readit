<template>
  <div id="anonymous">
    <input
      @click.prevent="auth.signInAnonymously()"
      type="submit"
      value="Sign in anonymously"
      class="btn btn-anonymous"
    />
  </div>
</template>

<script>
import { auth } from "../firebase";
export default {
  data() {
    return {
      auth,
    };
  },
};
</script>

<style scoped>
.btn {
  width: 150px;
  background-color: #e8505b;
  border: none;
  outline: none;
  height: 49px;
  border-radius: 49px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;
}

.btn.btn-anonymous {
  padding: 10px;
  font-size: 12px;
  width: 200px;
  background-color: #fefefe;
  color: #020202;
  border-radius: 0;
  transition: 0;
}

.btn.btn-anonymous:hover {
  background-color: #fefefe;
  color: #b9343d;
}
</style>