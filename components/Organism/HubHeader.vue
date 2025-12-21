<template>
  <div class="hub-header-organism">
    <HubTitleArea />
  </div>
</template>

<script setup>
import HubTitleArea from '../Molecules/HubTitleArea.vue'
</script>

<style scoped>
.hub-header-organism {
  /* Orijinal koddaki sabit üst alan stili */
  background-color: #384124;
  padding: 4rem 1rem 7rem; /* Alt padding, gridin yukarı kayması için önemlidir */
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
