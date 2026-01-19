import { createContext } from "react";
import type { ProductType, QuoteType } from "../types";

export type CalculatorContextType = {
    selectedProducts: ProductType[];
    setSelectedProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
    total: number;
    pages: number;
    setPages: React.Dispatch<React.SetStateAction<number>>;
    languages: number;
    setLanguages: React.Dispatch<React.SetStateAction<number>>;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    phone: string;
    setPhone: React.Dispatch<React.SetStateAction<string>>;
    quotes: QuoteType[];
    setQuotes: React.Dispatch<React.SetStateAction<QuoteType[]>>;
    nameSortAsc: boolean;
    dateSortAsc: boolean;
    activeSort: string | null;
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    filteredQuotes: QuoteType[];
    isAnnual: boolean;
    setIsAnnual: React.Dispatch<React.SetStateAction<boolean>>;
    searchParams: URLSearchParams;
    setSearchParams: (params: URLSearchParams) => void;
    webSelected: ProductType | undefined;
    handleAddQuote: (e: React.FormEvent) => void;
    handleDeleteQuote: (q: QuoteType) => void;
    handleSortByName: () => void;
    handleSortByDate: () => void;
    handleReset: () => void;
};

export const CalculatorContext = createContext<CalculatorContextType | null>(null);