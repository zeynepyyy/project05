<template>
  <div class="login-wrapper-organism">
    <form class="login-box" @submit.prevent>
      <div class="header-row">
        <h2 class="title">Sign in</h2>
        <PrimaryButton type="register" href="/register">Register</PrimaryButton>
      </div>

      <InputGroup input-id="email" label-text="Email address" input-type="email" v-model="email" />

      <InputGroup
        input-id="password"
        label-text="Password"
        input-type="password"
        v-model="password"
      />

      <OptionsRow v-model:stay-signed-in="staySignedIn" />

      <PrimaryButton type="sign-in">Sign in</PrimaryButton>

      <a href="#" class="trouble">Trouble signing in?</a>

      <DividerLine>OR</DividerLine>

      <div class="social-buttons-group">
        <SocialButton
          provider-name="Google"
          logo-src="/google.png"
          button-text="Continue with Google"
        />
        <SocialButton
          provider-name="Facebook"
          logo-src="/facebook.png"
          button-text="Continue with Facebook"
        />
        <SocialButton
          provider-name="Apple"
          logo-src="/apple.png"
          button-text="Continue with Apple"
        />
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

// Atomları import edin
import PrimaryButton from '../Atoms/PrimaryButton.vue'
import DividerLine from '../Atoms/DividerLine.vue'

// Molekülleri import edin
import InputGroup from '../Molecules/InputGroup.vue'
import OptionsRow from '../Molecules/OptionsRow.vue'
import SocialButton from '../Molecules/SocialButton.vue'

// V-model için reaktif değişkenler
const email = ref('')
const password = ref('')
const staySignedIn = ref(false)
</script>

<style scoped>
/* Organismaya ait genel yerleşim stilleri */
.login-wrapper-organism {
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

/* Doğrudan Organismada kalan basit stiller */
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

.trouble {
  display: block;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  color: #000;
  text-decoration: none;
}

.social-buttons-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
