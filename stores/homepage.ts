import { defineStore } from 'pinia';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

export const useHomepageStore = defineStore('homepage', {
  state: () => ({
    sections: {} as Record<string, any>,
    loading: false,
    error: null as string | null
  }),

  actions: {
    async fetchSection(sectionId: string) {
      // Return if already fetched
      if (this.sections[sectionId]) return;

      this.loading = true;
      try {
        const { $db } = useNuxtApp() as any;
        const docRef = doc($db, 'homepage_sections', sectionId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          this.sections[sectionId] = docSnap.data();
        } else {
          console.warn(`Section ${sectionId} not found in Firestore.`);
        }
      } catch (err: any) {
        console.error(`Error fetching section ${sectionId}:`, err);
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    }
  }
});
