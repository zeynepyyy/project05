<template>
  <div class="holiday-hub-final">
    <HubHeader />
    <CategoryGrid />
  </div>
</template>

<script setup>
import HubHeader from './Organism/HubHeader.vue'
import CategoryGrid from './Organism/CategoryGrid.vue'
</script>

<style scoped>
.holiday-hub-final {
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
  color: white;
  overflow: hidden;
  /* Tüm bileşeni sarar */
}
</style>
