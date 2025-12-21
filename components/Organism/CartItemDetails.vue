<template>
  <div class="cart-item-details-organism">
    <div v-if="cartStore.items.length === 0">Your cart is empty</div>
    <div v-else v-for="item in cartStore.items" :key="item.product.id" class="cart-row">
        <SellerRow :seller-name="item.product.category || 'Seller'" />
        <ItemDetailRow :item="item" />
        <hr />
    </div>
  </div>
</template>

<script setup lang="ts">
import ItemDetailRow from '../Molecules/ItemDetailRow.vue'
import SellerRow from '../Molecules/SellerRow.vue'
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()
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
