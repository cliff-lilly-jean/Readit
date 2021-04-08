import LandingPage from './components/LandingPage.vue';
import SearchPage from './components/SearchPage.vue';
import LoginAndSignUpPage from './components/LoginAndSignUpPage.vue';

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
  component: LoginAndSignUpPage
 },
 {
  path: '/sign-up',
  component: LoginAndSignUpPage
 }
];