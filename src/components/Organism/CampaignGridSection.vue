<template>
  <section class="campaign-grid-section-organism">
    <Heading type="campaign-title" :level="2">Save now on standout styles</Heading>

    <div class="campaign-grid">
      <CampaignCard
        v-for="(item, index) in campaigns"
        :key="index"
        :title="item.title"
        :discount="item.discount"
        :image="item.image"
        :is-active="activeIndex === index"
        @toggle-active="toggleActive(index)"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Heading from '../Atoms/HeadingD.vue'
import CampaignCard from '../Molecules/CampaignCard.vue'

const activeIndex = ref(null)

function toggleActive(index) {
  activeIndex.value = activeIndex.value === index ? null : index
}

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
.campaign-grid-section-organism {
  padding: 2rem 1rem;
  margin-top: 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.campaign-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
}

/* Mobil stiller için medya sorguları */
@media (max-width: 1100px) {
  .campaign-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
</style>
