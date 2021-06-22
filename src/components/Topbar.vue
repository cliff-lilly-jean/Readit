<template>
  <div id="topbar-component">
    <!-- Top Bar Start -->
    <div class="topbar">
      <div
        @click="toggleMenu"
        :class="{ active: toggleState }"
        class="toggle"
      ></div>
      <!-- TODO: Route this to the library page based off a correct barcode or input entry -->
      <div id="search" class="search">
        <label for="#">
          <input
            v-model="$store.state.usersSearch"
            @keyup.enter="$store.dispatch('userSearchQuery')"
            type="text"
            placeholder="Enter your book ISBN or click the bars to the right to scan"
          />
          <i class="fas fa-search"></i>
          <i
            @click="$store.dispatch('openBarcodeScanner')"
            :title="barcodeScannerHoverMessage"
            class="fas fa-barcode"
          ></i>
        </label>
        {{}}
      </div>
      <div
        class="scanner-box-container"
        :class="{
          'scanner-box-container--active':
            $store.state.scannerBoxContainerOpacity,
        }"
      >
        <div class="scanner-box" id="scanner-box">
          <i @click="closeBarcodeScanner" class="fas fa-times"></i>
        </div>
      </div>
      <router-link to="/library" class="user">
        <img v-if="currentUser.photoURL" :src="currentUser.photoURL" alt="" />
        <img v-else src="../assets/images/_img/default_user.svg" alt="" />
      </router-link>
    </div>
    <!-- Top Bar End -->
  </div>
</template>

<script>
import Quagga from "quagga";
export default {
  props: ["currentUser"],
  data() {
    return {
      toggleState: false,
      barcodeScannerHoverMessage: "Use your webcam to scan the books barcode",
    };
  },
  methods: {
    toggleMenu() {
      this.emiter.$emit("toggleMenu", (this.toggleState = !this.toggleState));
    },
    closeBarcodeScanner() {
      this.$store.state.scannerBoxContainerOpacity = false;
      Quagga.stop;
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

.search label .fas.fa-barcode {
  left: auto;
  right: -30px;
}

.search label .fas.fa-barcode:hover {
  cursor: pointer;
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

.scanner-box-container {
  opacity: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
}

.scanner-box-container.scanner-box-container--active {
  opacity: 1;
  pointer-events: auto;
}

.scanner-box {
  background: #fefefe;
  width: 640px;
  max-width: 100%;
  height: 480px;
  padding: 30px 50px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
}

.scanner-box .fas.fa-times {
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 20px;
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