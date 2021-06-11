import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { projectAuth } from './firebase/config';

// Event Bus
// export const bus = new Vue();

// Firebase auth state
projectAuth.onAuthStateChanged(user => {
 if (user) {
  console.log('The user has logged in: ');
 } else {
  console.log('The user has logged out');
 }
});

createApp(App).use(router).mount('#app');
