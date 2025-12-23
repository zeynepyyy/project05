<template>
  <div class="search-container" :class="{ 'is-focused': isFocused }" v-click-outside="closeDropdown">
    <div class="search-bar-molecule">
        <SearchInput
        v-model="searchQuery"
        @search="handleSearch"
        @focus="handleFocus"
        />
        <button 
            class="search-btn" 
            :class="{ 'btn-active': isFocused }" 
            @click="handleSearch" 
            aria-label="Search"
        >
            <component :is="Search" :size="20" class="search-icon-svg" />
        </button>
    </div>

    <!-- Dropdown Mock matching screenshot -->
    <div v-if="isFocused" class="search-dropdown">
        <div class="dropdown-header">Gifts as special as they are</div>
        <ul class="dropdown-list">
            <li v-for="(item, i) in mockSuggestions" :key="i" class="dropdown-item">
                <img :src="item.img" class="item-thumb" alt="" />
                <span>{{ item.text }}</span>
            </li>
        </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import SearchInput from '../Atoms/SearchInput.vue'
import { Search } from 'lucide-vue-next'

const router = useRouter()
const searchQuery = ref('')
const isFocused = ref(false)

const handleSearch = () => {
    if (searchQuery.value.trim()) {
        router.push({ path: '/search', query: { q: searchQuery.value } })
        isFocused.value = false
    }
}

const handleFocus = () => {
    isFocused.value = true
}

const closeDropdown = () => {
    isFocused.value = false
}

// Simple directive for click outside
const vClickOutside = {
  mounted(el, binding) {
    el.clickOutsideEvent = function(event) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event, el)
      }
    }
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  }
}

const mockSuggestions = [
    { text: 'Last Minute Gifts', img: 'https://i.etsystatic.com/26786657/r/il/663c6c/3196627083/il_75x75.3196627083_h2z7.jpg' },
    { text: 'Personalized Portraits', img: 'https://i.etsystatic.com/26241480/c/1800/1430/0/200/il/115756/4346690955/il_75x75.4346690955_5hd3.jpg' },
    { text: 'Gifts for Yourself', img: 'https://i.etsystatic.com/24617197/r/il/6b6807/2836262445/il_75x75.2836262445_1v41.jpg' },
    { text: 'Gifts for Couples', img: 'https://i.etsystatic.com/15949237/r/il/26bb2f/4447333917/il_75x75.4447333917_qg7x.jpg' },
    { text: 'DIY Gifts', img: 'https://i.etsystatic.com/11239263/r/il/6b567d/3143527961/il_75x75.3143527961_1l7d.jpg' },
    { text: 'Stocking Stuffers', img: 'https://i.etsystatic.com/23722603/r/il/a7b134/3070404394/il_75x75.3070404394_4qj9.jpg' }
]
</script>

<style scoped>
.search-container {
    position: relative;
    flex: 1;
    max-width: 600px;
}

.search-bar-molecule {
  display: flex;
  align-items: center;
  border: 2px solid #222;
  border-radius: 999px;
  background: white;
  transition: all 0.2s;
  height: 48px;
  position: relative;
  z-index: 20;
}

/* Focused State logic - REMOVED merging style */
.search-container.is-focused .search-bar-molecule {
    /* Keep the pill shape and border intact */
    border-radius: 999px;
    border-bottom: 2px solid #222;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
}

.search-btn {
  background-color: #f1641e;
  color: white;
  border: none;
  /* Default: Circle floating right */
  width: 36px; 
  height: 36px;
  border-radius: 50%;
  margin-right: 6px; /* Spacing from edge */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: auto;
  transition: all 0.2s;
}

.search-btn:hover {
  background-color: #d6500f;
}

/* Active (Focused) State for Button */
.search-btn.btn-active {
    width: 60px;
    height: 100%;
    margin-right: 0;
    /* Maintain border radius on the right side to match container */
    border-radius: 0 999px 999px 0; 
    position: absolute;
    right: 0;
    top: 0;
}

.search-icon-svg {
    stroke-width: 2.5px;
}

/* Dropdown Styles - Detached */
.search-dropdown {
    position: absolute;
    top: 56px; /* Push it down slightly to create a gap */
    left: 0;
    right: 0;
    background: white;
    border: 2px solid #222; /* Full border */
    border-radius: 18px; /* Rounded corners all around */
    padding: 1rem;
    z-index: 10;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.dropdown-header {
    font-weight: 700;
    font-size: 0.95rem;
    margin-bottom: 1rem;
    color: #222;
}

.dropdown-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.dropdown-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 0;
    cursor: pointer;
    transition: background-color 0.2s;
}

.dropdown-item:hover span {
    text-decoration: underline;
}

.item-thumb {
    width: 40px;
    height: 40px;
    border-radius: 6px;
    object-fit: cover;
}
</style>
