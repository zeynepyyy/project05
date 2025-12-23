<template>
  <input
    type="text"
    placeholder="Search for anything"
    class="search-input-atom"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    @keydown.enter="$emit('search')"
  />
</template>

<script setup lang="ts">
defineProps(['modelValue'])
defineEmits(['update:modelValue', 'search'])
</script>

<style scoped>
.search-input-atom {
  flex: 1;
  border: none;
  outline: none;
  padding: 0.4rem 0.8rem;
  font-size: 1rem;
  color: #222;
  background: transparent;
}
</style>
