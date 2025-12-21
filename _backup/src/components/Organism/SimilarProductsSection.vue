<template>
  <div class="similar-products-section-organism">
    <SectionTitle>Benzer Ürünler</SectionTitle>

    <ProductSlider :products="productsData" />
  </div>
</template>

<script setup>
import SectionTitle from '../Atoms/SectionTitle.vue'
import ProductSlider from './ProductSlider.vue'

// Statik Veri (Orijinal kodunuzdan)
const productsData = [
  {
    title: 'Advent Calendar Kraft Bags',
    seller: 'Rennadeluxe',
    price: '660.31',
    image: 'https://i.etsystatic.com/5870358/r/il/472f95/2031335845/il_1588xN.2031335845_hh91.jpg',
  },
  {
    title: 'Advent Calendar White Bags',
    seller: 'Rennadeluxe',
    price: '865.06',
    image: 'https://i.etsystatic.com/5870358/r/il/a32d55/857679200/il_1588xN.857679200_iuaw.jpg',
  },
  {
    title: 'Advent Calendar Hanging Set',
    seller: 'Rennadeluxe',
    price: '762.68',
    image: 'https://i.etsystatic.com/5870358/r/il/942bd9/2031336451/il_1588xN.2031336451_4k2g.jpg',
  },
  {
    title: 'Star Garland Gold Paper',
    seller: 'Rennadeluxe',
    price: '455.56',
    image: 'https://i.etsystatic.com/5870358/r/il/80aaba/2715635591/il_1588xN.2715635591_mjcw.jpg',
  },
  {
    title: 'Advent Calendar Tree Shape',
    seller: 'Rennadeluxe',
    price: '660.31',
    image: 'https://i.etsystatic.com/5870358/r/il/10246a/1983775606/il_1588xN.1983775606_kjxq.jpg',
  },
]
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
