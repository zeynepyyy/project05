<template>
  <header class="app-header-final">
    <div class="header-container">
      <TopHeaderRow />
      <NavigationLinks />
    </div>
  </header>
</template>

<script setup>
import TopHeaderRow from './Organism/TopHeaderRow.vue'
import NavigationLinks from './Organism/NavigationLinks.vue'
</script>

<style scoped>
.app-header-final {
  border-bottom: 1px solid #ddd;
  background: white;
  width: 100%;
}

.header-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  font-family: 'Segoe UI', 'Helvetica Neue', sans-serif;
}
</style>
