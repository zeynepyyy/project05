<template>
  <div class="message-container-molecule">
    <Logo src="/electric.png" alt="Electric Logo" type="electric" />
    <Paragraph type="footer-message">Etsy is powered by 100% renewable electricity.</Paragraph>
  </div>
</template>

<script setup lang="ts">
// Atomları import edin
import Logo from '../Atoms/logoMail.vue'
import Paragraph from '../Atoms/ParagraphAdd.vue'
</script>

<style scoped>
.message-container-molecule {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1.5rem 0;
  background-color: #3b67d9;
}
</style>
