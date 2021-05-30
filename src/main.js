import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Routes from './routes';
import firebase from 'firebase';

const firebaseConfig = {
 apiKey: "AIzaSyD8og6DDVE0fCU754vPQkrDixnJDS4W1fY",
 authDomain: "readit-cj.firebaseapp.com",
 projectId: "readit-cj",
 storageBucket: "readit-cj.appspot.com",
 messagingSenderId: "968620590814",
 appId: "1:968620590814:web:58a8484fa2b99ec960a44f",
 measurementId: "G-KQ92Y80GMH"
};

// Init Firebase
firebase.initializeApp(firebaseConfig);

// Composition API
import VueCompositionApi from '@vue/composition-api';
Vue.use(VueCompositionApi);

// Event Bus
export const bus = new Vue();

// Vuefire Firebase
// Vue.use(firestorePlugin);

// Router
Vue.use(VueRouter);
const routes = new VueRouter({
 // Add routes here
 routes: Routes,
 mode: "history"
});

Vue.config.productionTip = false;

new Vue({
 render: h => h(App),
 router: routes,
}).$mount('#app');
