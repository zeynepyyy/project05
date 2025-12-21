<template>
  <div class="layout-cart">
    <AppHeader />
    <slot />
    <CartFooter />
  </div>
</template>

<script setup lang="ts">
import CartFooter from '~/components/Organism/CartFooter.vue'
// AppHeader is auto-imported
</script>

<style scoped>
.layout-cart {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
