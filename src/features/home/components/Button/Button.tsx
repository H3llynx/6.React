import type { ReactNode } from "react";

export function Button({ children }: { children: ReactNode }) {
    return (
        <button className="flex py-[0.7rem] px-[1.3rem] rounded-4xl bg-dark-grey
        text-light text-sm font-semibold cursor-pointer self-end 
        hover:bg-grey hover:text-teel">
            {children}
        </button>
    )
}