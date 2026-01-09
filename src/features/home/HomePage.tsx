import { Section } from "../../components/Section/Section";
import { Header } from "./components/Header/Header";

export function HomePage() {
    return (
        <>
            <Header />
            <Section>
                <h2>Boost Your Online Presence</h2>
                <p>We specialize in SEO campaigns to rank higher on Google, targeted ads for clicks and conversions, and custom website creation that's fast and mobile-ready. Select your package from our service cards and get started instantly.</p>
                <h2>Simple 3-Step Process</h2>
                <ul>
                    <li>Choose your service(s)</li>
                    <li>Review and confirm your order</li>
                    <li>Launch your campaign with expert support</li>
                </ul>
                <p>Ready to grow? Pick a service below!</p>
            </Section>
        </>
    )
}