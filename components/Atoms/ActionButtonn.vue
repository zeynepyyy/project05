<template>
  <button :class="['action-btn-atom', type]" :aria-label="ariaLabel">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">


const props = defineProps({
  // 'add-to-cart', 'favorite', 'nav'
  type: {
    type: String,
    required: true,
  },
  ariaLabel: String,
})
</script>

<style scoped>
.action-btn-atom {
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

/* 1. Sepete Ekle Butonu */
.action-btn-atom.add-to-cart {
  width: 100%;
  height: 48px;
  background-color: #222;
  color: white;
  font-weight: 700;
  border-radius: 8px;
  margin-top: 0.5rem;
  font-family: inherit;
}
.action-btn-atom.add-to-cart:hover {
  background-color: #000;
}

/* 2. Favori Butonu */
.action-btn-atom.favorite {
  background: none;
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  color: #555;
}

/* 3. Gezinme Okları */
.action-btn-atom.nav {
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  color: #555;
}
</style>
