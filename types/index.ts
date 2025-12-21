export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    currency: string;
    imageUrl: string;
    category: string;
    rating?: number;
    reviewCount?: number;
    isHolidaySpecial?: boolean;
}

export interface User {
    uid: string;
    email: string;
    displayName?: string;
    photoURL?: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface Campaign {
    id: string;
    title: string;
    subtitle: string;
    imageUrl: string;
    link: string;
    backgroundColor?: string;
}
