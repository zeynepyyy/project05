<template>
  <input
    :type="type"
    :id="inputId"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    class="base-input-atom"
  />
</template>

<script setup lang="ts">


const props = defineProps({
  // email, password, checkbox (type attribute)
  type: {
    type: String,
    default: 'text',
  },
  inputId: String,
  // Üst bileşenden gelen v-model değeri
  modelValue: [String, Boolean],
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
/* Stiller... */
/* ... (Daha önceki stilleriniz geçerlidir) */
</style>
