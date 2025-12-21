<template>
  <div class="item-line-molecule">
    <div class="image-wrapper">
      <ImageAtom
        :src="item.product.imageUrl"
        :alt="item.product.title"
        type="product"
      />
    </div>

    <div class="item-details">
      <h3 class="product-name">{{ item.product.title }}</h3>
      
      <div class="warning-box" v-if="item.product.description">
        <span class="warning-icon">!</span> {{ item.product.description }}
      </div>

      <p>Quantity: {{ item.quantity }}</p>

      <div class="actions">
        <ActionButton type="text-link">Save for later</ActionButton>
        <ActionButton type="text-link" @click="cartStore.removeFromCart(item.product.id)">Remove</ActionButton>
      </div>
    </div>

    <div class="price-box">
      <span class="price">{{ item.product.price * item.quantity }} TL</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageAtom from '../Atoms/ImageAtom.vue'
import ActionButton from '../Atoms/ActionButton.vue'
import type { CartItem } from '~/types'
import { useCartStore } from '~/stores/cart'

const props = defineProps<{
    item: CartItem
}>()

const cartStore = useCartStore()
</script>

<style scoped>
.item-line-molecule {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding-right: 1rem;
}

.item-details {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 0.2rem;
}

.product-name {
  font-size: 0.95rem;
  font-weight: 300;
  line-height: 1.4;
  max-width: 90%;
}

.warning-box {
  background-color: #fae0e7;
  color: #212121;
  padding: 0.8rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.warning-icon {
  font-size: 1rem;
  font-weight: bold;
  color: #212121;
}

.actions {
  display: flex;
  gap: 0.9rem;
  margin-top: 0.5rem;
  font-size: 0.88rem;
}

.warning-box {
  background-color: #fae0e7;
  color: #212121;
  padding: 0.8rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.warning-icon {
  font-size: 1rem;
  font-weight: bold;
  color: #212121;
}

.price-box {
  text-align: right;
  width: 100px;
  flex-shrink: 0;
  padding-top: 0.2rem;
}

.price {
  font-size: 1.2rem;
  font-weight: 550;
  color: #222;
}
</style>
