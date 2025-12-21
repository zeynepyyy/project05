<template>
  <div class="divider-line-atom">
    <span>
      <slot>OR</slot>
    </span>
  </div>
</template>

<style scoped>
.divider-line-atom {
  text-align: center;
  color: #888;
  font-size: 0.8rem;
  margin: 1.2rem 0;
  position: relative;
}

.divider-line-atom span {
  background-color: white;
  padding: 0 0.5rem;
  position: relative;
  z-index: 1;
}

.divider-line-atom::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #ccc;
  z-index: 0;
}
</style>
