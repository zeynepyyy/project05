<template>
  <div class="category-box-molecule">
    <ImageAtom :src="image" :alt="label" />

    <LabelLink>
      {{ label }}
    </LabelLink>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import ImageAtom from '../Atoms/ImageAtomH.vue'
import LabelLink from '../Atoms/LabelLinkH.vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  // Color prop'u burada kullanılmıyor, ancak gelecekteki stil ayarlamaları için taşınabilir.
  color: String,
})
</script>

<style scoped>
.category-box-molecule {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
}

.category-box-molecule:hover :deep(.category-icon-atom) {
  /* Hover efekti eklenebilir, örneğin scale(1.05) */
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

/* Category icon stilinin büyük kısmı ImageAtom'da (01-Atoms) yönetilir. */
</style>
