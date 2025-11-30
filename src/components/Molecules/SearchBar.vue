<template>
  <div class="search-bar-molecule">
    <SearchInput />
    <HeaderButton type="search" aria-label="Search">
      <BaseIcon>
        <Search :size="18" />
      </BaseIcon>
    </HeaderButton>
  </div>
</template>

<script setup>
// Atomları ve ikonları import edin
import SearchInput from '../Atoms/SearchInput.vue'
import HeaderButton from '../Atoms/HeaderButton.vue'
import BaseIcon from '../Atoms/BaseIcon.vue'
import { Search } from 'lucide-vue-next'
</script>

<style scoped>
.search-bar-molecule {
  flex: 1;
  display: flex;
  align-items: center;
  /* Orijinal koddaki yerleşim ve görünüm stili */
  border: 1px solid #ccc;
  border-radius: 999px;
  padding: 0.3rem 0.5rem;
}
</style>
