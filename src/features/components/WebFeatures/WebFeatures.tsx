import type { WebFeatures } from "../../types";
import "./WebFeatures.css";

export function WebFeatures({ pages, setPages, languages, setLanguages }: WebFeatures) {


    const addPages = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPages(Number(e.target.value))
    }

    const addLanguages = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLanguages(Number(e.target.value))
    }

    return (
        <>
            <div className="p-0.5 pt-1 col-span-full text-right">
                <label className="flex gap-1 items-center justify-end">
                    Pages:
                    <button className="btn-plus-minus"
                        onClick={() => {
                            if (pages <= 1) setPages(1);
                            else setPages(pages - 1)
                        }}>-</button>
                    <input type="number" className="web-feat-inputs" min="1" value={pages} onChange={(e) => addPages(e)} />
                    <button className="btn-plus-minus" onClick={() => { setPages(pages + 1) }}>+</button>
                </label>
            </div>
            <div className="p-0.5 col-span-full text-right">
                <label className="flex gap-1 items-center justify-end">
                    Languages:
                    <button className="btn-plus-minus"
                        onClick={() => {
                            if (languages <= 1) setLanguages(1);
                            else setLanguages(languages - 1)
                        }}>-</button>
                    <input type="number" className="web-feat-inputs" min="1" value={languages} onChange={(e) => addLanguages(e)} />
                    <button className="btn-plus-minus" onClick={() => { setLanguages(languages + 1) }}>+</button>
                </label>
            </div>
        </>
    )
}