import { CopyURLButton } from "../../../../components/CopyURLButton/CopyURLButton";
import products from "../../../../config/products.json";
import { useCalculator } from "../../hooks/useCalculator";
import { ProductCard } from "../ProductCard/ProductCard";
import { WebFeatures } from "../WebFeatures/WebFeatures";

export function ProductGroup() {
    const { webSelected, total } = useCalculator();

    return (
        <>
            <div className="m-auto flex gap-3 md:gap-1 items-center justify-center
                flex-col md:flex-row w-container">
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
                                price={prod.price.base}
                                features={prod.features}
                                src={prod.img}
                            />
                            {prod.id === "web" && webSelected &&
                                <WebFeatures />
                            }
                        </div>
                    );
                })}
            </div>
            <div className="text-center text-dark-grey w-container">
                <div className="md:float-right">
                    <p className="font-anton text-2xl pt-1 md:text-right">
                        Total: {total.toFixed(2)} €</p>
                    <CopyURLButton />
                </div>
            </div>
        </>
    )
}