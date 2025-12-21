<template>
  <img :src="src" :alt="alt" class="product-image-atom" />
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  src: String,
  alt: String,
})
</script>

<style scoped>
.product-image-atom {
  width: 100%;
  height: auto;
  aspect-ratio: 4/3; /* Resimlerin yatay dikdörtgen olması varsayılır */
  object-fit: cover;
  display: block;
}
</style>
