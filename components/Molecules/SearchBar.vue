<template>
  <div class="search-bar-molecule">
    <SearchInput
      v-model="searchQuery"
      @search="handleSearch"
    />
    <button class="search-btn" @click="handleSearch" aria-label="Search">
      <span class="icon">🔍</span>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import SearchInput from '../Atoms/SearchInput.vue'

const router = useRouter()
const searchQuery = ref('')

const handleSearch = () => {
    if (searchQuery.value.trim()) {
        router.push({ path: '/search', query: { q: searchQuery.value } })
    }
}
</script>

<style scoped>
.search-bar-molecule {
  flex: 1;
  display: flex;
  align-items: center;
  border: 2px solid #222;
  border-radius: 999px;
  padding: 2px;
  background: white;
  transition: box-shadow 0.2s;
  max-width: 600px; /* Limit width */
}

.search-bar-molecule:focus-within {
  box-shadow: 0 0 5px rgba(0,0,0,0.2);
}

.search-btn {
  background-color: #f1641e; /* Etsy Orange */
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px; 
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: auto; /* Push to right */
  transition: background-color 0.2s;
}

.search-btn:hover {
  background-color: #d6500f;
}

.icon {
  font-size: 1.2rem;
}
</style>
