<template>
  <img :src="src" :alt="alt" :class="['image-atom', type]" />
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  src: String,
  alt: String,
  type: { type: String, required: true },
})
</script>

<style scoped>
.image-atom {
  /* Varsayılan olarak tüm resimler için */
  display: block;
  width: 100%; /* Kapsayıcı genişliğini doldur */
  height: auto; /* Yüksekliği en-boy oranına göre otomatik ayarla */
  object-fit: cover; /* Kapsayıcıyı doldur, gerekirse kırp (ancak height: auto ile uzamaz) */
  border-radius: inherit; /* Kapsayıcının border-radius'unu devralır */
}

.image-atom.stockings {
  /* Specific override for stockings image */
  flex-grow: 1; /* Alana yayılsın */
  min-height: 180px; /* Çok küçülmesini engellemek için minimum yükseklik */
  max-height: 250px; /* Çok uzamasını engellemek için maksimum yükseklik */
  /* width: 100%; ve height: auto; yukarıda tanımlı, tekrar yazmaya gerek yok */
}

.image-atom.housewarming {
  /* Housewarming image, background gibi çalışır */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Kendi kapsayıcısı olan banner-box tarafından yönetilecek */
}

.image-atom.campaign-thumb {
  height: 150px; /* Kampanya görselleri için sabit yükseklik uygun */
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
</style>
