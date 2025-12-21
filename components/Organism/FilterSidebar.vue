<template>
  <div class="filter-sidebar">
    <!-- Special Offers -->
    <div class="filter-group">
      <h3>Special offers</h3>
      <label class="checkbox-label">
        <input type="checkbox" />
        <span>On sale</span>
      </label>
      <label class="checkbox-label">
        <input type="checkbox" />
        <span>FREE shipping</span>
      </label>
    </div>

    <!-- Shipping -->
    <div class="filter-group">
      <h3>Shipping</h3>
      <label class="radio-label">
        <input type="radio" name="shipping" checked />
        <span>Anywhere</span>
      </label>
      <label class="radio-label">
        <input type="radio" name="shipping" />
        <span>Turkey</span>
      </label>
      <label class="radio-label">
        <input type="radio" name="shipping" />
        <span>Custom</span>
      </label>
    </div>

    <!-- Price -->
    <div class="filter-group">
      <h3>Price ($)</h3>
      <label class="radio-label">
        <input type="radio" name="price" checked />
        <span>Any price</span>
      </label>
      <label class="radio-label">
        <input type="radio" name="price" />
        <span>Under $25</span>
      </label>
      <label class="radio-label">
        <input type="radio" name="price" />
        <span>$25 to $50</span>
      </label>
      <label class="radio-label">
        <input type="radio" name="price" />
        <span>$50 to $100</span>
      </label>
      <label class="radio-label">
        <input type="radio" name="price" />
        <span>Over $100</span>
      </label>
      
      <div class="custom-price">
         <div class="price-input">
             <input type="text" placeholder="Low" />
         </div>
         <span class="to">to</span>
         <div class="price-input">
             <input type="text" placeholder="High" />
         </div>
         <button class="arrow-btn">→</button>
      </div>
    </div>

    <!-- Color -->
    <div class="filter-group">
      <h3>Color</h3>
      <div class="color-options">
         <button class="color-circle" style="background: black" title="Black"></button>
         <button class="color-circle" style="background: white; border: 1px solid #ddd" title="White"></button>
         <button class="color-circle" style="background: beige" title="Beige"></button>
         <button class="color-circle" style="background: gray" title="Gray"></button>
         <button class="color-circle" style="background: blue" title="Blue"></button>
         <button class="color-circle" style="background: red" title="Red"></button>
         <button class="color-circle" style="background: green" title="Green"></button>
      </div>
    </div>
    
    <!-- Category -->
    <div class="filter-group">
       <h3>Category</h3>
       <ul class="category-list">
          <li><a href="#">Accessories</a></li>
          <li><a href="#">Art & Collectibles</a></li>
          <li><a href="#">Baby</a></li>
          <li><a href="#">Bags & Purses</a></li>
          <li><a href="#">Bath & Beauty</a></li>
          <li><a href="#">Books, Movies & Music</a></li>
          <li><a href="#">Clothing</a></li>
       </ul>
       <a href="#" class="show-more">Show all 15</a>
    </div>

    <!-- Item Type -->
    <div class="filter-group">
      <h3>Item type</h3>
      <label class="radio-label">
        <input type="radio" name="itemtype" checked />
        <span>All items</span>
      </label>
      <label class="radio-label">
        <input type="radio" name="itemtype" />
        <span>Handmade</span>
      </label>
      <label class="radio-label">
        <input type="radio" name="itemtype" />
        <span>Vintage</span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
// Filter logic can be added here
</script>

<style scoped>
.filter-sidebar {
  width: 260px;
  flex-shrink: 0;
  padding-right: 20px;
  border-right: none;
  font-family: inherit;
  color: #222;
}

.filter-group {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #e1e3df;
}

.filter-group:last-child {
    border-bottom: none;
}

h3 {
    font-size: 0.95rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
}

.checkbox-label, .radio-label {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 0.6rem;
    font-size: 0.9rem;
    cursor: pointer;
}

input[type="checkbox"], input[type="radio"] {
    accent-color: #222;
    transform: scale(1.1);
}

.custom-price {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 0.8rem;
}

.price-input {
    position: relative;
    flex: 1;
}

.price-input input {
    width: 100%;
    padding: 8px 12px;
    border-radius: 24px;
    border: 1px solid #222; /* Inner shadow style border from reference if needed, keep simple */
    font-size: 0.9rem;
    box-shadow: 0 1px 4px rgba(0,0,0,0.1) inset;
    border: 1px solid #ccc;
}

.price-input input:focus {
    outline: 2px solid #222;
    border-color: transparent;
}

.to {
    font-size: 0.8rem;
    color: #595959;
}

.arrow-btn {
    background: white;
    border: 1px solid #222;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1rem;
}

.arrow-btn:hover {
    background: #f1f1f1;
}

.color-options {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.color-circle {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: transform 0.1s;
}

.color-circle:hover {
    transform: scale(1.1);
    box-shadow: 0 0 0 2px white, 0 0 0 3px #ccc;
}

.category-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.category-list li {
    margin-bottom: 0.5rem;
}

.category-list a {
    text-decoration: none;
    color: #222;
    font-size: 0.9rem;
}

.category-list a:hover, .show-more:hover {
    text-decoration: underline;
}

.show-more {
    font-size: 0.85rem;
    font-weight: 500;
    color: #222;
    text-decoration: none;
    display: inline-block;
    margin-top: 0.5rem;
}
</style>
