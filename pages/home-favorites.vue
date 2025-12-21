<template>
  <div class="home-favorites-page">
    <div class="hero-section">
      <h1 class="hero-title">Etsy's Guide to Home</h1>
      <p class="hero-subtitle">Discover original wall art, comfy bedding, unique lighting, and more from small shops.</p>
    </div>

    <div class="categories-section">
      <div class="categories-grid">
        <div v-for="(cat, index) in categories" :key="index" class="category-item">
           <div class="image-circle">
             <img :src="cat.image" :alt="cat.name" class="cat-img" />
           </div>
           <a href="#" class="category-link">
             {{ cat.name }} <span class="arrow">→</span>
           </a>
        </div>
      </div>
    </div>

    <!-- Winter Door Decor Section -->
    <div class="product-section">
      <h2 class="section-title">Winter door decor that wows</h2>
      
      <div class="filter-row">
         <button class="filter-btn">
           <SlidersHorizontal :size="16" />
           Filters
         </button>
      </div>

      <div class="product-grid">
         <div v-for="(item, index) in doorDecorItems" :key="index" class="product-card">
            <div class="product-img-wrap">
               <!-- Using fashion placeholders temporarily until user provides images -->
               <img :src="item.image" class="product-img" />
               <div v-if="item.isEtsyPick" class="etsy-pick-badge">Etsy's Pick</div>
               <button class="fav-icon-btn">
                  <Heart :size="20" color="#222" />
               </button>
            </div>
            
            <div class="product-info">
               <h3 class="product-item-title">{{ item.title }}</h3>
               <div class="product-meta">
                  <div class="product-rating">
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
               
               <button class="more-like-this">
                 More like this <span class="arrow">→</span>
               </button>
            </div>
         </div>
      </div>
    </div>

    <!-- Vintage Christmas Section -->
    <div class="trending-section">
      <div class="show-more-container" style="padding-top: 0; padding-bottom: 2rem;">
         <button class="show-more-btn">Show more</button>
      </div>
      
      <div class="trending-banner">
         <div class="trending-text-col">
            <h2 class="trending-title">A very vintage Christmas</h2>
            <p class="trending-desc">
               For festive decor that stands the test of time, check out our favorite retro pieces, from '70s Santa mugs to old-school stockings.
            </p>
            <a href="#" class="trending-link">Discover our picks <span class="arrow">→</span></a>
         </div>
         <div class="trending-img-col" :style="{ backgroundImage: `url('/home-vintage-christmas.jpg')` }"></div>
      </div>
    </div>

    <!-- Unique Ornaments Section -->
    <div class="product-section">
      <h2 class="section-title">Unique, handcrafted ornaments</h2>
      
      <div class="filter-row">
         <button class="filter-btn">
           <SlidersHorizontal :size="16" />
           Filters
         </button>
      </div>

      <div class="product-grid">
         <div v-for="(item, index) in ornamentItems" :key="index" class="product-card">
            <div class="product-img-wrap">
               <img :src="item.image" class="product-img" />
               <div v-if="item.isEtsyPick" class="etsy-pick-badge">Etsy's Pick</div>
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
               
               <button class="more-like-this">
                 More like this <span class="arrow">→</span>
               </button>
            </div>
         </div>
      </div>
    </div>

    <!-- Furnishing & Home Improvement Section -->
    <div class="dual-banner-section">
      <div class="show-more-container" style="padding: 2rem 0;">
         <button class="show-more-btn">Show more</button>
      </div>

      <div class="dual-banner-grid">
         <!-- Card 1 -->
         <div class="dual-card">
            <div class="dual-card-img" :style="{ backgroundImage: `url('/home-furnishing-1.jpg')` }"></div>
            <div class="dual-card-content">
               <h3 class="dual-card-title">Furnishing Favorites</h3>
               <a href="#" class="dual-card-link">Shop now <span class="arrow">→</span></a>
            </div>
         </div>
         
         <!-- Card 2 -->
         <div class="dual-card">
            <div class="dual-card-img" :style="{ backgroundImage: `url('/home-furnishing-2.jpg')` }"></div>
            <div class="dual-card-content">
               <h3 class="dual-card-title">Home Improvement</h3>
               <a href="#" class="dual-card-link">Shop now <span class="arrow">→</span></a>
            </div>
         </div>
      </div>
    </div>

    <!-- Discover More Section -->
    <div class="discover-more-section">
      <h2 class="section-title" style="text-align: center; font-size: 1.5rem; text-decoration: underline;">Discover More</h2>
      <div class="discover-grid">
         <div v-for="(item, index) in discoverMoreItems" :key="index" class="discover-card">
            <div class="discover-img-wrap">
               <img :src="item.image" class="discover-img" />
            </div>
            <div class="discover-info">
               <h3 class="discover-title">{{ item.title }}</h3>
            </div>
         </div>
      </div>
    </div>

    <!-- Gift Card Banner -->
    <div class="gift-card-section">
       <div class="gift-card-banner">
          <div class="gift-text-col">
             <h2 class="gift-title">Shop Etsy gift cards</h2>
             <p class="gift-desc">
                Get them something one-of-a-kind in minutes, no guesswork needed.
             </p>
             <a href="#" class="gift-link">Pick a design <span class="arrow">→</span></a>
          </div>
          <div class="gift-img-col">
             <!-- Placeholder for gift card collage -->
             <div class="gift-placeholder-art">
                <div class="gift-card-mock orange">Etsy</div>
                <div class="gift-card-mock blue">Etsy</div>
                <div class="gift-card-mock pink">Etsy</div>
             </div>
          </div>
       </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Star, Heart, SlidersHorizontal } from 'lucide-vue-next';

const categories = [
  { name: "Home Decor", image: "/home-cat-1.jpg" },
  { name: "Kitchen & Dining", image: "/home-cat-2.jpg" },
  { name: "Furniture", image: "/home-cat-3.jpg" },
  { name: "Handcrafted Rugs", image: "/home-cat-4.jpg" },
  { name: "Lighting", image: "/home-cat-5.jpg" },
  { name: "Bedding", image: "/home-cat-6.jpg" },
  { name: "Wall Decor & Mirrors", image: "/home-cat-7.jpg" },
  { name: "Wall Art Prints & Digital Download Art", image: "/home-cat-8.jpg" },
  { name: "Original Paintings", image: "/home-cat-9.jpg" },
  { name: "Home Improvement", image: "/home-cat-10.jpg" },
  { name: "Curtains & Window Treatments", image: "/home-cat-11.jpg" },
  { name: "Storage & Organization", image: "/home-cat-12.jpg" },
  { name: "Bathroom", image: "/home-cat-13.jpg" },
  { name: "Outdoor & Garden", image: "/home-cat-14.jpg" },
  { name: "Personalized Holiday Decor", image: "/home-cat-15.jpg" },
  { name: "Hosting Decor", image: "/home-cat-16.jpg" },
  { name: "Gifts for the Home", image: "/home-cat-17.jpg" },
  { name: "Vintage Home Decor", image: "/home-cat-18.jpg" },
];

const doorDecorItems = [
  // Row 1 (From Screenshot)
  {
    image: "/home-door-1.jpg", // Placeholder
    title: "Monogrammed Seersucker Toiletry Bag: Cust...",
    rating: 4.9,
    reviewCount: "4.2k",
    shop: "KvYshopUS",
    price: "234.63",
    originalPrice: "670.36",
    discount: 65,
    isEtsyPick: true
  },
  {
    image: "/home-door-2.jpg", // Placeholder
    title: "Deer in the Woods Christmas Decoration, Do...",
    rating: 4.9,
    reviewCount: "5.7k",
    shop: "CherishedMoments20",
    price: "657.06",
    isEtsyPick: true
  },
  {
    image: "/home-door-3.jpg", // Placeholder
    title: "Snowman Hat Door Hanger - Winter Door Ha...",
    rating: 4.9,
    reviewCount: "1.3k",
    shop: "WallflowersbyKerri",
    price: "1,340.28",
    isEtsyPick: true
  },
  {
    image: "/home-door-4.jpg", // Placeholder
    title: "2025 Embroidered Christmas Stocking, Knitt...",
    rating: 4.9,
    reviewCount: "12.8k",
    shop: "RobertSeCo",
    price: "162.23",
    originalPrice: "294.96",
    discount: 45,
    isEtsyPick: true
  },
  // Row 2 (Mock)
  {
    image: "/home-door-5.jpg", 
    title: "Winter Wreath for Front Door, Snowy Pine...",
    rating: 4.8,
    reviewCount: "3.1k",
    shop: "WreathDream",
    price: "1,450.00",
    isEtsyPick: true
  },
  {
    image: "/home-door-6.jpg", 
    title: "Personalized Door Mat - Welcome Mat...",
    rating: 5.0,
    reviewCount: "12k",
    shop: "CustomMats",
    price: "450.00",
    isEtsyPick: false
  },
  {
    image: "/home-door-7.jpg", 
    title: "Rustic Wooden Welcome Sign - Porch Decor...",
    rating: 4.9,
    reviewCount: "850",
    shop: "RusticCharm",
    price: "890.00",
    isEtsyPick: true
  },
  {
    image: "/home-door-8.jpg", 
    title: "Handmade Brass Door Knocker - Vintage...",
    rating: 4.7,
    reviewCount: "230",
    shop: "BrassWorks",
    price: "2,100.00",
    isEtsyPick: false
  },
  // Row 3 (Mock)
  {
    image: "/home-door-9.jpg", 
    title: "Solar Powered Lanterns - Outdoor Lighting...",
    rating: 4.8,
    reviewCount: "5.4k",
    shop: "GardenGlow",
    price: "1,250.00",
    isEtsyPick: true
  },
  {
    image: "/home-door-10.jpg", 
    title: "Ceramic House Number Tiles - Hand Pain...",
    rating: 5.0,
    reviewCount: "670",
    shop: "TileArtistry",
    price: "120.00",
    isEtsyPick: true
  },
  {
    image: "/home-door-11.jpg", 
    title: "Seasonal Garden Flag - Winter Wonderland...",
    rating: 4.7,
    reviewCount: "1.2k",
    shop: "FlagShop",
    price: "350.00",
    originalPrice: "500.00",
    discount: 30,
    isEtsyPick: false
  },
  {
    image: "/home-door-12.jpg", 
    title: "Large Outdoor Planter - Frost Resistant...",
    rating: 4.9,
    reviewCount: "920",
    shop: "GardenPottery",
    price: "3,400.00",
    isEtsyPick: true
  },
];

const ornamentItems = [
  // Row 1 (From Screenshot)
  {
    image: "/home-ornament-1.jpg", // Placeholder
    title: "The SILVERADO - Handmade Cowboy Hat Chr...",
    rating: 5.0,
    reviewCount: "124",
    shop: "MyOutWest",
    price: "983.20",
    isEtsyPick: true
  },
  {
    image: "/home-ornament-2.jpg", // Placeholder
    title: "Handcrafted Brass Irish Oak Leaf Christmas...",
    rating: 5.0,
    reviewCount: "103",
    shop: "DEBBIEFAIRBRASS",
    price: "2,421.38",
    originalPrice: "2,690.42",
    discount: 10,
    isEtsyPick: true
  },
  {
    image: "/home-ornament-3.jpg", // Placeholder
    title: "Handcrafted Stork Ornament: Expecting Ma...",
    rating: null,
    reviewCount: null,
    shop: "MerciMacheCo",
    price: "3,038.98",
    isEtsyPick: true
  },
  {
    image: "/home-ornament-4.jpg", // Placeholder
    title: "Fruit Honeycomb Paper Ornaments - Set of 4,...",
    rating: 5.0,
    reviewCount: "13.4k",
    shop: "Craftspring",
    price: "835.72",
    isEtsyPick: true
  },
  // Row 2 (Mock)
  {
    image: "/home-ornament-5.jpg", 
    title: "Ceramic Mushroom Ornament - Woodland...",
    rating: 4.9,
    reviewCount: "2.1k",
    shop: "ForestCeramics",
    price: "450.00",
    isEtsyPick: true
  },
  {
    image: "/home-ornament-6.jpg", 
    title: "Hand Painted Glass Bauble - Floral Design...",
    rating: 5.0,
    reviewCount: "890",
    shop: "GlassArtistry",
    price: "720.00",
    isEtsyPick: false
  },
  {
    image: "/home-ornament-7.jpg", 
    title: "Felt Animal Ornaments - Cute Fox & Bear...",
    rating: 4.8,
    reviewCount: "5.6k",
    shop: "FeltFriends",
    price: "320.00",
    isEtsyPick: true
  },
  {
    image: "/home-ornament-8.jpg", 
    title: "Personalized Wooden Slice Ornament...",
    rating: 4.9,
    reviewCount: "15k",
    shop: "WoodWorks",
    price: "150.00",
    isEtsyPick: true
  },
  // Row 3 (Mock)
  {
    image: "/home-ornament-9.jpg", 
    title: "Vintage Style Velvet Ribbon Bows...",
    rating: 5.0,
    reviewCount: "340",
    shop: "VelvetDreams",
    price: "280.00",
    isEtsyPick: false
  },
  {
    image: "/home-ornament-10.jpg", 
    title: "Macrame Star Ornament - Boho Christmas...",
    rating: 4.7,
    reviewCount: "1.2k",
    shop: "KnottyCrafts",
    price: "190.00",
    isEtsyPick: false
  },
  {
    image: "/home-ornament-11.jpg", 
    title: "Miniature Knit Sweater Ornament...",
    rating: 5.0,
    reviewCount: "450",
    shop: "TinyKnits",
    price: "380.00",
    isEtsyPick: true
  },
  {
    image: "/home-ornament-12.jpg", 
    title: "Hand Blown Glass Icicle Ornaments...",
    rating: 4.9,
    reviewCount: "2.8k",
    shop: "GlassBlowerStudio",
    price: "560.00",
    isEtsyPick: true
  },
];

const discoverMoreItems = [
  {
    image: "/home-cat-1.jpg", // Placeholder
    title: "Special Starts on Etsy",
  },
  {
    image: "/home-cat-2.jpg", // Placeholder
    title: "Global Seller Spotlight",
  },
  {
    image: "/home-cat-3.jpg", // Placeholder
    title: "Vintage Home Decor",
  },
  {
    image: "/home-cat-4.jpg", // Placeholder
    title: "Explore Unique Wall Art",
  },
];
</script>

<style scoped>
.home-favorites-page {
  font-family: 'Guardian-EgypTT', serif;
}

.hero-section {
  background-color: #2f3e28; /* Dark Olive Green */
  color: white;
  text-align: center;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-title {
  font-family: 'Guardian-EgypTT', serif;
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-family: 'Segoe UI', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
}

.categories-section {
  background: white;
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;
  max-width: 1400px;
  width: 100%;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.image-circle {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
  transition: transform 0.2s;
  background-color: #eee;
}

.image-circle:hover {
  transform: scale(1.05);
}

.cat-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-link {
  font-family: 'Segoe UI', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #222;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
}

.category-link:hover .arrow {
  transform: translateX(4px);
}

.arrow {
  transition: transform 0.2s;
  font-size: 1.1rem;
}

@media (max-width: 1200px) {
  .categories-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (max-width: 800px) {
  .categories-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 600px) {
  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Product Section Styles */
.product-section {
  padding: 2rem 2rem 4rem;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-title {
  font-family: 'Guardian-EgypTT', serif;
  font-size: 2rem;
  font-weight: 300;
  color: #222;
  margin-bottom: 2rem;
}

.filter-row {
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1.5rem;
}

.filter-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 24px;
  border: 1px solid #222;
  background: white;
  color: #222;
  font-family: 'Segoe UI', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s;
}

.filter-btn:hover {
  background: #f1f1f1;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
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
  aspect-ratio: 1; /* Square images */
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

.etsy-pick-badge {
  position: absolute;
  top: 8px;
  left: 8px;
  background: rgba(255, 255, 255, 0.9);
  color: #222;
  font-family: 'Segoe UI', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 12px;
  z-index: 2;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
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
  opacity: 0; /* Hidden by default */
  transition: opacity 0.2s;
  z-index: 2;
}

.product-card:hover .fav-icon-btn {
  opacity: 1;
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.product-item-title {
  font-family: 'Segoe UI', sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
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

.product-rating {
  display: flex;
  align-items: center;
  gap: 2px;
}

.rating-val {
  font-weight: 700;
  color: #222;
}

.shop-name-meta {
  color: #595959;
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
  color: #2f8e22; /* Green for discount usually, or specific Etsy green */
  font-size: 0.85rem;
}

.more-like-this {
  background: none;
  border: none;
  padding: 0;
  margin-top: 4px;
  font-family: 'Segoe UI', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: #222;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  opacity: 0;
  transition: opacity 0.2s;
}

.product-card:hover .more-like-this {
  opacity: 1;
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
  .filter-row {
      justify-content: center;
  }
  .product-grid {
    grid-template-columns: 1fr;
  }
}

/* Vintage Christmas Banner Styles */
.trending-section {
  padding: 0 2rem 4rem;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.show-more-btn {
  padding: 12px 24px;
  background: #f1f1f1;
  border: none;
  border-radius: 24px;
  font-family: 'Segoe UI', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: #222;
  cursor: pointer;
  transition: background 0.2s;
  margin-bottom: 2rem;
}

.show-more-btn:hover {
  background: #e1e1e1;
}

.trending-banner {
  display: flex;
  background: white;
  border: 1px solid #e1e1e1;
  border-radius: 12px;
  overflow: hidden;
  max-width: 1400px;
  width: 100%;
  height: 400px; /* Adjust height as needed */
}

.trending-text-col {
  flex: 1;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.trending-title {
  font-family: 'Guardian-EgypTT', serif;
  font-size: 3rem;
  font-weight: 300;
  color: #222;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.trending-desc {
  font-family: 'Segoe UI', sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #222;
  margin-bottom: 2rem;
  max-width: 500px;
}

.trending-link {
  font-family: 'Segoe UI', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #222;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
}

.trending-link:hover .arrow {
  transform: translateX(4px);
}

.trending-img-col {
  flex: 1;
  background-size: cover;
  background-position: center;
}

@media (max-width: 900px) {
    .trending-banner {
        flex-direction: column;
        height: auto;
    }
    .trending-img-col {
        height: 300px;
    }
    .trending-text-col {
        padding: 2rem;
    }
    .trending-title {
        font-size: 2rem;
    }
}

/* Dual Banner Section */
.dual-banner-section {
  padding: 0 2rem 4rem;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dual-banner-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1400px;
  width: 100%;
}

.dual-card {
  display: flex;
  background: white;
  border: 1px solid #e1e1e1;
  border-radius: 12px;
  overflow: hidden;
  height: 280px;
}

.dual-card-img {
  width: 50%;
  background-size: cover;
  background-position: center;
}

.dual-card-content {
  width: 50%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.dual-card-title {
  font-family: 'Guardian-EgypTT', serif;
  font-size: 1.8rem;
  font-weight: 300;
  color: #222;
  margin-bottom: 1rem;
}

.dual-card-link {
  font-family: 'Segoe UI', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: #222;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
}

.dual-card-link:hover .arrow {
  transform: translateX(4px);
}

@media (max-width: 900px) {
    .dual-banner-grid {
        grid-template-columns: 1fr;
    }
    .dual-card {
        flex-direction: column;
        height: auto;
    }
    .dual-card-img {
        width: 100%;
        height: 200px;
    }
    .dual-card-content {
        width: 100%;
    }
}

/* Discover More Section */
.discover-more-section {
  padding: 2rem 2rem 4rem;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.discover-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 1400px;
  width: 100%;
}

.discover-card {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: transform 0.2s;
  cursor: pointer;
}

.discover-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.discover-img-wrap {
  width: 100%;
  aspect-ratio: 4/3;
  background: #f5f5f5;
  overflow: hidden;
}

.discover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.discover-info {
  padding: 1rem;
}

.discover-title {
  font-family: 'Segoe UI', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #222;
}

/* Gift Card Banner */
.gift-card-section {
  padding: 0 2rem 4rem;
  background: white;
  display: flex;
  justify-content: center;
}

.gift-card-banner {
  background: #fdf3eb; /* Light beige/orange tint */
  border-radius: 12px;
  max-width: 1400px;
  width: 100%;
  display: flex;
  overflow: hidden;
  height: 200px;
}

.gift-text-col {
  flex: 1;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.gift-title {
  font-family: 'Guardian-EgypTT', serif;
  font-size: 1.8rem;
  font-weight: 300;
  color: #222;
  margin-bottom: 0.5rem;
}

.gift-desc {
  font-family: 'Segoe UI', sans-serif;
  font-size: 1rem;
  color: #222;
  margin-bottom: 1.5rem;
  max-width: 400px;
}

.gift-link {
  font-family: 'Segoe UI', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #222;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
}

.gift-img-col {
  flex: 1;
  background: #eef2f6; /* Placeholder background */
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gift-placeholder-art {
  display: flex;
  gap: 10px;
  transform: rotate(-5deg);
}

.gift-card-mock {
  width: 120px;
  height: 80px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Guardian-EgypTT', serif;
  color: white;
  font-size: 1.2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.gift-card-mock.orange { background: #f37121; }
.gift-card-mock.blue { background: #2f45cc; }
.gift-card-mock.pink { background: #fecaca; color: #d03d3d; }

@media (max-width: 900px) {
  .discover-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .gift-card-banner {
    flex-direction: column;
    height: auto;
  }
  .gift-img-col {
    height: 150px;
  }
}
@media (max-width: 600px) {
  .discover-grid {
    grid-template-columns: 1fr;
  }
}
</style>

