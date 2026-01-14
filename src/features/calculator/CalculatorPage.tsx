import { useEffect, useState } from "react";
import FlowersL from "../../assets/flowers-landscape.png";
import FlowersP from "../../assets/flowers-portrait.png";
import { Section } from "../../components/Section/Section";
import products from "../../config/products.json";
import { Header } from "./components/Header/Header";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { QuoteBlock } from "./components/QuoteBlock/QuoteBlock";
import { QuoteForm } from "./components/QuoteForm/QuoteForm";
import { SortButton } from "./components/SortButton/SortButton";
import { Total } from "./components/Total/Total";
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

    const isWebSelected = selectedProducts.find(p => p.id === "web");

    useEffect(() => {
        handleReset();
    }, []);

    useEffect(() => {
        const productsTotal = selectedProducts.reduce((acc, prod) => acc + prod.price, 0);
        const pagesTotal = isWebSelected ? pages * 30 : 0;
        const languagesTotal = isWebSelected ? languages * 30 : 0;

        setTotal(productsTotal + pagesTotal + languagesTotal);
    }, [selectedProducts, pages, languages, isWebSelected]);

    useEffect(() => {
        localStorage.setItem("quotes", JSON.stringify(quotes));
    }, [quotes]);

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

        if (isWebSelected) {
            isWebSelected.pages = pages;
            isWebSelected.languages = languages;
        }
        if (selectedProducts.length === 0) {
            alert("no product selected");
            return
        }
        setQuotes(prev => {
            const updatedQuotes = [...prev, newQuote];
            return updatedQuotes.sort((a, b) =>
                new Date(b.createdAt).getTime()
                - new Date(a.createdAt).getTime())
        });
        setSelectedProducts([]);

        setName("");
        setEmail("");
        setPhone("");
    }

    const handleSortByName = () => {
        const newSortOrder = !nameSortAsc;
        const sorted = [...quotes].sort((a, b) => {
            return nameSortAsc
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name);
        });
        setQuotes(sorted);
        setNameSortAsc(newSortOrder);
        setActiveSort("name")
    };

    const handleReset = () => {
        const sorted = [...quotes].sort((a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        setQuotes(sorted);
        setActiveSort(null);
        setFilteredQuotes(quotes);
    }

    const handleSortByDate = () => {
        const newSortOrder = !dateSortAsc
        const sorted = [...quotes].sort((a, b) => {
            return dateSortAsc
                ? new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
                : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
        setQuotes(sorted);
        setDateSortAsc(newSortOrder);
        setActiveSort("date")
    };

    function handleFilterQuote(e: React.ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value)
        const filter = e.target.value.trim();
        if (filter === "") {
            setFilteredQuotes(quotes);
        } else {
            const searchedQuote = quotes.find(quote =>
                quote.name.toLowerCase().includes(filter))
            if (searchedQuote) {
                setFilteredQuotes([searchedQuote]);
            };
        }
    };

    return (
        <main className="h-full bg-grey flex flex-col">
            <Header />
            <Section padding="py-8">
                <div className="m-auto flex gap-3 md:gap-1 items-center justify-center flex-col md:flex-row w-container">
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
                                    price={prod.price}
                                    features={prod.features}
                                    src={prod.img}
                                    selectedProducts={selectedProducts}
                                    setSelectedProducts={setSelectedProducts}
                                />
                                {prod.id === "web" && isWebSelected &&
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
                <Total total={total} />
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
                    <div className="m-auto text-light-grey flex flex-col gap-2 items-center justify-center w-quotes-container pt-4 border-t-2 border-rgba-grey border-dotted">
                        <div className="flex text-xs font-semibold self-end items-center">
                            <input
                                type="search"
                                value={query}
                                placeholder="Filter by name"
                                aria-label="Filter by name"
                                className="bg-rgba-light border border-grey-2 rounded-lg text-sm p-0.5 mr-2"
                                onChange={handleFilterQuote}
                            />
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
                        {filteredQuotes.map((quote, index) => {
                            return (
                                <QuoteBlock
                                    key={index}
                                    name={quote.name}
                                    email={quote.email}
                                    phone={quote.phone}
                                    selectedProducts={quote.selectedProducts}
                                    total={quote.total}
                                />
                            )
                        })}
                        <button onClick={() => setQuotes([])}>Reset</button>
                    </div>
                }
            </Section>
        </main >
    )
}