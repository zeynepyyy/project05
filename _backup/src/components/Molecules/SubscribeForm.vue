<template>
  <div class="subscribe-form-molecule">
    <InputEmail />
    <Button type="subscribe">Subscribe</Button>
  </div>
</template>

<script setup>
// Atomları import edin (Dosya yollarını projenize göre ayarlayın)
import InputEmail from '../Atoms/InputEmail.vue'
import Button from '../Atoms/ButtonEtsy.vue'
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
</style>
