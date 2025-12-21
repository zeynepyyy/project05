import { seedDatabase } from '~/utils/seed';

export default defineNuxtPlugin(async (nuxtApp) => {
  const cartStore = useCartStore(nuxtApp.$pinia);
  cartStore.initializeStore();

  const { $db } = useNuxtApp() as any;
  if ($db) {
      await seedDatabase($db);
  }
});
