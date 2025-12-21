<template>
  <div class="product-detail-page">
    <ProductDetailView />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ProductDetailView from '~/components/ProductDetailView.vue'
import { useProductsStore } from '~/stores/products'

const route = useRoute()
const productId = route.params.id as string
// The logic is mainly inside ProductDetailView now, but we can pre-fetch here if needed.
// For now, simpler is better to avoid duplicate fetches if ProductDetailView also fetches.
</script>

<style scoped>
.loading { padding: 50px; text-align: center; }
</style>
