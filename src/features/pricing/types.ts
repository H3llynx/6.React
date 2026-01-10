export type Product = {
    id: string;
    name: string;
    price: number;
    pages?: number;
    languages?: number;
}

export type WebFeatures = {
    pages: number;
    setPages: (value: number) => void;
    languages: number;
    setLanguages: (value: number) => void;
}

export type ProductGroup = {
    selectedProducts: Product[];
    setSelectedProducts: (products: Product[]) => void;
    pages: number;
    setPages: (pages: number) => void;
    languages: number;
    setLanguages: (languages: number) => void;
    total: number;
}

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

export type RequestForm = {
    name: string;
    setName: (name: string) => void;
    email: string;
    setEmail: (email: string) => void;
    phone: string;
    setPhone: (phone: string) => void;
    onSubmit: (e: React.FormEvent) => void;
}

export type Quote = {
    name: string;
    email: string;
    phone: string;
    selectedProducts: Product[];
    total: number;
    pages?: number;
    languages?: number;
    createdAt: Date;
}