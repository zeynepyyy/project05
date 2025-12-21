<template>
  <a :href="href" :class="['nav-link-atom', type]">
    <slot></slot>
  </a>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  href: {
    type: String,
    default: '#',
  },
  // 'signin' veya 'main-nav'
  type: {
    type: String,
    default: 'main-nav',
  },
})
</script>

<style scoped>
.nav-link-atom {
  text-decoration: none;
  color: #222;
  transition: color 0.2s;
  display: flex; /* İkonlar için */
  align-items: center;
}

.nav-link-atom:hover {
  color: #000;
}

/* Sign In Linki Stili */
.nav-link-atom.signin {
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.3px;
  color: black;
}

/* Alt Navigasyon Linkleri Stili */
.nav-link-atom.main-nav {
  font-size: 0.9rem;
  color: #222;
}
</style>
