import { useEffect, useState } from "react";
import products from "../../../config/products.json";
import type { Product } from "../../types";
import { ProductCheckbox } from "../ProductCheckbox/ProductCheckbox";
import { WebFeatures } from "../WebFeatures/WebFeatures";

export function ProductGroup() {
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [pages, setPages] = useState<number>(1);
    const [languages, setLanguages] = useState<number>(1);

    const isWebSelected = selectedProducts.some(product => product.id === "web");

    const toggleProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
        const productId = e.target.value;
        let productList = [...selectedProducts];
        if (productList.some(product => product.id === productId)) {
            productList = productList.filter((product) => product.id !== productId);
        } else {
            const productToAdd = products.find(p => p.id === productId);
            if (productToAdd) {
                productList = [...productList, productToAdd];
            }
        }
        setSelectedProducts(productList);
    };

    useEffect(() => {
        const productsTotal = selectedProducts.reduce((acc, prod) => acc + prod.price, 0);
        const pagesTotal = isWebSelected ? pages * 30 : 0;
        const languagesTotal = isWebSelected ? languages * 30 : 0;

        setTotal(productsTotal + pagesTotal + languagesTotal);
    }, [selectedProducts, pages, languages, isWebSelected]);

    return (
        <section className="flex flex-col gap-2 pt-4 relative">
            <div className="m-auto flex gap-1 items-start justify-center w-full flex-col xl:flex-row xl:w-[1200px] pb-9">
                {products.map((prod) => {
                    return (
                        <div className="flex flex-col w-[80vw] items-center pt-2 rounded-xl bg-light
                    border border-solid border-light-grey bg-size-[200%_100%] hover:bg-rgba-gradient
                    hover:animate-[subtle-shadow-wave_1s_ease-in-out_infinite]">
                            <ProductCheckbox
                                id={prod.id}
                                name={prod.name}
                                price={prod.price}
                                src={prod.img}
                                onChange={(e) => toggleProduct(e)}
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
            </div>
            <div className="font-anton text-2xl py-1.5 px-4 text-end bg-light-grey bg-rgba-gradient
            bg-size-[200%_100%] shadow-[5px_5px_20px_rgba(0,0,0,0.4)] text-dark-grey
            fixed bottom-0 left-0 w-full animate-[move-overlay_15s_ease-out_infinite]">Total: {total.toFixed(2)} €</div>
        </section>
    )
}