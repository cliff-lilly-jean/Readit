import { createStore } from 'vuex';
import axios from 'axios';
import router from '../router/index';

// Barcode scanner library
import Quagga from "quagga";

export default createStore({
 state: {
  books: [],
  newBookObj: {},
  clubs: [],
  connections: [],
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
  cardPopulated: false,
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
   // Add the newBookObj to the books Arr
   // TODO: Have this method add the new book the current users books Arr in Firebase
   this.state.books.push(this.state.newBookObj);
   console.log(this.state.books);

   // TODO: Route to the library page
   router.replace('/library');
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

     this.state.newBookObj = {
      title: this.state.bookTitle,
      author: this.state.bookAuthor,
      description: this.state.bookDescription,
      publishDate: this.state.bookPublishDate,
      bookThumbnail: this.state.bookThumb,
      avgRating: this.state.bookRating
     };
    });
   router.replace("/card-view");
   this.state.cardPopulated = true;
   this.state.usersSearch = "";
  },

  // Barcode Scanner Method
  openBarcodeScanner({ commit }) {
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
    Quagga.onDetected((result) => {
     this.state.lastCode = result.codeResult.code;
     axios
      .get(
       "https://www.googleapis.com/books/v1/volumes?q=isbn:" +
       this.state.lastCode +
       "&key=" + this.state.booksAPIKey
      )
      .then((response) => {
       // Get the data and add it to books
       let returnData = response.data.items[0].volumeInfo;
       this.state.bookTitle = returnData.title;
       this.state.bookAuthor = returnData.authors[0];
       this.state.bookDescription = returnData.description;
       this.state.bookRating = returnData.averageRating;
       this.state.bookThumb = returnData.imageLinks.thumbnail;
       this.state.bookPublishDate = returnData.publishDate;

       // Create a book Object to push into the books array
       this.state.newBookObj = {
        title: this.state.bookTitle,
        author: this.state.bookAuthor,
        description: this.state.bookDescription,
        publishDate: this.state.bookPublishDate,
        bookThumbnail: this.state.bookThumb,
        avgRating: this.state.bookRating
       };
      });
     this.state.usersSearch = "";
     this.state.scannerBoxContainerOpacity = false;
     Quagga.stop();
     router.replace("/card-view");
     this.state.cardPopulated = true;
    });
    commit('toggleScanner');
   }
  },
 },
 getters: {
  // TODO: Create a method to retrieve the current users books from Firebase
 },
 modules: {},
});