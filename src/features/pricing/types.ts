export type ProductCard = {
    products: Product[];
    id: string;
    name: string;
    price: number;
    features: string[];
    src: string;
    selectedProducts: Product[];
    setSelectedProducts: (value: Product[]) => void;
}

export type Product = {
    id: string;
    name: string;
    price: number;
}

export type WebFeatures = {
    pages: number;
    setPages: (value: number) => void;
    languages: number;
    setLanguages: (value: number) => void;
}