import type React from "react";

export type ProductType = {
    id: string;
    name: string;
    price: {
        base: number;
        page?: number;
        language?: number;
    };
    pages?: number;
    languages?: number;
}

export type ProductCardType = {
    products: ProductType[];
    id: string;
    name: string;
    price: number;
    features: string[];
    src: string;
}

export type WebFeatureType = {
    name: string;
    price: number | undefined;
    remove: () => void;
    add: () => void;
    feature: number;
    typeFeature: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type DialogType = {
    close: () => void;
    feature: string;
    price: number | undefined;
}


export type QuoteType = {
    id: string;
    name: string;
    email: string;
    phone: string;
    selectedProducts: ProductType[];
    total: number;
    createdAt: Date;
    pages?: number;
    languages?: number;
}