import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import SignUp from '../views/SignUpSignIn.vue';
import Dashboard from "../views/Dashboard.vue";
import Library from '../views/Library.vue';
import Connections from '../views/Connections.vue';
import Clubs from '../views/Clubs.vue';
import CardView from '../views/CardView.vue';
import { auth } from '../firebase/config';

// Route Auth Guard to prevent users that are not logged in from accessing certain routes
const requireAuth = (to, from, next) => {
 let user = auth.currentUser;
 console.log('Current user in Route Auth gaurd: ', user);
 if (!user) {
  next({ name: 'landing-page' });
 } else {
  next();
 }
};

const routes = [
 // Each object is a different route
 {
  path: '/',
  name: 'landing-page',
  component: LandingPage
 },
 {
  path: '/sign-up',
  name: 'signup',
  component: SignUp
 },

 {
  path: '/dashboard',
  name: 'dashboard',
  component: Dashboard,
  beforeEnter: requireAuth
 },
 {
  path: '/library',
  name: 'library',
  component: Library,
 },
 {
  path: '/connections',
  name: 'connections',
  component: Connections,
 },
 {
  path: '/clubs',
  name: 'clubs',
  component: Clubs,
 },
 {
  path: '/card-view',
  name: 'cardView',
  component: CardView,
 },

];

const router = createRouter({
 history: createWebHistory(process.env.BASE_URL),
 routes
});

export default router;
