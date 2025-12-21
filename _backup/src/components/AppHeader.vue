<template>
  <header class="app-header-final">
    <TopHeaderRow />
    <NavigationLinks />
  </header>
</template>

<script setup>
import TopHeaderRow from './Organism/TopHeaderRow.vue'
import NavigationLinks from './Organism/NavigationLinks.vue'
</script>

<style scoped>
.app-header-final {
  border-bottom: 1px solid #ddd;
  padding: 0.5rem 1rem;
  font-family: 'Segoe UI', 'Helvetica Neue', sans-serif;
  /* TopHeaderRow ve NavigationLinks arasındaki boşluğu yönetebilirsiniz */
}
</style>
