<template>
  <section class="dainty-sparkle-section">
    <div class="section-header">
      <h3 class="section-title">Dainty Piercing Sparkle</h3>
      <a href="#" class="view-all-link">View all</a>
    </div>
    
    <div class="dainty-scroll-container">
      <NuxtLink 
        v-for="(item, index) in items" 
        :key="index"
        :to="`/product/${index}`" 
        class="dainty-card"
      >
        <div class="dainty-image-wrapper">
          <img :src="item.image" :alt="item.title" />
          <button class="favorite-btn-overlay">
            <component :is="Heart" :size="20" />
          </button>
        </div>
        
        <div class="dainty-details">
          <h4 class="dainty-title">{{ item.title }}</h4>
          <div class="dainty-price-row">
             <span class="current-price">{{ item.price }} TL</span>
             <span v-if="item.originalPrice" class="original-price">{{ item.originalPrice }} TL</span>
          </div>
        </div>
      </NuxtLink>

      <button class="scroll-arrow-right">
        <component :is="ChevronRight" :size="24" />
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Heart, ChevronRight } from 'lucide-vue-next';

const items = [
  {
    title: 'Natural Emerald 14k Gold Charm...',
    price: '1,791.66',
    originalPrice: '3,583.77',
    image: 'https://i.etsystatic.com/28224673/r/il/877fe0/4347781534/il_340x270.4347781534_8x1m.jpg' // Emerald placeholder usage
  },
  {
    title: 'African Copper Bracelets: Buy 3 ...',
    price: '321.77',
    originalPrice: '402.22',
    image: 'https://i.etsystatic.com/26786657/r/il/663c6c/3196627083/il_600x600.3196627083_h2z7.jpg' // Bracelet placeholder
  },
  {
    title: 'Gold Jhumka on hoops * 20k Gol...',
    price: '487.13',
    originalPrice: null,
    image: 'https://i.etsystatic.com/24617197/r/il/6b6807/2836262445/il_340x270.2836262445_1v41.jpg' // Gold earring placeholder
  },
  {
    title: '16G Gold Color Hammer Pattern...',
    price: '500.09',
    originalPrice: '714.61',
    image: 'https://i.etsystatic.com/15949237/r/il/26bb2f/4447333917/il_600x600.4447333917_qg7x.jpg' // Earring placeholder
  },
  {
    title: '925 Sterling Silver Ring- Handm...',
    price: '580.98',
    originalPrice: '2,323.93',
    image: 'https://i.etsystatic.com/11239263/r/il/6b567d/3143527961/il_340x270.3143527961_1l7d.jpg' // Ring placeholder
  },
  {
    title: 'Diamond Stud Earrings',
    price: '2,150.00',
    originalPrice: '3,000.00',
    image: 'https://i.etsystatic.com/23722603/r/il/a7b134/3070404394/il_340x270.3070404394_4qj9.jpg'
  }
];
</script>

<style scoped>
.dainty-sparkle-section {
  padding: 0 1rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1rem;
}

.section-title {
  font-family: 'Guardian-EgypTT', serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: #222;
  margin: 0;
}

.view-all-link {
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  color: #222;
}
.view-all-link:hover {
  text-decoration: underline;
}

.dainty-scroll-container {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 16px;
  scrollbar-width: none;
  position: relative;
}
.dainty-scroll-container::-webkit-scrollbar {
  display: none;
}

.dainty-card {
  flex: 0 0 240px;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.dainty-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1.1; 
  border-radius: 12px;
  overflow: hidden;
  background: #f4f4f4;
}

.dainty-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.dainty-card:hover .dainty-image-wrapper img {
  transform: scale(1.05);
}

.favorite-btn-overlay {
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}

.dainty-card:hover .favorite-btn-overlay {
  opacity: 1;
}

.dainty-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.dainty-title {
  font-family: 'Graphik Webfont', sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  color: #222;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}

.dainty-price-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.current-price {
  font-weight: 700;
  font-size: 1rem;
  color: #176e38; /* Green for discount style seen in screenshot */
}

.original-price {
  font-size: 0.8rem;
  text-decoration: line-through;
  color: #595959;
}

.scroll-arrow-right {
  position: absolute;
  right: 0;
  top: 40%;
  transform: translateX(50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  border: 1px solid #e1e3df;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  z-index: 10;
}
</style>
