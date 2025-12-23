<template>
  <p :class="['paragraph-atom', type]">
    <slot></slot>
  </p>
</template>

<script setup lang="ts">


const props = defineProps({
  // 'deal-subtext', 'seller-offer', 'housewarming-shop', 'campaign-discount'
  type: { type: String, required: true },
})
</script>

<style scoped>
.paragraph-atom {
  margin: 0;
}

.paragraph-atom.deal-subtext {
  font-size: 1rem;
  font-weight: 500;
  color: #c9c9c9;
  margin-bottom: 1rem;
}

.paragraph-atom.seller-offer {
  font-size: 0.7rem;
  font-weight: 300;
  color: #c9c9c9;
  margin-top: auto;
}

.paragraph-atom.housewarming-shop {
  font-size: 1rem;
  font-weight: 500;
  color: white;
}

.paragraph-atom.campaign-discount {
  font-size: 0.85rem;
  font-weight: 700;
  color: #a00; /* Kırmızı indirim rengi */
  margin-top: 0.3rem;
}
</style>
