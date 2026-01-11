import type { WebFeaturesType } from "../../types";
import "./WebFeatures.css";

export function WebFeatures({ pages, setPages, languages, setLanguages }: WebFeaturesType) {


    const addPages = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPages(Number(e.target.value))
    }

    const addLanguages = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLanguages(Number(e.target.value))
    }

    return (
        <div className="bg-teel text-light w-full px-1 py-1 rounded-b-xl">
            <div className="web-feat-container">
                Pages:
                <button
                    className="btn-plus-minus"
                    onClick={() => {
                        if (pages <= 1) setPages(1);
                        else setPages(pages - 1)
                    }}>-</button>
                <input type="number" className="web-feat-inputs" min="1" value={pages} onChange={(e) => addPages(e)} />
                <button
                    className="btn-plus-minus"
                    onClick={() => { setPages(pages + 1) }}
                >+</button>
            </div>
            <div className="web-feat-container">
                Languages:
                <button
                    className="btn-plus-minus"
                    onClick={() => {
                        if (languages <= 1) setLanguages(1);
                        else setLanguages(languages - 1)
                    }}>-</button>
                <input type="number" className="web-feat-inputs" min="1" value={languages} onChange={(e) => addLanguages(e)} />
                <button
                    className="btn-plus-minus"
                    onClick={() => { setLanguages(languages + 1) }}
                >+</button>
            </div>
        </div>
    )
}