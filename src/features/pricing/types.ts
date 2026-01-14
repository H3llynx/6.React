
export type ProductType = {
    id: string;
    name: string;
    price: number;
    pages?: number;
    languages?: number;
}

export type WebFeatureType = {
    name: string;
    remove: () => void;
    add: () => void;
    feature: number;
    addFeature: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type WebFeaturesType = {
    pages: number;
    setPages: (value: number) => void;
    languages: number;
    setLanguages: (value: number) => void;
}

export type DialogType = {
    close: () => void;
    feature: string;
}

export type ProductCardType = {
    products: ProductType[];
    id: string;
    name: string;
    price: number;
    features: string[];
    src: string;
    selectedProducts: ProductType[];
    setSelectedProducts: (value: ProductType[]) => void;
}

export type RequestFormType = {
    name: string;
    setName: (name: string) => void;
    email: string;
    setEmail: (email: string) => void;
    phone: string;
    setPhone: (phone: string) => void;
    onSubmit: (e: React.FormEvent) => void;
}

export type SortButtonType = {
    sort: string,
    onClick: () => void,
    sortAsc?: boolean,
    isActive?: boolean
}

export type QuoteBlockType = {
    name: string;
    email: string;
    phone: string;
    selectedProducts: ProductType[];
    total: number;
}

export type QuoteType = QuoteBlockType & {
    pages?: number;
    languages?: number;
    createdAt: Date;
};