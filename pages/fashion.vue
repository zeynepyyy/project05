<template>
  <div class="fashion-page">
    <div class="hero-section">
      <h1 class="hero-title">Etsy's Guide to Fashion</h1>
      <p class="hero-subtitle">From custom clothing to timeless jewelry, everything you need to upgrade your closet.</p>
    </div>

    <!-- Categories Section -->
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

    <!-- Discover Shops Section -->
    <div class="shops-section">
      <h2 class="shops-title">Discover shops we love</h2>
      
      <div class="shops-grid">
        <div v-for="(shop, index) in shops" :key="index" class="shop-card">
          <div class="shop-collage">
             <div class="collage-img" :style="{ backgroundImage: `url(${shop.images[0]})` }"></div>
             <div class="collage-img" :style="{ backgroundImage: `url(${shop.images[1]})` }"></div>
             <div class="collage-img" :style="{ backgroundImage: `url(${shop.images[2]})` }"></div>
             <div class="collage-img" :style="{ backgroundImage: `url(${shop.images[3]})` }"></div>
          </div>

          <div class="shop-info">
             <div class="shop-header-row">
                <div class="shop-avatar" :style="{ backgroundImage: `url(${shop.avatar})` }"></div>
                <div class="shop-text">
                   <h3 class="shop-name">{{ shop.name }}</h3>
                   <div class="shop-rating">
                      <div class="stars">
                        <Star v-for="n in 5" :key="n" :size="14" fill="#222" color="#222" />
                      </div>
                      <span class="review-count">({{ shop.reviews }})</span>
                   </div>
                </div>
                 <button class="fav-btn">
                   <Heart :size="20" />
                 </button>
             </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Refresh Winter Wardrobe Section -->
    <div class="wardrobe-section">
      <h2 class="wardrobe-title">Refresh your winter wardrobe</h2>
      
      <div class="filter-row">
         <button class="filter-btn">
           <SlidersHorizontal :size="16" />
           Filters
         </button>
      </div>

      <div class="wardrobe-grid">
         <div v-for="(item, index) in wardrobeItems" :key="index" class="wardrobe-card">
            <div class="wardrobe-img-wrap">
               <img :src="item.image" class="wardrobe-img" />
               <div v-if="item.isEtsyPick" class="etsy-pick-badge">Etsy's Pick</div>
               <button class="fav-icon-btn">
                  <Heart :size="20" color="#222" />
               </button>
            </div>
            
            <div class="wardrobe-info">
               <h3 class="wardrobe-item-title">{{ item.title }}</h3>
               <div class="wardrobe-meta">
                  <div class="wardrobe-rating">
                     <span class="rating-val">{{ item.rating }}</span>
                     <Star :size="12" fill="#222" color="#222" />
                     <span class="rating-count">({{ item.reviewCount }})</span>
                  </div>
                  <span class="shop-name-meta">{{ item.shop }}</span>
               </div>
               
               <div class="wardrobe-price-row">
                  <span class="current-price">{{ item.price }} TL</span>
                  <span v-if="item.originalPrice" class="original-price">{{ item.originalPrice }} TL</span>
                  <span v-if="item.discount" class="discount-label">({{ item.discount }}% off)</span>
               </div>
               
               <div v-if="item.freeShipping" class="shipping-tag">Free shipping</div>
               
               <button class="more-like-this">
                 More like this <span class="arrow">→</span>
               </button>
            </div>
         </div>
      </div>
    </div>
    <!-- Show More Button -->
    <div class="show-more-container">
       <button class="show-more-btn">Show more</button>
    </div>

    <!-- Jewelry Promo Section -->
    <div class="promo-section">
       <div class="promo-grid">
          <!-- Card 1 -->
          <div class="promo-card">
             <div class="promo-img" :style="{ backgroundImage: `url('/fashion-promo-1.jpg')` }"></div>
             <div class="promo-content">
                <h3 class="promo-title">Elevate your everyday jewelry</h3>
                <a href="#" class="promo-link">Shop now <span class="arrow">→</span></a>
             </div>
          </div>
          
          <!-- Card 2 -->
          <div class="promo-card">
             <div class="promo-img" :style="{ backgroundImage: `url('/fashion-promo-2.jpg')` }"></div>
             <div class="promo-content">
                <h3 class="promo-title">The Charm Shop</h3>
                <a href="#" class="promo-link">Shop now <span class="arrow">→</span></a>
             </div>
          </div>
       </div>
    </div>

    <!-- Keep Warm Accessories Section -->
    <div class="wardrobe-section">
      <h2 class="wardrobe-title">Keep warm with these accessories</h2>
      
      <div class="filter-row">
         <button class="filter-btn">
           <SlidersHorizontal :size="16" />
           Filters
         </button>
      </div>

      <div class="wardrobe-grid">
         <div v-for="(item, index) in accessoriesItems" :key="index" class="wardrobe-card">
            <div class="wardrobe-img-wrap">
               <img :src="item.image" class="wardrobe-img" />
               <div v-if="item.isEtsyPick" class="etsy-pick-badge">Etsy's Pick</div>
               <button class="fav-icon-btn">
                  <Heart :size="20" color="#222" />
               </button>
            </div>
            
            <div class="wardrobe-info">
               <h3 class="wardrobe-item-title">{{ item.title }}</h3>
               <div class="wardrobe-meta">
                  <div class="wardrobe-rating">
                     <span class="rating-val">{{ item.rating }}</span>
                     <Star :size="12" fill="#222" color="#222" />
                     <span class="rating-count">({{ item.reviewCount }})</span>
                  </div>
                  <span class="shop-name-meta">{{ item.shop }}</span>
               </div>
               
               <div class="wardrobe-price-row">
                  <span class="current-price">{{ item.price }} TL</span>
                  <span v-if="item.originalPrice" class="original-price">{{ item.originalPrice }} TL</span>
                  <span v-if="item.discount" class="discount-label">({{ item.discount }}% off)</span>
               </div>
               
               <div v-if="item.freeShipping" class="shipping-tag">Free shipping</div>
               
               <button class="more-like-this">
                 More like this <span class="arrow">→</span>
               </button>
            </div>
         </div>
      </div>
    </div>

    <!-- Trending Now Section -->
    <div class="trending-section">
      <div class="show-more-container" style="padding-top: 0; padding-bottom: 2rem;">
         <button class="show-more-btn">Show more</button>
      </div>
      
      <div class="trending-banner">
         <div class="trending-text-col">
            <h2 class="trending-title">Trending now: Burgundy hues</h2>
            <p class="trending-desc">
               Jump into one of our favorite colors for winter. The deep shade will bring a moody vibe to any outfit as we move into chillier temperatures.
            </p>
            <a href="#" class="trending-link">Try it out <span class="arrow">→</span></a>
         </div>
         <div class="trending-img-col" :style="{ backgroundImage: `url('/fashion-trend-burgundy.jpg')` }"></div>
      </div>
    </div>

    <!-- Personalized Jewelry Section -->
    <div class="wardrobe-section">
      <h2 class="wardrobe-title">Explore personalized jewelry</h2>
      
      <div class="filter-row">
         <button class="filter-btn">
           <SlidersHorizontal :size="16" />
           Filters
         </button>
      </div>

      <div class="wardrobe-grid">
         <div v-for="(item, index) in jewelryItems" :key="index" class="wardrobe-card">
            <div class="wardrobe-img-wrap">
               <img :src="item.image" class="wardrobe-img" />
               <div v-if="item.isEtsyPick" class="etsy-pick-badge">Etsy's Pick</div>
               <button class="fav-icon-btn">
                  <Heart :size="20" color="#222" />
               </button>
            </div>
            
            <div class="wardrobe-info">
               <h3 class="wardrobe-item-title">{{ item.title }}</h3>
               <div class="wardrobe-meta">
                  <div class="wardrobe-rating">
                     <span class="rating-val">{{ item.rating }}</span>
                     <Star :size="12" fill="#222" color="#222" />
                     <span class="rating-count">({{ item.reviewCount }})</span>
                  </div>
                  <span class="shop-name-meta">{{ item.shop }}</span>
               </div>
               
               <div class="wardrobe-price-row">
                  <span class="current-price">{{ item.price }} TL</span>
                  <span v-if="item.originalPrice" class="original-price">{{ item.originalPrice }} TL</span>
                  <span v-if="item.discount" class="discount-label">({{ item.discount }}% off)</span>
               </div>
               
               <div v-if="item.freeShipping" class="shipping-tag">Free shipping</div>
               
               <button class="more-like-this">
                 More like this <span class="arrow">→</span>
               </button>
            </div>
         </div>
      </div>
    </div>

    <!-- Discover More Section -->
    <div class="discover-section">
      <div class="show-more-container" style="padding-top: 0; padding-bottom: 2rem;">
         <button class="show-more-btn">Show more</button>
      </div>

      <h2 class="discover-title">Discover More</h2>
      
      <div class="discover-grid">
         <div class="discover-card">
            <div class="discover-img" :style="{ backgroundImage: `url('/fashion-discover-1.jpg')` }"></div>
            <div class="discover-text">
               <h3 class="discover-card-title">Special Starts on Etsy</h3>
            </div>
         </div>
         <div class="discover-card">
            <div class="discover-img" :style="{ backgroundImage: `url('/fashion-discover-2.jpg')` }"></div>
            <div class="discover-text">
               <h3 class="discover-card-title">The Linen Shop</h3>
            </div>
         </div>
         <div class="discover-card">
            <div class="discover-img" :style="{ backgroundImage: `url('/fashion-discover-3.jpg')` }"></div>
            <div class="discover-text">
               <h3 class="discover-card-title">The Personalization Shop</h3>
            </div>
         </div>
         <div class="discover-card">
            <div class="discover-img" :style="{ backgroundImage: `url('/fashion-discover-4.jpg')` }"></div>
            <div class="discover-text">
               <h3 class="discover-card-title">Etsy's Guide to Vintage</h3>
            </div>
         </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { Star, Heart, SlidersHorizontal } from 'lucide-vue-next';

const categories = [
  { name: "Women's Clothing", image: "/fashion-cat-1.jpg" },
  { name: "Men's Clothing", image: "/fashion-cat-2.jpg" },
  { name: "Kids & Baby Clothing", image: "/fashion-cat-3.jpg" },
  { name: "Ships Free: Cozy Knits", image: "/fashion-cat-4.jpg" },
  { name: "Personalized Tees & Sweatshirts", image: "/fashion-cat-5.jpg" },
  { name: "Jackets & Coats", image: "/fashion-cat-6.jpg" },
  { name: "Necklaces", image: "/fashion-cat-7.jpg" },
  { name: "Earrings", image: "/fashion-cat-8.jpg" },
  { name: "Rings", image: "/fashion-cat-9.jpg" },
  { name: "Bracelets", image: "/fashion-cat-10.jpg" },
  { name: "Scarves", image: "/fashion-cat-11.jpg" },
  { name: "Bags & Purses", image: "/fashion-cat-12.jpg" },
];

const shops = [
  { 
    name: "SbriStudio", 
    reviews: "2,731", 
    avatar: "/fashion-cat-1.jpg", 
    images: ["/fashion-cat-1.jpg", "/fashion-cat-2.jpg", "/fashion-cat-3.jpg", "/fashion-cat-4.jpg"] 
  },
  { 
    name: "Plexida", 
    reviews: "2,077", 
    avatar: "/fashion-cat-5.jpg", 
    images: ["/fashion-cat-5.jpg", "/fashion-cat-6.jpg", "/fashion-cat-7.jpg", "/fashion-cat-8.jpg"] 
  },
  { 
    name: "GemBlue", 
    reviews: "2,456", 
    avatar: "/fashion-cat-9.jpg", 
    images: ["/fashion-cat-9.jpg", "/fashion-cat-10.jpg", "/fashion-cat-11.jpg", "/fashion-cat-12.jpg"] 
  },
  { 
    name: "LetterParty", 
    reviews: "253", 
    avatar: "/fashion-cat-2.jpg", 
    images: ["/fashion-cat-2.jpg", "/fashion-cat-4.jpg", "/fashion-cat-6.jpg", "/fashion-cat-8.jpg"] 
  },
];

const wardrobeItems = [
  {
    image: "/fashion-cat-4.jpg",
    title: "Nordic Style Women Jumper, Icelandic Merino...",
    rating: 4.9,
    reviewCount: "4.9k",
    shop: "WoolHouseESHOP",
    price: "8,426.80",
    isEtsyPick: true,
    freeShipping: true
  },
  {
    image: "/fashion-cat-2.jpg",
    title: "Brown Chunky Knit Merino Wool Women's Sw...",
    rating: 4.9,
    reviewCount: "555",
    shop: "KnotoWear",
    price: "7,018.85",
    originalPrice: "7,798.72",
    discount: 10,
    isEtsyPick: true,
    freeShipping: true
  },
  {
    image: "/fashion-cat-6.jpg",
    title: "Men's Tailored Pleated Vintage Trousers | Size...",
    rating: 5.0,
    reviewCount: "489",
    shop: "Vabrix",
    price: "11,776.59",
    isEtsyPick: true,
    freeShipping: false
  },
  {
    image: "/fashion-cat-1.jpg",
    title: "Khaki Corduroy Pants: Elastic Waist Cotton Tr...",
    rating: 4.9,
    reviewCount: "3.7k",
    shop: "Lovecutething",
    price: "2,735.09",
    originalPrice: "3,038.98",
    discount: 10,
    isEtsyPick: true,
    freeShipping: false
  },
  {
    image: "/fashion-cat-3.jpg", 
    title: "Quilted linen jacket, linen padded coat with p...",
    rating: 4.9,
    reviewCount: "10.8k",
    shop: "LINENIDstudio",
    price: "8,989.46",
    originalPrice: "11,985.95",
    discount: 25,
    isEtsyPick: true,
    freeShipping: true
  },
  {
    image: "/fashion-cat-5.jpg", 
    title: "Personalised Minimalist Leather Clutch Bag...",
    rating: 4.9,
    reviewCount: "3.9k",
    shop: "Studiolowen",
    price: "1,674.04",
    isEtsyPick: true,
    freeShipping: false
  },
  {
    image: "/fashion-cat-7.jpg", 
    title: "Lace-Up Velvet Leather Booties: Cigaro Brow...",
    rating: 4.9,
    reviewCount: "2k",
    shop: "MIUMMASH",
    price: "11,985.95",
    isEtsyPick: true,
    freeShipping: true
  },
  {
    image: "/fashion-cat-8.jpg", 
    title: "CUSTOM Quilt Coat - Send your own Quilt to ...",
    rating: 4.9,
    reviewCount: "161",
    shop: "NorthernHomemakers",
    price: "12,290.01",
    isEtsyPick: true,
    freeShipping: false
  }
];

const accessoriesItems = [
  // Row 1 (From Screenshot)
  {
    image: "/fashion-cat-11.jpg", // Headscarf placeholder
    title: "PILLOW HEADSCARF - Balaclava in Dark Brow...",
    rating: 4.8,
    reviewCount: "1.9k",
    shop: "AnotherHatBag",
    price: "4,010.32",
    originalPrice: "5,012.64",
    discount: 20,
    isEtsyPick: true,
    freeShipping: false
  },
  {
    image: "/fashion-cat-12.jpg", // Scarf placeholder
    title: "Wool Warm Y2K Retro Striped Scarf Cozy Vint...",
    rating: 5.0,
    reviewCount: "46",
    shop: "Sovtstore",
    price: "1,405.00",
    isEtsyPick: true,
    freeShipping: false
  },
  {
    image: "/fashion-cat-4.jpg", // Hat placeholder
    title: "Man's cap and scarf set, Knitted natural meri...",
    rating: 4.9,
    reviewCount: "4.9k",
    shop: "WoolHouseESHOP",
    price: "2,261.11",
    originalPrice: "2,512.34",
    discount: 10,
    isEtsyPick: true,
    freeShipping: false
  },
  {
    image: "/fashion-cat-3.jpg", // Beanie placeholder
    title: "Chunky Mohair Beanie, Womens Winter Knit...",
    rating: 4.8,
    reviewCount: "2.1k",
    shop: "Plexida",
    price: "4,972.34",
    isEtsyPick: true,
    freeShipping: true
  },
  // Row 2 (Mock Data)
  {
    image: "/fashion-cat-1.jpg", 
    title: "Oversized Cashmere Wrap Scarf, Soft Winter...",
    rating: 4.9,
    reviewCount: "820",
    shop: "CozyKnitsOnly",
    price: "3,150.00",
    isEtsyPick: true,
    freeShipping: true
  },
  {
    image: "/fashion-cat-2.jpg", 
    title: "Leather Gloves with Cashmere Lining, Touch...",
    rating: 4.7,
    reviewCount: "340",
    shop: "LeatherLux",
    price: "2,850.50",
    isEtsyPick: false,
    freeShipping: true
  },
  {
    image: "/fashion-cat-5.jpg", 
    title: "Fair Isle Pattern Wool Socks (Set of 3) - Wa...",
    rating: 5.0,
    reviewCount: "1.2k",
    shop: "NordicWarmth",
    price: "980.00",
    isEtsyPick: true,
    freeShipping: false
  },
  {
    image: "/fashion-cat-6.jpg", 
    title: "Handmade Fleece Beret - Multiple Colors...",
    rating: 4.8,
    reviewCount: "55",
    shop: "ArtistHats",
    price: "1,200.00",
    isEtsyPick: false,
    freeShipping: false
  },
  // Row 3 (Mock Data)
  {
    image: "/fashion-cat-7.jpg", 
    title: "Knitted Fingerless Gloves - Alpaca Wool...",
    rating: 4.9,
    reviewCount: "2.5k",
    shop: "AlpacaDirect",
    price: "1,450.00",
    isEtsyPick: true,
    freeShipping: true
  },
  {
    image: "/fashion-cat-8.jpg", 
    title: "Sherpa Lined Winter Headband - Ear Warmer...",
    rating: 4.6,
    reviewCount: "190",
    shop: "WinterReady",
    price: "850.00",
    isEtsyPick: false,
    freeShipping: false
  },
  {
    image: "/fashion-cat-9.jpg", 
    title: "Minimalist Silver Beanie Pin - Hat Accessory...",
    rating: 5.0,
    reviewCount: "89",
    shop: "SilverSmithCo",
    price: "550.00",
    isEtsyPick: true,
    freeShipping: true
  },
  {
    image: "/fashion-cat-10.jpg", 
    title: "Thermal Winter Hiking Socks - Extra Thick...",
    rating: 4.8,
    reviewCount: "3.1k",
    shop: "AdventureGear",
    price: "720.00",
    originalPrice: "900.00",
    discount: 20,
    isEtsyPick: false,
    freeShipping: true
  },
];

const jewelryItems = [
  // Row 1 (From Screenshot)
  {
    image: "/fashion-jewelry-1.jpg", 
    title: "Personalized gold plated secret locket neckla...",
    rating: 4.9,
    reviewCount: "1.4k",
    shop: "isabellebeshop",
    price: "9,316.59",
    isEtsyPick: true,
    freeShipping: true
  },
  {
    image: "/fashion-jewelry-2.jpg", 
    title: "Personalized Sterling Silver Name Ring • Cust...",
    rating: 4.8,
    reviewCount: "5.3k",
    shop: "MoruStudio",
    price: "1,407.76",
    originalPrice: "1,877.02",
    discount: 25,
    isEtsyPick: true,
    freeShipping: false
  },
  {
    image: "/fashion-jewelry-3.jpg", 
    title: "Custom Name Necklace by Caitlyn Minimalist...",
    rating: 4.8,
    reviewCount: "719.7k",
    shop: "CaitlynMinimalist",
    price: "1,313.91",
    originalPrice: "1,877.02",
    discount: 30,
    isEtsyPick: true,
    freeShipping: false
  },
  {
    image: "/fashion-jewelry-4.jpg", 
    title: "Hand Engraved 14k Gold, Sterling Silver Oval ...",
    rating: 4.9,
    reviewCount: "2.3k",
    shop: "Everlijewelry",
    price: "7,597.46",
    isEtsyPick: true,
    freeShipping: false
  },
  // Row 2
  {
    image: "/fashion-jewelry-6.jpg", 
    title: "Custom Birthstone Ring - Family Gift for Mom...",
    rating: 4.9,
    reviewCount: "12k",
    shop: "JewelToHeart",
    price: "2,150.00",
    isEtsyPick: true,
    freeShipping: true
  },
  {
    image: "/fashion-jewelry-5.jpg", 
    title: "Engraved Bar Bracelet - Gold, Rose Gold, Si...",
    rating: 4.7,
    reviewCount: "890",
    shop: "SimpleShine",
    price: "950.50",
    isEtsyPick: false,
    freeShipping: true
  },
  {
    image: "/fashion-jewelry-7.jpg", 
    title: "Initial Necklace Dainty Letter Pendant - 14k...",
    rating: 5.0,
    reviewCount: "5.6k",
    shop: "GoldStandard",
    price: "1,800.00",
    isEtsyPick: true,
    freeShipping: false
  },
  {
    image: "/fashion-jewelry-8.jpg", 
    title: "Personalized Men's Leather Bracelet - Engrav...",
    rating: 4.8,
    reviewCount: "3.2k",
    shop: "RusticCuff",
    price: "1,200.00",
    isEtsyPick: true,
    freeShipping: true
  },
  // Row 3
  {
    image: "/fashion-jewelry-9.jpg", 
    title: "Actual Handwriting Necklace - Memorial Jew...",
    rating: 4.9,
    reviewCount: "9.5k",
    shop: "MemoriesGold",
    price: "2,450.00",
    isEtsyPick: true,
    freeShipping: true
  },
  {
    image: "/fashion-jewelry-10.jpg", 
    title: "Custom Soundwave Ring - Voice Recording...",
    rating: 4.6,
    reviewCount: "450",
    shop: "AudioArt",
    price: "3,850.00",
    isEtsyPick: false,
    freeShipping: false
  },
  {
    image: "/fashion-jewelry-11.jpg", 
    title: "Monogram Signet Ring - Sterling Silver...",
    rating: 5.0,
    reviewCount: "1.2k",
    shop: "ClassicSignet",
    price: "1,550.00",
    isEtsyPick: true,
    freeShipping: true
  },
  {
    image: "/fashion-jewelry-12.jpg", 
    title: "Coordinates Necklace - Long Distance Gift...",
    rating: 4.8,
    reviewCount: "2.8k",
    shop: "TravelTags",
    price: "1,120.00",
    originalPrice: "1,400.00",
    discount: 20,
    isEtsyPick: false,
    freeShipping: true
  },
];
</script>

<style scoped>
.fashion-page {
  font-family: 'Guardian-EgypTT', serif;
}

.hero-section {
  background-color: #2f3e28;
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

/* Response layout */
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

/* Shops Section Styles */
.shops-section {
  padding: 4rem 2rem;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.shops-title {
  font-family: 'Guardian-EgypTT', serif;
  font-size: 2rem;
  color: #222;
  margin-bottom: 3rem;
  text-align: center;
}

.shops-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1400px;
  width: 100%;
}

.shop-card {
  border: 1px solid #e1e1e1;
  border-radius: 12px;
  overflow: hidden;
  transition: box-shadow 0.2s;
}

.shop-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.shop-collage {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2px;
  height: 250px;
}

.collage-img {
  background-size: cover;
  background-position: center;
  background-color: #f0f0f0;
}

.shop-info {
  padding: 1rem;
}

.shop-header-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.shop-avatar {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  background-color: #eee;
}

.shop-text {
  flex: 1;
}

.shop-name {
  font-family: 'Segoe UI', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 2px;
}

.shop-rating {
  display: flex;
  align-items: center;
  gap: 4px;
}

.stars {
  display: flex;
  gap: 1px;
}

.review-count {
  font-size: 0.8rem;
  color: #595959;
}

.fav-btn {
  background: none;
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
}

.fav-btn:hover {
  background: #f5f5f5;
  border-color: #222;
}

@media (max-width: 1000px) {
    .shops-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width: 600px) {
    .shops-grid {
        grid-template-columns: 1fr;
    }
}

/* Wardrobe Section Styles */
.wardrobe-section {
  padding: 4rem 2rem;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wardrobe-title {
  font-family: 'Guardian-EgypTT', serif;
  font-size: 2rem;
  color: #222;
  margin-bottom: 2rem;
  text-align: center;
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
  background: white;
  border: 1px solid #222;
  border-radius: 24px;
  padding: 8px 16px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s;
}

.filter-btn:hover {
  background: #f5f5f5;
}

.wardrobe-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1400px;
  width: 100%;
}

.wardrobe-card {
  display: flex;
  flex-direction: column;
}

.wardrobe-img-wrap {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 1; 
  margin-bottom: 0.5rem;
}

.wardrobe-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s;
}

.wardrobe-img-wrap:hover .wardrobe-img {
  transform: scale(1.05);
}

.etsy-pick-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: white;
  color: #222;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 700;
  box-shadow: 0 2px 4px rgba(0,0,0,0.15);
}

.fav-icon-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  opacity: 1;
}

.wardrobe-info {
  display: flex;
  flex-direction: column;
}

.wardrobe-item-title {
  font-family: 'Segoe UI', sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  color: #222;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.wardrobe-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  color: #222;
  margin-bottom: 4px;
}

.wardrobe-rating {
  display: flex;
  align-items: center;
  gap: 2px;
}

.rating-val { font-weight: 600; }
.rating-count { color: #595959; }

.shop-name-meta { color: #595959; }

.wardrobe-price-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 4px;
  flex-wrap: wrap;
}

.current-price {
  font-weight: 700;
  color: #222;
  font-size: 1rem;
}

.original-price {
  text-decoration: line-through;
  color: #595959;
  font-size: 0.85rem;
}

.discount-label {
  color: #166e28;
  font-size: 0.85rem;
}

.shipping-tag {
  background: #d4e9d7;
  color: #222;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  width: fit-content;
  font-weight: 600;
  margin-bottom: 8px;
}

.more-like-this {
  background: none;
  border: none;
  padding: 0;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: auto;
  color: #222;
}

.more-like-this:hover .arrow {
  transform: translateX(4px);
}

@media (max-width: 1000px) {
    .wardrobe-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px) {
    .wardrobe-grid { grid-template-columns: 1fr; }
}

/* Promo Section Styles */
.show-more-container {
  display: flex;
  justify-content: center;
  padding: 2rem 0 4rem;
  background: white;
}

.show-more-btn {
  background: #f0f0f0; /* Light gray pill */
  color: #222;
  border: none;
  border-radius: 24px;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}

.show-more-btn:hover {
  background: #e0e0e0;
}

.promo-section {
  padding: 0 2rem 4rem;
  background: white;
  display: flex;
  justify-content: center;
}

.promo-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1400px;
  width: 100%;
}

.promo-card {
  display: flex;
  background: white;
  border: 1px solid #e1e1e1;
  border-radius: 12px;
  overflow: hidden;
  height: 280px; /* Adjust height as needed */
  transition: box-shadow 0.2s;
}

.promo-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.promo-img {
  flex: 0 0 40%; /* Image takes 40% width */
  background-size: cover;
  background-position: center;
}

.promo-content {
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.promo-title {
  font-family: 'Guardian-EgypTT', serif;
  font-size: 2rem;
  font-weight: 300;
  color: #222;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.promo-link {
  font-family: 'Segoe UI', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: #222;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  border-bottom: 2px solid transparent; /* Prepare for underline effect if wanted */
}

.promo-link:hover .arrow {
  transform: translateX(4px);
}

@media (max-width: 900px) {
    .promo-grid {
        grid-template-columns: 1fr;
    }
}

/* Trending Section Styles */
.trending-section {
  padding: 0 2rem 4rem;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.trending-banner {
  display: flex;
  background: white;
  border: 1px solid #e1e1e1;
  border-radius: 12px;
  overflow: hidden;
  max-width: 1400px;
  width: 100%;
  height: 480px; /* Large banner height */
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

/* Discover More Section Styles */
.discover-section {
  padding: 0 2rem 4rem;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.discover-title {
  font-family: 'Guardian-EgypTT', serif;
  font-size: 2rem;
  font-weight: 300;
  color: #222;
  margin-bottom: 2rem;
  text-decoration: underline;
  text-decoration-color: #222;
  text-underline-offset: 4px;
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
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e1e1e1;
  background: white;
  transition: box-shadow 0.2s;
  cursor: pointer;
}

.discover-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.discover-img {
  height: 220px;
  background-size: cover;
  background-position: center;
}

.discover-text {
  padding: 1rem;
}

.discover-card-title {
  font-family: 'Segoe UI', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #222;
}

@media (max-width: 1000px) {
    .discover-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width: 600px) {
    .discover-grid {
        grid-template-columns: 1fr;
    }
}
</style>
