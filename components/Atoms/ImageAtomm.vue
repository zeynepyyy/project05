<template>
  <img :src="src" :alt="alt" :class="['image-atom', type]" />
</template>

<script setup lang="ts">


const props = defineProps({
  src: String,
  alt: String,
  // 'thumbnail', 'main-product', 'seller-logo', 'star-badge'
  type: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
/* Genel stil */
.image-atom {
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 6px; /* Genel yuvarlaklık */
}

/* Thumbnail */
.image-atom.thumbnail {
  width: 100%;
  height: 100%;
}

/* Ana Ürün Resmi */
.image-atom.main-product {
  width: 100%;
  height: auto;
  aspect-ratio: 3/4;
}

/* Seller Logos ve Rozetler */
.image-atom.seller-logo {
  width: 30px;
  height: 30px;
  object-fit: contain;
}
.image-atom.star-badge {
  width: 45px;
  height: 45px;
  object-fit: contain;
}
</style>
