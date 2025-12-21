<template>
  <section class="big-deals-section">
    <div class="section-header">
      <h3 class="section-title">Today's big deals</h3>
      <div class="fresh-deals-timer">
        <component :is="Clock" :size="18" class="clock-icon" />
        <span>Fresh deals in {{ timer }}</span>
      </div>
    </div>
    
    <div class="deals-scroll-container">
      <NuxtLink 
        v-for="(item, index) in items" 
        :key="index"
        :to="`/product/${index}`" 
        class="deal-card"
      >
        <div class="deal-image-wrapper">
          <img :src="item.image" :alt="item.title" />
          <button class="favorite-btn-overlay">
            <component :is="Heart" :size="20" />
          </button>
        </div>
        
        <div class="deal-details">
          <h4 class="deal-title">{{ item.title }}</h4>
          <div class="deal-price-row">
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
import { Heart, ChevronRight, Clock } from 'lucide-vue-next';
import { useHomepageStore } from '~/stores/homepage';
import { computed, onMounted } from 'vue';

const store = useHomepageStore();
const sectionId = 'big-deals';

onMounted(() => {
  store.fetchSection(sectionId);
});

const fallbackItems = [
  {
    title: 'Custom Pet Photo Blanket, Perso...',
    price: '768.90',
    originalPrice: '1,537.80',
    image: 'https://i.etsystatic.com/26241480/c/1800/1430/0/200/il/115756/4346690955/il_340x270.4346690955_5hd3.jpg'
  },
  {
    title: 'Monogram and Name Engraved ...',
    price: '890.50',
    originalPrice: '1,100.00',
    image: 'https://i.etsystatic.com/15949237/r/il/26bb2f/4447333917/il_600x600.4447333917_qg7x.jpg'
  },
  {
    title: 'Custom Name Toddler Purse : S...',
    price: '425.30',
    originalPrice: '850.60',
    image: 'https://i.etsystatic.com/24483733/r/il/97e753/5623046755/il_340x270.5623046755_3l1m.jpg'
  },
  {
    title: 'Dainty Initial Necklace with Hear...',
    price: '344.20',
    originalPrice: null,
    image: 'https://i.etsystatic.com/23722603/r/il/a7b134/3070404394/il_340x270.3070404394_4qj9.jpg'
  },
  {
    title: 'Personalized Groomsmen Gifts ...',
    price: '1,250.00',
    originalPrice: '1,800.00',
    image: 'https://i.etsystatic.com/24617197/r/il/6b6807/2836262445/il_340x270.2836262445_1v41.jpg'
  },
  {
    title: 'Family Custom Portrait',
    price: '550.00',
    originalPrice: '750.00',
    image: 'https://i.etsystatic.com/11239263/r/il/6b567d/3143527961/il_340x270.3143527961_1l7d.jpg'
  }
];

const items = computed(() => {
  const storeItems = store.sections[sectionId]?.items;
  return (storeItems && storeItems.length > 0) ? storeItems : fallbackItems;
});
const timer = computed(() => store.sections[sectionId]?.timer || '23:26:54');
</script>

<style scoped>
.big-deals-section {
  padding: 0 1rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1rem;
}

.section-title {
  font-family: 'Guardian-EgypTT', serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: #222;
  margin: 0;
}

.fresh-deals-timer {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  color: #595959;
}

.clock-icon {
  color: #595959;
}

.deals-scroll-container {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 16px;
  scrollbar-width: none;
  position: relative;
}
.deals-scroll-container::-webkit-scrollbar {
  display: none;
}

.deal-card {
  flex: 0 0 240px;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.deal-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1.1; 
  border-radius: 12px;
  overflow: hidden;
  background: #f4f4f4;
}

.deal-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.deal-card:hover .deal-image-wrapper img {
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

.deal-card:hover .favorite-btn-overlay {
  opacity: 1;
}

.deal-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.deal-title {
  font-family: 'Graphik Webfont', sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  color: #222;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}

.deal-price-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.current-price {
  font-weight: 700;
  font-size: 1rem;
  color: #222;
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
