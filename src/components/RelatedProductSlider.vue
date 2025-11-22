<template>
  <div class="slider-section-container">
    <div class="title-and-category-slider">
      <div class="header-and-button-box">
        <div class="static-header">
          <h2 class="slider-title">Etsy-special gifts<br />for Christmas</h2>
          <button class="inspire-button">Get inspired</button>
        </div>
      </div>

      <div class="category-slider-container">
        <div class="category-slider-track">
          <div
            v-for="(category, index) in categories"
            :key="'cat-' + index"
            class="category-item"
            @click="toggleZoomCategory(index)"
            :class="{ zoomed: zoomedCategoryIndex === index }"
          >
            <img :src="category.image" :alt="category.title" class="category-image" />
            <div class="category-label">{{ category.title }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="product-slider-container">
      <div class="product-slider-track">
        <div
          v-for="(item, index) in products"
          :key="'prod-' + index"
          class="product-item"
          @click="toggleZoomProduct(index)"
          :class="{ zoomed: zoomedProductIndex === index }"
        >
          <img :src="item.image" :alt="item.title" class="product-image" />
          <div class="product-price">{{ item.price }} TL</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Fonksiyon Tipini Tanımlama (Parser hatasını önler)
type ToggleZoomFn = (index: number) => void

// Büyütme (Zoom) Durumları
const zoomedCategoryIndex = ref<number | null>(null)
const zoomedProductIndex = ref<number | null>(null)

// Fonksiyonlar: Tipini tanımlayarak parametre listesindeki hatayı giderdik.
const toggleZoomCategory: ToggleZoomFn = (index) => {
  zoomedCategoryIndex.value = zoomedCategoryIndex.value === index ? null : index
}

const toggleZoomProduct: ToggleZoomFn = (index) => {
  zoomedProductIndex.value = zoomedProductIndex.value === index ? null : index
}

// Kategoriler (3 Adet)
const categories: Category[] = [
  {
    title: 'Christmas Cards',
    image:
      'https://i.etsystatic.com/18159507/r/il/150843/7324556951/il_600x600.7324556951_aja9.jpg',
  },
  {
    title: 'Christmas Cookie Making Supplies',
    image:
      'https://i.etsystatic.com/57032941/c/1428/1428/306/35/il/fef26e/7387658309/il_600x600.7387658309_jfz8.jpg',
  },
  {
    title: 'Stocking Stuffers',
    image:
      'https://i.etsystatic.com/60789182/r/il/1e9f67/7360909939/il_600x600.7360909939_5nbu.jpg',
  },
]

// Ürünler (6 Adet)
const products: Product[] = [
  {
    title: 'Mini Gift Set',
    image:
      'https://i.etsystatic.com/54575788/c/864/864/136/164/il/ff155e/7353852192/il_600x600.7353852192_9vbp.jpg',
    price: '6.634,21',
  },
  {
    title: 'Festive Decor',
    image:
      'https://i.etsystatic.com/8477449/c/2000/2000/643/0/il/4cec17/7295298735/il_600x600.7295298735_7czv.jpg',
    price: '2.609,28',
  },
  {
    title: 'Green Ornament',
    image:
      'https://i.etsystatic.com/56976989/r/il/3faf5c/7278455078/il_600x600.7278455078_14f8.jpg',
    price: '1.562,36',
  },
  {
    title: 'Deer Stocking',
    image:
      'https://i.etsystatic.com/16873668/r/il/fa9726/7401208470/il_600x600.7401208470_dkhj.jpg',
    price: '1.892,70',
  },
  {
    title: 'Winter Mug',
    image:
      'https://i.etsystatic.com/35779714/r/il/22e877/7318630466/il_600x600.7318630466_mtin.jpg',
    price: '881,07',
  },
  {
    title: 'Cozy Blanket',
    image: 'https://i.etsystatic.com/8533091/r/il/7907af/7344629785/il_600x600.7344629785_sd4y.jpg',
    price: '5.481,64',
  },
]
</script>

<script lang="ts">
export interface Product {
  title: string
  image: string
  price: string
}

export interface Category {
  title: string
  image: string
}
</script>

<style scoped>
/* --- Genel Ayarlar --- */
.slider-section-container {
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
  color: #222;
  background-color: white;
}

/* Kaydırma Çubuğu Gizleme */
.category-slider-container,
.product-slider-container {
  overflow-x: auto;
  padding-bottom: 1rem;
}
.category-slider-container::-webkit-scrollbar,
.product-slider-container::-webkit-scrollbar {
  display: none;
}
.category-slider-container,
.product-slider-container {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* --- Başlık ve Büyük Kategori Slider Alanı --- */
.title-and-category-slider {
  display: flex;
  margin-bottom: 2rem;
  gap: 1.5rem;
}

.header-and-button-box {
  flex: 0 0 200px;
  padding-right: 1.5rem;
}

.static-header {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.slider-title {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0.8rem;
}

.inspire-button {
  background-color: #f0f0f0;
  color: #222;
  border: 1px solid #ccc;
  padding: 0.6rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.category-slider-container {
  flex-grow: 1;
  white-space: nowrap;
}

.category-slider-track {
  display: flex;
  gap: 1rem;
  height: 100%;
}

.category-item {
  flex: 0 0 auto;
  width: 200px;
  height: 200px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.category-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-label {
  position: absolute;
  bottom: 0.75rem;
  left: 0.75rem;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
}

/* BÜYÜTME (ZOOM) EFEKTİ STİLİ - Kategori */
.category-item.zoomed {
  transform: scale(1.05);
  z-index: 10;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

/* --- Alt Ürün Sliderı --- */
.product-slider-container {
  padding-top: 1rem;
}

.product-slider-track {
  display: flex;
  gap: 1rem;
  min-width: max-content;
}

.product-item {
  flex: 0 0 auto;
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.product-image {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
}

.product-price {
  position: absolute;
  bottom: 0.5rem;
  left: 0.5rem;
  background-color: white;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.8rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.product-item.zoomed {
  transform: scale(1.1);
  z-index: 10;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .title-and-category-slider {
    flex-direction: column;
  }

  .header-and-button-box {
    flex: none;
    width: 100%;
    padding-right: 0;
    margin-bottom: 1rem;
  }
}
</style>
