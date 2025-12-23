<template>
  <button :class="['header-button-atom', type]" :aria-label="ariaLabel">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">


const props = defineProps({
  // 'category' veya 'search'
  type: {
    type: String,
    required: true,
  },
  ariaLabel: String,
})
</script>

<style scoped>
.header-button-atom {
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  flex-shrink: 0;
}

/* Kategori Butonu Stili */
.header-button-atom.category {
  background: none;
  padding: 0.3rem;
  /* İkon rengi BaseIcon tarafından yönetilir */
}

/* Arama Butonu Stili */
.header-button-atom.search {
  background-color: #f1641e; /* Turuncu renk */
  border-radius: 50%;
  padding: 0.4rem;
  color: white;
}
/* Arama butonu içindeki ikonu beyaz yapar */
.header-button-atom.search :deep(svg) {
  color: white;
}
</style>
