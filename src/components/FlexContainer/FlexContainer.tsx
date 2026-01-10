import type { ReactNode } from "react";

export function FlexContainer({ children }: { children: ReactNode }) {
    return (
        <div className="m-auto flex gap-3 md:gap-1 items-center justify-center flex-col md:flex-row w-container">
            {children}
        </div>
    )
}