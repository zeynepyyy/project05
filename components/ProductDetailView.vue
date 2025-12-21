<template>
  <div class="product-detail-final">


    <div class="product-grid">
        <div class="left-col">
            <ImageGallery :product="productsStore.currentProduct" />
            
            <div class="mobile-only-title"></div>
            
            <ReviewsSection />
            <ShippingPolicies />
            <MeetYourSeller />
        </div>

        <!-- Right Column: Buying Actions (Sticky) -->
        <div class="right-col">
            <div class="sticky-wrapper">
                <ProductActions :product="productsStore.currentProduct" />
                <ItemDetails />
            </div>
        </div>
    </div>
    
    <!-- Bottom Full Width Sections -->
    <div class="bottom-recommendations">
        <ProductSliderSection title="More from this shop" />
        <ProductSliderSection title="You may also like" />
        <RelatedSearches />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProductsStore } from '~/stores/products'
import { useReviewsStore } from '~/stores/reviews'

import ImageGallery from './Organism/ImageGallery.vue'
import ProductActions from './Organism/ProductActions.vue'
import ReviewsSection from './Organism/ReviewsSection.vue'
import ItemDetails from './Organism/ItemDetails.vue'
import ShippingPolicies from './Organism/ShippingPolicies.vue'
import MeetYourSeller from './Organism/MeetYourSeller.vue'
import ProductSliderSection from './Organism/ProductSliderSection.vue'
import RelatedSearches from './Organism/RelatedSearches.vue'

const route = useRoute()
const productsStore = useProductsStore()
const reviewsStore = useReviewsStore()

// Mock ID or get from route
const productId = (route.params.id as string) || 'oyster-mushroom-1'

onMounted(async () => {
    try {
        await productsStore.fetchProductById(productId)
        if (productsStore.currentProduct) {
            await reviewsStore.fetchReviewsByProductId(productId)
        }
    } catch (e: any) {
        console.error("Error fetching product:", e)
    }
})

const product = computed(() => productsStore.currentProduct)
</script>

<style scoped>
.product-detail-final {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 24px;
  font-family: 'Graphik Webfont', sans-serif;
  color: #222;
}

.top-breadcrumbs {
    font-size: 0.85rem;
    color: #595959;
    margin-bottom: 24px;
}
.top-breadcrumbs a { text-decoration: none; color: inherit; }
.top-breadcrumbs a:hover { text-decoration: underline; }
.top-breadcrumbs .sep { margin: 0 6px; font-size: 0.75rem; }

.product-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr; /* ~62% / 38% split */
  gap: 48px;
  align-items: start;
}

.left-col {
    display: flex;
    flex-direction: column;
    gap: 20px; /* Space between sections */
    min-width: 0; /* Prevent grid overflow */
}

.right-col {
    /* Main Purchase sidebar */
}

.sticky-wrapper {
    position: sticky;
    top: 20px;
}

@media (max-width: 900px) {
    .product-grid {
        grid-template-columns: 1fr;
        gap: 24px;
    }
    
    .right-col {
        order: -1; /* Actions on top for mobile usually, or keep below images */
    }
}

.bottom-recommendations {
    margin-top: 60px;
    border-top: 1px solid #e1e3df;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 60px;
}
</style>
