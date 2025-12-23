<template>
  <div class="card-info-molecule">
    <h4 class="product-title">{{ title }}</h4>
    <p class="product-seller">
      {{ seller }}
    </p>
    <p class="product-price">{{ price }} TL</p>
  </div>
</template>

<script setup lang="ts">


const props = defineProps({
  title: String,
  seller: String,
  price: String,
})
</script>

<style scoped>
.card-info-molecule {
  padding: 1rem;
  text-align: left;
}

.product-title {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
  color: #333;
  margin-top: 0;
}

.product-seller {
  font-size: 0.85rem;
  color: #777;
  margin-bottom: 0.5rem;
  margin-top: 0;
}

.product-price {
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.8rem;
  margin-top: 0;
}
</style>
