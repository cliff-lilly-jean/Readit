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
      <!-- TODO: Add Barcode Scanner functionality
       * Use the QuaggaJs library: https://serratus.github.io/quaggaJS/
       ***** Reference this for issues with the QuaggaJs scanner: https://github.com/serratus/quaggaJS/issues/192#issuecomment-661585700
       * Use this for the Barcode scanner API: https://www.barcodelookup.com/api
       -->
      <div id="search" class="search">
        <label for="#">
          <input
            v-model="usersSearch"
            @keyup.enter="userSearchQuery"
            type="text"
            placeholder="Enter your book Barcode/ISBN"
          />
          <i class="fas fa-search"></i>
          <i
            @click="openBarcodeScanner"
            :title="barcodeScannerHoverMessage"
            class="fas fa-barcode"
          ></i>
        </label>
      </div>
      <div class="scanner-box" id="scanner-box"></div>
      <!-- TODO: Route this to the settings page-->
      <router-link to="/settings" class="user">
        <img src="../assets/images/_img/cliff-jean-portrait.jpg" alt="" />
      </router-link>
    </div>
    <!-- Top Bar End -->
  </div>
</template>

<script>
import axios from "axios";
import Quagga from "quagga";
export default {
  data() {
    return {
      toggleState: false,
      usersSearch: "",
      booksAPIKey: process.env.VUE_APP_API_KEY,
      books: {},
      barcodeScannerHoverMessage: "Use your webcam to scan the books barcode",
    };
  },
  methods: {
    toggleMenu() {
      this.$emit("toggleMenu", (this.toggleState = !this.toggleState));
    },
    userSearchQuery() {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=isbn:" +
            this.usersSearch +
            "&key=" +
            this.booksAPIKey
        )
        .then((response) => {
          // Get the data and add it to books
          // this.books = response.items;
          console.log(response);
        });
      this.usersSearch = "";
    },
    openBarcodeScanner() {
      if (
        navigator.mediaDevices &&
        typeof navigator.mediaDevices.getUserMedia === "function"
      ) {
        Quagga.init(
          {
            inputStream: {
              name: "Live",
              type: "LiveStream",
              target: document.querySelector("#scanner-box"),
            },

            decoder: {
              readers: ["code_128_reader"],
            },
          },
          function (err) {
            if (err) {
              console.log(err);
              return;
            }
            console.log("Initialization finished. Ready to start");
            Quagga.start();
          }
        );
      }
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

.scanner-box {
  height: 500px;
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  right: right 50%;
  transform: translate(-50%, -50%);
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