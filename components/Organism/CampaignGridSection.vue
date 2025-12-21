<template>
  <section class="campaign-grid-section-organism">
    <Heading type="campaign-title" :level="2">Save now on standout styles</Heading>

    <div class="campaign-grid">
      <CampaignCard
        v-for="(item, index) in campaignStore.campaigns"
        :key="item.id"
        :title="item.title"
        :discount="item.subtitle"
        :image="item.imageUrl"
        :is-active="activeIndex === index"
        @toggle-active="toggleActive(index)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Heading from '../Atoms/HeadingD.vue'
import CampaignCard from '../Molecules/CampaignCard.vue'
import { useCampaignStore } from '~/stores/campaigns'

const campaignStore = useCampaignStore()
const activeIndex = ref<number | null>(null)

function toggleActive(index: number) {
  activeIndex.value = activeIndex.value === index ? null : index
}

onMounted(() => {
    campaignStore.fetchCampaigns()
})
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
