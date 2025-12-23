<template>
  <div class="top-banner-section-organism">
    <DealBanner />
    <HousewarmingBanner />
  </div>
</template>

<script setup lang="ts">
import DealBanner from '../Molecules/DealBanner.vue'
import HousewarmingBanner from '../Molecules/HousewarmingBanner.vue'
</script>

<style scoped>
.top-banner-section-organism {
  display: flex;
  gap: 1rem;
  padding: 0 1rem;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}
/* Mobil stiller için medya sorguları */
@media (max-width: 768px) {
  .top-banner-section-organism {
    flex-direction: column;
    padding: 1rem;
  }
}
</style>
