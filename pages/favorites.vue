<template>
  <div class="favorites-page">
    <!-- Header Section -->
    <div class="fav-header">
      <div class="header-left">
        <h1 class="page-title">Favorite items</h1>
        <NuxtLink v-if="!authStore.isAuthenticated" to="/login" class="header-signin-btn">Sign in</NuxtLink>
      </div>
      
      <div class="header-actions">
        <!-- Private Label -->
        <button class="action-pill private-indicator">
             <Lock :size="16" />
             <span>Private</span>
        </button>
        
        <!-- Edit Button -->
        <button class="action-circle">
            <Pencil :size="18" />
        </button>
        
        <!-- Share Button -->
        <button class="action-circle">
            <Share :size="18" />
        </button>
      </div>
    </div>

    <!-- Guest/Not Signed In Warning -->
    <div v-if="!authStore.isAuthenticated" class="guest-warning">
        <div class="warning-icon">
            <Clock :size="20" />
        </div>
        <div class="warning-content">
            <strong>Don't lose your faves! Sign in or create an account.</strong>
            <p>Guest favorites are only saved to your device for 7 days, or until you clear your cache. Sign in or create an account to hang on to your picks.</p>
        </div>
    </div>

    <!-- Content -->
    <div v-if="favoritesStore.favoriteItems.length === 0" class="empty-state">
      <p>No favorites yet.</p>
      <NuxtLink to="/" class="shopping-link">Start Shopping</NuxtLink>
    </div>

    <div v-else class="favorites-grid">
      <ProductCardd 
        v-for="product in favoritesStore.favoriteItems" 
        :key="product.id"
        :id="product.id"
        :title="product.title"
        :price="product.price"
        :image="product.imageUrl"
        :seller="product.seller || 'Etsy Seller'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFavoritesStore } from '~/stores/favorites';
import { useAuthStore } from '~/stores/auth';
import ProductCardd from '~/components/Molecules/ProductCardd.vue';
import { Lock, Pencil, Share, Clock } from 'lucide-vue-next';

const favoritesStore = useFavoritesStore();
const authStore = useAuthStore();
</script>

<style scoped>
.favorites-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 24px;
  font-family: 'Graphik Webfont', sans-serif;
  color: #222;
}

/* Header */
.fav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
}

.header-left {
    display: flex;
    align-items: center;
    gap: 16px;
}

.page-title {
    font-size: 2.2rem;
    font-family: 'Guardian-EgypTT', serif; /* Serif font for title */
    font-weight: 400;
    margin: 0;
    color: #222;
}

.header-signin-btn {
    border: 1px solid #222;
    border-radius: 24px;
    padding: 6px 16px;
    font-weight: 600;
    font-size: 0.9rem;
    text-decoration: none;
    color: #222;
    background: transparent;
    transition: background 0.2s;
}
.header-signin-btn:hover { background: #f5f5f5; }

.header-actions {
    display: flex;
    align-items: center;
    gap: 12px;
}

/* Action Buttons */
.action-pill {
    display: flex;
    align-items: center;
    gap: 6px;
    border: none;
    background: transparent;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    color: #222;
    padding: 8px 12px;
    border-radius: 24px;
}
.action-pill:hover { background-color: #f5f5f5; }

.action-circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: #f5f5f5; /* Light gray circle */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #222;
    transition: background 0.2s;
}
.action-circle:hover { background: #e0e0e0; }

/* Guest Warning */
.guest-warning {
    display: flex;
    gap: 16px;
    margin-bottom: 32px;
    max-width: 800px;
}

.warning-icon {
    width: 24px;
    padding-top: 2px;
    color: #222;
}

.warning-content {
    font-size: 0.95rem;
    line-height: 1.5;
    color: #222;
}
.warning-content strong { display: block; margin-bottom: 4px; }
.warning-content p { margin: 0; color: #595959; }

/* Grid */
.favorites-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
}

.empty-state {
  text-align: center;
  padding: 4rem 0;
  color: #595959;
}

.shopping-link {
  display: inline-block;
  margin-top: 1rem;
  color: #222;
  text-decoration: underline;
}

@media (max-width: 600px) {
    .fav-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
    }
    .header-actions {
        width: 100%;
        justify-content: flex-start;
    }
}
</style>
