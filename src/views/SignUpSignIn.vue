<template>
  <div id="sign-up">
    <Navbar :mode="isSignUpMode"></Navbar>
    <div :class="{ 'sign-up-mode': isSignUpMode }" class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <!-- TODO: Add a form action -->
          <form @submit.prevent="handleLogin" class="sign-in-form">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i class="fas fa-envelope-open-text"></i>
              <input
                v-model="email"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input
                v-model="password"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <div class="mobile-input-container">
              <input type="submit" value="Login" class="btn solid" />
              <input
                class="mobile-input__input"
                @click="newHereButtonClicked"
                type="submit"
                value="New Here?"
              />
            </div>
            <p class="social-text">
              Or Sign in with one fo your social platforms
            </p>
            <div class="social-media">
              <a @click="handleFacebook" href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a @click="handleTwitter" href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a @click="handleGoogle" href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
            </div>
            <div class="error">{{ loginError }}</div>
          </form>
          <form @submit.prevent="handleSignup" class="sign-up-form">
            <h2 class="title">Sign up</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input v-model="name" type="text" placeholder="Name" />
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input
                v-model="email"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input
                v-model="password"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <div class="mobile-input-container">
              <input type="submit" class="btn" value="Sign up" />
              <input
                class="mobile-input__input"
                @click="alreadyAMember"
                type="submit"
                value="Already a Member?"
              />
            </div>

            <p class="social-text">
              Or Sign up with one of your social platforms
            </p>
            <div class="social-media">
              <a @click="handleFacebook" href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a @click="handleTwitter" href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a @click="handleGoogle" href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
            </div>
            <div class="error">{{ signupError }}</div>
          </form>
        </div>
      </div>
      <!-- Left and Rignt Panels -->
      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>New here?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              @click="signUpButtonIsPressed"
              class="btn transparent"
              id="sign-up-btn"
            >
              Sign up
            </button>
          </div>
          <img src="../assets/images/_img/sign_up.svg" class="image" alt="" />
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>One of us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <!-- TODO: Add OAuth -->
            <button
              @click="signInButtonIsPressed"
              class="btn transparent"
              id="sign-in-btn"
            >
              Sign in
            </button>
          </div>
          <img src="../assets/images/_img/sign_in.svg" class="image" alt="" />
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ref } from "vue";
import useSignup from "../composables/useSignup";
import useLogin from "../composables/useLogin";
import useFacebook from "../composables/useFacebook";
import useGoogle from "../composables/useGoogle";
import useTwitter from "../composables/useTwitter";
import router from "../router/index";

export default {
  components: {
    Navbar,
    Footer,
  },
  setup() {
    const { signupError, signup } = useSignup();
    const { loginError, login } = useLogin();
    const { facebookError, facebookLogin } = useFacebook();
    const { googleError, googleLogin } = useGoogle();
    const { twitterError, twitterLogin } = useTwitter();

    const name = ref("");
    const email = ref("");
    const password = ref("");

    // Signup
    const handleSignup = async () => {
      await signup(email.value, password.value, name.value);
      name.value = "";
      email.value = "";
      password.value = "";
      router.replace("/dashboard");
      console.log("The user has signed up");
    };

    // Login
    const handleLogin = async () => {
      await login(email.value, password.value);
      if (!loginError.value) {
        name.value = "";
        email.value = "";
        router.replace("/dashboard");
        console.log("The user is logged in");
      }
    };

    // Facebook
    const handleFacebook = async () => {
      await facebookLogin();
      console.log("The user is logged in with Facebook");
      router.replace("/dashboard");
    };

    // Google
    const handleGoogle = async () => {
      await googleLogin();
      console.log("The user is logged in with Google");
      router.replace("/dashboard");
    };

    // Twitter
    const handleTwitter = async () => {
      await twitterLogin();
      console.log("The user is logged in with Twitter");
      router.replace("/dashboard");
    };

    return {
      name,
      email,
      password,
      handleSignup,
      handleLogin,
      signupError,
      loginError,
      handleFacebook,
      facebookError,
      handleGoogle,
      googleError,
      handleTwitter,
      twitterError,
    };
  },
  data() {
    return {
      isSignUpMode: "",
      userId: null,
    };
  },
  methods: {
    signUpButtonIsPressed() {
      this.isSignUpMode = true;
    },
    signInButtonIsPressed() {
      this.isSignUpMode = false;
    },
    newHereButtonClicked() {
      this.isSignUpMode = true;
    },
    alreadyAMember() {
      this.isSignUpMode = false;
    },
  },
  mounted() {
    this.emitter.on("signUpButtonClicked", () => {
      this.isSignUpMode = true;
    });

    this.emitter.on("loginClicked", () => {
      this.isSignUpMode = false;
    });
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
  background-color: #fff;
  min-height: 100vh;
  overflow: hidden;
}

.forms-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50px;
  left: 0;
}

.signin-signup {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 75%;
  width: 50%;
  transition: 1s 0.7s ease-in-out;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
}

form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0rem 5rem;
  transition: all 0.2s 0.7s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

form.sign-up-form {
  opacity: 0;
  z-index: 1;
}

form.sign-in-form {
  z-index: 2;
}

.title {
  font-size: 2.2rem;
  color: #444;
  margin-bottom: 10px;
}

.input-field {
  max-width: 380px;
  width: 100%;
  background-color: #f0f0f0;
  margin: 10px 0;
  height: 55px;
  border-radius: 55px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 0.4rem;
  position: relative;
}

.input-field i {
  text-align: center;
  line-height: 55px;
  color: #acacac;
  transition: 0.5s;
  font-size: 1.1rem;
}

.input-field input {
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1rem;
  color: #7a7a7a;
}

.input-field input::placeholder {
  color: #aaa;
  font-weight: 500;
}

.social-text {
  padding: 0.7rem 0;
  font-size: 1rem;
}

.social-media {
  display: flex;
  justify-content: center;
}

.social-icon {
  height: 46px;
  width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.45rem;
  color: #333;
  border-radius: 50%;
  border: 1px solid #333;
  text-decoration: none;
  font-size: 1.1rem;
  transition: 0.3s;
}

.social-icon:hover {
  color: #e8505b;
  border-color: #af2932;
}

.btn {
  width: 150px;
  background-color: #e8505b;
  border: none;
  outline: none;
  height: 49px;
  border-radius: 49px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;
  text-align: center;
}

.btn.btn-anonymous {
  padding: 10px;
  font-size: 12px;
  width: 200px;
  background-color: #fefefe;
  color: #020202;
  border-radius: 0;
  transition: 0;
}

.btn.btn-anonymous:hover {
  background-color: #fefefe;
  color: #b9343d;
}

.btn:hover {
  background-color: #b9343d;
}
.panels-container {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.container:before {
  content: "";
  position: absolute;
  height: 2000px;
  width: 2000px;
  top: -10%;
  right: 48%;
  transform: translateY(-50%);
  background-image: linear-gradient(-45deg, #e8505b 0%, #b6111c 100%);
  transition: 1.8s ease-in-out;
  border-radius: 50%;
  z-index: 6;
}

.image {
  width: 100%;
  transition: transform 1.1s ease-in-out;
  transition-delay: 0.4s;
}

.panel {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 6;
}

.left-panel {
  pointer-events: all;
  padding: 8rem 17% 2rem 12%;
}

.right-panel {
  pointer-events: none;
  padding: 8rem 12% 2rem 17%;
}

.panel .content {
  color: #fff;
  transition: transform 0.9s ease-in-out;
  transition-delay: 0.6s;
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
  border: 2px solid #fff;
  width: 130px;
  height: 41px;
  font-weight: 600;
  font-size: 0.8rem;
}

.right-panel .image,
.right-panel .content {
  transform: translateX(800px);
}

/* ANIMATION */

.container.sign-up-mode:before {
  transform: translate(100%, -50%);
  right: 52%;
}

.container.sign-up-mode .left-panel .image,
.container.sign-up-mode .left-panel .content {
  transform: translateX(-800px);
}

.container.sign-up-mode .signin-signup {
  left: 25%;
}

.container.sign-up-mode form.sign-up-form {
  opacity: 1;
  z-index: 2;
}

.container.sign-up-mode form.sign-in-form {
  opacity: 0;
  z-index: 1;
}

.container.sign-up-mode .right-panel .image,
.container.sign-up-mode .right-panel .content {
  transform: translateX(0%);
}

.container.sign-up-mode .left-panel {
  pointer-events: none;
}

.container.sign-up-mode .right-panel {
  pointer-events: all;
}

.mobile-input-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 350px;
  width: 100%;
  flex-wrap: wrap;
  margin: 0 auto;
  text-align: center;
}

.mobile-input-container input {
  display: block;
  margin: 0 auto 10px;
}

.mobile-input__input {
  border: none;
  max-width: 150px;
  width: 100%;
  padding: 10px;
  border-radius: 40px;
  cursor: pointer;
}

@media (max-width: 870px) {
  .container {
    min-height: 800px;
    height: 100vh;
  }
  .signin-signup {
    width: 100%;
    top: 70%;
    transform: translate(-50%, -100%);
    transition: 1s 0.8s ease-in-out;
  }

  .signin-signup,
  .container.sign-up-mode .signin-signup {
    left: 50%;
  }

  .panels-container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
  }

  .panel {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2.5rem 8%;
    grid-column: 1 / 2;
  }

  .right-panel {
    grid-row: 3 / 4;
    display: none;
  }

  .left-panel {
    grid-row: 1 / 2;
    display: none;
  }

  .image {
    width: 200px;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.6s;
  }

  .panel .content {
    padding-right: 15%;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.8s;
  }

  .panel h3 {
    font-size: 1.2rem;
  }

  .panel p {
    font-size: 0.7rem;
    padding: 0.5rem 0;
  }

  .btn.transparent {
    width: 110px;
    height: 35px;
    font-size: 0.7rem;
  }

  .container:before {
    width: 1500px;
    height: 1500px;
    transform: translateX(-50%);
    left: 30%;
    bottom: 68%;
    right: initial;
    top: initial;
    transition: 2s ease-in-out;
    background: transparent;
  }

  .container.sign-up-mode:before {
    transform: translate(-50%, 100%);
    bottom: 32%;
    right: initial;
  }

  .container.sign-up-mode .left-panel .image,
  .container.sign-up-mode .left-panel .content {
    transform: translateY(-300px);
  }

  .container.sign-up-mode .right-panel .image,
  .container.sign-up-mode .right-panel .content {
    transform: translateY(0px);
  }

  .right-panel .image,
  .right-panel .content {
    transform: translateY(300px);
  }

  .container.sign-up-mode .signin-signup {
    top: 5%;
    transform: translate(-50%, 0);
  }

  .forms-container {
    top: 100px;
  }
}

@media (max-width: 570px) {
  form {
    padding: 0 1.5rem;
  }

  .image {
    display: none;
  }
  .panel .content {
    padding: 0.5rem 1rem;
  }
  .container {
    padding: 1.5rem;
  }

  .container:before {
    bottom: 72%;
    left: 50%;
  }

  .container.sign-up-mode:before {
    bottom: 28%;
    left: 50%;
  }
}

@media (max-width: 450px) {
  .signin-signup {
    width: 100%;
    top: 80%;
    transform: translate(-50%, -100%);
    transition: 1s 0.8s ease-in-out;
  }

  .forms-container {
    top: 50px;
  }
}
</style>