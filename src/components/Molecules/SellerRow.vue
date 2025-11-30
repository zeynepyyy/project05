<template>
  <div class="seller-row-molecule">
    <ImageAtom
      src="https://i.etsystatic.com/5870358/r/isla/55bed6/16016837/isla_75x75.16016837_g1wersdj.jpg"
      alt="Seller logo"
      type="seller"
    />

    <span class="shop-name">
      rennadeluxe
      <span class="star-icon">★</span>
      <span class="rating-text">4.9 (2.4k)</span>
    </span>

    <span class="dots">...</span>
  </div>
</template>

<script setup>
import ImageAtom from '../Atoms/ImageAtom.vue'
</script>

<style scoped>
.seller-row-molecule {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #e1e3e8;
  position: relative;
}

.shop-name {
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
  display: flex;
  gap: 0.25rem;
}

.star-icon {
  color: #ffc107; /* Sarı yıldız */
  font-size: 0.9rem;
  line-height: 1;
}

.rating-text {
  font-weight: normal;
  color: #666;
}

.dots {
  position: absolute;
  right: 0;
  font-size: 1.5rem;
  line-height: 0.5;
  color: #222;
  cursor: pointer;
}
</style>
