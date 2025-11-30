<template>
  <div class="deal-banner-molecule">
    <div class="deal-content">
      <Heading type="deal" :level="1">Don't miss today's deal</Heading>
      <Paragraph type="deal-subtext">
        Get up to 50% off stockings right<br />now for our 7 Days of Deals event
      </Paragraph>
      <ActionButton type="act-fast">Act fast</ActionButton>
      <Paragraph type="seller-offer"
        >Offer at sellers' discretion. See shops for details.</Paragraph
      >
    </div>

    <ImageAtom :src="stockingsImageUrl" alt="Christmas Stockings" type="stockings" />
  </div>
</template>

<script setup>
// <script setup>
import Heading from '../Atoms/HeadingD.vue'
import Paragraph from '../Atoms/ParagraphD.vue'
import ActionButton from '../Atoms/ActionButtonD.vue'
import ImageAtom from '../Atoms/ImageAtomD.vue'

// Görsel URL'si (Organizmadan veya dışarıdan gelir, burada temsil amaçlı sabit tutulur)
const stockingsImageUrl =
  'https://i.etsystatic.com/9493132/r/il/170dad/7245003621/il_fullxfull.7245003621_qidd.jpg'
</script>
... (script kısmı aynı) ...

<style scoped>
.deal-banner-molecule {
  display: flex;
  flex: 2;
  max-width: 780px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #384124;

  /* YÜKSEKLİĞİ SABİTLE: Metin ve görselin aşırı uzamasını engeller */
  height: 250px; /* Sabit yükseklik verildi */
  min-height: 200px; /* Daha küçük ekranlarda minimum yükseklik */
  max-height: 250px; /* Maksimum yükseklik */

  align-items: stretch; /* İçeriklerin dikeyde uzamasını sağlar */
}

.deal-content {
  flex: 1.8;
  padding: 1.5rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  /* Yüksekliği bu alana göre ayarlar, görsel de buna uyacak */
}
</style>
