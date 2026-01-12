import { useEffect, useState } from "react";
import FlowersL from "../../assets/flowers-landscape.png";
import FlowersP from "../../assets/flowers-portrait.png";
import { Section } from "../../components/Section/Section";
import { Header } from "./components/Header/Header";
import { ProductGroup } from "./components/ProductGroup/ProductGroup";
import { QuoteList } from "./components/QuoteList/QuoteList";
import { RequestForm } from "./components/RequestForm/RequestForm";
import type { ProductType, QuoteType } from "./types";

export function PricingPage() {
    const [selectedProducts, setSelectedProducts] = useState<ProductType[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [pages, setPages] = useState<number>(1);
    const [languages, setLanguages] = useState<number>(1);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [quotes, setQuotes] = useState<QuoteType[]>(JSON.parse(localStorage.getItem("quotes") || "[]"));

    const web = selectedProducts.find(p => p.id === "web");

    useEffect(() => {
        const productsTotal = selectedProducts.reduce((acc, prod) => acc + prod.price, 0);
        const pagesTotal = web ? pages * 30 : 0;
        const languagesTotal = web ? languages * 30 : 0;

        setTotal(productsTotal + pagesTotal + languagesTotal);
    }, [selectedProducts, pages, languages, web]);

    useEffect(() => {
        localStorage.setItem("quotes", JSON.stringify(quotes))
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

        if (web) {
            web.pages = pages;
            web.languages = languages;
        }
        if (selectedProducts.length === 0) {
            alert("no product selected");
            return
        }
        setQuotes([...quotes, newQuote]);
        setSelectedProducts([]);

        setName("");
        setEmail("");
        setPhone("");
    }

    return (
        <main className="h-full bg-grey flex flex-col">
            <Header />
            <ProductGroup
                selectedProducts={selectedProducts}
                setSelectedProducts={setSelectedProducts}
                total={total}
                pages={pages}
                setPages={setPages}
                languages={languages}
                setLanguages={setLanguages}
            />
            <Section bg="dark" padding="pb-4 2xl:py-6">
                <img src={FlowersL} className="2xl:hidden portrait:hidden w-full -mt-[9%]" />
                <img src={FlowersP} className="2xl:hidden landscape:hidden w-full -mt-[11%]" />
                <RequestForm
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    phone={phone}
                    setPhone={setPhone}
                    onSubmit={handleAddQuote}
                />
                {quotes.length > 0 && <>
                    <QuoteList quotes={quotes} />
                    <button onClick={() => setQuotes([])}>Reset</button>
                </>}
            </Section>
        </main >
    )
}