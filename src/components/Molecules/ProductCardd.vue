<template>
  <div class="product-card-molecule">
    <ProductImage :src="image" :alt="title" />

    <CardInfo :title="title" :seller="seller" :price="price" />

    <div class="button-wrapper">
      <AddToCartButton>Add to cart</AddToCartButton>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import ProductImage from '../Atoms/ProductImage.vue'
import CardInfo from './CardInfo.vue'
import AddToCartButton from '../Atoms/AddToCartButton.vue'

const props = defineProps({
  title: String,
  seller: String,
  price: String,
  image: String,
})
</script>

<style scoped>
.product-card-molecule {
  /* Genişlik organizmada ayarlanacak (slider için) */
  flex: 0 0 auto;
  width: 250px; /* Ön tanımlı genişlik */

  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease;
}

.product-card-molecule:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.button-wrapper {
  padding: 0 1rem 1rem;
}
</style>
