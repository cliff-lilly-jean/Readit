import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { auth } from './firebase/config';
import $store from '../src/store/index';
import 'es6-promise/auto';

let app;

auth.onAuthStateChanged(() => {

 if (!app) {
  app = createApp(App)
   .use(router)
   .use($store)
   .mount('#app');
 }
});


// app.use(auth);
// app.use(db);
