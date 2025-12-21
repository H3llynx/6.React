import type { Checkbox } from "./Checkbox.types"

export function Checkbox({ title, price }: Checkbox) {
    return (
        <div>
            <label htmlFor={title}>
                <h2>{title}</h2>
            </label>
            <h3>{price} €</h3>
            <input id={title} type="checkbox" />
        </div>
    )
}