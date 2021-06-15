import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { auth, db } from './firebase/config';
import mitt from 'mitt';
import $store from '../src/store/index';
import 'es6-promise/auto';

// Event bus init
const emitter = mitt();

const app = createApp(App);
app.use(auth);
app.use(db);
app.use($store);
app.config.globalProperties.emitter = emitter;
app.use(router).mount('#app');
