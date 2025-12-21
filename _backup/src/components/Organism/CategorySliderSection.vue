<template>
  <div class="category-slider-section-organism">
    <div class="header-and-button-box">
      <StaticHeader />
    </div>

    <div class="category-slider-container">
      <div class="category-slider-track">
        <CategoryCard
          v-for="(category, index) in categories"
          :key="'cat-' + index"
          :title="category.title"
          :image="category.image"
          :is-zoomed="zoomedCategoryIndex === index"
          @toggle-zoom="toggleZoomCategory(index)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// Molekülleri import edin
import StaticHeader from '../Molecules/StaticHeader.vue'
import CategoryCard from '../Molecules/CategoryCard.vue'

// --- VERİ TİPLERİ VE VERİLER ---

interface Category {
  title: string
  image: string
}

// Büyütme (Zoom) Durumları
const zoomedCategoryIndex = ref<number | null>(null)

// Kategoriler (URL'ler TAMAMLANDI)
const categories: Category[] = [
  {
    title: 'Christmas Cards',
    image:
      'https://i.etsystatic.com/18159507/r/il/150843/7324556951/il_600x600.7324556951_aja9.jpg',
  },
  {
    title: 'Christmas Cookie Making Supplies',
    image:
      'https://i.etsystatic.com/57032941/c/1428/1428/306/35/il/fef26e/7387658309/il_600x600.7387658309_jfz8.jpg',
  },
  {
    title: 'Stocking Stuffers',
    image:
      'https://i.etsystatic.com/60789182/r/il/1e9f67/7360909939/il_600x600.7360909939_5nbu.jpg',
  },
]

const toggleZoomCategory = (index: number) => {
  zoomedCategoryIndex.value = zoomedCategoryIndex.value === index ? null : index
}
</script>

<style scoped>
/* Daha önceki CSS stilleri... */
.category-slider-section-organism {
  display: flex;
  margin-bottom: 2rem;
  gap: 1.5rem;
}
.header-and-button-box {
  flex: 0 0 200px;
  padding-right: 1.5rem;
}
.category-slider-container {
  flex-grow: 1;
  overflow-x: auto;
  padding-bottom: 1rem;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.category-slider-container::-webkit-scrollbar {
  display: none;
}
.category-slider-track {
  display: flex;
  gap: 1rem;
  height: 100%;
}
@media (max-width: 768px) {
  .category-slider-section-organism {
    flex-direction: column;
  }
  .header-and-button-box {
    flex: none;
    width: 100%;
    padding-right: 0;
    margin-bottom: 1rem;
  }
}
</style>
