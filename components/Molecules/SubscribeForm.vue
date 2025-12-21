<template>
  <form v-if="!isSubscribed" @submit.prevent="handleSubscribe" class="subscribe-form-molecule">
    <InputEmail v-model="email" />
    <Button type="subscribe" htmlType="submit">Subscribe</Button>
  </form>
  <div v-else class="success-message">
    You've been successfully signed up!
  </div>
</template>

<script setup>
import { ref } from 'vue'
// Atomları import edin (Dosya yollarını projenize göre ayarlayın)
import InputEmail from '../Atoms/InputEmail.vue'
import Button from '../Atoms/ButtonEtsy.vue'

const email = ref('')
const isSubscribed = ref(false)

const handleSubscribe = () => {
  if (email.value && email.value.includes('@')) {
    // Burada backend'e istek atılabilir
    // console.log('Subscribed with:', email.value)
    isSubscribed.value = true
  }
}
</script>

<style scoped>
.subscribe-form-molecule {
  display: flex;
  /* Orijinal koddaki stil, Molecule seviyesinde uygulanır */
  border: 1px solid #ccc;
  border-radius: 999px;
  background-color: white;
  overflow: hidden;
  /* Kendi içindeki atomlar arasındaki boşlukları ve hizalamayı yönetir */
}

.success-message {
  background-color: #137a4d; /* Etsy style green */
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 4px; /* Boxy look per screenshot or rounded? Screenshot has rounded corners for the button but success msg looks like a box? No, success message is a button-like box in the screenshot */
  /* Actually looking at the screenshot, the green box has slightly rounded corners, but it looks like a block. */
  border-radius: 6px;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
  font-size: 1rem;
}
</style>
