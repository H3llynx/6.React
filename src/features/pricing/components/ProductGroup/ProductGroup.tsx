import { Section } from "../../../../components/Section/Section";
import products from "../../../../config/products.json";
import type { ProductGroupType } from "../../types";
import { ProductCard } from "../ProductCard/ProductCard";
import { Total } from "../Total/Total";
import { WebFeatures } from "../WebFeatures/WebFeatures";

export function ProductGroup({
    selectedProducts,
    setSelectedProducts,
    pages,
    setPages,
    languages,
    setLanguages,
    total
}: ProductGroupType) {

    const isWebSelected = selectedProducts.some(product => product.id === "web");

    return (
        <Section bg="grey" padding="py-8">
            <div className="m-auto flex gap-3 md:gap-1 items-center justify-center flex-col md:flex-row w-container">
                {products.map((prod) => {
                    return (
                        <div
                            key={prod.id}
                            className="flex flex-col w-[80vw] text-sm items-center rounded-xl bg-light
                border border-solid border-light-grey bg-size-[200%_100%] hover:bg-rgba-gradient
                hover:animate-[subtle-shadow-wave_1s_ease-in-out_infinite]">
                            <ProductCard
                                products={products}
                                id={prod.id}
                                name={prod.name}
                                price={prod.price}
                                features={prod.features}
                                src={prod.img}
                                selectedProducts={selectedProducts}
                                setSelectedProducts={setSelectedProducts}
                            />
                            {prod.id === "web" && isWebSelected &&
                                <WebFeatures
                                    pages={pages}
                                    setPages={setPages}
                                    languages={languages}
                                    setLanguages={setLanguages}
                                />
                            }
                        </div>
                    );
                })}
            </div>
            <Total total={total} />
        </Section>
    );
}