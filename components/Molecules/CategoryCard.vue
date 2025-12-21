<template>
  <div class="category-card-molecule" @click="$emit('toggleZoom')" :class="{ zoomed: isZoomed }">
    <Image :src="image" :alt="title" type="category" />
    <Label>{{ title }}</Label>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import Image from '../Atoms/Image.vue'
import Label from '../Atoms/LabelApp.vue'

const props = defineProps({
  title: String,
  image: String,
  isZoomed: Boolean,
})

defineEmits(['toggleZoom'])
</script>

<style scoped>
.category-card-molecule {
  flex: 0 0 auto;
  width: 200px;
  height: 200px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

/* BÜYÜTME (ZOOM) EFEKTİ STİLİ */
.category-card-molecule.zoomed {
  transform: scale(1.05);
  z-index: 10;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}
</style>
