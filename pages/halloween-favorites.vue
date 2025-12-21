<template>
  <div class="halloween-page">
    <div class="header-section">
      <h1 class="page-title">Halloween Favorites</h1>
      <p class="page-subtitle">The best finds, selected by Etsy experts</p>
      
      <div class="filter-pills">
         <button class="pill-btn">
           Price (TL) <span class="chevron">▼</span>
         </button>
         <button class="pill-btn">On sale</button>
         <button class="pill-btn">Etsy's Picks</button>
         <button class="pill-btn">
           Ships from <span class="chevron">▼</span>
         </button>
      </div>
    </div>

    <div class="product-grid-container">
       <div class="product-grid">
         <div v-for="(item, index) in halloweenItems" :key="index" class="product-card">
            <div class="product-img-wrap">
               <!-- Using reusable placeholder logic/images -->
               <img :src="item.image" class="product-img" />
               <button class="fav-icon-btn">
                  <Heart :size="20" color="#222" />
               </button>
            </div>
            
            <div class="product-info">
               <h3 class="product-item-title">{{ item.title }}</h3>
               <div class="product-meta">
                  <div class="product-rating" v-if="item.rating">
                     <span class="rating-val">{{ item.rating }}</span>
                     <Star :size="12" fill="#222" color="#222" />
                     <span class="rating-count">({{ item.reviewCount }})</span>
                  </div>
                  <span class="shop-name-meta">{{ item.shop }}</span>
               </div>
               
               <div class="product-price-row">
                  <span class="current-price">{{ item.price }} TL</span>
                  <span v-if="item.originalPrice" class="original-price">{{ item.originalPrice }} TL</span>
                  <span v-if="item.discount" class="discount-label">({{ item.discount }}% off)</span>
               </div>
            </div>
         </div>
       </div>
    </div>
    
    <!-- Related Searches Section -->
    <div class="related-searches-section">
      <h2 class="related-title">Related searches</h2>
      <div class="related-grid">
         <div v-for="(search, index) in relatedSearches" :key="index" class="related-item">
            <div class="related-img-circle">
               <img :src="search.image" class="related-img" />
            </div>
            <span class="related-text">{{ search.title }}</span>
         </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Star, Heart } from 'lucide-vue-next';

// Generating 36 mock items
const halloweenItems = Array.from({ length: 36 }, (_, i) => ({
  image: `/gift-prod-${(i % 16) + 1}.jpg`, // Cycling through existing gift images as placeholder
  title: `Halloween Item ${i + 1} - Spooky Decor`,
  rating: 4.8,
  reviewCount: (Math.random() * 5000).toFixed(0),
  shop: "HalloweenShop",
  price: (Math.random() * 1000 + 100).toFixed(2),
  isEtsyPick: i % 3 === 0
}));

const relatedSearches = [
  { title: "christmas ornament crochet pattern", image: "/gift-prod-11.jpg" },
  { title: "cheers print", image: "/gift-prod-12.jpg" },
  { title: "funky red print", image: "/gift-prod-7.jpg" },
  { title: "hanukkah gift tags", image: "/gift-prod-8.jpg" },
  { title: "victorian puzzle purse christmas", image: "/gift-prod-2.jpg" },
  { title: "book gift card", image: "/gift-prod-10.jpg" },
];
</script>

<style scoped>
.halloween-page {
  font-family: 'Guardian-EgypTT', serif;
  background: white;
  min-height: 100vh;
}

.header-section {
  padding: 3rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.page-title {
  font-family: 'Guardian-EgypTT', serif;
  font-size: 2.5rem;
  font-weight: 300;
  color: #222;
  margin-bottom: 0.5rem;
}

.page-subtitle {
  font-family: 'Segoe UI', sans-serif;
  font-size: 1rem;
  color: #595959;
  margin-bottom: 2rem;
}

.filter-pills {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.pill-btn {
  background: white;
  border: 1px solid #ccc;
  border-radius: 24px;
  padding: 8px 16px;
  font-family: 'Segoe UI', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #222;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: background 0.2s, border-color 0.2s;
}

.pill-btn:hover {
  background: #f5f5f5;
  border-color: #b0b0b0;
}

.chevron {
  font-size: 0.7rem;
}

.product-grid-container {
  padding: 0 2rem 4rem;
  display: flex;
  justify-content: center;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem 1.5rem;
  max-width: 1400px;
  width: 100%;
}

.product-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
}

.product-img-wrap {
  position: relative;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  background: #f5f5f5;
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.product-card:hover .product-img {
  transform: scale(1.05);
}

.fav-icon-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s;
  z-index: 2;
  box-shadow: 0 2px 4px rgba(0,0,0,0.15);
}

.product-card:hover .fav-icon-btn {
  opacity: 1;
}

.product-item-title {
  font-family: 'Segoe UI', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: #222;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.product-meta {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.85rem;
  color: #595959;
}

.rating-val {
  font-weight: 700;
  color: #222;
}

.product-price-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-top: 2px;
}

.current-price {
  font-family: 'Segoe UI', sans-serif;
  font-weight: 700;
  color: #222;
  font-size: 1rem;
}

.original-price {
  color: #595959;
  text-decoration: line-through;
  font-size: 0.85rem;
}

.discount-label {
  color: #2f8e22;
  font-size: 0.85rem;
}

/* Related Searches */
.related-searches-section {
  padding: 2rem 2rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
}

.related-title {
  font-family: 'Guardian-EgypTT', serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: #222;
  margin-bottom: 2rem;
}

.related-grid {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1400px;
}

.related-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  text-align: center;
  cursor: pointer;
}

.related-img-circle {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
  background: #f5f5f5;
  transition: transform 0.2s;
}

.related-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.related-item:hover .related-img-circle {
  transform: scale(1.05);
}

.related-text {
  font-family: 'Segoe UI', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #222;
  line-height: 1.3;
}

@media (max-width: 1200px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 900px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
  .related-grid {
    gap: 1rem;
  }
  .related-item {
    width: 120px;
  }
  .related-img-circle {
    width: 100px;
    height: 100px;
  }
}
</style>
