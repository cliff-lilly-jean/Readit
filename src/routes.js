import LandingPage from './components/LandingPage.vue';
import SearchPage from './components/SearchPage.vue';
import SignUp from './components/SignUpSignIn.vue';
import Dashboard from "./components/Dashboard.vue";
import Library from "./components/Library.vue";

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
  path: '/sign-up',
  component: SignUp
 },
 {
  path: '/dashboard',
  component: Dashboard
 },
 {
  path: '/library',
  component: Library
 },

];