<template>
  <div class="related-searches-section">
    <h3>Explore related searches</h3>
    <div class="search-tags">
        <a href="#" class="search-pill" v-for="tag in tags" :key="tag">
            {{ tag }}
        </a>
    </div>
    
    <div class="explore-categories">
        <h3>Explore related categories & searches</h3>
        <div class="category-bubbles">
            <div class="bubble-item" v-for="cat in categories" :key="cat.name">
                <div class="bubble-img">
                    <img :src="cat.image" :alt="cat.name" />
                </div>
                <span class="bubble-name">{{ cat.name }}</span>
            </div>
        </div>
    </div>
    
    <div class="footer-links">
        <div class="left">
            <span>Listed on Dec 19, 2025</span>
            <span class="separator">|</span>
            <span>125 favorites</span>
        </div>
        <div class="right">
            <a href="#">Report this item to Etsy</a>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const tags = [
    'Mushroom Decor', 'Cottagecore Gift', 'Felt Decoration', 
    'Christmas Ornament', 'Woodland Nursery', 'Fall Decor', 
    'Handmade Gift', 'Wool Felt'
]

const categories = [
    { name: 'Home Decor', image: 'https://picsum.photos/100/100?random=1' },
    { name: 'Ornaments', image: 'https://picsum.photos/100/100?random=2' },
    { name: 'Wall Hangings', image: 'https://picsum.photos/100/100?random=3' },
    { name: 'Felt Art', image: 'https://picsum.photos/100/100?random=4' }
]
</script>

<style scoped>
.related-searches-section {
    margin-top: 40px;
    padding-top: 30px;
    border-top: 1px solid #e1e3df;
    font-family: 'Graphik Webfont', sans-serif;
    color: #222;
}

h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 20px;
}

.search-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 40px;
}

.search-pill {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #f7f7f7;
    padding: 10px 16px;
    border-radius: 24px;
    text-decoration: none;
    color: #222;
    font-size: 0.9rem;
    font-weight: 500;
    transition: background 0.2s;
}

.search-pill:hover { background: #e1e3df; }

.explore-categories {
    margin-bottom: 40px;
}

.category-bubbles {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
}

.bubble-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: 100px;
    text-align: center;
    cursor: pointer;
}

.bubble-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    background: #eee;
}

.bubble-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.bubble-item:hover .bubble-img img { transform: scale(1.1); }

.bubble-name {
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 1.2;
}

.footer-links {
    display: flex;
    justify-content: space-between;
    font-size: 0.85rem;
    color: #595959;
    padding: 20px 0;
    border-top: 1px solid #e1e3df;
}

.separator { margin: 0 8px; }
.footer-links a { color: inherit; text-decoration: underline; }
</style>
