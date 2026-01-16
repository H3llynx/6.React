import { useState } from "react";

export function CopyURLButton() {
    const [isShowing, setIsShowing] = useState(false)
    const btnText = isShowing ? "URL copied to clipboard!" : "Copy URL";

    return (
        <div className="relative">
            <button
                tabIndex={0}
                onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    setIsShowing(true);
                    setTimeout(() => {
                        setIsShowing(false);
                    }, 2000)
                }}
                className={`${!isShowing
                    ? "hover:underline decoration-dotted underline-offset-3"
                    : "text-teel"} cursor-pointer text-sm font-medium text-grey-3`}
            >
                {btnText}
            </button>
        </div>
    )
}