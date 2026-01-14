type SwitcherType = {
    isEnabled: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Switcher({ isEnabled, onClick }: SwitcherType) {

    return (
        <button
            tabIndex={0}
            onClick={onClick}
            className="relative w-[60px] h-[30px] bg-teel rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-red focus-visible:ring-offset-2"
        >
            <span
                className={`absolute left-[3px] top-[3px] w-[24px] h-[24px] bg-white rounded-full transition-transform duration-300 ease-in-out ${isEnabled ? "translate-x-[30px]" : "translate-x-0"
                    }`}
            />
        </button>
    )
}