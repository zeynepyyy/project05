<template>
  <button :class="['base-button', type]" :type="htmlType">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'primary', // örnek: 'primary', 'download', 'outline' gibi stiller
  },
  htmlType: {
    type: String,
    default: 'button', // örnek: 'submit', 'reset', 'button'
  },
})
</script>

<style scoped>
.base-button {
  cursor: pointer;
  transition: background-color 0.25s;
  font-family: 'Arial', sans-serif;
  border-radius: 999px;
  padding: 0.6rem 1.2rem;
  font-size: 0.95rem;
  font-weight: 600;
  border: none;
}

/* Hover efekti */
.base-button:hover {
  filter: brightness(0.9);
}

/* Stil varyasyonları */
.primary {
  background-color: #f1641e;
  color: white;
}

.download {
  background-color: #2638c0;
  color: white;
}

.outline {
  background-color: transparent;
  border: 2px solid #f1641e;
  color: #f1641e;
}
</style>
