<template>
  <div class="cart-sidebar-component">
    <div class="sidebar-header">
        <div class="subtotal-area">
            <span class="subtotal-label">Subtotal:</span>
            <span class="subtotal-value">{{ cartStore.totalPrice.toFixed(2) }} TL</span>
        </div>
        <button class="view-cart-btn-header" @click="goToCart">
            View cart <span class="arrow">→</span>
        </button>
    </div>

    <div class="sidebar-content">
        <div v-if="cartStore.items.length === 0" class="empty-cart-msg">
            Your cart is empty.
        </div>
        
        <div v-else class="cart-items-list">
            <div class="cart-item" v-for="(item, index) in cartStore.items" :key="index">
                <div class="item-visual-container">
                     <img :src="item.product.imageUrl" :alt="item.product.title" />
                     <div class="qty-badge">{{ item.quantity || 1 }} in cart</div>
                </div>
                
                <div class="item-details-rows">
                    <div class="item-price">{{ item.product.price }} TL</div>
                    <!-- Mock Scarcity Text based on screenshot -->
                    <div class="scarcity-text">
                        In {{ Math.floor(Math.random() * 30) + 10 }} carts, {{ Math.floor(Math.random() * 5) + 1 }} bought in the past 24 hours
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Floating actions (Simulated from screenshot if needed, but keeping simple for now) -->
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCartStore } from '~/stores/cart'

defineProps<{
  isOpen?: boolean 
}>()

const router = useRouter()
const cartStore = useCartStore()

const goToCart = () => {
  router.push('/cart')
}
</script>

<style scoped>
.cart-sidebar-component {
    display: flex;
    flex-direction: column;
    height: 100%;
    color: #222;
    background: #fdfdfd;
}

.sidebar-header {
    padding: 12px 12px 8px 12px;
    border-bottom: 1px solid transparent; /* Cleaner look */
    background: #fff;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.subtotal-area {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
}

.subtotal-label {
    font-size: 1rem;
    color: #222;
}

.subtotal-value {
    font-size: 1.4rem;
    font-weight: 700;
    color: #222;
}

.view-cart-btn-header {
    background-color: #222;
    color: white;
    border: none;
    border-radius: 24px;
    padding: 10px 20px;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: background 0.2s;
    width: fit-content; /* Or full width if preferred, screenshot shows somewhat compact button */
}

.view-cart-btn-header:hover {
    background: #444;
}

.arrow {
    font-size: 1.1rem;
}

.sidebar-content {
    flex: 1;
    overflow-y: auto;
    padding: 8px 12px 20px 12px;
}

.empty-cart-msg {
    text-align: center;
    margin-top: 40px;
    color: #595959;
}

.cart-items-list {
    display: flex;
    flex-direction: column;
    gap: 32px; /* Large gap between items */
}

.cart-item {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.item-visual-container {
    position: relative;
    width: 100%;
    aspect-ratio: 4/3; /* Rectangular as in screenshot */
    border-radius: 12px;
    overflow: hidden;
    /* Box shadow is usually minimal on Etsy product cards in cart, flat image */
}

.item-visual-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.qty-badge {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background: white;
    color: #222;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.item-details-rows {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.item-price {
    font-size: 1.2rem;
    font-weight: 500; /* Regular heavy weight */
    color: #222;
}

.scarcity-text {
    color: #a71e31; /* Etsy red */
    font-weight: 500;
    font-size: 0.9rem;
    line-height: 1.4;
}
</style>
