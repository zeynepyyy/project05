<template>
  <div class="registry-page">
    <div class="hero-section">
      <h1 class="hero-title">Etsy Registry</h1>
      <p class="hero-subtitle">Make every milestone meaningful with extra-special gifts.</p>
      
      <button class="find-registry-btn">
        Find a registry 
        <span class="arrow">→</span>
      </button>

      <div class="cards-container">
        <!-- Wedding Registry -->
        <div class="registry-card">
          <div class="card-image-wrap">
            <img src="/registry-wedding.jpg" alt="Wedding Registry" class="card-img" /> 
          </div>
          <div class="card-content">
            <h3 class="card-title">Wedding Registry</h3>
            <p class="card-desc">Start your new life together with personalized pieces, well-crafted housewares, and more.</p>
            <button class="get-started-btn">Get started</button>
          </div>
        </div>

        <!-- Baby Registry -->
        <div class="registry-card">
          <div class="card-image-wrap">
              <img src="/registry-baby.jpg" alt="Baby Registry" class="card-img" />
          </div>
          <div class="card-content">
            <h3 class="card-title">Baby Registry</h3>
            <p class="card-desc">Welcome your little one to the world with custom items and the cutest, cuddliest creations.</p>
            <button class="get-started-btn">Get started</button>
          </div>
        </div>

        <!-- Gift Registry -->
        <div class="registry-card">
          <div class="card-image-wrap">
              <img src="/registry-gift.jpg" alt="Gift Registry" class="card-img" />
          </div>
          <div class="card-content">
            <h3 class="card-title">Gift Registry</h3>
            <p class="card-desc">Celebrate any occasion with a wishlist of incredible items for every budget—straight from independent sellers.</p>
            <button class="get-started-btn">Get started</button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Push content down to avoid cut off by footer if it overlaps, but hero is container -->
    <div class="spacer" style="height: 100px;"></div>

    <div class="reasons-section">
      <div class="reasons-container">
        <!-- Left Column: Image Collage -->
        <div class="reasons-collage">
             <!-- Using a simple grid of placeholders for the collage effect -->
             <div class="collage-item item-1"></div>
             <div class="collage-item item-2"></div>
             <div class="collage-item item-3"></div>
             <div class="collage-item item-4"></div>
             <div class="collage-item item-5"></div>
             <div class="collage-item item-6"></div>
        </div>

        <!-- Right Column: Text Content -->
        <div class="reasons-content">
          <h2 class="reasons-title">Reasons to love Etsy Registry</h2>

          <div class="reason-item">
            <div class="reason-icon-wrap">
               <!-- Illustration placeholder: Painting/Unique -->
               <Palette :size="48" color="#193e36" stroke-width="1" />
            </div>
            <div class="reason-text">
                <h3 class="reason-heading">Plenty of unique presents</h3>
                <p class="reason-desc">From personalized pieces to custom creations, the independent sellers on Etsy make it easy to find extraordinary gifts.</p>
            </div>
          </div>

          <div class="reason-item">
            <div class="reason-icon-wrap">
               <!-- Illustration placeholder: Occasion/Vase -->
               <Flower2 :size="48" color="#193e36" stroke-width="1" />
            </div>
            <div class="reason-text">
                <h3 class="reason-heading">Finds for every occasion</h3>
                <p class="reason-desc">Get something special for any occasion! From weddings to new babies, holidays to housewarming parties, discover gifts for every style and every budget.</p>
            </div>
          </div>

          <div class="reason-item">
            <div class="reason-icon-wrap">
               <!-- Illustration placeholder: Tips/Book -->
               <BookOpen :size="48" color="#193e36" stroke-width="1" />
            </div>
            <div class="reason-text">
                <h3 class="reason-heading">Tips and inspiration</h3>
                <p class="reason-desc">Our experts will spark some fresh ideas for your registry with new trends, gifting roundups, and more.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ SECTION -->
    <div class="faq-section">
      <div class="faq-header">
         <div class="faq-icon-circle">
            <HelpCircle :size="32" color="#222" stroke-width="1.5" />
         </div>
         <h2 class="faq-title">Questions? We've got answers</h2>
      </div>

      <div class="faq-list">
        <div 
          v-for="(item, index) in faqItems" 
          :key="index" 
          class="faq-item"
        >
          <button class="faq-question" @click="toggleFaq(index)">
            <span>{{ item.question }}</span>
            <ChevronDown :class="{ 'rotate-180': openFaq === index }" :size="20" />
          </button>
          
          <div v-show="openFaq === index" class="faq-answer">
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>

      <p class="faq-footer">
        Still have questions? Visit our <a href="#">registry help center</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Palette, Flower2, BookOpen, ChevronDown, HelpCircle } from 'lucide-vue-next';

// FAQ Data
const faqItems = [
  {
    question: "How do I add items to an Etsy registry?",
    answer: "Browse Etsy for items you love. When you find something, click the heart icon or the 'Add to Registry' button on the listing page."
  },
  {
    question: "How do I find an Etsy registry?",
    answer: "You can find a registry by searching for the registrant's name in the 'Find a registry' section at the top of this page."
  },
  {
    question: "How do I access my registry?",
    answer: "Sign in to your Etsy account, click on your profile icon, and select 'Registry' from the dropdown menu."
  },
  {
    question: "Is an Etsy Registry free?",
    answer: "Yes! Creating and managing an Etsy Registry is completely free."
  },
  {
    question: "What can you register for on Etsy?",
    answer: "You can register for anything available on Etsy, from handmade home decor to vintage finds and personalized gifts."
  }
];

const openFaq = ref<number | null>(null);

const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index;
};
</script>

<style scoped>
.registry-page {
  font-family: 'Guardian-EgypTT', serif; /* Or similar serif */
}

.hero-section {
  background-color: #193e36; /* Dark green from screenshot */
  color: white;
  text-align: center;
  padding-top: 4rem;
  padding-bottom: 8rem; /* Space for overlapped cards */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.hero-title {
  font-family: 'Guardian-EgypTT', serif;
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-family: 'Segoe UI', sans-serif; /* Subtitle is sans-serif usually */
  font-size: 1.1rem;
  margin-bottom: 2rem;
  font-weight: 500;
}

.find-registry-btn {
  background: transparent;
  border: 2px solid white;
  color: white;
  padding: 10px 24px;
  border-radius: 24px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4rem;
}
.find-registry-btn:hover {
  background: rgba(255,255,255,0.1);
}

.cards-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
  margin-bottom: -60px; 
  position: relative;
  z-index: 10;
}

.registry-card {
  background: white;
  color: #222;
  border-radius: 12px;
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.card-image-wrap {
  height: 200px;
  background-color: #f0f0f0; /* Placeholder color */
  overflow: hidden;
}

.card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-content {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
}

.card-title {
    font-family: 'Guardian-EgypTT', serif;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 400;
}

.card-desc {
    font-family: 'Segoe UI', sans-serif;
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 2rem;
    color: #222;
}

.get-started-btn {
    margin-top: auto;
    background: white;
    border: 1px solid #222;
    color: #222;
    padding: 10px 24px;
    border-radius: 24px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
}
.get-started-btn:hover {
    background: #f5f5f5;
}

/* REASONS SECTION STYLES */
.reasons-section {
  background-color: #fff9e6; /* Creamy yellow from screenshot */
  padding: 6rem 2rem;
  display: flex;
  justify-content: center;
}

.reasons-container {
  display: flex;
  max-width: 1200px;
  width: 100%;
  gap: 4rem;
  align-items: center;
}

.reasons-collage {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  height: 600px;
  position: relative;
}

.collage-item {
  background-color: #e0e0e0;
  border-radius: 16px;
  background-size: cover;
  background-position: center;
}
.item-1 { grid-row: span 2; background-image: url('/registry-collage-1.jpg'); }
.item-2 { grid-row: span 1; background-image: url('/registry-collage-2.jpg'); }
.item-3 { grid-row: span 2; background-image: url('/registry-collage-3.jpg'); }
.item-4 { grid-row: span 1; background-image: url('/registry-collage-4.jpg'); }
.item-5 { grid-row: span 1; background-image: url('/registry-collage-5.jpg'); }
.item-6 { grid-row: span 1; background-image: url('/registry-collage-6.jpg'); }


.reasons-content {
  flex: 1;
  text-align: left;
}

.reasons-title {
  font-family: 'Guardian-EgypTT', serif;
  font-size: 2.5rem;
  color: #222;
  margin-bottom: 3rem;
  font-weight: 400;
}

.reason-item {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.reason-icon-wrap {
  flex-shrink: 0;
  width: 60px;
  display: flex;
  justify-content: center;
}

.reason-text {
  display: flex;
  flex-direction: column;
}

.reason-heading {
  font-family: 'Segoe UI', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #222;
}

.reason-desc {
  font-family: 'Segoe UI', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #222;
}

@media (max-width: 900px) {
    .reasons-container {
        flex-direction: column-reverse;
        gap: 2rem;
    }
    .reasons-collage {
        width: 100%;
        height: 400px;
    }
}

/* FAQ SECTION STYLES */
.faq-section {
    padding: 6rem 2rem;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.faq-header {
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.faq-icon-circle {
    width: 64px;
    height: 64px;
    background: #f0f0f0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
}

.faq-title {
    font-family: 'Guardian-EgypTT', serif;
    font-size: 2rem;
    font-weight: 400;
    color: #222;
}

.faq-list {
    width: 100%;
    max-width: 900px;
    border-top: 1px solid #e1e1e1;
}

.faq-item {
    border-bottom: 1px solid #e1e1e1;
}

.faq-question {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    font-family: 'Segoe UI', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: #222;
}

.faq-question:hover {
    color: #595959;
}

.rotate-180 {
    transform: rotate(180deg);
}

.faq-answer {
    padding-bottom: 1.5rem;
    text-align: left;
    font-size: 0.95rem;
    line-height: 1.6;
    color: #222;
}

.faq-footer {
    margin-top: 4rem;
    font-family: 'Segoe UI', sans-serif;
    font-weight: 600;
    font-size: 0.95rem;
    color: #222;
}

.faq-footer a {
    text-decoration: underline;
    color: #222;
}
</style>
