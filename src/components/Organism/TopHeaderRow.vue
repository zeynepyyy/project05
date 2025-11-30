<template>
  <div class="top-row-organism">
    <AppLogo />

    <HeaderButton type="category" aria-label="Categories">
      <BaseIcon><Menu :size="20" /></BaseIcon>
    </HeaderButton>

    <SearchBar />

    <UserActions />
  </div>
</template>

<script setup>
// Atomları ve Molekülleri import edin
import AppLogo from '../Atoms/AppLogo.vue'
import HeaderButton from '../Atoms/HeaderButton.vue'
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
