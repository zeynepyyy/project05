<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <button class="close-btn" @click="close">
         <X :size="24" />
      </button>

      <div class="modal-header">
        <h2>Go to checkout</h2>
      </div>

      <!-- Step 1: Initial (Email / Guest) -->
      <div v-if="step === 'email'" class="modal-body">
        <button class="guest-btn">Continue as a guest</button>

        <div class="divider">
          <span>OR</span>
        </div>

        <div class="signin-section">
          <h3>Sign in or register</h3>
          
          <div class="input-group">
            <label>Email address</label>
            <input 
              type="email" 
              v-model="email" 
              @keyup.enter="handleContinue" 
              :class="{ 'has-error': emailError }"
            />
          </div>

          <p class="terms-text">
            By clicking Continue or Continue with Google, Facebook, or Apple, you agree to Etsy's <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
          </p>

          <button class="continue-btn" @click="handleContinue">Continue</button>
          
          <a href="#" class="trouble-link">Trouble signing in?</a>

          <div class="divider">
             <span>OR</span>
          </div>

          <div class="social-buttons">
             <button class="social-btn">
                <img src="/google.png" alt="Google" class="social-icon" />
                Continue with Google
             </button>
             <button class="social-btn">
                <img src="/facebook.png" alt="Facebook" class="social-icon" />
                Continue with Facebook
             </button>
             <button class="social-btn">
                <img src="/apple.png" alt="Apple" class="social-icon" />
                Continue with Apple
             </button>
          </div>
        </div>
      </div>

      <!-- Step 2: Password (Welcome Back) -->
      <div v-else-if="step === 'password'" class="modal-body step-password">
         <div class="user-id-row">
            <div class="avatar-circle">
               <img src="/shop-avatar.jpg" alt="User" />
            </div>
            <div class="user-info">
               <span class="user-email-text">{{ email }}</span>
               <a href="#" class="not-you-link" @click.prevent="step = 'email'">Not your email? Go back.</a>
            </div>
         </div>

         <h3 class="welcome-title">Welcome back, Zeynep yıldız!</h3>

         <div class="input-group">
            <label>Password</label>
            <input type="password" v-model="password" />
         </div>

         <div class="stay-signed-row">
            <label class="check-label">
               <input type="checkbox" checked />
               <span>Stay signed in</span>
            </label>
            <a href="#" class="reset-link">Reset password</a>
         </div>

         <button class="continue-btn">Sign in</button>

         <div class="divider">
            <span>OR</span>
         </div>

         <button class="magic-link-btn">Email me a sign-in link</button>

         <div class="info-footer">
            <p>You won't lose checkout progress when you click the sign-in link.</p>
            <a href="#" class="trouble-link">Trouble signing in?</a>
         </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { X } from 'lucide-vue-next';

const props = defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits(['close']);

const step = ref<'email' | 'password'>('email');
const email = ref('');
const password = ref('');
const emailError = ref(false);

const handleContinue = () => {
   if (email.value && email.value.includes('@')) {
      step.value = 'password';
      emailError.value = false;
   } else {
      // For demo, if empty just default to the user's demo email
      if(!email.value) email.value = "z07929678@gmail.com";
      step.value = 'password';
   }
};

const close = () => {
  emit('close');
  // Reset on close
  setTimeout(() => {
     step.value = 'email';
     email.value = '';
     password.value = '';
  }, 300);
};
</script>

<style scoped>
/* ... existing styles ... */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-content {
  background: white;
  width: 100%;
  max-width: 400px;
  border-radius: 24px;
  padding: 1.5rem;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
}

.modal-content::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem; /* Fixed to right */
  background: none;
  border: none;
  cursor: pointer;
  color: #222;
  z-index: 10;
}

.modal-header h2 {
  font-family: 'Guardian-EgypTT', serif;
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
}

/* ... keep existing buttons ... */
.guest-btn {
  width: 100%;
  padding: 12px;
  border-radius: 24px;
  border: 2px solid #222;
  background: white;
  color: #222;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1.5rem;
  transition: background 0.2s;
}
.guest-btn:hover { background: #f5f5f5; }

.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: relative;
}
.divider::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background: #e1e1e1;
  z-index: 0;
}
.divider span {
  background: white;
  padding: 0 10px;
  z-index: 1;
  color: #595959;
  font-size: 0.85rem;
}

.signin-section h3 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.input-group {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.input-group label {
  font-size: 0.9rem;
  font-weight: 500;
  color: #222;
}
.input-group input {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
}
.input-group input:focus {
    outline: none;
    border-color: #222;
    box-shadow: 0 0 0 2px rgba(34, 34, 34, 0.1);
}

.terms-text {
  font-size: 0.8rem;
  color: #595959;
  line-height: 1.4;
  margin-bottom: 1rem;
}
.terms-text a { color: #222; text-decoration: underline; }

.continue-btn {
  width: 100%;
  padding: 12px;
  border-radius: 24px;
  background: #222;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin-bottom: 1rem;
}
.continue-btn:hover { background: #333; }

.trouble-link {
  display: block;
  text-align: center;
  font-size: 0.9rem;
  color: #222;
  text-decoration: underline;
  margin-bottom: 1.5rem;
}

.social-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.social-btn {
  width: 100%;
  padding: 10px;
  border-radius: 24px;
  border: 1px solid #ccc;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  color: #222;
}
.social-btn:hover { background: #f5f5f5; border-color: #222; }
.social-icon { width: 20px; height: 20px; }


/* --- Password Step Styles --- */
.user-id-row {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 1.5rem;
}
.avatar-circle {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
    background: #eee;
}
.avatar-circle img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.user-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
}
.user-email-text {
    font-size: 0.95rem;
    color: #222;
}
.not-you-link {
    font-size: 0.85rem;
    text-decoration: underline;
    color: #595959;
}
.welcome-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #222;
    margin-bottom: 1rem;
}
.stay-signed-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}
.check-label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 0.9rem;
}
.check-label input[type="checkbox"] {
    width: 18px;
    height: 18px;
    accent-color: #222;
}
.reset-link {
    font-size: 0.9rem;
    text-decoration: underline;
    color: #595959;
}
.magic-link-btn {
    width: 100%;
    padding: 12px;
    border-radius: 24px;
    background: white;     
    border: 2px solid #222; /* Pill outline */
    color: #222;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    margin-bottom: 1.5rem;
    transition: background 0.2s;
}
.magic-link-btn:hover {
    background: #f5f5f5;
}
.info-footer {
    text-align: center;
}
.info-footer p {
    font-size: 0.85rem;
    color: #595959;
    margin-bottom: 0.5rem;
}
</style>
