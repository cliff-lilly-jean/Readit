import LandingPage from './components/LandingPage.vue';
import SignUp from './components/SignUpSignIn.vue';
import Dashboard from "./components/Dashboard.vue";
import Library from './components/Library.vue';
import Connections from './components/Connections.vue';
import Clubs from './components/Clubs.vue';
import Help from './components/Help.vue';
import Password from './components/Password.vue';
import Settings from './components/Settings.vue';


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