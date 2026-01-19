import products from "../../../../config/products.json";
import { useCalculator } from "../../hooks/UseCalculator";
import { WebFeature } from "../WebFeature/WebFeature";

export function WebFeatures() {

    const { pages, setPages, languages, setLanguages } = useCalculator();


    const web = products.find(product => product.id === "web")!;

    const typePages = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPages(Number(e.target.value))
    }

    const typeLanguages = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                price={web.price.page}
                remove={() => { remove(pages, setPages) }}
                add={() => { setPages(pages + 1) }}
                typeFeature={typePages}
            />
            <WebFeature
                name={"language"}
                feature={languages}
                price={web.price.language}
                remove={() => { remove(languages, setLanguages) }}
                add={() => { setLanguages(languages + 1) }}
                typeFeature={typeLanguages}
            />
        </div>
    )
}