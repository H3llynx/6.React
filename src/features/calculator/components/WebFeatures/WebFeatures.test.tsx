import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { describe, expect, it } from "vitest";
import type { CalculatorContextType } from '../../contexts/CalculatorContext';
import { CalculatorContext } from '../../contexts/CalculatorContext';
import { WebFeatures } from './WebFeatures';

type CalculatorTestProviderProps = {
    children: ReactNode;
    initial: {
        pages: number,
        languages: number
    };
};

export function CalculatorTestProvider({ children, initial }: CalculatorTestProviderProps) {
    const [pages, setPages] = useState(initial.pages ?? 1);
    const [languages, setLanguages] = useState(initial.languages ?? 1);

    const value: CalculatorContextType = {
        pages,
        setPages,
        languages,
        setLanguages,
        selectedProducts: [],
        setSelectedProducts: () => { },
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
        isAnnual: false,
        setIsAnnual: () => { },
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

describe("WebFeatures", () => {

    it("increases the amount of pages when the corresponding + button is pressed", async () => {
        render(
            <CalculatorTestProvider initial={{ pages: 1, languages: 1 }}>
                <WebFeatures />
            </CalculatorTestProvider>
        );
        const plusBtn = screen.getByLabelText("Add page");
        const user = userEvent.setup();
        await user.click(plusBtn);
        expect(screen.getByLabelText("pages:")).toHaveValue(2);
    });

    it("decreases the amount of pages when the corresponding + button is pressed", async () => {
        render(
            <CalculatorTestProvider initial={{ pages: 2, languages: 2 }}>
                <WebFeatures />
            </CalculatorTestProvider>
        );
        const minusBtn = screen.getByLabelText("Remove page");
        const user = userEvent.setup();
        await user.click(minusBtn);
        expect(screen.getByLabelText("pages:")).toHaveValue(1);
    });

    it("increases the amount of languages when the corresponding + button is pressed", async () => {
        render(
            <CalculatorTestProvider initial={{ pages: 1, languages: 1 }}>
                <WebFeatures />
            </CalculatorTestProvider>
        );
        const plusBtn = screen.getByLabelText("Add language");
        const user = userEvent.setup();
        await user.click(plusBtn);
        expect(screen.getByLabelText("languages:")).toHaveValue(2);
    });

    it("decreases the amount of languages when the corresponding + button is pressed", async () => {
        render(
            <CalculatorTestProvider initial={{ pages: 2, languages: 2 }}>
                <WebFeatures />
            </CalculatorTestProvider>
        );
        const minusBtn = screen.getByLabelText("Remove language");
        const user = userEvent.setup();
        await user.click(minusBtn);
        expect(screen.getByLabelText("languages:")).toHaveValue(1);
    });
});