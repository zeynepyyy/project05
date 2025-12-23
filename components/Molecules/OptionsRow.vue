<template>
  <div class="options-row-molecule">
    <label class="stay-signed">
      <BaseInput type="checkbox" v-model="staySignedIn" />
      Stay signed in
    </label>

    <a href="#" class="link">Forgot your password?</a>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// Atomu import edin
import BaseInput from '../Atoms/BaseInput.vue'

const staySignedIn = ref(false)
</script>

<style scoped>
.options-row-molecule {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  margin-bottom: 1rem;
}

.stay-signed {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.link {
  color: #000;
  text-decoration: none;
}
</style>
