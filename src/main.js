import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { projectAuth } from './firebase/config';

// Composition API
// import VueCompositionApi from '@vue/composition-api';

// Vue.use(VueCompositionApi);

// Event Bus
// export const bus = new Vue();

// const routes = new VueRouter({
//  routes: Routes,
//  mode: "history"
// });

// Firebase auth state
projectAuth.onAuthStateChanged(user => {
 if (user) {
  console.log('The user has logged in: ');
 } else {
  console.log('The user has logged out');
 }
});

createApp(App).use(router).mount('#app');
