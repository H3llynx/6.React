import type { WebFeaturesType } from "../../types";
import { WebFeature } from "../WebFeature/WebFeature";

export function WebFeatures({ pages, setPages, languages, setLanguages }: WebFeaturesType) {

    const addPages = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPages(Number(e.target.value))
    }

    const addLanguages = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLanguages(Number(e.target.value))
    }

    const remove = (feature: number, setter: (value: number) => void) => {
        if (feature <= 1) setter(1);
        else setter(feature - 1)
    }

    return (
        <div className="bg-teel text-light w-full px-1 py-1 rounded-b-xl">
            <WebFeature
                name={"page"}
                feature={pages}
                remove={() => { remove(pages, setPages) }}
                add={() => { setPages(pages + 1) }}
                addFeature={addPages}
            />
            <WebFeature
                name={"language"}
                feature={languages}
                remove={() => { remove(languages, setLanguages) }}
                add={() => { setLanguages(languages + 1) }}
                addFeature={addLanguages}
            />
        </div>
    )
}