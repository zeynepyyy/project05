<template>
  <div class="category-grid-organism">
    <CategoryBox
      v-for="(cat, index) in categories"
      :key="index"
      :label="cat.label"
      :image="cat.image"
      :style="{ backgroundColor: cat.color }"
    />
  </div>
</template>

<script setup lang="ts">
import CategoryBox from '../Molecules/CategoryBox.vue'

// Statik veri yapısı (Orijinal kodunuzdan)
const categories = [
  {
    label: 'Personalized Gifts',
    image: 'https://i.etsystatic.com/53277887/r/il/7142df/6463600074/il_1588xN.6463600074_2mu1.jpg',
    color: '#e2b9ac',
  },
  {
    label: 'Home Favorites',
    image: 'https://i.etsystatic.com/29939306/r/il/43f48f/4790454723/il_1588xN.4790454723_pvli.jpg',
    color: '#34453b',
  },
  {
    label: 'Gifts for Him',
    image: 'https://i.etsystatic.com/20703183/r/il/19680f/1983859144/il_1588xN.1983859144_3kq2.jpg',
    color: '#c29294',
  },
  {
    label: 'Gifts for Her',
    image: 'https://i.etsystatic.com/52857619/r/il/60f9f2/7166954500/il_1588xN.7166954500_bp4p.jpg',
    color: '#add0d9',
  },
  {
    label: 'Gifts for Kids',
    image: 'https://i.etsystatic.com/38647663/r/il/829cda/7203411288/il_1588xN.7203411288_2sm6.jpg',
    color: '#f8d975',
  },
  {
    label: 'Gifts for Pets',
    image: 'https://i.etsystatic.com/50965305/r/il/1bdd88/6311593238/il_1588xN.6311593238_sloi.jpg',
    color: '#34453b',
  },
  {
    label: 'Advent Calendars',
    image: 'https://i.etsystatic.com/23687003/r/il/c1ea9a/7151743923/il_1588xN.7151743923_5kuh.jpg',
    color: '#f8e0d4',
  },
  {
    label: 'Style Favorites',
    image: 'https://i.etsystatic.com/7247368/r/il/84e7fc/7349182151/il_1588xN.7349182151_h2xj.jpg',
    color: '#5d7d8e',
  },
  {
    label: 'Personalized Jewelry',
    image: 'https://i.etsystatic.com/52535302/r/il/1dd546/6629509874/il_1588xN.6629509874_cv37.jpg',
    color: '#8b1e3e',
  },
  {
    label: 'Festive Ornaments',
    image: 'https://i.etsystatic.com/55130754/r/il/554353/7442565157/il_1588xN.7442565157_jzdv.jpg',
    color: '#f0e0e8',
  },
  {
    label: 'Holiday Hosting',
    image: 'https://i.etsystatic.com/63143923/r/il/b52601/7416651316/il_1588xN.7416651316_g54o.jpg',
    color: '#8b1e3e',
  },
  {
    label: 'Special Local Finds',
    image: 'https://i.etsystatic.com/40021387/r/il/43db31/5148853302/il_1588xN.5148853302_pnen.jpg',
    color: '#83a793',
  },
]
</script>

<style scoped>
.category-grid-organism {
  /* Orijinal koddaki yerleşim stili */
  margin-top: -7rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding: 0 1rem 3rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 6 sütunlu grid */
  gap: 1.5rem 1.2rem;
  z-index: 2;
  position: relative;
}
/* Kategori kutularının mobil düzenlemesi bu seviyede eklenmelidir, ancak orijinal kodda yoktu. */
</style>
