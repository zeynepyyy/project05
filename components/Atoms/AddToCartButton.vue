<template>
  <button class="add-to-cart-atom">
    <slot></slot>
  </button>
</template>

<style scoped>
.add-to-cart-atom {
  background-color: transparent;
  color: #222;
  border: 1.5px solid #222;
  padding: 0.6rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: background-color 0.3s ease;
  font-family: inherit;
}

.add-to-cart-atom::before {
  content: '+';
  font-weight: bold;
  font-size: 1rem;
}

.add-to-cart-atom:hover {
  background-color: #222;
  color: white;
}
</style>
