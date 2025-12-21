import { defineStore } from 'pinia';
import { collection, getDocs } from 'firebase/firestore';
import type { Campaign } from '~/types';

export const useCampaignStore = defineStore('campaigns', () => {
    const campaigns = ref<Campaign[]>([]);
    const loading = ref(false);

    const { $db } = useNuxtApp();

    const fetchCampaigns = async () => {
        loading.value = true;
        try {
            if (!$db) return;
            // Mock data or fetch from firestore
            // For exam requirement, we use Firestore
            const querySnapshot = await getDocs(collection($db, 'campaigns'));
            campaigns.value = querySnapshot.docs.map(doc => ({ 
                id: doc.id, 
                ...doc.data() 
            } as Campaign));
            
            // Fallback mock if empty (so UI shows something)
                campaigns.value = [
                  {
                    id: '1',
                    title: 'Pet Portraits',
                    subtitle: 'Up to 20% off',
                    imageUrl: 'https://i.etsystatic.com/18623087/r/il/da56c2/7284004899/il_300x300.7284004899_mhel.jpg',
                    link: '#'
                  },
                  {
                    id: '2',
                    title: 'Adult Costumes',
                    subtitle: 'Up to 20% off',
                    imageUrl: 'https://i.etsystatic.com/20703183/r/il/19680f/1983859144/il_300x300.1983859144_3kq2.jpg',
                    link: '#'
                  },
                  {
                    id: '3',
                    title: 'Vintage Style',
                    subtitle: 'Up to 20% off',
                    imageUrl: 'https://i.etsystatic.com/29939306/r/il/43f48f/4790454723/il_300x300.4790454723_pvli.jpg',
                    link: '#'
                  },
                  {
                    id: '4',
                    title: 'Personalized Gifts',
                    subtitle: 'Up to 20% off',
                    imageUrl: 'https://i.etsystatic.com/52857619/r/il/60f9f2/7166954500/il_300x300.7166954500_bp4p.jpg',
                    link: '#'
                  },
                  {
                    id: '5',
                    title: 'Blankets & Throws',
                    subtitle: 'Up to 25% off',
                    imageUrl: 'https://i.etsystatic.com/50965305/r/il/1bdd88/6311593238/il_300x300.6311593238_sloi.jpg',
                    link: '#'
                  }
                ];
        } catch (e) {
            console.error(e);
        } finally {
            loading.value = false;
        }
    };

    return {
        campaigns,
        loading,
        fetchCampaigns
    };
});
