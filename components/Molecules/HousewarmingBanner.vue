<template>
  <div class="pink-gift-banner">
    <div class="image-container">
        <!-- Using a placeholder for the colorful gift tags -->
        <img :src="giftTagsImage" alt="Personalized Gift Tags" />
    </div>
  </div>
</template>

<script setup>
const giftTagsImage = 'https://i.etsystatic.com/17199997/r/il/d1f3ca/6351705675/il_600x600.6351705675_b4pb.jpg' 
// Ideally replace with the exact image from screenshot if available, but this is the existing one.
</script>

<style scoped>
.pink-gift-banner {
  flex: 1; /* Takes up 1/3 space */
  max-width: 400px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #FFC0CB; /* Pink background */
  background: linear-gradient(135deg, #ffd1d6 0%, #ffc0cb 100%);
  height: 280px; /* Match height of DealBanner */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.image-container {
    width: 100%;
    height: 100%;
    padding: 20px; /* Padding for the "card on pink bg" look if image is transparent, or just fill */
    display: flex;
    align-items: center;
    justify-content: center;
}

.image-container img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain; /* Ensure tags are visible */
    transform: rotate(-5deg); /* Slight tilt like screenshot often has */
    transition: transform 0.3s;
}

.pink-gift-banner:hover .image-container img {
    transform: rotate(0deg) scale(1.05);
}
</style>
