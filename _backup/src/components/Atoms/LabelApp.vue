<template>
  <div class="category-label-atom">
    <slot></slot>
  </div>
</template>

<style scoped>
.category-label-atom {
  position: absolute;
  bottom: 0.75rem;
  left: 0.75rem;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
  z-index: 2; /* Resmin üzerinde kalması için */
}
</style>
