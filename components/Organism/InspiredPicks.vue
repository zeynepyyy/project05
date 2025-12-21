<template>
  <section class="inspired-picks-section">
    <div class="section-header">
      <h3 class="section-title">Picks inspired by your shopping</h3>
      <a href="#" class="view-all-link">View all</a>
    </div>
    
    <div class="inspired-scroll-container">
      <NuxtLink 
        v-for="(item, index) in items" 
        :key="index"
        :to="`/product/${index}`" 
        class="inspired-pick-card"
      >
        <div class="inspired-image-wrapper">
          <img :src="item.image" :alt="item.title" />
          <button class="favorite-btn-overlay">
            <component :is="Heart" :size="20" />
          </button>
        </div>
        
        <div class="inspired-details">
          <h4 class="inspired-title">{{ item.title }}</h4>
          <div class="inspired-price-row">
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
import { useHomepageStore } from '~/stores/homepage';
import { computed, onMounted } from 'vue';

const store = useHomepageStore();
const sectionId = 'inspired-picks';

onMounted(() => {
  store.fetchSection(sectionId);
});

const fallbackItems = [
  {
    title: '14k Gold London Blue Topaz Dan...',
    price: '2,234.10',
    originalPrice: '4,468.65',
    image: 'https://i.etsystatic.com/19793607/r/il/6b567d/3143527961/il_340x270.3143527961_1l7d.jpg' // Placeholder specific to blue topaz
  },
  {
    title: 'Natural London Blue Topaz in 9k...',
    price: '4,185.35',
    originalPrice: null,
    image: 'https://i.etsystatic.com/22568630/r/il/0270a6/4686940026/il_340x270.4686940026_qgq3.jpg'
  },
  {
    title: '14K Solid Gold London Blue Top...',
    price: '2,749.39',
    originalPrice: '4,999.13',
    image: 'https://i.etsystatic.com/26786657/r/il/24430983/il_340x270.24430983_qgq3.jpg' // Generic placeholder
  },
  {
    title: '14K Genuine Swiss Blue Topaz St...',
    price: '5,816.08',
    originalPrice: '6,122.21',
    image: 'https://i.etsystatic.com/11669056/r/il/29179c/6039295467/il_340x270.6039295467_lhtu.jpg'
  },
  {
    title: 'Modern Acrylic Earrings for Wo...',
    price: '1,634.79',
    originalPrice: null,
    image: 'https://i.etsystatic.com/13155776/r/il/f87e5b/2635928829/il_340x270.2635928829_qon2.jpg'
  },
  {
    title: 'Statement Geometric Earrings',
    price: '1,076.50',
    originalPrice: null,
    image: 'https://i.etsystatic.com/24617197/r/il/6b6807/2836262445/il_340x270.2836262445_1v41.jpg'
  }
];

const items = computed(() => {
  const storeItems = store.sections[sectionId]?.items;
  return (storeItems && storeItems.length > 0) ? storeItems : fallbackItems;
});
</script>

<style scoped>
.inspired-picks-section {
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
  align-items: flex-end; /* Align baseline */
  margin-bottom: 1rem;
}

.section-title {
  font-family: 'Guardian-EgypTT', serif;
  font-size: 1.5rem;
  font-weight: 500; /* Lighter weight as per screenshot */
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

.inspired-scroll-container {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 16px;
  scrollbar-width: none;
  position: relative;
}
.inspired-scroll-container::-webkit-scrollbar {
  display: none;
}

.inspired-pick-card {
  flex: 0 0 240px; /* Slightly wider cards */
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.inspired-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1.1; /* Slightly rectangular */
  border-radius: 12px;
  overflow: hidden;
  background: #f4f4f4;
}

.inspired-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.inspired-pick-card:hover .inspired-image-wrapper img {
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

.inspired-pick-card:hover .favorite-btn-overlay {
  opacity: 1;
}

.inspired-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.inspired-title {
  font-family: 'Graphik Webfont', sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  color: #222;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}

.inspired-price-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.current-price {
  font-weight: 700;
  color: #176e38; /* Etsy Green for price */
  font-size: 1rem;
}

.original-price {
  font-size: 0.8rem;
  text-decoration: line-through;
  color: #595959;
}

.scroll-arrow-right {
  position: absolute;
  right: 0;
  top: 40%; /* Approx center of image */
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
