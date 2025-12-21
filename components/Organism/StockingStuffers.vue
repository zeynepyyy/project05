<template>
  <section class="stocking-stuffers-section">
    <div class="section-header">
      <h3 class="section-title">Stocking Stuffer Ideas</h3>
      <a href="#" class="view-all-link">View all</a>
    </div>
    
    <div class="stocking-scroll-container">
      <NuxtLink 
        v-for="(item, index) in items" 
        :key="index"
        :to="`/product/${index}`" 
        class="stocking-card"
      >
        <div class="stocking-image-wrapper">
          <img :src="item.image" :alt="item.title" />
          <button class="favorite-btn-overlay">
            <component :is="Heart" :size="20" />
          </button>
        </div>
        
        <div class="stocking-details">
          <h4 class="stocking-title">{{ item.title }}</h4>
          <!-- Pricing is standard black text based on similar sections if not explicitly sale colored -->
          <div class="stocking-price-row">
             <span class="current-price">{{ item.price }} TL</span>
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
const sectionId = 'stocking-stuffers';

onMounted(() => {
  store.fetchSection(sectionId);
});

const fallbackItems = [
  {
    title: '2026 Silly Goose Mini Desk Cale...',
    price: '344.92',
    image: 'https://i.etsystatic.com/26786657/r/il/663c6c/3196627083/il_600x600.3196627083_h2z7.jpg'
  },
  {
    title: 'Personalized Apple AirTag Hold...',
    price: '463.85',
    image: 'https://i.etsystatic.com/15949237/r/il/26bb2f/4447333917/il_600x600.4447333917_qg7x.jpg'
  },
  {
    title: 'Gift lucky clover real 4 leaf clo...',
    price: '445.62',
    image: 'https://i.etsystatic.com/26241480/c/1800/1430/0/200/il/115756/4346690955/il_340x270.4346690955_5hd3.jpg'
  },
  {
    title: 'Leather Magnet Fidget Slider St...',
    price: '858.98',
    image: 'https://i.etsystatic.com/24617197/r/il/6b6807/2836262445/il_340x270.2836262445_1v41.jpg'
  },
  {
    title: 'Personalized baby hairbrush / B...',
    price: '381.94',
    image: 'https://i.etsystatic.com/11239263/r/il/6b567d/3143527961/il_340x270.3143527961_1l7d.jpg'
  },
  {
    title: 'Custom Name Keychain',
    price: '185.50',
    image: 'https://i.etsystatic.com/28224673/r/il/877fe0/4347781534/il_340x270.4347781534_8x1m.jpg'
  }
];

const items = computed(() => {
  const storeItems = store.sections[sectionId]?.items;
  return (storeItems && storeItems.length > 0) ? storeItems : fallbackItems;
});
</script>

<style scoped>
.stocking-stuffers-section {
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

.stocking-scroll-container {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 16px;
  scrollbar-width: none;
  position: relative;
}
.stocking-scroll-container::-webkit-scrollbar {
  display: none;
}

.stocking-card {
  flex: 0 0 240px;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.stocking-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1.1; 
  border-radius: 12px;
  overflow: hidden;
  background: #f4f4f4;
}

.stocking-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.stocking-card:hover .stocking-image-wrapper img {
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

.stocking-card:hover .favorite-btn-overlay {
  opacity: 1;
}

.stocking-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stocking-title {
  font-family: 'Graphik Webfont', sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  color: #222;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}

.stocking-price-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.current-price {
  font-weight: 700;
  font-size: 1rem;
  color: #222;
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
