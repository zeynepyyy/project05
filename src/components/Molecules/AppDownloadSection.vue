<template>
  <div class="app-section-molecule">
    <div class="logo-box">
      <Logo src="/logo.png" alt="Etsy Logo" type="etsy" />
    </div>
    <Button type="download">Download the Etsy App</Button>
  </div>
</template>

<script setup>
// Atomları import edin
import Logo from '../Atoms/logoMail.vue'
import Button from '../Atoms/ButtonEtsy.vue'
</script>

<style scoped>
.app-section-molecule {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-shrink: 0;
  background-color: #122868;
  padding: 4.5rem 3.5rem;
  width: 300px;
}

.logo-box {
  background-color: #f1641e;
  padding: 0.8rem 1.2rem;
  border-radius: 4px;
}
</style>
