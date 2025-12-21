<template>
  <div class="similar-products-section-organism">
    <SectionTitle>Benzer Ürünler</SectionTitle>

    <ProductSlider :products="productStore.items" />
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '../Atoms/SectionTitle.vue'
import ProductSlider from './ProductSlider.vue'
import { useProductsStore } from '~/stores/products'
import { onMounted } from 'vue'

const productStore = useProductsStore()

onMounted(() => {
    productStore.fetchProducts()
})
</script>

<style scoped>
.similar-products-section-organism {
  padding: 2rem 1rem;
  background-color: #fff;
  font-family: 'Segoe UI', sans-serif;
  color: #333;
  /* Tüm bölüm stilini içerir */
}
</style>
