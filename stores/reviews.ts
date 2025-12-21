import { defineStore } from 'pinia';
import { collection, getDocs, addDoc, query, where, Timestamp } from 'firebase/firestore';

export const useReviewsStore = defineStore('reviews', {
  state: () => ({
    reviews: [] as any[],
    loading: false,
    error: null as string | null
  }),

  actions: {
    async fetchReviewsByProductId(productId: string) {
      this.loading = true;
      try {
        const { $db } = useNuxtApp() as any;
        const q = query(collection($db, 'reviews'), where('productId', '==', productId));
        const querySnapshot = await getDocs(q);
        this.reviews = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      } catch (err: any) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },

    async addReview(review: { productId: string; userName: string; rating: number; comment: string }) {
      this.loading = true;
      try {
        const { $db } = useNuxtApp() as any;
        const reviewData = {
          ...review,
          createdAt: Timestamp.now(),
          helpfulCount: 0
        };
        await addDoc(collection($db, 'reviews'), reviewData);
        // Optimistically add to local state or re-fetch
        this.fetchReviewsByProductId(review.productId);
      } catch (err: any) {
        this.error = err.message;
        throw err;
      } finally {
        this.loading = false;
      }
    }
  }
});
