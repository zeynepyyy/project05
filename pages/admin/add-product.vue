<template>
  <div class="add-product-page">
    <h2>Add New Product</h2>
    <form @submit.prevent="handleSubmit" class="product-form">
      <div class="form-group">
        <label>Title</label>
        <input v-model="form.title" required />
      </div>
      <div class="form-group">
        <label>Price</label>
        <input type="number" v-model="form.price" required />
      </div>
      <div class="form-group">
        <label>Image URL</label>
        <input v-model="form.imageUrl" required />
      </div>
      <div class="form-group">
        <label>Category</label>
        <select v-model="form.category" required>
            <option disabled value="">Select a category</option>
            <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
            <option value="Other">Other</option>
        </select>
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea v-model="form.description"></textarea>
      </div>
      
      <button type="submit" :disabled="productStore.loading">
        {{ productStore.loading ? 'Adding...' : 'Add Product' }}
      </button>
    </form>
    <p v-if="successMsg" class="success">{{ successMsg }}</p>
    <p v-if="productStore.error" class="error">{{ productStore.error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useProductsStore } from '~/stores/products'

const productStore = useProductsStore()
const successMsg = ref('')

// Categories matching the Homepage grid
const categories = [
  'Personalized Gifts',
  'Home Favorites',
  'Gifts for Him',
  'Gifts for Her',
  'Gifts for Kids',
  'Gifts for Pets',
  'Advent Calendars',
  'Style Favorites',
  'Personalized Jewelry',
  'Festive Ornaments',
  'Holiday Hosting',
  'Special Local Finds'
]

const form = reactive({
  title: '',
  price: 0,
  imageUrl: '',
  category: '',
  description: '',
  currency: 'TRY'
})

const handleSubmit = async () => {
  await productStore.addProduct({ ...form })
  if (!productStore.error) {
    successMsg.value = 'Product added successfully!'
    form.title = ''
    form.price = 0
    form.imageUrl = ''
    form.description = ''
  }
}

definePageMeta({
    layout: 'default'
})
</script>

<style scoped>
.add-product-page {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.form-group {
    margin-bottom: 1rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
}

input, textarea, select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    background: #f1641e;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.success { color: green; }
.error { color: red; }
</style>
