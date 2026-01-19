import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { describe, expect, it } from "vitest";
import type { CalculatorContextType } from '../../contexts/CalculatorContext';
import { CalculatorContext } from '../../contexts/CalculatorContext';
import type { ProductType } from '../../types';
import { ProductCard } from './ProductCard';

type CalculatorTestProviderProps = {
    children: ReactNode;
    initial?: Partial<CalculatorContextType>;
    onStateChange?: (state: CalculatorContextType) => void;
};

export function CalculatorTestProvider({ children, initial = {} }: CalculatorTestProviderProps) {
    const [selectedProducts, setSelectedProducts] = useState<ProductType[]>(
        initial.selectedProducts ?? []
    );

    const value: CalculatorContextType = {
        selectedProducts,
        setSelectedProducts,
        isAnnual: initial.isAnnual ?? false,
        setIsAnnual: () => { },
        pages: 0,
        setPages: () => { },
        languages: 0,
        setLanguages: () => { },
        total: 0,
        name: "",
        setName: () => { },
        email: "",
        setEmail: () => { },
        phone: "",
        setPhone: () => { },
        quotes: [],
        setQuotes: () => { },
        nameSortAsc: true,
        dateSortAsc: true,
        activeSort: null,
        query: "",
        setQuery: () => { },
        filteredQuotes: [],
        searchParams: new URLSearchParams(),
        setSearchParams: () => { },
        webSelected: undefined,
        handleAddQuote: () => { },
        handleDeleteQuote: () => { },
        handleSortByName: () => { },
        handleSortByDate: () => { },
        handleReset: () => { },
    };

    return (
        <CalculatorContext.Provider value={value}>
            {children}
        </CalculatorContext.Provider>
    );
}

describe("ProductCard", () => {

    const testProduct = {
        id: "1",
        name: "test",
        price: {
            base: 300
        },
        img: "/test.png",
        features: [
            "Feat 1",
            "Feat 2"
        ]
    };

    const testProductArray = [testProduct];

    it("shows the card with the correct product information", () => {
        render(
            <CalculatorTestProvider
                initial={{ selectedProducts: [] }}>
                <ProductCard
                    products={testProductArray}
                    id={testProduct.id}
                    name={testProduct.name}
                    price={testProduct.price.base}
                    features={testProduct.features}
                    src={testProduct.img}
                />
            </CalculatorTestProvider>
        );
        expect(screen.getByRole("heading")).toHaveTextContent("test");
        expect(screen.getByText("300")).toBeInTheDocument();
        expect(screen.getByText("Feat 1")).toBeInTheDocument();
        expect(screen.getByText("Feat 2")).toBeInTheDocument();
        expect(screen.getByRole("img")).toHaveAttribute("src", "/test.png");
    });

    it("updates the price depending on isAnnual", () => {
        render(
            <CalculatorTestProvider
                initial={{ isAnnual: true, selectedProducts: [] }}>
                <ProductCard
                    products={testProductArray}
                    id={testProduct.id}
                    name={testProduct.name}
                    price={testProduct.price.base}
                    features={testProduct.features}
                    src={testProduct.img}
                />
            </CalculatorTestProvider>
        );
        expect(screen.getByText("240")).toBeInTheDocument();
    });

    it("adds the product when checked", async () => {
        render(
            <CalculatorTestProvider
                initial={{ isAnnual: false, selectedProducts: [] }}>
                <ProductCard
                    products={testProductArray}
                    id={testProduct.id}
                    name={testProduct.name}
                    price={testProduct.price.base}
                    features={testProduct.features}
                    src={testProduct.img}
                />
            </CalculatorTestProvider>
        );
        const user = userEvent.setup();
        await user.click(screen.getByRole("checkbox"));
        expect(screen.getByRole("checkbox")).toBeChecked();
        expect(screen.getByText("Added")).toBeInTheDocument();
    });
});