<template>
  <div class="meet-seller-section">
    <div class="section-header">
        <h3>Meet your sellers</h3>
    </div>

    <div class="seller-profile-card">
        <div class="avatar-col">
            <div class="seller-avatar-large">
                <img src="https://picsum.photos/id/64/200/200" alt="Seller Avatar" />
            </div>
        </div>
        
        <div class="info-col">
            <div class="name-row">
                <span class="owner-name">Fatma Teyze</span>
                <span class="shop-meta">
                    Owner of <a href="#" class="shop-link">Grandma's Knit Shop</a>
                </span>
            </div>
            
            <div class="badges-row">
                 <div class="star-seller-tag">
                     <span class="icon">✨</span> Star Seller
                 </div>
                 <span class="location">Istanbul, Turkey</span>
            </div>
            
            <div class="stats-row">
                <span class="stars">★★★★★</span>
                <span class="sales">(1,284 reviews)</span>
            </div>
            
            <div class="bio-text">
                <p>
                    Hi there! I've been knitting since I was 10 years old. 
                    Every piece is made with love and care in my small studio in Istanbul.
                    I hope my creations bring warmth to your home!
                </p>
            </div>

            <div class="actions-row">
                <button class="message-btn">
                    <span class="icon">✉️</span> Message Fatma
                </button>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.meet-seller-section {
    margin-top: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e1e3df;
    font-family: 'Graphik Webfont', sans-serif;
    color: #222;
}

.section-header h3 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 16px;
}

.seller-profile-card {
    display: flex;
    gap: 16px;
}

.seller-avatar-large {
    width: 70px;
    height: 70px;
    background-color: #dcdcdc;
    border-radius: 50%;
    overflow: hidden;
}

.seller-avatar-large img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.info-col {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
}

.name-row {
    display: flex;
    flex-direction: column;
    line-height: 1.3;
}

.owner-name {
    font-weight: 700;
    font-size: 1.1rem;
}

.shop-meta {
    font-size: 0.9rem;
    color: #595959;
}

.shop-link {
    color: #222;
    text-decoration: underline;
    font-weight: 500;
}

.badges-row {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.85rem;
    color: #595959;
}

.star-seller-tag {
    display: flex;
    align-items: center;
    gap: 4px;
    color: #8c7343; /* Gold-ish for Star Seller usually, or just dark text with icon */
    font-weight: 500;
}

.stats-row {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.9rem;
}

.bio-text p {
    font-size: 0.95rem;
    line-height: 1.5;
    color: #222;
    margin-bottom: 12px;
}

.actions-row {
    margin-top: 4px;
}

.message-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 20px;
    border-radius: 24px;
    border: 2px solid #222;
    background: white;
    font-weight: 700;
    font-size: 0.95rem;
    cursor: pointer;
    transition: background 0.2s;
    width: 100%; /* Often full width on sidebar */
}

.message-btn:hover { background: #f5f5f5; }
</style>
