<template>
  <NuxtLink to="/" class="logo-link">
    <img src="/logo.png" alt="Etsy Logo" class="app-logo-atom" />
  </NuxtLink>
</template>

<style scoped>
.logo-link {
  display: inline-flex;
  text-decoration: none;
  background: transparent !important;
  color: inherit !important;
  outline: none !important;
  border: none !important;
}

/* Force override any active/focus states */
.logo-link:active,
.logo-link:focus,
.logo-link:visited,
.logo-link:hover,
.logo-link.router-link-active,
.logo-link.router-link-exact-active {
  background-color: transparent !important;
  color: inherit !important;
  box-shadow: none !important;
  outline: none !important;
}

.app-logo-atom {
  height: 40px;
  flex-shrink: 0;
}
</style>
