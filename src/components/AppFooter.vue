<template>
  <div class="complete-footer-area">
    <SubscriptionSection />

    <MainFooter />
  </div>
</template>

<script setup>
// Organizmalarınızı import edin (Dosya yollarını projenize göre ayarlayın)
import SubscriptionSection from './Organism/SubscriptionSection.vue'
import MainFooter from './Organism/MainFooter.vue'

// Not: Bu bileşen sadece iki Organizmayı yan yana koyar.
// Tüm Atomlar ve Moleküller, Organizmalar aracılığıyla zaten çağrılmıştır.
</script>

<style scoped>
/* Genel yerleşim stilini buraya ekleyebilirsiniz, ancak Organizmaların çoğu stilini kendi içinde yönetmelidir. */
.complete-footer-area {
  width: 100%;
  /* Diğer global stiller... */
}
</style>
