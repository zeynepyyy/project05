<template>
  <div class="gifts-page">
    <!-- Hero Section -->
    <div class="hero-section">
      <h1 class="hero-title">Etsy’s Best Gift Guides</h1>
      <p class="hero-subtitle">Discover curated picks for every person and moment, straight from extraordinary small shops.</p>
    </div>

    <!-- Categories Grid -->
    <div class="categories-container">
      <div class="categories-grid">
        <div v-for="(cat, index) in giftCategories" :key="index" class="category-item">
             <div class="image-circle">
               <img :src="cat.image" :alt="cat.name" class="cat-img" />
             </div>
           <a href="#" class="category-link">
             {{ cat.name }} <span class="arrow">→</span>
           </a>
        </div>
      </div>
    </div>
    <!-- Ready-to-ship Presents Section -->
    <div class="product-section">
      <h2 class="section-title">Ready-to-ship presents</h2>
      
      <div class="filter-row">
         <button class="filter-btn">
           <SlidersHorizontal :size="16" />
           Filters
         </button>
      </div>

      <div class="product-grid">
         <div v-for="(item, index) in readyToShipItems" :key="index" class="product-card">
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
    
    <!-- Presents you can personalize Section -->
    <div class="product-section">
      <h2 class="section-title">Presents you can personalize</h2>
      
      <div class="filter-row">
         <button class="filter-btn">
           <SlidersHorizontal :size="16" />
           Filters
         </button>
      </div>

      <div class="product-grid">
         <div v-for="(item, index) in personalizedItems" :key="index" class="product-card">
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

    <!-- Show More & Discovery Section -->
    <div class="show-more-container">
       <button class="show-more-btn">Show more</button>
    </div>

    <div class="discovery-section">
      <div class="discover-grid">
         <div v-for="(card, index) in discoveryItems" :key="index" class="discover-card">
            <div class="discover-img-wrap">
               <img :src="card.image" class="discover-img" />
            </div>
            <div class="discover-info">
               <h3 class="discover-title">{{ card.title }}</h3>
            </div>
         </div>
      </div>
    </div>

    <!-- Gift Card Section -->
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
            <div class="gift-placeholder-art">
               <!-- Simple CSS art to mimic cards -->
               <div class="gift-card-mock orange" style="transform: rotate(-10deg) translateY(10px);">Etsy</div>
               <div class="gift-card-mock blue" style="transform: rotate(5deg); z-index: 2;">Etsy</div>
               <div class="gift-card-mock pink" style="transform: rotate(20deg) translateY(10px);">Etsy</div>
            </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Star, Heart, SlidersHorizontal } from 'lucide-vue-next';
const giftCategories = [
  { name: "Top 100 Digital Downloads", image: "/gift-prod-1.jpg" },
  { name: "Top 100 Gifts", image: "/gift-prod-2.jpg" },
  { name: "Gifts for Him", image: "/gift-prod-3.jpg" },
  { name: "Gifts for Her", image: "/gift-prod-4.jpg" },
  { name: "Gifts for Kids", image: "/gift-prod-5.jpg" },
  { name: "Gifts for Pets", image: "/gift-prod-6.jpg" },
  { name: "Personalized Gifts", image: "/gift-prod-7.jpg" },
  { name: "Gifts for Couples", image: "/gift-prod-8.jpg" },
  { name: "Gifts for Grandparents", image: "/gift-prod-9.jpg" },
  { name: "Gifts for Friends", image: "/gift-prod-10.jpg" },
  { name: "Stocking Stuffers", image: "/gift-prod-11.jpg" },
  { name: "Gift Accessories", image: "/gift-prod-12.jpg" },
  { name: "Birthday Gifts", image: "/gift-prod-13.jpg" },
  { name: "Anniversary Gifts", image: "/gift-prod-14.jpg" },
  { name: "Self-Care Gifts", image: "/gift-prod-15.jpg" },
];

const getPlaceholderColor = (index: number) => {
  const colors = ['#e0f2f1', '#fce4ec', '#fff3e0', '#e8eaf6', '#f3e5f5'];
  return colors[index % colors.length];
};

const readyToShipItems = [
  // Row 1
  {
    image: "/gift-prod-1.jpg",
    title: "Custom Hand-Drawn House Pencil Sketch",
    rating: 4.8,
    reviewCount: "25.8k",
    shop: "Letterfest",
    price: "2,436.92",
    originalPrice: "2,866.79",
    discount: 15,
    isEtsyPick: true
  },
  {
    image: "/gift-prod-2.jpg",
    title: "Personalised Leather Keyring Monogram",
    rating: 4.8,
    reviewCount: "38.5k",
    shop: "LaserChimp",
    price: "657.06",
    isEtsyPick: true
  },
  {
    image: "/gift-prod-3.jpg",
    title: "Personalised Wooden plane Toy: Beech Wood",
    rating: 4.9,
    reviewCount: "5.3k",
    shop: "ElfPersonalisedGifts",
    price: "1,013.99",
    originalPrice: "1,126.99",
    discount: 10,
    isEtsyPick: true
  },
  {
    image: "/gift-prod-4.jpg",
    title: "Green Onyx Marble Chess Set | Unique Hand...",
    rating: 4.8,
    reviewCount: "1.8k",
    shop: "MarbleCultures",
    price: "5,586.37",
    isEtsyPick: true
  },
  // Row 2
  {
    image: "/gift-prod-5.jpg",
    title: "Handmade Ceramic Mug - Speckled Clay",
    rating: 4.9,
    reviewCount: "2.1k",
    shop: "PotteryStudio",
    price: "450.00",
    isEtsyPick: true
  },
  {
    image: "/gift-prod-6.jpg",
    title: "Minimalist Gold Necklace - 14k Plated",
    rating: 4.7,
    reviewCount: "12k",
    shop: "JewelryBox",
    price: "320.00",
    isEtsyPick: false
  },
  {
    image: "/gift-prod-7.jpg",
    title: "Organic Cotton Tote Bag - Custom Print",
    rating: 5.0,
    reviewCount: "560",
    shop: "EcoTote",
    price: "180.00",
    isEtsyPick: true
  },
  {
    image: "/gift-prod-8.jpg",
    title: "Vintage Style Brass Candlestick Holder",
    rating: 4.8,
    reviewCount: "3.4k",
    shop: "VintageFinds",
    price: "890.00",
    isEtsyPick: true
  },
  // Row 3
  {
    image: "/gift-prod-9.jpg",
    title: "Personalized Wooden Cutting Board",
    rating: 4.9,
    reviewCount: "8.2k",
    shop: "WoodCrafts",
    price: "1,200.00",
    isEtsyPick: true
  },
  {
    image: "/gift-prod-10.jpg",
    title: "Hand-Poured Soy Wax Candle - Lavender",
    rating: 4.7,
    reviewCount: "4.5k",
    shop: "CandleCo",
    price: "250.00",
    isEtsyPick: false
  },
  {
    image: "/gift-prod-11.jpg",
    title: "Knitted Wool Scarf - Chunky Knit",
    rating: 5.0,
    reviewCount: "1.2k",
    shop: "CozyKnits",
    price: "680.00",
    isEtsyPick: true
  },
  {
    image: "/gift-prod-12.jpg",
    title: "Abstract Art Print - Digital Download",
    rating: 4.8,
    reviewCount: "15k",
    shop: "ArtPrintsDaily",
    price: "120.00",
    isEtsyPick: true
  },
  // Row 4
  {
    image: "/gift-prod-13.jpg",
    title: "Leather Passport Holder - Personalized",
    rating: 4.9,
    reviewCount: "2.8k",
    shop: "LeatherWorks",
    price: "450.00",
    isEtsyPick: true
  },
  {
    image: "/gift-prod-14.jpg",
    title: "Macrame Plant Hanger - Boho Decor",
    rating: 4.7,
    reviewCount: "3.1k",
    shop: "BohoHome",
    price: "220.00",
    isEtsyPick: false
  },
  {
    image: "/gift-prod-15.jpg",
    title: "Custom Pet Portrait - Watercolor",
    rating: 5.0,
    reviewCount: "920",
    shop: "PetArtistry",
    price: "1,500.00",
    isEtsyPick: true
  },
  {
    image: "/gift-prod-16.jpg", // Duplicated image
    title: "Handmade Soap Set - Gift Box",
    rating: 4.8,
    reviewCount: "6.4k",
    shop: "SoapNature",
    price: "380.00",
    isEtsyPick: true
  },
];

const personalizedItems = [
  {
    image: "/gift-personal-1.jpg", 
    title: "Personalised Bunny, Handmade Bunny Plush...",
    rating: 4.9,
    reviewCount: "97",
    shop: "TheBunnyHat",
    price: "860.34",
    originalPrice: "1,075.57",
    discount: 20,
    isEtsyPick: true
  },
  {
    image: "/gift-personal-2.jpg", 
    title: "Custom Hand-Drawn House Pencil Sketch...",
    rating: 4.8,
    reviewCount: "25.8k",
    shop: "Letterfest",
    price: "2,436.92",
    originalPrice: "2,866.79",
    discount: 15,
    isEtsyPick: true
  },
  {
    image: "/gift-personal-3.jpg", 
    title: "Custom Embroidered Pet Portrait Scarf...",
    rating: 4.7,
    reviewCount: "155",
    shop: "ShrimplyCreative",
    price: "2,689.82",
    isEtsyPick: true
  },
  {
    image: "/gift-personal-4.jpg", 
    title: "Personalized Punch Needle Initial Keychain...",
    rating: 4.9,
    reviewCount: "14.1k",
    shop: "EmbroiderywithAycan",
    price: "558.19",
    originalPrice: "1,116.83",
    discount: 50,
    isEtsyPick: true
  },
  {
    image: "/gift-personal-5.jpg", 
    title: "Custom Ceramic Mug - Name & Date",
    rating: 5.0,
    reviewCount: "2.3k",
    shop: "MugMaster",
    price: "450.00",
    isEtsyPick: true
  },
  {
    image: "/gift-personal-6.jpg", 
    title: "Engraved Wooden Cutting Board",
    rating: 4.8,
    reviewCount: "5.1k",
    shop: "WoodEtch",
    price: "1,200.00",
    isEtsyPick: true
  },
  {
    image: "/gift-personal-7.jpg", 
    title: "Personalized Leather Journal",
    rating: 4.9,
    reviewCount: "890",
    shop: "LeatherBind",
    price: "650.00",
    isEtsyPick: true
  },
  {
    image: "/gift-personal-8.jpg", 
    title: "Custom Pet Portrait Painting",
    rating: 5.0,
    reviewCount: "1.2k",
    shop: "PetArt",
    price: "1,500.00",
    isEtsyPick: true
  },
  {
    image: "/gift-personal-9.jpg", 
    title: "Monogrammed Beach Towel",
    rating: 4.7,
    reviewCount: "3.4k",
    shop: "SummerVibes",
    price: "350.00",
    isEtsyPick: false
  },
  {
    image: "/gift-personal-10.jpg", 
    title: "Personalized Star Map Print",
    rating: 4.9,
    reviewCount: "12k",
    shop: "StarGazer",
    price: "280.00",
    isEtsyPick: true
  },
  {
    image: "/gift-personal-11.jpg", 
    title: "Custom Name Necklace - Silver",
    rating: 4.8,
    reviewCount: "8.5k",
    shop: "SilverSmith",
    price: "420.00",
    isEtsyPick: true
  },
  {
    image: "/gift-personal-12.jpg", 
    title: "Embroidered Baby Blanket",
    rating: 5.0,
    reviewCount: "670",
    shop: "BabyComforts",
    price: "550.00",
    isEtsyPick: true
  },
];

const discoveryItems = [
  { title: "The Holiday Hub", image: "/gift-prod-1.jpg" }, // Reuse for now
  { title: "Personalized Gifts", image: "/gift-prod-3.jpg" },
  { title: "The Gift Wrap Guide", image: "/gift-prod-7.jpg" },
  { title: "Gifts for Her", image: "/gift-prod-4.jpg" },
];

</script>

<style scoped>
.gifts-page {
  font-family: 'Guardian-EgypTT', serif;
}

.hero-section {
  background-color: #591223; /* Dark Burgundy */
  color: white;
  text-align: center;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-title {
  font-family: 'Guardian-EgypTT', serif;
  font-size: 3.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-family: 'Segoe UI', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  max-width: 600px;
}

.categories-container {
  background: white;
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 3rem 2rem;
  max-width: 1400px;
  width: 100%;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
}

.image-circle {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1.5rem;
  transition: transform 0.2s;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.placeholder-img {
  width: 100%;
  height: 100%;
}

.image-circle:hover {
  transform: scale(1.05);
}

.category-link {
  font-family: 'Segoe UI', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: #222;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
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
@media (max-width: 900px) {
  .categories-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 600px) {
  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .image-circle {
      width: 140px;
      height: 140px;
  }
}

/* Product Section Styles (Copied and Adapted) */
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
  opacity: 0;
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
  color: #2f8e22;
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

/* Show More & Discovery Section */
.show-more-container {
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  background: white;
}

.show-more-btn {
  background: #eee;
  border: none;
  padding: 12px 24px;
  border-radius: 24px;
  font-family: 'Segoe UI', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: #222;
  cursor: pointer;
  transition: background 0.2s;
}

.show-more-btn:hover {
  background: #e0e0e0;
}

.discovery-section {
  padding: 0 2rem 4rem;
  background: white;
  display: flex;
  justify-content: center;
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
  padding: 0 2rem 6rem;
  background: white;
  display: flex;
  justify-content: center;
}

.gift-card-banner {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  max-width: 1400px;
  width: 100%;
  display: flex;
  overflow: hidden;
  height: 250px;
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
  background: #d4e0ff;
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
