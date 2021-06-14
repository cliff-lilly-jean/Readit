import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { projectAuth } from './firebase/config';
import mitt from 'mitt';
import $store from '../src/store/index';
import 'es6-promise/auto';


// Event bus init
const emitter = mitt();

// Firebase auth state
projectAuth.onAuthStateChanged(user => {
 if (user) {
  console.log('The user has logged in: ');
 } else {
  console.log('The user has logged out');
 }
});

const app = createApp(App);
app.use($store);
app.config.globalProperties.emitter = emitter;
app.use(router).mount('#app');
