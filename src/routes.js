import LandingPage from './views/LandingPage.vue';
import SignUp from './views/SignUpSignIn.vue';
import Dashboard from "./views/Dashboard.vue";
import Library from './views/Library.vue';
import Connections from './views/Connections.vue';
import Clubs from './views/Clubs.vue';
import Help from './views/Help.vue';
import Password from './views/Password.vue';
import Settings from './views/Settings.vue';

export default [
 // Each object is a different route
 {
  path: '/',
  component: LandingPage
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
 {
  path: '/connections',
  component: Connections
 },
 {
  path: '/clubs',
  component: Clubs
 },
 {
  path: '/help',
  component: Help
 },
 {
  path: '/settings',
  component: Settings
 },
 {
  path: '/password',
  component: Password
 },

];