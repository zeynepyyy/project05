<template>
  <div class="seller-badge-info-molecule">
    <ImageAtom src="/seller.png" alt="Star Seller Rozeti" type="star-badge" />
    <p>
      Star Seller. This seller consistently earned 5-star reviews, shipped on time, and replied
      quickly to any messages they received.
    </p>
  </div>
</template>

<script setup>
import ImageAtom from '../Atoms/ImageAtomm.vue'
</script>

<style scoped>
.seller-badge-info-molecule {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 1rem;
}

.seller-badge-info-molecule p {
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.5;
}
</style>
