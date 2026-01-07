import CheckSvg from "../../../assets/icons/check.svg?react";
import type { ProductCheckbox } from "../../types";

export function ProductCheckbox({ products, id, name, price, src, selectedProducts, setSelectedProducts }: ProductCheckbox) {

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

    return (
        <div className="flex flex-col gap-1 items-center">
            <h2 className="font-anton text text-xl text-teel">{name}</h2>
            <h3>{price} €</h3>

            <img src={src} className="w-full" />
            <label key={id} htmlFor={id} className="flex self-end py-[0.7rem] px-[1.3rem]
                mr-2 mb-2 rounded-4xl bg-dark-grey text-light text-sm font-semibold
                cursor-pointer group has-checked:bg-grey hover:has-checked:bg-light-grey
                has-checked:text-teel">
                <input
                    key={id}
                    id={id}
                    onChange={(e) => toggleProduct(e)}
                    type="checkbox"
                    value={id}
                    className="opacity-0 absolute"
                />
                <span className="inline group-has-checked:hidden">Add</span>
                <span className="hidden group-has-checked:flex gap-0.5 items-center"><CheckSvg /> Added</span>
            </label>
        </div>
    )
}