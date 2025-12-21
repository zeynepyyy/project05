<template>
  <footer class="cart-footer-organism">
    <div class="footer-top">
      <div class="locale-settings">
        <span class="globe-icon">🌍</span>
        <span class="locale-text">Türkiye | English (US) | ₺ (TRY)</span>
      </div>
      
      <div class="footer-links">
        <span class="copyright">© 2025 Etsy, Inc.</span>
        <a href="#" class="footer-link">Terms of Use</a>
        <a href="#" class="footer-link">Privacy</a>
        <a href="#" class="footer-link">Interest-based ads</a>
        <a href="#" class="footer-link">Local Shops</a>
        <a href="#" class="footer-link">Regions</a>
        <a href="#" class="footer-link">Help Center</a>
      </div>
    </div>

    <div class="footer-bottom">
      <p class="merchant-info">
        Merchant is Etsy, Inc. (USA), Etsy Ireland UC (Ireland), Etsy UK Limited (United Kingdom), Etsy Canada Limited (Canada), or Etsy Australia Pty Limited (Australia) depending on the currency and location of the payment instrument issuance.
      </p>
      <div class="addresses">
        <span>Etsy, Inc., USA 117 Adams Street Brooklyn, NY 11201</span>
        <span>Etsy Ireland UC One Le Pole Square Ship Street Great Dublin 8</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.cart-footer-organism {
  background-color: #fff;
  color: #222;
  padding: 2rem 1rem;
  font-family: 'Segoe UI', sans-serif;
  border-top: 1px solid #e1e3e8;
  margin-top: 4rem;
  font-size: 0.8rem;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.locale-settings {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 24px;
  transition: background-color 0.2s;
}

.locale-settings:hover {
  background-color: #f1f1f1;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.footer-link {
  color: #222;
  text-decoration: underline;
}

.footer-bottom {
  text-align: center;
  color: #595959;
  font-size: 0.75rem;
  max-width: 1000px;
  margin: 0 auto;
}

.merchant-info {
  margin-bottom: 1rem;
  line-height: 1.4;
}

.addresses {
  display: flex;
  justify-content: center;
  gap: 2rem;
}
</style>
