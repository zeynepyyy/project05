import { defineNuxtPlugin } from '#app';
import { useCartStore } from '~/stores/cart';
import { seedDatabase } from '~/utils/seed';

export default defineNuxtPlugin(async (nuxtApp) => {
  const cartStore = useCartStore();
  cartStore.initializeStore();

  const { $db } = useNuxtApp() as any;
  if ($db) {
      // Seed database if possible (usually better in server middleware or manual trigger, but kept here per request)
      await seedDatabase($db);
  }
});
