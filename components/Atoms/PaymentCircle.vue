<template>
  <div :class="['payment-circle-atom', { selected: isSelected }]"></div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  isSelected: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.payment-circle-atom {
  width: 28px;
  height: 28px;
  border: 1px solid #999;
  border-radius: 50%;
  flex-shrink: 0;
  margin-right: 0.75rem;
  /* Seçili stil, dışarıdan yönetilecektir. */
}
</style>
