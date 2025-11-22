<template>
  <div class="campaign-page-container">
    <div class="top-banner-section">
      <div class="banner-box today-deal-banner">
        <div class="deal-content">
          <h1 class="deal-heading">Don't miss today's deal</h1>
          <p class="deal-subtext">
            Get up to 50% off stockings right<br />
            now for our 7 Days of Deals event
          </p>
          <button class="act-fast-button">Act fast</button>
          <p class="seller-offer-text">Offer at sellers' discretion. See shops for details.</p>
        </div>
        <img :src="stockingsImageUrl" alt="Christmas Stockings" class="stockings-image" />
      </div>

      <div class="banner-box housewarming-banner">
        <img :src="housewarmingImageUrl" alt="Housewarming Gifts" class="housewarming-image" />
        <div class="housewarming-overlay">
          <h2 class="housewarming-title">Housewarming Gifts</h2>
          <p class="housewarming-shop">Shop now</p>
        </div>
      </div>
    </div>

    <section class="campaigns">
      <h2 class="campaign-title">Save now on standout styles</h2>

      <div class="campaign-grid">
        <div
          v-for="(item, index) in campaigns"
          :key="index"
          class="campaign-box"
          @click="toggleActive(index)"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="campaign-image"
            :class="{ active: activeIndex === index }"
          />
          <div class="campaign-info">
            <h3 class="campaign-label">{{ item.title }}</h3>
            <p class="campaign-discount">{{ item.discount }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// ... (Script kısmı değişmedi) ...
const activeIndex = ref(null)

function toggleActive(index) {
  activeIndex.value = activeIndex.value === index ? null : index
}

// Görsel URL'leri
const stockingsImageUrl =
  'https://i.etsystatic.com/9493132/r/il/170dad/7245003621/il_fullxfull.7245003621_qidd.jpg'
const housewarmingImageUrl =
  'https://i.etsystatic.com/17199997/r/il/d1f3ca/6351705675/il_600x600.6351705675_b4pb.jpg'

// Alt kampanya listesi
const campaigns = [
  {
    title: 'Pet Portraits',
    discount: 'Up to 20% off',
    image:
      'https://i.etsystatic.com/18623087/r/il/da56c2/7284004899/il_300x300.7284004899_mhel.jpg',
  },
  {
    title: 'Adult Costumes',
    discount: 'Up to 20% off',
    image:
      'https://i.etsystatic.com/20703183/r/il/19680f/1983859144/il_300x300.1983859144_3kq2.jpg',
  },
  {
    title: 'Vintage Style',
    discount: 'Up to 20% off',
    image:
      'https://i.etsystatic.com/29939306/r/il/43f48f/4790454723/il_300x300.4790454723_pvli.jpg',
  },
  {
    title: 'Personalized Gifts',
    discount: 'Up to 20% off',
    image:
      'https://i.etsystatic.com/52857619/r/il/60f9f2/7166954500/il_300x300.7166954500_bp4p.jpg',
  },
  {
    title: 'Blankets & Throws',
    discount: 'Up to 25% off',
    image:
      'https://i.etsystatic.com/50965305/r/il/1bdd88/6311593238/il_300x300.6311593238_sloi.jpg',
  },
]
</script>

<style scoped>
/* ... (Üst Banner Stilleri değişmedi) ... */
.campaign-page-container {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background-color: #f7f7f7;
  padding: 1rem 0 3rem 0;
}

.top-banner-section {
  display: flex;
  gap: 1rem;
  padding: 0 1rem;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}

.banner-box {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-height: 200px;
  max-height: 250px;
  position: relative;
}

/* Sol Banner: Today's Deal */
.today-deal-banner {
  display: flex;
  flex: 2;
  max-width: 780px;
}

.deal-content {
  flex: 1.5;
  background-color: #384124;
  padding: 1.5rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
}

.deal-heading {
  font-size: 1.8rem;
  font-weight: 800;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  line-height: 1.1;
}

.deal-subtext {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #c9c9c9;
}

.act-fast-button {
  background-color: white;
  color: #222;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 700;
  cursor: pointer;
  align-self: flex-start;
  transition: background-color 0.2s;
  margin-bottom: 1rem;
}

.seller-offer-text {
  font-size: 0.7rem;
  font-weight: 300;
  color: #c9c9c9;
  margin-top: auto;
}

.stockings-image {
  flex: 1;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Sağ Banner: Housewarming Gifts */
.housewarming-banner {
  flex: 1;
  max-width: 400px;
  background-color: #920f0f;
}

.housewarming-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.housewarming-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  color: white;
  text-align: left;
  z-index: 1;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1));
}

.housewarming-title {
  font-size: 1.75rem;
  font-weight: 800;
  margin-bottom: 0.25rem;
  line-height: 1.1;
}

.housewarming-shop {
  font-size: 1rem;
  font-weight: 500;
  margin-top: 0;
}

/* --- Alt Kampanya Grid Alanı --- */
.campaigns {
  padding: 2rem 1rem;
  margin-top: 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.campaign-title {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  color: #222;
}

.campaign-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
}

.campaign-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  /* KUTUNUN KENDİSİNE HAFİF BİR DOLGU EKLENEREK İÇERİĞİ ÇERÇEVEYE SIĞDIRILDI */
  padding: 0.5rem;
}

.campaign-image {
  width: 100%;
  /* GÖRSELİN KUTUSUNA SIĞMASI İÇİN YÜKSEKLİK AYARLANDI */
  height: 150px; /* Daha kısa ve kutuya sığacak yükseklik */
  object-fit: cover;
  border-radius: 8px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
/* ... (Geri kalan stiller aynı) ... */

/* KÜÇÜK EKRANLAR İÇİN DÜZELTME: 5 kutu sığmazsa 3 veya 2 kutu halinde alt alta düşer */
@media (max-width: 1100px) {
  .campaign-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Minmax değeri küçültüldü */
  }
}

/* KÜÇÜK EKRANLAR İÇİN ÜST BANNER DÜZENLEMESİ */
@media (max-width: 768px) {
  .top-banner-section {
    flex-direction: column;
    padding: 1rem;
  }

  .banner-box {
    max-width: 100%;
    min-height: auto;
  }

  .today-deal-banner {
    flex-direction: column;
  }

  .deal-content {
    order: 1;
    padding-bottom: 1rem;
  }

  .stockings-image {
    order: 2;
    height: 120px; /* Mobil görsel yüksekliği daha da kısaltıldı */
    border-top-right-radius: 0;
    border-bottom-left-radius: 12px;
  }
}
</style>
