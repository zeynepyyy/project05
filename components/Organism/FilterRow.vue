<template>
  <div class="filter-row-organism">
    <button class="filter-btn icon-btn" @click="$emit('toggleFilters')">
       <span class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
       </span>
       All Filters
    </button>
    <button class="filter-btn">Ships from TR</button>
    <button class="filter-btn">Star Seller</button>
    <button class="filter-btn">Etsy's Picks</button>
    <button class="filter-btn">On sale</button>
    <button class="filter-btn">Vintage</button>
    
    <div class="spacer"></div>
    
    <div class="sort-dropdown">
       <span class="sort-info">1,000+ items with ads <span class="info-icon">ⓘ</span></span>
       <button class="sort-btn">Most relevant ▼</button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(['toggleFilters'])
</script>

<style scoped>
.filter-row-organism {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 0;
  max-width: 100%;
  margin-bottom: 1rem;
  overflow-x: auto; /* Allow scroll on small screens */
}

.filter-btn {
  background: white;
  border: 1px solid #222;
  border-radius: 24px;
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  color: #222;
  transition: background 0.2s;
}

.filter-btn:hover {
  background: #f1f1f1;
}

.icon-btn {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.icon {
  font-size: 1.1rem;
}

.spacer {
  flex: 1;
}

.sort-dropdown {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.8rem;
  color: #595959;
}

.sort-btn {
  background: none;
  border: none;
  font-weight: bold;
  color: #222;
  cursor: pointer;
}
</style>
