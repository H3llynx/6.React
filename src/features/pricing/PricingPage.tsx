import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { ProductGroup } from "./components/ProductGroup/ProductGroup";
import { RequestForm } from "./components/RequestForm/RequestForm";
import type { Product, Quote } from "./types";

export function PricingPage() {
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [pages, setPages] = useState<number>(1);
    const [languages, setLanguages] = useState<number>(1);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [quotes, setQuotes] = useState<Quote[]>([]);

    const web = selectedProducts.find(p => p.id === "web");

    useEffect(() => {
        const productsTotal = selectedProducts.reduce((acc, prod) => acc + prod.price, 0);
        const pagesTotal = web ? pages * 30 : 0;
        const languagesTotal = web ? languages * 30 : 0;

        setTotal(productsTotal + pagesTotal + languagesTotal);
    }, [selectedProducts, pages, languages, web]);

    const handleAddQuote = (e: React.FormEvent) => {
        e.preventDefault();
        const newQuote: Quote = {
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
        console.log(newQuote)

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
            <RequestForm
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
                onSubmit={handleAddQuote}
            />
        </main>
    )
}