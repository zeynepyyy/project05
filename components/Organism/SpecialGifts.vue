<template>
  <section class="special-gifts-section">
    <div class="section-header">
      <h3 class="section-title">Gifts as special as they are</h3>
    </div>
    
    <div class="special-scroll-container">
      <NuxtLink 
        v-for="(item, index) in items" 
        :key="index"
        :to="`/search?q=${item.query}`" 
        class="special-gift-card"
      >
        <div class="special-image-wrapper">
          <img :src="item.image" :alt="item.label" />
          <div class="search-pill">
            <component :is="Search" :size="16" class="search-icon" />
            <span class="pill-text">{{ item.label }}</span>
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
import { ChevronRight, Search } from 'lucide-vue-next';
import { useHomepageStore } from '~/stores/homepage';
import { computed, onMounted } from 'vue';

const store = useHomepageStore();
const sectionId = 'special-gifts';

onMounted(() => {
  store.fetchSection(sectionId);
});

const fallbackItems = [
  {
    label: 'Last Minute Gifts',
    query: 'last-minute-gifts',
    image: 'https://i.etsystatic.com/26786657/r/il/663c6c/3196627083/il_600x600.3196627083_h2z7.jpg'
  },
  {
    label: 'Personalized Portraits',
    query: 'personalized-portraits',
    image: 'https://i.etsystatic.com/26241480/c/1800/1430/0/200/il/115756/4346690955/il_340x270.4346690955_5hd3.jpg'
  },
  {
    label: 'Gifts for Yourself',
    query: 'gifts-for-yourself',
    image: 'https://i.etsystatic.com/24617197/r/il/6b6807/2836262445/il_340x270.2836262445_1v41.jpg'
  },
  {
    label: 'Gifts for Couples',
    query: 'gifts-for-couples',
    image: 'https://i.etsystatic.com/15949237/r/il/26bb2f/4447333917/il_600x600.4447333917_qg7x.jpg'
  },
  {
    label: 'DIY Gifts',
    query: 'diy-gifts',
    image: 'https://i.etsystatic.com/11239263/r/il/6b567d/3143527961/il_340x270.3143527961_1l7d.jpg'
  }
];

const items = computed(() => {
  const storeItems = store.sections[sectionId]?.items;
  return (storeItems && storeItems.length > 0) ? storeItems : fallbackItems;
});
</script>

<style scoped>
.special-gifts-section {
  padding: 0 1rem;
  margin-top: 3rem;
  margin-bottom: 3rem; /* Extra spacing at bottom as it might be near end */
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

.section-header {
  margin-bottom: 1rem;
}

.section-title {
  font-family: 'Guardian-EgypTT', serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: #222;
  margin: 0;
}

.special-scroll-container {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 16px;
  scrollbar-width: none;
  position: relative;
}
.special-scroll-container::-webkit-scrollbar {
  display: none;
}

.special-gift-card {
  flex: 0 0 280px; /* Slightly wider cards */
  text-decoration: none;
  color: inherit;
  display: block;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}

.special-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1; /* Square cards as per screenshot */
  background: #f4f4f4;
}

.special-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.special-gift-card:hover .special-image-wrapper img {
  transform: scale(1.05);
}

.search-pill {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 8px 16px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  transition: transform 0.2s ease;
  width: max-content;
  max-width: 90%;
}

.special-gift-card:hover .search-pill {
  transform: translateX(-50%) scale(1.02);
}

.search-icon {
  color: #222;
  stroke-width: 2.5px;
}

.pill-text {
  font-family: 'Graphik Webfont', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #222;
}

.scroll-arrow-right {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
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
