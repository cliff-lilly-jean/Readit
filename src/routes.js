import LandingPage from './components/LandingPage.vue';
import SearchPage from './components/SearchPage.vue';
import Login from './components/Login.vue';
import SignUp from './components/SignUp.vue';

export default [
 // Each object is a different route
 {
  path: '/',
  component: LandingPage
 },
 {
  path: '/search',
  component: SearchPage
 },
 {
  path: '/login',
  component: Login
 },
 {
  path: '/sign-up',
  component: SignUp
 },

];