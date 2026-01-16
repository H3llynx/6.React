import type { ReactNode } from "react";

export function List({ step, children }: { step: number, children: ReactNode }) {
    return (
        <div className="flex flex-1 gap-1 sm:flex-col items-center justify-start rounded-xl
        border border-transparent sm:justify-between md:py-1.5 sm:gap-0.5
        hover:bg-rgba-grey hover:border-grey p-0.5 hover:text-grey-2">
            <p className="w-3 shrink-0 aspect-square flex justify-center items-center text-bold
            text-3xl rounded-full border-3 sm:mx-1">{step}</p>
            <p className="text-xs text-left sm:text-md sm:text-center font-semibold">{children}</p>
        </div>
    )
}