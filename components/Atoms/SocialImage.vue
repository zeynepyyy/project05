<template>
  <img :src="src" :alt="alt" class="social-image-atom" />
</template>

<script setup lang="ts">


const props = defineProps({
  src: String,
  alt: String,
})
</script>

<style scoped>
.social-image-atom {
  height: 18px;
  width: 18px;
  object-fit: contain;
  flex-shrink: 0;
}
</style>
