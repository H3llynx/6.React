import { forwardRef } from "react"
import type { DialogType } from "../../types"

export const Dialog = forwardRef<HTMLDialogElement, DialogType>(({ close, feature }, ref) => {
    return (
        <dialog
            ref={ref}
            className="backdrop:bg-black/50 w-sm [[open]]:flex [[open]]:flex-col pt-1 pb-2 px-1 mx-auto my-auto rounded-2xl shadow-[0_0px_20px_rgba(0,0,0,0.6)]"
        >
            <button
                onClick={close}
                className="text-dark-grey hover:text-pink self-end"
                aria-label="Close dialog"
            >
                ✕
            </button>
            <div className="px-1 py-1">
                <h2 className="text-2xl font-anton text-teel mb-1">Number of {feature}s</h2>
                <p>Add the {feature}s your project will have. Each {feature} costs <strong>30€</strong>.</p>
            </div>
        </dialog>
    )
})