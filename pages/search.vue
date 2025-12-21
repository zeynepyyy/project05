<template>
  <div class="search-page-container">
    <!-- Top Filter Row -->
    <FilterRow @toggleFilters="toggleFilters" />
    
    <div class="search-layout">
        <!-- LEFT SIDEBAR (Conditional) -->
        <transition name="slide-fade">
            <aside class="sidebar-area" v-if="showFilters">
                <FilterSidebar />
            </aside>
        </transition>

        <!-- MAIN CONTENT -->
        <main class="content-area">
            <div class="results-header-row" v-if="searchQuery">
                <h1>Results for "{{ searchQuery }}"</h1>
                <div class="sort-options">
                    <span class="item-count">{{ filteredProducts.length }} results</span>
                    <button class="sort-btn">Sort by: Relevancy</button>
                </div>
            </div>

            <div v-if="loading" class="loading">Loading...</div>
            <div v-else-if="filteredProducts.length === 0" class="no-results">
                No products found for this category.
            </div>
            
            <div v-else class="products-grid">
                <ProductCard
                    v-for="product in filteredProducts"
                    :key="product.id"
                    :id="product.id"
                    :title="product.title"
                    :seller="product.category || 'Seller'"
                    :price="product.price"
                    :image="product.imageUrl"
                />
            </div>
        </main>
    </div>
    
    <CustomizableIdeas />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useProductsStore } from '~/stores/products'
import ProductCard from '~/components/Molecules/ProductCardd.vue'
import FilterSidebar from '~/components/Organism/FilterSidebar.vue'
import FilterRow from '~/components/Organism/FilterRow.vue'
import CustomizableIdeas from '~/components/Organism/CustomizableIdeas.vue'
import type { Product } from '~/types'

const route = useRoute()
const productStore = useProductsStore()
const searchQuery = computed(() => route.query.q as string || '')

const loading = computed(() => productStore.loading)
const showFilters = ref(false) // Default closed as per user description

const toggleFilters = () => {
    showFilters.value = !showFilters.value
}

// Simple client-side filtering for demo purposes
// In a real app, you might query Firestore with 'where' clause
const filteredProducts = computed(() => {
    if (!searchQuery.value) return productStore.items;
    const q = searchQuery.value.toLowerCase();
    
    return productStore.items.filter(p => {
        const cat = p.category ? p.category.toLowerCase() : '';
        const title = p.title ? p.title.toLowerCase() : '';
        return cat.includes(q) || title.includes(q);
    });
})

onMounted(() => {
    if (productStore.items.length === 0) {
        productStore.fetchProducts()
    }
})

definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
.search-page-container {
    max-width: 1400px; /* Wider for sidebar layout */
    margin: 2rem auto;
    padding: 0 2rem;
    min-height: 80vh;
}

.search-layout {
    display: flex;
    gap: 2rem;
    margin-bottom: 4rem;
    align-items: flex-start; /* Align top */
}

.sidebar-area {
    width: 260px;
    flex-shrink: 0;
}

/* Transition effects */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

.content-area {
    flex: 1;
}

.results-header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}

h1 {
    font-size: 1.2rem;
    font-weight: 500;
    color: #222;
}

.sort-options {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.9rem;
}

.item-count {
    color: #595959;
}

.sort-btn {
    background: none;
    border: none;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Responsive grid */
    gap: 1.5rem;
}

.no-results, .loading {
    text-align: center;
    color: #666;
    margin-top: 3rem;
}
</style>
