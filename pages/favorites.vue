<template>
  <div class="favorites-page">
    <div class="container">
      <h1>Your Favorites</h1>
      <p>Items you love will appear here.</p>
      
      <!-- Placeholder content to simulate a populated page -->
      <div class="test-grid">
         <div v-for="i in 4" :key="i" class="test-item"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.favorites-page {
    padding: 2rem;
    min-height: 60vh;
}
.container {
    max-width: 1200px;
    margin: 0 auto;
}
h1 {
    font-family: 'Guardian-EgypTT', serif;
    font-size: 2rem;
    margin-bottom: 1rem;
}
.test-grid {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
}
.test-item {
    width: 200px;
    height: 200px;
    background: #f4f4f4;
    border-radius: 12px;
}
</style>
