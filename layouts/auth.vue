<template>
  <div class="layout-auth">
    <header class="auth-header">
      <NuxtLink to="/">
        <!-- Simple Logo or Home Link -->
        <h1 class="logo-text">Etsy Clone</h1>
      </NuxtLink>
    </header>
    <main class="auth-content">
      <slot />
    </main>
    <footer class="auth-footer">
      <p>&copy; 2025 Etsy Clone Auth</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.layout-auth {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  background-color: #f5f5f5;
}

.auth-header {
  padding: 1rem;
  width: 100%;
  text-align: center;
  background: white;
  border-bottom: 1px solid #eee;
}

.logo-text {
  color: #f1641e;
  font-family: 'Guardian-EgypTT', serif;
}

.auth-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;
}

.auth-footer {
  padding: 1rem;
  color: #666;
  font-size: 0.8rem;
}
</style>
