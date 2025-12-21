<template>
  <div class="login-page">
    <h2>Sign In</h2>
    <UserLoginForm />
    <p class="mt-4">
      No account? <NuxtLink to="/register">Register</NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import UserLoginForm from '~/components/UserLoginForm.vue';

definePageMeta({
  layout: 'auth'
})
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
}
</style>
