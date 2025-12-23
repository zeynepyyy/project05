<template>
  <img :src="imageSrc" :alt="alt" class="product-image-atom" @error="handleError" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
  src: String,
  alt: String,
})

const imageSrc = ref(props.src || '/cart-main-item.jpg')

watch(() => props.src, (newVal) => {
    imageSrc.value = newVal || '/cart-main-item.jpg'
})

const handleError = (e) => {
    e.target.src = '/cart-main-item.jpg'
}
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
