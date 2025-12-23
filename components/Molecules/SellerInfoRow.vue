<template>
  <div class="seller-info-row-molecule">
    <a href="#" class="seller-name">CrazyforDolls</a>
    <ImageAtom src="/sellerlogo.png" alt="Seller Logo" type="seller-logo" />
    <div class="rating-stars">★★★★★</div>
  </div>
</template>

<script setup lang="ts">
import ImageAtom from '../Atoms/ImageAtomm.vue'
</script>

<style scoped>
.seller-info-row-molecule {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 0.5rem;
}

.seller-name {
  font-size: 0.9rem;
  color: #222;
  text-decoration: none;
}

.rating-stars {
  color: #222;
  font-size: 1rem;
}
</style>
