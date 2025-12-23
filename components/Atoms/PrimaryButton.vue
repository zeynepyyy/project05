<template>
  <component :is="tag" :href="href" :class="['primary-btn-atom', type]">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  // 'sign-in' veya 'register'
  type: {
    type: String,
    required: true,
  },
  href: String,
})

// Dinamik etiket ('button' veya 'a')
const tag = computed(() => (props.type === 'register' ? 'a' : 'button'))
</script>

<style scoped>
.primary-btn-atom {
  cursor: pointer;
  font-family: inherit;
  font-weight: 500;
  transition: background-color 0.2s;
  text-decoration: none;
  text-align: center;
  display: block;
}

/* Sign In Butonu Stili (Siyah, Tam Genişlik) */
.primary-btn-atom.sign-in {
  width: 100%;
  padding: 0.7rem;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 999px;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}

/* Register Butonu Stili (Beyaz, Kenarlıklı) */
.primary-btn-atom.register {
  padding: 0.3rem 0.8rem;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 0.85rem;
  color: #000;
}

.primary-btn-atom.register:hover {
  background-color: #f0f0f0;
}
</style>
