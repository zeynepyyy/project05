<template>
  <div class="top-row-organism">
    <AppLogo />

    <CategoryMenu />

    <SearchBar />

    <UserActions />
  </div>
</template>

<script setup lang="ts">
// Atomları ve Molekülleri import edin
import AppLogo from '../Atoms/AppLogo.vue'
import CategoryMenu from '../Organism/CategoryMenu.vue' // New import
import HeaderButton from '../Atoms/HeaderButton.vue' // Keep if needed elsewhere, otherwise maybe remove
import BaseIcon from '../Atoms/BaseIcon.vue'
import SearchBar from '../Molecules/SearchBar.vue'
import UserActions from '../Molecules/UserActions.vue'

// İkonu import edin
import { Menu } from 'lucide-vue-next'
</script>

<style scoped>
.top-row-organism {
  display: flex;
  align-items: center;
  gap: 1rem;
  /* Dışarıdan gelen padding/margin olmamalı, bu organizma bağımsız bir bloktur. */
}
</style>
