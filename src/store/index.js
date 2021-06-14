import { createStore } from 'vuex';

export default createStore({
 state: {
  books: [],
 },
 mutations: {
  addNewBook(state) {
   console.log(state);
  }
 },
 actions: {},
 getters: {},
 modules: {},
});