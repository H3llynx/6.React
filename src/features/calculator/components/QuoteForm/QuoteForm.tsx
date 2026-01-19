
import { useCalculator } from "../../hooks/useCalculator";
import "./QuoteForm.css";


export function QuoteForm({ heading }: { heading: string }) {

    const { name, setName, email, setEmail, phone, setPhone, handleAddQuote } = useCalculator();

    return (
        <>
            <h2 className="font-anton text-center text-3xl relative z-10 text-shadow-[0_1px_5px_black]">{heading}</h2>
            <form
                onSubmit={handleAddQuote}
                className="flex flex-col md:flex-row flex-wrap gap-2 my-2 w-[80vw] md:w-container justify-center md:items-end">
                <label className="form-label">Name *
                    <input type="text" className="form-inputs" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label className="form-label">Email address *
                    <input type="email" className="form-inputs" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label className="form-label">Phone number *
                    <input type="tel" className="form-inputs" placeholder="Your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </label>
                <button tabIndex={0} className="cta bg-light text-dark px-2.5 self-center md:self-end">Request</button>
            </form>
        </>
    )
}