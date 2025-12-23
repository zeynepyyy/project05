<template>
  <div :class="['base-icon-atom', { primary: isPrimary }]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">


const props = defineProps({
  // İkonun ana aksiyon (mor) renginde olup olmadığını belirler.
  // Bu header'da sadece Gifts linkinde kullanılmıştır.
  isPrimary: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.base-icon-atom {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* Lucide SVG'ler slot içinde olduğundan, :deep kullanıyoruz */
.base-icon-atom :deep(svg) {
  color: #333; /* Varsayılan koyu renk */
}

/* Özel renk ayarı (Header'daki Hediye linki için) */
.base-icon-atom.primary :deep(svg) {
  color: #222; /* Hediye linki için */
}
</style>
