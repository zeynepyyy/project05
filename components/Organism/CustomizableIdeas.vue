<template>
  <div class="customizable-ideas-organism">
    <h3 class="section-title">Shop customizable ideas</h3>
    
    <div class="ideas-grid">
      <div v-for="(idea, index) in ideas" :key="index" class="idea-card">
        <div class="image-wrapper">
          <img :src="idea.image" :alt="idea.title" />
        </div>
        <p class="idea-title">{{ idea.title }}</p>
      </div>
    </div>
    
    <div class="pagination">
      <button class="page-btn arrow">←</button>
      <button class="page-btn active">1</button>
      <button class="page-btn">2</button>
      <button class="page-btn">3</button>
      <button class="page-btn">4</button>
      <button class="page-btn">5</button>
      <button class="page-btn arrow">→</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const ideas = [
  { title: 'embroidered socks for men', image: 'https://i.etsystatic.com/26463945/c/2000/2000/0/0/il/d3672e/3521262961/il_300x300.3521262961_k4m1.jpg' },
  { title: 'custom face socks for men', image: 'https://i.etsystatic.com/24433872/r/il/305273/2493397946/il_300x300.2493397946_p29n.jpg' },
  { title: 'monogrammed socks for men', image: 'https://i.etsystatic.com/8940263/r/il/663432/3484252685/il_300x300.3484252685_5m5e.jpg' },
  { title: 'personalized novelty socks', image: 'https://i.etsystatic.com/26639739/r/il/9d1f3b/4006190248/il_300x300.4006190248_3n2m.jpg' },
]
</script>

<style scoped>
.customizable-ideas-organism {
  padding: 3rem 0;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
  font-family: 'Segoe UI', serif;
}

.ideas-grid {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.idea-card {
  width: 180px;
  cursor: pointer;
}

.image-wrapper {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.idea-card:hover img {
  transform: scale(1.05);
}

.idea-title {
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.4;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.page-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: transparent;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-btn:hover {
  background: #f1f1f1;
}

.page-btn.active {
  background: #f1f1f1;
  border: 1px solid #222;
}

.arrow {
  font-size: 1.2rem;
}
</style>
