<script setup>
import { ref } from 'vue'

// Ana görselin başlangıç URL'si
const initialMainImage =
  'https://i.etsystatic.com/18623087/r/il/da56c2/7284004899/il_1588xN.7284004899_mhel.jpg'
const mainImage = ref(initialMainImage)

// Tüm küçük resim URL'leri (ana görselle aynı boyutlarda)
const thumbnails = [
  'https://i.etsystatic.com/18623087/r/il/6e7c15/7236040934/il_1588xN.7236040934_291h.jpg',
  initialMainImage, // İkinci resim ana görselle aynı
  'https://i.etsystatic.com/18623087/r/il/cc480d/7284004507/il_1588xN.7284004507_dfd3.jpg',
  'https://i.etsystatic.com/18623087/r/il/2c86f2/7236040452/il_1588xN.7236040452_arkq.jpg',
  'https://i.etsystatic.com/18623087/r/il/e48320/7236040140/il_1588xN.7236040140_l67e.jpg',
]

// Kişiselleştirme bölümünün açık/kapalı durumu
const isPersonalizationOpen = ref(false)

/**
 * Küçük resme tıklandığında ana görseli değiştirir
 * @param {string} url - Tıklanan resmin URL'si
 */
const selectImage = (url) => {
  mainImage.value = url
}

/**
 * Kişiselleştirme bölümünü açar/kapatır
 */
const togglePersonalization = () => {
  isPersonalizationOpen.value = !isPersonalizationOpen.value
}
</script>

<template>
  <div class="product-detail">
    <div class="grid">
      <div class="image-area">
        <div class="thumbnail-list">
          <div
            v-for="url in thumbnails"
            :key="url"
            class="thumbnail-item"
            :class="{ 'is-active': url === mainImage }"
            @click="selectImage(url)"
          >
            <img :src="url.replace('1588xN', '75x75')" :alt="'Thumbnail ' + url" />
          </div>
        </div>

        <div class="main-image-container">
          <div class="bestseller-badge">⭐ Bestseller</div>
          <img class="product-image" :src="mainImage" alt="Personalized Mini Christmas Stockings" />
          <button class="image-nav prev-nav" aria-label="Önceki resim">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button class="image-nav next-nav" aria-label="Sonraki resim">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <div class="info-area">
        <div class="stock-info">In 20+ carts</div>
        <div class="price-section">
          <div class="price">Now 133.41 TL</div>
          <button class="favorite-button" aria-label="Favorilere Ekle">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              ></path>
            </svg>
          </button>
        </div>
        <p class="tax-info">Local taxes included (where applicable)</p>

        <h1 class="title">
          Personalized Mini Christmas Stockings, Name Stockings, Christmas Gifts, Christmas Party
          Favors, Classroom Party, Coworker Gifts
        </h1>

        <a href="#" class="seller-name">CrazyforDolls</a>
        <div class="rating-stars">★★★★★</div>

        <div class="options">
          <div class="option-group">
            <label for="color">Stocking Color</label>
            <select id="color">
              <option value="" disabled selected>Select an option</option>
              <option>Red</option>
              <option>Green</option>
              <option>White</option>
            </select>
          </div>

          <div class="option-group">
            <label for="font">Font Color</label>
            <select id="font">
              <option value="" disabled selected>Select an option</option>
              <option>Black</option>
              <option>White</option>
              <option>Gold</option>
              <option>Red</option>
            </select>
          </div>

          <div class="personalization-group">
            <div class="personalization-header" @click="togglePersonalization">
              <span class="personalization-label">
                {{ isPersonalizationOpen ? '−' : '+' }} Add personalization (optional)
              </span>
            </div>
            <textarea
              v-if="isPersonalizationOpen"
              id="personalization-note"
              placeholder="Enter name or note for personalization (e.g., 'Name: JADE, Font: Script')"
              rows="2"
            ></textarea>
          </div>

          <div class="option-group quantity-group">
            <label for="qty">Quantity</label>
            <select id="qty">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <button class="add-to-cart">Add to cart</button>
        </div>

        <div class="seller-badge-info">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20px" height="20px">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15L6 12l1.41-1.41L11 14.17l5.59-5.59L18 10l-7 7z"
            />
          </svg>
          <p>
            **Star Seller.** This seller consistently earned 5-star reviews, shipped on time, and
            replied quickly to any messages they received.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-detail {
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', sans-serif;
  color: #222;
}

.grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 2rem;
}

/* --- SOL ALAN: GÖRSELLER --- */
.image-area {
  display: flex;
  gap: 10px;
}

.thumbnail-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.thumbnail-item {
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.2s;
}

.thumbnail-item.is-active {
  border: 2px solid #222;
}

.thumbnail-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-image-container {
  flex-grow: 1;
  position: relative;
}

.bestseller-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #e6a700;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 10;
}

/* 1. Düzeltme: Ana görselin boyutları güncellendi */
.product-image {
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  aspect-ratio: 3/4; /* Dikey dikdörtgen */
}

/* 2. Düzeltme: Gezinme butonları */
.image-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #ccc; /* Kenarlık eklendi */
  border-radius: 50%;
  width: 30px; /* Daha küçük */
  height: 30px; /* Daha küçük */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem; /* Daha küçük font */
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* Hafif gölge */
  color: #555; /* Ok rengi */
}

.prev-nav {
  left: 5px; /* Daha kenara yakın */
}

.next-nav {
  right: 5px; /* Daha kenara yakın */
}

/* --- SAĞ ALAN: BİLGİLER --- */
.info-area {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stock-info {
  font-size: 0.85rem;
  font-weight: 500;
  color: #a00; /* Kırmızı renk */
  margin-bottom: 0.5rem;
}

.price-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-size: 1.625rem;
  font-weight: 700;
  color: #000;
}

/* 3. Düzeltme: Favori butonu */
.favorite-button {
  background: none;
  border: 1px solid #ccc; /* Gri kenarlık */
  border-radius: 50%;
  width: 32px; /* Daha küçük */
  height: 32px; /* Daha küçük */
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #555; /* Kalp simgesi rengi */
  transition:
    background-color 0.2s,
    border-color 0.2s;
}

.favorite-button:hover {
  border-color: #222;
  color: #222;
}

.tax-info {
  font-size: 0.75rem;
  color: #777;
  margin-bottom: 1rem;
}

.title {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.seller-name {
  font-size: 0.9rem;
  color: #444;
  text-decoration: underline;
  margin-bottom: 0.2rem;
}

.rating-stars {
  color: #e6a700;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.option-group label {
  font-weight: 600;
  font-size: 0.95rem;
  display: block;
  margin-bottom: 0.4rem;
}

.options select {
  width: 100%;
  height: 44px;
  border: 1px solid #999;
  border-radius: 6px;
  padding: 0 0.75rem;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px;
  cursor: pointer;
}

.personalization-group {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
}

.personalization-header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
  cursor: pointer;
  padding: 5px 0;
  color: #222; /* Metin rengi */
}

.personalization-label {
  font-weight: 600;
  font-size: 0.95rem;
  display: flex; /* Artı işaretini ve metni hizalamak için */
  align-items: center;
}

/* + ve - işareti için stil */
.personalization-label span {
  font-size: 1.2rem;
  line-height: 1; /* Satır yüksekliğini sabitle */
  width: 20px; /* Artı/eksi için sabit genişlik */
  text-align: center;
  margin-right: 5px;
  font-weight: 900;
  display: inline-block; /* Düzgün hizalama için */
}

.personalization-group textarea {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 0.75rem;
  resize: vertical;
  min-height: 80px;
  font-family: inherit;
  font-size: 0.9rem;
  margin-top: 10px;
}

.add-to-cart {
  height: 48px;
  background-color: #222;
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: background-color 0.2s;
}

.add-to-cart:hover {
  background-color: #000;
}

.seller-badge-info {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 15px;
  background-color: #f7f3fb;
  border-radius: 8px;
  margin-top: 1rem;
}

.seller-badge-info svg {
  color: #9644f3;
  margin-top: 2px;
  flex-shrink: 0;
}

.seller-badge-info p {
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.5;
}
</style>
