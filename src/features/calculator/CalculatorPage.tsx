import FlowersL from "../../assets/flowers-landscape.png";
import FlowersP from "../../assets/flowers-portrait.png";
import { Header } from "../../components/Header/Header";
import { Section } from "../../components/Section/Section";
import { CalculatorSwitcher } from "./components/CalculatorSwitcher/CalculatorSwitcher";
import { ProductGroup } from "./components/ProductGroup/ProductGroup";
import { QuoteForm } from "./components/QuoteForm/QuoteForm";
import { QuoteList } from "./components/QuoteList/QuoteList";
import { CalculatorProvider } from "./contexts/CalculatorProvider";

export function CalculatorPage() {
    return (
        <CalculatorProvider>
            <main className="h-full bg-grey flex flex-col">
                <Header />
                <Section padding="pt-5 pb-8">
                    <div className="flex flex-col items-center justify-center">
                        <CalculatorSwitcher />
                    </div>
                    <ProductGroup />
                </Section>
                <Section bg="dark" padding="pb-4 2xl:py-6">
                    <img src={FlowersL} className="2xl:hidden portrait:hidden w-full -mt-[9%]" />
                    <img src={FlowersP} className="2xl:hidden landscape:hidden w-full -mt-[11%]" />
                    <QuoteForm heading="Request Quote" />
                    <QuoteList />
                </Section>
            </main >
        </CalculatorProvider>
    )
}