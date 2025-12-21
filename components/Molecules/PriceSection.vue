<template>
  <div class="price-section-molecule">
    <div class="price">
      <slot name="price"></slot>
    </div>
    <ActionButton type="favorite" aria-label="Favorilere Ekle">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        ></path>
      </svg>
    </ActionButton>
  </div>
</template>

<script setup>
import ActionButton from '../Atoms/ActionButtonn.vue' // Doğru yolu kontrol edin
</script>

<style scoped>
.price-section-molecule {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-size: 1.625rem;
  font-weight: 700;
  color: #000;
}
/* Favori butonu ve ikon stili ActionButton Atomu'nda yönetilir. */
</style>
