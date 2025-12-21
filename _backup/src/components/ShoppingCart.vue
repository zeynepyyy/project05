<template>
  <div class="cart-page-layout">
    <h2 class="title">Your cart</h2>

    <div class="cart-layout">
      <CartItemDetails />
      <PaymentSummary />
    </div>
  </div>
</template>

<script setup>
import CartItemDetails from './Organism/CartItemDetails.vue'
import PaymentSummary from './Organism/PaymentSummary.vue'
</script>

<style scoped>
.cart-page-layout {
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 2rem;
  font-family: Arial, sans-serif;
  color: #212121;
}

.title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.cart-layout {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}
</style>
