import CheckSvg from "../../../../assets/icons/check.svg?react";
import EmailSvg from "../../../../assets/icons/email.svg?react";
import PhoneSvg from "../../../../assets/icons/phone.svg?react";
import type { QuoteBlockType } from "../../types";

export function QuoteBlock({ name, email, phone, selectedProducts, total }: QuoteBlockType) {
    return (
        <div className="flex flex-col md:flex-row gap-1 justify-between md:items-end w-full md:w-[80%] xl:w-[50vw] bg-rgba-grey bg-rgba-gradient bg-size-[200%_100%]
        shadow-[0_0px_20px_rgba(0,0,0,0.4)] animate-[move-overlay_5s_ease-out_infinite]
        rounded-2xl p-1.5 border border-grey-2 text-sm">
            <div className="md:w-[30%]">
                <h2 className="font-anton text-xl text-teel">{name}</h2>
                <ul className="flex flex-wrap md:flex-col mt-0.5 items-center md:items-start gap-0.5 md:gap-0">
                    <li className="text-grey-2 flex gap-[5px] items-center"><EmailSvg className="w-1 text-teel" />{email}</li>
                    <li className="text-grey-2 flex gap-[5px] items-center"><PhoneSvg className="w-1 text-teel" />{phone}</li>
                </ul>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row grow justify-between">
                <div className="flex flex-col">
                    <h3 className="font-semibold text-md mb-0.5">Requested services:</h3>
                    {selectedProducts.map((product, index) => {
                        return (
                            <p key={index} className="flex gap-0.5 items-end">
                                <CheckSvg className="text-teel w-[19px] h-[19px]" />
                                {product.name} {product.id === "web" &&
                                    <span className="text-teel font-semibold text-xs">
                                        (pages: {product.pages},
                                        languages: {product.languages})
                                    </span>}
                            </p>
                        )
                    })}
                </div>
                <div className="flex flex-col self-end">
                    <p>Total:</p>
                    <h3 className="font-anton text-2xl text-dark-grey">{total.toFixed(2)} €</h3>
                </div>
            </div>
        </div>
    )
}