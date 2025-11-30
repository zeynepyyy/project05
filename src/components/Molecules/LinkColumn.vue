<template>
  <div class="link-column-molecule">
    <Heading>{{ title }}</Heading>
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
// Atomu import edin
import Heading from '../Atoms/HeadingAdd.vue'

const props = defineProps({
  title: String,
})
</script>

<style scoped>
.link-column-molecule {
  display: flex;
  flex-direction: column;
  /* Atomlar arasındaki dikey boşluk */
  gap: 1.5rem;
  min-width: 130px;
}
</style>
