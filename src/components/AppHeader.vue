<script setup lang="ts">
import { Menu, Search, Heart, Gift, ShoppingCart } from 'lucide-vue-next'
</script>

<template>
  <header class="app-header">
    <!-- Üst Satır -->
    <div class="top-row">
      <!-- Logo -->
      <img src="/logo.png" alt="Etsy Logo" class="logo" />

      <!-- Kategori Butonu -->
      <button class="category-button" aria-label="Categories">
        <Menu :size="20" />
      </button>

      <!-- Arama Çubuğu -->
      <div class="search-bar">
        <input type="text" placeholder="Search for anything" />
        <button class="search-button" aria-label="Search">
          <Search :size="18" />
        </button>
      </div>

      <!-- Kullanıcı İkonları -->
      <div class="user-actions">
        <a href="#" class="signin">Sign in</a>
        <Heart :size="20" />
        <Gift :size="20" />
        <ShoppingCart :size="20" />
      </div>
    </div>

    <!-- Alt Navigasyon -->
    <nav class="nav-links">
      <a href="#" class="gift-link">
        <Gift :size="16" style="margin-right: 4px" />
        Gifts
      </a>
      <a href="#">Halloween Favorites</a>
      <a href="#">Home Favorites</a>
      <a href="#">Fashion Finds</a>
      <a href="#">Registry</a>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  border-bottom: 1px solid #ddd;
  padding: 0.5rem 1rem;
  font-family: 'Segoe UI', 'Helvetica Neue', sans-serif;
}

.top-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo {
  height: 40px;
}

.category-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.3rem;
  display: flex;
  align-items: center;
}

.search-bar {
  flex: 1;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 999px;
  padding: 0.3rem 0.5rem;
}

.search-bar input {
  flex: 1;
  border: none;
  outline: none;
  padding: 0.4rem;
  font-size: 0.9rem;
}

.search-button {
  background-color: #f1641e;
  border: none;
  border-radius: 50%;
  padding: 0.4rem;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
}

.user-actions .signin {
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.3px;
}

.nav-links {
  display: flex;
  justify-content: center; /* ✅ Ortaya alındı */
  gap: 1.5rem;
  margin-top: 0.5rem;
  font-size: 0.9rem;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  display: flex;
  align-items: center;
}

.gift-link svg {
  color: #333;
}
</style>
