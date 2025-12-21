<template>
  <div class="product-slider-organism">
    <div class="product-slider-track">
      <ProductCard
        v-for="(product, index) in products"
        :key="index"
        :title="product.title"
        :seller="product.seller"
        :price="product.price"
        :image="product.image"
      />
    </div>
  </div>
</template>

<script setup>
import ProductCard from '../Molecules/ProductCardd.vue'
import { defineProps } from 'vue'

const props = defineProps({
  products: Array,
})
</script>

<style scoped>
.product-slider-organism {
  /* Slider görünürlüğü için scrollbar ayarları */
  overflow-x: auto;
  padding-bottom: 1rem;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.product-slider-organism::-webkit-scrollbar {
  display: none;
}

.product-slider-track {
  display: flex;
  /* Tüm kartları tek satırda tutar, kaydırma sağlar */
  gap: 2rem;
  min-width: max-content;
}
/* ProductCard genişliğini burada geçersiz kılmak gerekebilir: .product-slider-track > :deep(.product-card-molecule) { width: 220px; } */
</style>
