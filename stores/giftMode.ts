import { defineStore } from 'pinia';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export interface GiftCategory {
    id?: string;
    title: string;
    image: string;
    size: 'small' | 'large';
    order?: number;
}

export const useGiftModeStore = defineStore('giftMode', () => {
    const categories = ref<GiftCategory[]>([]);
    const loading = ref(false);
    const error = ref<string | null>(null);

    // Default Fallback Data (Hardcoded)
    const defaultCategories: GiftCategory[] = [
         // Column 1
        { title: 'Stocking Stuffers', size: 'small', image: 'https://i.etsystatic.com/23724391/r/il/a7605d/4279933860/il_794xN.4279933860_8t3x.jpg', order: 1 },
        { title: 'Ugly Christmas Sweaters', size: 'large', image: 'https://i.etsystatic.com/11430679/r/il/6b567d/3143527961/il_794xN.3143527961_1l7d.jpg', order: 2 },
        // Column 2
        { title: 'Festive Candle Displays', size: 'large', image: 'https://i.etsystatic.com/18266205/r/il/981880/3421293373/il_794xN.3421293373_l7x9.jpg', order: 3 },
        { title: 'Hot Chocolate Bombs', size: 'small', image: 'https://i.etsystatic.com/23724391/r/il/a7605d/4279933860/il_794xN.4279933860_8t3x.jpg', order: 4 },
        // Column 3
        { title: 'Christmas Host Gifts', size: 'small', image: 'https://i.etsystatic.com/11239263/r/il/663673/3530374187/il_794xN.3530374187_my5n.jpg', order: 5 },
        { title: 'Custom Pet Ornaments', size: 'large', image: 'https://i.etsystatic.com/18266205/r/il/981880/3421293373/il_794xN.3421293373_l7x9.jpg', order: 6 },
        // Column 4
        { title: 'Christmas Gift Boxes', size: 'large', image: 'https://i.etsystatic.com/32502471/r/il/992497/4383177604/il_794xN.4383177604_k3m8.jpg', order: 7 },
        { title: 'Handknit Christmas Sweaters', size: 'small', image: 'https://i.etsystatic.com/11239263/r/il/663673/3530374187/il_794xN.3530374187_my5n.jpg', order: 8 },
    ];

    const fetchCategories = async () => {
        const { $db } = useNuxtApp();
        if (!$db) {
            categories.value = defaultCategories;
            return;
        }

        loading.value = true;
        error.value = null;

        try {
            const q = query(collection($db, 'gift_seasonal_categories'), orderBy('order', 'asc'));
            const snapshot = await getDocs(q);

            if (!snapshot.empty) {
                categories.value = snapshot.docs.map(doc => {
                    const data = doc.data();
                    return {
                        id: doc.id,
                        title: data.title || 'Untitled',
                        size: data.size || 'small',
                        order: data.order || 99,
                        // Robust check for image field + Fallback
                        image: data.image || data.imageUrl || data.url || 'https://via.placeholder.com/400x300?text=No+Image'
                    };
                }) as GiftCategory[];
            } else {
                // If empty, use fallback
                categories.value = defaultCategories;
            }
        } catch (err) {
            console.error('Error fetching gift categories:', err);
            error.value = 'Failed to load categories';
            // Even on error, show fallback to avoid broken UI
            categories.value = defaultCategories;
        } finally {
            loading.value = false;
        }
    };

    return {
        categories,
        loading,
        error,
        fetchCategories
    };
});
