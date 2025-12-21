<template>
  <div class="gift-mode-page">
    <!-- Header Section -->
    <section class="gift-header">
      <h1 class="main-title">Extra-special gifting made extra-easy</h1>
      <p class="sub-title">Discover perfect picks for the occasion!</p>
    </section>
    
    <!-- Link to Google Fonts (Temporary solution for this file, ideally in nuxt.config) -->
    <link href="https://fonts.googleapis.com/css2?family=Gelasio:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">

    <!-- Occasions Navigation (Scrollable) -->
    <section class="occasions-nav">
        <button class="nav-arrow prev" @click="scrollNav('left')">‹</button>
        <div class="nav-scroll-container" ref="navContainer">
            <div 
                class="nav-item" 
                v-for="(item, index) in navItems" 
                :key="item.label"
                :class="{ active: activeIndex === index }"
                @click="activeIndex = index"
            >
                <div class="icon-circle">
                    <component :is="item.icon" :size="36" stroke-width="2" style="color: #000;" />
                </div>
                <div class="nav-text">
                    <span class="nav-label">{{ item.label }}</span>
                    <span class="nav-date" v-if="item.date">{{ item.date }}</span>
                </div>
            </div>
        </div>
        <button class="nav-arrow next" @click="scrollNav('right')">›</button>
    </section>

    <!-- Seasonal Categories Grid (Restored) -->
    <section class="seasonal-grid-section">
        <div class="seasonal-grid">
            <div :class="['seasonal-card', cat.size]" v-for="cat in seasonalCategories" :key="cat.title">
                <div class="seasonal-image">
                    <img :src="cat.image" :alt="cat.title" />
                </div>
                <div class="seasonal-label">{{ cat.title }}</div>
            </div>
        </div>
        <div class="more-ideas-container">
            <a href="#" class="more-ideas-btn">More ideas for Christmas →</a>
        </div>
    </section>

    <!-- Browse by Interest Section -->
    <section class="interest-section">
      <h2 class="section-title">Browse by interest for the best gifts!</h2>
      <div class="interest-pills">
        <button 
          v-for="interest in interests" 
          :key="interest"
          class="interest-pill"
          :class="{ active: selectedInterest === interest }"
          @click="selectedInterest = interest"
        >
          {{ interest }}
        </button>
        <button class="interest-pill more">+ More</button>
      </div>
    </section>

    <!-- Dynamic Persona Product Sections -->
    <section v-for="(section, index) in personaSections" :key="section.title" class="persona-product-section">
        <div class="persona-header-row">
            <div class="persona-info">
                 <div class="persona-avatar-box">
                     <img :src="section.avatar" :alt="section.subtitle" />
                 </div>
                 <div class="persona-titles">
                     <span class="persona-subtitle-small">{{ section.subtitle }}</span>
                     <h2 class="persona-title-large">{{ section.title }}</h2>
                 </div>
            </div>
            <a href="#" class="browse-all-link">Browse all →</a>
        </div>

        <div class="persona-carousel">
            <div 
                v-for="prod in section.products" 
                :key="prod.title" 
                class="persona-product-card"
            >
                <div class="persona-image-rect">
                    <button class="fav-icon-btn">♡</button>
                    <video 
                        v-if="prod.video" 
                        :src="prod.video" 
                        class="product-video"
                        muted 
                        loop 
                        playsinline
                        :poster="prod.image || ''"
                        @mouseenter="$event.target.play()"
                        @mouseleave="$event.target.pause(); $event.target.currentTime = 0;"
                    ></video>
                    <img v-else :src="prod.image" :alt="prod.title" />
                </div>
                <div class="persona-card-details">
                    <h3 class="pp-title">{{ prod.title }}</h3>
                    <div class="pp-rating">
                         <span class="stars">★★★★★</span>
                         <span class="review-count">({{ prod.reviews }})</span>
                    </div>
                    <div class="pp-price">{{ prod.price }} TL</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Related Gift Ideas Section -->
    <section class="related-ideas-section">
      <div class="more-ideas-top-container">
           <button class="more-ideas-pill-btn">Show more ideas</button>
      </div>
      <h2 class="section-title-left">Related gift ideas for: Video Games</h2>
      <div class="related-ideas-grid">
        <div 
          v-for="idea in relatedIdeas" 
          :key="idea.title" 
          class="related-idea-card"
          :style="{ backgroundColor: idea.color }"
        >
          <div class="related-idea-content">
            <span class="related-idea-prefix">The</span>
            <h3 class="related-idea-title">{{ idea.title.replace('The ', '') }}</h3>
          </div>
          <div class="related-idea-image-container">
             <div class="related-idea-circle" :style="{ background: idea.circleColor }"></div>
             <img :src="idea.image" :alt="idea.title" />
          </div>
        </div>
      </div>
      <div class="browse-all-container">
          <button class="browse-all-btn">Browse All</button>
      </div>
    </section>

    <!-- Extraordinary Finds Section (Multiple Rows) -->
    <section class="extraordinary-finds-section">
        <h2 class="section-title">Extraordinary finds for everyone in your life</h2>
        
        <div v-for="category in extraordinaryCategories" :key="category.title" class="finds-row">
            <div class="row-header">
                <div class="header-left">
                    <div class="header-icon-box">
                        <component :is="category.icon" :size="20" />
                    </div>
                    <span>For your {{ category.title }}</span>
                </div>
                <a href="#" class="shop-all-link">Shop all →</a>
            </div>
            
            <div class="finds-carousel">
                <div class="find-card-simple" v-for="item in category.items" :key="item.label">
                    <div class="find-image-rect">
                        <img :src="item.image" :alt="item.label" />
                    </div>
                    <div class="find-label-simple">{{ item.label }}</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Other Special People Section -->
    <section class="special-people-section">
        <h2 class="section-title-center">Other special people to shop for</h2>
        <div class="people-pills-grid">
            <div class="person-pill" v-for="person in specialPeople" :key="person.label">
                <component :is="person.icon" :size="24" stroke-width="1.5"/>
                <span>{{ person.label }}</span>
            </div>
        </div>
    </section>

    <!-- Get Inspired! Popular Gift Ideas -->
    <section class="popular-inspired-section">
        <div class="section-header-row">
             <h2 class="section-title-left">Get Inspired! Popular Gift Ideas</h2>
             <a href="#" class="browse-all-link">Browse all →</a>
        </div>
       
        <div class="inspired-grid">
            <div 
                v-for="idea in popularGiftIdeas" 
                :key="idea.title" 
                class="inspired-card"
                :style="{ backgroundColor: idea.color }"
            >
                <div class="inspired-content">
                    <span class="inspired-subtitle">The</span>
                    <h3 class="inspired-title">{{ idea.title }}</h3>
                </div>
                <!-- Image simulates the cutout effect -->
                <div class="inspired-image-container">
                    <img :src="idea.image" :alt="idea.title" />
                </div>
            </div>
        </div>
    </section>

    <!-- Discover Popular Gifts (Pills) -->
    <section class="discover-popular-section">
        <h2 class="section-title-center">Discover popular gifts sure to delight</h2>
        <div class="discover-pills">
            <button 
                class="discover-pill" 
                v-for="(cat, index) in discoverCategories" 
                :key="cat"
                :class="{ active: index === 0 }"
            >{{ cat }}</button>
        </div>
        <div class="discover-grid">
            <div class="discover-card" v-for="(item, i) in discoverItems" :key="i">
                <div class="discover-image">
                    <img :src="item.image" alt="Gift idea">
                    <button class="heart-icon-btn"><component :is="Heart" :size="20" /></button>
                    <button v-if="item.video" class="play-icon-btn"><component :is="Play" :size="16" fill="black" /></button>
                </div>
                <div class="discover-price-tag">
                    <span class="current-price">{{ item.price }}</span>
                    <span v-if="item.original" class="original-price">{{ item.original }}</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Inspire Your Inner Gifter / What's the Occasion -->
    <section class="inspire-gifter-section">
        <h2 class="main-title" style="font-size: 2rem; margin-bottom: 32px; text-align: center; font-family: 'Guardian-EgypTT', serif; font-weight: 300;">Inspire your inner gifter!</h2>
        
        <div class="occasion-carousel-wrapper">
            <div class="section-header-row">
                <h3 class="subsection-title">What's the occasion?</h3>
                <div class="nav-arrows-top-right">
                    <button class="circle-arrow">‹</button>
                    <button class="circle-arrow">›</button>
                </div>
            </div>
            <div class="occasion-carousel">
                <div 
                    class="occasion-card" 
                    v-for="occ in innerGifterOccasions" 
                    :key="occ.title"
                    :style="{ backgroundColor: occ.bgColor }"
                >
                    <div class="occ-content">
                        <span class="occ-prefix">The</span>
                        <h4 class="occ-title">{{ occ.title }}</h4>
                    </div>
                    <div class="occ-image-arch">
                        <img :src="occ.image" :alt="occ.title">
                    </div>
                </div>
            </div>
        </div>

        <!-- "Who is it for?" Section -->
        <div class="occasion-carousel-wrapper" style="margin-top: 60px;">
             <div class="section-header-row">
                 <h3 class="subsection-title">Who is it for?</h3>
                 <div class="nav-arrows-inline">
                    <button class="circle-arrow">‹</button>
                    <button class="circle-arrow">›</button>
                </div>
            </div>
            <div class="occasion-carousel">
                <div 
                    class="occasion-card" 
                    v-for="persona in whoIsItFor" 
                    :key="persona.title"
                    :style="{ backgroundColor: persona.bgColor }"
                >
                    <div class="occ-content">
                        <span class="occ-prefix">The</span>
                        <h4 class="occ-title">{{ persona.title }}</h4>
                    </div>
                    <div class="occ-image-arch">
                        <img :src="persona.image" :alt="persona.title">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Do They Love Music? -->
    <section class="music-love-section">
        <div class="section-header-row">
            <h3 class="subsection-title">Do they love music?</h3>
             <div class="nav-arrows-inline">
                <button class="circle-arrow">‹</button>
                <button class="circle-arrow">›</button>
            </div>
        </div>
        <div class="music-grid">
            <div 
                class="occasion-card" 
                v-for="item in musicGifts" 
                :key="item.title"
                :style="{ backgroundColor: item.bgColor }"
            >
                <div class="occ-content">
                    <span class="occ-prefix">The</span>
                    <h4 class="occ-title">{{ item.title }}</h4>
                </div>
                <div class="occ-image-arch">
                    <img :src="item.image" :alt="item.title">
                </div>
            </div>
        </div>
    </section>

    <!-- Gift Teaser Banner -->
    <section class="gift-teaser-banner">
        <div class="teaser-content">
            <div class="new-badge">New</div>
            <h2 class="teaser-heading">Make any gift extra-special with a gift teaser—it’s *FREE!</h2>
            <ul class="teaser-features">
                <li><component :is="ShoppingCart" :size="18" stroke-width="2.5" /> Mark as a gift to send a gift teaser! *It's free with purchase</li>
                <li><component :is="Gift" :size="18" stroke-width="2.5" /> Send a special note, tracking info, and even a sneak peek</li>
                <li><component :is="Send" :size="18" stroke-width="2.5" /> Share it instantly... even on the way to the party!</li>
            </ul>
        </div>
        <div class="teaser-visual">
            <video autoplay loop muted playsinline class="teaser-video-bg">
                <source src="https://i.etsystatic.com/site-assets/gift-recipient-access/Banner+Images/video/gt_video_en-US.webm" type="video/webm">
            </video>
            <div class="user-avatar-bubble">
                <img src="https://i.etsystatic.com/17857814/r/il/156976/3133649525/il_fullxfull.3133649525_c43b.jpg" alt="User" />
            </div>
            <div class="teaser-card-mockup">
                <div class="mockup-img-container">
                    <img src="https://i.etsystatic.com/47517904/r/il/b22a93/5484594611/il_680x540.5484594611_ky33.jpg" alt="Gift Teaser" />
                </div>
                <div class="teaser-overlay-text">Personalized Leather Coin Purse</div>
                <div class="mockup-footer">
                    <div class="mockup-line">
                         <span class="mockup-label">Mark order as a gift</span>
                         <div class="mockup-checkbox"></div>
                    </div>
                    <button class="proceed-btn-small">Proceed to checkout</button>
                </div>
            </div>
            <button class="play-btn-corner"><component :is="Play" :size="20" fill="currentColor" style="margin-left:2px;" /></button>
        </div>
    </section>

    <!-- Gift Cards Banner -->
    <section class="gift-cards-banner">
         <div class="gift-cards-visual">
              <img :src="'/gift-cards-banner.png'" alt="Etsy Gift Cards" class="cards-bg-image-img" />
         </div>
         <div class="gift-cards-content">
              <h2>Shop Etsy gift cards</h2>
              <p>Get them something one-of-a-kind in minutes, no guesswork needed.</p>
              <a href="#" class="pick-design-link">Pick a design <span style="font-size:1.2em">→</span></a>
         </div>
    </section>

    <!-- SEO Text Section -->
    <section class="seo-text-section">
        <div class="seo-row">
            <div class="seo-avatar-container">
                <img src="https://i.etsystatic.com/ij/cee857/5343207831/ij_300x300.5343207831_1c49na2i.jpg?version=0" alt="Gift Guide" class="seo-circle-img" />
            </div>
            <div class="seo-content-text">
                <p>If you need gift ideas for anybody—and we mean ANYBODY—in your life, you've come to the right place.</p>
                <p>By answering a few simple questions, this fun gift finder will suggest the perfect presents based on the occasion, the person's interests, and more. Etsy takes the stress out of finding special gifts. From anniversary gifts to birthday gifts, and even gifts for the people who have everything, use Etsy to take the guesswork out of giving.</p>
            </div>
        </div>
        <div class="seo-footer-btn">
             <button class="less-btn">Less</button>

        </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { storeToRefs } from 'pinia'; 

import { useProductsStore } from '~/stores/products'; // Added store import

import { 
    Gift, Heart, Moon, Calendar, User, Smile, 
    Anchor, Cross, Diamond, Baby, Star,
    Briefcase, Coffee, Music, Monitor,
    ShoppingCart, Send, TreePine, Cake, Flower, Gem, Mail,
    GraduationCap, Users, HeartHandshake // Added more icons
} from 'lucide-vue-next';

const navContainer = ref<HTMLElement | null>(null);
const activeIndex = ref(0);

const navItems = [
    { label: 'Christmas', date: 'Dec 25', icon: TreePine }, /* Tree */
    { label: "Valentine's Day", date: 'Feb 14', icon: Heart },
    { label: 'Lunar New Year', date: 'Feb 17', icon: Mail }, /* Envelope */
    { label: 'Wedding', date: '', icon: Cake }, /* Cake */
    { label: 'Birthday', date: '', icon: Cake }, /* Cupcake/Cake */
    { label: 'Anniversary', date: '', icon: Gem }, /* Rings/Gem */
    { label: 'Thank You', date: '', icon: Mail }, /* Envelope */
    { label: 'Sympathy', date: '', icon: Flower }, /* Flowers */
    { label: 'Get Well', date: '', icon: Smile }, /* Teddy Bear substitute */
    { label: 'Engagement', date: '', icon: Diamond }, /* Ring */
    { label: 'New Baby', date: '', icon: Baby }, /* Bottle substitute */
    { label: 'Expecting Parent', date: '', icon: Baby }, /* Mobile substitute */
];

const giftStore = useGiftModeStore();
const { categories: seasonalCategories } = storeToRefs(giftStore);

onMounted(() => {
    giftStore.fetchCategories();
});

// REMOVED HARDCODED DATA - Now served via defaultCategories in store or Firebase


// Mock Data for Persona Sections
const personaSections = ref([
    {
        subtitle: 'The Video Gamer',
        title: 'Retro Arcade Decor',
        avatar: 'https://i.etsystatic.com/54584018/r/il/9b5634/7301293175/il_100x100.7301293175_k7f5.jpg',
        products: [
            { title: 'The Ghost in Arcade', reviews: '4.5k', price: '594.88', image: 'https://i.etsystatic.com/40857589/c/3000/2384/0/346/il/6091e3/4719931521/il_680x540.4719931521_rsmf.jpg' },
            { title: 'Atari 2600 Console', reviews: '234', price: '358.13', image: '', video: 'https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/VID_20250125_140449_wnp5t3.mp4' },
            { title: 'Gaming Wall Art Set', reviews: '383', price: '295.35', image: '', video: 'https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/zVideo3SET_ukcnb2.mp4' },
            { title: 'The Gamer Tarot Card', reviews: '4k', price: '804.44', image: '', video: 'https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/The_Gamer_bfj8py.mp4' },
            { title: 'Retro Console Patent', reviews: '4.2k', price: '1,494.68', image: 'https://i.etsystatic.com/12764879/c/2192/1744/0/74/il/35b193/5212011010/il_680x540.5212011010_s6c4.jpg' },
            { title: 'Rubiks Cube Mirror', reviews: '531', price: '1,494.68', image: 'https://i.etsystatic.com/19814616/c/2577/2050/252/175/il/fa8840/4881931687/il_680x540.4881931687_npj5.jpg' },
        ]
    },
    {
        subtitle: 'The Gadget Obsessed',
        title: 'Disassembled Devices',
        avatar: 'https://i.etsystatic.com/45620440/c/517/517/169/7/il/bb901c/6291932427/il_100x100.6291932427_anyq.jpg',
        products: [
            { title: 'Framed Disassembled PS2 Controller', reviews: '(4)', price: '8,000.00', image: 'https://i.etsystatic.com/43000321/r/il/02db06/7335529035/il_680x540.7335529035_s3d6.jpg' },
            { title: 'Camera Disassembly Art | Unique', reviews: '(204)', price: '6,569.57', image: '', video: 'https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/3D_Camera_Video_sriicn.mp4' },
            { title: 'Disassembled iPhone 1st Gen', reviews: '(735)', price: '10,234.23', image: '', video: 'https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/ipphone_1O15_yewktp.mp4' },
            { title: 'Disassembled Mechanical Film', reviews: '(735)', price: '4,423.96', image: '', video: 'https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/%E4%BD%B3%E8%83%BDCanon_AE-1_15%E7%A7%92_icqwfl.mp4' },
            { title: 'Vintage Camera Parts Sculpture', reviews: '(126)', price: '11,172.73', image: '', video: 'https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/202202091825_1_g5thuw.mp4' },
            { title: 'Disassembled iPhone Art', reviews: '(735)', price: '4,871.31', image: 'https://i.etsystatic.com/32502471/r/il/992497/4383177604/il_794xN.4383177604_k3m8.jpg' } // Kept placeholder as 6th link was missing
        ]
    },
    {
        subtitle: 'The Video Gamer',
        title: 'Video Game Inspired Planters',
        avatar: 'https://i.etsystatic.com/7795802/c/2073/1648/301/292/il/b2d3eb/4026937965/il_100x100.4026937965_7zsu.jpg',
        products: [
            { title: 'D20 Dice Planter Pot', reviews: '(536)', price: '607.35', image: 'https://i.etsystatic.com/20692047/r/il/0dd210/4507622651/il_680x540.4507622651_j7t2.jpg' },
            { title: 'Forma Planter', reviews: '(3)', price: '332.44', image: 'https://i.etsystatic.com/57114110/r/il/99c76d/6839607308/il_680x540.6839607308_h8od.jpg' },
            { title: 'D20 Planter | DnD Dice', reviews: '(267)', price: '1,117.27', image: '', video: 'https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/file_sy7j2m.mp4' },
            { title: 'Tetro Garden Flower Pots', reviews: '(1.6k)', price: '1,189.76', image: 'https://i.etsystatic.com/19814616/c/2577/2050/252/175/il/fa8840/4881931687/il_680x540.4881931687_npj5.jpg' },
            { title: 'Super Mario Bob-omb Planter', reviews: '(563)', price: '1,116.83', image: '', video: 'https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/Bobomb_Planter_mrx1dl.mp4' },
            { title: 'Deku Tree Planter', reviews: '(6.4k)', price: '1,161.52', image: 'https://i.etsystatic.com/24291566/r/il/ffd0dc/4257518927/il_680x540.4257518927_e0o4.jpg' }
        ]
    }
]);

const selectedInterest = ref('Video Games');
const interests = [
  'Video Games', 'Beer, Wine & Cocktails', 'Collectibles', 'Tech', 'Jewelry', 
  'Useful Gifts', 'Art', 'Music', 'Health & Fitness', 'Hosting', 'Pets', 'Family'
];

const relatedIdeas = [
  { 
    title: 'The 90s Kid', 
    color: '#F4511E', // Deep Orange
    circleColor: '#4FC3F7', // Light Blue
    image: 'https://i.etsystatic.com/ij/32d993/5592906718/ij_600x600.5592906718_qmbwc72b.jpg?version=0' 
  },
  { 
    title: 'The Tabletop Gamer', 
    color: '#00C853', // Green
    circleColor: '#FFAB91', // Peach/Orange
    image: 'https://i.etsystatic.com/ij/45f443/5598743214/ij_600x600.5598743214_4u4gvyhf.jpg?version=0' 
  },
  { 
    title: 'The Board Game Champ', 
    color: '#FBC02D', // Yellow
    circleColor: '#B3E5FC', // Light Blue
    image: 'https://i.etsystatic.com/ij/733fb9/5593651338/ij_600x600.5593651338_kky7x39r.jpg?version=0' 
  },
  { 
    title: 'The Video Gamer', 
    color: '#FF5722', // Orange
    circleColor: '#B39DDB', // Purple
    image: 'https://i.etsystatic.com/ij/d32c69/5593293964/ij_600x600.5593293964_spvct7cx.jpg?version=0' 
  },
  { 
    title: 'The Gadget Obsessed', 
    color: '#B3E5FC', // Light Blue
    circleColor: '#FFCC80', // Orange
    image: 'https://i.etsystatic.com/ij/5be35e/5598390108/ij_600x600.5598390108_v9vto9ke.jpg?version=0' 
  }
];


// Data for Extraordinary Finds
const extraordinaryCategories = [
    {
        title: 'Coworker',
        icon: Briefcase,
        items: [
            { label: 'Gadgets for the Home', image: 'https://i.etsystatic.com/37054957/r/il/ca33cf/6196393880/il_680x540.6196393880_5qhu.jpg' },
            { label: 'Cool Camping Gadgets', image: 'https://i.etsystatic.com/22835438/r/il/f9fd31/6760041485/il_680x540.6760041485_ij43.jpg' },
            { label: 'Stationery Sets', image: 'https://i.etsystatic.com/54815996/r/il/e432d9/7103922729/il_680x540.7103922729_m4wx.jpg' },
            { label: 'Desk Buddies', image: 'https://i.etsystatic.com/5985967/r/il/bf3717/7194870729/il_680x540.7194870729_spn9.jpg' },
            { label: 'Taper Candles', image: 'https://i.etsystatic.com/26241480/c/1800/1430/0/200/il/115756/4346690955/il_680x540.4346690955_5hd3.jpg' },
            { label: 'Soy Wax Candles', image: 'https://i.etsystatic.com/23167575/c/1242/987/0/313/il/5b9a7f/2808289088/il_680x540.2808289088_cx2z.jpg' },
        ]
    },
    {
        title: 'Grandparent',
        icon: User, // Using User as placeholder for Grandparent icon
        items: [
            { label: 'Birthstone Necklaces', image: 'https://i.etsystatic.com/34379934/c/1724/1724/211/251/il/3e6d42/7208783565/il_680x540.7208783565_m7t0.jpg' },
            { label: 'Crochet Bouquets', image: 'https://i.etsystatic.com/41548668/c/1044/829/0/160/il/8f90ab/5679696089/il_680x540.5679696089_ca4i.jpg' },
            { label: 'Unique Garden Decor', image: 'https://i.etsystatic.com/11669056/r/il/29179c/6039295467/il_680x540.6039295467_lhtu.jpg' },
            { label: 'Personalized Golf Balls', image: 'https://i.etsystatic.com/21062506/r/il/909bea/6835908419/il_680x540.6835908419_axos.jpg' },
            { label: 'Leather Wallets', image: 'https://i.etsystatic.com/50658588/c/2442/2442/276/0/il/71a46b/6435037017/il_680x540.6435037017_4nxs.jpg' },
             { label: 'Grandpa Mugs', image: 'https://i.etsystatic.com/34028097/c/2048/1627/0/78/il/aca2fc/5824667126/il_680x540.5824667126_ar9d.jpg' },
        ]
    }
];

// Data for Other Special People
const specialPeople = [
    { label: 'Teacher', icon: GraduationCap },
    { label: 'Sibling', icon: Users },
    { label: 'Parent', icon: User },
    { label: 'Friend', icon: Users }, 
    { label: 'Partner', icon: HeartHandshake },
    { label: 'Kids', icon: Baby },
];

// Data for Get Inspired! Popular Gift Ideas
const popularGiftIdeas = [
    { title: 'The Ren Faire Goer', color: '#2DC968', image: 'https://i.etsystatic.com/ij/6d3758/5598667074/ij_600x600.5598667074_9lehj6oi.jpg?version=0' },
    { title: 'The Pet', color: '#FF6B35', image: 'https://i.etsystatic.com/ij/1c6cf1/5646714897/ij_600x600.5646714897_feepz0ok.jpg?version=0' },
    { title: 'The Crafter', color: '#005d4b', image: 'https://i.etsystatic.com/ij/79b936/5598765486/ij_600x600.5598765486_ewm3msud.jpg?version=0' },
    { title: 'The Artist', color: '#FF6B35', image: 'https://i.etsystatic.com/ij/3de272/5641709379/ij_600x600.5641709379_fnqqggu9.jpg?version=0' },
    { title: 'The Golfer', color: '#2137D0', image: 'https://i.etsystatic.com/ij/b35eda/5598413422/ij_600x600.5598413422_jibjk2xu.jpg?version=0' },
    { title: 'The Guitarist', color: '#2137D0', image: 'https://i.etsystatic.com/ij/49fc39/5598510772/ij_600x600.5598510772_ser2mggh.jpg?version=0' },
    { title: 'The Zen Seeker', color: '#FF6B35', image: 'https://i.etsystatic.com/ij/f6e057/5593289116/ij_600x600.5593289116_ipylhe2q.jpg?version=0' },
    { title: 'The Wife', color: '#2137D0', image: 'https://i.etsystatic.com/ij/8afb95/5596198284/ij_600x600.5596198284_rk0e51p8.jpg?version=0' },
    { title: 'The Maximalist', color: '#FF6B35', image: 'https://i.etsystatic.com/ij/610a00/5641428455/ij_600x600.5641428455_r1tti896.jpg?version=0' },
    { title: 'The Astrology Expert', color: '#B2EBF2', image: 'https://i.etsystatic.com/ij/6f67d3/5593616960/ij_600x600.5593616960_qfr5d655.jpg?version=0' },
];

const discoverCategories = ['Jewelry', 'Clothing', 'Home Decor', 'Accessories', 'Pet Gifts'];

// Integrated Product Store
const productsStore = useProductsStore();
const { items: allProducts } = storeToRefs(productsStore);

onMounted(() => {
    productsStore.fetchProducts();
});



// Computed Discover Items (Database preferred, Fallback to Hardcoded)
const discoverItems = computed(() => {
    // Filter for Jewelry items from DB
    const dbItems = allProducts.value.filter(p => p.category === 'Jewelry').slice(0, 8);
    
    if (dbItems.length > 0) {
        // Map DB items to display format if needed, assuming structure matches or we map it
        return dbItems.map(p => ({
            price: `${p.price} ${p.currency || 'TL'}`,
            original: p.originalPrice ? `${p.originalPrice} ${p.currency || 'TL'}` : null,
            video: p.video || false,
            image: p.image || p.imageUrl // Support both fields
        }));
    }

    // Fallback Hardcoded
    return [
        { price: '2,860.22 TL', original: '3,575.28 TL', video: false, image: 'https://i.etsystatic.com/11430679/r/il/6b567d/3143527961/il_794xN.3143527961_1l7d.jpg' },
        { price: '1,126.21 TL', original: '1,251.35 TL', video: false, image: 'https://i.etsystatic.com/23724391/r/il/a7605d/4279933860/il_794xN.4279933860_8t3x.jpg' },
        { price: '2,368.62 TL', original: null, video: true, image: 'https://i.etsystatic.com/18266205/r/il/981880/3421293373/il_794xN.3421293373_l7x9.jpg' },
        { price: '1,430.11 TL', original: null, video: true, image: 'https://i.etsystatic.com/32502471/r/il/992497/4383177604/il_794xN.4383177604_k3m8.jpg' },
        { price: '1,519.49 TL', original: null, video: true, image: 'https://i.etsystatic.com/11239263/r/il/663673/3530374187/il_794xN.3530374187_my5n.jpg' },
        { price: '1,360.61 TL', original: null, video: true, image: 'https://i.etsystatic.com/11430679/r/il/6b567d/3143527961/il_794xN.3143527961_1l7d.jpg' },
        { price: '2,073.66 TL', original: '2,592.07 TL', video: false, image: 'https://i.etsystatic.com/23724391/r/il/a7605d/4279933860/il_794xN.4279933860_8t3x.jpg' },
        { price: '18,461.83 TL', original: '20,513.14 TL', video: true, image: 'https://i.etsystatic.com/18266205/r/il/981880/3421293373/il_794xN.3421293373_l7x9.jpg' },
    ];
});

const innerGifterOccasions = [
    { title: 'Bridesmaids', bgColor: '#d1e6ff', image: 'https://i.etsystatic.com/ij/68e3f2/5593525634/ij_600x600.5593525634_kv7oqv3f.jpg?version=0' },
    { title: 'Newlywed', bgColor: '#05492d', image: 'https://i.etsystatic.com/ij/eb8d43/5593304680/ij_600x600.5593304680_4efo13nw.jpg?version=0' },
    { title: 'Friend on-the-mend', bgColor: '#d1e6ff', image: 'https://i.etsystatic.com/ij/76c899/5646474589/ij_600x600.5646474589_s2f08ex0.jpg?version=0' },
    { title: 'New Parent', bgColor: '#05492d', image: 'https://i.etsystatic.com/ij/14cd2d/5646689747/ij_600x600.5646689747_37qe5dkc.jpg?version=0' },
    { title: 'Retiree', bgColor: '#8c8dfe', image: 'https://i.etsystatic.com/ij/ac8c6d/5646763433/ij_600x600.5646763433_d3nmhfov.jpg?version=0' },
];

const whoIsItFor = [
    { title: 'Bride', bgColor: '#8c8dfe', image: 'https://i.etsystatic.com/ij/f201df/5646827143/ij_600x600.5646827143_h88ltajp.jpg?version=0' },
    { title: 'Girlfriend', bgColor: '#fcb603', image: 'https://i.etsystatic.com/ij/6541fc/5598356642/ij_600x600.5598356642_wos9xm5z.jpg?version=0' },
    { title: 'BFF', bgColor: '#2137D0', image: 'https://i.etsystatic.com/ij/3e06ae/5593657684/ij_600x600.5593657684_9e8el03g.jpg?version=0' },
    { title: 'Grandson', bgColor: '#fcb603', image: 'https://i.etsystatic.com/ij/2357f2/5598527568/ij_600x600.5598527568_62q5qjn4.jpg?version=0' },
    { title: 'Boyfriend', bgColor: '#FF6B35', image: 'https://i.etsystatic.com/ij/28f0d5/5641631159/ij_600x600.5641631159_rgochv54.jpg?version=0' },
];

const musicGifts = [
    { title: 'Guitarist', bgColor: '#2137D0', image: 'https://i.etsystatic.com/ij/d12820/5598683544/ij_600x600.5598683544_68zmeq3x.jpg?version=0' },
    { title: 'K-pop Stan', bgColor: '#2DC968', image: 'https://i.etsystatic.com/ij/6f67d3/5593616960/ij_600x600.5593616960_qfr5d655.jpg?version=0' },
    { title: 'Singer', bgColor: '#fcb603', image: 'https://i.etsystatic.com/ij/c47853/5598562812/ij_600x600.5598562812_iyqtk30u.jpg?version=0' },
    { title: 'Pop Fan', bgColor: '#2DC968', image: 'https://i.etsystatic.com/ij/bc83c2/5646651887/ij_600x600.5646651887_d631j6yk.jpg?version=0' },
    { title: 'Music Lover', bgColor: '#2137D0', image: 'https://i.etsystatic.com/ij/295929/5646298869/ij_600x600.5646298869_4am5tlq4.jpg?version=0' },
];

const scrollNav = (direction: 'left' | 'right') => {
    if (!navContainer.value) return;
    const scrollAmount = 200;
    if (direction === 'left') {
        navContainer.value.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        navContainer.value.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
};
</script>

<style scoped>
.gift-mode-page {
    font-family: 'Inter', sans-serif;
    color: #222;
    padding: 0 0 60px;
    background-color: #fff;
}

/* Header */
.gift-header {
    text-align: center; /* CRITICAL: Center all content */
    padding: 40px 20px 20px;
    max-width: 800px;
    margin: 0 auto;
}
.main-title {
    font-family: 'Gelasio', serif;
    font-size: 3rem; /* Increased size to match screenshot */
    font-weight: 300;
    margin-bottom: 16px;
    color: #222;
    letter-spacing: -0.02em;
    line-height: 1.2;
}

.sub-title {
    font-family: 'Inter', sans-serif;
    font-size: 1.25rem; /* Larger */
    font-weight: 600; /* Bolder */
    color: #222; /* Darker */
}

/* Nav */
.occasions-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    max-width: 1200px;
    margin: 0 auto 40px;
    padding: 0 40px; /* Space for arrows */
}

.nav-scroll-container {
    display: flex;
    gap: 32px;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding: 10px;
    /* Hide scrollbar */
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.nav-scroll-container::-webkit-scrollbar {
    display: none;
}

.nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    min-width: 80px;
    opacity: 0.7; /* Inactive opacity */
    transition: opacity 0.2s;
    padding-bottom: 8px; /* Space for underline */
    border-bottom: 2px solid transparent; /* Init underline */
}
.nav-item:hover {
    opacity: 1;
}
.nav-item.active {
    opacity: 1;
    border-bottom: 2px solid #222; /* Active underline */
}

.icon-circle {
    width: 64px; /* Larger circle */
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid transparent; 
    transition: background 0.2s;
}
.nav-item.active .icon-circle {
    background-color: #ededed; 
}

.nav-icon {
    /* Lucide icons inherit size from strict props usually, 
       but we can try scaling or using a wrapper if needed.
       However, :size prop in template controls this mostly.
    */
}

.nav-text {
    text-align: center;
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    line-height: 1.3;
    color: #222;
}
.nav-label { font-weight: 600; }
.nav-date { font-weight: 400; color: #595959; font-size: 0.8rem; }

/* Arrows */
.nav-arrow {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #ddd;
    background: white;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    z-index: 2;
}
.nav-arrow.prev { left: 0; }
.nav-arrow.next { right: 0; }

/* Seasonal Grid Section */
.seasonal-grid-section {
    max-width: 1400px;
    margin: 0 auto 60px;
    padding: 0 24px;
}
.seasonal-grid {
    column-count: 4;
    column-gap: 24px;
    margin-bottom: 40px;
    display: block; /* Ensure block for columns */
}
.seasonal-card {
    width: 100%;
    margin-bottom: 24px;
    break-inside: avoid; /* Prevent card splitting */
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: box-shadow 0.2s;
    text-decoration: none;
    color: inherit;
    display: inline-block; /* Helps with break-inside in some browsers */
}
.seasonal-card:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.seasonal-image {
    width: 100%;
    background: #f5f5f5;
    /* Default aspect ratio handled by size classes below */
}
.seasonal-card.small .seasonal-image {
    aspect-ratio: 16/10;
}
.seasonal-card.large .seasonal-image {
    aspect-ratio: 4/5;
}
.seasonal-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.seasonal-label {
    padding: 20px;
    text-align: center;
    font-weight: 500;
    font-size: 1rem;
    color: #222;
}
.more-ideas-container {
    text-align: center;
}

.more-ideas-btn {
    display: inline-block;
    padding: 12px 28px;
    border: 1px solid #222; /* Thinner border */
    border-radius: 32px;
    color: #222;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.2s;
}
.more-ideas-btn:hover {
    background: #f1f1f1;
    color: #222;
}

/* Interest Section */
.interest-section {
    text-align: center;
    padding: 30px 20px;
    background: #fff;
    margin-bottom: 40px;
}
.section-title {
    font-family: 'Guardian-EgypTT', serif;
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 24px;
    color: #222;
}
.interest-pills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    max-width: 900px; /* Constrain width */
    margin: 0 auto;
}
.interest-pill {
    padding: 10px 20px;
    border-radius: 24px;
    background: #f1f1f1; /* Lighter grey */
    border: 2px solid transparent; /* Reserve space for border */
    font-size: 0.95rem;
    font-weight: 500;
    color: #222;
    cursor: pointer;
    transition: all 0.2s;
}
.interest-pill:hover {
    background: #e0e0e0;
}
.interest-pill.active {
    background: #fff;
    color: #222;
    border-color: #222; /* Black border */
}
.interest-pill.more {
    font-weight: 600;
    background: #e3e3e3;
    padding-left: 24px;
    padding-right: 24px;
}

/* Persona Product Section */
.persona-product-section {
    max-width: 1400px;
    margin: 0 auto 60px;
    padding: 0 24px;
}
.persona-header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
}
.persona-info {
    display: flex;
    align-items: center;
    gap: 16px;
}
.persona-avatar-box {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    overflow: hidden;
    background: #eee;
}
.persona-avatar-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.persona-subtitle-small {
    display: block;
    font-size: 0.85rem;
    color: #666;
    margin-bottom: 2px;
}
.persona-title-large {
    font-size: 1.5rem;
    font-weight: 500;
    color: #222;
    margin: 0;
}
.persona-carousel {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    padding-bottom: 20px;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE/Edge */
}
.persona-carousel::-webkit-scrollbar {
    display: none; /* Chrome/Safari */
}
.browse-all-link {
    color: #222;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    transition: opacity 0.2s;
}
.browse-all-link:hover {
    opacity: 0.7;
    color: #222;
}
.persona-product-card {
    min-width: 220px;
    width: 220px;
    flex: 0 0 auto;
    cursor: pointer;
}
.persona-image-rect {
    position: relative;
    width: 100%;
    aspect-ratio: 4/3;
    border-radius: 8px;
    background: #f5f5f5;
    overflow: hidden;
    margin-bottom: 0px; /* CardInfo handles spacing? No, simple card here */
}
.persona-image-rect img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s;
}
.persona-product-card:hover .persona-image-rect img {
    transform: scale(1.05);
}
.product-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}
.fav-icon-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 28px;
    height: 28px;
    background: #fff;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.2s;
    z-index: 2;
}
.persona-product-card:hover .fav-icon-btn {
    opacity: 1;
}
.persona-card-details {
    padding: 8px 0;
}
.pp-title {
    font-size: 0.95rem;
    font-weight: 400;
    color: #222;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 4px;
}
.pp-rating {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 0.85rem;
    margin-bottom: 4px;
}
.stars {
    color: #000; /* Black stars as per screenshot? Or standard gold? Screenshot shows BLACK stars */
    letter-spacing: -1px;
}
.review-count {
    color: #555;
}
.pp-price {
    font-weight: 700;
    font-size: 1rem;
    color: #222;
}

/* Related Ideas Section Styles */
.related-ideas-section {
    max-width: 1400px;
    margin: 60px auto;
    padding: 0 24px;
}
.more-ideas-top-container {
    text-align: center;
    margin-bottom: 24px;
}
.more-ideas-pill-btn {
    padding: 10px 24px;
    border: 1px solid #ccc;
    border-radius: 24px;
    background: #fff;
    cursor: pointer;
    font-weight: 500;
    transition: 0.2s;
    font-size: 0.95rem;
}
.more-ideas-pill-btn:hover {
    background: #f5f5f5;
}
.related-ideas-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
    margin-bottom: 40px;
}
.related-idea-card {
    position: relative;
    border-radius: 12px;
    overflow: hidden; /* Clips the circle */
    aspect-ratio: 0.8; 
    display: flex;
    flex-direction: column;
    padding: 16px;
    cursor: pointer;
    transition: transform 0.2s;
}
.related-idea-card:hover {
    transform: translateY(-4px);
}
.related-idea-content {
    z-index: 2;
}
.related-idea-prefix {
    display: block;
    font-size: 0.85rem;
    font-weight: 400;
    color: #000;
    margin-bottom: 2px;
}
.related-idea-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #000;
    margin: 0;
    line-height: 1.2;
}
.related-idea-image-container {
    flex: 1;
    position: relative;
    display: flex;
    align-items: center; /* Center vertically */
    justify-content: center;
    margin-top: 10px;
    padding-bottom: 20px;
}
.related-idea-circle {
    display: none; /* Hide the hill since we are doing circle crop */
}
.related-idea-image-container img {
    position: relative;
    z-index: 2;
    width: 140px; /* Fixed size circle */
    height: 140px;
    border-radius: 50%; /* Circle crop */
    border: 4px solid rgba(255,255,255,0.3); /* Subtle border ring using the circle logic visually */
    object-fit: cover; 
    margin-bottom: 0; 
    background: #fff; /* Ensure bg is white */
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.browse-all-container {
    display: flex;
    justify-content: center;
}
.browse-all-btn {
    background: #eee;
    color: #222;
    border: none;
    padding: 12px 32px;
    border-radius: 24px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
}
.browse-all-btn:hover {
    background: #ddd;
}

/* Related Ideas Section */
.related-ideas-section {
    max-width: 1400px;
    margin: 0 auto 60px;
    padding: 0 24px;
}
.section-title-left {
    font-family: 'Graphik Webfont', sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 24px;
    color: #222;
}
.related-ideas-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    margin-bottom: 30px;
}
/* Extraordinary Finds Section (Updated) */
.extraordinary-finds-section {
    max-width: 1400px;
    margin: 0 auto 60px;
    padding: 0 24px;
}
.finds-row {
    margin-bottom: 40px;
}
.row-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
.header-left {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1.2rem;
    font-weight: 500;
    color: #222;
}
.header-icon-box {
    width: 40px;
    height: 40px;
    background: #d6eaff; /* Light blueish bg */
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.shop-all-link {
    font-size: 0.9rem;
    color: #222;
    text-decoration: none;
    font-weight: 500;
}
.find-card-simple {
    width: 200px;
    flex: 0 0 auto; /* Prevent growing/shrinking */
    cursor: pointer;
    text-align: center;
}
.find-image-rect {
    width: 100%;
    aspect-ratio: 4/3;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 8px;
    background: #f5f5f5;
}
.find-image-rect img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s;
}
.find-card-simple:hover .find-image-rect img {
    transform: scale(1.05);
}
.find-label-simple {
    font-weight: 500;
    font-size: 0.95rem;
    color: #222;
}

/* Special People Section */
.special-people-section {
    margin-bottom: 80px;
    text-align: center;
}
.section-title-center {
    font-size: 1.1rem;
    font-weight: 500;
    color: #555;
    margin-bottom: 24px;
}
.people-pills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    max-width: 1000px;
    margin: 0 auto;
}
.person-pill {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 12px;
    cursor: pointer;
    transition: box-shadow 0.2s;
    background: #fff;
    font-weight: 500;
    color: #222;
}
.person-pill:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

/* Popular Inspired Section - High Fidelity */
.popular-inspired-section {
    max-width: 1400px;
    margin: 0 auto 80px;
    padding: 0 24px;
}
.section-header-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 24px;
}
.section-title-left {
    font-family: 'Gelasio', serif;
    font-size: 1.75rem;
    font-weight: 400;
}
.inspired-grid {
    display: flex;
    gap: 24px;
    overflow-x: auto;
    padding-bottom: 15px;
}
.inspired-card {
    width: 240px;
    flex: 0 0 auto;
    height: 380px;
    border-radius: 24px; /* More rounded */
    position: relative;
    overflow: hidden;
    color: #222;
    cursor: pointer;
    transition: transform 0.3s;
}
.inspired-card:hover {
    transform: translateY(-4px);
}
.inspired-content {
    padding: 24px;
    position: relative;
    z-index: 2;
}
.inspired-subtitle {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.95rem;
    margin-bottom: 4px;
    font-weight: 500;
}
.inspired-title {
    font-family: 'Gelasio', serif;
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 1.1;
    margin: 0;
}
.inspired-image-container {
    position: absolute;
    bottom: -40px; /* Push down to create arch look */
    left: 50%;
    transform: translateX(-50%);
    width: 240px; /* Wider to fill width roughly */
    height: 240px;
    border-radius: 50%;
    overflow: hidden;
    background: #fff;
    border: none; /* Removed border */
    box-shadow: 0 -4px 20px rgba(0,0,0,0.05); /* Subtle shadow top */
}
.inspired-image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-top: 20px; /* Offset image inside circle */
}

/* Gift Teaser Banner */
.gift-teaser-banner {
    max-width: 1000px;
    margin: 0 auto 80px;
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    display: flex;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.teaser-content {
    flex: 1;
    padding: 40px;
}
.new-badge {
    background: #d6eaff;
    color: #222;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 4px 8px;
    border-radius: 12px;
    display: inline-block;
    margin-bottom: 16px;
    text-transform: uppercase;
}
.teaser-content h2 {
    font-family: 'Guardian-EgypTT', serif;
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 24px;
    line-height: 1.2;
}
.teaser-features {
    list-style: none;
    padding: 0;
    margin: 0;
}
.teaser-features li {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
    font-size: 0.95rem;
    color: #222;
}

.teaser-visual {
    flex: 1;
    background: #8c8dfe; /* Purple bg */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    position: relative;
}
.teaser-card-mockup {
    background: #f4c44d; /* Yellow card bg */
    padding: 24px;
    border-radius: 8px;
    text-align: center;
    width: 220px;
    margin-bottom: 24px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.teaser-card-mockup img {
    width: 100%;
    border-radius: 4px;
    margin-bottom: 12px;
}
.teaser-overlay-text {
    font-size: 0.85rem;
    font-weight: 600;
}
.teaser-actions {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 100%;
    max-width: 280px;
}
.teaser-actions label {
    display: block;
    margin-bottom: 16px;
    font-size: 0.9rem;
    cursor: pointer;
}
.proceed-btn {
    width: 100%;
    background: #222;
    color: white;
    border: none;
    padding: 12px;
    border-radius: 24px;
    font-weight: 600;
    cursor: pointer;
}

/* Gift Cards Banner */
.gift-cards-banner {
    max-width: 1400px;
    margin: 0 auto 80px;
    background: #fdfdfd; 
    border: 1px solid #ddd;
    border-radius: 12px;
    display: flex;
    overflow: hidden;
    align-items: stretch; /* Stretch to fill height */
    min-height: 200px;
}
.gift-cards-visual {
    flex: 0 0 40%; /* Left side image */
    position: relative;
    background: #fdfae8;
}
.cards-bg-image {
    width: 100%;
    height: 100%;
    background-image: url('https://i.etsystatic.com/17857814/r/il/156976/3133649525/il_fullxfull.3133649525_c43b.jpg'); /* Colorful abstract */
    background-size: cover;
    background-position: center;
}
.gift-cards-content {
    flex: 1;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.gift-cards-content h2 {
    font-family: 'Gelasio', serif;
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 8px;
}
.gift-cards-content p {
    color: #595959;
    margin-bottom: 24px;
}
.pick-design-link {
    font-weight: 600;
    color: #222;
    text-decoration: none;
    align-self: flex-start;
}
.pick-design-link:hover {
    text-decoration: underline;
}

/* SEO Section */
.seo-text-section {
    max-width: 1000px;
    margin: 0 auto 80px;
    padding: 0 24px;
}
.seo-row {
    display: flex;
    gap: 24px;
    align-items: flex-start;
}
.seo-avatar-container {
    flex: 0 0 80px;
}
.seo-circle-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
}
.seo-content-text p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #222;
    margin-bottom: 16px;
}
.seo-footer-btn {
    text-align: center;
    margin-top: 20px;
}
.less-btn {
    background: #eee;
    border: none;
    padding: 8px 24px;
    border-radius: 24px;
    font-weight: 600;
    cursor: pointer;
}


/* SEO Text Section */
.seo-text-section {
    max-width: 1000px;
    margin: 0 auto 60px;
    display: flex;
    gap: 24px;
    align-items: flex-start;
}
.seo-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    background: #eee;
    flex-shrink: 0;
}
.seo-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.seo-content {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #222;
}
.seo-content p {
    margin-bottom: 16px;
}
.less-btn {
    background: none;
    border: none;
    padding: 0;
    font-weight: 600;
    text-decoration: underline;
    cursor: pointer;
}

/* Popular Gifts Section */
.popular-gifts-section {
    max-width: 1400px;
    margin: 0 auto 80px;
    padding: 0 24px;
}
.popular-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-bottom: 30px;
}
.product-card {
    display: flex;
    flex-direction: column;
    gap: 12px;
    cursor: pointer;
    width: 220px; /* Fixed width */
    flex: 0 0 auto;
}
.prod-image {
    position: relative;
    aspect-ratio: 4/3;
    border-radius: 8px;
    overflow: hidden;
    background: #f5f5f5;
}
.prod-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}
.product-card:hover .prod-image img {
    transform: scale(1.05);
}
.heart-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    background: white;
    border: none;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.2s;
}
.product-card:hover .heart-btn {
    opacity: 1;
}
.prod-title {
    font-size: 0.95rem;
    font-weight: 400;
    color: #222;
    margin: 0;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.prod-rating {
    font-size: 0.9rem;
    color: #222;
    display: flex;
    align-items: center;
    gap: 4px;
}
.review-count {
    color: #595959;
    font-weight: 300;
}
.prod-price {
    font-weight: 600;
    font-size: 1rem;
    color: #222;
}

.idea-card {
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    aspect-ratio: 3/4;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: transform 0.2s;
}
.idea-card:hover {
    transform: translateY(-4px);
}
.idea-content {
    padding: 20px;
    z-index: 2;
}
.idea-content h3 {
    font-family: 'Guardian-EgypTT', serif;
    font-size: 1.6rem;
    line-height: 1.1;
    font-weight: 300;
    color: #222;
    margin: 0;
    max-width: 80%;
}
.idea-image {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 80%;
    height: 60%;
    border-top-left-radius: 100%; /* Curved effect like in screenshot */
    overflow: hidden;
}
.idea-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.browse-all-container {
    text-align: center;
    padding-top: 10px;
}
.browse-all-btn {
    background: #eee;
    color: #222;
    border: none;
    padding: 12px 24px;
    border-radius: 24px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
}
.browse-all-btn:hover {
    background: #ddd;
}

/* 
  Fix for implicit wrapping: 
  Force items to stay in one line and use overflow for scrolling 
*/
.occasion-carousel {
    display: flex;
    gap: 24px;
    overflow-x: auto;
    padding-bottom: 20px;
    flex-wrap: nowrap !important; 
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none; 
    -ms-overflow-style: none; 
}
.occasion-carousel::-webkit-scrollbar {
    display: none;
}

.occasion-card {
    width: 260px;
    min-width: 260px; /* CRITICAL: Ensure fixed width */
    height: 380px;
    flex: 0 0 auto;   /* CRITICAL: Prevent shrinking */
    border-radius: 12px;
    padding: 24px;
    position: relative;
    overflow: hidden;
    color: #222;
    cursor: pointer;
    text-decoration: none;
    transition: transform 0.2s;
}
.occasion-card:hover {
    transform: translateY(-4px);
}
.occ-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.occ-prefix {
    display: block;
    font-size: 13px;
    font-weight: 400;
    margin-bottom: 2px;
    color: #222;
    line-height: 1.4;
}
.occ-title {
    font-size: 26px; /* Larger matches screenshot */
    font-family: 'Guardian-EgypTT', serif; /* Consistent brand font */
    font-weight: 300; /* Lighter weight for serif */
    margin: 0;
    line-height: 1.1;
    color: #222;
}
.occ-image-arch {
    position: absolute;
    bottom: 0;
    left: 20px; /* Matching screenshot margins */
    right: 20px;
    height: 65%;
    border-top-left-radius: 50% 100px;
    border-top-right-radius: 50% 100px;
    overflow: hidden;
    background: rgba(255,255,255,0.1);
}
.occ-image-arch img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.music-grid {
    display: flex;
    gap: 24px;
    overflow-x: auto;
    padding-bottom: 20px;
    flex-wrap: nowrap;
    scrollbar-width: none; 
    -ms-overflow-style: none; 
}
.music-grid::-webkit-scrollbar {
    display: none;
}

/* 
  Fix for implicit wrapping: 
  Force items to stay in one line and use overflow for scrolling 
*/
.finds-carousel {
    display: flex;
    gap: 24px;
    overflow-x: auto;
    padding-bottom: 20px;
    flex-wrap: nowrap !important; 
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE/Edge */
}
.finds-carousel::-webkit-scrollbar {
    display: none; /* Chrome/Safari */
}

/* Extraordinary Finds Styles */
.finds-row {
    margin-bottom: 40px;
}
.row-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    padding: 0 8px;
}
.header-left {
    display: flex;
    align-items: center;
    gap: 12px;
}
.header-icon-box {
    width: 40px;
    height: 40px;
    background: #eefbfb; /* Light blue bg for icon */
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #222;
}
.header-left span {
    font-size: 1.1rem;
    font-weight: 600;
}
.shop-all-link {
    font-size: 0.95rem;
    font-weight: 600;
    color: #222;
    text-decoration: none;
}
.shop-all-link:hover {
    text-decoration: underline;
}

.find-card-simple {
    width: 200px;
    flex: 0 0 auto;
    border: 1px solid #e1e3df; /* Light grey border */
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    background: #fff;
    display: flex;
    flex-direction: column;
}
.find-card-simple:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}
.find-image-rect {
    width: 100%;
    aspect-ratio: 1; /* Square image */
    background: #f5f5f5;
}
.find-image-rect img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.find-label-simple {
    padding: 12px;
    text-align: center;
    font-size: 0.95rem;
    font-weight: 500;
    color: #222;
    background: #fff; /* Ensure white bg */
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Special People Section */
.special-people-section {
    max-width: 1000px;
    margin: 0 auto 80px;
    padding: 0 24px;
}
.section-title-center {
    font-family: 'Gelasio', serif;
    font-size: 2rem;
    font-weight: 300;
    text-align: center;
    margin-bottom: 32px;
    color: #222;
}
.people-pills-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
}
.person-pill {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 16px 8px 8px; /* Less padding on left for icon circle */
    border: 1px solid #e1e3df;
    border-radius: 40px;
    background: #fff;
    cursor: pointer;
    font-weight: 500;
    color: #222;
    transition: 0.2s;
    min-width: 160px;
}
.person-pill:hover {
    background: #f5f5f5;
    border-color: #222;
}
.person-pill svg {
    padding: 8px;
    background: #d4e9ff; /* Light blue circle for icon */
    border-radius: 50%;
    box-sizing: content-box;
    width: 24px;
    height: 24px;
}
/* Special People Section */
.special-people-section {
    max-width: 1000px;
    margin: 0 auto 80px;
    padding: 0 24px;
}
.section-title-center {
    font-family: 'Gelasio', serif;
    font-size: 2rem;
    font-weight: 300;
    text-align: center;
    margin-bottom: 32px;
    color: #222;
}
.people-pills-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
}
.person-pill {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 16px 8px 8px; /* Less padding on left for icon circle */
    border: 1px solid #e1e3df;
    border-radius: 40px;
    background: #fff;
    cursor: pointer;
    font-weight: 500;
    color: #222;
    transition: 0.2s;
    min-width: 160px;
}
.person-pill:hover {
    background: #f5f5f5;
    border-color: #222;
}
.person-pill svg {
    padding: 8px;
    background: #d4e9ff; /* Light blue circle for icon */
    border-radius: 50%;
    box-sizing: content-box;
    width: 24px;
    height: 24px;
}
</style>

<style scoped>
/* Popular Inspired Section */
.popular-inspired-section {
    max-width: 1400px;
    margin: 0 auto 80px;
    padding: 0 24px;
}
.section-header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
}
.section-title-left {
    font-family: 'Gelasio', serif;
    font-size: 2rem;
    font-weight: 300;
    color: #222;
    margin: 0;
}
.browse-all-link {
    font-size: 0.95rem;
    font-weight: 600;
    color: #222;
    text-decoration: none;
}
.browse-all-link:hover {
    text-decoration: underline;
}

.inspired-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
}
.inspired-card {
    position: relative;
    border-radius: 12px;
    aspect-ratio: 3/4;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s;
    display: flex;
    flex-direction: column;
}
.inspired-card:hover {
    transform: translateY(-4px);
}
.inspired-content {
    padding: 16px;
    z-index: 2;
    color: #222;
}
.inspired-subtitle {
    font-size: 0.85rem;
    font-weight: 400;
    display: block;
    margin-bottom: 4px;
}
.inspired-title {
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1.2;
    margin: 0;
}
.inspired-image-container {
    position: absolute;
    bottom: -10%; /* Reduced push down */
    left: 5%; /* Centered with larger width */
    right: 5%;
    width: 90%; /* Increased size */
    aspect-ratio: 1;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    background: transparent; 
    overflow: hidden;
    display: flex;
    align-items: flex-start;
}
/* For the "cutout" look we use the image directly cropped as circle on top of colored card */
.inspired-image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    /* border: 4px solid rgba(255,255,255,0.2); Optional ring */
    transform: translateY(0);
    transform: translateY(0);
}

/* Discover Popular Styles */
.discover-popular-section {
    max-width: 1400px;
    margin: 0 auto 80px;
    padding: 0 24px;
}
.discover-pills {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 32px;
}
.discover-pill {
    background: #f1f2f0;
    border: 1px solid transparent;
    padding: 10px 20px;
    border-radius: 24px;
    font-weight: 500;
    cursor: pointer;
    font-size: 0.95rem;
    color: #222;
}
.discover-pill.active {
    background: #fff;
    border-color: #222;
}
.discover-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
}
.discover-card {
    position: relative;
    cursor: pointer;
}
.discover-image {
    position: relative;
    border-radius: 8px; /* Slightly rounded */
    overflow: hidden;
    margin-bottom: 8px;
    aspect-ratio: 1; /* Default square, some can be taller if we used masonry but grid is safer */
}
.discover-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}
.discover-card:hover .discover-image img {
    transform: scale(1.05);
}
.heart-icon-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: white;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.2s;
}
.discover-card:hover .heart-icon-btn {
    opacity: 1;
}
.play-icon-btn {
    position: absolute;
    bottom: 8px;
    right: 8px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: white;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.discover-price-tag {
    position: absolute;
    bottom: 12px;
    left: 12px;
    background: white;
    padding: 4px 12px;
    border-radius: 16px;
    font-size: 0.85rem;
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    display: flex;
    gap: 6px;
    align-items: center;
    justify-content: center;
}

/* Navigation Arrow Fixes */
.occasion-carousel-wrapper {
    position: relative;
    margin-bottom: 40px;
}

/* Container for title and arrows */
.occasion-carousel-wrapper .section-header-row, 
.occasion-carousel-wrapper > div:first-child, /* Fallback if no specific class on headers row */
.nav-arrows-top-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
}

/* Ensure title is aligned left and big enough */
.subsection-title {
    font-size: 1.7rem;
    font-family: 'Guardian-EgypTT', serif;
    font-weight: 300;
    color: #222;
    margin: 0;
}

/* Circle Arrow Styles - Replacing default grey buttons */
.circle-arrow {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid #222; /* Or #e1e3df for lighter border */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1); 
    margin-left: 12px;
}

.circle-arrow:hover {
    background: #f5f5f5;
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(0,0,0,0.15);
}

.nav-arrows-top-right {
    display: flex;
    gap: 12px;
}

.original-price {
    text-decoration: line-through;
    color: #595959;
    font-weight: 400;
    font-size: 0.8rem;
}

/* Gift Teaser Banner Styles */
.gift-teaser-banner {
    display: flex;
    max-width: 1400px;
    margin: 80px auto;
    background: #fff;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    border: 1px solid #e1e3df;
    align-items: stretch; /* Ensure both sides equal height */
}
.teaser-content {
    flex: 1;
    padding: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.new-badge {
    background: #d1e6ff; /* Light blue pill */
    color: #222;
    padding: 6px 12px;
    border-radius: 16px;
    font-size: 0.85rem;
    font-weight: 600;
    align-self: flex-start;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 6px;
}
.new-badge::before {
    content: '✦'; /* Star/Sparkle icon substitute */
    color: #e6b800; /* Gold */
}
.new-badge::after {
    content: '✦';
    color: #e6b800;
}
.teaser-heading {
    font-family: 'Guardian-EgypTT', serif;
    font-size: 2.2rem;
    font-weight: 300;
    margin-bottom: 32px;
    line-height: 1.2;
    max-width: 500px;
}
.teaser-features {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.teaser-features li {
    display: flex;
    align-items: flex-start; /* Align icon with top of text */
    gap: 12px;
    font-size: 1rem;
    line-height: 1.5;
    color: #222;
}
.teaser-features li svg {
    flex-shrink: 0;
    margin-top: 3px;
}

/* Visual Side with Video */
.teaser-visual {
    flex: 1;
    position: relative;
    background-color: #9299fd; /* Fallback purple */
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    min-height: 500px;
}
.teaser-video-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
}
/* Mockup Card */
.teaser-card-mockup {
    position: relative;
    z-index: 2; /* Above video */
    background: #fff;
    width: 320px;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.15);
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 20px;
}
.user-avatar-bubble {
    position: absolute;
    top: -24px;
    left: -24px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 4px solid #9299fd; /* Matches bg */
    overflow: hidden;
    z-index: 3;
}
.user-avatar-bubble img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.mockup-img-container {
    width: 100%;
    aspect-ratio: 1;
    background: #f4d03f; /* Yellow bg from screenshot */
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}
.mockup-img-container img {
    width: 80%;
    height: auto;
    object-fit: contain;
    transform: rotate(-5deg); /* Slight tilt like screenshot */
    filter: drop-shadow(0 10px 10px rgba(0,0,0,0.1));
}
.teaser-overlay-text {
    font-weight: 600;
    font-size: 0.95rem;
    text-align: center;
    margin-bottom: 8px;
}
.mockup-footer {
    border-top: 1px solid #eee;
    padding-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.mockup-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
    color: #595959;
}
.mockup-checkbox {
    width: 20px;
    height: 20px;
    border: 1px solid #222;
    border-radius: 4px;
}
.proceed-btn-small {
    background: #222;
    color: #fff;
    border: none;
    padding: 12px;
    border-radius: 24px;
    font-weight: 600;
    cursor: pointer;
    width: 100%;
}
.play-btn-corner {
    position: absolute;
    bottom: 24px;
    right: 24px;
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 2;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    color: #222;
}

/* Gift Cards Banner Styles */
.gift-cards-banner {
    display: flex;
    max-width: 1400px;
    margin: 0 auto 80px;
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    border: 1px solid #e1e3df;
    align-items: stretch;
    min-height: 200px;
}
.gift-cards-visual {
    flex: 1.2;
    background-color: #dbeaff; /* Placeholder blueish bg */
    position: relative;
    overflow: hidden;
}
.cards-bg-image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: url('https://i.etsystatic.com/site-assets/gift-recipient-access/Banner+Images/giftcard_banner_desktop_1x.png'); /* Placeholder or guess */
}
.gift-cards-visual img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.gift-cards-content {
    flex: 1;
    padding: 40px 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.gift-cards-content h2 {
    font-family: 'Guardian-EgypTT', serif;
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 12px;
    color: #222;
}
.gift-cards-content p {
    font-size: 1rem;
    color: #222;
    margin-bottom: 24px;
    line-height: 1.5;
}
.pick-design-link {
    font-weight: 700;
    color: #222;
    text-decoration: none;
    font-size: 0.95rem;
    display: inline-flex;
    align-items: center;
    gap: 4px;
}
.pick-design-link:hover {
    text-decoration: underline;
}
</style>
