<template>
  <div class="payment-row-molecule">
    <PaymentCircle :is-selected="isSelected" />

    <div class="method-group">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

import PaymentCircle from '../Atoms/PaymentCircle.vue'

const props = defineProps({
  isSelected: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.payment-row-molecule {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e1e3e8;
}

.method-group {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  flex-grow: 1;
  /* ImageAtom'lar slot ile geldiği için burası esnek kalmalı */
}
</style>
