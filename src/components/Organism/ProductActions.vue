<template>
  <div class="product-actions-organism">
    <div class="stock-info">In 20+ carts</div>

    <PriceSection>
      <template #price>Now 133.41 TL</template>
    </PriceSection>

    <p class="tax-info">Local taxes included (where applicable)</p>

    <h1 class="product-title-text">
      Personalized Mini Christmas Stockings, Name Stockings, Christmas Gifts, Christmas Party
      Favors, Classroom Party, Coworker Gifts
    </h1>

    <SellerInfoRow />

    <div class="options-group">
      <OptionGroup select-id="color" label-text="Stocking Color">
        <option value="" disabled selected>Select an option</option>
        <option>Red</option>
        <option>Green</option>
      </OptionGroup>

      <OptionGroup select-id="font" label-text="Font Color">
        <option value="" disabled selected>Select an option</option>
        <option>Black</option>
        <option>White</option>
      </OptionGroup>

      <Personalization :is-open="isPersonalizationOpen" @toggle="togglePersonalization" />

      <OptionGroup select-id="qty" label-text="Quantity">
        <option>1</option>
        <option>2</option>
      </OptionGroup>

      <ActionButton type="add-to-cart">Add to cart</ActionButton>
    </div>

    <SellerBadge />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// Atomları import edin
import ActionButton from '../Atoms/ActionButtonn.vue'
// Molekülleri import edin
import PriceSection from '../Molecules/PriceSection.vue'
import OptionGroup from '../Molecules/OptionGroup.vue'
import Personalization from '../Molecules/Personalization.vue'
import SellerInfoRow from '../Molecules/SellerInfoRow.vue'
import SellerBadge from '../Molecules/SellerBadge.vue'

// --- Reaktif Durum ---
const isPersonalizationOpen = ref(false)

const togglePersonalization = () => {
  isPersonalizationOpen.value = !isPersonalizationOpen.value
}
</script>

<style scoped>
.product-actions-organism {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  /* Tüm sağ alanın stilini yönetir */
}

.stock-info {
  font-size: 0.85rem;
  font-weight: 700;
  color: #a00;
  margin-bottom: 0.5rem;
}

.tax-info {
  font-size: 0.75rem;
  color: #777;
  margin-bottom: 1rem;
}

.product-title-text {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  line-height: 1.4;
  margin-top: 0;
}

.options-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Add to cart butonu stili ActionButton Atomu'nda. */
</style>
