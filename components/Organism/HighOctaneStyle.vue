<template>
  <section class="high-octane-section">
    <div class="section-header">
      <h3 class="section-title">High Octane Style</h3>
      <a href="#" class="view-all-link">View all</a>
    </div>
    
    <div class="octane-scroll-container">
      <NuxtLink 
        v-for="(item, index) in items" 
        :key="index"
        :to="`/product/${index}`" 
        class="octane-card"
      >
        <div class="octane-image-wrapper">
          <img :src="item.image" :alt="item.title" />
          <button class="favorite-btn-overlay">
            <component :is="Heart" :size="20" />
          </button>
          <div v-if="item.saleBadge" class="sale-badge-sticker">
            {{ item.saleBadge }}
          </div>
        </div>
        
        <div class="octane-details">
          <h4 class="octane-title">{{ item.title }}</h4>
          <!-- Pricing hidden in screenshot but usually present, adding mock price or hiding if blank in screenshot. 
               Screenshot cuts off before price, but standard Etsy cards have it. I'll add it safely. -->
          <!-- Wait, screenshot DOES NOT show price rows immediately below title? The crop is tight. 
               Previous sections had it. I'll include it for consistency. -->
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
const sectionId = 'high-octane';

onMounted(() => {
  store.fetchSection(sectionId);
});

const fallbackItems = [
  {
    title: 'Alternative Stickers - M W16 - LE...',
    image: 'https://i.etsystatic.com/24483733/r/il/97e753/5623046755/il_340x270.5623046755_3l1m.jpg',
    saleBadge: null
  },
  {
    title: 'Mini 18K Gold Filled Gold Racing...',
    image: 'https://i.etsystatic.com/24617197/r/il/6b6807/2836262445/il_340x270.2836262445_1v41.jpg',
    saleBadge: null
  },
  {
    title: 'Max Tarot Card Sticker: Glossy ...',
    image: 'https://i.etsystatic.com/13155776/r/il/f87e5b/2635928829/il_340x270.2635928829_qon2.jpg',
    saleBadge: null
  },
  {
    title: 'Max Verstappen with Wig inspire...',
    image: 'https://i.etsystatic.com/26241480/c/1800/1430/0/200/il/115756/4346690955/il_340x270.4346690955_5hd3.jpg',
    saleBadge: null
  },
  {
    title: 'F1 Race Circuit Desk Calendar | ...',
    image: 'https://i.etsystatic.com/11239263/r/il/6b567d/3143527961/il_340x270.3143527961_1l7d.jpg',
    saleBadge: '35% SALE'
  },
  {
    title: 'Moto GP Racing Tee',
    image: 'https://i.etsystatic.com/23722603/r/il/a7b134/3070404394/il_340x270.3070404394_4qj9.jpg',
    saleBadge: null
  }
];

const items = computed(() => {
  const storeItems = store.sections[sectionId]?.items;
  return (storeItems && storeItems.length > 0) ? storeItems : fallbackItems;
});
</script>

<style scoped>
.high-octane-section {
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

.octane-scroll-container {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 16px;
  scrollbar-width: none;
  position: relative;
}
.octane-scroll-container::-webkit-scrollbar {
  display: none;
}

.octane-card {
  flex: 0 0 240px;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.octane-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1.1; 
  border-radius: 12px;
  overflow: hidden;
  background: #f4f4f4;
}

.octane-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.octane-card:hover .octane-image-wrapper img {
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

.octane-card:hover .favorite-btn-overlay {
  opacity: 1;
}

.sale-badge-sticker {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: #DD2222; /* Red sale color */
  color: white;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 800;
  text-align: center;
  line-height: 1;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  transform: rotate(-10deg);
}

.octane-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.octane-title {
  font-family: 'Graphik Webfont', sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  color: #222;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
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
