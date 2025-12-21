<template>
  <div class="image-gallery-organism">
    <div class="thumbnail-list">
      <ThumbnailItem
        v-for="url in thumbnails"
        :key="url"
        :src="url.replace('1588xN', '75x75')"
        :alt="'Thumbnail ' + url"
        :is-active="url === mainImage"
        @select-image="selectImage(url)"
      />
    </div>

    <div class="main-image-container">
      <div class="bestseller-badge">⭐ Bestseller</div>

      <ImageAtom
        class="product-image"
        :src="mainImage"
        alt="Personalized Mini Christmas Stockings"
        type="main-product"
      />
      
      <button class="favorite-overlay-btn" aria-label="Add to favorites">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="white" stroke="#222" stroke-width="2"/></svg>
      </button>

      <ActionButton type="nav" class="image-nav prev-nav" aria-label="Önceki resim">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </ActionButton>
      <ActionButton type="nav" class="image-nav next-nav" aria-label="Sonraki resim">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </ActionButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import ImageAtom from '../Atoms/ImageAtomm.vue'
import ActionButton from '../Atoms/ActionButtonn.vue'
import ThumbnailItem from '../Molecules/ThumbnailItem.vue'

const props = defineProps({
  product: {
    type: Object,
    default: null
  }
});

const mainImage = ref('');

// Watch for product changes to update image
watch(() => props.product, (newProduct) => {
    if (newProduct) {
        // Handle both 'image' (from seed) and 'imageUrl' (from type)
        mainImage.value = newProduct.image || newProduct.imageUrl || 'https://via.placeholder.com/600';
    }
}, { immediate: true });

// Determine thumbnails. If product has gallery, use it. Otherwise just main image.
const thumbnails = computed(() => {
    if (!props.product) return [];
    
    // If we had a gallery array in product data, we'd use it here.
    // For now, generate some variations or just show main image repeated/placeholder if no gallery
    const img = props.product.image || props.product.imageUrl || 'https://via.placeholder.com/600';
    return [
       img, 
       img, // Placeholder duplicates to simulate gallery for now as seed data only has 1 image
       img 
    ];
});

const selectImage = (url: string) => {
  mainImage.value = url
}
</script>

<style scoped>
.image-gallery-organism {
  display: flex;
  gap: 10px;
}

.thumbnail-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.main-image-container {
  flex-grow: 1;
  position: relative;
}

.bestseller-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #e6a700;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 10;
}

/* Gezinme butonlarının yerleşimi */
.image-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
.prev-nav {
  left: 5px;
}
.next-nav {
  right: 5px;
}
.image-nav :deep(svg) {
  /* İkon rengini ayarla */
  width: 20px;
  height: 20px;
  stroke: #555;
}

.favorite-overlay-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: white;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    transition: transform 0.2s;
    box-shadow: 0 2px 5px rgba(0,0,0,0.15);
}

.favorite-overlay-btn:hover {
    transform: scale(1.1);
}

.favorite-overlay-btn svg {
    /* Using stroke and fill within SVG directly or override here */
    transform: translateY(1px); /* optical adjustment */
}</style>
