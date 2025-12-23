<template>
  <div class="payment-summary-organism">
    <h4 class="payment-title">How you'll pay</h4>

    <div class="payment-methods">
      <PaymentMethod :is-selected="false">
        <ImageAtom src="/visa.png" alt="Visa" type="payment-card" />
        <ImageAtom src="/mastercard.png" alt="Mastercard" type="payment-card" />
        <ImageAtom src="/amex.png" alt="Amex" type="payment-card" />
        <ImageAtom src="/diners.png" alt="Diners Club" type="payment-card" />
      </PaymentMethod>

      <PaymentMethod :is-selected="false">
        <ImageAtom src="/paypal.png" alt="PayPal" type="payment-card" />
      </PaymentMethod>

      <PaymentMethod :is-selected="true">
        <ImageAtom src="/gpay.png" alt="Google Pay" type="payment-gpay" />
      </PaymentMethod>
    </div>

    <div class="gift-text">
      <InputCheckbox id="gift-checkbox" />
      <label for="gift-checkbox" class="gift-label">Mark order as a gift</label>
      <span class="learn-more">Learn more</span>
    </div>

    <ActionButton type="checkout">Proceed to checkout</ActionButton>

    <CouponSection />
  </div>
</template>

<script setup lang="ts">
// Atomları import edin
import ImageAtom from '../Atoms/ImageAtom.vue'
import ActionButton from '../Atoms/ActionButton.vue'
import InputCheckbox from '../Atoms/InputCheckbox.vue'

// Molekülleri import edin
import PaymentMethod from '../Molecules/PaymentMethod.vue'
import CouponSection from '../Molecules/CouponSection.vue'
</script>

<style scoped>
.payment-summary-organism {
  flex: 1; /* Sayfanın küçük kısmını kaplar */
  padding: 0 0.5rem;
  /* Tüm ödeme bölümü stilini içerir */
}

.payment-title {
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #555;
}

.payment-methods {
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

.gift-text {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  display: flex;
  gap: 0.75rem;
  align-items: center;
  margin-top: 0.5rem;
}

.gift-label {
  font-weight: 600;
  font-size: 1rem;
  color: #333;
}

.learn-more {
  border-bottom: 1px dashed #222;
  color: #222;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
}
</style>
