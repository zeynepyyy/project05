import { defineStore } from 'pinia';
import type { Product } from '~/types';

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favoriteItems: [] as Product[],
  }),
  actions: {
    toggleFavorite(product: Product) {
        const index = this.favoriteItems.findIndex(p => p.id === product.id);
        if (index > -1) {
            this.favoriteItems.splice(index, 1);
        } else {
            this.favoriteItems.push(product);
        }
    },
    isFavorite(productId: string) {
        return this.favoriteItems.some((p: Product) => p.id === productId);
    }
  }
});
