<template>
  <div class="static-header-molecule">
    <Heading class="slider-title">Etsy-special gifts<br />for Christmas</Heading>
    <PrimaryButton>Get inspired</PrimaryButton>
  </div>
</template>

<script setup lang="ts">
import Heading from '../Atoms/Heading.vue'
import PrimaryButton from '../Atoms/PrimaryButtonn.vue'
</script>

<style scoped>
.static-header-molecule {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* Dış yerleşim Organizma'da yönetilir */
}
</style>
