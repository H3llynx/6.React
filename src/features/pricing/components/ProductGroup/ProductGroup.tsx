import { useEffect, useState } from "react";
import { FlexContainer } from "../../../../components/FlexContainer/FlexContainer";
import { Section } from "../../../../components/Section/Section";
import products from "../../../../config/products.json";
import type { Product } from "../../types";
import { ProductCard } from "../ProductCard/ProductCard";
import { Total } from "../Total/Total";
import { WebFeatures } from "../WebFeatures/WebFeatures";

export function ProductGroup() {
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [pages, setPages] = useState<number>(1);
    const [languages, setLanguages] = useState<number>(1);

    const isWebSelected = selectedProducts.some(product => product.id === "web");

    useEffect(() => {
        const productsTotal = selectedProducts.reduce((acc, prod) => acc + prod.price, 0);
        const pagesTotal = isWebSelected ? pages * 30 : 0;
        const languagesTotal = isWebSelected ? languages * 30 : 0;

        setTotal(productsTotal + pagesTotal + languagesTotal);
    }, [selectedProducts, pages, languages, isWebSelected]);

    return (
        <Section bg="grey" padding="pt-6 pb-3">
            <FlexContainer>
                {products.map((prod) => {
                    return (
                        <div className="flex flex-col w-[80vw] text-sm items-center rounded-xl bg-light
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
                                />}

                        </div>
                    );
                })}
            </FlexContainer>
            <Total total={total} />
        </Section>
    )
}