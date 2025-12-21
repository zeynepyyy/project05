<template>
  <div class="housewarming-banner-molecule">
    <ImageAtom :src="housewarmingImageUrl" alt="Housewarming Gifts" type="housewarming" />
    <div class="housewarming-overlay">
      <Heading type="housewarming" :level="2">Housewarming Gifts</Heading>
      <Paragraph type="housewarming-shop">Shop now</Paragraph>
    </div>
  </div>
</template>

<script setup>
import Heading from '../Atoms/HeadingD.vue'
import Paragraph from '../Atoms/ParagraphD.vue'
import ImageAtom from '../Atoms/ImageAtomD.vue'

const housewarmingImageUrl =
  'https://i.etsystatic.com/17199997/r/il/d1f3ca/6351705675/il_600x600.6351705675_b4pb.jpg'
</script>

<style scoped>
.housewarming-banner-molecule {
  flex: 1;
  max-width: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;

  /* YÜKSEKLİĞİ SABİTLE: Görselin uzamasını engeller */
  height: 250px; /* Sabit yükseklik verildi */
  min-height: 200px; /* Daha küçük ekranlarda minimum yükseklik */
  max-height: 250px; /* Maksimum yükseklik */
}

/* ... (diğer stiller) ... */
</style>
