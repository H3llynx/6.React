import { Header } from "./components/Header/Header";
import { ProductGroup } from "./components/ProductGroup/ProductGroup";
import { RequestForm } from "./components/RequestForm/RequestForm";

export function PricingPage() {
    return (
        <main className="h-full bg-grey flex flex-col">
            <Header />
            <ProductGroup />
            <RequestForm />
        </main>
    )
}