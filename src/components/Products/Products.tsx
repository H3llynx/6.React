import { useState } from "react";
import products from "../../config/products.json";

export function Products() {
    const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
    const [total, setTotal] = useState<number>(0);

    const toggleProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
        let productList = [...selectedProducts];
        if (productList.includes(e.target.value)) {
            productList = productList.filter((product) => product !== e.target.value);
        } else {
            productList = [...productList, e.target.value];
        }
        setSelectedProducts(productList);
        setTotal(products
            .filter((product) => productList.includes(product.id))
            .reduce((acc, prod) => acc + prod.price, 0)
        );
    };

    return (
        <section className="flex flex-col gap-1">
            {products.map((prod) => {
                return (
                    <div className="grid grid-cols-3 w-[80vw] items-center p-2 rounded-lg border border-solid border-light hover:border-violet md:w-[600px]">
                        <label key={prod.id} htmlFor={prod.id}>
                            <h2>{prod.name}</h2>
                        </label>
                        <h3 className="text-center">{prod.price} €</h3>
                        <div className="flex gap-1 items-center justify-end">
                            <input
                                key={prod.id}
                                id={prod.id}
                                onChange={(e) => toggleProduct(e)}
                                type="checkbox"
                                value={prod.id}
                            />
                            Add
                        </div>
                    </div>
                );
            })}

            <div>Total: {total.toFixed(2)}</div>
        </section>
    )
}