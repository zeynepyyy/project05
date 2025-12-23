<template>
  <div class="coupon-section-molecule">
    <ActionButton type="coupon">
      <span class="coupon-icon"></span>
      Apply coupon code
    </ActionButton>

    <p class="tax-note">
      Local taxes included (where applicable)<br />
      * Learn more about additional taxes, duties, and fees that may apply
      <span class="max-apply">max apply</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import ActionButton from '../Atoms/ActionButton.vue'
</script>

<style scoped>
.coupon-section-molecule {
  margin-top: 1.5rem;
}

.coupon-icon {
  display: inline-block;
  width: 32px;
  height: 32px;
  background-image: url('/cupon.png'); /* Görsel yolu */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.tax-note {
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: #555;
  line-height: 1.4;
}

.max-apply {
  color: #555;
  text-decoration: underline;
  text-underline-offset: 2px;
  font-weight: 600;
}
</style>
