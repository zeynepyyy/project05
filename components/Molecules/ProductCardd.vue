<template>
  <NuxtLink :to="`/product/${id}`" class="product-card-molecule">
    <div class="image-container">
       <span class="badge popular" v-if="Math.random() > 0.5">Popular now</span>
       <span class="badge bestseller" v-else-if="Math.random() > 0.5">Bestseller</span>
       <ProductImage :src="image" :alt="title" />
       
       <button class="play-btn" v-if="Math.random() > 0.7">▶</button>
       <button class="favorite-btn" @click="handleToggleFavorite" :class="{ 'is-active': isFavorite }">
        {{ isFavorite ? '❤️' : '♡' }}
       </button>
    </div>

    <CardInfo :title="title" :seller="seller" :price="price" />

    <div class="button-wrapper">
      <AddToCartButton @click.prevent="handleAddToCart($event)">Add to cart</AddToCartButton>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ProductImage from '../Atoms/ProductImage.vue'
import CardInfo from './CardInfo.vue'
import AddToCartButton from '../Atoms/AddToCartButton.vue'
import { useCartStore } from '~/stores/cart'
import { useFavoritesStore } from '~/stores/favorites' // [NEW]
import type { Product } from '~/types'

const props = defineProps<{
  id: string,
  title: string,
  seller?: string,
  price: string | number, // handle both form
  image: string
}>()

const cartStore = useCartStore()
const favoritesStore = useFavoritesStore() // [NEW]

// [NEW] Check if product is favorited
const isFavorite = computed(() => favoritesStore.isFavorite(props.id))

const handleAddToCart = (e: Event) => {
    e.preventDefault(); // Prevent any parent click events
    
    // Construct a product object from props
    const product: Product = {
        id: props.id,
        title: props.title,
        description: '',
        price: Number(props.price),
        currency: 'TRY',
        imageUrl: props.image,
        category: 'General'
    }
    cartStore.addToCart(product)
}

// [NEW] Toggle favorite handler
const handleToggleFavorite = (e: Event) => {
    e.preventDefault(); // prevent navigation
    const product: Product = {
        id: props.id,
        title: props.title,
        description: '',
        price: Number(props.price),
        currency: 'TRY',
        imageUrl: props.image,
        category: 'General'
    }
    favoritesStore.toggleFavorite(product)
}
</script>

<style scoped>
.product-card-molecule {
  /* Genişlik organizmada ayarlanacak (slider için) */
  flex: 0 0 auto;
  width: 250px; /* Ön tanımlı genişlik */

  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease;
  text-decoration: none; /* Link underline removal */
  color: inherit; /* Keep text color */
}

.product-card-molecule:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.button-wrapper {
  padding: 0 1rem 1rem;
}

.image-container {
  position: relative;
}

.badge {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: bold;
  z-index: 2;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.badge.popular {
  background: white;
  color: #222;
  border: 1px solid #ddd;
}

.badge.bestseller {
  background: #fdf5e6; /* light orange/yellow */
  color: #a0522d;
  border: 1px solid transparent;
}

.play-btn {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.favorite-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  opacity: 0;
  transition: opacity 0.2s;
}

.product-card-molecule:hover .favorite-btn {
  opacity: 1;
}
</style>
