<template>
  <div class="slider-section-container-final">
    <CategorySliderSection />
    <ProductSliderSection />
  </div>
</template>

<script setup>
import CategorySliderSection from './Organism/CategorySliderSection.vue'
import ProductSliderSection from './Organism/ProductSliderSection.vue'
</script>

<style scoped>
.slider-section-container-final {
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
  color: #222;
  background-color: white;
}
</style>
