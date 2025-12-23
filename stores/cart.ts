import { defineStore } from 'pinia';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import type { CartItem, Product } from '~/types';

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [] as CartItem[],
        isSideCartOpen: false,
        loading: false,
        // Using Partial or loose type here because lastAddedItem might be just the product or a wrapper
        lastAddedItem: null as any | null
    }),
  getters: {
    totalItems: (state) => state.items.reduce((acc, item) => acc + (item.quantity || 1), 0),
    totalPrice: (state) => state.items.reduce((acc, item) => acc + (item.product.price * (item.quantity || 1)), 0)
  },
  actions: {
    initializeStore() {
        if (process.client) {
            const stored = localStorage.getItem('cart-items');
            if (stored) {
                try {
                    this.items = JSON.parse(stored);
                } catch (e) {
                    console.error("Failed to parse cart items", e);
                }
            }
        }
    },
    itemsChanged() {
        if (process.client) {
            localStorage.setItem('cart-items', JSON.stringify(this.items));
        }
    },
    addToCart(product: Product, qty: number = 1) {
      const existingItem = this.items.find((i) => i.product.id === product.id)
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + qty
      } else {
        this.items.push({ product, quantity: qty })
      }
      this.isSideCartOpen = true
      this.itemsChanged();
    },
    updateQuantity(productId: string, qty: number) {
        const item = this.items.find(i => i.product.id === productId);
        if (item) {
            item.quantity = qty;
            this.itemsChanged();
        }
    },
    removeFromCart(productId: string) {
      const index = this.items.findIndex(i => i.product.id === productId)
      if (index > -1) {
        this.items.splice(index, 1)
        this.itemsChanged();
      }
    },
    toggleSideCart(isOpen: boolean) {
      this.isSideCartOpen = isOpen
    },
    
    async createOrder(customerDetails: any) {
      this.loading = true
      try {
          const { $db } = useNuxtApp()
          const orderData = {
              items: this.items,
              total: this.totalPrice,
              customer: customerDetails,
              createdAt: Timestamp.now(),
              status: 'pending'
          }
          const docRef = await addDoc(collection($db, 'orders'), orderData)
          this.items = [] // Clear cart
          this.itemsChanged();
          return docRef.id
      } catch (e) {
          console.error(e)
          throw e
      } finally {
          this.loading = false
      }
    }
  }
})
