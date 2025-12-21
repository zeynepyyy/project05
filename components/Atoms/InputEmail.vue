<template>
  <input
    type="email"
    placeholder="Enter your email"
    class="email-input"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<style scoped>
.email-input {
  flex-grow: 1;
  border: none;
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  outline: none;
  background-color: transparent;
}
</style>
