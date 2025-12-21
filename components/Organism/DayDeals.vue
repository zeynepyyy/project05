<template>
  <section class="day-deals-section">
    <div class="deal-card green-card">
      <div class="deal-content">
        <h3 class="deal-title">Don't miss today's deal</h3>
        <p class="deal-desc">Get up to 50% off stockings right now for our 7 days of deals.</p>
      </div>
      <div class="deal-image">
        <img :src="'/day-deal-stockings.jpg'" alt="Stockings" />
      </div>
    </div>
    
    <div class="deal-card pink-card">
       <img :src="'/day-deal-tags.jpg'" alt="Gift Tags" class="full-image" />
    </div>
  </section>
</template>

<script setup lang="ts">
// No script needed for static promo
</script>

<style scoped>
.day-deals-section {
  padding: 0 1rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  gap: 24px;
}

.deal-card {
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  min-height: 280px;
}

/* Green Card Styles */
.green-card {
  flex: 2; /* Takes up 2/3 space roughly */
  background-color: #2F4032; /* Dark green from screenshot */
  display: flex;
  align-items: stretch;
}

.deal-content {
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  z-index: 2;
}

.deal-title {
  font-family: 'Guardian-EgypTT', serif;
  font-size: 2.2rem;
  font-weight: 300;
  margin-bottom: 16px;
  line-height: 1.1;
}

.deal-desc {
  font-family: 'Graphik Webfont', sans-serif;
  font-size: 1rem;
  line-height: 1.4;
  opacity: 0.9;
}

.deal-image {
  flex: 1.2;
  position: relative;
  overflow: hidden;
}

.deal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Pink Card Styles */
.pink-card {
  flex: 1; /* Takes up 1/3 space */
  background-color: #FACDDA; /* Pink from screenshot */
  display: flex;
  align-items: center;
  justify-content: center;
}

.full-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 900px) {
  .day-deals-section {
    flex-direction: column;
  }
}
</style>
