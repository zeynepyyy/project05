<template>
  <component :is="tag" :href="href" :class="['action-btn-atom', type]">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  // 'primary', 'register', 'social'
  type: {
    type: String,
    required: true,
  },
  href: String,
})

// Dinamik etiket: Register ve Linkler için 'a', Ana Butonlar için 'button'
const tag = computed(() => (props.type === 'register' || props.type === 'link' ? 'a' : 'button'))
</script>

<style scoped>
.action-btn-atom {
  cursor: pointer;
  font-family: inherit;
  font-weight: 500;
  transition: background-color 0.2s;
  text-decoration: none;
  text-align: center;
  display: flex; /* Sosyal butonlar için zorunlu */
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  box-sizing: border-box;
}

/* 1. Ana Kayıt Butonu Stili (Gri) */
.action-btn-atom.primary {
  width: 100%;
  padding: 0.7rem;
  background-color: #e0e0e0;
  color: #000;
  border: none;
  border-radius: 999px;
  font-size: 0.95rem;
}

/* 2. Sosyal Medya Butonları Stili */
.action-btn-atom.social {
  width: 100%;
  padding: 0.6rem 1rem;
  border: 1px solid #ccc;
  border-radius: 999px;
  font-size: 0.9rem;
  background-color: white;
}
.action-btn-atom.social:hover {
  border-color: #000;
}

/* 3. Register Butonu Stili (Giriş formunda kullanılır) */
.action-btn-atom.register {
  padding: 0.3rem 0.8rem;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 0.85rem;
  color: #000;
}
.action-btn-atom.register:hover {
  background-color: #f0f0f0;
}
</style>
