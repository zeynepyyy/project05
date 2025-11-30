<template>
  <div class="similar-products-page-view">
    <SimilarProductsSection />
  </div>
</template>

<script setup>
// Organizmayı import edin (Dosya yolunuzu kontrol edin)
import SimilarProductsSection from './Organism/SimilarProductsSection.vue'
</script>

<style scoped>
/* Bu stil, bileşeni ana sayfada ortalamak için kullanılır. */
.similar-products-page-view {
  max-width: 1200px; /* Sabit bir genişlik */
  margin: 0 auto; /* Ortala */
  padding: 2rem 0; /* Üst ve alt boşluk */
  background-color: #fff;
}
</style>
