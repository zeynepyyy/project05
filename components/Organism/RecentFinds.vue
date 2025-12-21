<template>
  <section class="recent-finds-section">
    <h3 class="recent-finds-title">Dive back into these 10 finds</h3>
    
    <div class="recent-finds-scroll-container">
      <NuxtLink 
        v-for="(item, index) in items" 
        :key="index"
        :to="`/product/${item.id}`" 
        class="recent-find-card"
      >
        <div class="recent-find-image">
          <img :src="item.image" :alt="item.title" @error="handleImageError" />
          <button class="favorite-btn-small" @click="(e) => toggleFavorite(e, item)">
            <component 
              :is="Heart" 
              :size="16" 
              :fill="isFavorite(item.id) ? '#f1641e' : 'none'"
              :stroke="isFavorite(item.id) ? '#f1641e' : 'currentColor'"
            />
          </button>
        </div>
        <div class="recent-find-details">
          <p class="recent-title">{{ item.title }}</p>
          <div class="recent-price-row">
            <span class="recent-price">{{ item.price }} TL</span>
            <span v-if="item.originalPrice" class="recent-original-price">{{ item.originalPrice }} TL</span>
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Heart } from 'lucide-vue-next';
import { useHomepageStore } from '~/stores/homepage';
import { useFavoritesStore } from '~/stores/favorites';
import { computed, onMounted } from 'vue';

const store = useHomepageStore();
const favoritesStore = useFavoritesStore();
const sectionId = 'recent-finds';

onMounted(() => {
  store.fetchSection(sectionId);
});

const fallbackItems = [
  {
    id: 'recent-fallback-1',
    title: 'London Blue Topaz, Swiss Blue Topaz',
    price: '18,461.83',
    originalPrice: '20,513.14',
    image: 'https://i.etsystatic.com/24430983/r/il/0270a6/4686940026/il_340x270.4686940026_qgq3.jpg'
  },
  {
    id: 'recent-fallback-2',
    title: 'Oyster Mushroom Cluster Red And...',
    price: '358.15',
    originalPrice: null,
    image: 'https://i.etsystatic.com/26241480/c/1800/1430/0/200/il/115756/4346690955/il_340x270.4346690955_5hd3.jpg'
  },
  // ... Simplified fallback for brevity if needed or keeping full list
];

const items = computed(() => {
  const storeItems = store.sections[sectionId]?.items;
  const result = (storeItems && storeItems.length > 0) ? storeItems : fallbackItems;
  return result;
});

const handleImageError = (e: Event) => {
    console.error('Image failed to load:', (e.target as HTMLImageElement).src);
};

const toggleFavorite = (e: Event, item: any) => {
    e.preventDefault(); // Prevent navigation
    e.stopPropagation();
    
    // Adapt to Product interface
    const product = {
        id: item.id || `temp-${item.title}`, // Ensure ID exists
        title: item.title,
        description: '',
        price: parseFloat(String(item.price).replace(/,/g, '')) || 0,
        currency: 'TL',
        imageUrl: item.image,
        category: 'Recent',
        isHolidaySpecial: false
    };
    
    favoritesStore.toggleFavorite(product);
};

const isFavorite = (itemId: string) => {
    return favoritesStore.isFavorite(itemId);
};
</script>

<style scoped>
.recent-finds-section {
  padding: 0 1rem; /* Align with global padding */
  margin-top: 2rem;
  margin-bottom: 2rem;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

.recent-finds-title {
  font-family: 'Guardian-EgypTT', serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 1rem;
}

.recent-finds-scroll-container {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 16px; /* Space for scrollbar */
  scrollbar-width: none; /* Firefox */
}
.recent-finds-scroll-container::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}

.recent-find-card {
  flex: 0 0 180px; /* Fixed width per screenshot */
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.recent-find-image {
  position: relative;
  width: 100%;
  aspect-ratio: 1; /* Square images */
  border-radius: 6px;
  overflow: hidden;
}

.recent-find-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s;
}

.recent-find-image:hover img {
  transform: scale(1.05);
}

.favorite-btn-small {
  position: absolute;
  top: 8px;
  right: 8px;
  background: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.recent-find-image:hover .favorite-btn-small {
  opacity: 1;
}

.recent-find-details {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.recent-title {
  font-family: 'Graphik Webfont', sans-serif;
  font-size: 0.9rem;
  color: #222;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}

.recent-price-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.recent-price {
  font-weight: 700;
  font-size: 0.95rem;
  color: #222;
}

.recent-original-price {
  font-size: 0.8rem;
  text-decoration: line-through;
  color: #595959;
}
</style>
