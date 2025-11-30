<template>
  <img :src="src" :alt="alt" class="category-icon-atom" />
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  src: String,
  alt: String,
})
</script>

<style scoped>
.category-icon-atom {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  transform: scale(1);
  border: none;
  background-color: transparent;
  flex-shrink: 0;
}
</style>
