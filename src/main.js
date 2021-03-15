import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Routes from './routes';

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
