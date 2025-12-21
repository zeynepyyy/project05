<template>
  <div class="register-wrapper-organism">
    <form class="register-box" @submit.prevent>
      <h2 class="title">Create your account</h2>
      <p class="subtitle">Registration is easy.</p>

      <InputGroup input-id="email" label-text="Email address" input-type="email" v-model="email" />

      <InputGroup
        input-id="firstName"
        label-text="First name"
        input-type="text"
        v-model="firstName"
      />

      <InputGroup
        input-id="password"
        label-text="Password"
        input-type="password"
        v-model="password"
      />

      <div class="terms">
        <p>By clicking Register or Continue with Google,</p>
        <p>Facebook, or Apple you agree to Etsy’s <a href="#">Terms of Use</a></p>
        <p>and <a href="#">Privacy Policy</a>.</p>
      </div>

      <ActionLinkButton type="primary" class="main-register-btn">Register</ActionLinkButton>

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
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// --- ATOM IMPORTS ---
import ActionLinkButton from '../Atoms/ActionLinkButton.vue'
import DividerLine from '../Atoms/DividerLine.vue'

// --- MOLECULE IMPORTS ---
import InputGroup from '../Molecules/InputGroupp.vue'
import SocialButton from '../Molecules/SocialButtonn.vue'

// V-model için reaktif değişkenler
const email = ref('')
const firstName = ref('')
const password = ref('')
</script>

<style scoped>
/*
 * Organizmaya ait CSS:
 * Genel yerleşim, form kutusu ve doğrudan HTML'in stilleri.
*/
.register-wrapper-organism {
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

.main-register-btn {
  /* ActionLinkButton Atomundan gelen .primary stilini kullanır */
  margin-bottom: 1rem;
}

.social-buttons-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* DividerLine Atomu kendi stilini yönetir */
</style>
