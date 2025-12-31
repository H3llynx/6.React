export type ProductProps = {
    id: string;
    name: string;
    price: number;
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