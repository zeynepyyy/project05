<template>
  <div class="similar-products">
    <h3 class="section-title">Benzer Ürünler</h3>
    <div class="product-grid">
      <div v-for="(product, index) in products" :key="index" class="product-card">
        <img :src="product.image" :alt="product.title" class="product-image" />
        <div class="product-info">
          <h4 class="product-title">{{ product.title }}</h4>
          <p class="product-seller">
            <img
              src="https://i.etsystatic.com/5870358/r/il/10246a/1983775606/il_75x75.1983775606_kjxq.jpg"
              class="seller-badge"
              alt="badge"
            />
            {{ product.seller }}
          </p>
          <p class="product-price">{{ product.price }} TL</p>
          <button class="add-to-cart">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const products = [
  {
    title: 'Advent Calendar Kraft Bags',
    seller: 'Rennadeluxe',
    price: '660.31',
    image: 'https://i.etsystatic.com/5870358/r/il/472f95/2031335845/il_1588xN.2031335845_hh91.jpg',
  },
  {
    title: 'Advent Calendar White Bags',
    seller: 'Rennadeluxe',
    price: '865.06',
    image: 'https://i.etsystatic.com/5870358/r/il/a32d55/857679200/il_1588xN.857679200_iuaw.jpg',
  },
  {
    title: 'Advent Calendar Hanging Set',
    seller: 'Rennadeluxe',
    price: '762.68',
    image: 'https://i.etsystatic.com/5870358/r/il/942bd9/2031336451/il_1588xN.2031336451_4k2g.jpg',
  },
  {
    title: 'Star Garland Gold Paper',
    seller: 'Rennadeluxe',
    price: '455.56',
    image: 'https://i.etsystatic.com/5870358/r/il/80aaba/2715635591/il_1588xN.2715635591_mjcw.jpg',
  },
  {
    title: 'Advent Calendar Tree Shape',
    seller: 'Rennadeluxe',
    price: '660.31',
    image: 'https://i.etsystatic.com/5870358/r/il/10246a/1983775606/il_1588xN.1983775606_kjxq.jpg',
  },
]
</script>

<style scoped>
.similar-products {
  padding: 2rem 1rem;
  background-color: #fff;
  font-family: 'Segoe UI', sans-serif;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: left;
  color: #333;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease;
}

.product-card:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.product-info {
  padding: 1rem;
  text-align: left;
}

.product-title {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
  color: #333;
}

.product-seller {
  font-size: 0.85rem;
  color: #777;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 6px;
}

.seller-badge {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  object-fit: cover;
}

.product-price {
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.8rem;
}

.add-to-cart {
  background-color: transparent;
  color: #222;
  border: 1.5px solid #222;
  padding: 0.6rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.add-to-cart::before {
  content: '+';
  font-weight: bold;
  font-size: 1rem;
}

.add-to-cart:hover {
  background-color: #222;
  color: white;
}
</style>
