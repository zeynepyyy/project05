<template>
  <div class="user-actions-molecule">
    <template v-if="authStore.isAuthenticated">
        <button class="logout-btn" @click="authStore.logout">Sign out</button>
    </template>
    <button v-else class="nav-link-btn" @click="openSignIn">Sign in</button>

    <NuxtLink to="/favorites" class="icon-btn-link">
        <BaseIcon class="icon-btn"><Heart :size="20" /></BaseIcon>
        <span class="tooltip-text">Favorites</span>
    </NuxtLink>
    <NuxtLink to="/gift-mode" class="icon-btn-link">
        <BaseIcon class="icon-btn"><Gift :size="20" /></BaseIcon>
        <span class="tooltip-text">Gift Mode</span>
    </NuxtLink>
    
    <NuxtLink to="/cart" class="cart-container">
        <BaseIcon class="icon-btn"><ShoppingCart :size="20" /></BaseIcon>
        <span class="tooltip-text">Cart</span>
        <span v-if="cartStore.totalItems > 0" class="cart-badge">{{ cartStore.totalItems }}</span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';
import { useCartStore } from '~/stores/cart';
import { useAuthModal } from '~/composables/useAuthModal';
import BaseIcon from '../Atoms/BaseIcon.vue'
import { Heart, Gift, ShoppingCart } from 'lucide-vue-next'

const authStore = useAuthStore();
const cartStore = useCartStore();
const { openSignIn } = useAuthModal();
</script>

<style scoped>
.user-actions-molecule {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  flex-shrink: 0;
}


.icon-btn-link, .cart-container {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: background-color 0.2s, color 0.2s;
    background-color: transparent;
    position: relative;
}

/* Tooltip Styling */
.tooltip-text {
    visibility: hidden;
    background-color: #1f2a44;
    color: #fff;
    text-align: center;
    padding: 8px 12px;
    border-radius: 6px;
    position: absolute;
    top: 115%;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    font-size: 0.8rem;
    z-index: 10;
    opacity: 0;
    transition: opacity 0.2s;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

/* Tooltip Arrow */
.tooltip-text::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #1f2a44 transparent;
}

/* Hover States: Show Blue Background + Tooltip */
.icon-btn-link:hover, 
.icon-btn-link:focus, 
.cart-container:hover, 
.cart-container:focus {
    background-color: #e1f5fe;
    color: #222;
}

.icon-btn-link:hover .tooltip-text, 
.icon-btn-link:focus .tooltip-text,
.cart-container:hover .tooltip-text,
.cart-container:focus .tooltip-text {
    visibility: visible;
    opacity: 1;
}

.icon-btn {
    cursor: pointer;
    display: flex;
}

/* Ensure Sign In button has no background but hover effect if desired, or keep as text */
.nav-link-btn {
    background: none;
    border: none;
    color: inherit;
    font-weight: bold;
    cursor: pointer;
    font-size: 0.9rem;
    padding: 8px 12px;
    border-radius: 24px;
    font-family: inherit;
    transition: background-color 0.2s;
}

.nav-link-btn:hover {
    background-color: #ebebeb;
}

.cart-badge {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #d34015; /* Darker orange/rust per screenshot */
    color: white;
    font-size: 0.75rem;
    font-weight: 700;
    min-width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: 0 0 0 2px #fff; /* White border effect to separate from icon */
    transform: translate(25%, -25%); /* Shift it slightly out */
    font-family: 'Graphik Webfont', sans-serif;
    padding: 0 4px; /* Ensure pill shape if double digits */
}
</style>
