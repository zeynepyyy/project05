<template>
  <span class="category-label-atom">
    <slot></slot>
    →
  </span>
</template>

<style scoped>
.category-label-atom {
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
  line-height: 1.3;
  margin-top: 0.5rem;
  display: block;
}
</style>
