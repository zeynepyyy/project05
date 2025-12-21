<template>
  <div class="cart-item-details-organism">
    <SellerRow />

    <ItemDetailRow />
  </div>
</template>

<script setup>
// Molekülleri import edin
import SellerRow from '../Molecules/SellerRow.vue'
import ItemDetailRow from '../Molecules/ItemDetailRow.vue'
</script>

<style scoped>
.cart-item-details-organism {
  flex: 2; /* Sayfanın daha büyük kısmını kaplar */
  border: 1px solid #e1e3e8;
  border-radius: 8px;
  padding: 1rem;
  background-color: #fff;
  /* Tüm sepet kutusu stilini içerir */
}
</style>
