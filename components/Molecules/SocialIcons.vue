<template>
  <div class="social-icons-molecule">
    <SocialIcon href="#"><Instagram :size="18" /></SocialIcon>
    <SocialIcon href="#"><Facebook :size="18" /></SocialIcon>
    <SocialIcon href="#"><Pin :size="18" /></SocialIcon>
    <SocialIcon href="#"><Youtube :size="18" /></SocialIcon>
  </div>
</template>

<script setup>
// Atomu ve ikonları import edin
import SocialIcon from '../Atoms/SocialIcon.vue'
// Lucide ikonları dışarıdan (Ana Organizma/Sayfa tarafından) sağlanacaktır
import { Instagram, Facebook, Youtube, Pin } from 'lucide-vue-next'
</script>

<style scoped>
.social-icons-molecule {
  display: flex;
  /* Orijinal koddaki yerleşim ayarları */
  margin-top: 1.5rem;
  margin-left: -20px;
  gap: 0.8rem;
  align-items: center;
}
</style>
