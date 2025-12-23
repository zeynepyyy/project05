<template>
  <input type="checkbox" :id="id" class="checkbox-atom" />
</template>

<script setup lang="ts">


const props = defineProps({
  id: String,
})
</script>

<style scoped>
.checkbox-atom {
  width: 30px;
  height: 30px;
  border: 1px solid #555;
  border-radius: 2px;
  margin-right: 0.2rem;
  cursor: pointer;
  /* Tarayıcı varsayılan stilini sıfırlama */
  -webkit-appearance: checkbox;
  appearance: checkbox;
}
</style>
