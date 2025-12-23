<template>
  <button :class="['action-btn-atom', type]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">


const props = defineProps({
  type: { type: String, required: true },
})
</script>

<style scoped>
.action-btn-atom.act-fast {
  background-color: white;
  color: #222;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 700;
  cursor: pointer;
  align-self: flex-start;
  transition: background-color 0.2s;
  margin-bottom: 1rem;
  font-family: inherit;
}
.action-btn-atom.act-fast:hover {
  background-color: #e0e0e0;
}
</style>
