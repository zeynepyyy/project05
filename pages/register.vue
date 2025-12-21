<template>
  <div class="register-page">
    <h2>Create your account</h2>
    <UserRegisterForm />
    <p class="mt-4">
      Already have an account? <NuxtLink to="/login">Sign in</NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import UserRegisterForm from '~/components/UserRegisterForm.vue';

definePageMeta({
  layout: 'auth'
})
</script>

<style scoped>
.register-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
}
</style>
