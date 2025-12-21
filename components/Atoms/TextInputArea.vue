<template>
  <textarea :id="id" :placeholder="placeholder" rows="2" class="text-input-area-atom"></textarea>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  id: String,
  placeholder: String,
})
</script>

<style scoped>
.text-input-area-atom {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 0.75rem;
  resize: vertical;
  min-height: 80px;
  font-family: inherit;
  font-size: 0.9rem;
  box-sizing: border-box;
}
</style>
