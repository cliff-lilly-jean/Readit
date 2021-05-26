import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Routes from './routes';
// import { firestorePlugin } from 'vuefire';

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
