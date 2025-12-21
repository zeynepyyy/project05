<template>
  <button :class="['action-btn-atom', type]">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  // 'checkout', 'text-link', 'coupon'
  type: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.action-btn-atom {
  cursor: pointer;
  border: none;
  background: none;
  font-family: inherit;
  transition: opacity 0.2s;
  padding: 0;
}

/* 1. Checkout Butonu Stili */
.action-btn-atom.checkout {
  width: 100%;
  padding: 0.7rem 1rem;
  background-color: #999;
  color: white;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 1rem;
}

/* 2. Text Link (Save, Remove) Stili */
.action-btn-atom.text-link {
  font-size: 0.8rem;
  color: #222;
  font-weight: 500;
}

/* 3. Kupon Butonu Stili */
.action-btn-atom.coupon {
  font-size: 0.98rem;
  font-weight: 600;
  color: #212121;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
