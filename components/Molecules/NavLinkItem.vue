<template>
  <NavLink type="main-nav" :href="href">
    <BaseIcon v-if="$slots.icon" class="nav-icon-wrapper">
      <slot name="icon"></slot>
    </BaseIcon>
    <slot></slot>
  </NavLink>
</template>

<script setup lang="ts">

// Atomları import edin
import NavLink from '../Atoms/NavLink.vue'
import BaseIcon from '../Atoms/BaseIcon.vue'

const props = defineProps({
  href: {
    type: String,
    default: '#',
  },
})
</script>

<style scoped>
/* Linkin içindeki ikonlar için boşluk ayarı */
.nav-icon-wrapper {
  margin-right: 4px;
}
/* İkonun rengi BaseIcon'da belirlenmiştir. */
</style>
