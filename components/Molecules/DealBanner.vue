<template>
  <div class="deal-banner-molecule">
    <div class="deal-content">
      <h2 class="deal-heading">Don't miss<br>today's deal</h2>
      <p class="deal-subtext">
        Get up to 50% off stockings right now for our 7
      </p>
      <!-- "Act fast" or see terms text can be optional or small -->
      <div class="deal-footer">
          <!-- Optional footer text/link -->
      </div>
    </div>

    <div class="deal-image-wrap">
        <img :src="stockingsImageUrl" alt="Christmas Stockings" />
    </div>
  </div>
</template>

<script setup lang="ts">
const stockingsImageUrl =
  'https://i.etsystatic.com/9493132/r/il/170dad/7245003621/il_fullxfull.7245003621_qidd.jpg'
</script>

<style scoped>
.deal-banner-molecule {
  display: flex;
  flex: 2; /* Takes up 2/3 of space relative to header */
  max-width: 800px; /* Adjust as needed */
  border-radius: 12px;
  overflow: hidden;
  background-color: #2F3E28; /* Deep Green from screenshot */
  height: 280px; 
  position: relative;
}

.deal-content {
  flex: 0 0 40%; /* Text takes ~40% width */
  padding: 2rem 1.5rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
}

.deal-heading {
    font-family: 'Guardian-EgypTT', serif; /* Etsy-like serif if available, else standard */
    font-size: 2.2rem;
    line-height: 1.1;
    font-weight: 700;
    margin-bottom: 1rem;
}

.deal-subtext {
    font-size: 1rem;
    line-height: 1.4;
    font-weight: 400;
    opacity: 0.9;
}

.deal-image-wrap {
    flex: 1;
    height: 100%;
    position: relative;
}

.deal-image-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
</style>
