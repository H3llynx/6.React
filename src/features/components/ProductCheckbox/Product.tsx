import type { ProductProps } from "../../types"
export function ProductCheckbox({ id, name, price, onChange }: ProductProps) {
    return (
        <>
            <label key={id} htmlFor={id}>
                <h2>{name}</h2>
            </label>
            <h3 className="text-center">{price} €</h3>
            <div className="flex gap-1 items-center justify-end">
                <input
                    key={id}
                    id={id}
                    onChange={onChange}
                    type="checkbox"
                    value={id}
                />Add
            </div>
        </>
    )
}