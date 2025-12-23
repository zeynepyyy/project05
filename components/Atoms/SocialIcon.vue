<template>
  <a :href="href" class="social-icon-wrapper">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">


const props = defineProps({
  href: {
    type: String,
    default: '#',
  },
})
</script>

<style scoped>
.social-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.social-icon-wrapper :deep(svg) {
  color: white;
  width: 18px;
  height: 18px;
}
</style>
