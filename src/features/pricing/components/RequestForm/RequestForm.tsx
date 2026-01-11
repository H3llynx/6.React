
import type { RequestFormType } from "../../types";
import "./RequestForm.css";

export function RequestForm({
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    onSubmit
}: RequestFormType) {



    return (
        <>
            <h2 className="font-anton text-center text-3xl relative z-10 text-shadow-[0_1px_5px_black]">request a quote</h2>
            <form
                onSubmit={onSubmit}
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
                <button className="cta bg-light text-dark px-2.5 self-center">Request</button>
            </form>
        </>
    )
}