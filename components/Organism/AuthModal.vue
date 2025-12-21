<template>
  <div v-if="isAuthOpen" class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <button class="close-btn" @click="close">
        <X :size="24" />
      </button>

      <!-- NORMAL FORM STATE -->
      <div>
        <div class="modal-header">
            <div class="title-row">
                <h2 class="modal-title">
                    {{ 
                        authView === 'signin' ? 'Sign in' : 
                        authView === 'register' ? 'Create your account' : 
                        'Reset your password' 
                    }}
                </h2>
                <button 
                    v-if="authView === 'signin'" 
                    class="register-btn" 
                    @click="switchToRegister"
                >
                    Register
                </button>
            </div>
            <p v-if="authView === 'register'" class="subtitle">Registration is easy.</p>
            <p v-if="authView === 'forgot'" class="subtitle">Enter your email address and we'll send you a link to reset your password.</p>
        </div>

        <form class="login-form" @submit.prevent>
            
            <!-- Email Field (Common) -->
            <div class="input-group">
                <label for="email">Email address <span v-if="authView === 'register'" class="required">*</span></label>
                <input id="email" type="email" v-model="email" required />
            </div>

            <!-- First Name (Register Only) -->
            <div v-if="authView === 'register'" class="input-group">
                <label for="firstname">First name <span class="required">*</span></label>
                <input id="firstname" type="text" v-model="firstName" required />
            </div>

            <!-- Password Field (Signin/Register Only) -->
            <div v-if="authView !== 'forgot'" class="input-group">
                <label for="password">Password <span v-if="authView === 'register'" class="required">*</span></label>
                <input id="password" type="password" v-model="password" required />
            </div>

            <!-- Sign In Options -->
            <div v-if="authView === 'signin'" class="options-row">
                <label class="checkbox-label">
                    <input type="checkbox" v-model="staySignedIn" />
                    <span class="checkbox-custom"></span>
                    Stay signed in
                </label>
                <button type="button" class="forgot-password" @click="switchToForgot">Forgot your password?</button>
            </div>

            <!-- Register Disclaimer -->
            <div v-if="authView === 'register'" class="register-disclaimer">
                By clicking Register or Continue with Google, Facebook, or Apple, you agree to Etsy's <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
            </div>

            <p v-if="errorMsg" class="error-text">{{ errorMsg }}</p>

            <!-- Submit Button -->
            <button class="signin-submit-btn" @click="handleSubmit">
                {{ 
                    authView === 'signin' ? 'Sign in' : 
                    authView === 'register' ? 'Register' : 
                    'Send password reset email'
                }}
            </button>

            <button v-if="authView === 'signin' || authView === 'forgot'" type="button" @click="authView === 'forgot' ? switchToSignIn() : null" class="trouble-link">
                 {{ authView === 'forgot' ? 'Return to sign in' : 'Trouble signing in?' }}
            </button>

            <div v-if="authView !== 'forgot'">
                <div class="divider">
                    <span>OR</span>
                </div>

                <div class="social-buttons">
                    <button class="social-btn google">
                        <img src="/google.png" alt="Google" class="social-logo" />
                        Continue with Google
                    </button>
                    <button class="social-btn facebook">
                        <img src="/facebook.png" alt="Facebook" class="social-logo" />
                        Continue with Facebook
                    </button>
                    <button class="social-btn apple">
                        <img src="/apple.png" alt="Apple" class="social-logo" />
                        Continue with Apple
                    </button>
                </div>

                <div v-if="authView === 'signin'" class="terms-text">
                    By clicking Sign in, Continue with Google, Facebook, or Apple, you agree to Etsy's <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
                </div>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '~/stores/auth';
import { useAuthModal } from '~/composables/useAuthModal';
import { X } from 'lucide-vue-next';

const { isAuthOpen, authView, closeAuth, openRegister, openForgot, openSignIn } = useAuthModal();
const close = closeAuth;

const email = ref('');
const password = ref('');
const firstName = ref('');
const staySignedIn = ref(false);
const errorMsg = ref('');
const successState = ref(false);

const authStore = useAuthStore();
const router = useRouter();

// Reset form when view changes
watch(authView, () => {
    // Keep email if switching from sign in to forgot
    if (authView.value !== 'forgot') {
         // email.value = ''; // Optional
    }
    password.value = '';
    firstName.value = '';
    errorMsg.value = '';
    successState.value = false;
});

const handleSubmit = async () => {
    errorMsg.value = '';
    try {
        if (authView.value === 'signin') {
            await authStore.login(email.value, password.value);
            close();
            router.push('/');
        } else if (authView.value === 'register') {
            await authStore.register(email.value, password.value, firstName.value);
            close();
            router.push('/');
        } else if (authView.value === 'forgot') {
            await authStore.resetPassword(email.value);
            close();
            router.push({ path: '/forgot-password-confirmation', query: { email: email.value } });
        }
    } catch (e: any) {
        errorMsg.value = 'Operation failed: ' + e.message;
    }
};

const switchToRegister = () => openRegister();
const switchToForgot = () => openForgot();
const switchToSignIn = () => openSignIn();
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.modal-content {
  background: white;
  width: 100%;
  max-width: 380px;
  padding: 1.5rem;
  border-radius: 24px;
  position: relative;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  max-height: 90vh;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.modal-content::-webkit-scrollbar {
    display: none;
}

.success-content {
    text-align: left;
    padding-top: 1rem;
}
.success-title {
    font-family: 'Guardian-EgypTT', serif;
    font-size: 1.8rem;
    margin-bottom: 1rem;
    font-weight: 400;
}
.success-msg {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    line-height: 1.4;
    color: #222;
}
.success-note {
    font-size: 0.9rem;
    color: #595959;
    line-height: 1.4;
}

.close-btn {
    position: absolute;
    top: 16px;
    left: 16px;
    z-index: 10;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: background 0.2s;
}
.close-btn:hover {
    background: #f0f0f0;
}

.modal-header {
    margin-bottom: 1.5rem;
    margin-top: 0.5rem; 
}

.title-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 2rem; 
}

.modal-title {
    font-family: 'Guardian-EgypTT', serif;
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0;
}

.subtitle {
    margin: 4px 0 0 2rem;
    font-size: 0.9rem;
    color: #222;
    line-height: 1.4;
}

.register-btn {
    background: white;
    border: 1px solid #222;
    border-radius: 20px;
    padding: 6px 16px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background 0.2s;
    text-decoration: none;
    color: #222;
}
.register-btn:hover {
    background: #f0f0f0;
}

.input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

.input-group label {
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 4px;
    color: #222;
}

.required {
    color: #a61a2e;
}

.input-group input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s;
}

.input-group input:focus {
    border-color: #222;
}

.options-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 0.9rem;
}

.checkbox-label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    user-select: none;
}

.checkbox-label input {
    accent-color: #222;
    width: 18px;
    height: 18px;
}

.forgot-password {
    text-decoration: underline;
    color: #595959;
    border: none;
    background: none;
    cursor: pointer;
    font-size: inherit;
    font-family: inherit;
    padding: 0;
}

.register-disclaimer {
    font-size: 0.75rem;
    color: #595959;
    margin-bottom: 1.5rem;
    line-height: 1.4;
}
.register-disclaimer a {
    color: #595959;
    text-decoration: underline;
}

.signin-submit-btn {
    width: 100%;
    background: #222;
    color: white;
    border: none;
    padding: 12px;
    border-radius: 24px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    margin-bottom: 1rem;
    transition: background 0.2s;
}
.signin-submit-btn:hover {
    opacity: 0.9;
}

.trouble-link {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 0.9rem;
    text-decoration: underline;
    color: #595959;
    margin-bottom: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
}

.divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 1.5rem;
    color: #595959;
    font-size: 0.9rem;
}
.divider::before, .divider::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #e1e1e1;
    margin: 0 10px;
}

.social-buttons {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 1rem;
}

.social-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: white;
    border: 1px solid #222;
    border-radius: 24px;
    padding: 10px;
    font-weight: 700;
    cursor: pointer;
    font-size: 0.95rem;
    position: relative;
    transition: background 0.2s;
}

.social-btn:hover {
    background: #f5f5f5;
    text-decoration: underline;
}

.social-logo {
    width: 20px;
    height: 20px;
    object-fit: contain;
}

.terms-text {
    font-size: 0.75rem;
    text-align: center;
    color: #595959;
    line-height: 1.4;
    padding: 0 0.5rem;
}
.terms-text a {
    color: #595959;
    text-decoration: underline;
}
</style>
