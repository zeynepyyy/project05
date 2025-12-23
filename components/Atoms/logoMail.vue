<template>
  <img :src="src" :alt="alt" :class="['base-logo', type]" />
</template>

<script setup lang="ts">


const props = defineProps({
  src: String,
  alt: String,
  // 'etsy', 'electric' gibi tipler tanımlanabilir.
  type: {
    type: String,
    default: 'etsy',
  },
})
</script>

<style scoped>
.base-logo.electric {
  height: 32px;
  width: auto;
  object-fit: contain;
  margin-right: 0.5rem;
}

.base-logo.etsy {
  height: 25px;
  filter: brightness(0) invert(1); /* Beyaz logo için */
  object-fit: contain;
}
</style>
