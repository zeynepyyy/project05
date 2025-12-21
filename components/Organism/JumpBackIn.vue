<template>
  <section class="jump-back-in-section">
    <div class="section-header">
      <h3 class="section-title">Jump back in</h3>
      <a href="#" class="view-all-link">View all</a>
    </div>
    
    <div class="jump-scroll-container">
      <NuxtLink 
        v-for="(item, index) in items" 
        :key="index"
        :to="`/product/${index}`" 
        class="jump-card"
      >
        <div class="jump-image-wrapper">
          <img :src="item.image" :alt="item.title" />
          <button class="favorite-btn-overlay">
            <component :is="Heart" :size="20" />
          </button>
        </div>
        
        <div class="jump-details">
          <h4 class="jump-title">{{ item.title }}</h4>
          <div class="jump-price-row">
            <span class="current-price" :class="{ 'discounted': item.originalPrice }">{{ item.price }} TL</span>
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
const sectionId = 'jump-back-in';

onMounted(() => {
  store.fetchSection(sectionId);
});

const fallbackItems = [
  {
    title: 'Sterling Silver Personalized Rou...',
    price: '793.26',
    originalPrice: null,
    image: 'https://i.etsystatic.com/15949237/r/il/26bb2f/4447333917/il_340x270.4447333917_qg7x.jpg' // Generic silver placeholder
  },
  {
    title: 'Sterling Silver Initial Disc Neckla...',
    price: '1,094.93',
    originalPrice: '1,564.18',
    image: 'https://i.etsystatic.com/26241480/c/1800/1430/0/200/il/115756/4346690955/il_340x270.4346690955_5hd3.jpg' // Generic gold/silver placeholder
  },
  {
    title: 'Sterling Silver Mini Disc Necklac...',
    price: '1,541.84',
    originalPrice: null,
    image: 'https://i.etsystatic.com/24617197/r/il/6b6807/2836262445/il_340x270.2836262445_1v41.jpg'
  },
  {
    title: 'Handmade Personalized Name D...',
    price: '1,859.14',
    originalPrice: '2,323.93',
    image: 'https://i.etsystatic.com/24483733/r/il/97e753/5623046755/il_340x270.5623046755_3l1m.jpg'
  },
  {
    title: 'Astrology Elegance Zodiac Sign ...',
    price: '587.69',
    originalPrice: '783.78',
    image: 'https://i.etsystatic.com/13155776/r/il/f87e5b/2635928829/il_340x270.2635928829_qon2.jpg'
  },
  {
    title: 'Custom Gold Bar Necklace',
    price: '920.50',
    originalPrice: null,
    image: 'https://i.etsystatic.com/34379934/c/1724/1724/211/251/il/3e6d42/7208783565/il_340x270.7208783565_m7t0.jpg'
  }
];

const items = computed(() => {
  const storeItems = store.sections[sectionId]?.items;
  return (storeItems && storeItems.length > 0) ? storeItems : fallbackItems;
});
</script>

<style scoped>
.jump-back-in-section {
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

.jump-scroll-container {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 16px;
  scrollbar-width: none;
  position: relative;
}
.jump-scroll-container::-webkit-scrollbar {
  display: none;
}

.jump-card {
  flex: 0 0 240px;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.jump-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1.1; 
  border-radius: 12px;
  overflow: hidden;
  background: #f4f4f4;
}

.jump-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.jump-card:hover .jump-image-wrapper img {
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

.jump-card:hover .favorite-btn-overlay {
  opacity: 1;
}

.jump-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.jump-title {
  font-family: 'Graphik Webfont', sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  color: #222;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}

.jump-price-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.current-price {
  font-weight: 700;
  font-size: 1rem;
  color: #222;
}
.current-price.discounted {
  color: #176e38;
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
