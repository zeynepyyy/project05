<template>
  <div class="personalization-group-molecule">
    <div class="personalization-header" @click="$emit('toggle')">
      <span class="personalization-label">
        <span class="toggle-sign">{{ isOpen ? '−' : '+' }}</span> Add personalization (optional)
      </span>
    </div>

    <TextInputArea
      v-if="isOpen"
      id="personalization-note"
      placeholder="Enter name or note for personalization (e.g., 'Name: JADE, Font: Script')"
    />
  </div>
</template>

<script setup lang="ts">

import TextInputArea from '../Atoms/TextInputArea.vue'

const props = defineProps({
  isOpen: Boolean,
})

defineEmits(['toggle'])
</script>

<style scoped>
.personalization-group-molecule {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
}

.personalization-header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
  cursor: pointer;
  padding: 5px 0;
  color: #222;
}

.personalization-label {
  font-weight: 600;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
}

.toggle-sign {
  font-size: 1.2rem;
  line-height: 1;
  width: 20px;
  text-align: center;
  margin-right: 5px;
  font-weight: 900;
  display: inline-block;
}
</style>
