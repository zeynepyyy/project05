<template>
  <div class="register-wrapper">
    <form class="register-box">
      <h2 class="title">Create your account</h2>
      <p class="subtitle">Registration is easy.</p>

      <div class="input-group">
        <label for="email">Email address *</label>
        <input id="email" type="email" v-model="email" />
      </div>

      <div class="input-group">
        <label for="firstName">First name *</label>
        <input id="firstName" type="text" v-model="firstName" />
      </div>

      <div class="input-group">
        <label for="password">Password *</label>
        <input id="password" type="password" v-model="password" />
      </div>

      <div class="terms">
        <p>By clicking Register or Continue with Google,</p>
        <p>Facebook, or Apple you agree to Etsy’s <a href="#">Terms of Use</a></p>
        <p>and <a href="#">Privacy Policy</a>.</p>
      </div>

      <button class="register-btn">Register</button>

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
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const firstName = ref('')
const password = ref('')
</script>

<style scoped>
.register-wrapper {
  display: flex;
  justify-content: center;
  padding: 2rem;
  background-color: #f9f9f9;
}

.register-box {
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.08);
  max-width: 400px;
  width: 100%;
  font-family: 'Segoe UI', sans-serif;
  font-size: 14px;
}

.title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.subtitle {
  font-size: 0.85rem;
  color: #555;
  margin-bottom: 1.2rem;
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

.terms {
  font-size: 0.75rem;
  text-align: left;
  color: #555;
  margin: 1rem 0;
  line-height: 1.4;
}

.terms p {
  margin: 0;
}

.terms a {
  color: #0077cc;
  text-decoration: none;
}

.register-btn {
  width: 100%;
  padding: 0.7rem;
  background-color: #e0e0e0; /* Gri buton */
  color: #000;
  border: none;
  border-radius: 999px;
  font-size: 0.95rem;
  cursor: pointer;
  margin-bottom: 1rem;
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
</style>
