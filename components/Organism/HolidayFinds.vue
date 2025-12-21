<template>
  <section class="holiday-finds-section">
    <div class="section-header">
      <h3 class="section-title">Holiday finds for you</h3>
      <div class="nav-buttons">
         <!-- Placeholder for nav if needed, or just visual -->
      </div>
    </div>
    
    <div class="holiday-scroll-container">
      <NuxtLink 
        v-for="(item, index) in items" 
        :key="index"
        :to="`/product/${item.id}`" 
        class="holiday-find-card"
      >
        <div class="holiday-image-wrapper">
          <img :src="item.image" :alt="item.title" @error="handleImageError" />
          <button class="favorite-btn" @click.prevent="(e) => toggleFavorite(e, item)">
            <component 
              :is="Heart" 
              :size="18" 
              :fill="isFavorite(item.id) ? '#f1641e' : 'none'"
              :stroke="isFavorite(item.id) ? '#f1641e' : 'currentColor'"
            />
          </button>
          <div class="holiday-title-pill">
            {{ item.title }}
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
import { ChevronRight, Heart } from 'lucide-vue-next';
import { useHomepageStore } from '~/stores/homepage';
import { useFavoritesStore } from '~/stores/favorites';
import { computed, onMounted } from 'vue';

const store = useHomepageStore();
const favoritesStore = useFavoritesStore();
const sectionId = 'holiday-finds';

onMounted(() => {
  store.fetchSection(sectionId);
});

const fallbackItems = [
  {
    id: 'holiday-fallback-1',
    title: 'Custom Christmas Cheer',
    image: 'https://i.etsystatic.com/17398322/r/il/15170d/3440798725/il_600x600.3440798725_2p5i.jpg'
  },
  {
    id: 'holiday-fallback-2',
    title: 'Artful Custom Portraits',
    image: 'https://i.etsystatic.com/26786657/r/il/663c6c/3196627083/il_600x600.3196627083_h2z7.jpg'
  },
  // ... (Shortened for brevity)
];

const items = computed(() => {
  const storeItems = store.sections[sectionId]?.items;
  const result = (storeItems && storeItems.length > 0) ? storeItems : fallbackItems;
  return result;
});

const handleImageError = (e: Event) => {
    console.error('HolidayFinds Image failed to load:', (e.target as HTMLImageElement).src);
};

const toggleFavorite = (e: Event, item: any) => {
    e.preventDefault(); 
    e.stopPropagation();
    
    const product = {
        id: item.id || `holiday-${item.title}`,
        title: item.title,
        description: '',
        price: 0, // Holiday finds often don't have price in this view
        currency: 'TL',
        imageUrl: item.image,
        category: 'Holiday',
        isHolidaySpecial: true
    };
    
    favoritesStore.toggleFavorite(product);
};

const isFavorite = (itemId: string) => {
    return favoritesStore.isFavorite(itemId);
};
</script>

<style scoped>
.holiday-finds-section {
  padding: 0 1rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

.section-header {
  margin-bottom: 1.5rem;
}

.section-title {
  font-family: 'Guardian-EgypTT', serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #222;
  margin: 0;
}

.holiday-scroll-container {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 16px;
  scrollbar-width: none;
  position: relative;
}
.holiday-scroll-container::-webkit-scrollbar {
  display: none;
}

.holiday-find-card {
  flex: 0 0 200px; /* Adjust width as needed */
  text-decoration: none;
  color: inherit;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  transition: transform 0.2s;
}

.holiday-find-card:hover {
  transform: translateY(-4px);
}

.holiday-image-wrapper {
  width: 100%;
  aspect-ratio: 1;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
}

.holiday-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.holiday-title-pill {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #222;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  max-width: 90%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Navigation Arrow */
.scroll-arrow-right {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%) translateX(50%); /* Hang off edge slightly */
  width: 48px;
  height: 48px;
  background: white; 
  border: 1px solid #e1e3df;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  z-index: 2;
}

.scroll-arrow-right:hover {
  background: #f5f5f5;
  box-shadow: 0 6px 16px rgba(0,0,0,0.2);
}

.favorite-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  z-index: 2;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  opacity: 0;
  transform: scale(0.9);
  transition: all 0.2s ease;
}

.holiday-find-card:hover .favorite-btn {
  opacity: 1;
  transform: scale(1);
}

.favorite-btn:hover {
  background: #f5f5f5;
  transform: scale(1.1);
}
</style>
