import AddSvg from "../../../../assets/icons/add.svg?react";
import CheckSvg from "../../../../assets/icons/check.svg?react";
import type { ProductCardType } from "../../types";

export function ProductCard({
    products,
    id,
    name,
    price,
    features,
    src,
    selectedProducts,
    setSelectedProducts,
    isAnnual
}: ProductCardType) {

    const isChecked = selectedProducts.some(product => product.id === id);

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
        <div className="flex flex-col gap-1 items-center pt-2 relative">
            <h2 className="font-anton text text-2xl text-teel">{name}</h2>
            <span className="absolute top-[-25px] right-[-15px] text-md text-light
            p-1 font-semibold flex justify-center items-center aspect-square
            bg-price-label bg-cover">
                {isAnnual ? price * 0.8 : price}
                <span className="ml-[3px]">€</span></span>
            <ul className="px-1">
                {features.map((feature, index) => {
                    return (
                        <li
                            key={index}
                            className="flex text-grey-2 leading-[1.6]">
                            <CheckSvg className="w-[19px] h-[19px]" />
                            {feature}</li>
                    )
                })}
            </ul>
            <img src={src} className="w-full" />
            <label
                key={id}
                htmlFor={id}
                className="cta self-end mr-2 mb-2 group has-checked:bg-grey
            hover:has-checked:bg-light-grey has-checked:text-teel
            has-focus-visible:outline-2
          has-focus-visible:outline-orange
            has-focus-visible:outline-offset-2"
            >
                <input
                    id={id}
                    onChange={(e) => toggleProduct(e)}
                    type="checkbox"
                    value={id}
                    className="sr-only"
                    checked={isChecked}
                    tabIndex={0}
                />
                <span className="flex gap-0.5 items-center group-has-checked:hidden"><AddSvg /> Add</span>
                <span className="hidden group-has-checked:flex gap-0.5 items-center"><CheckSvg /> Added</span>
            </label>
        </div>
    )
}