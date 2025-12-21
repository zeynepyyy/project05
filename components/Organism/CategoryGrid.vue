<template>
  <div class="category-grid-organism">
    <CategoryBox
      v-for="(cat, index) in categoryGrid"
      :key="index"
      :label="cat.label"
      :image="cat.image"
      :style="{ backgroundColor: cat.color }"
    />
  </div>
</template>

<script setup lang="ts">
import CategoryBox from '../Molecules/CategoryBox.vue'
import { useCategoriesStore } from '~/stores/categories';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const categoriesStore = useCategoriesStore();
const { categoryGrid } = storeToRefs(categoriesStore);

onMounted(() => {
    categoriesStore.fetchCategoryGrid();
});
</script>

<style scoped>
.category-grid-organism {
  /* Orijinal koddaki yerleşim stili */
  margin-top: -7rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding: 0 1rem 3rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 6 sütunlu grid */
  gap: 1.5rem 1.2rem;
  z-index: 2;
  position: relative;
}
/* Kategori kutularının mobil düzenlemesi bu seviyede eklenmelidir, ancak orijinal kodda yoktu. */
</style>
