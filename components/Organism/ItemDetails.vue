<template>
  <div class="item-details-section">
    <div class="details-header">
        <h3>Item details</h3>
    </div>

    <!-- Highlights -->
    <div class="highlights">
        <div class="highlight-row">
            <span class="icon">🖐️</span> Handmade
        </div>
        <div class="highlight-row">
            <span class="icon">📏</span> Materials: 100% Wool, Felt, Cotton Thread
        </div>
    </div>

    <!-- Description -->
    <div class="description-content" :class="{ expanded: isExpanded }">
        <p>
            Add a touch of whimsy to your home with this handcrafted Oyster Mushroom Cluster! 🍄
            <br><br>
            Each mushroom is needle-felted by hand using sustainable wool, creating a one-of-a-kind piece of art. Perfect for:
            <br>- Cottagecore decor
            <br>- Fall table centerpieces
            <br>- Unique gifts for nature lovers
            <br><br>
            <strong>Dimensions:</strong> Approx 15cm x 12cm
            <br><strong>Care:</strong> Gentle spot clean only. Not a toy.
            <br><br>
            Please note that due to the handmade nature of this item, slight variations in color and shape may occur, making your mushroom cluster truly unique!
        </p>
    </div>
    
    <button class="read-more-btn" @click="isExpanded = !isExpanded">
        {{ isExpanded ? 'Less' : 'Learn more about this item' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isExpanded = ref(false)
</script>

<style scoped>
.item-details-section {
    margin-top: 12px;
    padding-bottom: 20px;
    border-top: 1px solid #e1e3df; /* Separator from actions */
    border-bottom: none;
    font-family: 'Graphik Webfont', sans-serif;
    color: #222;
}

.details-header h3 {
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 16px;
}

.highlights {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;
}

.highlight-row {
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    gap: 10px;
}

.description-content {
    font-size: 1rem;
    line-height: 1.6;
    max-height: 120px; /* Collapsed height */
    overflow: hidden;
    position: relative;
    transition: max-height 0.3s ease;
}

.description-content.expanded {
    max-height: 1000px; /* Arbitrary large height */
}

/* Fade effect when collapsed */
.description-content:not(.expanded)::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: linear-gradient(transparent, white);
    pointer-events: none;
}

.read-more-btn {
    margin-top: 12px;
    background: none;
    border: none;
    font-weight: 600;
    text-decoration: underline;
    cursor: pointer;
    font-size: 0.95rem;
    padding: 0;
    color: #222;
}

.read-more-btn:hover {
    text-decoration: none;
}
</style>
