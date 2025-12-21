<template>
  <div class="reviews-section" id="reviews">
    <!-- Shop Highlights Row (Unchanged) -->
    <div class="shop-highlights">
        <div class="highlight-item">
            <span class="highlight-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
            </span>
            <div class="highlight-text">
                <strong>Smooth shipping</strong> Has a history of shipping on time with tracking.
            </div>
        </div>
        <div class="highlight-item">
            <span class="highlight-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </span>
            <div class="highlight-text">
                <strong>Speedy replies</strong> Has a history of replying to messages quickly.
            </div>
        </div>
        <div class="highlight-item">
            <span class="highlight-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </span>
            <div class="highlight-text">
                <strong>Rave reviews</strong> Average review rating is 4.8 or higher.
            </div>
        </div>
    </div>
    
    <hr class="section-divider" />

    <!-- Write a Review Form (New) -->
    <div class="write-review-container">
        <h4>Write a review</h4>
        <div class="review-form">
            <input v-model="newReview.userName" placeholder="Your Name" class="form-input" />
            <textarea v-model="newReview.comment" placeholder="Your Review" class="form-textarea"></textarea>
            <div class="form-actions">
                <select v-model="newReview.rating" class="form-select">
                    <option :value="5">⭐⭐⭐⭐⭐ 5 Stars</option>
                    <option :value="4">⭐⭐⭐⭐ 4 Stars</option>
                    <option :value="3">⭐⭐⭐ 3 Stars</option>
                </select>
                <button @click="submitReview" :disabled="reviewsStore.loading" class="submit-btn">
                    {{ reviewsStore.loading ? 'Posting...' : 'Post Review' }}
                </button>
            </div>
        </div>
    </div>

    <hr class="section-divider" />

    <!-- Reviews Header -->
    <div class="reviews-header-row">
        <h3>All reviews from this shop ({{ reviews.length }})</h3>
        <button class="show-all-btn">Show all</button>
    </div>

    <!-- Horizontal Review Cards -->
    <div class="reviews-carousel-container">
        <div class="reviews-carousel" ref="carousel">
            <div v-if="reviews.length === 0" class="no-reviews">No reviews yet. Be the first!</div>
            <div class="review-card-item" v-for="review in reviews" :key="review.id">
                <div class="rating-stars">{{ '★'.repeat(review.rating || 5) }}</div>
                <p class="review-body">{{ review.comment || review.text }}</p>
                <div class="review-footer">
                    <div class="user-info">
                        <strong>{{ review.userName || review.user }}</strong> <span class="divider">|</span> {{ review.createdAt ? new Date(review.createdAt.seconds * 1000).toLocaleDateString() : (review.date || 'Just now') }}
                    </div>
                    <div class="purchased-info">
                        Purchased: <a href="#">{{ review.item || 'This item' }}</a>
                    </div>
                </div>
            </div>
        </div>
         <!-- Next Arrow Button -->
         <button class="carousel-next-btn" aria-label="Next reviews" v-if="reviews.length > 3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
    </div>
    
    <div class="why-these-reviews">
        <a href="#">Why are these reviews shown?</a> <span class="icon">?</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useReviewsStore } from '~/stores/reviews'
import { useRoute } from 'vue-router'

const reviewsStore = useReviewsStore()
const route = useRoute()

// Mix of hardcoded (legacy) and fetched reviews could be handled here, 
// but for now let's just use the store reviews + any mock if store is empty to show UI
const reviews = computed(() => {
    // Return store reviews if they exist, otherwise maybe show some mock for design
    // For this task, we want to show writes working, so let's rely on store info.
    return reviewsStore.reviews
})

const newReview = ref({
    userName: '',
    comment: '',
    rating: 5
})

const submitReview = async () => {
    if(!newReview.value.userName || !newReview.value.comment) return alert('Name and Review required')
    
    await reviewsStore.addReview({
        productId: (route.params.id as string) || 'oyster-mushroom-1',
        userName: newReview.value.userName,
        comment: newReview.value.comment,
        rating: newReview.value.rating
    })
    
    // Reset form
    newReview.value.comment = ''
    newReview.value.userName = ''
}
</script>

<style scoped>
.reviews-section {
    margin-top: 20px;
    font-family: 'Graphik Webfont', sans-serif;
    color: #222;
}

/* Highlights */
.shop-highlights {
    display: flex;
    gap: 32px;
    padding-bottom: 24px;
}

.highlight-item {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    flex: 1;
}

.highlight-icon {
    flex-shrink: 0;
}

.highlight-text {
    font-size: 0.95rem;
    line-height: 1.4;
    color: #222;
}

.section-divider {
    border: none;
    border-top: 1px solid #e1e3df;
    margin: 0 0 24px 0;
}

/* Header */
.reviews-header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.reviews-header-row h3 {
    font-size: 1.3rem;
    font-weight: 500;
    margin: 0;
}

.show-all-btn {
    background: white;
    border: 1px solid #222; /* Dark outline */
    border-radius: 24px;
    padding: 8px 16px;
    font-weight: 600;
    cursor: pointer;
    font-size: 0.9rem;
    color: #222;
    transition: background 0.2s;
}

.show-all-btn:hover {
    background: #f0f0f0;
}

/* Carousel */
.reviews-carousel-container {
    position: relative;
    /* margin-right: -20px; allow overflow visual maybe? kept constrained for now */
}

.reviews-carousel {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    padding-bottom: 16px; /* Space for scrollbar if any, mainly visual padding */
    scrollbar-width: none; /* Hide scrollbar Firefox */
}
.reviews-carousel::-webkit-scrollbar { display: none; /* Chrome */ }

.review-card-item {
    min-width: 300px;
    max-width: 300px;
    background: white;
    border: 1px solid #dcdcdc; /* Subtle border */
    border-radius: 12px;
    padding: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 240px; /* Fixed height for cards */
}

.rating-stars {
    font-size: 1.2rem;
    margin-bottom: 12px;
}

.review-body {
    font-size: 1rem;
    line-height: 1.4;
    margin-bottom: 16px;
    flex-grow: 1;
}

.review-footer {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 0.8rem;
    color: #595959;
}

.user-info {
    color: #222;
}

.divider { margin: 0 4px; color: #ccc; }

.purchased-info a {
    color: #595959;
    text-decoration: underline;
}

/* Next Button */
.carousel-next-btn {
    position: absolute;
    top: 50%;
    right: -10px; /* Overhang */
    transform: translateY(-50%);
    width: 40px; 
    height: 40px;
    border-radius: 50%;
    background: white;
    border: 1px solid #dcdcdc;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
}

.carousel-next-btn:hover {
    background: #fdfdfd;
    box-shadow: 0 6px 16px rgba(0,0,0,0.2);
}

.write-review-container {
    margin-bottom: 24px;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 12px;
}
.write-review-container h4 { margin-top: 0; margin-bottom: 12px; }
.review-form {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.form-input, .form-textarea, .form-select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-family: inherit;
}
.form-actions { display: flex; gap: 12px; }
.submit-btn {
    background: #222;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
}
.submit-btn:disabled { background: #ccc; }
.no-reviews { padding: 20px; color: #666; font-style: italic; }

.why-these-reviews {
    margin-top: 8px;
    font-size: 0.8rem;
    color: #595959;
    display: flex;
    align-items: center;
    gap: 4px;
}
.why-these-reviews a { color: inherit; text-decoration: underline; }
</style>
