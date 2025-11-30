<template>
  <select class="form-select-atom">
    <slot></slot>
  </select>
</template>

<style scoped>
.form-select-atom {
  width: 100%;
  height: 44px;
  border: 1px solid #999;
  border-radius: 6px;
  padding: 0 0.75rem;
  appearance: none; /* Varsayılan oku kaldır */
  /* Özel ok simgesi */
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px;
  cursor: pointer;
}
</style>
