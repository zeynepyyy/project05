<template>
  <div class="complete-footer-area">
    <SubscriptionSection />
    <MainFooter />
  </div>
</template>

<script setup lang="ts">
import SubscriptionSection from './Organism/SubscriptionSection.vue'
import MainFooter from './Organism/MainFooter.vue'
</script>

<style scoped>
.complete-footer-area {
  width: 100%;
}
</style>
