<template>
  <div class="login-wrapper">
    <form class="login-box">
      <div class="header-row">
        <h2 class="title">Sign in</h2>
        <a href="/register" class="register-btn">Register</a>
      </div>

      <div class="input-group">
        <label for="email">Email address</label>
        <input id="email" type="email" v-model="email" />
      </div>

      <div class="input-group">
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password" />
      </div>

      <div class="options-row">
        <label class="stay-signed">
          <input type="checkbox" v-model="staySignedIn" />
          Stay signed in
        </label>
        <a href="#" class="link">Forgot your password?</a>
      </div>

      <button class="sign-in-btn">Sign in</button>
      <a href="#" class="trouble">Trouble signing in?</a>

      <div class="divider"><span>OR</span></div>

      <div class="social-buttons">
        <button class="social-btn">
          <img src="/google.png" alt="Google" />
          <span>Continue with Google</span>
        </button>
        <button class="social-btn">
          <img src="/facebook.png" alt="Facebook" />
          <span>Continue with Facebook</span>
        </button>
        <button class="social-btn">
          <img src="/apple.png" alt="Apple" />
          <span>Continue with Apple</span>
        </button>
      </div>

      <div class="terms">
        <p>By clicking Sign in, Continue with Google,</p>
        <p>Facebook, or Apple you agree to Etsy’s <a href="#">Terms of Use</a></p>
        <p>and <a href="#">Privacy Policy</a>.</p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const staySignedIn = ref(false)
</script>

<style scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  padding: 2rem;
  background-color: #f9f9f9;
}

.login-box {
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.08);
  max-width: 400px;
  width: 100%;
  font-family: 'Segoe UI', sans-serif;
  font-size: 14px;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
}

.title {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
}

.register-btn {
  padding: 0.3rem 0.8rem;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 0.85rem;
  text-decoration: none;
  color: #000;
}

.register-btn:hover {
  background-color: #f0f0f0;
}

.input-group {
  margin-bottom: 1rem;
}

.input-group label {
  display: block;
  margin-bottom: 0.3rem;
  font-size: 0.75rem;
}

.input-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.9rem;
}

.options-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  margin-bottom: 1rem;
}

.stay-signed {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.link {
  color: #000;
  text-decoration: none;
}

.sign-in-btn {
  width: 100%;
  padding: 0.7rem;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 999px;
  font-size: 0.95rem;
  cursor: pointer;
  margin-bottom: 0.5rem;
}

.trouble {
  display: block;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  color: #000;
  text-decoration: none;
}

.divider {
  text-align: center;
  color: #888;
  font-size: 0.8rem;
  margin: 1.2rem 0;
  position: relative;
}

.divider span {
  background-color: white;
  padding: 0 0.5rem;
  position: relative;
  z-index: 1;
}

.divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #ccc;
  z-index: 0;
}

.social-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.6rem 1rem;
  border: 1px solid #ccc;
  border-radius: 999px;
  font-size: 0.9rem;
  cursor: pointer;
  background-color: white;
  text-align: center;
}

.social-btn img {
  height: 18px;
  width: 18px;
  object-fit: contain;
}

.terms {
  font-size: 0.75rem;
  text-align: left;
  color: #555;
  margin-top: 1rem;
  line-height: 1.4;
}

.terms p {
  margin: 0;
}

.terms a {
  color: #0077cc;
  text-decoration: none;
}
</style>
