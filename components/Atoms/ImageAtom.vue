<template>
  <img :src="src" :alt="alt" :class="['image-atom', type]" />
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  src: String,
  alt: String,
  // 'seller', 'product', 'payment-card', 'payment-gpay' gibi tipler
  type: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
/* Genel stil */
.image-atom {
  object-fit: contain;
  flex-shrink: 0;
}

/* Satıcı Logosu */
.image-atom.seller {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

/* Ürün Resmi */
.image-atom.product {
  width: 140px;
  height: 140px;
  border-radius: 6px;
  object-fit: cover;
}

/* Ödeme İkonları */
.image-atom.payment-card {
  height: 18px;
  max-width: 40px;
  margin-right: 0.3rem;
}

.image-atom.payment-gpay {
  /* GPay logosu diğerlerinden hafif büyük görünüyor */
  height: 20px;
  max-width: 40px;
  margin-right: 0.3rem;
}
</style>
