<template>
  <div class="home-page">
    <HolidayCategoryGridView />
    <RecentFinds />
    <HolidayFinds />
    <InspiredPicks />
    <JumpBackIn />
    <div class="section-spacer"></div>
    <HomePageCampaignsSection />
    <EnchantedGarden />
    <HighOctaneStyle />
    <StockingStuffers />
    <BigDeals />
    <SpecialGifts />
  </div>
</template>

<script setup lang="ts">
import RecentFinds from '~/components/Organism/RecentFinds.vue';
import HolidayFinds from '~/components/Organism/HolidayFinds.vue';
import InspiredPicks from '~/components/Organism/InspiredPicks.vue';
import JumpBackIn from '~/components/Organism/JumpBackIn.vue';
import EnchantedGarden from '~/components/Organism/EnchantedGarden.vue';
import HighOctaneStyle from '~/components/Organism/HighOctaneStyle.vue';
import StockingStuffers from '~/components/Organism/StockingStuffers.vue';
import BigDeals from '~/components/Organism/BigDeals.vue';
import SpecialGifts from '~/components/Organism/SpecialGifts.vue';

definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
.section-spacer {
  height: 2rem;
}

.home-page {
  padding-bottom: 4rem;
}
</style>
