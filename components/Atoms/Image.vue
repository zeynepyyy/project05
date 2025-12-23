<template>
  <img :src="src" :alt="alt" :class="['image-atom', type]" />
</template>

<script setup lang="ts">


const props = defineProps({
  src: String,
  alt: String,
  // 'category' veya 'product'
  type: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.image-atom {
  object-fit: cover;
}

.image-atom.category {
  width: 100%;
  height: 100%;
}

.image-atom.product {
  width: 100%;
  height: 120px;
  border-radius: 8px;
}
</style>
