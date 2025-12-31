import type { WebFeatures } from "../../types";

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
                <label>
                    Pages:
                    <input type="number" className="bg-grey p-[5px] ml-1 rounded-sm" min="1" value={pages} onChange={(e) => addPages(e)} />
                </label>
            </div>
            <div className="p-0.5 col-span-full text-right">
                <label>
                    Languages:
                    <input type="number" className="bg-grey p-[5px] ml-1 rounded-sm" min="1" value={languages} onChange={(e) => addLanguages(e)} />
                </label>
            </div>
        </>
    )
}