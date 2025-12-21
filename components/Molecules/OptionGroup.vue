<template>
  <div class="option-group-molecule">
    <label :for="selectId">{{ labelText }}</label>
    <FormSelect :id="selectId" @change="$emit('update:modelValue', $event.target.value)">
      <slot></slot>
    </FormSelect>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import FormSelect from '../Atoms/FormSelect.vue'

const props = defineProps({
  selectId: String,
  labelText: String,
  modelValue: [String, Number],
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.option-group-molecule label {
  font-weight: 600;
  font-size: 0.95rem;
  display: block;
  margin-bottom: 0.4rem;
}
</style>
