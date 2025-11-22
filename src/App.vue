<template>
  <div class="app">
    <aside class="sidebar">
      <h2>🧩 Component Listesi</h2>
      <ul>
        <li
          v-for="(comp, index) in components"
          :key="index"
          :class="{ active: selected === comp }"
          @click="selected = comp"
        >
          {{ comp }}
        </li>
      </ul>
    </aside>

    <main class="preview">
      <component :is="componentMap[selected]" />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { defineAsyncComponent } from 'vue'

const components = [
  'AppHeader',
  'AppFooter',
  'UserLoginForm',
  'UserRegisterForm',
  'ShoppingCart',
  'ProductDetailView',
  'RelatedProductSlider',
  'HolidayGiftSlider',
  'HomePageCampaignsSection',
  'HolidayCategoryGridView',
]

const selected = ref('RelatedProductSlider')

const componentMap = {}
components.forEach((name) => {
  componentMap[name] = defineAsyncComponent(() => import(`./components/${name}.vue`))
})
</script>

<style scoped>
.app {
  display: flex;
  height: 100vh;
  font-family: sans-serif;
}

/* Sol menü */
.sidebar {
  width: 240px;
  background-color: #f7f7f7;
  padding: 1rem;
  border-right: 1px solid #ddd;
}

.sidebar h2 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.sidebar li:hover {
  background-color: #e0e0e0;
}

.sidebar li.active {
  background-color: #3498db;
  color: white;
}

/* Sağ içerik alanı */
.preview {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  background-color: #fff;
}
</style>
