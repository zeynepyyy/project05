<script setup lang="ts">
// Zap ikonu kaldırıldı, çünkü harici link kullanılıyor.
import { Instagram, Facebook, Youtube, Pin } from 'lucide-vue-next'
</script>

<template>
  <footer class="app-footer">
    <div class="message-container">
      <img
        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRVHi2GqJzj41IjOglTRoP4r1Csy8nHxUONTjKCOq5PI9QJkzW7"
        alt="Yenilenebilir Enerji"
        class="message-icon"
      />
      <div class="footer-message">Etsy is powered by 100% renewable electricity.</div>
    </div>

    <div class="footer-content">
      <div class="left-spacer"></div>

      <div class="app-section">
        <div class="logo-box">
          <img src="/logo.png" alt="Etsy Logo" />
        </div>
        <button class="download-button">Download the Etsy App</button>
      </div>

      <div class="link-columns">
        <div class="column">
          <h4>Shop</h4>
          <a href="#">Gift cards</a>
          <a href="#">Etsy Registry</a>
          <a href="#">Sitemap</a>
          <a href="#">Etsy blog</a>
          <a href="#">Etsy United Kingdom</a>
          <a href="#">Etsy Germany</a>
          <a href="#">Etsy Canada</a>
        </div>
        <div class="column">
          <h4>Sell</h4>
          <a href="#">Sell on Etsy</a>
          <a href="#">Teams</a>
          <a href="#">Forums</a>
          <a href="#">Affiliates & Creators</a>
        </div>
        <div class="column">
          <h4>About</h4>
          <a href="#">Etsy, Inc.</a>
          <a href="#">Policies</a>
          <a href="#">Investors</a>
          <a href="#">Careers</a>
          <a href="#">Press</a>
          <a href="#">Impact</a>
          <a href="#">Legal imprint</a>
        </div>
        <div class="column help-column">
          <h4>Help</h4>
          <a href="#">Help Center</a>
          <a href="#">Privacy settings</a>
          <div class="social-icons">
            <a href="#"><Instagram :size="18" /></a>
            <a href="#"><Facebook :size="18" /></a>
            <a href="#"><Pin :size="18" /></a>
            <a href="#"><Youtube :size="18" /></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

--- ### 2. Stil (CSS) Düzeltmesi İkonun rengi ve boyutu ile ilgili CSS kuralları eklendi. ```css
<style scoped>
.app-footer {
  /* Ana Zemin Rengi: #3B67D9 */
  background-color: #3b67d9;
  color: white;
  font-family: 'Arial', sans-serif;
  padding: 0;
  overflow: hidden;
}

.message-container {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  padding: 1.5rem 0;
  color: #f0f0f0;
}

/* İkonun boyutu ve rengi */
.message-container img.message-icon {
  /* İkonu beyaz yapmak için filtre kullanılıyor */
  filter: brightness(0) invert(1);
  height: 20px;
  width: 20px;
  margin-right: 0.5rem; /* Yazı ile arasına boşluk */
}

.footer-content {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
}

/* Sol boşluk, #2638C0 rengiyle */
.left-spacer {
  width: 60px;
  background-color: #2638c0;
  flex-shrink: 0;
}

/* Koyu Bölüm: #122868 */
.app-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-shrink: 0;

  background-color: #122868;
  padding: 4.5rem 3.5rem;
  width: 300px;
}

.logo-box {
  background-color: #f1641e;
  padding: 0.8rem 1.2rem;
  border-radius: 4px;
}

.logo-box img {
  height: 35px;
  filter: brightness(0) invert(1);
}

.download-button {
  background-color: #2638c0;
  color: white;
  border-radius: 999px;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 0.9rem;
  font-weight: bold;
}

/* Sağ Link Bölümü: #2638C0 */
.link-columns {
  display: flex;
  flex-wrap: nowrap;
  gap: 3rem;
  flex: 1;
  justify-content: flex-start;

  background-color: #2638c0;
  padding: 4.5rem 4rem 4.5rem 2.5rem;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 130px;
}

.column h4 {
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
}

.column a {
  color: white;
  text-decoration: none;
  font-size: 0.85rem;
}

.social-icons {
  display: flex;
  /* Logolar sola kaydırıldı */
  margin-top: 1.5rem;
  margin-left: 0px;
  gap: 0.8rem;
  align-items: center;
}

.social-icons a svg {
  color: white;
}
</style>
