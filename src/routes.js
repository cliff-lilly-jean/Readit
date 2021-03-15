import LandingPage from './components/LandingPage.vue';
import SearchPage from './components/SearchPage.vue';

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
];