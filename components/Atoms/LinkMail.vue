<template>
  <a :href="href" class="base-link">
    <slot></slot>
  </a>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  href: {
    type: String,
    default: '#',
  },
})
</script>

<style scoped>
.base-link {
  color: white;
  text-decoration: none;
  font-size: 0.85rem;
  transition: text-decoration 0.2s;
}

.base-link:hover {
  text-decoration: underline;
}
</style>
