<template>
  <div id="sign-up">
    <Navbar></Navbar>
    <div class="container">
      <div class="forms-container">
        <!-- Sign In -->
        <div class="signin-signup">
          <form action="#" class="sign-in-form">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" class="btn solid" value="Login" />
            <p class="social-text">
              Or sign in with one of your social accounts
            </p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
        <!-- Sign Up -->
        <div class="signup-signup">
          <form action="#" class="sign-up-form">
            <h2 class="title">Sign up</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" class="btn solid" value="Login" />
            <p class="social-text">
              Or sign up with one of your social accounts
            </p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div class="panels-container">
        <div class="panel panel-left">
          <div class="content">
            <h3>New Here?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              libero perferendis consequuntur omnis temporibus necessitatibus
              est dignissimos cupiditate aperiam nesciunt!
            </p>
            <button class="btn transparent" id="sign-up-button">Sign Up</button>
          </div>
          <img src="../assets/images/_img/sign_up.svg" alt="" class="image" />
        </div>
        <!-- Right Panel -->
        <div class="panel panel-right">
          <div class="content">
            <h3>One of us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              libero perferendis consequuntur omnis temporibus necessitatibus
              est dignissimos cupiditate aperiam nesciunt!
            </p>
            <button class="btn transparent" id="sign-in-button">Sign In</button>
          </div>
          <img src="../assets/images/_img/sign_in.svg" alt="" class="image" />
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Footer from "./Footer";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
#sign-up {
  position: relative;
}

.container {
  position: relative;
  width: 100%;
  background-color: #fefefe;
  min-height: 100vh;
  overflow: hidden;
  z-index: 6;
}

.container:before {
  content: "";
  position: absolute;
  height: 2000px;
  width: 2000px;
  top: -10%;
  right: 48%;
  background-image: linear-gradient(45deg, #f37179 0%, #ce343f 100%);
  transform: translateY(-50%);
  border-radius: 50%;
  transition: 1.8s ease-in-out;
}

.forms-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

/* Form Rules */

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  padding: 0.5rem;
}

.title {
  font-size: 2.2rem;
  margin-bottom: 10px;
  color: #444;
}

.input-field {
  max-width: 380px;
  width: 100%;
  height: 55px;
  background-color: #f0f0f0;
  margin: 10px 0;
  border-radius: 55px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 0.4rem;
  position: relative;
}

.input-field i {
  text-align: center;
  line-height: 55px;
  color: 55px;
  font-size: 1.5rem;
}

.input-field input {
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
}

.input-field input:placeholder-shown {
  color: #aaa;
  font-weight: 500;
}

/* Button Rules */

.btn {
  width: 150px;
  height: 49px;
  outline: none;
  border: none;
  border-radius: 48px;
  background-color: #e8505b;
  color: #fefefe;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  transition: all 0.5s;
  cursor: pointer;
}

.btn:hover {
  background: #af3a42;
}

/* Social Media Rules */

.social-text {
  padding: 0.7rem 0;
}

.social-media {
  display: flex;
  justify-content: center;
}

.social-icon {
  height: 46px;
  width: 46px;
  border: 1px solid #333;
  margin: 0 0.45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #333;
  font-size: 1.3rem;
  border-radius: 50%;
  transition: all 0.5s;
}

.social-icon:hover {
  color: #e8505b;
  border-color: #af3a42;
}

/* Sign Up */

.signin-signup {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 75%;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
}

/* Other */

form.sign-in-form {
  z-index: 2;
}

form.sign-up-form {
  z-index: 1;
  opacity: 0;
}

/* Panels */

.image {
  width: 100%;
  transition: 1.1s 0.4s ease-in-out;
}

.panels-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 7;
}

.panel-left {
  padding: 8rem 17% 2rem 12%;
}

.panel-right {
  padding: 8rem 12% 2rem 17%;
}

.panel .content {
  color: #fefefe;
  transition: 0.9s 0.6s ease-in-out;
}

.panel h3 {
  font-weight: 600;
  line-height: 1;
  font-size: 1.5rem;
}

.panel p {
  font-size: 0.95rem;
  padding: 0.7rem 0;
}

.btn.transparent {
  margin: 0;
  background: none;
  border: 2px solid #fefefe;
  width: 130px;
  height: 41px;
  font-weight: 600;
  font-size: 0.8rem;
}

.panel-right .content,
.panel-right .image {
  transform: translateX(800px);
}

/* Animations */

.container.sign-up-mode:before {
  transform: translate(100%, -50%);
  right: 52%;
}

.container.sign-up-mode .panel-left .image,
.container.sign-up-mode .panel-left .content {
  transform: translate(-800px);
}

.container.sign-up-mode .panel-right .image,
.container.sign-up-mode .panel-right .content {
  transform: translateX(0%);
}

.container.sign-up-mode .panel-left {
  pointer-events: none;
}

.container.sign-up-mode .panel-right {
  pointer-events: all;
}

.container.sign-up-mode .signin-signup {
  left: 25%;
}

.container.sign-up-mode form.sign-in-form {
  z-index: 1;
  opacity: 0;
}

.container.sign-up-mode form.sign-up-form {
  z-index: 2;
  opacity: 1;
}
</style>