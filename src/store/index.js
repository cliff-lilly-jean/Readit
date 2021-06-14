import { createStore } from 'vuex';
import axios from 'axios';

// Barcode scanner library
import Quagga from "quagga";

export default createStore({
 state: {
  books: [],
  booksAPIKey: process.env.VUE_APP_API_KEY,
  usersSearch: "",
  bookTitle: "",
  bookAuthor: "",
  bookDescription: "",
  bookPublishDate: "",
  bookRating: "",
  bookThumb: "",
  lastCode: "",
  scannerBoxContainerOpacity: false,
 },
 mutations: {
  addNewBook(state) {
   console.log(state);
   console.log("a new book has been added");
  },
  toggleScanner() {
   if (this.state.scannerBoxContainerOpacity === false) {
    Quagga.stop();
   }
   this.state.scannerBoxContainerOpacity = !this.state.scannerBoxContainerOpacity;
  },
 },
 actions: {
  addNewBook() {
   console.log('action');
  },

  // Topbar component User search method
  userSearchQuery() {
   axios
    .get(
     "https://www.googleapis.com/books/v1/volumes?q=isbn:" +
     this.state.usersSearch +
     "&key=" +
     this.state.booksAPIKey
    )
    .then((response) => {
     // Get the data and add it to books
     // 9781612680170
     let returnData = response.data.items[0].volumeInfo;
     this.state.bookTitle = returnData.title;
     this.state.bookAuthor = returnData.authors[0];
     this.state.bookDescription = returnData.description;
     this.state.bookRating = returnData.averageRating;
     this.state.bookThumb = returnData.imageLinks.thumbnail;
     this.state.bookPublishDate = returnData.publishDate;

     let newBookObj = {
      title: this.state.bookTitle,
      author: this.state.bookAuthor,
      description: this.state.bookDescription,
      publishDate: this.state.bookPublishDate,
      bookThumbnail: this.state.bookThumb,
      avgRating: this.state.bookRating
     };
     this.state.books.push(newBookObj);
    });
   this.$router.replace("/card-view");
   this.usersSearch = "";
  },

  // Barcode Scanner Method
  openBarcodeScanner({ commit }) {
   if (
    navigator.mediaDevices &&
    typeof navigator.mediaDevices.getUserMedia === "function"
   ) {
    // Global 'this' variable within Quagga
    let vm = this.state;
    Quagga.init(
     {
      inputStream: {
       name: "Live",
       type: "LiveStream",
       target: document.querySelector("#scanner-box"),
      },
      decoder: {
       readers: ["ean_reader"],
      },
      multiple: false,
     },
     function(err) {
      if (err) {
       console.log(err);
       return;
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start();
     }
    );
    Quagga.onDetected(function(result) {
     vm.lastCode = result.codeResult.code;
     axios
      .get(
       "https://www.googleapis.com/books/v1/volumes?q=isbn:" +
       vm.lastCode +
       "&key=" + vm.booksAPIKey
      )
      .then((response) => {
       // Get the data and add it to books
       // 9781612680170
       let returnData = response.data.items[0].volumeInfo;
       vm.bookTitle = returnData.title;
       vm.bookAuthor = returnData.authors[0];
       vm.bookDescription = returnData.description;
       vm.bookRating = returnData.averageRating;
       vm.bookThumb = returnData.imageLinks.thumbnail;
       vm.bookPublishDate = returnData.publishDate;

       // Create a book Object to push into the books array
       let newBookObj = {
        title: vm.bookTitle,
        author: vm.bookAuthor,
        description: vm.bookDescription,
        publishDate: vm.bookPublishDate,
        bookThumbnail: vm.bookThumb,
        avgRating: vm.bookRating
       };
       vm.books.push(newBookObj);
      });
     vm.usersSearch = "";
     vm.scannerBoxContainerOpacity = false;
     Quagga.stop();
     // this.$router.replace("/card-view");
    });
    commit('toggleScanner');

   }
  },
 },
 getters: {},
 modules: {},
});