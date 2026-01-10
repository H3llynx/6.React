import type { ReactNode } from "react";

export function List({ step, children }: { step: number, children: ReactNode }) {
    return (
        <div className="flex flex-col items-center justify-start gap-0.5 text-center w-[31%]">
            <p className="mx-1 w-3 xl:w-4 h-3 xl:h-4 text-bold text-3xl xl:text-4xl rounded-full
            border-3 xl:border-4">{step}</p>
            <p className="text-xs sm:text-md font-semibold">{children}</p>
        </div>
    )
}