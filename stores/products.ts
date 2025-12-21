import { defineStore } from 'pinia';
import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';

export const useProductsStore = defineStore('products', {
  state: () => ({
    items: [] as any[],
    currentProduct: null as any | null,
    loading: false,
    error: null as string | null
  }),

  actions: {
    async fetchProducts() {
      this.loading = true;
      try {
        const { $db } = useNuxtApp() as any;
        const querySnapshot = await getDocs(collection($db, 'products'));
        this.items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      } catch (err: any) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },

    async fetchProductById(id: string) {
      this.loading = true;
      try {
        const { $db } = useNuxtApp() as any;
        const docRef = doc($db, 'products', id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          this.currentProduct = { id: docSnap.id, ...docSnap.data() };
        } else {
          this.error = 'Product not found';
        }
      } catch (err: any) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    }
  }
});

// Alias for backward compatibility / stale cache
export const useProductStore = useProductsStore;
