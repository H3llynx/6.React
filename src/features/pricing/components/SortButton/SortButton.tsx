import ArrowDown from "../../../../assets/icons/arrow-down.svg?react"
import ArrowUp from "../../../../assets/icons/arrow-up.svg?react"
import type { SortButtonType } from "../../types"

export function SortButton({ sort, onClick, sortAsc, isActive }: SortButtonType) {
    return (
        <button
            tabIndex={0}
            onClick={onClick}
            className="cursor-pointer flex items-center justify-center w-[60px] h-[30px]"
        >
            {sort}
            {isActive && (sortAsc ? <ArrowUp /> : <ArrowDown />)}
        </button>
    )
}