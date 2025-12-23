<template>
  <div class="product-card-molecule" @click="$emit('toggleZoom')" :class="{ zoomed: isZoomed }">
    <Image :src="image" :alt="title" type="product" />
    <PriceLabel>{{ price }} TL</PriceLabel>
  </div>
</template>

<script setup lang="ts">

import Image from '../Atoms/Image.vue'
import PriceLabel from '../Atoms/PriceLabel.vue'

const props = defineProps({
  title: String,
  image: String,
  price: String,
  isZoomed: Boolean,
})

defineEmits(['toggleZoom'])
</script>

<style scoped>
.product-card-molecule {
  flex: 0 0 auto;
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

/* BÜYÜTME (ZOOM) EFEKTİ STİLİ */
.product-card-molecule.zoomed {
  transform: scale(1.1);
  z-index: 10;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}
</style>
