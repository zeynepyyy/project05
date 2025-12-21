<template>
  <div class="confirmation-container">
    <div class="confirmation-card">
      <h1 class="title">Check your email</h1>
      <p class="message">
        Use the sign-in link we sent to <strong>{{ email }}</strong> to reset your password.
      </p>
      <p class="note">
        Be sure to double check your email—it must be connected to an account to receive this message with a link to reset your password.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const email = computed(() => route.query.email || 'your email');
</script>

<style scoped>
.confirmation-container {
  display: flex;
  justify-content: center;
  padding-top: 4rem; /* Space from header */
  padding-bottom: 8rem;
  background-color: white;
}

.confirmation-card {
  width: 100%;
  max-width: 600px;
  background: white;
  border: 1px solid #e1e1e1;
  border-radius: 12px;
  padding: 2.5rem;
  text-align: left;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05); /* Subtle shadow if needed, screenshot looks clean */
}

/* Ensure no shadow if screenshot looks flat border only? 
   Screenshot has a border. Let's keep distinct border. 
   Background seems white. 
*/

.title {
  font-family: 'Guardian-EgypTT', serif;
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  color: #222;
}

.message {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
  color: #222;
}

.note {
  font-size: 0.9rem;
  color: #595959;
  line-height: 1.5;
}
</style>
