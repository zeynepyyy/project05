<template>
  <div class="product-detail-final">
    <div class="grid">
      <ImageGallery />
      <ProductActions />
    </div>
  </div>
</template>

<script setup>
import ImageGallery from './Organism/ImageGallery.vue'
import ProductActions from './Organism/ProductActions.vue'
</script>

<style scoped>
.product-detail-final {
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', sans-serif;
  color: #222;
}

.grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 2rem;
}
</style>
