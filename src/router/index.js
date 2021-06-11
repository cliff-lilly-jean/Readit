import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from './views/LandingPage.vue';
import SignUp from './views/SignUpSignIn.vue';
import Dashboard from "./views/Dashboard.vue";
import Library from './views/Library.vue';
import Connections from './views/Connections.vue';
import Clubs from './views/Clubs.vue';
import Help from './views/Help.vue';
import Password from './views/Password.vue';
import Settings from './views/Settings.vue';
import CardView from './views/CardView.vue';


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
  component: Dashboard
 },
 {
  path: '/library',
  name: 'library',
  component: Library
 },
 {
  path: '/connections',
  name: 'connections',
  component: Connections
 },
 {
  path: '/clubs',
  name: 'clubs',
  component: Clubs
 },
 {
  path: '/help',
  name: 'help',
  component: Help
 },
 {
  path: '/settings',
  name: 'settings',
  component: Settings
 },
 {
  path: '/password',
  name: 'password',
  component: Password
 },
 {
  path: '/card-view',
  name: 'cardView',
  component: CardView
 },
];

const router = createRouter({
 history: createWebHistory(process.env.BASE_URL),
 routes
});