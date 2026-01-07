export type ProductCheckbox = {
    id: string;
    name: string;
    price: number;
    src: string;
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
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