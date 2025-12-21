<template>
  <div class="user-actions-molecule">
    <template v-if="authStore.isAuthenticated">
        <button class="logout-btn" @click="authStore.logout">Sign out</button>
    </template>
    <button v-else class="nav-link-btn" @click="openSignIn">Sign in</button>

    <NuxtLink to="/favorites" class="icon-btn-link">
        <BaseIcon class="icon-btn"><Heart :size="20" /></BaseIcon>
    </NuxtLink>
    <NuxtLink to="/gift-mode" class="icon-btn-link">
        <BaseIcon class="icon-btn"><Gift :size="20" /></BaseIcon>
    </NuxtLink>
    
    <NuxtLink to="/cart" class="cart-container">
        <BaseIcon class="icon-btn"><ShoppingCart :size="20" /></BaseIcon>
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

.nav-link-btn {
    background: none;
    border: none;
    color: inherit;
    font-weight: bold;
    cursor: pointer;
    font-size: 1rem;
    padding: 0;
    font-family: inherit;
}

.logout-btn {
    background: none;
    border: none;
    cursor: pointer;
    text-decoration: underline;
    font-size: 0.9rem;
}

.cart-container {
    position: relative;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
}

.cart-badge {
    position: absolute;
    top: -5px;
    right: -5px;
    background: #f1641e;
    color: white;
    font-size: 0.7rem;
    padding: 0.1rem 0.3rem;
    border-radius: 50%;
    min-width: 15px;
    text-align: center;
}

.icon-btn {
    cursor: pointer;
}

.icon-btn-link {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
}
</style>
