<template>
  <ActionLinkButton type="social">
    <SocialImage :src="logoSrc" :alt="providerName" />
    <span>{{ buttonText }}</span>
  </ActionLinkButton>
</template>

<script setup>
import { defineProps } from 'vue'
import ActionLinkButton from '../Atoms/ActionLinkButton.vue'
import SocialImage from '../Atoms/SocialImage.vue'

const props = defineProps({
  providerName: String,
  logoSrc: String,
  buttonText: String,
})
</script>

<style scoped>
/* Tüm stil ActionLinkButton Atom'unda yönetilir. */
</style>
