import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import products from "../../../config/products.json";
import type { ProductType, QuoteType } from "../types";
import { CalculatorContext, type CalculatorContextType } from "./CalculatorContext";

export function CalculatorProvider({ children }: { children: ReactNode }) {
    const [selectedProducts, setSelectedProducts] = useState<ProductType[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [pages, setPages] = useState<number>(1);
    const [languages, setLanguages] = useState<number>(1);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [quotes, setQuotes] = useState<QuoteType[]>(JSON.parse(localStorage.getItem("quotes") || "[]"));
    const [nameSortAsc, setNameSortAsc] = useState(true);
    const [dateSortAsc, setDateSortAsc] = useState(true);
    const [activeSort, setActiveSort] = useState<string | null>(null);
    const [query, setQuery] = useState("");
    const [filteredQuotes, setFilteredQuotes] = useState<QuoteType[]>(quotes);
    const [isAnnual, setIsAnnual] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const webSelected = selectedProducts.find(product => product.id === "web");

    useEffect(() => {
        const productsTotal = selectedProducts.reduce((acc, prod) => acc + prod.price.base, 0);
        const pagesTotal = webSelected ? pages * webSelected.price.page! : 0;
        const languagesTotal = webSelected ? webSelected.price.language! : 0;
        const newTotal = productsTotal + pagesTotal + languagesTotal

        setTotal(isAnnual ? newTotal * 0.8 : newTotal);
    }, [selectedProducts, pages, languages, webSelected, isAnnual]);

    useEffect(() => {
        localStorage.setItem("quotes", JSON.stringify(quotes));
    }, [quotes]);

    useEffect(() => {
        if (query === "") {
            setFilteredQuotes(quotes);
        } else {
            const searchedQuote = quotes.find(quote =>
                quote.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredQuotes(searchedQuote ? [searchedQuote] : []);
        }
    }, [quotes, query]);

    useEffect(() => {
        const newParams = new URLSearchParams();

        selectedProducts.forEach(product => {
            if (product.id === "seo") {
                newParams.set("SEO", "true");
            }
            if (product.id === "ads") {
                newParams.set("Ads", "true");
            }
            if (product.id === "web") {
                newParams.set("WebPage", "true");
                if (webSelected) {
                    newParams.set("pages", String(pages));
                    newParams.set("lang", String(languages));
                }
            }
            if (isAnnual) {
                newParams.set("annual", "true")
            }
        });

        setSearchParams(newParams);
    }, [pages, languages, selectedProducts, webSelected, setSearchParams, isAnnual]);

    useEffect(() => {
        const productsToSelect = [];

        if (searchParams.get("WebPage") === "true") {
            const webPageProduct = products.find(p => p.id === "web");
            if (webPageProduct) productsToSelect.push(webPageProduct);
            const pagesParam = searchParams.get("pages");
            const languagesParam = searchParams.get("lang");
            if (pagesParam) setPages(Number(pagesParam));
            if (languagesParam) setLanguages(Number(languagesParam));
        }

        if (searchParams.get("SEO") === "true") {
            const seoProduct = products.find(p => p.id === "seo");
            if (seoProduct) productsToSelect.push(seoProduct);
        }

        if (searchParams.get("Ads") === "true") {
            const adsProduct = products.find(p => p.id === "ads");
            if (adsProduct) productsToSelect.push(adsProduct);
        }
        if (searchParams.get("annual") === "true") {
            setIsAnnual(true);
        }

        setSelectedProducts(productsToSelect);
    }, [searchParams]);

    const handleAddQuote = (e: React.FormEvent) => {
        e.preventDefault();
        const newQuote: QuoteType = {
            id: crypto.randomUUID(),
            name: name,
            email: email,
            phone: phone,
            selectedProducts: selectedProducts,
            total: total,
            createdAt: new Date()
        };

        if (webSelected) {
            webSelected.pages = pages;
            webSelected.languages = languages;
        }
        if (selectedProducts.length === 0) {
            alert("no product selected");
            return
        }
        setQuotes([...quotes, newQuote].sort((a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
        setSelectedProducts([]);

        setName("");
        setEmail("");
        setPhone("");
    }

    const handleDeleteQuote = (q: QuoteType) => {
        let quoteList = [...quotes];
        if (quoteList.some(quote => quote.id === q.id)) {
            quoteList = quoteList.filter((quote) => quote.id !== q.id);
        }
        setQuotes(quoteList);
    }

    const handleSortByName = () => {
        const newSortOrder = !nameSortAsc;
        const sorted = [...quotes].sort((a, b) => {
            return newSortOrder
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name);
        });
        setQuotes(sorted);
        setNameSortAsc(newSortOrder);
        setActiveSort("name")
    };

    const handleReset = () => {
        const sorted = [...quotes].sort((a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setQuotes(sorted);
        setActiveSort(null);
        setQuery("");
    }

    const handleSortByDate = () => {
        const newSortOrder = !dateSortAsc
        const sorted = [...quotes].sort((a, b) => {
            return newSortOrder
                ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                : new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        });
        setQuotes(sorted);
        setDateSortAsc(newSortOrder);
        setActiveSort("date")
    };

    const value: CalculatorContextType = {
        selectedProducts, setSelectedProducts, total, pages, setPages, languages, setLanguages,
        name, setName, email, setEmail, phone, setPhone, quotes, setQuotes,
        nameSortAsc, dateSortAsc, activeSort, query, setQuery, filteredQuotes,
        isAnnual, setIsAnnual, searchParams, setSearchParams, webSelected,
        handleAddQuote, handleDeleteQuote, handleSortByName, handleSortByDate, handleReset,
    };

    return (
        <CalculatorContext.Provider value={value}>
            {children}
        </CalculatorContext.Provider>
    );
}