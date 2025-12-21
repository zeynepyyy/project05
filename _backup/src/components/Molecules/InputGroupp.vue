<template>
  <div class="input-group-molecule">
    <label :for="inputId">{{ labelText }} *</label>

    <input
      :id="inputId"
      :type="inputType"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  inputId: String,
  labelText: String,
  inputType: {
    type: String,
    required: true,
  },
  modelValue: String, // v-model'i destekler
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.input-group-molecule {
  margin-bottom: 1rem;
}

.input-group-molecule label {
  display: block;
  margin-bottom: 0.3rem;
  font-size: 0.75rem;
}

.input-group-molecule input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.9rem;
  box-sizing: border-box;
}
</style>
