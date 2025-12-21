<template>
  <div class="subscribe-wrapper-organism">
    <div class="subscribe-content">
      <Paragraph type="subscribe-text">
        Yes! Send me exclusive offers, unique gift ideas, and personalized tips for shopping and
        selling on Etsy.
      </Paragraph>

      <SubscribeForm />
    </div>
  </div>
</template>

<script setup>
// Atom ve Molekülleri import edin
import Paragraph from '../Atoms/ParagraphAdd.vue'
import SubscribeForm from '../Molecules/SubscribeForm.vue'
</script>

<style scoped>
.subscribe-wrapper-organism {
  /* Orijinal koddaki abonelik arka planı */
  background-color: #e6f2ff;
  padding: 1.5rem 1rem;
  font-family: 'Arial', sans-serif;
  color: #333;
}

.subscribe-content {
  max-width: 950px;
  margin: 0 auto;
  text-align: center;
}

/* SubscribeForm Molekülünün max-width'ini ayarlamak için kullanılır */
.subscribe-content > :deep(.subscribe-form-molecule) {
  max-width: 500px;
  margin: 0 auto;
}
</style>
