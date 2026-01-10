import { Section } from "../../../../components/Section/Section";
import "./RequestForm.css";

export function RequestForm() {
    return (
        <Section bg="dark" padding="py-4">
            <h2 className="font-anton text-center text-3xl">request a quote</h2>
            <form className="flex flex-col md:flex-row flex-wrap gap-2 w-[80vw] md:w-container justify-center md:items-end my-2">
                <label className="form-label">Name *
                    <input type="text" className="form-inputs" placeholder="Your name" required />
                </label>
                <label className="form-label">Email address *
                    <input type="email" className="form-inputs" placeholder="Your email" required />
                </label>
                <label className="form-label">Phone number *
                    <input type="tel" className="form-inputs" placeholder="Your phone number" required />
                </label>
                <button className="cta bg-light text-dark px-2.5">Request</button>
            </form>
        </Section>
    )
}