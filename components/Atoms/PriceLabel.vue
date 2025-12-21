<template>
  <div class="product-price-label-atom">
    <slot></slot>
  </div>
</template>

<style scoped>
.product-price-label-atom {
  position: absolute;
  bottom: 0.5rem;
  left: 0.5rem;
  background-color: white;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.8rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  z-index: 2; /* Resmin üzerinde kalması için */
}
</style>
