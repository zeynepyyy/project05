<template>
  <div class="layout-container">
    <div class="main-content-area">
        <AppHeader />
        <slot />
        <AppFooter />
    </div>
    
    <AuthModal />
    <AuthModal />
    <!-- SideCartDrawer removed as per user request to remove 'View Cart' column -->
    

  </div>
</template>

<script setup>
// Components are auto-imported in Nuxt 3
import SideCartDrawer from '~/components/Organism/SideCartDrawer.vue'
import AuthModal from '~/components/Organism/AuthModal.vue'
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()

onMounted(() => {
    cartStore.initializeStore()
})
</script>

<style scoped>
.layout-container {
  display: flex;
  min-height: 100vh;
}

.main-content-area {
  flex: 1; /* Takes remaining space */
  display: flex;
  flex-direction: column;
  min-width: 0; /* Prevent overflow */
}



@media (max-width: 1100px) {
    .persistent-cart-sidebar {
        display: none; /* Hide on smaller screens or handle differently */
    }
}
</style>
