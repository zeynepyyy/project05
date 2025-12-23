<template>
  <div class="campaign-card-molecule" @click="$emit('toggleActive')" :class="{ active: isActive }">
    <ImageAtom :src="image" :alt="title" type="campaign-thumb" />
    <div class="campaign-info">
      <Heading type="campaign-label" :level="3">{{ title }}</Heading>
      <Paragraph type="campaign-discount">{{ discount }}</Paragraph>
    </div>
  </div>
</template>

<script setup lang="ts">

import Heading from '../Atoms/HeadingD.vue'
import Paragraph from '../Atoms/ParagraphD.vue'
import ImageAtom from '../Atoms/ImageAtomD.vue'

const props = defineProps({
  title: String,
  discount: String,
  image: String,
  isActive: Boolean,
})

defineEmits(['toggleActive'])
</script>

<style scoped>
.campaign-card-molecule {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem;
  /* Dış yerleşim Organizma'da yönetilir */
}

.campaign-card-molecule.active :deep(.image-atom) {
  box-shadow: 0 0 0 4px #000;
}

.campaign-info {
  text-align: center;
  padding-top: 0.5rem;
}
</style>
