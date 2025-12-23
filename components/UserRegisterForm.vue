<template>
  <div class="register-page-view">
    <RegisterFormOrganism />
  </div>
</template>

<script setup lang="ts">
// Organizmayı import edin (Dosya yolunuzu kontrol edin)
import RegisterFormOrganism from './Organism/RegisterFormm.vue'
</script>

<style scoped>
/* Bu stil, formun ekranın ortasında görünmesini sağlayan ana kapsayıcıdır. */
.register-page-view {
  display: flex;
  justify-content: center; /* Yatayda ortala */
  align-items: center; /* Dikeyde ortala */
  min-height: 100vh; /* Ekran yüksekliğini kapla */
  background-color: #f9f9f9; /* Formun arka plan rengiyle uyumlu */
  padding: 2rem;
}
</style>
