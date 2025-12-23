<template>
  <p :class="['base-paragraph', type]">
    <slot></slot>
  </p>
</template>

<script setup lang="ts">


const props = defineProps({
  // 'subscribe-text' veya 'footer-message'
  type: String,
})
</script>

<style scoped>
.base-paragraph {
  margin: 0;
  padding: 0;
}

/* Abonelik Metni Stili */
.base-paragraph.subscribe-text {
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.4;
  color: #333; /* Açık mavi arka plan üzerinde koyu metin */
}

/* Footer Mesajı Stili */
.base-paragraph.footer-message {
  font-size: 0.85rem;
  color: #f0f0f0; /* Koyu mavi arka plan üzerinde açık metin */
}
</style>
