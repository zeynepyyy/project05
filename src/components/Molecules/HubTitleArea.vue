<template>
  <div class="hub-title-area-molecule">
    <Heading>The Holiday Hub</Heading>

    <Paragraph>
      Everything to help you celebrate the season.<br />
      Etsy is a marketplace of independent sellers. Product availability may vary.
    </Paragraph>
  </div>
</template>

<script setup>
import Heading from '../Atoms/HeadingH.vue'
import Paragraph from '../Atoms/ParagraphH.vue'
</script>

<style scoped>
/* Bu molekül sadece metin atomlarını kapsar. Stil yönetimi Organizma'da olacaktır. */
.hub-title-area-molecule {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* Margin ve padding gibi dış yerleşim stilleri Organizma'da tutulur. */
}
</style>
