import { collection, addDoc, getDocs, writeBatch, doc } from 'firebase/firestore'

export const seedDatabase = async ($db: any) => {
    console.log('Seeding database...')
    
    // 1. Categories
    const categoriesParams = [
        { name: 'Jewelry & Accessories', slug: 'jewelry-accessories' },
        { name: 'Clothing & Shoes', slug: 'clothing-shoes' },
        { name: 'Home & Living', slug: 'home-living' },
        { name: 'Wedding & Party', slug: 'wedding-party' },
        { name: 'Toys & Entertainment', slug: 'toys-entertainment' },
    ]
    
    // Check if categories exist to avoid duplicates (naive check)
    const catSnapshot = await getDocs(collection($db, 'categories'))
    if (catSnapshot.empty) {
        for (const cat of categoriesParams) {
            await addDoc(collection($db, 'categories'), cat)
        }
        console.log('Categories seeded.')
    }

    // 2. Reviews (Initial Dummy Data)
    const reviewsSnapshot = await getDocs(collection($db, 'reviews'))
    if (reviewsSnapshot.empty) {
        await addDoc(collection($db, 'reviews'), {
            productId: 'oyster-mushroom-1',
            userName: 'Demo User',
            rating: 5,
            comment: 'This is a sample review created to initialize the collection.',
            createdAt: new Date(),
            item: 'Sample Item'
        })
         console.log('Reviews seeded.')
    }

    // 3. Orders (Dummy Order)
    const ordersSnapshot = await getDocs(collection($db, 'orders'))
    if (ordersSnapshot.empty) {
        await addDoc(collection($db, 'orders'), {
            customer: { name: 'Test User', email: 'test@example.com' },
            total: 150.00,
            status: 'test',
            createdAt: new Date(),
            items: []
        })
        console.log('Orders seeded.')
    }

    // 4. Gift Mode Seasonal Categories
    const giftSnapshot = await getDocs(collection($db, 'gift_seasonal_categories'))
    if (giftSnapshot.empty) {
        const batch = writeBatch($db);
        const giftData = [
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

        giftData.forEach(item => {
            const docRef = doc(collection($db, 'gift_seasonal_categories'));
            batch.set(docRef, item);
        });
        await batch.commit();
        console.log('Gift Mode categories seeded.');
        await batch.commit();
        console.log('Gift Mode categories seeded.');
    }

    // 5. Popular Gifts (Jewelry) for Discover Section
    const productSnapshot = await getDocs(collection($db, 'products'));
    // Check if "Statement Earrings" already exists to avoid duplicates
    const alreadySeeded = productSnapshot.docs.some(d => d.data().title === 'Statement Earrings');
    
    if (!alreadySeeded) { 
        console.log('Seeding jewelry products...');
        const batch = writeBatch($db);
        const jewelryItems = [
             { title: 'Statement Earrings', price: 2860.22, originalPrice: 3575.28, video: false, image: 'https://i.etsystatic.com/11430679/r/il/6b567d/3143527961/il_794xN.3143527961_1l7d.jpg', category: 'Jewelry' },
             { title: 'Gold Pendant Necklace', price: 1126.21, originalPrice: 1251.35, video: false, image: 'https://i.etsystatic.com/23724391/r/il/a7605d/4279933860/il_794xN.4279933860_8t3x.jpg', category: 'Jewelry' },
             { title: 'Zodiac Necklace', price: 2368.62, originalPrice: null, video: true, image: 'https://i.etsystatic.com/18266205/r/il/981880/3421293373/il_794xN.3421293373_l7x9.jpg', category: 'Jewelry' },
             { title: 'Heart Rings', price: 1430.11, originalPrice: null, video: true, image: 'https://i.etsystatic.com/32502471/r/il/992497/4383177604/il_794xN.4383177604_k3m8.jpg', category: 'Jewelry' },
             { title: 'Spiral Earrings', price: 1519.49, originalPrice: null, video: true, image: 'https://i.etsystatic.com/11239263/r/il/663673/3530374187/il_794xN.3530374187_my5n.jpg', category: 'Jewelry' },
             { title: 'Geometric Acrylic Earrings', price: 1360.61, originalPrice: null, video: true, image: 'https://i.etsystatic.com/11430679/r/il/6b567d/3143527961/il_794xN.3143527961_1l7d.jpg', category: 'Jewelry' },
             { title: 'Thick Gold Hoops', price: 2073.66, originalPrice: 2592.07, video: false, image: 'https://i.etsystatic.com/23724391/r/il/a7605d/4279933860/il_794xN.4279933860_8t3x.jpg', category: 'Jewelry' },
             { title: 'Gemstone Ear Cuff', price: 18461.83, originalPrice: 20513.14, video: true, image: 'https://i.etsystatic.com/18266205/r/il/981880/3421293373/il_794xN.3421293373_l7x9.jpg', category: 'Jewelry' },
        ];

        jewelryItems.forEach(item => {
             const docRef = doc(collection($db, 'products'));
             batch.set(docRef, item);
        });
        await batch.commit();
        console.log('Jewelry products seeded.');
    } else {
        console.log('Jewelry products already exist, skipping.');
    }
    // ... (previous code)

    // 6. Homepage Sections (Enchanted Garden, High Octane, etc.)
    // Always update these to ensure new sections/items are added even if seeded before
    console.log('Seeding homepage sections...');
    const batch2 = writeBatch($db);

    const sections = [
        {
            id: 'recent-finds',
            title: 'Dive back into these 10 finds',
            items: [
              { id: 'recent-1', title: 'London Blue Topaz, Swiss Blue Topaz', price: '18,461.83', originalPrice: '20,513.14', image: 'https://picsum.photos/340/270?random=20' },
              { id: 'recent-2', title: 'Oyster Mushroom Cluster Red And...', price: '358.15', originalPrice: null, image: 'https://picsum.photos/340/270?random=21' },
              { id: 'recent-3', title: 'Gold Herringbone Chain Necklace', price: '2,073.66', originalPrice: '2,592.07', image: 'https://picsum.photos/340/270?random=22' },
              { id: 'recent-4', title: 'Sushi, Burger, Pizza Funny Food Socks', price: '1,407.32', originalPrice: '1,876.57', image: 'https://picsum.photos/340/270?random=23' },
              { id: 'recent-5', title: 'Mismatch Acrylic Arch Earrings', price: '1,360.78', originalPrice: null, image: 'https://picsum.photos/340/270?random=24' },
              // Duplicates for 10
              { id: 'recent-6', title: 'London Blue Topaz, Swiss Blue Topaz', price: '18,461.83', originalPrice: '20,513.14', image: 'https://picsum.photos/340/270?random=25' },
              { id: 'recent-7', title: 'Oyster Mushroom Cluster Red And...', price: '358.15', originalPrice: null, image: 'https://picsum.photos/340/270?random=26' },
              { id: 'recent-8', title: 'Gold Herringbone Chain Necklace', price: '2,073.66', originalPrice: '2,592.07', image: 'https://picsum.photos/340/270?random=27' },
              { id: 'recent-9', title: 'Sushi, Burger, Pizza Funny Food Socks', price: '1,407.32', originalPrice: '1,876.57', image: 'https://picsum.photos/340/270?random=28' },
              { id: 'recent-10', title: 'Mismatch Acrylic Arch Earrings', price: '1,360.78', originalPrice: null, image: 'https://picsum.photos/340/270?random=29' }
            ]
        },
            // ... Other sections remain similar, but let's focus on categories now
            {
                id: 'holiday-finds',
                title: 'Holiday finds for you',
                items: [
                  { id: 'holiday-1', title: 'Custom Christmas Cheer', image: 'https://picsum.photos/600/600?random=30' },
                  { id: 'holiday-2', title: 'Artful Custom Portraits', image: 'https://picsum.photos/600/600?random=31' },
                  { id: 'holiday-3', title: 'Custom Holiday Decor', image: 'https://picsum.photos/600/600?random=32' },
                  { id: 'holiday-4', title: 'Festive Family Gifts', image: 'https://picsum.photos/600/600?random=33' },
                  { id: 'holiday-5', title: 'Custom Festive Pets', image: 'https://picsum.photos/600/600?random=34' },
                  { id: 'holiday-6', title: 'Holiday Cards', image: 'https://picsum.photos/600/600?random=35' }
                ]
            }
        ];

        sections.forEach(section => {
            const docRef = doc($db, 'homepage_sections', section.id);
            batch2.set(docRef, section);
        });
        await batch2.commit();
        console.log('Homepage sections seeded.');

    // 7. Homepage Category Grid (The colorful boxes)
    console.log('Seeding homepage category grid...');
    const catGridSnapshot = await getDocs(collection($db, 'category_grid'));
    if (catGridSnapshot.empty) {
        const batch3 = writeBatch($db);
        const gridItems = [
            { label: 'Personalized Gifts', image: 'https://picsum.photos/400/300?random=40', color: '#e2b9ac', order: 1 },
            { label: 'Home Favorites', image: 'https://picsum.photos/400/300?random=41', color: '#34453b', order: 2 },
            { label: 'Gifts for Him', image: 'https://picsum.photos/400/300?random=42', color: '#c29294', order: 3 },
            { label: 'Gifts for Her', image: 'https://picsum.photos/400/300?random=43', color: '#add0d9', order: 4 },
            { label: 'Gifts for Kids', image: 'https://picsum.photos/400/300?random=44', color: '#f8d975', order: 5 },
            { label: 'Gifts for Pets', image: 'https://picsum.photos/400/300?random=45', color: '#34453b', order: 6 },
            { label: 'Advent Calendars', image: 'https://picsum.photos/400/300?random=46', color: '#f8e0d4', order: 7 },
            { label: 'Style Favorites', image: 'https://picsum.photos/400/300?random=47', color: '#5d7d8e', order: 8 },
            { label: 'Personalized Jewelry', image: 'https://picsum.photos/400/300?random=48', color: '#8b1e3e', order: 9 },
            { label: 'Festive Ornaments', image: 'https://picsum.photos/400/300?random=49', color: '#f0e0e8', order: 10 },
            { label: 'Holiday Hosting', image: 'https://picsum.photos/400/300?random=50', color: '#8b1e3e', order: 11 },
            { label: 'Special Local Finds', image: 'https://picsum.photos/400/300?random=51', color: '#83a793', order: 12 },
        ]
        
        gridItems.forEach(item => {
            const docRef = doc(collection($db, 'category_grid'));
            batch3.set(docRef, item);
        });
        await batch3.commit();
        console.log('Homepage category grid seeded.');
    }

    // 8. Mega Menu Categories (The dropdown)
    console.log('Seeding mega menu categories...');
    // Always update/overwrite to ensure fixes are applied
    const batch4 = writeBatch($db);
    const megaCategories = [
            { 
              id: 'recommended', 
              name: 'Recommended categories',
              content: [
                 { title: 'Gender-Neutral Adult', image: 'https://picsum.photos/300/300?random=10' },
                 { title: 'Women\'s Clothing', image: 'https://picsum.photos/300/300?random=11' },
                 { title: 'Paper', image: 'https://picsum.photos/300/300?random=12' },
             ]
            },
            { 
              id: 'accessories', 
              name: 'Accessories',
              content: [
                 { title: 'Scarves & Wraps', image: 'https://picsum.photos/300/300?random=13' },
                 { title: 'Hats & Head Coverings', image: 'https://picsum.photos/300/300?random=14' },
                 { title: 'Hair Accessories', image: 'https://picsum.photos/300/300?random=15' },
             ]
            },
            { id: 'art', name: 'Art & Collectibles', content: [] },
            { id: 'baby', name: 'Baby', content: [] },
            { id: 'bags', name: 'Bags & Purses', content: [] },
            { id: 'bath', name: 'Bath & Beauty', content: [] },
            { id: 'books', name: 'Books, Movies & Music', content: [] },
            { id: 'clothing', name: 'Clothing', content: [] },
            { id: 'craft', name: 'Craft Supplies & Tools', content: [] },
            { id: 'electronics', name: 'Electronics & Accessories', content: [] },
            { id: 'gifts', name: 'Gifts', content: [] },
            { id: 'home', name: 'Home & Living', content: [] },
            { id: 'jewelry', name: 'Jewelry', content: [] },
            { id: 'paper', name: 'Paper & Party Supplies', content: [] },
            { id: 'pet', name: 'Pet Supplies', content: [] },
            { id: 'shoes', name: 'Shoes', content: [] },
            { id: 'toys', name: 'Toys & Games', content: [] },
            { id: 'weddings', name: 'Weddings', content: [] }
    ];

    // 9. Products Collection (Master List for Detail Pages)
    console.log('Seeding products collection...');
    const productsSnapshot = await getDocs(collection($db, 'products'));
    // Always update/overwrite for now to ensure we have the latest data
    const batch5 = writeBatch($db);

    // Collect all items from homepage sections to seed as products
    const allProducts: any[] = [];

    // Helper to add if not exists
    const addProduct = (p: any, category: string) => {
        if (!allProducts.find(x => x.id === p.id)) {
            allProducts.push({
                ...p,
                description: `This is a beautiful ${p.title}. Handcrafted with care and perfect for your needs. Dimensions: 10x10cm. Materials: Premium quality.`,
                seller: {
                    name: "ArtisanCrafts Studio",
                    rating: 4.8,
                    sales: 1250,
                    image: "https://picsum.photos/50/50?random=seller"
                },
                category: category,
                rating: 4.9,
                reviewCount: Math.floor(Math.random() * 500) + 10,
                isHolidaySpecial: category === 'Holiday'
            });
        }
    };

    // From Homepage Sections
    sections.forEach(sec => {
        sec.items.forEach((item: any) => {
            addProduct(item, sec.id === 'holiday-finds' ? 'Holiday' : 'General');
        });
    });

    // From Mega Menu (optional, if we want them clickable later)
    megaCategories.forEach(cat => {
        cat.content.forEach((item: any, idx) => {
            // Generate an ID for these since they might not have one in the menu structure yet
             const tempId = `cat-${cat.id}-${idx}`;
             addProduct({ id: tempId, ...item, price: (Math.random() * 100 + 10).toFixed(2) }, cat.name);
        });
    });

    allProducts.forEach(prod => {
        if (prod.id) {
            const docRef = doc($db, 'products', prod.id);
            batch5.set(docRef, prod);
        }
    });

    await batch5.commit();
    console.log(`Products collection seeded with ${allProducts.length} items.`);
}

