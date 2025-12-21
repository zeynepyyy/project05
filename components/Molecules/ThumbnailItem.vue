<template>
  <div
    :class="['thumbnail-item-molecule', { 'is-active': isActive }]"
    @click="$emit('selectImage')"
  >
    <ImageAtom :src="src" :alt="alt" type="thumbnail" />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import ImageAtom from '../Atoms/ImageAtomm.vue'

const props = defineProps({
  src: String,
  alt: String,
  isActive: Boolean,
})

defineEmits(['selectImage'])
</script>

<style scoped>
.thumbnail-item-molecule {
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.2s;
}

.thumbnail-item-molecule.is-active {
  border: 2px solid #222;
}
</style>
