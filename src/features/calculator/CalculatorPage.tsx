import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import FlowersL from "../../assets/flowers-landscape.png";
import FlowersP from "../../assets/flowers-portrait.png";
import { CopyURLButton } from "../../components/CopyURLButton/CopyURLButton";
import { Header } from "../../components/Header/Header";
import { Section } from "../../components/Section/Section";
import { SortButton } from "../../components/SortButton/SortButton";
import { Switcher } from "../../components/Switcher/Switcher";
import products from "../../config/products.json";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { Quote } from "./components/Quote/Quote";
import { QuoteForm } from "./components/QuoteForm/QuoteForm";
import { WebFeatures } from "./components/WebFeatures/WebFeatures";
import type { ProductType, QuoteType } from "./types";


export function CalculatorPage() {
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

    return (
        <main className="h-full bg-grey flex flex-col">
            <Header />
            <Section padding="pt-5 pb-8">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center gap-1 pb-2">
                        <span className={`text-sm ${!isAnnual ? "text-teel font-medium" : "text-grey-2"}`}>
                            Monthly payment
                        </span>

                        <Switcher
                            isEnabled={isAnnual}
                            onClick={() => setIsAnnual(!isAnnual)}
                        />

                        <span className={`text-sm ${isAnnual ? "text-teel font-medium" : "text-grey-2"}`}>
                            Yearly paiment
                        </span>
                    </div>
                </div>
                <div className="m-auto flex gap-3 md:gap-1 items-center justify-center
                flex-col md:flex-row w-container">
                    {products.map((prod) => {
                        return (
                            <div
                                key={prod.id}
                                className="flex flex-col w-[80vw] text-sm items-center rounded-xl bg-light
                border border-solid border-light-grey bg-size-[200%_100%] hover:bg-rgba-gradient
                hover:animate-[subtle-shadow-wave_1s_ease-in-out_infinite]">
                                <ProductCard
                                    products={products}
                                    id={prod.id}
                                    name={prod.name}
                                    price={prod.price.base}
                                    features={prod.features}
                                    src={prod.img}
                                    selectedProducts={selectedProducts}
                                    setSelectedProducts={setSelectedProducts}
                                    isAnnual={isAnnual}
                                />
                                {prod.id === "web" && webSelected &&
                                    <WebFeatures
                                        pages={pages}
                                        setPages={setPages}
                                        languages={languages}
                                        setLanguages={setLanguages}
                                    />
                                }
                            </div>
                        );
                    })}
                </div>
                <div className="text-center text-dark-grey w-container">
                    <div className="md:float-right">
                        <p className="font-anton text-2xl pt-1 md:text-right">
                            Total: {total.toFixed(2)} €</p>
                        <CopyURLButton />
                    </div>
                </div>
            </Section>
            <Section bg="dark" padding="pb-4 2xl:py-6">
                <img src={FlowersL} className="2xl:hidden portrait:hidden w-full -mt-[9%]" />
                <img src={FlowersP} className="2xl:hidden landscape:hidden w-full -mt-[11%]" />
                <QuoteForm
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    phone={phone}
                    setPhone={setPhone}
                    onSubmit={handleAddQuote}
                />
                {quotes.length > 0 &&
                    <div className="m-auto text-light-grey flex flex-col gap-2 w-quotes-container pt-4 border-t-2 border-rgba-grey border-dotted">
                        <div className="flex flex-col sm:flex-row gap-1 text-xs font-semibold self-end items-end sm:items-center">
                            <input
                                type="search"
                                value={query}
                                placeholder="Filter by name"
                                aria-label="Filter by name"
                                className="bg-rgba-light border border-grey-2 rounded-lg text-sm p-0.5"
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <div className="flex flex-1 gap-1">
                                <SortButton
                                    onClick={handleSortByName}
                                    sort="Name"
                                    sortAsc={nameSortAsc}
                                    isActive={activeSort === "name"}
                                />
                                <SortButton
                                    onClick={handleSortByDate}
                                    sort="Date"
                                    sortAsc={dateSortAsc}
                                    isActive={activeSort === "date"}
                                />
                                <SortButton
                                    onClick={handleReset}
                                    sort="Reset"
                                />
                            </div>
                        </div>
                        {filteredQuotes.map((quote, index) => {
                            return (
                                <Quote
                                    key={index}
                                    name={quote.name}
                                    email={quote.email}
                                    phone={quote.phone}
                                    selectedProducts={quote.selectedProducts}
                                    total={quote.total}
                                    createdAt={quote.createdAt}
                                />
                            )
                        })}
                    </div>
                }
            </Section>
        </main >
    )
}