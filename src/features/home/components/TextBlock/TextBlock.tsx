import type { ReactNode } from "react";

export function TextBlock({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col backdrop-blur bg-rgba-grey bg-rgba-gradient-3 bg-size-[200%_100%]
        shadow-[0_0px_20px_rgba(0,0,0,0.6)] animate-[move-overlay_5s_ease-out_infinite]
        rounded-xl p-1.5 w-full sm:w-[70%] md:w-[50%] border border-dark-grey text-sm">
            {children}
        </div>
    )
}