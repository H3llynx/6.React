import { useEffect, useState } from "react";
import products from "../../../config/products.json";
import type { Product } from "../../types";
import { ProductCheckbox } from "../ProductCheckbox/Product";
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
        <section className="flex flex-col gap-1">
            {products.map((prod) => {
                return (
                    <div className="grid grid-cols-3 w-[80vw] items-center p-2 rounded-lg border border-solid border-light hover:border-violet md:w-[600px]">
                        <ProductCheckbox
                            id={prod.id}
                            name={prod.name}
                            price={prod.price}
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

            <div>Total: {total.toFixed(2)}</div>
        </section>
    )
}