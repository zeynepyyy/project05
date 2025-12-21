import { defineStore } from 'pinia';
import { collection, getDocs } from 'firebase/firestore';

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: [] as any[], // Keep for generic usage if needed
    categoryGrid: [] as any[], // Homepage grid items
    megaMenuCategories: [] as any[], // Top nav dropdown categories
    loading: false,
    error: null as string | null
  }),

  actions: {
    async fetchCategoryGrid() {
      this.loading = true;
      try {
        const { $db } = useNuxtApp() as any;
        const querySnapshot = await getDocs(collection($db, 'category_grid'));
        const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        // Sort by order
        this.categoryGrid = items.sort((a, b) => (a.order || 0) - (b.order || 0));
      } catch (err: any) {
        console.error('Error fetching category grid:', err);
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },

    async fetchMegaMenu() {
        this.loading = true;
        try {
          const { $db } = useNuxtApp() as any;
          // We can't guarantee order from Firestore without an index and orderBy clause,
          // but for now we'll fetch and might sort client side if we added an order field,
          // or rely on a hardcoded mapped order if critical.
          // For now, let's just fetch all.
          const querySnapshot = await getDocs(collection($db, 'megamenu_categories'));
          this.megaMenuCategories = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          
          // Optional: Sort manually to match a specific desired order if needed, 
          // essentially putting 'recommended' first usually.
          const order = ['recommended', 'accessories', 'art', 'baby', 'bags', 'bath', 'books', 'clothing', 'craft', 'electronics', 'gifts', 'home', 'jewelry', 'paper', 'pet', 'shoes', 'toys', 'weddings'];
          this.megaMenuCategories.sort((a, b) => {
              return order.indexOf(a.id) - order.indexOf(b.id);
          });

        } catch (err: any) {
          console.error('Error fetching mega menu:', err);
          this.error = err.message;
        } finally {
          this.loading = false;
        }
      }
  }
});
