<template>
  <footer class="main-footer-organism">
    <RenewableMessage />

    <div class="footer-content">
      <Spacer />

      <AppDownloadSection />

      <div class="link-columns-group">
        <LinkColumn title="Shop">
          <Link>Gift cards</Link>
          <Link>Etsy Registry</Link>
          <Link>Sitemap</Link>
          <Link>Etsy blog</Link>
          <Link>Etsy United Kingdom</Link>
          <Link>Etsy Germany</Link>
          <Link>Etsy Canada</Link>
        </LinkColumn>

        <LinkColumn title="Sell">
          <Link>Sell on Etsy</Link>
          <Link>Teams</Link>
          <Link>Forums</Link>
          <Link>Affiliates & Creators</Link>
        </LinkColumn>

        <LinkColumn title="About">
          <Link>Etsy, Inc.</Link>
          <Link>Policies</Link>
          <Link>Investors</Link>
          <Link>Careers</Link>
          <Link>Press</Link>
          <Link>Impact</Link>
          <Link>Legal imprint</Link>
        </LinkColumn>

        <div class="column help-column">
          <Heading>Help</Heading>
          <Link>Help Center</Link>
          <Link>Privacy settings</Link>

          <SocialIcons />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Atomları ve Molekülleri import edin
import Spacer from '../Atoms/SpacerAdd.vue'
import Link from '../Atoms/LinkMail.vue'
import Heading from '../Atoms/HeadingAdd.vue'
import RenewableMessage from '../Molecules/RenewableMessage.vue'
import AppDownloadSection from '../Molecules/AppDownloadSection.vue'
import LinkColumn from '../Molecules/LinkColumn.vue'
import SocialIcons from '../Molecules/SocialIcons.vue'
</script>

<style scoped>
/* Orijinal koddaki ana footer stilleri */
.main-footer-organism {
  background-color: #3358ba; /* Ana footer rengi (üst mesaj bandı hariç) */
  color: white;
  font-family: 'Arial', sans-serif;
  padding: 0;
  overflow: hidden;
  width: 100%; /* Ensure full width */
  margin-top: auto; /* Push footer to bottom */
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: stretch;
  max-width: 1280px;
  margin: 0 auto;
}

/* Link Sütunlarının Kapsayıcısı */
.link-columns-group {
  display: flex;
  flex-wrap: nowrap;
  gap: 3rem;
  flex: 1;
  justify-content: flex-start;
  /* Koyu blok ile aynı renk (Spacer da bu renkte) */
  background-color: #2638c0;
  padding: 4.5rem 4rem 4.5rem 2.5rem;
}

/* Help Sütunu için özel düzenleme (Sosyal medya ikonları nedeniyle) */
.help-column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 130px;
}
</style>
