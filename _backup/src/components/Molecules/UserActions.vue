<template>
  <div class="user-actions-molecule">
    <NavLink type="signin" href="#">Sign in</NavLink>

    <BaseIcon><Heart :size="20" /></BaseIcon>
    <BaseIcon><Gift :size="20" /></BaseIcon>
    <BaseIcon><ShoppingCart :size="20" /></BaseIcon>
  </div>
</template>

<script setup>
// Atomları ve ikonları import edin
import NavLink from '../Atoms/NavLink.vue'
import BaseIcon from '../Atoms/BaseIcon.vue'
import { Heart, Gift, ShoppingCart } from 'lucide-vue-next'
</script>

<style scoped>
.user-actions-molecule {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  flex-shrink: 0;
}
</style>
