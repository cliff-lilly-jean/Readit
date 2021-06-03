import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Routes from './routes';
import { fire } from './firebase';

// Composition API
import VueCompositionApi from '@vue/composition-api';
Vue.use(VueCompositionApi);

// Event Bus
export const bus = new Vue();

// Router
Vue.use(VueRouter);
const routes = new VueRouter({
 // Add routes here
 routes: Routes,
 mode: "history"
});

Vue.config.productionTip = false;

// Firebase auth state
fire.auth().onAuthStateChanged(user => {
 if (user) {
  console.log('The user has logged in: ', user);
 } else {
  console.log('The user has logged out');
 }
});

new Vue({
 render: h => h(App),
 router: routes,
}).$mount('#app');
