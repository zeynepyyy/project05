<template>
  <nav class="nav-links-organism">
    <NavLinkItem href="#" class="gifts-link-item">
      <template #icon>
        <Gift :size="16" />
      </template>
      Gifts
    </NavLinkItem>

    <NavLinkItem href="#">Halloween Favorites</NavLinkItem>
    <NavLinkItem href="#">Home Favorites</NavLinkItem>
    <NavLinkItem href="#">Fashion Finds</NavLinkItem>
    <NavLinkItem href="#">Registry</NavLinkItem>
  </nav>
</template>

<script setup>
// Molekülü ve ikonu import edin
import NavLinkItem from '../Molecules/NavLinkItem.vue'
import { Gift } from 'lucide-vue-next'
</script>

<style scoped>
.nav-links-organism {
  display: flex;
  /* Orijinal koddaki yerleşim stili */
  justify-content: center; /* Ortaya alındı */
  gap: 1.5rem;
  margin-top: 0.5rem;
  font-size: 0.9rem;
}

/* Gifts linki için özel stil (NavLinkItem'ın içindeki ikon rengini BaseIcon'da ayarladık) */
.gifts-link-item :deep(.nav-link-atom) {
  color: #333;
}
</style>
