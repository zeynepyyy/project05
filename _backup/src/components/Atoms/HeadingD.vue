<template>
  <component :is="tag" :class="['heading-atom', type]">
    <slot></slot>
  </component>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  // 'deal', 'housewarming', 'campaign-title', 'campaign-label'
  type: { type: String, required: true },
  level: { type: [String, Number], default: 1 }, // H1, H2, H3
})

const tag = computed(() => `h${props.level}`)
</script>

<style scoped>
.heading-atom.deal {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  line-height: 1.1;
  color: white;
}

.heading-atom.housewarming {
  font-size: 1.75rem;
  font-weight: 800;
  margin-bottom: 0.25rem;
  line-height: 1.1;
  color: white;
}

.heading-atom.campaign-title {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #222;
  text-align: center;
}

.heading-atom.campaign-label {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin-top: 0;
}
</style>
