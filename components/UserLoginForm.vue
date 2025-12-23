<template>
  <div class="login-page-view">
    <LoginFormOrganism />
  </div>
</template>

<script setup lang="ts">
// Organizmayı import edin (Dosya yolunuzu kontrol edin)
import LoginFormOrganism from './Organism/LoginForm.vue'
</script>

<style scoped>
/* Bu stil, formun ekranın ortasında görünmesini sağlayan ana kapsayıcıdır. */
.login-page-view {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Ekran yüksekliğini kapla */
  background-color: #f9f9f9; /* LoginFormOrganism'deki arka plan rengi */
  padding: 2rem;
}
</style>
