<template>
  <button class="inspire-button-atom">
    <slot></slot>
  </button>
</template>

<style scoped>
.inspire-button-atom {
  background-color: #f0f0f0;
  color: #222;
  border: 1px solid #ccc;
  padding: 0.6rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  font-family: inherit;
}
.inspire-button-atom:hover {
  background-color: #e0e0e0;
}
</style>
