<template>
  <h2 class="hub-title-atom">
    <slot></slot>
  </h2>
</template>

<style scoped>
.hub-title-atom {
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  margin-top: 0;
  color: inherit; /* Üst elementten (HubHeader) rengi alır */
}
</style>
