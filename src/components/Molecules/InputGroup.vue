<template>
  <div class="input-group-molecule">
    <label :for="inputId">{{ labelText }}</label>

    <BaseInput
      :id="inputId"
      :type="inputType"
      :model-value="modelValue"
      @update:modelValue="(value) => emit('update:modelValue', value)"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
// Atomu import edin (Dosya yolunu kontrol edin)
import BaseInput from '../Atoms/BaseInput.vue'

const props = defineProps({
  inputId: String,
  labelText: String,
  inputType: {
    type: String,
    required: true,
  },
  // v-model'in değeri (üst bileşenden gelen prop)
  modelValue: [String, Boolean],
})

// Üst bileşene değeri güncellemesi için yayılacak olay (event)
const emit = defineEmits(['update:modelValue'])
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
/* BaseInput atomu içindeki stil ile birleşir */
</style>
