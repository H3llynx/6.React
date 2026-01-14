import ArrowDown from "../../../../assets/icons/arrow-down.svg?react"
import ArrowUp from "../../../../assets/icons/arrow-up.svg?react"
import type { SortButtonType } from "../../types"

export function SortButton({ sort, onClick, sortAsc, isActive }: SortButtonType) {
    return (
        <button
            tabIndex={0}
            onClick={onClick}
            className="cursor-pointer flex items-center justify-center px-0.5 h-[30px] rounded-lg hover:bg-[rgba(0,0,0,0.1)]"
        >
            {sort}
            {isActive && (sortAsc ? <ArrowUp /> : <ArrowDown />)}
        </button>
    )
}