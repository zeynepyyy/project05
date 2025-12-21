<template>
  <div class="product-slider-section-organism">
    <div class="product-slider-container">
      <div class="product-slider-track">
        <ProductCard
          v-for="(item, index) in products"
          :key="'prod-' + index"
          :title="item.title"
          :image="item.image"
          :price="item.price"
          :is-zoomed="zoomedProductIndex === index"
          @toggle-zoom="toggleZoomProduct(index)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// Molekülü import edin
import ProductCard from '../Molecules/ProductCard.vue'

// --- VERİ TİPLERİ VE VERİLER ---

interface Product {
  title: string
  image: string
  price: string
}

// Reaktif Durum
const zoomedProductIndex = ref<number | null>(null)

// Ürünler (URL'ler TAMAMLANDI)
const products: Product[] = [
  {
    title: 'Mini Gift Set',
    image:
      'https://i.etsystatic.com/54575788/c/864/864/136/164/il/ff155e/7353852192/il_600x600.7353852192_9vbp.jpg',
    price: '6.634,21',
  },
  {
    title: 'Festive Decor',
    image:
      'https://i.etsystatic.com/8477449/c/2000/2000/643/0/il/4cec17/7295298735/il_600x600.7295298735_7czv.jpg',
    price: '2.609,28',
  },
  {
    title: 'Green Ornament',
    image:
      'https://i.etsystatic.com/56976989/r/il/3faf5c/7278455078/il_600x600.7278455078_14f8.jpg',
    price: '1.562,36',
  },
  {
    title: 'Deer Stocking',
    image:
      'https://i.etsystatic.com/16873668/r/il/fa9726/7401208470/il_600x600.7401208470_dkhj.jpg',
    price: '1.892,70',
  },
  {
    title: 'Winter Mug',
    image:
      'https://i.etsystatic.com/35779714/r/il/22e877/7318630466/il_600x600.7318630466_mtin.jpg',
    price: '881,07',
  },
  {
    title: 'Cozy Blanket',
    image: 'https://i.etsystatic.com/8533091/r/il/7907af/7344629785/il_600x600.7344629785_sd4y.jpg',
    price: '5.481,64',
  },
]

const toggleZoomProduct = (index: number) => {
  zoomedProductIndex.value = zoomedProductIndex.value === index ? null : index
}
</script>

<style scoped>
/* Daha önceki CSS stilleri... */
.product-slider-section-organism {
  padding-top: 1rem;
}
.product-slider-container {
  overflow-x: auto;
  padding-bottom: 1rem;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.product-slider-container::-webkit-scrollbar {
  display: none;
}
.product-slider-track {
  display: flex;
  gap: 1rem;
  min-width: max-content;
}
</style>
