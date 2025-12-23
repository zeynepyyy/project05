<template>
  <div class="cart-page">
    <div class="cart-container">
      <h1 class="cart-title">Your cart</h1>
      
      <ClientOnly>
        <div v-if="cartStore.items.length === 0" class="empty-cart-msg">
            <p>Your cart is empty.</p>
            <NuxtLink to="/" class="continue-shopping">Start shopping</NuxtLink>
        </div>

        <div v-else class="cart-layout">
          <!-- Main Cart Items Column -->
          <div class="cart-items-col">
             <!-- Dynamic Cart Items -->
             <div v-for="(item, index) in cartStore.items" :key="item.product.id" class="cart-item-card">
                <!-- Shop Header -->
                <div class="cart-shop-header">
                   <div class="shop-info">
                      <img src="/shop-avatar.jpg" alt="SvitlanaGn" class="shop-avatar-img" />
                      <span class="shop-name">{{ item.product.shop || 'SvitlanaGn' }}</span>
                      <div class="shop-rating">
                         <Star :size="14" fill="#222" color="#222" />
                         <span class="rating-val">4.9</span>
                         <span class="rating-count">(149)</span>
                      </div>
                   </div>
                   <button class="more-btn">
                      <MoreHorizontal :size="20" />
                   </button>
                </div>

                <!-- Coupon Section (Static for demo) -->
                <div class="shop-coupon-row">
                   <label class="coupon-label">
                      <input type="checkbox" class="coupon-checkbox" />
                      <span>Apply <strong>10% off</strong> this shop with code <span class="code-text">HAPPY10</span></span>
                   </label>
                </div>

                <!-- Product Details -->
                <div class="product-row">
                   <div class="product-image-col">
                      <div class="img-wrap">
                         <img :src="item.product.image || '/cart-main-item.jpg'" :alt="item.product.title" class="product-img" />
                      </div>
                   </div>
                   
                   <div class="product-details-col">
                      <h3 class="product-title">{{ item.product.title }}</h3>
                      <div class="variant-pill">Choose from: Small Red Mushroom</div>
                      
                      <div class="demand-text">In 24 carts with 25 views</div>
                      
                      <div class="actions-row">
                         <!-- Direct Store Mutation via Select -->
                         <select class="qty-select" :value="item.quantity" @change="(e) => updateItemQty(item.product.id, e.target.value)">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                         </select>
                         
                         <button class="text-btn">Edit</button>
                         <button class="text-btn">Save for later</button>
                         <button class="text-btn" @click="cartStore.removeFromCart(item.product.id)">Remove</button>
                      </div>
                   </div>
                   
                   <div class="price-col">
                      <div class="item-price">{{ (item.product.price * item.quantity).toFixed(2) }} TL</div>
                      <div class="unit-price">({{ item.product.price }} TL each)</div>
                   </div>
                </div>

                <div class="shipping-info">
                   <span class="shipping-bold">Shipping: 956.59 TL</span> (Get it by Dec 27-Jan 3)
                </div>
             </div>
          </div>

          <!-- Right Sidebar: Summary -->
          <div class="cart-summary-col">
             <div class="summary-card">
                <h3 class="summary-title">How you'll pay</h3>
                <div class="payment-methods">
                   <!-- Option 1: Cards -->
                   <label class="payment-option">
                      <input type="radio" name="payment" class="pay-radio" />
                      <div class="pay-icons-row">
                         <img src="/ue-payment-visa.png" alt="Visa" class="pay-icon-img" />
                         <img src="/ue-payment-mastercard.png" alt="Mastercard" class="pay-icon-img" />
                         <img src="/ue-payment-amex.png" alt="Amex" class="pay-icon-img" />
                         <img src="/ue-payment-diners.png" alt="Diners" class="pay-icon-img" />
                      </div>
                   </label>
                   
                   <!-- Option 2: Paypal -->
                   <label class="payment-option">
                       <input type="radio" name="payment" class="pay-radio" />
                       <div class="pay-icons-row">
                          <img src="/ue-payment-paypal.png" alt="Paypal" class="pay-icon-img" />
                       </div>
                   </label>

                   <!-- Option 3: GPay (Selected) -->
                   <label class="payment-option">
                       <input type="radio" name="payment" class="pay-radio" checked />
                       <div class="pay-icons-row">
                          <img src="/ue-payment-gpay.png" alt="Google Pay" class="pay-icon-img" />
                       </div>
                   </label>
                </div>

                <div class="summary-rows">
                   <div class="sum-row">
                      <span>Item(s) total</span>
                      <span>{{ cartTotal.toFixed(2) }} TL</span>
                   </div>
                   <div class="sum-row discount">
                      <span>Shop discount</span>
                      <span>-469.25 TL</span>
                   </div>
                   <div class="sum-divider"></div>
                   <div class="sum-row">
                      <span>Subtotal</span>
                      <span>{{ (cartTotal - 469.25).toFixed(2) }} TL</span>
                   </div>
                   <div class="sum-row">
                      <span>Shipping</span>
                      <span>2,541.33 TL</span>
                   </div>
                   <div class="sum-divider"></div>
                   <div class="sum-row total">
                      <span>Total ({{ cartStore.totalItems }} items)</span>
                      <span>{{ (cartTotal - 469.25 + 2541.33).toFixed(2) }} TL</span>
                   </div>
                </div>

                <div class="gift-option">
                   <label class="gift-label">
                      <input type="checkbox" />
                      <span class="gift-text">Mark order as a gift</span>
                   </label>
                   <a href="#" class="learn-more">Learn more</a>
                </div>

                <button class="checkout-btn" @click="isCheckoutModalOpen = true">Proceed to checkout</button>
                
                <div class="coupon-section">
                   <Tag :size="16" />
                   <span class="apply-coupon">Apply coupon code</span>
                </div>
             </div>
          </div>
        </div>
      </ClientOnly>
      
      <!-- Related Items Section -->
      <div class="related-items-section">
         <div class="related-header">
            <h2 class="related-title">Related items you may like</h2>
            <span class="related-subtitle">Including ads <span class="info-icon">ⓘ</span></span>
         </div>
         
         <div class="related-grid">
            <div v-for="(item, index) in relatedItems" :key="index" class="related-card">
               <div class="related-img-wrap">
                  <img :src="item.image" class="related-img" />
                  <button class="fav-btn">
                     <Heart :size="16" />
                  </button>
               </div>
               <div class="related-info">
                  <h3 class="related-name">{{ item.title }}</h3>
                  <div class="ad-label">
                     <Star :size="10" fill="#666" color="#666" />
                     <span>Ad by Etsy seller</span>
                  </div>
                  <div class="related-price-row">
                     <span class="rel-price">{{ item.price }} TL</span>
                     <span v-if="item.originalPrice" class="rel-orig-price">{{ item.originalPrice }} TL</span>
                     <span v-if="item.discount" class="rel-discount">({{ item.discount }}% off)</span>
                  </div>
                  <button class="add-cart-btn" @click="addRelatedToCart(item)">
                     <Plus :size="14" /> Add to cart
                  </button>
               </div>
            </div>
         </div>
      </div>

      
      <!-- Checkout Modal -->
      <CheckoutModal :isOpen="isCheckoutModalOpen" @close="isCheckoutModalOpen = false" />

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { Star, MoreHorizontal, Tag, Heart, Plus } from 'lucide-vue-next';
import { useCartStore } from '~/stores/cart';
import CheckoutModal from '~/components/Organism/CheckoutModal.vue';

definePageMeta({
    layout: 'cart'
});

const cartStore = useCartStore();
const isCheckoutModalOpen = ref(false);

// Computed Total - Safer parsing
const cartTotal = computed(() => {
    return cartStore.items.reduce((acc, item) => {
        const p = parseFloat(String(item.product.price).replace(/[^0-9.]/g, ''));
        return acc + (p * (item.quantity || 1));
    }, 0);
});

// Update Qty
const updateItemQty = (id: string, qty: string) => {
    cartStore.updateQuantity(id, parseInt(qty));
};

// Seed cart ONLY if truly empty and not just initialized
onMounted(() => {
    // Wait for store to be ready
    setTimeout(() => {
        if (cartStore.items.length === 0) {
           // Only seed if localStorage was also empty
           const stored = localStorage.getItem('cart-items');
           if (!stored) {
             cartStore.addToCart({
                id: 'demo-mushroom',
                title: 'Oyster Mushroom Cluster Red Amanita Mushroom',
                price: '358.13', // String format
                image: '/cart-main-item.jpg',
                shop: 'SvitlanaGn'
             }, 2);
           }
        }
    }, 100);
});

// Add related item to cart
const addRelatedToCart = (item: any) => {
    cartStore.addToCart({
        id: 'related-' + item.title.replace(/\s+/g, '-').toLowerCase(),
        title: item.title,
        price: item.price, // Ensure this matches format expected by reducer
        image: item.image,
        shop: 'Etsy Seller'
    });
};

const relatedItems = [
  {
    image: "/related-mushroom-1.jpg",
    title: "Real Forest Mushroom Fridge Magnet",
    price: "157.02",
    rating: 4.8
  },
  {
    image: "/related-mushroom-2.jpg",
    title: "Hand Painted Mushroom Soy Fall Candle",
    price: "790.58",
    originalPrice: "988.12",
    discount: 20
  },
  {
    image: "/related-mushroom-3.jpg",
    title: "Hand Blown Glass Cactus Figurine",
    price: "187.26",
    originalPrice: "312.39",
    discount: 40
  },
  {
    image: "/related-mushroom-4.jpg",
    title: "Boho Mushroom Sweatshirt: Retro",
    price: "391.05",
    originalPrice: "782.09",
    discount: 50
  },
  {
    image: "/related-mushroom-5.jpg",
    title: "Retro 90s Vintage Mushroom Sweatshirt",
    price: "299.88",
    originalPrice: "624.78",
    discount: 52
  }
];
</script>

<style scoped>
.cart-page {
  font-family: 'Segoe UI', sans-serif;
  background: #fdfdfd;
  min-height: 100vh;
  padding-bottom: 4rem;
}

.cart-container {
  max-width: 1200px; /* Wider for cart */
  margin: 0 auto;
  padding: 2rem;
}

.cart-title {
  font-family: 'Guardian-EgypTT', serif;
  font-size: 2rem;
  font-weight: 300;
  color: #222;
  margin-bottom: 2rem;
}

.cart-layout {
  display: flex;
  gap: 3rem;
  align-items: flex-start;
}

.cart-items-col {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.cart-summary-col {
  flex: 1;
  max-width: 400px;
}

/* Item Card Styles */
.cart-item-card {
  background: white;
  border: 1px solid #e1e1e1;
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}

.cart-shop-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.shop-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.shop-avatar-img {
  width: 32px;
  height: 32px;
  border-radius: 4px;
  object-fit: cover;
}

.shop-name {
  font-weight: 700;
  color: #222;
  font-size: 1rem;
}

.shop-rating {
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 0.85rem;
}

.more-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.shop-coupon-row {
  margin-bottom: 1.5rem;
  border: 1px dashed #222; /* Dashed green border in screenshot, but user style is clean */
  border-color: #2f8e22;
  padding: 8px 12px;
  border-radius: 6px;
  background-color: #f9fdf9;
}

.coupon-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  cursor: pointer;
}

.code-text {
  text-decoration: underline;
}

.product-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.img-wrap {
  width: 120px;
  height: 120px;
  border-radius: 6px;
  overflow: hidden;
  background: #eee;
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-details-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.product-title {
  font-size: 1rem;
  font-weight: 400;
  color: #222;
  line-height: 1.4;
}

.variant-pill {
  font-size: 0.85rem;
  background: #f1f1f1;
  padding: 2px 8px;
  border-radius: 12px;
  align-self: flex-start;
  color: #595959;
}

.demand-text {
  color: #a61a34; /* Dark red */
  font-size: 0.85rem;
  font-weight: 600;
  margin-top: 4px;
}

.actions-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
}

.qty-select {
  padding: 4px 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 0.9rem;
  background: white;
}

.text-btn {
  background: none;
  border: none;
  font-size: 0.85rem;
  font-weight: 600;
  color: #222;
  cursor: pointer;
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: text-decoration-color 0.2s;
}

.text-btn:hover {
  text-decoration-color: #222;
}

.price-col {
  text-align: right;
  min-width: 100px;
}

.item-price {
  font-weight: 700;
  font-size: 1.1rem;
  color: #222;
}

.unit-price {
  font-size: 0.8rem;
  color: #595959;
}

.shipping-info {
  border-top: 1px solid #eee;
  padding-top: 1rem;
  font-size: 0.9rem;
  color: #222;
}

.shipping-bold {
  font-weight: 600;
}

/* Summary Card */
.summary-card {
  background: white;
  border: 1px solid #e1e1e1;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}

.summary-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.payment-methods {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 2rem;
}

.payment-option {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.pay-radio {
  accent-color: #222;
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.pay-icons-row {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.pay-icon-img {
  height: 24px;
  width: auto;
  object-fit: contain;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  padding: 2px;
  background: white;
}

.summary-rows {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 1.5rem;
}

.sum-row {
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  color: #222;
}

.sum-row.discount {
  color: #2f8e22; /* Green */
}

.sum-row.total {
  font-weight: 700;
  font-size: 1.1rem;
  margin-top: 8px;
}

.sum-divider {
  height: 1px;
  background: #e1e1e1;
  margin: 8px 0;
}

.gift-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.gift-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
}

.learn-more {
  font-size: 0.85rem;
  text-decoration: underline;
  color: #222;
}

.checkout-btn {
  width: 100%;
  background: #222;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 24px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1.5rem;
  transition: background 0.2s;
}

.checkout-btn:hover {
  background: #333;
}

.coupon-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  padding: 8px;
  border: 1px solid transparent;
  border-radius: 24px;
  transition: border-color 0.2s;
}

.coupon-section:hover {
  border-color: #e1e1e1;
  background: #f9f9f9;
}

@media (max-width: 900px) {
  .cart-layout {
    flex-direction: column;
  }
  .cart-summary-col {
    width: 100%;
    max-width: none;
  }
}

/* Related Items Section */
.related-items-section {
  margin-top: 4rem;
}

.related-header {
  margin-bottom: 2rem;
  display: flex;
  align-items: baseline;
  gap: 12px;
}

.related-title {
  font-family: 'Guardian-EgypTT', serif;
  font-size: 1.5rem;
  font-weight: 300;
  color: #222;
}

.related-subtitle {
  font-size: 0.85rem;
  color: #595959;
  display: flex;
  align-items: center;
  gap: 4px;
}

.info-icon {
  font-size: 0.75rem;
  cursor: pointer;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
}

.related-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
}

.related-img-wrap {
  position: relative;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  background: #f5f5f5;
}

.related-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.related-card:hover .related-img {
  transform: scale(1.05);
}

.fav-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: white;
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.related-card:hover .fav-btn {
  opacity: 1;
}

.related-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.related-name {
  font-family: 'Segoe UI', sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  color: #222;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
}

.ad-label {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.8rem;
  color: #595959;
  margin-bottom: 2px;
}

.related-price-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 8px;
}

.rel-price {
  font-weight: 700;
  font-size: 1rem;
  color: #2f8e22; /* Green for discount */
}

.rel-orig-price {
  text-decoration: line-through;
  color: #595959;
  font-size: 0.85rem;
}

.rel-discount {
  color: #2f8e22;
  font-size: 0.85rem;
}

.add-cart-btn {
  background: white;
  border: 1px solid #222;
  color: #222;
  border-radius: 20px;
  padding: 6px 12px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: background 0.2s;
  align-self: flex-start;
}

.add-cart-btn:hover {
  background: #f5f5f5;
  border-width: 2px; /* Etsy style thickens border on hover sometimes, or just bg change */
  border: 2px solid #222;
  padding: 5px 11px; /* Adjust for border width change to keep size same */
}
</style>
