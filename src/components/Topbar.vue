<template>
  <div id="topbar-component">
    <!-- Top Bar Start -->
    <div class="topbar">
      <div
        @click="toggleMenu"
        :class="{ active: toggleState }"
        class="toggle"
      ></div>
      <!-- TODO: Add Book search Functionaility -->
      <div class="search">
        <label for="#">
          <input type="text" placeholder="Search books here" />
          <i class="fas fa-search"></i>
        </label>
      </div>
      <div class="user">
        <img src="../assets/images/_img/cliff-jean-portrait.jpg" alt="" />
      </div>
    </div>
    <!-- Top Bar End -->
  </div>
</template>

<script>
export default {
  // props: ["toggleState"],
  data() {
    return {
      toggleState: false,
    };
  },
  methods: {
    toggleMenu() {
      this.$emit("toggleMenu", (this.toggleState = !this.toggleState));
    },
  },
};
</script>

<style scoped>
/* Top Bar */
.topbar {
  width: 100%;
  background: #fefefe;
  height: 60px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.toggle {
  position: relative;
  width: 60px;
  height: 60px;
  cursor: pointer;
}

.toggle:before {
  content: "\f0c9";
  font-family: "Font Awesome 5 Free";
  position: absolute;
  width: 100%;
  height: 100%;
  line-height: 60px;
  font-size: 24px;
  font-weight: 900;
  text-align: center;
  color: #111;
}

.search {
  position: relative;
  width: 400px;
  margin: 0 10px;
}

.search label {
  width: 100%;
}

.search label input {
  width: 100%;
  height: 40px;
  border-radius: 40px;
  padding: 5px 20px;
  padding-left: 35px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

.search label .fas {
  position: absolute;
  left: 15px;
  top: 10px;
}

.user {
  position: relative;
  min-width: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}

.user img {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 480px) {
  .toggle.active {
    position: fixed;
    z-index: 10000;
    right: 0;
    left: initial;
  }

  .toggle.active:before {
    color: #fefefe;
    z-index: 10000;
  }
}
</style>