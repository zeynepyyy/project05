<template>
  <div class="gift-mode-page">
    <!-- Hero Banner Section -->
    <div class="gift-mode-hero">
      <div class="hero-content">
        <h1 class="hero-title">Gift Mode</h1>
        <p class="hero-subtitle">Find the perfect gift for every occasion.</p>
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="main-container">
       <!-- Special Gifts Section (The scrollable categories) -->
       <SpecialGifts />
       
       <!-- Additional Gift Inspiration Grid -->
       <div class="gift-inspiration-grid">
          <div class="inspiration-card pink-theme">
             <h3>Housewarming Gifts</h3>
             <img src="https://i.etsystatic.com/17199997/r/il/d1f3ca/6351705675/il_600x600.6351705675_b4pb.jpg" alt="Housewarming" />
             <button class="shop-btn">Shop now</button>
          </div>
          <div class="inspiration-card blue-theme">
             <h3>Gifts for Him</h3>
             <img src="https://i.etsystatic.com/24617197/r/il/6b6807/2836262445/il_600x600.2836262445_1v41.jpg" alt="For Him" />
             <button class="shop-btn">Shop now</button>
          </div>
          <div class="inspiration-card orange-theme">
              <h3>Personalized Picks</h3>
              <img src="https://i.etsystatic.com/26241480/c/1800/1430/0/200/il/115756/4346690955/il_600x600.4346690955_5hd3.jpg" alt="Personalized" />
              <button class="shop-btn">Shop now</button>
          </div>
       </div>

       <!-- Featured Sections -->
       <RecentFinds /> 
    </div>
  </div>
</template>

<script setup lang="ts">
import SpecialGifts from '~/components/Organism/SpecialGifts.vue'
import RecentFinds from '~/components/Organism/RecentFinds.vue'
</script>

<style scoped>
.gift-mode-page {
    min-height: 80vh;
    padding-bottom: 4rem;
}

.gift-mode-hero {
    background-color: #fceceb; /* Soft pinkish background */
    padding: 3rem 1rem;
    text-align: center;
    margin-bottom: 2rem;
}

.hero-title {
    font-family: 'Guardian-EgypTT', serif;
    font-size: 3rem;
    color: #222;
    margin-bottom: 0.5rem;
}

.hero-subtitle {
    font-size: 1.2rem;
    color: #595959;
}

.main-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1rem;
}

.gift-inspiration-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 3rem 0;
}

.inspiration-card {
    border-radius: 12px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    transition: transform 0.3s;
    cursor: pointer;
}

.inspiration-card:hover {
    transform: translateY(-5px);
}

.inspiration-card img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 1rem;
}

.inspiration-card h3 {
    font-family: 'Guardian-EgypTT', serif;
    font-size: 1.5rem;
    margin: 0;
}

.shop-btn {
    background: white;
    border: none;
    padding: 10px 20px;
    border-radius: 24px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.pink-theme { background-color: #ffe4e6; }
.blue-theme { background-color: #e0f2fe; }
.orange-theme { background-color: #ffedd5; }
</style>
