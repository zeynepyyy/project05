<template>
  <div class="product-actions-organism">
    <!-- Seller Info (Top) -->
    <div class="seller-header">
        <div class="seller-avatar"></div>
        <div class="seller-text">
            <span class="shop-name">Grandma's Knit Shop</span>
            <div class="rating-row">
                <span class="stars">★★★★★</span>
                <span class="sales-info">(1,284 reviews) <span class="dot">·</span> Star Seller</span>
            </div>
        </div>
    </div>

    <!-- Rare Find Badge -->
    <div class="rare-find-badge">
        <span class="icon">✨</span> 
        <div class="text">
            <strong>Rare find</strong>
            <span class="sub">There's only 1 of these available.</span>
        </div>
    </div>
    
    <!-- Stock & Sales -->
    <div class="scarcity-row">
        <span class="stock-count">Low in stock, only 3 left</span>
        <span class="cart-count">In 20+ carts</span>
    </div>

    <!-- Title -->
    <h1 class="product-title-text">
        {{ product?.title || 'Loading...' }}
    </h1>

    <!-- Price -->
    <div class="price-area">
        <span class="current-price">{{ product?.price }} TL</span>
        <p class="klarna-text">Pay in 4 installments of {{ (Number(product?.price)/4).toFixed(2) }} TL. <span class="klarna-link">Klarna.</span></p>
        <p class="tax-info">Local taxes included (where applicable)</p>
    </div>

    <!-- Options -->
    <div class="options-group">
      <OptionGroup select-id="color" label-text="Primary color">
        <option value="" disabled selected>Select an option</option>
        <option>Red</option>
        <option>Brown</option>
        <option>Spotted</option>
      </OptionGroup>

      <OptionGroup select-id="qty" label-text="Quantity">
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </OptionGroup>
    </div>

    <!-- Buttons -->
    <div class="action-buttons">
          <ActionButton type="add-to-cart" @click="handleAddToCart">Add to cart</ActionButton>
          <button class="buy-it-now-btn" @click="handleBuyItNow">Buy it now</button>
    </div>

    <!-- Shipping / Arrives By -->
    <div class="shipping-estimator">
        <div class="estimator-header">
            <span class="icon">🚚</span> <strong>Arrives by Dec 27 - Jan 4</strong>
        </div>
        <div class="estimator-sub">
            if you order today
        </div>
    </div>
    
    <!-- Trust/Guarantee Badges -->
    <div class="trust-badges">
        <div class="badge-item">
            <span class="icon">↩️</span>
            <span><strong>Returns & exchanges accepted</strong> within 30 days</span>
        </div>
        <div class="badge-item">
            <span class="icon">🛡️</span>
            <span><strong>Etsy Purchase Protection:</strong> Shop confidently on Etsy knowing if something goes wrong with an order, we've got your back.</span>
        </div>
    </div>
    
    <!-- Description Preview Removed: Moved to main content left column -->
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { useRouter } from 'vue-router'
import ActionButton from '../Atoms/ActionButtonn.vue'
import OptionGroup from '../Molecules/OptionGroup.vue'
import { useCartStore } from '~/stores/cart'

const props = defineProps<{
    product: any
}>()

const cartStore = useCartStore()
const router = useRouter()

const handleAddToCart = () => {
    if (props.product) {
        cartStore.addToCart(props.product)
    }
}

const handleBuyItNow = () => {
    if (props.product) {
        cartStore.addToCart(props.product)
        router.push('/cart')
    }
}
</script>

<style scoped>
.product-actions-organism {
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-family: 'Graphik Webfont', sans-serif;
  color: #222;
  max-width: 480px; /* Restrict width slightly for aesthetics */
}

.rare-find-badge {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 8px;
}
.rare-find-badge .icon { font-size: 1.2rem; }
.rare-find-badge .text { display: flex; flex-direction: column; font-size: 0.9rem; }
.rare-find-badge .text strong { color: #a61a2e; } /* Red for rare find */

/* Breadcrumbs style removed */

/* Scarcity */
.scarcity-row {
    font-size: 0.85rem;
    display: flex;
    gap: 8px;
    font-weight: 600;
}
.stock-count { color: #a61a2e; } /* Etsy Red */
.cart-count { color: #222; }

/* Title */
.product-title-text {
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1.3;
  color: #222;
  margin: 0;
}

/* Seller */
.seller-header {
    display: flex;
    align-items: center;
    gap: 12px;
}
.seller-avatar {
    width: 40px;
    height: 40px;
    background-color: #eee;
    border-radius: 4px; /* Square with slight round */
}
.seller-text {
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
}
.shop-name { font-weight: 500; text-decoration: underline; }
.rating-row { display: flex; align-items: center; font-size: 0.85rem; color: #222; }
.dot { margin: 0 4px; }

/* Price */
.price-area { margin-top: 4px; }
.current-price {
    font-size: 1.7rem;
    font-weight: 700;
    color: #222;
    letter-spacing: -0.5px;
}
.klarna-text {
    font-size: 0.85rem;
    margin-top: 4px;
    color: #595959;
}
.klarna-link { font-weight: 600; color: #222; }
.tax-info { font-size: 0.8rem; color: #595959; margin-top: 4px; }

/* Options */
.options-group {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

/* Buttons */
.action-buttons {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 8px;
}
.buy-it-now-btn {
    width: 100%;
    padding: 12px;
    border-radius: 24px;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    background-color: transparent;
    border: 2px solid #222;
    color: #222;
    transition: background 0.2s;
}
.buy-it-now-btn:hover { background-color: #f5f5f5; }

/* Shipping Estimator */
.shipping-estimator {
    margin-top: 8px;
    padding: 12px 0;
}
.estimator-header { font-size: 1.1rem; display: flex; align-items: center; gap: 8px; }
.estimator-sub { font-size: 0.9rem; color: #595959; margin-left: 32px; }

/* Trust Badges */
.trust-badges {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 8px;
    font-size: 0.85rem;
    color: #595959;
}
.badge-item { display: flex; gap: 10px; line-height: 1.4; }
.badge-item .icon { font-size: 1.1rem; }

/* Description */
.description-preview h3 { font-size: 1rem; margin-bottom: 6px; }
.description-preview p { font-size: 0.95rem; line-height: 1.6; color: #222; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
.read-more { font-weight: 600; text-decoration: underline; color: #222; font-size: 0.9rem; margin-top: 4px; display: inline-block; }
</style>
