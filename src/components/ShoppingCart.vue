<template>
  <div class="cart-wrapper">
    <h2 class="title">Your cart</h2>

    <div class="cart-layout">
      <div class="cart-box">
        <div class="seller-row">
          <img
            src="https://i.etsystatic.com/5870358/r/isla/55bed6/16016837/isla_75x75.16016837_g1wersdj.jpg"
            alt="Seller logo"
            class="seller-logo"
          />
          <span class="shop-name">rennadeluxe <span class="rating">★ 4.9 (2.4k)</span></span>
          <span class="dots">...</span>
        </div>

        <div class="item-line">
          <div class="image-wrapper">
            <img
              src="https://i.etsystatic.com/5870358/r/il/156bb7/818852444/il_340x270.818852444_tsg4.jpg"
              alt="Product image"
              class="product-image"
            />
          </div>

          <div class="item-details">
            <h3 class="product-name">advent calendar kit Christmas Calendar kit adven...</h3>

            <div class="warning-box">
              <span class="warning-icon">!</span> Choose a Color and a Sticker color
            </div>

            <div class="actions">
              <button class="text-btn">Save for later</button>
              <span class="separator">|</span>
              <button class="text-btn">Remove</button>
            </div>
          </div>

          <div class="price-box">
            <span class="price">866.33 TL</span>
          </div>
        </div>
      </div>

      <div class="payment-section">
        <h4 class="payment-title">How you'll pay</h4>

        <div class="payment-methods">
          <div class="payment-row">
            <div class="circle"></div>
            <div class="method-group">
              <img src="/visa.png" alt="Visa" />
              <img src="/mastercard.png" alt="Mastercard" />
              <img src="/amex.png" alt="Amex" />
              <img src="/diners.png" alt="Diners Club" />
            </div>
          </div>

          <div class="payment-row">
            <div class="circle"></div>
            <div class="method-group">
              <img src="/paypal.png" alt="PayPal" />
            </div>
          </div>

          <div class="payment-row">
            <div class="circle"></div>
            <div class="method-group selected">
              <img src="/gpay.png" alt="Google Pay" />
            </div>
          </div>
        </div>

        <div class="gift-text">
          <input type="checkbox" id="gift-checkbox" class="checkbox" />
          <label for="gift-checkbox" class="gift-label">Mark order as a gift</label>
          <span class="learn-more">Learn more</span>
        </div>

        <button class="checkout-btn">Proceed to checkout</button>

        <div class="coupon-section">
          <button class="coupon-button">
            <span class="coupon-icon-leaf"></span> Apply coupon code
          </button>
          <p class="tax-note">
            Local taxes included (where applicable)<br />
            * Learn more about additional taxes, duties, and fees that may apply
            <span class="max-apply">max apply</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// props yok çünkü içerik sabit
</script>

<style scoped>
.cart-wrapper {
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 2rem;
  font-family: Arial, sans-serif;
  color: #212121;
}

.title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.cart-layout {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

/* Sol Kutu (Ürün Detayları) */
.cart-box {
  flex: 2;
  border: 1px solid #e1e3e8;
  border-radius: 8px;
  padding: 1rem;
  background-color: #fff;
}

.seller-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #e1e3e8;
  position: relative;
}

.seller-logo {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.shop-name {
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
}

.rating {
  font-weight: normal;
  color: #666;
  margin-left: 0.25rem;
}

.dots {
  position: absolute;
  right: 0;
  font-size: 1.5rem;
  line-height: 0.5;
  color: #555;
  cursor: pointer;
}

.item-line {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding-right: 1rem;
}

.product-image {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 6px;
}

.item-details {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 0.2rem;
}

.product-name {
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.4;
  max-width: 90%;
}

.price-box {
  text-align: right;
  width: 100px;
  flex-shrink: 0;
  padding-top: 0.2rem;
}

.price {
  font-size: 1.1rem;
  font-weight: 500;
  color: #333;
}

.warning-box {
  background-color: #fae0e7;
  color: #c00;
  padding: 0.8rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.warning-icon {
  font-size: 1rem;
  font-weight: bold;
  color: #c00;
}

.actions {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
  font-size: 0.8rem;
}

.text-btn {
  background: none;
  border: none;
  padding: 0;
  font-size: 0.8rem;
  color: #555;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.separator {
  color: #ccc;
}

/* Sağ Kutu (Ödeme ve Bilgiler) */
.payment-section {
  flex: 1;
  padding: 0 0.5rem;
}

.payment-title {
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #555;
}

.payment-methods {
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

.payment-row {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem; /* Satır altı boşluk */
  border-bottom: 1px solid #e1e3e8; /* Her satırın altında çizgi */
}

/* Ödeme Yöntemi Yuvarlakları */
.circle {
  width: 12px;
  height: 12px;
  border: 1px solid #999;
  border-radius: 50%;
  flex-shrink: 0; /* Küçülmesini engeller */
  margin-right: 0.75rem; /* Resimdeki gibi boşluk */
}

/* İkon Gruplaması */
.method-group {
  display: flex;
  align-items: center;
  gap: 0.2rem; /* İkonlar arası çok az boşluk */
  flex-grow: 1;
}

.method-group img {
  height: 18px;
  max-width: 40px; /* İkonların genişliğini sınırlama */
  object-fit: contain;
  margin-right: 0.3rem; /* Her ikon sonrası boşluk */
}

/* GPay logosu diğerlerinden hafif büyük görünüyor */
.method-group.selected img {
  /* Gpay'in seçili gibi gösterildiği yer */
  height: 20px;
}

/* Hediye metni ve Checkbox Düzeltmeleri */
.gift-text {
  font-size: 1rem; /* Daha büyük font */
  font-weight: 600; /* Daha kalın font */
  color: #333; /* Daha siyah */
  display: flex;
  gap: 0.75rem; /* İkon ve yazı arası boşluk */
  align-items: center;
  margin-top: 0.5rem;
}

.checkbox {
  width: 20px; /* Daha büyük kare */
  height: 20px;
  border: 1px solid #555; /* Daha belirgin kenarlık */
  border-radius: 2px;
  margin-right: 0.2rem;
  cursor: pointer;
}

.gift-label {
  font-weight: 600; /* Daha kalın */
  font-size: 1rem; /* Daha büyük */
  color: #333; /* Daha siyah */
}

.learn-more {
  border-bottom: 1px dashed #444; /* Daha belirgin dashed çizgi */
  color: #444; /* Daha belirgin renk */
  cursor: pointer;
  font-size: 0.95rem; /* Biraz daha büyük */
  font-weight: 600; /* Daha kalın */
  text-decoration: none;
}

/* Checkout Butonu */
.checkout-btn {
  margin-top: 1rem;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  background-color: #999; /* Resimdeki gri ton */
  color: white;
  width: 100%;
  font-weight: 500;
}

/* Kupon Bölümü Düzeltmeleri */
.coupon-section {
  margin-top: 1.5rem;
}

.coupon-button {
  background: none;
  border: none;
  padding: 0;
  font-size: 0.9rem; /* Metin boyutu */
  font-weight: 600;
  color: #1a6438; /* Resimdeki koyu yeşil metin */
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.coupon-icon-leaf {
  /* Resimdeki koyu yeşil yaprak ikonu için yer tutucu */
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: #1a6438; /* Koyu yeşil renk */
  -webkit-mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7z"/></svg>')
    no-repeat 50% 50%; /* Örnek SVG (artı işareti) */
  mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7z"/></svg>')
    no-repeat 50% 50%;
  -webkit-mask-size: contain;
  mask-size: contain;
  /* Resimdeki yeşil yaprak ikonuna daha yakın bir mask veya background-image kullanılmalı */
  /* Şu an için bir "+" işareti (add icon) kullandım, resimdeki yaprağı bulup buraya eklemek en doğrusu olacaktır */
}

/* Geçici yaprak SVG ikonunu buraya ekledim. Resimdeki gibi bir yaprak ikonuna en yakın olanı seçilebilir. */
/* Eğer Lucide Icons veya benzeri bir kütüphane kullanılsaydı 'Leaf' ikonu doğrudan gelirdi. */
.coupon-icon-leaf {
  -webkit-mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 8C17 4.69 14.31 2 11 2 7.73 2 5.12 4.41 5 7.42 4.41 8.54 4 9.77 4 11c0 3.79 2.5 6.94 6 7.82V22h2v-3.18c3.5-0.88 6-4.03 6-7.82 0-1.23-0.41-2.46-1-3.58zM11 19c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/></svg>')
    no-repeat 50% 50%;
  mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 8C17 4.69 14.31 2 11 2 7.73 2 5.12 4.41 5 7.42 4.41 8.54 4 9.77 4 11c0 3.79 2.5 6.94 6 7.82V22h2v-3.18c3.5-0.88 6-4.03 6-7.82 0-1.23-0.41-2.46-1-3.58zM11 19c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/></svg>')
    no-repeat 50% 50%;
}

.tax-note {
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: #555;
  line-height: 1.4;
}

.tax-note .learn-more {
  display: inline;
  border-bottom: none;
  color: #555;
}

.max-apply {
  color: #555;
  text-decoration: underline;
  text-underline-offset: 2px;
  font-weight: 600;
}
</style>
```http://googleusercontent.com/image_generation_content/2
