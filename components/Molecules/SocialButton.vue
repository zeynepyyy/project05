<template>
  <button class="social-btn-molecule">
    <SocialImage :src="logoSrc" :alt="providerName" />
    <span>{{ buttonText }}</span>
  </button>
</template>

<script setup lang="ts">

// Atomu import edin
import SocialImage from '../Atoms/SocialImage.vue'

const props = defineProps({
  providerName: String,
  logoSrc: String,
  buttonText: String,
})
</script>

<style scoped>
.social-btn-molecule {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.6rem 1rem;
  border: 1px solid #ccc;
  border-radius: 999px;
  font-size: 0.9rem;
  cursor: pointer;
  background-color: white;
  width: 100%;
}

.social-btn-molecule:hover {
  border-color: #000;
}
</style>
