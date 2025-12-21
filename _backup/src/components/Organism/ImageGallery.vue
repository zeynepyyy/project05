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
import { ref } from 'vue'
// Atomları import edin
import ImageAtom from '../Atoms/ImageAtomm.vue'
import ActionButton from '../Atoms/ActionButtonn.vue'
// Molekülü import edin
import ThumbnailItem from '../Molecules/ThumbnailItem.vue'

// --- Reaktif Veriler ---
const initialMainImage =
  'https://i.etsystatic.com/18623087/r/il/da56c2/7284004899/il_1588xN.7284004899_mhel.jpg'
const mainImage = ref(initialMainImage)

const thumbnails = [
  'https://i.etsystatic.com/18623087/r/il/6e7c15/7236040934/il_1588xN.7236040934_291h.jpg',
  initialMainImage,
  'https://i.etsystatic.com/18623087/r/il/cc480d/7284004507/il_1588xN.7284004507_dfd3.jpg',
  'https://i.etsystatic.com/18623087/r/il/2c86f2/7284004507/il_1588xN.7284004507_dfd3.jpg',
  'https://i.etsystatic.com/18623087/r/il/e48320/7236040140/il_1588xN.7236040140_l67e.jpg',
]

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
</style>
