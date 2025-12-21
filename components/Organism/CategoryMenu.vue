<template>
  <div class="category-menu-container" ref="menuContainer">
    <!-- Trigger Button -->
    <button 
      class="cat-trigger-btn" 
      @click="toggleMenu" 
      :class="{ active: isOpen }"
      aria-label="Categories"
    >
      <span class="icon-wrap"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg></span>
      <span class="label">Categories</span>
    </button>

    <!-- Dropdown Overlay -->
    <div v-show="isOpen" class="category-dropdown">
      <!-- Left Column: Category List -->
      <div class="cat-sidebar">
        <ul class="cat-list">
          <li 
            v-for="cat in categories" 
            :key="cat.id" 
            @mouseenter="selectCategory(cat.id)"
            :class="{ active: selectedCatId === cat.id, 'recommended-item': cat.id === 'recommended' }"
          >
            <span class="cat-name-wrap">
                <span v-if="cat.id === 'recommended'" class="sparkle-icon">
                    <!-- 3-star sparkle icon matching Etsy's -->
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#f1641e" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L14.4 7.2H20L15.6 10.4L17.2 16L12 12.8L6.8 16L8.4 10.4L4 7.2H9.6L12 2Z" transform="scale(0.6) translate(6, 6)" />
                        <path d="M5 18L6 20L4 21L5 23L3 22L1 23L2 21L0 20L2 19L1 17L3 18L5 17L4 19L5 18Z" transform="translate(14, -10)" /> 
                        <path d="M16.5 6L17.5 9L20.5 9L18 11L19 14L16.5 12L14 14L15 11L12.5 9L15.5 9L16.5 6Z" fill="#f1641e" />
                        <path d="M5.5 11L6.5 13.5L9 13.5L7 15L7.5 17.5L5.5 16L3.5 17.5L4 15L2 13.5L4.5 13.5L5.5 11Z" fill="#f1641e" />
                        <path d="M10 16L10.7 17.8L12.5 17.8L11 19L11.5 20.8L10 19.8L8.5 20.8L9 19L7.5 17.8L9.3 17.8L10 16Z" fill="#f1641e" />
                    </svg>
                </span>
                {{ cat.name }}
            </span>
            <span class="arrow">›</span>
          </li>
        </ul>
      </div>

      <!-- Right Column: Visual Content -->
      <div class="cat-content">
        <div class="content-header" v-if="activeCategory">
            <h3>{{ activeCategory.id === 'recommended' ? 'Recommended categories' : 'All ' + activeCategory.name }} <span class="header-arrow">→</span></h3>
        </div>
        
        <div class="cat-grid">
          <div 
            v-for="item in activeCategoryContent" 
            :key="item.title" 
            class="cat-grid-item"
          >
            <div class="img-wrap">
               <img :src="item.image" :alt="item.title" loading="lazy" />
            </div>
            <span class="item-title">{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <div v-if="isOpen" class="click-overlay" @click="closeMenu"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

import { useCategoriesStore } from '~/stores/categories';
import { storeToRefs } from 'pinia';

const isOpen = ref(false)
const selectedCatId = ref('recommended')
const menuContainer = ref<HTMLElement | null>(null)



const categoriesStore = useCategoriesStore();
const { megaMenuCategories } = storeToRefs(categoriesStore);

// Use the store data for categories list
const categories = computed(() => megaMenuCategories.value.map(cat => ({
    id: cat.id,
    name: cat.name
})));

const activeCategory = computed(() => megaMenuCategories.value.find((c: any) => c.id === selectedCatId.value))
// contentMap is no longer needed as content is embedded in the category object
const activeCategoryContent = computed(() => {
    const cat = activeCategory.value;
    if (cat && cat.content && cat.content.length > 0) {
        return cat.content;
    }
    // Fallback content if empty (can be removed later or replaced with generic placeholders)
    return [
        { title: 'Subcategory 1', image: 'https://picsum.photos/300/300?random=1' },
        { title: 'Subcategory 2', image: 'https://picsum.photos/300/300?random=2' },
         { title: 'Subcategory 3', image: 'https://picsum.photos/300/300?random=3' },
         { title: 'Subcategory 4', image: 'https://picsum.photos/300/300?random=4' }
    ];
});

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
    categoriesStore.fetchMegaMenu();
})

const toggleMenu = () => { isOpen.value = !isOpen.value }
const selectCategory = (id: string) => { selectedCatId.value = id }
const closeMenu = () => { isOpen.value = false }

const handleClickOutside = (event: MouseEvent) => {
  if (menuContainer.value && !menuContainer.value.contains(event.target as Node)) {
    closeMenu()
  }
}

onMounted(() => { document.addEventListener('click', handleClickOutside) })
onUnmounted(() => { document.removeEventListener('click', handleClickOutside) })

</script>

<style scoped>
/* Previous container/button styles remain similar */
.category-menu-container { position: relative; }
.cat-trigger-btn { display: flex; align-items: center; gap: 6px; background: none; border: none; cursor: pointer; padding: 8px 12px; border-radius: 24px; transition: background 0.2s; color: #222; }
.cat-trigger-btn:hover, .cat-trigger-btn.active { background: #f1f1f1; }
.label { font-size: 0.95rem; font-weight: 500; }

.category-dropdown {
    position: absolute; top: 100%; left: 0; margin-top: 12px;
    background: white; box-shadow: 0 4px 20px rgba(0,0,0,0.15); border-radius: 16px;
    display: flex; width: 800px; height: 500px; z-index: 1000; overflow: hidden; border: 1px solid #e1e3df;
}

.cat-sidebar {
    width: 280px; background: #f7f7f7; padding: 12px 0; flex-shrink: 0;
    overflow-y: auto; border-right: 1px solid #e1e3df;
}

/* Sidebar styling improvements */
.cat-list li {
    padding: 12px 24px; 
    cursor: pointer; 
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    font-size: 0.95rem; 
    color: #222; /* Very dark grey/black, softer than #000 but standard */
    font-weight: 400; /* Regular by default */
    -webkit-font-smoothing: antialiased;
    transition: background 0.2s;
    line-height: 1.4;
}

/* Make keys specific to override or ensure application */
.cat-list li span {
    color: #000; /* Force pure black */
    font-weight: 450; /* Slightly bolder than normal if supported, else 500 */
}

/* Fallback if 450 not supported well, use 500 for a clear 'bold' look if user insists on 'koyu' */
@supports (font-weight: 500) {
    .cat-list li span {
        font-weight: 500;
    }
}

.cat-list li:hover, .cat-list li.active {
    background: #e6e6e6; 
    /* color remains black */
}

/* Active state explicitly bold */
.cat-list li.active span {
    font-weight: 600;
}

.cat-name-wrap {
    display: flex; align-items: center; gap: 8px;
}

.sparkle-icon {
    display: flex; align-items: center; color: #f1641e; /* Etsy orange */
}

.arrow { font-size: 1.2rem; color: #222; font-weight: bold; }

.cat-content { flex: 1; padding: 32px; background: white; overflow-y: auto; }
.content-header h3 { margin-top: 0; margin-bottom: 1.5rem; font-size: 1.1rem; font-weight: 700; color: #222; display: flex; align-items: center; gap: 8px; }

/* Grid etc remains similar */
.cat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.cat-grid-item { cursor: pointer; display: flex; flex-direction: column; gap: 12px; align-items: center; }
.img-wrap { width: 100%; aspect-ratio: 1; border-radius: 12px; overflow: hidden; background: #f4f4f4; }
.img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease; }
.cat-grid-item:hover .img-wrap img { transform: scale(1.05); }
.item-title { font-size: 0.9rem; font-weight: 600; color: #222; text-align: center; line-height: 1.3; }

.click-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 999; cursor: default; background: transparent; }
</style>
